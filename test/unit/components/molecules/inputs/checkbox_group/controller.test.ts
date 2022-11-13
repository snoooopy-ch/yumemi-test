import CheckboxCtrl, { CheckBoxTestInput } from "~/components/molecules/inputs/checkbox/controller";
import CheckboxGroupCtrl from "~/components/molecules/inputs/checkbox_group/controller";

function buildCheckboxes(args: CheckBoxTestInput[]): CheckboxCtrl[] {
  return args.map((arg: CheckBoxTestInput) => new CheckboxCtrl("", arg.value, arg.prefCode.toString()))
}

describe("CheckboxGroupCtrl", () => {
  describe("selectedArrForNameKey", () => {
    test.each([
      {
        name: "3つを選択",
        checkboxes: buildCheckboxes([{
          prefCode: 100, value: true
        }, {
          prefCode: 101, value: true
        }, {
          prefCode: 102, value: true
        }]),
        expected: ["100", "101", "102"],
      },
      {
        name: "3つ中2つ選択",
        checkboxes: buildCheckboxes([{
          prefCode: 100, value: true
        }, {
          prefCode: 101, value: false
        }, {
          prefCode: 102, value: true
        }]),
        expected: ["100", "102"],
      },
      {
        name: "選択なし",
        checkboxes: buildCheckboxes([{
          prefCode: 100, value: false
        }, {
          prefCode: 101, value: false
        }, {
          prefCode: 102, value: false
        }]),
        expected: [],
      }
    ])("$name", ({ checkboxes, expected }) => {
      expect(
        new CheckboxGroupCtrl("", checkboxes)
          .selectedArrForNameKey
      ).toStrictEqual(expected);
    });
  });
});
