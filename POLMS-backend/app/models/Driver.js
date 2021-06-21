const oracledb = require('oracledb');
const dbConfig = require("../config/db.config");

module.exports.Driver = class Driver{
    constructor(){
        this.user_id = -1;
        this.personal_no = "";
        this.license_no = "";
        this.license_type = "";
        this.license_issue = "";
        this.license_expire = "";
    }
}

module.exports.getAll = async function(req){
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST+":"+dbConfig.PORT
        });
        console.log("database connected");
        const result = await connection.execute(
            `SELECT *
            FROM driver`
        );
        console.log("driver data retrived successfully");
        response = {
            status: 200,
            data: result.rows,
            message: "driver data retrived successfully"
        }
        return response;
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

module.exports.getByID = async function(req){
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST+":"+dbConfig.PORT
        });
        console.log("database connected");
        const result = await connection.execute(
            `SELECT *
            FROM driver
            WHERE user_id=:user_id`,
            [req.user_id]
        );
        console.log("driver data retrived successfully");
        let driver = {
            user_id: result.rows[0][0],
            personal_no: result.rows[0][1],
            license_no: result.rows[0][2],
            license_type: result.rows[0][3],
            license_issue: result.rows[0][4],
            license_expire: result.rows[0][5]
        }
        let data = [];
        data.push(driver);
        response = {
            status: 200,
            data: result.rows,
            message: "driver data retrived successfully"
        }
        return response;
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

module.exports.insert = async function(req){
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST+":"+dbConfig.PORT
        });
        console.log("database connected");
        const result = await connection.execute(
            `INSERT INTO driver
            VALUES
            (:user_id, :personal_no, :license_no, :license_type, :license_issue, :license_expire)`,
            [req.user_id, req.personal_no, req.license_no, req.license_type, req.license_issue, req.license_expire],
            { autoCommit: true }
        );
        console.log(result);
        console.log("driver data inserted successfully");
        response = {
            status: 201,
            message: "driver data inserted successfully"
        }
        return response;
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

module.exports.update = async function(req){
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST+":"+dbConfig.PORT
        });
        console.log("database connected");
        const result = await connection.execute(
            `UPDATE driver
            SET
            personal_no = :personal_no,
            license_no = :license_no,
            license_type = :license_type,
            license_issue = :license_issue,
            license_expire = :license_expire
            WHERE
            user_id = :user_id`,
            {
                user_id:req.user_id,
                personal_no: req.personal_no,
                license_no: req.license_no,
                license_type: req.license_no,
                license_issue: req.license_issue,
                license_expire: req.license_expire
            },
            { autoCommit: true }
        );
        console.log(result);
        console.log("driver data updated successfully");
        response = {
            status: 200,
            message: "driver data updated successfully"
        }
        return response;
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

module.exports.remove = async function(req){
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST+":"+dbConfig.PORT
        });
        console.log("database connected");
        const result = await connection.execute(
            `DELETE FROM driver
            WHERE
            user_id = :user_id`,
            { user_id:req.user_id },
            { autoCommit: true }
        );
        console.log(result);
        console.log("driver data deleted successfully");
        response = {
            status: 200,
            message: "driver data deleted successfully"
        }
        return response;
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