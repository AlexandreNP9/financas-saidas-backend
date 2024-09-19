module.exports = (sequelize, DataTypes) => {
  const CategoriaItem = sequelize.define('CategoriaItem', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    tableName: 'CategoriaItem',
    timestamps: false,
  });

  return CategoriaItem;
};
