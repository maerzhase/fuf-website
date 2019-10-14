const dotenv = require('dotenv');
const webpack = require('webpack');
const projects = [
  {
    link: 'care',
    gallery: [
      ['image', '/static/care/01.jpg'],
      ['image', '/static/care/02.jpg'],
      ['image', '/static/care/03.jpg'],
      ['image', '/static/care/04.jpg'],
    ],
  },
  {
    link: 'glamour',
    gallery: [
      ['image', '/static/glamour/01.jpg'],
      ['image', '/static/glamour/02.jpg'],
      ['image', '/static/glamour/03.jpg'],
      ['image', '/static/glamour/04.jpg'],
    ],
  },
  {
    link: 'weapon',
    gallery: [
      ['embed', 'https://player.vimeo.com/video/309847175'],
      ['image', '/static/weapon/01.jpg'],
      ['image', '/static/weapon/02.jpg'],
      ['image', '/static/weapon/03.jpg'],
      ['image', '/static/weapon/04.jpg'],
      ['image', '/static/weapon/05.jpg'],
      ['image', '/static/weapon/06.jpg'],
      ['image', '/static/weapon/07.jpg'],
      ['image', '/static/weapon/08.jpg'],
    ],
  },
  {
    link: 'lust',
    gallery: [
      ['image', '/static/lust/01.jpg', '© Paula Reissig'],
      ['embed', 'https://player.vimeo.com/video/188169589'],
      ['image', '/static/lust/02.jpg', '© Paula Reissig'],
      ['image', '/static/lust/03.jpg', '© Paula Reissig'],
      ['image', '/static/lust/04.jpg', '© Paula Reissig'],
      ['image', '/static/lust/05.jpg', '© Paula Reissig'],
      ['image', '/static/lust/06.jpg', '© Paula Reissig'],
      ['image', '/static/lust/07.jpg', '© Paula Reissig'],
    ],
  },
  {
    link: 'fiktion',
    gallery: [
      ['image', '/static/fiktion/01.jpg', '© Sebastian Pircher'],
      ['image', '/static/fiktion/02.jpg', '© Sebastian Pircher'],
    ],
  },
];


exports.webpack = config =>
  Object.assign(config, {
    plugins: [
      ...config.plugins,
      new webpack.EnvironmentPlugin({
        ...dotenv.config().parsed,
      }),
      // isDev &&
      //   clearRequireCachePlugin([
      //     /\.next\/server\/static\/development\/pages/,
      //     /\.next\/server\/ssr-module-cache.js/,
      //     /ada-next/,
      //   ]),
    ],
  });

const pages = {
  '/': { page: '/' },
  ...projects.reduce((acc,p) => {
    acc[`/${p.link}/index`] = { page: '/[projectId]/index'};
    p.gallery.forEach((image, index) => {
      acc[`/${p.link}/${index}`] = { page: '/[projectId]/[imageId]'};
    });
    return acc;
  }, {}),
};
console.log(pages);

exports.exportPathMap = async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return pages
  };