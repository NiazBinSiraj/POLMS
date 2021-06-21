const oracledb = require('oracledb');
const dbConfig = require("../config/db.config");

module.exports.Vehicle = class Vehicle{
    constructor(){
        this.vehicle_id = -1;
        this.vehicle_type = "";
        this.vehicle_class = "";
        this.vehicle_issue = "";
        this.initial_mileage = "";
        this.total_mileage = "";
        this.total_issue_pole_type = "";
        this.total_issue_pole_amount = "";
        this.total_usage_pole_type = "";
        this.total_usage_pole_amount = "";
        this.total_pole_stock = "";
        this.last_update = "";
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
            FROM vehicle_info
            WHERE vehicle_id=:vehicle_id`,
            [req.vehicle_id]
        );
        console.log("vehicle data retrived successfully");
        response = {
            status: 200,
            data: result.rows,
            message: "vehicle data retrived successfully"
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
            FROM vehicle_info
            WHERE vehicle_id=:vehicle_id`,
            [req.vehicle_id]
        );
        console.log("vehicle data retrived successfully");
        response = {
            status: 200,
            data: result.rows,
            message: "vehicle data retrived successfully"
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
            `INSERT INTO vehicle_info
            VALUES
            (:vehicle_id, :vehicle_type, :vehicle_class, :initial_mileage, :total_issue_pole_type, :total_issue_pole_amount, :total_usage_pole_type, :total_usage_pole_amount, :total_pole_stock, :last_update)`,
            [req.vehicle_id, req.vehicle_type, req.vehicle_class, req.initial_mileage, req.total_issue_pole_type, req.total_issue_pole_amount, req.total_usage_pole_type, req.total_usage_pole_amount, req.total_pole_stock, req.last_update],
            { autoCommit: true }
        );
        console.log(result);
        console.log("vehicle data inserted successfully");
        response = {
            status: 201,
            message: "vehicle data inserted successfully"
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
            `UPDATE vehicle_info
            SET
            vehicle_type = :vehicle_type,
            vehicle_class = :vehicle_class,
            initial_mileage = :initial_mileage,
            total_issue_pole_type = :total_issue_pole_type,
            total_issue_pole_amount = :total_issue_pole_amount,
            total_usage_pole_type = :total_usage_pole_type,
            total_usage_pole_amount = :total_usage_pole_amount,
            total_pole_stock = :total_pole_stock,
            last_update = :last_update
            WHERE
            vehicle_id = :vehicle_id`,
            {
                vehicle_id:req.vehicle_id,
                vehicle_type:req.vehicle_type,
                vehicle_class:req.vehicle_class,
                initial_mileage:req.initial_mileage,
                total_issue_pole_type:req.total_issue_pole_type,
                total_issue_pole_amount: req.total_issue_pole_amount,
                total_usage_pole_type: req.total_usage_pole_type,
                total_usage_pole_amount: req.total_usage_pole_amount,
                total_pole_stock: req.total_pole_stock,
                last_update: req.last_update
            },
            { autoCommit: true }
        );
        console.log(result);
        console.log("vehicle data updated successfully");
        response = {
            status: 200,
            message: "vehicle data updated successfully"
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
            `DELETE FROM vehicle_info
            WHERE
            vehicle_id = :vehicle_id`,
            { vehicle_id:req.vehicle_id },
            { autoCommit: true }
        );
        console.log(result);
        console.log("vehicle data deleted successfully");
        response = {
            status: 200,
            message: "vehicle data deleted successfully"
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