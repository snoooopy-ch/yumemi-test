import { buildEnvironment } from "./common/env.build";
import { workboxEnvironment } from "./common/env.workbox";
import { scssEnvironment } from "./common/env.scss";
import { networkEnvironment } from "./local/env.network";

/**
 * 実行（ビルド）環境に応じて、適切な設定値を選択する。
 */
export default class ConfigStrategy {
  constructor(private readonly nodeEnv: string) {}

  get build() {
    return new buildEnvironment();
  }

  get workbox() {
    return new workboxEnvironment();
  }

  get scss() {
    return new scssEnvironment();
  }

  /**
   * @throws {Error}
   */
  get network() {
    return new networkEnvironment();
  }
}
