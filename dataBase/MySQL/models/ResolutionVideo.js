'use strict';

module.exports = (sequelize, DataTypes) => {
    const ResolutionVideo = sequelize.define('ResolutionVideo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        resolution: {
            type: DataTypes.STRING
        }

    }, {
        tableName: 'resolution_video',
        timestamps: false
    });

    return ResolutionVideo
};
