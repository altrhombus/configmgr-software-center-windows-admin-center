
import { Config } from './common/config';

function gulpConfig(): Config {
    return {
        resjson: {
            resourceName: 'AltrhombusSoftwareCenter',
            localeOffset: 0,
            localePath: 'loc'
        },
        powershell: {
            name: 'altrhombus.software-center',
            guid: '5862f193-a8c3-4325-a0a5-7d8ba82a71b8',
            list: [
                'src',
                'node_modules/@microsoft/windows-admin-center-sdk'
            ],
            enablePester: false,
            skipCim: true
        },
        test: {
            skip: true
        }
    };
}

exports.gulpConfig = gulpConfig;
