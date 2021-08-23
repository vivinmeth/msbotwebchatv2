// import {AzureCliCredential, InteractiveBrowserCredential} from "@azure/identity";
// import {BaseRequestPolicy, BlobServiceClient, newPipeline} from "@azure/storage-blob";
// import {exec} from "child_process";
const {exec, spawn} = require('child_process');
const {AzureCliCredential, InteractiveBrowserCredential} = require('@azure/identity');
const {BaseRequestPolicy, BlobServiceClient, newPipeline} = require('@azure/storage-blob');


const execCommand = (command) => {
    return new Promise((resolve, reject) => {
        // exec(command, (error, stdout, stderr) => {
        //     if (error) {
        //         console.log(`error: ${error.message}`);
        //         // return reject(error);
        //     }
        //     if (stderr) {
        //         console.log(`stderr: ${stderr}`);
        //         // return reject(stderr);
        //     }
        //     console.log(`stdout: ${stdout}`);
        //     return resolve(stdout);
        // });
        const ls = spawn(command.split(' ')[0],command.split(" ").slice(1));

        ls.stdout.on("data", data => {
            console.log(`stdout: ${data}`);
        });

        ls.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        ls.on('error', (error) => {
            console.log(`error: ${error.message}`);
        });

        ls.on("close", code => {
            console.log(`child process exited with code ${code}`);
            resolve();
        });
    });

}

class RequestIDPolicyFactory {
    // Constructor to accept parameters
    constructor(prefix) {
        this.prefix = prefix;
    }

    // create() method needs to create a new RequestIDPolicy object
    create(nextPolicy, options) {
        return new RequestIDPolicy(nextPolicy, options, this.prefix);
    }
}

// Create a policy by extending from BaseRequestPolicy
class RequestIDPolicy extends BaseRequestPolicy {
    constructor(nextPolicy, options, prefix) {
        super(nextPolicy, options);
        this.prefix = prefix;
    }

    // Customize HTTP requests and responses by overriding sendRequest
    // Parameter request is WebResource type
    async sendRequest(request) {
        // Customize client request ID header
        request.headers.set(
            "x-ms-version",
            `2020-02-10`
        );

        // response is HttpOperationResponse type
        const response = await this._nextPolicy.sendRequest(request);

        // Modify response here if needed

        return response;
    }
}

async function withInteractiveBrowserCredential() {
    // const credential = new InteractiveBrowserCredential({
    //     tenantId: "86010b1e-460a-476b-9fb8-3a0321ac5209",
    //     // clientId: "32007994-bc3d-4ecb-aeba-2a42475ae2ea"
    //     redirectUri: "http://localhost:9003"
    // });

    // console.log(await execCommand('az login -t 86010b1e-460a-476b-9fb8-3a0321ac5209'));

    const credential = new AzureCliCredential();

    const pipeline = newPipeline(credential);
    console.log(pipeline);

// Inject customized factory into default pipeline
    pipeline.factories.unshift(new RequestIDPolicyFactory("Prefix"));

    const client = new BlobServiceClient('https://emplayazstorage.blob.core.windows.net/', pipeline);

    // const lm = await client.getProperties();
    try{
        const constainers = [];
        let i = 0;
        for await (const container of client.listContainers()) {
            console.log(`Container ${i++}: ${container.name}`);
            console.log(container);
            constainers.push(container.name)

        }
        console.log(constainers);

    }catch (err){
        console.error(err);
    }

    // const client = new SecretClient("https://key-vault-name.vault.azure.net", credential);


}


// Create a policy factory with create() method provided


module.exports = {
    execCommand,
    withInteractiveBrowserCredential
}
