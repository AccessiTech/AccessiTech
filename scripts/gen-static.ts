import { generate } from "@accessitech/vite-ssg";
import config from "../ssg.config";

(async () => {
  console.log("Starting static site generation...");
  await generate(config)
    .catch((error) => {
      console.error("Error during static site generation:", error);
    });
  console.log("...static site generation finished.");
})();
  