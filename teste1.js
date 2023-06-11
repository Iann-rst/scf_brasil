var data =  require("./fakeData");

// Troquei o name por email, já que email será uma informação única

const getUser = ( req, res, next ) => {
    
    var email =  req.query.email;

    if(!email){
        return res.status(400).send('Email do usuário não foi informado!')
    }

    const user = data.find((user)=>user.email === email)
    
    if(!user){
        return res.status(404).send('Usuário não encontrado!')
    }

    user.views++

    return res.send(
        {
            ...user, 
            password: undefined
        }
    )
};

const getUsers = ( req, res, next ) => {
    
    // Retornar as informações dos usuários e não retornar a senha
    const users = data.map((user)=> ({
            ...user, 
            password: undefined
        })
    )
    res.send(users);
    
};

module.exports = {
    getUser,
    getUsers
};