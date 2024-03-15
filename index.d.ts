declare module 'main' {
  // Extism exports take no params and return an I32
  export function run(): I32;
}

declare module 'extism:host' {
  interface user {
    httpFetch(ptr: I64): I64;
  }
}