import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import alias from '@rollup/plugin-alias';
const path = require('path');
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input:'src/main.js',
    output: {
        file:'dist/bundle.js',
        format:'umd',
        name:'bundleName',
        sourcemap: true
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        babel({
            exclude:'node_modules/**'
        }),
        terser(),
        alias({
            entries: [
                {find:'@',replacement: path.join(__dirname, 'src')}
            ]
        }),
        livereload(),
        serve({
            open: true,
            port:8080,
            contentBase: ''
        })
    ],
    // external:['lodash']
}