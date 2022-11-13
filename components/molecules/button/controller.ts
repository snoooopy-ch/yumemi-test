import { Callable, CallableWithParam } from "~/types";


export default class ButtonCtrl {
  constructor(
    private params: {
	    customClass?: string;	
      text?: string;
      onClick?: Callable;
    }
  ) {}

  get text(): string | undefined {
    return this.params.text;
  }

  get onClick(): Callable {
    return this.params.onClick || (() => {});
  }

  get customClass(): string {
    return this.params.customClass || '';
  }

  get className(): string {
    const list: string[] = [];
    list.push(this.text ? "" : "no-text");
    list.push(this.customClass?? '')
    return list.join(" ");
  }

  setOnClick(onClick: Callable): ButtonCtrl {
    this.params.onClick = onClick;
    return this;
  }

  /**
   * onClickイベントハンドラ以外の全てのプロパティをクローン
   */
  clone(): ButtonCtrl {
    return new ButtonCtrl({
      text: this.text,
      customClass: this.customClass
    });
  }

  static createDefault(): ButtonCtrl {
    return new ButtonCtrl({
    });
  }
}
