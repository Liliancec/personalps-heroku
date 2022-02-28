module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL','https://young-eyrie-33026.herokuapp.com/'),
});
