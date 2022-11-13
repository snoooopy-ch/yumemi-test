import { BaseInput } from ".";

export default class VAdapter<ValueT> {
  constructor(public readonly ctrl: BaseInput<ValueT>) {}

  get = (): ValueT => {
    return this.ctrl.value;
  };

  set = (value: ValueT) => {
    this.ctrl.value = value;
  };
}
