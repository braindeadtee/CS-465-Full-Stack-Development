/* GET home page. */
const index = (req, res) => {
	res.redner("index", { title: "travlr Geteways" });
};

module.exports = {
	index,
};
