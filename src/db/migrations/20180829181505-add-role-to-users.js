'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Users",
      "role",
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 // standard; 1 = premium; 2 = admin
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "role");
  }
};
