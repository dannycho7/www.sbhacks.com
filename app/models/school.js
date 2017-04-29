'use strict';

module.exports = function(sequelize, DataTypes) {
  var school = sequelize.define('school', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return school;
};
