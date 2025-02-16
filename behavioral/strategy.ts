interface IDamageable {
  health;

  takeDamage: (damage: number) => void;
}

class Player implements IDamageable {
  health: number;

  constructor(startHealth: number) {
    this.health = startHealth;
  }

  takeDamage(damage: number) {
    this.health -= damage;
    console.log(`Damage: Aaaahhhh!!!`)
    if (this.health <= 0) {
      console.log(`Player is dead`);
      console.log(`Game is over!! duhhhhh!!!!`);
    }
  }
}

interface IAttackingBehavior {
  attackStrength: number;
  attack: (damageableObject: IDamageable) => void;
}

class MeleeAttackingBehavior implements IAttackingBehavior {
  attackStrength: number;

  constructor(attackStrength: number) {
    this.attackStrength = attackStrength;
  }
  attack(damageableObject: IDamageable) {
    console.log(`Attack : Slashhhhh`);
    damageableObject.takeDamage(this.attackStrength);
  }
}

class RangedAttackingBehavior implements IAttackingBehavior {
  attackStrength: number;

  constructor(attackStrength: number) {
    this.attackStrength = attackStrength;
  }

  attack(damageableObject: IDamageable) {
    console.log(`Attack:  Phewww! Phewww!`);
    damageableObject.takeDamage(this.attackStrength);
  }
}

class Enemy {
  name: string;

  constructor(name) {
    this.name = name;
  }
}

class AttackingEnemy extends Enemy implements IAttackingBehavior {
  attackStrength: number;
  attackingBehavior: IAttackingBehavior;
  constructor(
    name: string,
    attackStrength: number,
    attackingBehavior: IAttackingBehavior
  ) {
    super(name);
    this.attackStrength = attackStrength;
    this.attackingBehavior = attackingBehavior;
  }

  attack(damageableObject: IDamageable) {
    this.attackingBehavior.attack(damageableObject);
  }
}

const wizard = new AttackingEnemy("wizard", 20, new RangedAttackingBehavior(20));
const wolf = new AttackingEnemy("wolf", 10, new MeleeAttackingBehavior(10));

const player = new Player(40);

wolf.attack(player)
wizard.attack(player)
wizard.attack(player)

// class WizardEnemy extends Enemy implements IAttackingBehavior {
//   attackingBehavior: IAttackingBehavior;
//   attackStrength: number;

//   constructor(attackingBehavior: IAttackingBehavior, attackStrength: number) {
//     super("wizard")
//     this.attackingBehavior = attackingBehavior;
//     this.attackStrength = this.attackStrength;
//   }

//   attack(damageableObject: IDamageable) {
//     this.attackingBehavior.attack(damageableObject);
//   }
// }

// class WolfEnemy extends Enemy implements IAttackingBehavior {
//   attackingBehavior: IAttackingBehavior;
//   attackStrength: number;

//   constructor(attackingBehavior: IAttackingBehavior, attackStrength: number) {
//     super("wolf")
//     this.attackingBehavior = attackingBehavior;
//     this.attackStrength = this.attackStrength;
//   }

//   attack(damageableObject: IDamageable) {
//     this.attackingBehavior.attack(damageableObject);
//   }
// }
