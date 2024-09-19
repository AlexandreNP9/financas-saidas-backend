module.exports = (sequelize, DataTypes) => {
  const Emocao = sequelize.define('Emocao', {
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
    tableName: 'Emocao',
    timestamps: false,
  });

  return Emocao;
};
