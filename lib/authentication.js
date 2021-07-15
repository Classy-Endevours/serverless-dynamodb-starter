const JWT = require('jsonwebtoken');

class Authentication {
   authenticate = (token, role) => {
       return new Promise((resolve, reject) => {
        JWT.verify(token, role, function(err, decoded) {
            if (err) {
                reject(err);
            } else {
                resolve(decoded)
            }
          });
       })
   }
   generateToken = (role, payload) => {
        let token = JWT.sign(payload, role);
        return token;
   }
}
module.exports = new Authentication();