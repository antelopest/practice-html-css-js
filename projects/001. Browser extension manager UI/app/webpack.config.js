import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: 'assets',
                    noErrorOnMissing: true
                }
            ]
        })
    ]
}