// deploy.js

const ghpages = require("gh-pages");
const path = require("path");

ghpages.publish(path.join(__dirname, "./build"), function (err) {
  if (err) {
    console.error("Deployment failed with error:", err);
  } else {
    console.log("Deployment successful!");
  }
});
