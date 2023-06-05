const host = process.env.DB_HOST || "127.0.0.1";
const dbURI = `mongodb://${host}/tavelr`;

module.exports = {
	modelBaseDirectory: "app_api/models", // model directory name
	models: "**/*.js", // model matcher
	data: "data", // data directory name
	db: dbURI, // db connection url
};
