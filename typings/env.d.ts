/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_DEFAULT_LOCALE: string
  readonly I18N_SUPPORTED_LOCALES: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
