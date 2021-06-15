const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        email: 'marcos@togdesign.com.br',
        password: await bcrypt.hash('123456', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        email: 'togdesign@togdesign.com.br',
        password: await bcrypt.hash('123456', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
