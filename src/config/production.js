const prodConfig = {
  PORT: `${process.env.PORT}`,
  NODE_ENV: `${process.env.NODE_ENV}`,
  DATABASE_URL: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.oxbda.mongodb.net/${process.env.DATABASE_NAME}-${process.env.NODE_ENV}?retryWrites=true&w=majority`,
};
export default prodConfig;
