var fs = require("fs");
var availableRooms = JSON.parse(fs.readFileSync("./data/rooms.json", "utf-8"));

const rooms = (req, res) => {
	res.render("rooms", { title: "Travlr Getaways", availableRooms });
};

module.exports = {
	rooms,
};
