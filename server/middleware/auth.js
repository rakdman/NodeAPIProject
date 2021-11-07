const jwt = require('jsonwebtoken')

module.exports = (req,res, next) => {

    // console.log('Into Check auth middleware function'+req.headers.authorization);

    let token;

    if (req.headers.authorization) {
    
    try{
        // console.log('Provided token is:'+req.headers.authorization.split(" ")[2])
        token = req.headers.authorization.split(' ')[2];  // Bearer Token
    } catch(error) {
        // console.log('Authentication failed');
        return next(error);
    }
    


    try{

        if(!token)
        {
            throw new Error("Authentication failed");
         }
        const decodedToken= jwt.verify(token,'privatekey');
        req.userData = {userID : decodedToken.userID };
        next();
    } catch(error)
    {
        //'Token did not match-Authentication failed'
        res.status(400).send('Invalid Token!')
    }

  }
  else 
    {
        res.status(400).send('Error, No Token provided with Request')
    }

    
} 
