const { reject, resolve } = require("bluebird");
const JWT = require("jsonwebtoken");
const { UnAuthorized } = require("./breakers");

const SECRET = process.env.APP_SECRET;

const authenticate = (token, secret = SECRET) => {
  return new Promise((resolve, reject) => {
    JWT.verify(token, secret, function (err, decoded) {
      if (err) {
        err.data = {}
        err.data.code = 401;
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};
const generateToken = (payload, secret = SECRET) => {
  let token = JWT.sign(payload, secret);
  return token;
};

const refreshToken = (token) => {
  try {
    if (!token) {
      UnAuthorized();
    }
    let decodedToken, newToken;
    decodedToken = JWT.verify(token, SECRET);
    newToken = JWT.sign({ id: decodedToken.id }, SECRET, {
      expiresIn: "1h",
    });
    return { token: newToken, tokenExpiration: "1h" };
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      const payload = JWT.verify(token, SECRET, { ignoreExpiration: true });
      newToken = JWT.sign({ id: payload.id }, SECRET, {
        expiresIn: "1h",
      });
      return { token: newToken, tokenExpiration: "1h" };
    } else {
      throw error;
    }
  }
};
module.exports = {
  authenticate,
  generateToken,
  refreshToken,
};
