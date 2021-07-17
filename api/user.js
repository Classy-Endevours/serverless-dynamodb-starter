"use strict";

const { v4: getId } = require('uuid');
const helper = require("../operations/user"),
  response = require("../util/response");

module.exports.getAllUsers = async () => {
  try {
    const data = await helper.getAllUsers();
    return response.create(200, {
      data
    })
  } catch (error) {
    return response.create(500, {
      err: error.message
    })
  }
};

module.exports.createUser = async (event) => {
  try {
    const userData = { ...JSON.parse(event.body), id: getId()}
    const data = await helper.createUser(userData);
    return response.create(201, {
      data
    })
  } catch (error) {
    return response.failed(error)
  }
};
