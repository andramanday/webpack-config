// let mode = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

module.exports ={
    // mode: mode,
    devtool: false,
    module : {
        rules:[{
            test : /\.js$/,
            exclude : /node_modules/,
            use: {
                loader : "babel-loader"
            }
        }]
    },
    devServer : {
        contentBase: "./dist"    
    }
}