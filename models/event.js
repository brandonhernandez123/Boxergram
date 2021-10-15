'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.User, { foreignKey: 'userId' })
      Event.hasMany(models.Comment, { foreignKey: 'eventId' })
    }
  }
  Event.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      location: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events'
    }
  )
  return Event
}
