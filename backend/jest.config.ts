import dotenv from 'dotenv';
import {Config} from '@jest/types';

dotenv.config();

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js'],
};


export default config;