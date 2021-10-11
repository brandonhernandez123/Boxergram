'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'userId' })
      Post.hasMany(models.Comment, { foreignKey: 'postId' })
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      caption: DataTypes.STRING,
      image: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      dislikes: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          id: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  )
  return Post
}
