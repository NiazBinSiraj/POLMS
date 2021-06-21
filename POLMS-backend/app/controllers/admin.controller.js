const User = require("../models/User");
const Officer = require("../models/Officer");
const oracledb = require('oracledb');
const dbConfig = require("../config/db.config");

async function getAll(req, res) {
    try {
        //Connecting to the OracleDB
        
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST + ":" + dbConfig.PORT
        });
        console.log("database connected");

        //Quering
        const result = await connection.execute(
            `SELECT *
            FROM user_info, officer
            WHERE user_info.user_id = officer.user_id AND user_info.user_type = 'Officer'`
        );
        console.log("admins data retrived successfully");

        //Send result to the frontend
        res.json({
            status: 200,
            result,
            message: "success"
        });
    } catch (error) {
        console.error(error.message);
    } finally {
        try {
          if(connection){
            await connection.close();
            console.log('close connection success');
          }
        } catch (err) {
          console.error(err.message);
        }
    }
}

async function getByID(req, res) {
    try {
        let data = [];
        let admin = {};
        admin.user_id = req.params.id;
        let user = await User.getByID(admin);
        admin.rank = user.data[0].rank;
        admin.first_name = user.data[0].first_name;
        admin.last_name = user.data[0].last_name;
        admin.unit = user.data[0].unit;
        admin.subunit = user.data[0].subunit;
        admin.contact = user.data[0].contact;
        admin.password = user.data[0].password;

        let officer = await Officer.getByID(admin);
        admin.ba_no = officer.data[0].ba_no;
        admin.coro_appointment = officer.data[0].coro_appointment;
        admin.coro_no = officer.data[0].coro_no;
        admin.coro_date = officer.data[0].coro_date;
        admin.coro_expire = officer.data[0].coro_expire;

        data.push(admin);

        res.json({
            status: 200,
            data,
            message: "success"
        });
        console.log("Called 'admin.getByID()'");
    } catch (error) {
        console.error(error.message);
    }
}

async function create(req, res) {
    try {
        const user_count = await User.count({ user_id: req.body.user_id });
        if (user_count.count != 0) {
            res.json({
                status: 409,
                message: "already exists"
            });
            return;
        }

        let user = {};
        user.user_id = req.body.user_id;
        user.rank = req.body.rank;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.unit = req.body.unit;
        user.subunit = req.body.subunit;
        user.password = req.body.password;
        user.user_type = req.body.user_type;
        user.contact = req.body.contact;

        let officer = {};
        officer.ba_no = req.body.ba_no;
        officer.user_id = req.body.user_id;
        officer.coro_appointment = req.body.coro_appointment;
        officer.coro_no = req.body.coro_no;
        officer.coro_date = req.body.coro_date;
        officer.coro_expire = req.body.coro_expire;

        res1 = await User.insert(user);
        res2 = await Officer.insert(officer);

        if (res1.status == 201 && res2.status == 201) {
            res.json({
                status: 201,
                message: "success"
            });
        }
        else {
            res.json({
                status: 502,
                message: "failed"
            });
        }
        console.log("Called 'admin.create()'");
    } catch (error) {
        console.error(error.message);
    }
}

async function update(req, res) {
    try {
        let user = {};
        user.user_id = req.body.user_id;
        user.rank = req.body.rank;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.unit = req.body.unit;
        user.subunit = req.body.subunit;
        user.contact = req.body.contact;
        user.password = req.body.password;

        let officer = {};
        officer.ba_no = req.body.ba_no;
        officer.user_id = req.body.user_id;
        officer.coro_appointment = req.body.coro_appointment;
        officer.coro_no = req.body.coro_no;
        officer.coro_date = req.body.coro_date;
        officer.coro_expire = req.body.coro_expire;

        result1 = await User.update(user);
        result2 = await Officer.update(officer);

        if (result1.status == 200 && result2.status == 200) {
            res.json({
                status: 201,
                message: "success"
            });
        }
        else {
            res.json({
                status: 502,
                message: "failed"
            });
        }
        console.log("Called 'admin.update()'");
    } catch (error) {
        console.error(error.message);
    }
}

async function remove(req, res) {
    try {
        result1 = await User.remove({ user_id: req.body.user_id });
        result2 = await Officer.remove({ user_id: req.body.user_id });

        if (result1.status == 200 & result2.status == 200) {
            res.json({
                status: 200,
                message: "success"
            });
        }
        else {
            res.json({
                status: 502,
                message: "failed"
            });
        }
        console.log("Called 'admin.remove()'");
    } catch (error) {
        console.error(error.message);
    }
}

async function changePassword(req, res) {
    try {
        //Connecting to the OracleDB
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST + ":" + dbConfig.PORT
        });
        console.log("database connected");

        //Quering
        const result = await connection.execute(
            `UPDATE user_info
            SET
            password = :password`,
            [req.body.password],
            { autoCommit: true }
        );
        console.log("admin password changed successfully");

        //Send result to the frontend
        res.json({
            status: 200,
            message: "success"
        });
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = { getAll, getByID, create, update, remove, changePassword };