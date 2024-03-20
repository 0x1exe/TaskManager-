const notFound = (req, res) =>
  res.status(404).send("The resource you're looking for is not found!");

module.exports = notFound;
