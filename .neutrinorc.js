module.exports = {
  //aimed to be able to puplish on GH pages
  options {
    output: 'docs'
  },

  use: [
    ['neutrino-preset-airbnb-base'],
    ['neutrino-middleware-styles-loader'],
    [
      'neutrino-preset-web',
      {
        html: {
          title: 'My App',
        }
      }
    ],
  ]
};
