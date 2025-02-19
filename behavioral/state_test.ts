enum GameStateEnum {
  START,
  PLAYING,
  PAUSE,
  EXIT,
}

interface GameState {
  state: GameStateEnum;
  enterState: () => void;
  exitState: () => void;
  handleState: () => void;
}

class GameStartState implements GameState {
  state: GameStateEnum;

  constructor() {
    this.state = GameStateEnum.START;
  }
  enterState() {}
  exitState() {}
  handleState() {
    // transition to play state
  }
}

class GameStateManager {
  currentGameState: GameState;

  init() {}

  transitionState(targetGameState: GameStateEnum) {
    this.currentGameState.exitState();
    switch (targetGameState) {
      case GameStateEnum.START:
        this.currentGameState = new GameStartState();
        break;
      case GameStateEnum.PLAYING:
        break;
      case GameStateEnum.PAUSE:
        break;
      case GameStateEnum.EXIT:
        break;
      default:
        this.currentGameState = new GameStartState();
    }

    this.currentGameState.enterState()
  }
}

function checkGameState() {}
