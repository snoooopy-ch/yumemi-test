import { PopulationType } from "~~/commands/Population";

export default class Population {
  constructor(private readonly params: {
    year: number, 
    value: number
  }) {}

  get year(): number {
    return this.params.year;
  }

  get value(): number {
    return this.params.value;
  }

  static createFromRaw(data: PopulationType): Population {
    return new Population(data);
  }
}