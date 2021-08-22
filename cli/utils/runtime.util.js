module.exports = (vorpal, DIR, ROOT, cli_config) => {
    // Do Not Modify the CLI presentation without permission from Author, Organisation
    vorpal.log("Runtime Info:");
    cli_config.log_config.verbose && vorpal.log(`Directory: ${DIR}`);
    vorpal.log(`Root or WorkDir: ${ROOT}`);
    vorpal.log(`Node version: ${process.version}`);
    vorpal.log('isVerbose:', cli_config.log_config.verbose);
    vorpal.log('isInteractive', cli_config.interactive)
    require('./intro.util').splitter(vorpal);
}
