module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://stark-temple-02257.herokuapp.com/"),
  app: {
    keys: env.array("afkzdlfnkdlnfdzklfkzl"),
  },
});
