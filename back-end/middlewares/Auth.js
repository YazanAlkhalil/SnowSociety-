import jwt from 'jsonwebtoken'
export function checkUserToken(req,res,next){
  const token = req.headers.authorization
  console.log(token);
  if(!token){
    return res.status(400).json({msg:'No Token!'})
  }
  const decoded = jwt.verify(token,split(" ")[1],process.env.SECRET_KEY)
  console.log('decode',decoded);
  if(!decoded){
    return res.status(400).json({msg:'Bad Token!'})
  }
  req.user = decoded
  next()
}
