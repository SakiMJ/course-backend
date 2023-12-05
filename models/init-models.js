var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _banner = require("./banner");
var _bullet_screen = require("./bullet_screen");
var _category = require("./category");
var _category_product = require("./category_product");
var _chapter = require("./chapter");
var _comment = require("./comment");
var _course_answer = require("./course_answer");
var _course_note = require("./course_note");
var _course_question = require("./course_question");
var _duration_record = require("./duration_record");
var _episode = require("./episode");
var _favorite = require("./favorite");
var _play_record = require("./play_record");
var _product = require("./product");
var _product_card = require("./product_card");
var _product_order = require("./product_order");
var _teacher = require("./teacher");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var banner = _banner(sequelize, DataTypes);
  var bullet_screen = _bullet_screen(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var category_product = _category_product(sequelize, DataTypes);
  var chapter = _chapter(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var course_answer = _course_answer(sequelize, DataTypes);
  var course_note = _course_note(sequelize, DataTypes);
  var course_question = _course_question(sequelize, DataTypes);
  var duration_record = _duration_record(sequelize, DataTypes);
  var episode = _episode(sequelize, DataTypes);
  var favorite = _favorite(sequelize, DataTypes);
  var play_record = _play_record(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_card = _product_card(sequelize, DataTypes);
  var product_order = _product_order(sequelize, DataTypes);
  var teacher = _teacher(sequelize, DataTypes);


  return {
    account,
    banner,
    bullet_screen,
    category,
    category_product,
    chapter,
    comment,
    course_answer,
    course_note,
    course_question,
    duration_record,
    episode,
    favorite,
    play_record,
    product,
    product_card,
    product_order,
    teacher,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
