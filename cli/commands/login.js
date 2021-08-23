const {execCommand} = require('../az-login');

module.exports = (vorpal, cli_config) => {
    vorpal
        .command("login", "log's the user into Azure AD")
        .action((args, cb) => {
            execCommand('az login -t 86010b1e-460a-476b-9fb8-3a0321ac5209').then(res => {
                console.log(res);
                cb();
            }).catch(err => console.error(err))
        });
};
