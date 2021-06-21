const oracledb = require('oracledb');
const dbConfig = require("../config/db.config");

module.exports.User = class User {
    constructor() {
        this.user_id = -1;
        this.rank = "";
        this.first_name = "";
        this.last_name = "";
        this.unit = "";
        this.subunit = "";
        this.password = "";
        this.user_type = "";
        this.contact = "";
    }
}

module.exports.getAll = async function (req) {
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
            FROM user_info
            WHERE user_type=:user_type`,
            [req.user_type]
        );
        console.log("users data retrived successfully");

        //Formatting data
        let data = [];
        result.rows.forEach(async function (element) {
            let user = {
                user_id: element[0],
                rank: element[1],
                first_name: element[2],
                last_name: element[3],
                unit: element[4],
                subunit: element[5],
                password: element[6],
                user_type: element[7],
                contact: element[8]
            };
            data.push(user);
        });

        //Response Object to be returned
        response = {
            status: 200,
            data,
            message: "users data retrived successfully"
        }
        return response;
    } catch (error) {
        console.error(error.message);
    } finally {
        //Closing DB Connection
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
            FROM user_info
            WHERE user_id=:user_id`,
            [req.user_id]
        );
        console.log("user data retrived successfully");

        let user = {
            user_id: result.rows[0][0],
            rank: result.rows[0][1],
            first_name: result.rows[0][2],
            last_name: result.rows[0][3],
            unit: result.rows[0][4],
            subunit: result.rows[0][5],
            password: result.rows[0][6],
            user_type: result.rows[0][7],
            contact: result.rows[0][8]
        };
        let data = [];
        data.push(user);

        response = {
            status: 200,
            data,
            message: "user data retrived successfully"
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
            `INSERT INTO user_info
            VALUES
            (:user_id, :rank, :first_name, :last_name, :unit, :subunit, :password, :user_type, :contact)`,
            [req.user_id, req.rank, req.first_name, req.last_name, req.unit, req.subunit, req.password, req.user_type, req.contact],
            { autoCommit: true }
        );
        console.log("user data inserted successfully");

        response = {
            status: 201,
            message: "user data inserted successfully"
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
            `UPDATE user_info
            SET
            rank = :rank,
            first_name = :first_name,
            last_name = :last_name,
            unit = :unit,
            subunit = :subunit,
            password = :password,
            contact = :contact
            WHERE
            user_id = :user_id`,
            {
                user_id: req.user_id,
                rank: req.rank,
                first_name: req.first_name,
                last_name: req.last_name,
                unit: req.unit,
                subunit: req.subunit,
                contact: req.contact,
                password: req.password
            },
            { autoCommit: true }
        );
        console.log("user data updated successfully");

        response = {
            status: 200,
            message: "user data updated successfully"
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
            `DELETE FROM user_info
            WHERE
            user_id = :user_id`,
            { user_id: req.user_id },
            { autoCommit: true }
        );
        console.log("user data deleted successfully");

        response = {
            status: 200,
            message: "user data deleted successfully"
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

module.exports.count = async function (req) {
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST + ":" + dbConfig.PORT
        });
        console.log("database connected");

        const result = await connection.execute(
            `SELECT COUNT(user_id)
            FROM user_info
            WHERE
            user_id = :user_id`,
            { user_id: req.user_id }
        );
        console.log("user_id counted successfully");
        count = result.rows[0][0];
        response = {
            status: 200,
            count,
            message: "user_id counted successfully"
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