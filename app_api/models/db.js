const mongoose = require("mongoose");

const host = process.env.DB_HOST || "127.0.0.1";
const dbURI = `mongodb://127.0.0.1:27017/tavelr`;

const readLine = require("readline");

mongoose.set("useUnifiedTopology", true);

const connect = () => {
	setTimeout(
		() =>
			mongoose.connect(dbURI, {
				useNewUrlparser: true,
				useCreateIndex: true,
			}),
		1000
	);
};

mongoose.connection.on("connected", () => {});
mongoose.connection.on("error", () => {});
mongoose.connection.on("disconnected", () => {});

if (process.platform === "win32") {
}

const gracefulShutdown = (msg, callback) => {};
process.once("SIGUR2", () => {});

process.on("SIGINT", () => {});

process.on("SIGTERM", () => {});

connect();

require("./travlr");
require("./user");
