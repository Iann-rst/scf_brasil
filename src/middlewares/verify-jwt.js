const { verify } = require("jsonwebtoken")

const verifyJWT = (req, res, next) =>{
  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).send('Não autorizado!')
  }

  // Bearer token - 1º posição é o nome Bearer e a 2ª posição é o token
  const [, token] = authHeader.split(" ")

  try {
    const {sub: user_id} = verify(token, 'scf-brasil-token')

    req.user = {
      id: user_id
    }

    return next()
  } catch {
    return res.status(401).send('Token inválido!')
  }
}

module.exports = {
  verifyJWT
}