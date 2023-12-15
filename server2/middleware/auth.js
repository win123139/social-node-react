import jwt from 'jsonwebtoken';

export const verifyToken = async( req , res ,next) => {
  try {
    let token = req.header("Authorization").toString();

    if(!token) {
      return res.status(403).send("Access Denied");
    }
    if(typeof token === 'string' && token.startsWith('Bearer')) {
      token = token.toString().slice(7, token.length).trimLeft();
    }
    const verified =  jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();

  } catch ( err ) {
    res.status(500).json({ error : err.message})
  }
}