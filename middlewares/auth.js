const { authenticate } = require("../lib/authentication");
const { UnAuthorized } = require("../lib/breakers");
const response = require("../util/response");

module.exports.auth = async (event, context) => {
  try {
    const { Authorization } = event?.headers;
    if (Authorization) {
        const decode = await authenticate(Authorization)
        event.user = decode;
    } else {
      UnAuthorized();
    }
  } catch (error) {
    context.end();
    return response.failed(error);
  }
};
