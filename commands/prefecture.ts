/**
 * 物件関連のコマンドを集約するファイル
 */

import ConfigurationBuilder from "./api/configuration_builder";
import { DefaultApi } from "~/plugins/openapi";
import Prefecture from "~~/models/prefeture";

export type PrefectureType = {
  prefCode: number;
  prefName: string;
}

export type PrefecturesGetResponse = {
  message: string;
  result: PrefectureType[]
}

export class PrefecturesGetCommand {
  protected readonly config = useRuntimeConfig()

  constructor(
    private readonly $api: DefaultApi = new DefaultApi(
      new ConfigurationBuilder().buildDefault()
    )
  ) {}

  /**
   * @throws {Error}
   */
  async execute(): Promise<Prefecture[]> {
    const res = (await this.$api.apiV1PrefecturesGet(
      {
        xAPIKEY: this.config.REASA_KEY  
      }
    )) as PrefecturesGetResponse;

    if (res.result) {
      return res.result.map((p: PrefectureType) => Prefecture.createFromRaw(p))
    }

    return [];
  }
}

