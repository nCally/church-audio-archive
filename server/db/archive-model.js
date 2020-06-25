
const { Model, DataTypes } = require("sequelize");
const db = require("./index");

class Archive extends Model { }

Archive.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: DataTypes.STRING,
        minister: DataTypes.STRING,
        link: DataTypes.STRING,
        size: DataTypes.STRING,
        day: DataTypes.NUMBER,
        month: DataTypes.NUMBER,
        year: DataTypes.NUMBER
    },
    { sequelize: db }
)

module.exports = Archive;