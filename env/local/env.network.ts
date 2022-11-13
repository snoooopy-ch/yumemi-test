/** @class networkEnvironment
 *  Nuxt network設定変数
 */
export class networkEnvironment {
    public readonly test:boolean = true;
    public readonly API_BASE_URL: string = process.env.TARGET_URL;
    public readonly REASA_KEY: string = process.env.REASA_KEY;
    public readonly APP_CODE: string = "yumemi";

    constructor() {
    }

}

