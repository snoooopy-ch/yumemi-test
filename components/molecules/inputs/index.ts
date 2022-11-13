export abstract class BaseInput<ValueT> {
  /**
   * 入力項目名
   */
  abstract label: string;

  /**
   * 入力値
   */
  abstract value: ValueT;
}
