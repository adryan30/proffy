const packageJson = require('../../package.json'); // Take root package.json
const fs = require('fs');
const deps = packageJson['firebase-functions-dependencies'];

// Template of package.json for Firebase Functions
const firebaseFunctionsPackageJson = {
  engines: { node: '10' },
  main: 'main.js',

  // filter only dependencies we need for Firebase Functions
  dependencies: deps.reduce((acc, cur) => {
    acc[cur] = packageJson.dependencies[cur];
    return acc;
  }, {}),
};

const path = 'dist/apps/backend/package.json'; // Where to save generated package.json file

fs.writeFileSync(path, JSON.stringify(firebaseFunctionsPackageJson));
console.log(`${path} written successfully.`);
