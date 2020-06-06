import Input, { InputType } from "../logic/input";
import { GameEvent } from "./Event";

export class GameInputEvent extends GameEvent {

  constructor(private inputType : InputType)	 {
    super();
  }

  getInputType = () : InputType => {
    return this.inputType;
  }
}

export class GameInputUpEvent extends GameInputEvent {
  constructor(inputType : InputType)	 {
    super(inputType);
  }
}
export class GameInputDownEvent extends GameInputEvent {
  constructor(inputType : InputType)	 {
    super(inputType);
  }
}