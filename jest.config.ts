export default {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};
