const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        email: 'marcos@togdesign.com.br',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        email: 'togdesign@togdesign.com.br',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
