const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');


// Create a Sequelize model
function UsersModelCtor(database) {
  const Users = database.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // hooks: {
    //   beforeCreate() {
    //     (user) => {
    //       const hashedPassword = bcrypt.hash(user.password, 5);
    //       user.password = hashedPassword;
    //     }
    //   }
    // }
  });
  
  Users.beforeCreate(async (user) => {
    console.log(user);
    const hashedPassword = await bcrypt.hash(user.password, 5);
  
    console.log(hashedPassword);
    user.password = hashedPassword;
  });
  return Users;
} 

module.exports = { UsersModelCtor };
