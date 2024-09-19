module.exports = (sequelize, DataTypes) => {
  const Beneficiario = sequelize.define('Beneficiario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    numero_identificacao: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    tableName: 'Beneficiario',
    timestamps: false,
  });

  return Beneficiario;
};
