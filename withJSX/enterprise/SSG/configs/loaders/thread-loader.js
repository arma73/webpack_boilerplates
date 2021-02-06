"use-strict";

// Helpers
const { production } = require("../helpers/options");

module.exports = ({ name }) => ({
    "loader": "thread-loader",
    "options": {
        // can be used to create different pools with elsewise identical options
        name,
        // the number of spawned workers, defaults to (number of cpus - 1) or
        // fallback to 1 when require('os').cpus() is undefined
        "workers": 4,
        // number of jobs a worker processes in parallel
        // defaults to 20
        "workerParallelJobs": 50,
        // Allow to respawn a dead worker pool
        // respawning slows down the entire compilation
        // and should be set to false for development
        "poolRespawn": production,
    },
});
