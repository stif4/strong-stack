import { Configuration as BuildDevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): BuildDevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    };
}
