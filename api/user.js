"use strict";

const helper = require("../operations/user"),
  response = require("../util/response");

module.exports.getAllUsers = async (event, cb) => {
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

module.exports.createUser = async (event, cb) => {
  try {
    const data = await helper.createUser(JSON.parse(event.body));
    return response.create(201, {
      data
    })
  } catch (error) {
    return response.create(500, {
      err: error.message
    })
  }
};
