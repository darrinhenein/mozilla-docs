#!/usr/bin/env node

var shell = require('shelljs');
var program = require('commander');

var command = process.argv[2];
var wintersmithPath = './node_modules/mozdoc';
var originalPath = shell.pwd();

if(!shell.test('-e', wintersmithPath)) {
  console.error('  Error: Please install mozdoc npm package localy:');
  console.error('\n\tnpm install mozdoc\n');
  return;
}

program
  .version('0.0.1')
  .usage('[command]');

program.on('--help', function() {
  console.log('  Commands:');
  console.log('');
  console.log('    build: generates a static site in ./build');
  console.log('    serve: serves site on http://localhost:8080');
  console.log('');
  console.log('  Examples:');
  console.log('');
  console.log('    $ wintersmith build');
  console.log('    $ wintersmith serve');
  console.log('');
});

program.parse(process.argv);

var copyResources = function() {
  // Copies user's authored documents and images into our wintersmith directory.
  shell.cp('-Rf', './documents/*', wintersmithPath + '/contents/');
  shell.cp('-Rf', './images/*', wintersmithPath + '/contents/images');
}

if(command == 'build') {
  copyResources();
  shell.exec('wintersmith build '
            + '--chdir "' + wintersmithPath + '" '
            + '-X --output "' + originalPath + '/build"');
}
else if(command == 'serve') {
  require('chokidar')
    .watch('./documents/', {ignored: /[\/\\]\./})
    .on('all', function(event, path) {
      copyResources();
    });

  // Wintersmith should be run aysnc or it will block our file watcher
  shell.exec('wintersmith preview '
            + '--chdir "'+ wintersmithPath + '" '
            + '--output "' + originalPath + '/build"',
            { async:true });
}
else {
  console.error("  Error: '" + command + "' is not a valid command");
  program.help();
}
