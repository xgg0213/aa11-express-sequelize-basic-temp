'use strict';

const {Insect} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await Insect.bulkCreate([
    {
      name:'test1',
      description: 'desc1',
      territory: 'terri1',
      fact: 'fact1',
      millimeters: 25
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete([
      {
        name:'test1',
        description: 'desc1',
        territory: 'terri1',
        fact: 'fact1',
        millimeters: 25
      }
    ])
  }
};
