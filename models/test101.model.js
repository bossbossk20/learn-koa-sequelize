import Sequelize from 'sequelize'
import { db } from './../db'

export default db.define('test101', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  surname: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'test101',
  timestamp: false
})

