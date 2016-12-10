const APP = 'kaido';

module.exports = {
  appName: APP,
  port: 9999,
  mongo: {
    uri: `mongodb://localhost:27017/${APP}`,
  },
  logging: {
    accessLog: {
      filename: `/data/log/${APP}.access.log`,
      frequency: 'daily',
      date_format: 'YYYYMMDD',
      verbose: true,
    },
    errorLog: `/data/log/${APP}.error.log`,
    format: ':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version"'
      + ' :status :res[content-length] ":referrer" ":user-agent" :response-time ms',
  },
  logger: {
    path: `/data/log/${APP}.log`,
    eLog: `/data/log/${APP}.eLog`,
    dataPath: `/data/log/${APP}.data.log`,
    level: 'INFO',
  },
  secrets: {
    session: 'i am taoge',
  },
  pageInfo: {
    perPage: 10,
  },
  weixin: {
    clientID: '',
    clientSecret: '',
    callbackURL: '',
  },
};
