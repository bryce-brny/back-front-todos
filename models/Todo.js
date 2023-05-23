module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define(
        "Todo",
        {
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          dueDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
          remainDay: {
            type: DataTypes.VIRTUAL,
            get() {
              let diff = new Date(this.dueDate).getTime() - new Date()
              let n_days = Math.ceil(diff / (1000 * 3600 * 24));
              return n_days
            }
          },
          status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        },
        {
          underscored: true,
        }
      );

      Todo.associate = (db) => {
        Todo.belongsTo(db.User, {
            foreignKey: 'userId',
            onDelete: 'Restrict',
            onUpdate: 'Restrict'
          })
      }
      
      return Todo
}