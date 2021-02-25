const mix = require('laravel-mix');

mix.webpackConfig({
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'resources/js')
      }
   }
});

// if (mix.inProduction()) {
//    const ASSET_URL = process.env.ASSET_URL;

//    mix.webpackConfig(webpack => {
//       return {
//          plugins: [
//             new webpack.DefinePlugin({
//                "process.env.ASSET_PATH": JSON.stringify(ASSET_URL)
//             })
//          ],
//          output: {
//             publicPath: ASSET_URL
//          }
//       };
//    });
// }
// mix.js('resources/js/front/app.js', 'public/js')
//    .sass('resources/sass/front/app.scss', 'public/css')


// mix.webpackConfig(webpack => {
//    return {
//       plugins: [
//          new webpack.ProvidePlugin({
//             'window.Quill': 'quill',
//             'Quill': 'quill'
//          })
//       ]
//    };
// });

// mix.js('resources/js/admin/admin.js', 'public/js/admin')
//    .sass('resources/sass/admin/app.scss', 'public/css/admin')


mix.js('resources/js/escort/app.js', 'public/js/escort')
   .sass('resources/sass/escort/app.scss', 'public/css/escort')








