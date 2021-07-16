const { authenticate } = require("../lib/authentication");
const { UnAuthorized } = require("../lib/breakers");
const RESPONSE = require("../util/response");

const verifyAPIKEY = async (event, context) => {
  try {
    if (event && event.headers && event.headers["Authorization"]) {
        let decode = await authenticate(event.headers["Authorization"])
        event.user = decode;
    } else {
      context.end();
      UnAuthorized();
    }
  } catch (error) {
    return RESPONSE.failed(error);
  }
};

module.exports.auth = verifyAPIKEY;
