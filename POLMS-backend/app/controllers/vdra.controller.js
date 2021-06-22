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
            `SELECT * FROM (select * from vdra ORDER BY entry_no DESC) WHERE rownum <= 30 ORDER BY rownum ASC`
        );
        console.log("vdra data retrived successfully");
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
            `INSERT INTO vdra
            VALUES
            (:entry_no, :vehicle_id, :user_id, :user_name, :entry_date, :daily_mileage, :pol_usage_type, :pol_usage_amount)`,
            [req.body.entry_no, req.body.vehicle_id, req.body.user_id, req.body.user_name, req.body.entry_date, req.body.daily_mileage, req.body.POL_usage_type, req.body.POL_usage_amount],
            { autoCommit: true }
        );
        console.log(result);
        console.log("vdra data inserted successfully");

        res.json({
            status: 201,
            message: "vdra data inserted successfully"
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