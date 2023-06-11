var data =  require("./fakeData");

module.exports = function(req, res){

    // Adicionar um novo usuário
    var name =  req.body.name;
    var job =  req.body.job;
    var email = req.body.email;
    var password = req.body.password

    // Deveria criptografar a senha do usuário antes de salvar no banco, utilizando por exemplo o bcryptjs


    if(!name || !job || !password || !email){
        return res.status(400).send('Parâmetros não foram informados. Informe os campos: name, job, email e password.')
    }

    // Se o email já foi cadastrado
    const user = data.find((user)=>user.email === email)

    if(user){
        return res.status(409).send('E-mail já cadastrado!')
    }

    let id = 0

    if(data.length===0){
        id = 1
    }else{
        id = data[data.length-1].id + 1
    }
    
    var newUser = {
        id,
        name: name,
        job: job,
        password: password,
        email: email,
        views: 0
    }


    data.push(newUser)
    
    res.status(201).send(newUser);

};