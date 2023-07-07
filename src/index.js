const core = require("@actions/core"); // provides an interface to the workflow commands, input and output variables, exit statuses, and debug messages
const github = require("@actions/github"); // returns an authenticated Octokit REST client and access to GitHub Actions contexts

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The even payload: ${payload}`);
} catch (error) {
  console.log(`Oh noes! (->) ${error.message}`);
  core.setFailed(error.message);
}
