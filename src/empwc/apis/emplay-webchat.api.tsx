import {createDirectLine} from "botframework-webchat";

declare global {
    interface Window{
        empwcapiinit: boolean;
    }
}

export class EmplayWebChatAPI {

    Middlewares = {
        DirectLineMWR: {
            Connection: createDirectLine({
                secret: "TwbA_KoJmQU.3-BAeeMaH_O2FvFnZ6Ez2Phc6VilHNoRvGslZ3mXmiU"
            }),
            newConnection(){
                this.Connection =  createDirectLine({
                    secret: ""
                })
            }
        }
    }



    constructor() {
        let init = false;
        init = true;
        window.empwcapiinit = init;
    }
}
