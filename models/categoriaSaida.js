module.exports = (sequelize, DataTypes) => {
    const CategoriaSaida = sequelize.define('CategoriaSaida', {
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
      tableName: 'CategoriaSaida'
    });
  
    return CategoriaSaida;
  };
  