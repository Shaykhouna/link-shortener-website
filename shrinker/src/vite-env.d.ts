/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TINYURL_API_TOKEN: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
