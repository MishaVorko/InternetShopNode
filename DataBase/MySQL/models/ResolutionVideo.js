'use strict';
const {sequelize, Sequelize} = require('../index');

const ResolutionVideo = sequelize.define('ResolutionVideo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    resolution: {
        type: Sequelize.STRING
    }

}, {
    tableName: 'resolution_video',
    timestamps: false
});

module.exports = ResolutionVideo;
