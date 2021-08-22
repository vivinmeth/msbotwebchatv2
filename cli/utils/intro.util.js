
module.exports.Introduction = (Package, vorpal) => {
    // Do Not Modify the CLI presentation without permission from Author, Organisation
    splitter(vorpal);
    vorpal.log(Package["misc"].title, `(${Package.name})`);
    vorpal.log(`VERSION: v${Package.version}`);
    vorpal.log(`Description: ${Package.description}`);
    vorpal.log(`Author: ${Package.author}`);
    vorpal.log(`Organisation: ${Package["misc"].org}`);
    Package.contributors.length > 0 && vorpal.log(`Contributors: \n - ' ${Package.contributors.join('\n - ')}`);
    splitter(vorpal);
}

const splitter = (logger) => {
    logger.log("===============================================================");

};

module.exports.splitter = splitter;
