const CustomError = require("../util/customError")

const UnAuthorized = () => {
    throw new CustomError('UnAuthorized', {
        code: 401
    })
}
const TokenExpired = () => {
    throw new CustomError('UnAuthorized', {
        code: 498
    })
}
const NoUserFound = () => {
    throw new CustomError('No User Found', {
        code: 204
    })
}

module.exports = {
    UnAuthorized,
    NoUserFound,
    TokenExpired,
}