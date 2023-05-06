
declare module '*.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.jpg' {
    const value: any;
    export = value;
}

declare module '*.png' {
    const value: any;
    export = value;
}