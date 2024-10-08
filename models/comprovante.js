module.exports = (sequelize, DataTypes) => {
  const Comprovante = sequelize.define('Comprovante', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    imagem: {
      type: DataTypes.BLOB('long'),
      allowNull: true,
    },
    tipo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TipoComprovante',
        key: 'id',
      },
    },
    numero_acesso: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    tableName: 'Comprovante',
    timestamps: false,
  });

  return Comprovante;
};
