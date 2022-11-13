import { BaseInput } from "..";
import CheckboxCtrl from "../checkbox/controller";

export type CheckboxGroupValue = { [key: string]: boolean };

export type CheckboxGroupIntValue = { [key: string]: number };

export default class CheckboxGroupCtrl extends BaseInput<CheckboxGroupValue> {
  constructor(
    public label: string,
    public checkboxes: CheckboxCtrl[],
  ) {
    super();
  }

  get value(): CheckboxGroupValue {
    return this.checkboxes.reduce((acc: CheckboxGroupValue, cur) => {
      acc[cur.label] = cur.value;
      return acc;
    }, {});
  }

  get valueForNameKey(): CheckboxGroupValue {
    return this.checkboxes.reduce((acc: CheckboxGroupValue, cur) => {
      acc[cur.name] = cur.value;
      return acc;
    }, {});
  }

  get selectedArr(): string[] {
    return this.checkboxes
      .filter((checkbox) => checkbox.value)
      .map((checkbox) => checkbox.label);
  }

  get selectedArrForNameKey(): string[] {
    return this.checkboxes
      .filter((checkbox) => checkbox.value)
      .map((checkbox) => checkbox.name);
  }

  private tickBoxes(selected: string[]): void {
    this.checkboxes.forEach((checkbox) => {
      if (selected.includes(checkbox.label)) checkbox.value = true;
    });
  }

  select(items: string[]) : void {
    this.checkboxes.filter((checkbox) => 
      items.includes(checkbox.name)
    ).forEach((checkbox) => {
      checkbox.value = true;
    })
  }
}
