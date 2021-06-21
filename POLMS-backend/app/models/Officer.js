const oracledb = require('oracledb');
const dbConfig = require("../config/db.config");

module.exports.Officer = class Officer {
    constructor() {
        this.user_id = -1;
        this.ba_no = "";
        this.coro_appointment = "";
        this.coro_no = "";
        this.coro_date = "";
        this.coro_expire = "";
    }
}

module.exports.getAll = async function (req) {
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST + ":" + dbConfig.PORT
        });
        console.log("database connected");

        const result = await connection.execute(
            `SELECT *
            FROM officer`
        );
        console.log("officers data retrived successfully");

        let data = [];
        result.rows.forEach(function (element) {
            let officer = {
                user_id: element[0],
                ba_no: element[1],
                coro_appointment: element[2],
                coro_no: element[3],
                coro_date: element[4],
                coro_expire: element[5]
            };
            data.push(officer);
        });
        response = {
            status: 200,
            data,
            message: "officers data retrived successfully"
        }
        return response;
    } catch (error) {
        console.error(error.message);
    } finally {
        try {
            if (connection) {
                await connection.close();
                console.log('close connection success');
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports.getByID = async function (req) {
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST + ":" + dbConfig.PORT
        });
        console.log("database connected");

        const result = await connection.execute(
            `SELECT *
            FROM officer
            WHERE user_id=:user_id`,
            [req.user_id]
        );
        console.log("officer data retrived successfully");

        let officer = {
            user_id: result.rows[0][0],
            ba_no: result.rows[0][1],
            coro_appointment: result.rows[0][2],
            coro_no: result.rows[0][3],
            coro_date: result.rows[0][4],
            coro_expire: result.rows[0][5]
        }
        let data = [];
        data.push(officer);
        response = {
            status: 200,
            data,
            message: "officer data retrived successfully"
        }
        return response;
    } catch (error) {
        console.error(error.message);
    } finally {
        try {
            if (connection) {
                await connection.close();
                console.log('close connection success');
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports.insert = async function (req) {
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST + ":" + dbConfig.PORT
        });
        console.log("database connected");
        const result = await connection.execute(
            `INSERT INTO officer
            VALUES
            (:user_id, :ba_no, :coro_appointment, :coro_no, :coro_date, :coro_expire)`,
            [req.user_id, req.ba_no, req.coro_appointment, req.coro_no, req.coro_date, req.coro_expire],
            { autoCommit: true }
        );
        console.log(result);
        console.log("officer data inserted successfully");
        response = {
            status: 201,
            message: "officer data inserted successfully"
        }
        return response;
    } catch (error) {
        console.error(error.message);
    } finally {
        try {
            if (connection) {
                await connection.close();
                console.log('close connection success');
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports.update = async function (req) {
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST + ":" + dbConfig.PORT
        });
        console.log("database connected");
        const result = await connection.execute(
            `UPDATE officer
            SET
            ba_no = :ba_no,
            coro_appointment = :coro_appointment,
            coro_no = :coro_no,
            coro_date = :coro_date,
            coro_expire = :coro_expire
            WHERE
            user_id = :user_id`,
            {
                user_id: req.user_id,
                ba_no: req.ba_no,
                coro_appointment: req.coro_appointment,
                coro_no: req.coro_no,
                coro_date: req.coro_date,
                coro_expire: req.coro_expire
            },
            { autoCommit: true }
        );
        console.log(result);
        console.log("officer data updated successfully");
        response = {
            status: 200,
            message: "officer data updated successfully"
        }
        return response;
    } catch (error) {
        console.error(error.message);
    } finally {
        try {
            if (connection) {
                await connection.close();
                console.log('close connection success');
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports.remove = async function (req) {
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST + ":" + dbConfig.PORT
        });
        console.log("database connected");
        const result = await connection.execute(
            `DELETE FROM officer
            WHERE
            user_id = :user_id`,
            { user_id: req.user_id },
            { autoCommit: true }
        );
        console.log(result);
        console.log("officer data deleted successfully");
        response = {
            status: 200,
            message: "officer data deleted successfully"
        }
        return response;
    } catch (error) {
        console.error(error.message);
    } finally {
        try {
            if (connection) {
                await connection.close();
                console.log('close connection success');
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}