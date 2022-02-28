module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '81bcc19034881768f22d6936fa3c79b3'),
  },
});
