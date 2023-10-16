require('dotenv').config()

const DB = {
    app: {
        port: process.env.PORT
    },
    url: {
        dbUrl: process.env.URL
    }
}

module.exports ={ DB};
