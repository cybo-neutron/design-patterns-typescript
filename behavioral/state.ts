enum EnemyState {
  IDLE,
  PATROL,
  CHASE,
  ATTACK,
}

interface State {
  e: EnemyState;

  enterState: () => void;
  exitState: () => void;
  handleState: () => void;
}

class IdleState implements State {
  e: EnemyState;

  constructor() {
    this.e = EnemyState.IDLE;
  }

  enterState() {
    console.log(`Entering Idle state`);
  }
  exitState() {
    console.log(`Exiting Idle state`);
  }
  handleState() {
    console.log(``);
  }
}
