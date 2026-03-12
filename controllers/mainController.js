const service = require("../services/mainService");

exports.create = (req, res) => {
  const item = service.create(req.body);

  if (item === null) {
    res.json({ message: "Message already exists" });
    return;
  }

  res.json({ message: "Message added successfully" });
};

exports.list = (_, res) => {
  const data = service.list();
  res.json(data);
};

exports.remove = (req, res) => {
  service.remove(req.params.id);
  res.json({ message: "deleted" });
};
