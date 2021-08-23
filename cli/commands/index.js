
module.exports= (vorpal, ora, cli_config) => {
    const log = require('./log')(vorpal, cli_config.log_config);
    const build = require('./build')(vorpal, ora);
    const login = require('./login')(vorpal, cli_config);
    const containerls = require('./list-containers')(vorpal);

    // return {
    //     log,
    //
    // }

}
