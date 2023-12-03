var DataTypes = require("sequelize").DataTypes;
var _Account = require("./account");
var _Class = require("./class");
var _Club = require("./club");
var _Comment = require("./comment");
var _Desk = require("./desk");
var _Order = require("./order");
var _Student = require("./student");

function initModels(sequelize) {
  var Account = _Account(sequelize, DataTypes);
  var Class = _Class(sequelize, DataTypes);
  var Club = _Club(sequelize, DataTypes);
  var Comment = _Comment(sequelize, DataTypes);
  var Desk = _Desk(sequelize, DataTypes);
  var Order = _Order(sequelize, DataTypes);
  var Student = _Student(sequelize, DataTypes);


  return {
    Account,
    Class,
    Club,
    Comment,
    Desk,
    Order,
    Student,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
