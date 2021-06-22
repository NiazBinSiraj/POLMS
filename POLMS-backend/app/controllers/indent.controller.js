const oracledb = require('oracledb');
const dbConfig = require("../config/db.config");

async function getAll(req, res){
    try {
        //Connecting to the OracleDB
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST + ":" + dbConfig.PORT
        });
        console.log("database connected");

        //Quering to get last 30 entries
        const result = await connection.execute(
            `SELECT * FROM indent_info`
        );
        console.log("indent data retrived successfully");
            console.log(result);
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


async function insert (req, res){
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            connectString: dbConfig.HOST+":"+dbConfig.PORT
        });
        console.log("database connected");
        console.log(req.body);
        const result = await connection.execute(
            `INSERT INTO indent_info
            VALUES
            (:indent_id, :indent_issue, :indent_expire, :vehicle_type, :no_of_vehicles)`,
            [req.body.indent_id, req.body.indent_issue, req.body.indent_expire, req.body.vehicle_type, req.body.no_of_vehicles],
            { autoCommit: true }
        );
        console.log(result);
        console.log("indent data inserted successfully");

        res.json({
            status: 201,
            message: "indent data inserted successfully"
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

module.exports = {getAll, insert};