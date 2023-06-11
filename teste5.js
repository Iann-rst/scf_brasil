var data = require('./fakeData')


// Buscar total de acesso do usuário, pelo email

module.exports = function(req, res){
    
    var email =  req.query.email;

    if(!email){
        return res.status(400).send('E-mail do usuário não foi informado!')
    }

    const user = data.find((user)=>user.email === email)
    
    if(!user){
        return res.status(404).send('Usuário não encontrado!')
    }


    res.send(`Usuário ${user.name} foi lido ${user.views} vezes.`);

};