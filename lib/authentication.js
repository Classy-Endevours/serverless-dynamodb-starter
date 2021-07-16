const { reject, resolve } = require("bluebird");
const JWT = require("jsonwebtoken");
const { UnAuthorized } = require("./breakers");

const SECRET = "test";

const authenticate = (token, secret = SECRET) => {
  return new Promise((resolve, reject) => {
    JWT.verify(token, secret, function (err, decoded) {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};
const generateToken = (role, payload) => {
  let token = JWT.sign(payload, role);
  return token;
};

const refreshToken = (token) => {
  try {
    if (!token) {
      UnAuthorized();
    }
    let decodedToken, newToken;
    decodedToken = jwt.verify(token, SECRET);
    newToken = jwt.sign({ userId: decodedToken.id }, SECRET, {
      expiresIn: "1h",
    });
    resolve({ token: newToken, tokenExpiration: "1h" });
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      const payload = jwt.verify(token, SECRET, { ignoreExpiration: true });
      newToken = jwt.sign({ userId: payload.userId }, SECRET, {
        expiresIn: "1h",
      });
      return { token: newToken, tokenExpiration: "1h" };
    } else {
      reject(error);
    }
  }
};
module.exports = {
  authenticate,
  generateToken,
  refreshToken,
};
