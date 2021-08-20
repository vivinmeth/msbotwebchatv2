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
