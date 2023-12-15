const User = require("./User.model");
const Message = require("./Message.model");
const Group = require("./Group.model");

User.hasMany(Message);
User.hasMany(Group);

Group.belongsTo(User);
Message.belongsTo(User);

Group.hasMany(Message);
Message.belongsTo(Group);

module.exports = {
    User,
    Message,
    Group,
};