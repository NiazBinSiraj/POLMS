const User = require("../models/User");

async function checkLoginCredentials(req, res){
    try {
        cred = {
            user_id: req.body.id,
            password: req.body.password
        }
        const result = await User.getByID(cred);
        if(result.data.length == 0)
        {
            res.json({
                status: 404,
                message: "user id not found"
            });
        }
        else if(result.data[0].password != cred.password)
        {
            res.json({
                status: 403,
                message: "wrong password"
            });
        }
        else
        {
            res.json({
                status: 200,
                message: "success",
                user_type: result.data[0].user_type,
                user_name: result.data[0].first_name + " " + result.data[0].last_name
            });
        }
        console.log("Called 'checkLoginCredentials()'");
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {checkLoginCredentials};