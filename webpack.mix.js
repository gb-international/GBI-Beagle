const mix = require('laravel-mix');
const path = require('path');


mix.override((config) => {
   delete config.watchOptions;
});

mix.webpackConfig({
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'resources/js'),
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
//front
 mix.js('resources/js/front/app.js', 'public/js').vue()
  .sass('resources/sass/front/app.scss', 'public/css')

//Front with SSR
// mix
//   .sass('resources/sass/front/app.scss', 'public/css');
//   .js('resources/js/front/app.js', 'public/js')
//   .js('resources/js/front/app-server.js', 'public/js')
  


mix.webpackConfig(webpack => {
   return {
      plugins: [
         new webpack.ProvidePlugin({
            'window.Quill': 'quill',
            'Quill': 'quill'
         })
      ]
   };
});


//admin
//mix.js('resources/js/admin/admin.js', 'public/js/admin').vue()
 //.sass('resources/sass/admin/app.scss', 'public/css/admin')


//escort
   //mix.js('resources/js/escort/app.js', 'public/js/escort').vue()
    //.sass('resources/sass/escort/app.scss', 'public/css/escort')

//mix.js('resources/js/laravel-echo-setup.js', 'public/js');




