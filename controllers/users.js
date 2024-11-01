const client  = require("../connection.js");

//get all users
exports.getUsers = async (req, res) => {
    client.query(`Select * from users`, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}

//get user by id
exports.getUserById = async (req, res) => {
    client.query(`Select * from users where id=${req.params.userId}`, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}

//add new user
exports.createUser  = async (req, res) => {
    const user = req.body;
    let insertQuery = `Insert into users(firstname, lastname) 
                        values('${user.firstname}', '${user.lastname}');`;
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Insertion was successful')
        }else{
            console.log(err.message);
        }
    });
    client.end;
}

//delete user
exports.deleteUser  = async (req, res) => {
    let insertQuery = `delete from users where id=${req.params.userId}`;
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Deletion was successful');
        }else{
            console.log(err.message);
        }
    });
    client.end;
}


//edit user
exports.editUser  = async (req, res) => {
    const user = req.body;
    let insertQuery = `update users 
                        set firstname='${user.firstname}',
                        lastname='${user.lastname}' where id=${req.params.userId};`;
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('Update was successful');
        }else{
            console.log(err.message);
        }
    });
    client.end;
}
