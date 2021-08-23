export * from './empwc/types';


// SCSS as modules
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

// YAML as modules
declare module '*.yaml' {
    const data: any
    export default data
}

/** adding custom elements in react typescript context

*/

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // 'emplay-webchat': EmplayWebChatAttributes;
            // 'emp-wc': EmplayWebChatAttributes;
            'emplay-webchat-core': EmplayWebChatCOreAttributes;
        }
    }
}
