const oracledb = require('oracledb');
const dbConfig = require("../config/db.config");

module.exports.NCO = class NCO{
    constructor(){
        this.user_id = -1;
        this.personal_no = "";
        this.nco_appointment = "";
        this.order_no = "";
        this.order_date = "";
        this.order_expire = ""
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
            FROM nco`
        );
        console.log("NCO data retrived successfully");

        let data = [];
        result.rows.forEach(function (element) {
            let nco = {
                user_id: element[0],
                personal_no: element[1],
                nco_appointment: element[2],
                order_no: element[3],
                order_date: element[4],
                order_expire: element[5]
            };
            data.push(nco);
        });
        response = {
            status: 200,
            data,
            message: "ncos data retrived successfully"
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
            FROM nco
            WHERE user_id=:user_id`,
            [req.user_id]
        );
        console.log("NCO data retrived successfully");
        let nco = {
            user_id: result.rows[0][0],
            personal_no: result.rows[0][1],
            nco_appointment: result.rows[0][2],
            order_no: result.rows[0][3],
            order_date: result.rows[0][4],
            order_expire: result.rows[0][5]
        }
        let data = [];
        data.push(nco);
        response = {
            status: 200,
            data,
            message: "nco data retrived successfully"
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
            `INSERT INTO nco
            VALUES
            (:user_id, :personal_no, :nco_appointment, :order_no, :order_date, :order_expire)`,
            [req.user_id, req.personal_no, req.nco_appointment, req.order_no, req.order_date, req.order_expire],
            { autoCommit: true }
        );
        console.log(result);
        console.log("NCO data inserted successfully");
        response = {
            status: 201,
            message: "NCO data inserted successfully"
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
            `UPDATE nco
            SET
            personal_no = :personal_no,
            nco_appointment = :nco_appointment,
            order_no = :order_no,
            order_date = :order_date,
            order_expire = :order_expire
            WHERE
            user_id = :user_id`,
            {
                user_id:req.user_id,
                personal_no: req.personal_no,
                nco_appointment: req.nco_appointment,
                order_no: req.nco_appointment,
                order_date: req.order_date,
                order_expire: req.order_expire
            },
            { autoCommit: true }
        );
        console.log(result);
        console.log("NCO data updated successfully");
        response = {
            status: 200,
            message: "NCO data updated successfully"
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
            `DELETE FROM nco
            WHERE
            user_id = :user_id`,
            { user_id:req.user_id },
            { autoCommit: true }
        );
        console.log(result);
        console.log("NCO data deleted successfully");
        response = {
            status: 200,
            message: "NCO data deleted successfully"
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