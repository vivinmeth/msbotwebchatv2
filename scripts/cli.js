#! /usr/bin/env node

const Package = require('../package.json');
const vorpal = require("vorpal")();
const ora = require('ora');
const interactive = vorpal.parse(process.argv, {use: 'minimist'})._ === undefined;
console.log('runtime:', __dirname, __filename, Package.version, "mode: interactive?", interactive);


vorpal
    .command("build", "builds the webchat bundle and package")
    .option('--bot <botName>')
    .action((args, cb) => {
        vorpal.log(args);
        const spinner = ora("Stating build process...").start();
        setTimeout(() => {
            spinner.text = "setting up build env..."
            setTimeout(() => {
                spinner.text = "building..."
                setTimeout(() => {
                    spinner.text = "build process complete!"
                    setTimeout(() => {
                        spinner.text = "cleaning up build env..."
                        setTimeout(() => {
                            spinner.succeed("Build Successful!");
                            cb();
                        }, 2100);
                    }, 1100);
                }, 32000);
            }, 1100);
        }, 1500);
    });


if (interactive){
    vorpal.delimiter('emplay-webchat$').show();
} else{
    // argv is mutated by the first call to parse.
    process.argv.unshift('')
    process.argv.unshift('')
    vorpal
        .delimiter('')
        .parse(process.argv)
}
