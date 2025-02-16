export const APP_CONFIG = {
    CHAT_ID: '5256839108',

    TOKEN: '7835011116:AAGswhbipA00qUaH__Lm8RcJHc2pOa_mKbA',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
