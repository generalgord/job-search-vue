var dotenv = require("dotenv");

if (process.env.NODE_ENV === "test") {
  dotenv.config({ debug: true, path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ debug: true, path: ".env.development" });
} else {
  dotenv.config({ path: ".env.production" });
}
