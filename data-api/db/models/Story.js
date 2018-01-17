import Sequelize from 'sequelize'
import db from '../connect'

const Story = db.define('story', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  template: {
    type: Sequelize.ENUM,
    values: ['scroller', 'slider', 'original'],
    defaultValue: 'original',
  },
  visibility: {
    type: Sequelize.ENUM,
    values: ['published', 'draft']
  },
  creatorId: {
    type: Sequelize.UUID
  }
}, {
  freezeTableName: true,
})


export default Story