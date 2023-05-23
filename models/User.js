module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isAlpha: true,
              len: [2, 15],
            },
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          image: {
            type: DataTypes.STRING,
          },
        },
        {
          timestamps: true,
          underscored: true,
        }
      );

      User.associate = (db) =>{
        User.hasMany(db.Todo,{
            foreignKey: "userId",
            onDelete: 'Restrict',
            onUpdate: 'Restrict'
        })
      }

      return User
}