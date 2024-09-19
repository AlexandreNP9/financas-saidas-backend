module.exports = (sequelize, DataTypes) => {
  const ItemComprovante = sequelize.define('ItemComprovante', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    codigo_produto: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    unidade_referencia: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    valor_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    valor_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    categoria_item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CategoriaItem',
        key: 'id',
      },
    },
    emocao_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Emocao',
        key: 'id',
      },
    },
    comprovante_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Comprovante',
        key: 'id',
      },
    },
  }, {
    tableName: 'ItemComprovante',
    timestamps: false,
  });

  return ItemComprovante;
};
