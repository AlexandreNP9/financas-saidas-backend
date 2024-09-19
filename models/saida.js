module.exports = (sequelize, DataTypes) => {
  const Saida = sequelize.define('Saida', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    beneficiario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Beneficiario',
        key: 'id',
      },
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    valor_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CategoriaSaida',
        key: 'id',
      },
    },
    comprovante_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Comprovante',
        key: 'id',
      },
      allowNull: true,
    },
  }, {
    tableName: 'Saida',
    timestamps: false,
  });

  return Saida;
};
