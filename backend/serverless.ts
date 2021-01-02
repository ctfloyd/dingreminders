import type { AWS } from '@serverless/typescript';
import { hello } from './src/functions';

// This offers compliance with an out of date? serverlss library
interface LambdaHash {
    provider: {
        lambdaHashingVersion: string
    }
}

const serverlessConfiguration: AWS & LambdaHash = {
  service: 'dingreminders-backend',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: ['serverless-offline', 'serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    stage: 'local',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: { hello }
}

module.exports = serverlessConfiguration;
