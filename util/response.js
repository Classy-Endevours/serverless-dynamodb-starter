const create = (status, data) => {
  return {
    statusCode: status,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  };
};

const failed = (error) => {
  return {
    statusCode: error.data?.code || 500,
    body: JSON.stringify(error.data)
  }
}

module.exports = {
  create,
  failed
};
