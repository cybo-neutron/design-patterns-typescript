/*
Extending over the idea of dependency inversion from S.O.L.I.D principles
*/

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // eat() {
  //   console.log(`${this.name} is eating`);
  // }
}

//#region running_behavior
interface RunningBehavior {
  run: () => void;
}

class SlowRunningBehavior implements RunningBehavior {
  run() {
    console.log(`runing very speed`);
  }
}

class FastRunningBehavior implements RunningBehavior {
  run() {
    console.log(`runing slow, very slow`);
  }
}

//#endregion

//#region walking behavior
interface WalkingBehavior {
  walk: () => void;
}

class TwoLegWalkingBehavior implements WalkingBehavior {
  walk() {
    console.log(`walking with 2 legs`);
  }
}

class FourLegWalkingBehavior implements WalkingBehavior {
  walk() {
    console.log(`walking with 4 legs`);
  }
}

//#endregion

//#region Eating behavior
interface EatingBehavior {
  eat: () => void;
}

class ChewByEatingBehavior implements EatingBehavior {
  eat() {
    console.log(`This creature is chewing...mmmmmmm`);
  }
}

class SwallowEatingBehavior implements EatingBehavior {
  eat() {
    console.log(`This creature swallows. It would take forever for digestion`);
  }
}

//#endregion


class Sparrow extends Animal implements WalkingBehavior, RunningBehavior,EatingBehavior{

  wb : WalkingBehavior;
  rb : RunningBehavior;
  eb : EatingBehavior;

  walk(){

  }
  run(){

  }
  eat(){

  }
}

class AnimalBuilder{
}


