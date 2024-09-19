module.exports = (sequelize, DataTypes) => {
  const TipoComprovante = sequelize.define('TipoComprovante', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  }, {
    tableName: 'TipoComprovante'
  });

  return TipoComprovante;
};
