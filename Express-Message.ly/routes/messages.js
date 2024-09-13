const { router, route } = require("../app");
const db = require("../db");
const ExpressError = require("../expressError");
const { ensureCorrectUser, ensureLoggedIn } = require("../middleware/auth");
const Message = require("../models/message");

/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/
router.get("/:id", ensureLoggedIn, async function (req, res, next){
    try{
        let message = await Message.get(req.params.id);
        if(req.user.username !== message.to_user || message.from_user){
            return next({ status: 401, message: "Unauthorized" });
        }
        return res.json({message});
    } catch(e) {
        return next(e);
    }
});

/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/
route.post("/", ensureLoggedIn, async function (req, res, next){
    try{
        if(req.user.username !== message.to_user || message.from_user){
            return next({ status: 401, message: "Unauthorized" });
        }
        let message = await Message.create(req.user.username, req.body.to_user, req.body.body);
        return res.json({message});
    } catch(e) {
        return next(e);
    }
});

/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/
route.post("/:id/read", ensureLoggedIn, async function (req, res, next){
    try{
        let message = await Message.get(req.params.id);
        if(req.user.username !== message.to_user || message.from_user){
            return next({ status: 401, message: "Unauthorized" });
        }
        let readMessage = await Message.readMessage(req.params.id);
        return res.json({readMessage});
        
    } catch(e) {
        return next(e);
    }
});

module.exxports = router;