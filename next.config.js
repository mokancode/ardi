// next.config.js

// Install these libraries before using this cfg: npm i imagemin-mozjpeg@9.0.0 imagemin-optipng@8.0.0 next-compose-plugins@2.2.1 next-optimized-images@2.6.2

// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
 
// module.exports = withPlugins([
//   [optimizedImages, {
//     // these are the default values so you don't have to provide them if they are good enough for your use-case.
//     // but you can overwrite them here with any valid value you want.
//     inlineImageLimit: 8192,
//     imagesFolder: 'images',
//     imagesName: '[name]-[hash].[ext]',
//     handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
//     removeOriginalExtension: false,
//     optimizeImages: true,
//     optimizeImagesInDev: false,
//     mozjpeg: {
//       quality: 80,
//     },
//     optipng: {
//       optimizationLevel: 3,
//     },
//     pngquant: false,
//     gifsicle: {
//       interlaced: true,
//       optimizationLevel: 3,
//     },
//     svgo: {
//       // enable/disable svgo plugins here
//     },
//     webp: {
//       preset: 'default',
//       quality: 75,
//     },
//   }],
// ]);