// const vorpal = require('vorpal')();
module.exports = (vorpal, ora) => {
    vorpal
        .command("build", "builds the webchat bundle and package")
        .option('--bot <botName>', "pass specific bot name to build the webchat for.")
        .action((args, cb) => {
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
};
