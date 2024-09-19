module.exports = (sequelize, DataTypes) => {
  const Saida = sequelize.define('Saida', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    beneficiario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Beneficiario',
        key: 'id'
      }
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CategoriaSaida',
        key: 'id'
      }
    },
    comprovante_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Comprovante',
        key: 'id'
      }
    }
  }, {
    tableName: 'Saida'
  });

  Saida.associate = function(models) {
    Saida.belongsTo(models.Beneficiario, { foreignKey: 'beneficiario_id' });
    Saida.belongsTo(models.CategoriaSaida, { foreignKey: 'categoria_id' });
    Saida.belongsTo(models.Comprovante, { foreignKey: 'comprovante_id', allowNull: true });
  };

  return Saida;
};
