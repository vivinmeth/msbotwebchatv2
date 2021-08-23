const {withInteractiveBrowserCredential} = require('../az-login')

module.exports = (vorpal) => {
    vorpal.command('containerls','lists all containers')
        .action((args, cb) => {
            withInteractiveBrowserCredential().then(() => cb()).catch();
        });
}
