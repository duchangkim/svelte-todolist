export interface ITodoItem {
  id: number,
  checked: boolean,
  text: string,
};

export interface IHandleKeyup {
  (e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }): any;
}

export interface IHandleCheck {
  (id: number): any;
}

export interface IHandleRemove {
  (id: number): any;
}

export interface IHandleModify {
  (e: Event & { currentTarget: EventTarget & HTMLInputElement }, id: number): any;
}