const User = require("../models/User");
const NCO = require("../models/NCO");
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
            FROM user_info, nco
            WHERE user_info.user_id = nco.user_id AND user_info.user_type = 'NCO'`
        );
        console.log("ncos data retrived successfully");

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
        let nco = {};
        nco.user_id = req.params.id;
        let user = await User.getByID(nco);
        nco.rank = user.data[0].rank;
        nco.first_name = user.data[0].first_name;
        nco.last_name = user.data[0].last_name;
        nco.unit = user.data[0].unit;
        nco.subunit = user.data[0].subunit;
        nco.contact = user.data[0].contact;
        nco.password = user.data[0].password;

        let ncores = await Officer.getByID(nco);
        nco.personal_no = ncores.data[0].personal_no;
        nco.nco_appointment = ncores.data[0].nco_appointment;
        nco.order_no = ncores.data[0].order_no;
        nco.order_date = ncores.data[0].order_date;
        nco.order_expire = ncores.data[0].order_expire;

        data.push(nco);

        res.json({
            status: 200,
            data,
            message: "success"
        });
        console.log("Called 'nco.getByID()'");
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

        let nco = {};
        nco.personal_no = req.body.personal_no;
        nco.user_id = req.body.user_id;
        nco.nco_appointment = req.body.nco_appointment;
        nco.order_no = req.body.order_no;
        nco.order_date = req.body.order_date;
        nco.order_expire = req.body.order_expire;

        res1 = await User.insert(user);
        res2 = await NCO.insert(nco);

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
        console.log("Called 'nco.create()'");
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

        let nco = {};
        nco.personal_no = req.body.personal_no;
        nco.user_id = req.body.user_id;
        nco.nco_appointment = req.body.nco_appointment;
        nco.order_no = req.body.order_no;
        nco.order_date = req.body.order_date;
        nco.order_expire = req.body.order_expire;

        result1 = await User.update(user);
        result2 = await NCO.update(nco);

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
        console.log("Called 'nco.update()'");
    } catch (error) {
        console.error(error.message);
    }
}

async function remove(req, res) {
    try {
        result1 = await User.remove({ user_id: req.body.user_id });
        result2 = await NCO.remove({ user_id: req.body.user_id });

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
        console.log("Called 'nco.remove()'");
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = { getAll, getByID, create, update, remove };