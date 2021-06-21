const oracledb = require('oracledb');
const dbConfig = require("../config/db.config");

module.exports.Indent = class Indent{
    constructor(){
        this.indent_id = -1;
        this.indent_issue = "";
        this.indent_expire = "";
        this.vehicle_type = "";
        this.no_of_vehicles = -1;
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
            FROM indent_info
            WHERE indent_id=:indent_id`,
            [req.indent_id]
        );
        console.log("indent data retrived successfully");
        response = {
            status: 200,
            data: result.rows,
            message: "indent data retrived successfully"
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
            FROM indent_info
            WHERE indent_id=:indent_id`,
            [req.indent_id]
        );
        console.log("indent data retrived successfully");
        response = {
            status: 200,
            data: result.rows,
            message: "indent data retrived successfully"
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
            `INSERT INTO indent_info
            VALUES
            (:indent_id, :indent_issue, :indent_expire, :vehicle_type, :no_of_vehicles)`,
            [req.indent_id, req.indent_issue, req.indent_expire, req.vehicle_type, req.no_of_vehicles],
            { autoCommit: true }
        );
        console.log(result);
        console.log("indent data inserted successfully");
        response = {
            status: 201,
            message: "indent data inserted successfully"
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
            `UPDATE indent_info
            SET
            indent_issue = :indent_issue,
            indent_expire = :indent_expire,
            vehicle_type = :vehicle_type,
            no_of_vehicles = :no_of_vehicles
            WHERE
            indent_id = :indent_id`,
            {
                indent_id:req.indent_id,
                indent_issue:req.indent_issue,
                indent_expire:req.indent_expire,
                vehicle_type:req.vehicle_type,
                no_of_vehicles:req.no_of_vehicles
            },
            { autoCommit: true }
        );
        console.log(result);
        console.log("indent data updated successfully");
        response = {
            status: 200,
            message: "indent data updated successfully"
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
            `DELETE FROM indent_info
            WHERE
            indent_id = :indent_id`,
            { indent_id:req.indent_id },
            { autoCommit: true }
        );
        console.log(result);
        console.log("indent data deleted successfully");
        response = {
            status: 200,
            message: "indent data deleted successfully"
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