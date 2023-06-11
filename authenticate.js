
/** 
* Autenticação de um usuário.
* Rotas de atualizar e deletar um usuário apenas para quem tiver autenticado na aplicação
**/

var jwt = require('jsonwebtoken')
var data = require('./fakeData')

module.exports = function(req, res){
  const email = req.body.email
  const password = req.body.password


  // Verificar se foi informado o email e senha para o login
  if(!email || !password){
    return res.status(400).send('Informe o email e senha para realizar o login!')
  }

  // Verificar se existe um usuário com essas credenciais
  const user = data.find((user)=>user.email === email)

  if(!user){
    return res.status(401).send('Credenciais inválidas.')
  }

  // Comparar a senha informada com a senha que esta salva no banco de dados (OBS: Não criptografei as senhas)
  const doesPasswordMatches = user.password === password

  if(!doesPasswordMatches){
    return res.status(401).send('Credenciais inválidas')
  }

  // Cria o token do usuário - Autenticação com JWT
  const token = jwt.sign({}, 'scf-brasil-token', {
    subject: user.id.toString(),
    expiresIn: '1d'
  })

  return res.status(201).send({token})

}