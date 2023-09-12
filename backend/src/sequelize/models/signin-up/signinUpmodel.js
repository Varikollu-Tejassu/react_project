module.exports = (sequelize, Sequelize) => {
  const signinup = sequelize.define(
    "signinUp",
    {
      first_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      dob: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        unique: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return signinup;
};
