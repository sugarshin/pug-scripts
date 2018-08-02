module.exports.data = [
  {
    files: '*',
    attributes: {
      src: 'https://www.google.com/recaptcha/api.js',
      async: true,
      defer: true,
    },
  },
  {
    files: '*',
    attributes: {
      src: 'https://unpkg.com/react@16/umd/react.production.min.js',
      crossorigin: true,
    },
  },
  {
    files: 'index.html',
    attributes: {},
    inline: 'const f = n => n ** n',
  },
  {
    files: 'notrendered.html',
    attributes: {},
    inline: '// noop',
  },
]
