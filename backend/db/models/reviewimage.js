'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // ONE-TO-MANY
      ReviewImage.belongsTo(models.Review,   { foreignKey: 'reviewId', onDelete: 'CASCADE' });
    }
  }

  ReviewImage.init({
    reviewId: {
      type: DataTypes.INTEGER
    },

    url: {
      type: DataTypes.STRING
    }
  }, {

    sequelize,
    modelName: 'ReviewImage',
  });

  return ReviewImage;
};
