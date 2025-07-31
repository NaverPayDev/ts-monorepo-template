import * as path from 'node:path'
import {includeIgnoreFile} from '@eslint/compat'
import naverpay from '@naverpay/eslint-config'
import naverpayPlugin from '@naverpay/eslint-plugin'

export default [
    includeIgnoreFile(path.join(import.meta.dirname, '.gitignore')),
    {
        ignores: [
            '.github/**',
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/.next/**',
            '**/.cache/**',
            '**/.turbo/**',
            '**/*.config.*',
            '**/turbo/**',
        ],
    },
    ...naverpay.configs.node,
    ...naverpay.configs.react,
    ...naverpay.configs.strict,
    ...naverpay.configs.packageJson,
    {
        plugins: {
            '@naverpay': naverpayPlugin,
        },
        rules: {},
    },
]
