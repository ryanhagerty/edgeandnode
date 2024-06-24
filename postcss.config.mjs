/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    cssnano: {},
    "postcss-custom-media-generator": {
      small: 540,
      medium: 767,
      large: 1080,
      xlarge: 1200,
    },
    "postcss-preset-env": {},
  },
}

export default config
