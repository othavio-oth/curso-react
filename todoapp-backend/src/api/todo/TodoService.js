const todoModel = require("./todo");

todoModel.methods(["get", "post", "put", "delete"]);
todoModel.updateOptions({ new: true, runValidators: true });

module.exports = todoModel;
