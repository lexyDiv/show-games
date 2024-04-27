/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.check_resurs_pro = function (prioritetToDo) {
  // levelUpgrade

  if (prioritetToDo) {
    if (
      prioritetToDo === 'townHoll'
        && (this.gold < 1000 || this.wood < 1000)
    ) {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 1000) {
        prioritetToDo = 'wood';
      }
    } else if (
      prioritetToDo === 'farm'
        && (this.gold < 500 || this.wood < 300)
    ) {
      if (this.gold < 500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'batrak') {
      if (this.gold < 400) {
        prioritetToDo = 'gold';
      }
    } else if (
      prioritetToDo === 'lesopilka'
        || prioritetToDo === 'barack'
        || prioritetToDo === 'kuznya'
    ) {
      if (this.gold < 700) {
        prioritetToDo = 'gold';
      } else if (this.wood < 500) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'rizar') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 100) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'mechnick') {
      if (this.gold < 600) {
        prioritetToDo = 'gold';
      }
    } else if (prioritetToDo === 'luchnik') {
      if (this.gold < 500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 50) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'ballista') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'tower') {
      if (this.gold < 1500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 500) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'towerOnUpgrade') {
      if (this.gold < 500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 200) {
        prioritetToDo = 'wood';
      }
    } else if (
      prioritetToDo === 'dopNoFlyAttack_level'
        || prioritetToDo === 'dopNoFlyPanzer_level'
        || prioritetToDo === 'dopFlyAttack_level'
        || prioritetToDo === 'dopFlySee_level'
        || prioritetToDo === 'dopBallista'
        || prioritetToDo === 'dopAttack'
    ) {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 500) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'levelUpgrade') {
      if (this.gold < 2000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 1000) {
        prioritetToDo = 'wood';
      }
    } else if (
      prioritetToDo === 'ogreBase'
        || prioritetToDo === 'altar'
        || prioritetToDo === 'dragon_roost'
        || prioritetToDo === 'temple'
    ) {
      if (this.gold < 2000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 1000) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'port') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (
      prioritetToDo === 'transport'
        || prioritetToDo === 'oil_tanker'
    ) {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'oil_Ref' || prioritetToDo === 'foundry') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'distroer') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'linkor') {
      if (this.gold < 1500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 500) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'turtle') {
      if (this.gold < 1200) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'mag') {
      if (this.gold < 1500) {
        prioritetToDo = 'gold';
      }
    } else if (prioritetToDo === 'dragoon') {
      if (this.gold < 5000) {
        prioritetToDo = 'gold';
      }
    }
  }

  // console.log("gold : "+this.gold)
  // console.log(prioritetToDo)

  // if(this.gold<0){pausa=1;};

  return prioritetToDo;
};
