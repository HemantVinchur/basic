let settings = {};

const DBConfig = {
    local: {
        mongo: {
            host: "localhost",
            port: 27017,
            database: "basic",
        },
    }
}

switch (process.env.NODE_ENV) {
    default: let local = DBConfig.local;
    DBConfig.local.URI = `mongodb://${local.mongo.host}:${local.mongo.port}/${local.mongo.database}`;
    settings = DBConfig.local;
    break;
}


module.exports = settings;