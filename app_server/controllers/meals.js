var fs = require("fs");
var availableMeals = JSON.parse(fs.readFileSync("./data/meals.json", "utf-8"));

const meals = (req, res) => {
	res.render("meals", { title: "Travlr Getaways", availableMeals });
};

module.exports = {
	meals,
};
