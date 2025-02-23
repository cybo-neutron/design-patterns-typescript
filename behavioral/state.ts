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
    console.log(`Yo I'm idle.`);
  }
}


class PatrolState implements State {
  e: EnemyState;

  constructor() {
    this.e = EnemyState.PATROL;
  }

  enterState() {
    console.log(`Entering Patrol state`);
  }
  exitState() {
    console.log(`Exiting Patrol state`);
  }
  handleState() {
    console.log(`Patrolling with full attention`);
  }
}


class ChaseState implements State {
  e: EnemyState;

  constructor() {
    this.e = EnemyState.CHASE;
  }

  enterState() {
    console.log(`Entering Chase state`);
  }
  exitState() {
    console.log(`Exiting Chase state`);
  }
  handleState() {
    console.log(`Chasing player`);
  }
}


class AttackState implements State {
  e: EnemyState;

  constructor() {
    this.e = EnemyState.ATTACK;
  }

  enterState() {
    console.log(`Entering Attack state`);
  }
  exitState() {
    console.log(`Exiting Attack state`);
  }
  handleState() {
    console.log(`Attacking player`);
  }
}


class Enemy {
  currentState: State

  constructor() {
    this.currentState = new IdleState()
    this.currentState.enterState()
  }

  transitionState(targetState: State) {
    this.currentState.exitState()
    this.currentState = targetState
    this.currentState.enterState()
  }
}



const enemy = new Enemy()

// go to patrol state
enemy.transitionState(new PatrolState())
// while patroling enemy sees the player -> it starts chasing the player
enemy.transitionState(new ChaseState())
// the player is now in th enemy's attack range -> it starts attaking the player
enemy.transitionState(new AttackState())
// the player runs away from the enemy -> the enemy goes to idle state
enemy.transitionState(new IdleState())


