BUG #1
route/auth.js, post login returns a token with inncorrect password.
to fix add await on line 42, and await for User.authenticate.

BUG #2
(DELETE) /user/:username will return a json obj saying a user was deleted evevn if the username was not found
to fix add a user.get(username) and a if statement to check for a user, else throw a 404

BUG#3
(PATCH) /users/:username will return 200 if token does not match user, and user is not admin (should be 401).
remove admin and correct user middleware, (it's already checked for in the function), add 
if(fields.admin && !req.curr_admin){
      throw new ExpressError("Only admins can change admin status", 401)
    }
to check for admin field. 

BUG#4
(GET) /users/:kusername will not return a 404 if no user is found, it
will instead return an empty obj.
to fix add return on line 116, in models/user.js to return the new express error

BUG#5 
Could not find bug #5

BUG#6
The hint says there is a bug in middleware/user.js, function authUser()
couldn't find it