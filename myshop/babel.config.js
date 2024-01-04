module.exports = {
    plugins: [
        "module-resolver",
        {
          root: ["."],
          alias: {
            // This needs to be mirrored in tsconfig.json
            "^@myshop/(.+)": "./src/\\1",
          },
        },
      ],
    ],
  };