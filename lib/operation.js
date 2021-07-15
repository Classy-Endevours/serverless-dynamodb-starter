"use strict";

var Promise = require("bluebird"),
  db = require("../database/dynamodb");

const DB_PREFIX = process.env.IS_OFFLINE ? "dev" : process.env.DB_PREFIX;

function getUser(id) {
  return db("query", {
    TableName: DB_PREFIX + "-users",
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeValues: {
      ":id": id
    },
    ExpressionAttributeNames: {
      "#id": "id"
    }
  });
}

function getAllUsers() {
  
  return db("scan", {
    TableName: DB_PREFIX + "-users"
  });
}

function createUser(data) {
  return db("put", {
    TableName: DB_PREFIX + "-users",
    Item: data
  });
}

function updateUser(data) {
  return db("update", {
    TableName: DB_PREFIX + "-users",
    Key: {
      id: data.id
    },
    UpdateExpression: "set task = :task",
    ExpressionAttributeValues: {
      ":task": data.task
    }
  });
}

function updateUserStatus(data) {
  return db("update", {
    TableName: DB_PREFIX + "-users",
    Key: {
      id: data.id
    },
    UpdateExpression: "set isCompleted = :isCompleted",
    ExpressionAttributeValues: {
      ":isCompleted": data.isCompleted
    }
  });
}

function deleteUser(params) {
  return db("delete", {
    TableName: DB_PREFIX + "-users",
    Key: {
      id: params.id
    }
  });
}

module.exports = {
  getUser: getUser,
  getAllUsers: getAllUsers,
  updateUser: updateUser,
  updateUserStatus: updateUserStatus,
  createUser: createUser,
  deleteUser: deleteUser
};