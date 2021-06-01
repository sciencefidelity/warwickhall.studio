module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command(
      "sass --style=compressed ./scss/main.scss ./css/main.css"
    );
  },
};
