'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(12);
    
    await queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        email: 'admin@agriculture.com',
        password: await bcrypt.hash('admin123', salt),
        role: 'admin',
        first_name: 'System',
        last_name: 'Administrator',
        phone: '+1234567890',
        address: '123 Admin Street',
        city: 'Admin City',
        state: 'Admin State',
        country: 'India',
        postal_code: '123456',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'farmer',
        email: 'farmer@agriculture.com',
        password: await bcrypt.hash('farmer123', salt),
        role: 'farmer',
        first_name: 'John',
        last_name: 'Farmer',
        phone: '+1234567891',
        address: '456 Farm Road',
        city: 'Farm City',
        state: 'Farm State',
        country: 'India',
        postal_code: '123457',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'distributor',
        email: 'distributor@agriculture.com',
        password: await bcrypt.hash('distributor123', salt),
        role: 'distributor',
        first_name: 'Jane',
        last_name: 'Distributor',
        phone: '+1234567892',
        address: '789 Distribution Ave',
        city: 'Distribution City',
        state: 'Distribution State',
        country: 'India',
        postal_code: '123458',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'dealer',
        email: 'dealer@agriculture.com',
        password: await bcrypt.hash('dealer123', salt),
        role: 'dealer',
        first_name: 'Bob',
        last_name: 'Dealer',
        phone: '+1234567893',
        address: '101 Dealer Lane',
        city: 'Dealer City',
        state: 'Dealer State',
        country: 'India',
        postal_code: '123459',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
