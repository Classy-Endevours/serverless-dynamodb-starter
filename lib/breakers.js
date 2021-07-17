const CustomError = require("../util/customError")

const UnAuthorized = () => {
    throw new CustomError('UnAuthorized', {
        code: 401,
        message: 'You are authorized to access the resource!',
    })
}
const TokenExpired = () => {
    throw new CustomError('UnAuthorized', {
        message: 'You are authorized to access the resource!',
        code: 498
    })
}
const NoUserFound = () => {
    throw new CustomError('No User Found', {
        message: 'There is not user record present for the request!',
        code: 204
    })
}

module.exports = {
    UnAuthorized,
    NoUserFound,
    TokenExpired,
}