module.exports = {
    plugins: [
        "module-resolver",
        {
          root: ["."],
          alias: {
            // This needs to be mirrored in tsconfig.json
            "^@toy-app/(.+)": "./src/\\1",
          },
        },
      ],
  };