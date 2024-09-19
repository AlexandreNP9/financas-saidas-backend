module.exports = (sequelize, DataTypes) => {
  const Comprovante = sequelize.define('Comprovante', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    imagem: {
      type: DataTypes.BLOB, // BYTEA para imagem
      allowNull: true,
    },
    tipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Marcar como obrigatório, se necessário
      references: {
        model: 'TipoComprovante',
        key: 'id'
      }
    },
    numero_acesso: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  }, {
    tableName: 'Comprovante'
  });

  Comprovante.associate = function(models) {
    Comprovante.belongsTo(models.TipoComprovante, { foreignKey: 'tipo_id' });
  };

  return Comprovante;
};
