const jsonfile = require("jsonifle");
const config = jsonfile.readFileSync("config.json");

config.auth.jwtSecret = process.env.jwtSecret;
config.port = process.env.port;
config.baseUrl = process.env.baseUrl;
config.apiKey.keyA = process.env.keyA;
config.apiKey.keyB = process.env.keyB;

jsonfile.writeFileSync("config.json", config);
process.exit();
