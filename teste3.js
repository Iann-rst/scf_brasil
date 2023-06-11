var data =  require("./fakeData");


// Deletar um usuário pelo email

module.exports = function(req, res) {
  
    var email =  req.query.email;

    if(!email){
        return res.status(400).send('Email do usuário não foi informado!')
    }

    const userIndex = data.findIndex((user)=>user.email === email)

    if(userIndex=== -1){
        return res.status(404).send('Usuário não encontrado.')
    }

    data.splice(userIndex, 1)

    res.status(204).send();

};