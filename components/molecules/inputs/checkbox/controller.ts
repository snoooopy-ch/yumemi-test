import { BaseInput } from "..";

export default class CheckboxCtrl extends BaseInput<boolean> {
  constructor(
    public readonly label: string,
    public value: boolean,
    public readonly name: string = '',
  ) {
    super();
  }

  get selected(): boolean {
    return this.value? true : false;
  }

  tick(): void {
    this.value = true;
  }

  untick(): void {
    this.value = false;
  }
}
