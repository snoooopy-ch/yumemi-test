export default class DataSet {
  constructor(private readonly params: {
    label: number, 
    data: number[],
    color: string
  }) {}

  get label(): number {
    return this.params.label;
  }

  get data(): number[] {
    return this.params.data;
  }

  get color(): string {
    return this.params.color;
  }
}

export type PrefectureData = {
  prefCode: number,
  dataset: DataSet
}