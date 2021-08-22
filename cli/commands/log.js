// const vorpal = require('vorpal')();

module.exports = (vorpal, log_config) => {

    vorpal.command("log", "set the cli log config")
        .option("--show-config", "shows current config")
        .option('-v | --verbose (true|false)','set\'s cli log mode to verbose')
        .action((args, cb) => {
            if (args.options['show-config']){
                vorpal.log('Log config:', log_config);
                cb();
            }
            log_config = {
                ...log_config,
                ...args.options
            };
            log_config.verbose && vorpal.log('New log config:', log_config);
            cb();
        });
};
