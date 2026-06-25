const logger = require("./logger");

async function test() {
  await logger(
    "frontend",
    "info",
    "test",
    "Logger is working"
  );
}

test();