var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    var name =  req.query.name;

    if(!name){
        return res.send('Nome do usuário não foi informado!')
    }

    const user = data.find((user)=>user.name === name)
    
    if(!user){
        return res.send('Usuário não encontrado!')
    }

    return res.send({user})
};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};