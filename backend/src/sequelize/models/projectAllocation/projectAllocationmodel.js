module.exports = (sequelize, Sequelize) => {
    const projectAllocation = sequelize.define("projectAllocation", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: false,
        primaryKey: true,
      },
      project_id: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      project_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      project_description: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
       
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
       
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
       
      },
      reporting_manager: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        
      }



    },
    {
      timestamps:false,
      createdAt:false,
      updatedAt:false
    }
  
);
  
    return projectAllocation;
  };