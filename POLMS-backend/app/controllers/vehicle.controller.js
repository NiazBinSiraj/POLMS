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
            `SELECT * FROM vehicle_info`
        );
        console.log("vehicle data retrived successfully");
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
            `INSERT INTO vehicle_info
            VALUES
            (:vehicle_id, :vehicle_type, :vehicle_class, :initial_mileage, :vehicle_issue)`,
            [req.body.vehicle_id, req.body.vehicle_type, req.body.vehicle_class, req.body.initial_mileage, req.body.vehicle_issue],
            { autoCommit: true }
        );
        console.log(result);
        console.log("vehicle data inserted successfully");

        res.json({
            status: 201,
            message: "vehicle data inserted successfully"
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