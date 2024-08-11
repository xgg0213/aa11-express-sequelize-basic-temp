'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        capitalize(value) {
          for (i=0; i<value.lenght; i++) {
            if (value[i] !== value[i].toUpperCase()){
              throw new Error('not Title Cased')
            }
          }
        },

      }
    },
    description: {
      type: DataTypes.STRING,

    },
    territory: {
      type: DataTypes.STRING,
    },
    fact: {
      type: DataTypes.STRING,
      validate: {
        // len: {
        //   args: [1, 240],
        //   msg: 'fact must not exceed characters'
        // }
        lengthMax(value) {
          if (value.length>240) {
            throw new Error('fact must not exceed characters')
          }
        }
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};