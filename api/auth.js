const response = require("../util/response");
const { UnAuthorized } = require("../lib/breakers");
const { generateToken, refreshToken } = require("../lib/authentication");

module.exports.getAccessToken = async (event) => {
  try {
    const API_KEY = event.headers.API_KEY;
    if (process.env.APP_KEY === API_KEY) {
      const token = generateToken({
        id: "application",
      });
      return response.create(200, {
        token,
      });
    } else {
        UnAuthorized()
    }
  } catch (error) {
    return response.failed(error);
  }
};

module.exports.refreshAccessToken = async (event) => {
  try {
    const { API_KEY, Authorization } = event.headers;
    if (process.env.APP_KEY === API_KEY) {
      const token = refreshToken(Authorization);
      return response.create(200, {
        token,
      });
    } else {
        UnAuthorized()
    }
  } catch (error) {
    return response.failed(error);
  }
};
