/* tslint:disable */

declare var Object: any;
export interface TodoInterface {
  text: string;
  id?: number;
}

export class Todo implements TodoInterface {
  text: string;
  id: number;
  constructor(instance?: TodoInterface) {
    Object.assign(this, instance);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Todo`.
   */
  public static getModelName() {
    return "Todo";
  }
}
