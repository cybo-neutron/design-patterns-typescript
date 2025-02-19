// similar to event driven

/*

*/

interface IDeathSubscriber {
  actionOnPlayerDeath: () => void;
}

class Player {
  deathSubscribers: IDeathSubscriber[];

  constructor() {
    this.deathSubscribers = [];
  }

  subscribe(deathSubscriber: IDeathSubscriber) {
    this.deathSubscribers.push(deathSubscriber);
  }

  unsubscribe(deathSubscriber: IDeathSubscriber) {
    const dsIndex = this.deathSubscribers.findIndex(
      (ds) => ds === deathSubscriber
    );
    if (dsIndex >= 0) {
      this.deathSubscribers.splice(dsIndex, 1);
    }
  }

  die() {
    for (const ds of this.deathSubscribers) {
      ds.actionOnPlayerDeath();
    }
  }
}

class GameManager implements IDeathSubscriber {
  actionOnPlayerDeath() {
    console.log(`GameManager : Game is over.. stopping the game loop`);
  }
}

class UIManager implements IDeathSubscriber {
  actionOnPlayerDeath() {
    console.log(`UIManager : Game over screen`);
  }
}

class ScoreManager implements IDeathSubscriber {
  actionOnPlayerDeath() {
    console.log(`ScoreManager : Making score entry in the leaderboard`);
    console.log(`ScoreManager : Resetting the score`);
  }
}

const player = new Player();
const scoreManager = new ScoreManager();
const uiMan = new UIManager();
const gMan = new GameManager();

player.subscribe(uiMan);
player.subscribe(scoreManager);
player.subscribe(gMan);
// player.unsubscribe(gMan);
// player.unsubscribe(gMan);

player.die();
