const User = require("../models/User");
const Driver = require("../models/Driver");
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
            FROM user_info, driver
            WHERE user_info.user_id = driver.user_id AND user_info.user_type = 'Driver'`
        );
        console.log("drivers data retrived successfully");

        //Send result to the frontend
        res.json({
            status: 200,
            result,
            message: "success"
        });
    } catch (error) {
        console.error(error.message);
    }
}

async function getByID(req, res) {
    try {
        let data = [];
        let driver = {};
        driver.user_id = req.params.id;
        let user = await User.getByID(driver);
        driver.rank = user.data[0].rank;
        driver.first_name = user.data[0].first_name;
        driver.last_name = user.data[0].last_name;
        driver.unit = user.data[0].unit;
        driver.subunit = user.data[0].subunit;
        driver.contact = user.data[0].contact;
        driver.password = user.data[0].password;

        let driverres = await Driver.getByID(driver);
        driver.personal_no = driverres.data[0].personal_no;
        driver.license_no = driverres.data[0].license_no;
        driver.license_type = driverres.data[0].license_type;
        driver.license_issue = driverres.data[0].license_issue;
        driver.license_expire = driverres.data[0].license_expire;

        data.push(driver);

        res.json({
            status: 200,
            data,
            message: "success"
        });
        console.log("Called 'driver.getByID()'");
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

        let driver = {};
        driver.personal_no = req.body.personal_no;
        driver.user_id = req.body.user_id;
        driver.license_no = req.body.license_no;
        driver.license_type = req.body.license_type;
        driver.license_issue = req.body.license_issue;
        driver.license_expire = req.body.license_expire;

        res1 = await User.insert(user);
        res2 = await Driver.insert(driver);

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
        console.log("Called 'driver.create()'");
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

        let driver = {};
        driver.personal_no = req.body.personal_no;
        driver.user_id = req.body.user_id;
        driver.license_no = req.body.license_no;
        driver.license_type = req.body.license_type;
        driver.license_issue = req.body.license_issue;
        driver.license_expire = req.body.license_expire;

        result1 = await User.update(user);
        result2 = await Driver.update(driver);

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
        console.log("Called 'driver.update()'");
    } catch (error) {
        console.error(error.message);
    }
}

async function remove(req, res) {
    try {
        result1 = await User.remove({ user_id: req.body.user_id });
        result2 = await Driver.remove({ user_id: req.body.user_id });

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
        console.log("Called 'driver.remove()'");
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = { getAll, getByID, create, update, remove };