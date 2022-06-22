import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';
import image from '@rollup/plugin-image';

export default {
  input: "src/index.js",
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    copy({
      targets: [
        {
          src: "src/assets/**/*",
          dest: "dist/asset"
        }
      ]
    }),
    css({
      output: 'bundle.css'
    }),
    html(),
    image(),
  ]
}