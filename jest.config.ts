import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,

    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        "@adaas/a-sdk/constants/(.*)": ["<rootDir>/src/constants/$1"],
        "@adaas/a-auth/api/(.*)": ["<rootDir>/src/api/$1"],
        "@adaas/a-sdk/entities/(.*)": ["<rootDir>/src/entities/$1"],
        "@adaas/a-sdk/global/(.*)": ["<rootDir>/src/global/$1"],
        "@adaas/a-sdk/types/(.*)": ["<rootDir>/src/types/$1"],
        "@adaas/a-sdk/helpers/(.*)": ["<rootDir>/src/helpers/$1"],
        "@adaas/a-sdk/definitions/(.*)": ["<rootDir>/src/definitions/$1"],
    }

};
export default config;