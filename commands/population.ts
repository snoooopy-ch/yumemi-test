/**
 * 物件関連のコマンドを集約するファイル
 */

import ConfigurationBuilder from "./api/configuration_builder";
import { DefaultApi } from "~/plugins/openapi";
import Population from "~~/models/population";

export type PopulationType = {
  year: number;
  value: number;
}

export type PopulationCompositionGetResponse = {
  message: string;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: {
        year: number;
        value: number;
      }[]
    }[]
  }
}

export class PopulationCompositionGetCommand {
  protected readonly config = useRuntimeConfig()

  constructor(
    private readonly prefCode: number,
    private readonly $api: DefaultApi = new DefaultApi(
      new ConfigurationBuilder().buildDefault()
    )
  ) {}

  /**
   * @throws {Error}
   */
  async execute(): Promise<Population[]> {
    const res = (await this.$api.apiV1PopulationCompositionPerYearGet(
      {
        cityCode: '-',
        prefCode: this.prefCode,
        xAPIKEY: this.config.REASA_KEY  
      }
    )) as PopulationCompositionGetResponse;

    if (res.result?.data?.length > 0) {
      return res.result.data.find((data:any) => data.label == '総人口').data.map((p:PopulationType) => Population.createFromRaw(p))
    }

    return [];
  }
}

