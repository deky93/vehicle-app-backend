const client  = require("../connection.js");


//get all unit
exports.getUnits = async (req, res) => {
    client.query(`Select * from units`, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}

//get unit by id
exports.getUnitById = async (req, res) => {
    client.query(`Select * from units where "unitId"=${req.params.unitId}`, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}

//add new unit
exports.createUnit  = async (req, res) => {
    const unit = req.body;
    let insertQuery = `Insert into units(marka, model) 
                        values('${unit.marka}', '${unit.model}');`;
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Insertion was successful')
        }else{
            console.log(err.message);
        }
    });
    client.end;
}

//delete unit
exports.deleteUnit  = async (req, res) => {
    let insertQuery = `delete from units where "unitId"=${req.params.unitId}`;
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Deletion was successful');
        }else{
            console.log(err.message);
        }
    });
    client.end;
}

exports.editUnitDostupan  = async (req, res) => {
    const unit = req.body;
    let insertQuery = `update units 
                        set dostupan='${unit.dostupan}'
                         where "unitId"=${req.params.unitId};`;
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Update was successful');
        }else{
            console.log(err.message);
        }
    });
    client.end;
}


//edit unit
exports.editUnit  = async (req, res) => {
    const unit = req.body;
    let insertQuery = `update units 
                        set marka='${unit.marka}',
                        model='${unit.model}' where "unitId"=${req.params.unitId};`;
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Update was successful');
        }else{
            console.log(err.message);
        }
    });
    client.end;
}

// , dostupan='${unit.dostupan}