import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import * as  path from "path";
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input:'src/main.js',
    output: [
        {
            file:'dist/bundle.cjs.js',
            format:'cjs',
            name:'bundleName',
        },
        {
            file:'dist/bundle.esm.js',
            format:'esm',
            name:'bundleName',
        },
        {
            file:'dist/bundle.umd.js',
            format:'umd',
            name:'bundleName',
        },
    ],
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        babel({
            exclude:'node_modules/**'
        }),
        alias({
            entries: [
                {find:'@',replacement: path.join(process.cwd(), 'src')}
            ]
        }),
        // terser()
    ],
    external:['lodash']
}