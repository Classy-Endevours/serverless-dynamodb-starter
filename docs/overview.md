## Overview
There are following APIs which are developed

- **POST** - `/<stage>/user` - To create a user, any data will be stored except `id` field
- **GET** - `/<stage>/user` - Fetch the list of all user
- **GET** - `/<stage>/token` - Generate the token based on the provided `API_KEY`
- **GET** - `/<stage>/token/refresh` - Refresh the token based on the provided `API_KEY` and `previous token`

## Notes
- `/user` APIs has an token protection
- `/token` APIs has an API_KEY protection
- currently no prefix has been stored for the token, you can configure `jwt` or `bearer` based on choice
- update the custom method in `serverless.yml` to make project more customizable