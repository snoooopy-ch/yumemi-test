import { PrefectureType } from "~~/commands/prefecture";

export default class Prefecture {
  constructor(private readonly params: {
    prefCode: number, 
    prefName: string
  }) {}

  get prefCode(): number {
    return this.params.prefCode;
  }

  get prefName(): string {
    return this.params.prefName;
  }

  static createFromRaw(data: PrefectureType): Prefecture {
    return new Prefecture(data);
  }
}