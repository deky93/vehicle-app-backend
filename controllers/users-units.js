const client  = require("../connection.js");

//get all user units
exports.getUserUnits = async (req, res) => {
    client.query(`select * from units left join usersunits on units."unitId" = usersunits."unitsId" 
    left join users on users.id = usersunits."usersId"`, 
    (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}

exports.getUnitsByUserId = async (req, res) => {
    const params = req.query.usr_id;
    console.log(params);
    client.query(
      `SELECT * FROM units 
      LEFT JOIN usersunits ON units."unitId" = usersunits."unitsId"
      LEFT JOIN users ON users."id" = usersunits."usersId"
      WHERE users."id"= '${params}' OR units.dostupan= true`,
      (err, result) => {
        if (!err) {
          res.send(result.rows);
        }
      }
    );
  
    client.end;
  };
  

//add new user unit
exports.createUserUnit  = async (req, res) => {
    const userUnit = req.body;
    let insertQuery = `Insert into usersunits("unitsId", "usersId") 
                        values(${userUnit.unitsId}, ${userUnit.usersId})`;
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Insertion was successful')
        }else{
            console.log(err.message);
        }
    });
    client.end;
}

//delete user unit
exports.deleteUserUnit  = async (req, res) => {
    let insertQuery = `delete from usersunits where "unitsId"=${req.params.unitId};`
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Deletion was successful');
        }else{
            console.log(err.message);
        }
    });
    client.end;
}
