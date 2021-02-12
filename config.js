const config = {
  development: {
    APP_HOST: "localhost",
    APP_PORT: 3000,
    //DB_URL: "mongodb://localhost:27017/codegigas",
    MONGODB_URL: "mongodb+srv://codegigas:97dCPgFjmB6c1XuL@sandbox.7lffu.mongodb.net/codegigas"
  },
  production: {
    APP_HOST: "codegigas.com",
    APP_PORT: 3000,
    MONGODB_URL: "mongodb+srv://codegigas:97dCPgFjmB6c1XuL@sandbox.7lffu.mongodb.net/codegigas"
  }
}

module.exports = {
  APP_HOST: config[process.env.NODE_ENV].APP_HOST,
  APP_PORT: config[process.env.NODE_ENV].APP_PORT,
  MONGODB_URL: config[process.env.NODE_ENV].MONGODB_URL,
};