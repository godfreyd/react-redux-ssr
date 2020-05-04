const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: ENV,
    // Tell webpack to run babel on every file it runs throught
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env','@babel/preset-react']
                        },
                    },
                    // { 
                    //     loader: 'ts-loader', 
                    //     options: { happyPackMode: true } 
                    // }
                ]
            }
        ]
    }
}