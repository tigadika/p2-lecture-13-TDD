'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Idol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Idol.init({
    name: DataTypes.STRING,
    group: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Idol',
  });
  return Idol;
};