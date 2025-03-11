// Simulasi data (bisa diganti dengan database nanti)
const users = [
    { id: 1, name: 'Andi' },
    { id: 2, name: 'Budi' }
  ];
  
  module.exports = {
    getAllUsers: () => users,
    getUserById: (id) => users.find(user => user.id === id)
  };