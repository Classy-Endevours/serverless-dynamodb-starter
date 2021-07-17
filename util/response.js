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
  const { data = {
    message: 'Internal Server Error'
  } } = error;
  return {
    statusCode: data?.code || 500,
    body: JSON.stringify(error.data)
  }
}

module.exports = {
  create,
  failed
};
