export default {
    apps: [
      {
        name: "Magic Swap v2",
        script: "node_modules/next/dist/bin/next",
        args: "start",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };