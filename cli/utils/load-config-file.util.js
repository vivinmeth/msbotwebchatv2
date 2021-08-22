const fs = require('fs');
const path = require('path');

module.exports = (ROOT, verbose, interactive) => {
    let cli_config = {
        log_config: {
            verbose: false
        },
        'hide-runtime': true,
        interactive: interactive
    };
    verbose && console.log('Default CLI Config:', cli_config);
    const file = path.resolve(ROOT, 'empwc.json');
    verbose && console.log('Config file Path:', file);
    try {
        if (fs.existsSync(file)) {
            verbose && console.log('Config file found!');
            const cli_config_from_file = require(file);
            verbose && console.log('cli config loaded successfully!');
            cli_config = {
                ...cli_config,
                ...cli_config_from_file
            };
            cli_config.log_config.verbose = verbose ? true : cli_config.log_config.verbose;
            cli_config.log_config.verbose && console.log('Final CLI config:', cli_config);
            return cli_config;
        }
    } catch(err) {
        console.warn('CLI config file not found. using default config.')
        return cli_config
    }
}
