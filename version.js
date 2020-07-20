// Get Git Commit SHA and Branch

const fs = require('fs-extra')
const execa = require('execa');

const rev = execa.commandSync('git rev-parse HEAD').stdout
const branch = execa.commandSync('git branch --show-current').stdout  
const git = {rev, branch}

fs.writeFile('public/config/version.json', JSON.stringify(git))
  .then(() => {
      console.log(`Saved version file with rev: ${git.rev}, branch: ${git.branch}`);
  })
  .catch((err) => {
      console.log(err);
  });