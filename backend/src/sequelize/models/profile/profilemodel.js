module.exports = (sequelize, Sequelize) => {
    const profile = sequelize.define("profile", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: false,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        
      },
      joining_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        unique: false
      },
      designation: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false

      },
      emp_id: {
        type: Sequelize.STRING,
       

      },
      status: {
        type: Sequelize.STRING,
      

      },
      is_admin: {
        type: Sequelize.BOOLEAN,
        

      },
      work_location: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false

      },
      designation: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false

      }




    },
    {
      timestamps:false,
      createdAt:false,
      updatedAt:false
    }
  
);
  
    return profile;
  };