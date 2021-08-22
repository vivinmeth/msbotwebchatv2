#! /usr/bin/env node
const path = require('path');
const Package = require('../package.json');
const vorpal = require("vorpal")();
const ora = require('ora');

const DIR = __dirname;
const ROOT = path.resolve(__dirname, '../');
// Verbose arg processing
let verbose = process.argv.includes('-v') || process.argv.includes('--verbose');
if (verbose){
    process.argv = process.argv.filter((arg) => arg !== '-v' && arg !== '--verbose');
}
// =======================
const pre_processing_parse = vorpal.parse(process.argv, {use: 'minimist'});
const interactive = pre_processing_parse._ === undefined;

let cli_config = require('./utils/load-config-file.util')(ROOT, verbose, interactive);

const IntroUtil = require('./utils/intro.util');
IntroUtil.Introduction(Package, vorpal);




!cli_config['hide-runtime'] && require('./utils/runtime.util')(vorpal, DIR, ROOT, cli_config);



require("./commands")(vorpal, ora, cli_config);


if (cli_config.interactive){
    vorpal.delimiter('emplay-webchat$').show();
} else{
    // argv is mutated by the first call to parse.
    process.argv.unshift('')
    process.argv.unshift('')
    vorpal
        .delimiter('')
        .parse(process.argv)
}
// IntroUtil.splitter(vorpal);
