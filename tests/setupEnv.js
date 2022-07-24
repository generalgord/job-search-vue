var dotenv = require("dotenv");

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: ".env.development" });
} else {
  dotenv.config({ path: ".env.production" });
}
