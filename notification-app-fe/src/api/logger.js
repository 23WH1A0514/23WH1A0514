const axios = require("axios");

async function logger(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log Success:", response.data);
  } catch (error) {
    console.error(
      "Log Error:",
      error.response?.data || error.message
    );
  }
}

module.exports = logger;
