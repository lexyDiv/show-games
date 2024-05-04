/* eslint-disable no-param-reassign */
/* eslint-disable no-self-compare */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable func-names */

const select_sound_fight = function (unit, sound_type, volume) {
  if (volume <= 0 || !volume || volume !== volume) {
    return;
  }

  if (volume > 1) {
    volume = 1;
  }

  if (unit.sweeme) {
    if (sound_type === 'dead') {
      const s = new Audio();
      s.src = 'sounds/h/ship/dead.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 2.5, unit, sound_type));
    }
  }

  if (unit.type === 'turtle') {
    if (sound_type === 'fight') {
      const s = new Audio();
      s.src = 'sounds/orc/ship/subv.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.5, unit, sound_type));
    }
  } else if (unit.type === 'linkor') {
    if (sound_type === 'fight') {
      const s = new Audio();
      s.src = 'sounds/h/ship/linv.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 2, unit, sound_type));
    }
  } else if (unit.type === 'distroer') {
    if (sound_type === 'fight') {
      const s = new Audio();
      s.src = 'sounds/h/ship/disv.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 2, unit, sound_type));
    }
  } else if (unit.fly) {
    if (unit.nation === 'h') {
      if (sound_type === 'dead') {
        const s = new Audio();
        s.src = 'sounds/h/dracon/dead.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.91, unit, sound_type));
      } else if (sound_type === 'fight') {
        const s = new Audio();
        s.src = 'sounds/h/dracon/boo.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 4.87, unit, sound_type));
      }
    } else if (sound_type === 'fight') {
      const ran = Math.floor(Math.random() * 2);

      const s = new Audio();
      s.src = 'sounds/orc/dracon/rev1.mp3';
      sounds.push(new Sound(s, 0.43, 2.53, unit, sound_type));
    } else if (sound_type === 'dead') {
      const s = new Audio();
      s.src = 'sounds/orc/dracon/rev2.mp3';
      sounds.push(new Sound(s, 0.43, 9.9, unit, sound_type));
    }
  } else if (unit.unitName === 'mag') {
    if (unit.nation === 'orc') {
      if (sound_type === 'dead') {
        const s = new Audio();
        s.src = 'sounds/orc/mag/dead.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.41, unit, sound_type));
      }
    } else if (sound_type === 'dead') {
      const s = new Audio();
      s.src = 'sounds/h/mag/dead.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.61, unit, sound_type));
    }

    if (sound_type === 'nar') {
      const s = new Audio();
      s.src = 'sounds/h/mag/Slow.wav';

      sounds_fight.push(new Sound(s, 0, 2.25, unit, sound_type));
    } else if (sound_type === 'tor') {
      const s = new Audio();
      s.src = 'sounds/orc/mag/tor.wav';

      sounds_fight.push(new Sound(s, 0, 2.58, unit, sound_type));
    } else if (sound_type === 'z') {
      const s = new Audio();
      s.src = 'sounds/orc/mag/Dethcoil.wav';

      sounds_fight.push(new Sound(s, 0, 2.02, unit, sound_type));
    } else if (sound_type === 'fight') {
      const s = new Audio();
      s.src = 'sounds/h/mag/Touchdrk.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 0.52, unit, sound_type));
    }
  } else if (unit.unitName === 'ballista') {
    if (sound_type === 'fight') {
      const s = new Audio();
      s.src = 'sounds/ballista/Catapult.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 0.84, unit, sound_type));
    }
  } else if (unit.unitName === 'rizar') {
    if (unit.nation === 'h') {
      if (sound_type === 'rage') {
        const s = new Audio();
        s.src = 'sounds/h/rizar/mag/Heal.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.83, unit, sound_type));
        // console.log("here");
      } else if (sound_type === 'dead') {
        const s = new Audio();
        s.src = 'sounds/h/dead.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      } else if (sound_type === 'fight') {
        const s = new Audio();
        s.src = 'sounds/orc/mechnik/Sword2.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.39, unit, sound_type));
      }
    } else if (sound_type === 'rage') {
      const s = new Audio();
      s.src = 'sounds/orc/rizar/mag/bloodlust.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 2.22, unit, sound_type));
      // console.log("here");
    } else if (sound_type === 'fight') {
      const s = new Audio();
      s.src = 'sounds/orc/rizar/hit.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 0.25, unit, sound_type));
      // console.log("here");
    } else if (sound_type === 'dead') {
      const s = new Audio();
      s.src = 'sounds/orc/batrak/dead.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
    }
  } else if (unit.unitName === 'luchnik') {
    if (unit.nation === 'h') {
      if (sound_type === 'dead') {
        const s = new Audio();
        s.src = 'sounds/h/dead.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      } else if (sound_type === 'fight') {
        const s = new Audio();
        s.src = 'sounds/h/luchnik/Bowfire.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.47, unit, sound_type));
      }
    } else if (sound_type === 'fight') {
      const s = new Audio();
      s.src = 'sounds/orc/luchnik/Bowfire.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.12, unit, sound_type));
    } else if (sound_type === 'dead') {
      const s = new Audio();
      s.src = 'sounds/orc/batrak/dead.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
    }
  } else if (unit.unitName === 'mechnick') {
    if (unit.nation === 'h') {
      if (sound_type === 'dead') {
        const s = new Audio();
        s.src = 'sounds/h/dead.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      } else if (sound_type === 'fight') {
        const s = new Audio();
        s.src = 'sounds/orc/mechnik/Sword3.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.43, unit, sound_type));
      }
    } else if (sound_type === 'fight') {
      const s = new Audio();
      s.src = 'sounds/orc/mechnik/Sword1.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 0.31, unit, sound_type));
    } else if (sound_type === 'dead') {
      const s = new Audio();
      s.src = 'sounds/orc/batrak/dead.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
    }
  } else if (unit.unitName === 'peon') {
    if (sound_type === 'tree_sound') {
      const ran = Math.floor(Math.random() * 4);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/h/batrak/tree_1.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.09, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/h/batrak/tree_2.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.09, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/h/batrak/tree_3.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.09, unit, sound_type));
      } else if (ran === 3) {
        const s = new Audio();
        s.src = 'sounds/h/batrak/tree_4.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.09, unit, sound_type));
      }
    }

    if (unit.nation === 'h') {
      if (sound_type === 'dead') {
        const s = new Audio();
        s.src = 'sounds/h/dead.wav';
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      }
    } else if (sound_type === 'dead') {
      const s = new Audio();
      s.src = 'sounds/orc/batrak/dead.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
    }
  }
};
