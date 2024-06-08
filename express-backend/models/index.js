const User = require('./user');
const Role = require('./role');

User.belongsTo(Role);
Role.hasMany(User);

module.exports = { User, Role };