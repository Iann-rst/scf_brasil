var data =  require("./fakeData");

// Atualizar os dados do usuário: nome e job
module.exports =  function(req, res) {
  
    var id =  req.query.id;

    if(!id){
        return res.status(400).send('ID do usuário não foi informado!')
    }

    const user = data.find((user) => user.id.toString() === id);

    if(!user){
        return res.status(404).send('Usuário não encontrado!')
    }


    user.name = req.body.name ? req.body.name : user.name;
    user.job = req.body.job ? req.body.job : user.job;

    console.log(user)
    res.send(user);

};