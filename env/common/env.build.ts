/** @class buildEnvironment
 *  Nuxt ビルド設定変数
 */
export class buildEnvironment {

    /** @type {boolean} SSR有効 */
    public readonly ssr: boolean = false;

    /** @type {boolean} 静的サイト*/
    public readonly static: boolean = true;

    public readonly buildModules: string[] = [
        "@nuxtjs/stylelint-module",
        "@nuxtjs/eslint-module",
    ];

    constructor() {

    }

}

