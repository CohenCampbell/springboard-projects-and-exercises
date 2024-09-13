const { router, route } = require("../app");
const db = require("../db");
const ExpressError = require("../expressError");
const { ensureLoggedIn, ensureCorrectUser } = require("../middleware/auth");
const User = require("../models/user");
/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/
router.get("/", ensureLoggedIn, async function (req, res, next){
    try{
        let users = await User.all();
        return res.json({users});
    } catch(e){
        return next(e);
    }
});

/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/
router.get("/:username", ensureCorrectUser, async function (req, res, next){
    try{
        let user = await User.get(req.params.username);
        return res.json({user})
    } catch(e){
        return next(e);
    }
});

/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
router.get("/username/to", async function (req, res, next){
    try{
        let messages = await User.messagesTo(req.params.username);
        return res.json({messages});
    } catch(e) {
        return next(e);
    }
});

/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
router.get("/:username/from", async function (req, res, next){
    try {
        let messages = await User.messagesFrom(req.params.username);
        return res.json({messages});
      } catch (err) {
        return next(err);
      }
});

module.exxports = router;