/// <reference types="vite/client" />

declare module 'parallax-js' {
  export default class Parallax {
    constructor(element: HTMLElement, options?: Record<string, unknown>);
    destroy(): void;
  }
}
