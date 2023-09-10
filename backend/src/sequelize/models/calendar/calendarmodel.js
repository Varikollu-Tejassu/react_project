module.exports = (sequelize, Sequelize) => {
    const calendarmodel = sequelize.define("calendarmodel", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: false,
        primaryKey: true
      },
      event_type: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
       
      },
      end_date: {
        type: Sequelize.DATEONLY,
        
       
      },
      start_time:{
        type: Sequelize.TIME
      },

      end_time: {
        type: Sequelize.TIME
      },
      other_details :{
        type:Sequelize.STRING
      }


    },
    {
      timestamps:false,
      createdAt:false,
      updatedAt:false
    }
  
);
  
    return calendarmodel;
  };