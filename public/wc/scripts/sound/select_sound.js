/* eslint-disable no-param-reassign */
/* eslint-disable no-self-compare */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable func-names */

const select_sound = function (unit, sound_type) {
  if (unit.no_voice) {
    unit.voice = false;
  }

  if (unit.unitStatus === 'building') {
    if (unit.neitral) {
      if (unit.type === 1) {
        const s = new Audio();
        s.src = 'sounds/neitral/gold.wav';
        sounds.push(new Sound(s, 0, 1.7, unit, sound_type));
      }
    } else if (unit.buildready >= unit.hpfull) {
      if (unit.hp <= unit.hpfull / 1.5) {
        const s = new Audio();
        s.src = 'sounds/Burning.wav';
        sounds.push(new Sound(s, 0, 2.02, unit, sound_type));
      }

      if (unit.fatherFraction.nation === 'h') {
        if (unit.unitName === 'farm') {
          const s = new Audio();
          s.src = 'sounds/h/building/farm.wav';
          sounds.push(new Sound(s, 0, 1.74, unit, sound_type));
        } else if (unit.unitName === 'lesopilka') {
          const s = new Audio();
          s.src = 'sounds/h/building/lumber-mill.wav';
          sounds.push(new Sound(s, 0, 2.33, unit, sound_type));
        } else if (unit.unitName === 'kuznya') {
          const s = new Audio();
          s.src = 'sounds/h/building/blacksmith.wav';
          sounds.push(new Sound(s, 0, 1.8, unit, sound_type));
        } else if (unit.unitName === 'ogreBase') {
          const s = new Audio();
          s.src = 'sounds/h/building/stables.wav';
          sounds.push(new Sound(s, 0, 1.96, unit, sound_type));
        } else if (unit.unitName === 'altar') {
          const s = new Audio();
          s.src = 'sounds/h/building/church.wav';
          sounds.push(new Sound(s, 0, 3.85, unit, sound_type));
        } else if (unit.unitName === 'dragon_roost') {
          const s = new Audio();
          s.src = 'sounds/h/building/gryphon-aviary.wav';
          sounds.push(new Sound(s, 0, 1.14, unit, sound_type));
        } else if (unit.unitName === 'port') {
          const s = new Audio();
          s.src = 'sounds/h/building/shipyard.wav';
          sounds.push(new Sound(s, 0, 1.53, unit, sound_type));
        } else if (unit.unitName === 'oil_Ref') {
          const s = new Audio();
          s.src = 'sounds/h/building/oil-refinery.wav';
          sounds.push(new Sound(s, 0, 1.77, unit, sound_type));
        } else if (unit.unitName === 'temple') {
          const s = new Audio();
          s.src = 'sounds/h/building/mage-tower.wav';
          sounds.push(new Sound(s, 0, 2.19, unit, sound_type));
        } else if (unit.unitName === 'foundry') {
          const s = new Audio();
          s.src = 'sounds/h/building/foundry.wav';
          sounds.push(new Sound(s, 0, 2.02, unit, sound_type));
        } else if (unit.unitName === 'oil_platform') {
          const s = new Audio();
          s.src = 'sounds/h/building/oil-platform.wav';
          sounds.push(new Sound(s, 0, 2.24, unit, sound_type));
        }
      } else if (unit.unitName === 'farm') {
        const s = new Audio();
        s.src = 'sounds/orc/building/Ofarm.wav';
        sounds.push(new Sound(s, 0, 1.35, unit, sound_type));
      } else if (unit.unitName === 'lesopilka') {
        const s = new Audio();
        s.src = 'sounds/h/building/lumber-mill.wav';
        sounds.push(new Sound(s, 0, 2.33, unit, sound_type));
      } else if (unit.unitName === 'kuznya') {
        const s = new Audio();
        s.src = 'sounds/h/building/blacksmith.wav';
        sounds.push(new Sound(s, 0, 1.8, unit, sound_type));
      } else if (unit.unitName === 'ogreBase') {
        const s = new Audio();
        s.src = 'sounds/orc/building/ogre-mound.wav';
        sounds.push(new Sound(s, 0, 2.14, unit, sound_type));
      } else if (unit.unitName === 'altar') {
        const s = new Audio();
        s.src = 'sounds/orc/building/altar.wav';
        sounds.push(new Sound(s, 0, 2.38, unit, sound_type));
      } else if (unit.unitName === 'dragon_roost') {
        const s = new Audio();
        s.src = 'sounds/orc/building/dragon-roast.wav';
        sounds.push(new Sound(s, 0, 2.05, unit, sound_type));
      } else if (unit.unitName === 'port') {
        const s = new Audio();
        s.src = 'sounds/h/building/shipyard.wav';
        sounds.push(new Sound(s, 0, 1.53, unit, sound_type));
      } else if (unit.unitName === 'oil_Ref') {
        const s = new Audio();
        s.src = 'sounds/h/building/oil-refinery.wav';
        sounds.push(new Sound(s, 0, 1.77, unit, sound_type));
      } else if (unit.unitName === 'temple') {
        const s = new Audio();
        s.src = 'sounds/orc/building/temple.wav';
        sounds.push(new Sound(s, 0, 3.69, unit, sound_type));
      } else if (unit.unitName === 'foundry') {
        const s = new Audio();
        s.src = 'sounds/h/building/foundry.wav';
        sounds.push(new Sound(s, 0, 2.02, unit, sound_type));
      } else if (unit.unitName === 'oil_platform') {
        const s = new Audio();
        s.src = 'sounds/h/building/oil-platform.wav';
        sounds.push(new Sound(s, 0, 2.24, unit, sound_type));
      }
    } else {
      const s = new Audio();
      s.src = 'sounds/neitral/Constrct.wav';
      sounds.push(new Sound(s, 0, 2.19, unit, sound_type));
    }
  } else if (unit.type === 'turtle') {
    if (
      sound_type === 'go_sound'
      || sound_type === 'target'
      || sound_type === 'ready'
      || sound_type === 'select_sound'
      || sound_type === 'click_click'
    ) {
      const ran = Math.floor(Math.random() * 4);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/sub1.wav';
        sounds.push(new Sound(s, 0, 1.13, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/sub2.wav';
        sounds.push(new Sound(s, 0, 0.68, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/sub3.wav';
        sounds.push(new Sound(s, 0, 0.81, unit, sound_type));
      } else if (ran === 3) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/sub4.wav';
        sounds.push(new Sound(s, 0, 1.42, unit, sound_type));
      }
    }
  } else if (unit.type === 'oil_tanker') {
    if (
      sound_type === 'go_sound'
      || sound_type === 'target'
      || sound_type === 'ready'
      || sound_type === 'select_sound'
      || sound_type === 'click_click'
    ) {
      const s = new Audio();
      s.src = 'sounds/orc/ship/tanker.wav';
      sounds.push(new Sound(s, 0, 1.52, unit, sound_type));
    }
  } else if (unit.sweeme) {
    if (unit.nation === 'h') {
      if (sound_type === 'ready') {
        const s = new Audio();
        s.src = 'sounds/h/ship/human1.wav';
        sounds.push(new Sound(s, 0, 1.26, unit, sound_type));
      } else if (sound_type === 'go_sound' || sound_type === 'target') {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/ship/acknowledge1.wav';
          sounds.push(new Sound(s, 0, 0.98, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/ship/acknowledge2.wav';
          sounds.push(new Sound(s, 0, 0.97, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/ship/acknowledge3.wav';
          sounds.push(new Sound(s, 0, 0.91, unit, sound_type));
        }
      } else if (sound_type === 'click_click') {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/ship/annoyed1.wav';
          sounds.push(new Sound(s, 0, 1.87, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/ship/annoyed2.wav';
          sounds.push(new Sound(s, 0, 1.99, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/ship/annoyed3.wav';
          sounds.push(new Sound(s, 0, 2.18, unit, sound_type));
        }
      } else if (sound_type === 'select_sound') {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/ship/human1.wav';
          sounds.push(new Sound(s, 0, 1.26, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/ship/human2.wav';
          sounds.push(new Sound(s, 0, 0.88, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/ship/human3.wav';
          sounds.push(new Sound(s, 0, 0.56, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/ship/human4.wav';
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        }
      }
    } else if (sound_type === 'ready') {
      const s = new Audio();
      s.src = 'sounds/orc/ship/orc1.wav';
      sounds.push(new Sound(s, 0, 1.1, unit, sound_type));
    } else if (sound_type === 'go_sound' || sound_type === 'target') {
      const ran = Math.floor(Math.random() * 3);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/acknowledge1.wav';
        sounds.push(new Sound(s, 0, 0.7, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/acknowledge2.wav';
        sounds.push(new Sound(s, 0, 0.96, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/acknowledge3.wav';
        sounds.push(new Sound(s, 0, 0.96, unit, sound_type));
      }
    } else if (sound_type === 'click_click') {
      const ran = Math.floor(Math.random() * 3);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/annoyed1.wav';
        sounds.push(new Sound(s, 0, 0.81, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/annoyed2.wav';
        sounds.push(new Sound(s, 0, 1.17, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/annoyed3.wav';
        sounds.push(new Sound(s, 0, 3.2, unit, sound_type));
      }
    } else if (sound_type === 'select_sound') {
      const ran = Math.floor(Math.random() * 3);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/orc2.wav';
        sounds.push(new Sound(s, 0, 0.51, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/orc3.wav';
        sounds.push(new Sound(s, 0, 0.74, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/ship/orc4.wav';
        sounds.push(new Sound(s, 0, 0.89, unit, sound_type));
      }
    }
  } else if (unit.fly) {
    if (unit.nation === 'h') {
      if (sound_type === 'ready') {
        const s = new Audio();
        s.src = 'sounds/h/dracon/Griffon1.wav';
        sounds.push(new Sound(s, 0, 1.14, unit, sound_type));
      } else if (sound_type === 'go_sound' || sound_type === 'target') {
        const s = new Audio();
        s.src = 'sounds/h/dracon/Grwhat.wav';
        sounds.push(new Sound(s, 0, 2.03, unit, sound_type));
      } else if (
        sound_type === 'select_sound'
        || sound_type === 'click_click'
      ) {
        const ran = Math.floor(Math.random() * 2);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/dracon/Griffon1.wav';
          sounds.push(new Sound(s, 0, 1.14, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/dracon/Griffon2.wav';
          sounds.push(new Sound(s, 0, 1.11, unit, sound_type));
        }
      }
    } else if (sound_type === 'ready') {
      const s = new Audio();
      s.src = 'sounds/orc/dracon/ready.wav';
      sounds.push(new Sound(s, 0, 2.05, unit, sound_type));
    } else if (sound_type === 'go_sound' || sound_type === 'target') {
      const ran = Math.floor(Math.random() * 2);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/dracon/acknowledge1.wav';
        sounds.push(new Sound(s, 0, 1.79, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/dracon/acknowledge2.wav';
        sounds.push(new Sound(s, 0, 1.39, unit, sound_type));
      }
    } else if (
      sound_type === 'select_sound'
        || sound_type === 'click_click'
    ) {
      const s = new Audio();
      s.src = 'sounds/orc/dracon/selected1.wav';
      sounds.push(new Sound(s, 0, 0.99, unit, sound_type));
    }
  } else if (unit.unitName === 'mag') {
    if (unit.nation === 'h') {
      if (sound_type === 'ready') {
        const s = new Audio();
        s.src = 'sounds/h/mag/ready.wav';
        sounds.push(new Sound(s, 0, 1.18, unit, sound_type));
      } else if (sound_type === 'click_click') {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/mag/annoyed1.wav';
          sounds.push(new Sound(s, 0, 1.33, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/mag/annoyed2.wav';
          sounds.push(new Sound(s, 0, 1.26, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/mag/annoyed3.wav';
          sounds.push(new Sound(s, 0, 3.59, unit, sound_type));
        }
      } else if (sound_type === 'go_sound' || sound_type === 'target') {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/mag/acknowledge1.wav';
          sounds.push(new Sound(s, 0, 0.94, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/mag/acknowledge2.wav';
          sounds.push(new Sound(s, 0, 0.85, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/mag/acknowledge3.wav';
          sounds.push(new Sound(s, 0, 0.73, unit, sound_type));
        }
      } else if (sound_type === 'select_sound') {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/mag/selected1.wav';
          sounds.push(new Sound(s, 0, 0.75, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/mag/selected2.wav';
          sounds.push(new Sound(s, 0, 1.41, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/mag/selected3.wav';
          sounds.push(new Sound(s, 0, 1.06, unit, sound_type));
        }
      }
    } else if (sound_type === 'ready') {
      const s = new Audio();
      s.src = 'sounds/orc/mag/ready.wav';
      sounds.push(new Sound(s, 0, 2.05, unit, sound_type));
    } else if (sound_type === 'click_click') {
      const ran = Math.floor(Math.random() * 3);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/mag/annoyed1.wav';
        sounds.push(new Sound(s, 0, 2.15, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/mag/annoyed2.wav';
        sounds.push(new Sound(s, 0, 1.53, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/mag/annoyed3.wav';
        sounds.push(new Sound(s, 0, 3.8, unit, sound_type));
      }
    } else if (sound_type === 'go_sound' || sound_type === 'target') {
      const ran = Math.floor(Math.random() * 3);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/mag/acknowledge1.wav';
        sounds.push(new Sound(s, 0, 2.48, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/mag/acknowledge2.wav';
        sounds.push(new Sound(s, 0, 1.58, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/mag/acknowledge3.wav';
        sounds.push(new Sound(s, 0, 1.63, unit, sound_type));
      }
    } else if (sound_type === 'select_sound') {
      const ran = Math.floor(Math.random() * 2);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/mag/selected1.wav';
        sounds.push(new Sound(s, 0, 1.34, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/mag/selected2.wav';
        sounds.push(new Sound(s, 0, 1.73, unit, sound_type));
      }
    }
  } else if (unit.unitName === 'ballista') {
    if (sound_type === 'ready') {
      const s = new Audio();
      s.src = 'sounds/ballista/all.wav';
      sounds.push(new Sound(s, 0, 1.72, unit, sound_type));
    } else if (
      sound_type === 'go_sound'
      || sound_type === 'target'
      || sound_type === 'click_click'
    ) {
      const s = new Audio();
      s.src = 'sounds/ballista/all.wav';
      sounds.push(new Sound(s, 0, 1.72, unit, sound_type));
    } else if (sound_type === 'select_sound') {
      const s = new Audio();
      s.src = 'sounds/ballista/all.wav';
      sounds.push(new Sound(s, 0, 1.72, unit, sound_type));
    }
  } else if (unit.unitName === 'rizar') {
    if (unit.nation === 'h') {
      if (sound_type === 'ready') {
        const s = new Audio();
        s.src = 'sounds/h/rizar/ready.wav';
        sounds.push(new Sound(s, 0, 1.57, unit, sound_type));
      } else if (sound_type === 'click_click') {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/annoyed1.wav';
          sounds.push(new Sound(s, 0, 1.61, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/annoyed2.wav';
          sounds.push(new Sound(s, 0, 1.41, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/annoyed3.wav';
          sounds.push(new Sound(s, 0, 2.05, unit, sound_type));
        }
      } else if (sound_type === 'go_sound' || sound_type === 'target') {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/acknowledge1.wav';
          sounds.push(new Sound(s, 0, 1.08, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/acknowledge2.wav';
          sounds.push(new Sound(s, 0, 1.03, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/acknowledge3.wav';
          sounds.push(new Sound(s, 0, 1.31, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/acknowledge4.wav';
          sounds.push(new Sound(s, 0, 1.39, unit, sound_type));
        }
      } else if (sound_type === 'select_sound') {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/selected1.wav';
          sounds.push(new Sound(s, 0, 1.2, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/selected2.wav';
          sounds.push(new Sound(s, 0, 1.23, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/selected3.wav';
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/rizar/selected4.wav';
          sounds.push(new Sound(s, 0, 0.65, unit, sound_type));
        }
      }
    } else if (sound_type === 'ready') {
      if (!unit.fatherFraction.canMagick) {
        const s = new Audio();
        s.src = 'sounds/orc/rizar/ready.wav';
        sounds.push(new Sound(s, 0, 2.14, unit, sound_type));
      } else {
        const s = new Audio();
        s.src = 'sounds/orc/rizar/mag/ready.wav';
        sounds.push(new Sound(s, 0, 1.36, unit, sound_type));
      }
    } else if (sound_type === 'click_click') {
      if (!unit.fatherFraction.canMagick) {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/annoyed1.wav';
          sounds.push(new Sound(s, 0, 2.01, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/annoyed2.wav';
          sounds.push(new Sound(s, 0, 1.91, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/annoyed3.wav';
          sounds.push(new Sound(s, 0, 1.55, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/annoyed4.wav';
          sounds.push(new Sound(s, 0, 2.46, unit, sound_type));
        }
      } else {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/mag/annoyed1.wav';
          sounds.push(new Sound(s, 0, 1.93, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/mag/annoyed2.wav';
          sounds.push(new Sound(s, 0, 1.74, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/mag/annoyed3.wav';
          sounds.push(new Sound(s, 0, 2.19, unit, sound_type));
        }
      }
    } else if (sound_type === 'go_sound' || sound_type === 'target') {
      if (!unit.fatherFraction.canMagick) {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/acknowledge1.wav';
          sounds.push(new Sound(s, 0, 0.76, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/acknowledge2.wav';
          sounds.push(new Sound(s, 0, 0.94, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/acknowledge3.wav';
          sounds.push(new Sound(s, 0, 0.9, unit, sound_type));
        }
      } else {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/mag/acknowledge1.wav';
          sounds.push(new Sound(s, 0, 0.99, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/mag/acknowledge2.wav';
          sounds.push(new Sound(s, 0, 0.85, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/mag/acknowledge3.wav';
          sounds.push(new Sound(s, 0, 0.9, unit, sound_type));
        }
      }
    } else if (sound_type === 'select_sound') {
      if (!unit.fatherFraction.canMagick) {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/selected1.wav';
          sounds.push(new Sound(s, 0, 0.81, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/selected2.wav';
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/selected3.wav';
          sounds.push(new Sound(s, 0, 0.55, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/selected4.wav';
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        }
      } else {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/mag/selected1.wav';
          sounds.push(new Sound(s, 0, 1.06, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/mag/selected2.wav';
          sounds.push(new Sound(s, 0, 0.51, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/orc/rizar/mag/selected3.wav';
          sounds.push(new Sound(s, 0, 0.53, unit, sound_type));
        }
      }
    }
  } else if (unit.unitName === 'luchnik') {
    if (unit.nation === 'h') {
      if (sound_type === 'ready') {
        const s = new Audio();
        s.src = 'sounds/h/luchnik/ready.wav';
        sounds.push(new Sound(s, 0, 1.3, unit, sound_type));
      } else if (sound_type === 'click_click') {
        const ran = Math.floor(Math.random() * 3);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/annoyed1.wav';
          sounds.push(new Sound(s, 0, 1.03, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/annoyed2.wav';
          sounds.push(new Sound(s, 0, 1.41, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/annoyed3.wav';
          sounds.push(new Sound(s, 0, 2.46, unit, sound_type));
        }
      } else if (sound_type === 'go_sound' || sound_type === 'target') {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/acknowledge1.wav';
          sounds.push(new Sound(s, 0, 0.52, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/acknowledge2.wav';
          sounds.push(new Sound(s, 0, 0.87, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/acknowledge3.wav';
          sounds.push(new Sound(s, 0, 0.89, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/acknowledge4.wav';
          sounds.push(new Sound(s, 0, 0.56, unit, sound_type));
        }
      } else if (sound_type === 'select_sound') {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/selected1.wav';
          sounds.push(new Sound(s, 0, 1.03, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/selected2.wav';
          sounds.push(new Sound(s, 0, 0.81, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/selected3.wav';
          sounds.push(new Sound(s, 0, 0.77, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/luchnik/selected4.wav';
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        }
      }
    } else if (sound_type === 'ready') {
      const s = new Audio();
      s.src = 'sounds/orc/luchnik/ready.wav';
      sounds.push(new Sound(s, 0, 1.1, unit, sound_type));
    } else if (sound_type === 'click_click') {
      const ran = Math.floor(Math.random() * 3);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/luchnik/annoyed1.wav';
        sounds.push(new Sound(s, 0, 1.02, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/luchnik/annoyed2.wav';
        sounds.push(new Sound(s, 0, 2.55, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/luchnik/annoyed3.wav';
        sounds.push(new Sound(s, 0, 2.22, unit, sound_type));
      }
    } else if (sound_type === 'go_sound' || sound_type === 'target') {
      const ran = Math.floor(Math.random() * 3);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/luchnik/acknowledge1.wav';
        sounds.push(new Sound(s, 0, 0.73, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/luchnik/acknowledge2.wav';
        sounds.push(new Sound(s, 0, 0.56, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/luchnik/acknowledge3.wav';
        sounds.push(new Sound(s, 0, 0.92, unit, sound_type));
      }
    } else if (sound_type === 'select_sound') {
      const ran = Math.floor(Math.random() * 3);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/luchnik/selected1.wav';
        sounds.push(new Sound(s, 0, 0.57, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/luchnik/selected2.wav';
        sounds.push(new Sound(s, 0, 0.83, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/luchnik/selected3.wav';
        sounds.push(new Sound(s, 0, 0.85, unit, sound_type));
      }
    }
  } else if (unit.unitName === 'mechnick') {
    if (unit.nation === 'h') {
      if (sound_type === 'ready') {
        const s = new Audio();
        s.src = 'sounds/h/mechnik/ready.wav';
        sounds.push(new Sound(s, 0, 1.07, unit, sound_type));
      } else if (sound_type === 'go_sound' || sound_type === 'target') {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/acknowledge1.wav';
          sounds.push(new Sound(s, 0, 0.59, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/acknowledge2.wav';
          sounds.push(new Sound(s, 0, 1, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/acknowledge3.wav';
          sounds.push(new Sound(s, 0, 0.93, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/acknowledge4.wav';
          sounds.push(new Sound(s, 0, 1.04, unit, sound_type));
        }
      } else if (sound_type === 'click_click') {
        const ran = Math.floor(Math.random() * 7);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/annoyed1.wav';
          sounds.push(new Sound(s, 0, 1.46, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/annoyed2.wav';
          sounds.push(new Sound(s, 0, 1.61, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/annoyed3.wav';
          sounds.push(new Sound(s, 0, 1.93, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/annoyed4.wav';
          sounds.push(new Sound(s, 0, 1.8, unit, sound_type));
        } else if (ran === 4) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/annoyed5.wav';
          sounds.push(new Sound(s, 0, 1.92, unit, sound_type));
        } else if (ran === 5) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/annoyed6.wav';
          sounds.push(new Sound(s, 0, 1.69, unit, sound_type));
        } else if (ran === 6) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/annoyed7.wav';
          sounds.push(new Sound(s, 0, 1.79, unit, sound_type));
        }
      } else if (sound_type === 'select_sound') {
        const ran = Math.floor(Math.random() * 6);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/selected1.wav';
          sounds.push(new Sound(s, 0, 0.91, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/selected2.wav';
          sounds.push(new Sound(s, 0, 1.01, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/selected3.wav';
          sounds.push(new Sound(s, 0, 0.8, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/selected4.wav';
          sounds.push(new Sound(s, 0, 0.51, unit, sound_type));
        } else if (ran === 4) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/selected5.wav';
          sounds.push(new Sound(s, 0, 0.59, unit, sound_type));
        } else if (ran === 5) {
          const s = new Audio();
          s.src = 'sounds/h/mechnik/selected6.wav';
          sounds.push(new Sound(s, 0, 1.2, unit, sound_type));
        }
      }
    } else if (sound_type === 'ready') {
      const s = new Audio();
      s.src = 'sounds/orc/mechnik/ready.wav';
      sounds.push(new Sound(s, 0, 1.71, unit, sound_type));
    } else if (sound_type === 'go_sound' || sound_type === 'target') {
      const ran = Math.floor(Math.random() * 4);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/go1.wav';
        sounds.push(new Sound(s, 0, 0.72, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/go2.wav';
        sounds.push(new Sound(s, 0, 0.68, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/go3.wav';
        sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
      } else if (ran === 3) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/go4.wav';
        sounds.push(new Sound(s, 0, 0.65, unit, sound_type));
      }
    } else if (
      sound_type === 'select_sound'
        || sound_type === 'click_click'
    ) {
      const ran = Math.floor(Math.random() * 2);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/selected1.wav';
        sounds.push(new Sound(s, 0, 0.53, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/selected2.wav';
        sounds.push(new Sound(s, 0, 0.8, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/selected3.wav';
        sounds.push(new Sound(s, 0, 0.87, unit, sound_type));
      }
    }
  } else if (unit.unitName === 'peon') {
    if (unit.fatherFraction.nation === 'h') {
      if (sound_type === 'complite') {
        const s = new Audio();
        s.src = 'sounds/h/batrak/complete.wav';
        sounds.push(new Sound(s, 0, 1.13, unit, sound_type));
      } else if (sound_type === 'ready') {
        const s = new Audio();
        s.src = 'sounds/h/batrak/ready.wav';
        sounds.push(new Sound(s, 0, 1.07, unit, sound_type));
      } else if (sound_type === 'click_click') {
        const ran = Math.floor(Math.random() * 7);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/build_1.wav';
          sounds.push(new Sound(s, 0, 0.66, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/build_2.wav';
          sounds.push(new Sound(s, 0, 1.32, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/build_3.wav';
          sounds.push(new Sound(s, 0, 1.71, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/build_4.wav';
          sounds.push(new Sound(s, 0, 0.9, unit, sound_type));
        } else if (ran === 4) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/build_5.wav';
          sounds.push(new Sound(s, 0, 0.98, unit, sound_type));
        } else if (ran === 5) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/build_6.wav';
          sounds.push(new Sound(s, 0, 0.79, unit, sound_type));
        } else if (ran === 6) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/build_7.wav';
          sounds.push(new Sound(s, 0, 1.58, unit, sound_type));
        }
      } else if (sound_type === 'go_sound' || sound_type === 'build_sound') {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/batrak_go_1.wav';
          sounds.push(new Sound(s, 0, 0.8, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/batrak_go_2.wav';
          sounds.push(new Sound(s, 0, 0.88, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/batrak_go_3.wav';
          sounds.push(new Sound(s, 0, 0.98, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/batrak_go_4.wav';
          sounds.push(new Sound(s, 0, 0.59, unit, sound_type));
        }
      } else if (sound_type === 'select_sound') {
        const ran = Math.floor(Math.random() * 4);

        if (!ran) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/batrak_select_1.wav';
          sounds.push(new Sound(s, 0, 0.5, unit, sound_type));
        } else if (ran === 1) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/batrak_select_2.wav';
          sounds.push(new Sound(s, 0, 0.64, unit, sound_type));
        } else if (ran === 2) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/batrak_select_3.wav';
          sounds.push(new Sound(s, 0, 0.73, unit, sound_type));
        } else if (ran === 3) {
          const s = new Audio();
          s.src = 'sounds/h/batrak/batrak_select_4.wav';
          sounds.push(new Sound(s, 0, 0.7, unit, sound_type));
        }
      }
    } else if (sound_type === 'complite') {
      const s = new Audio();
      s.src = 'sounds/orc/batrak/complete.wav';
      sounds.push(new Sound(s, 0, 0.95, unit, sound_type));
    } else if (sound_type === 'ready') {
      const s = new Audio();
      s.src = 'sounds/orc/batrak/ready.wav';
      sounds.push(new Sound(s, 0, 0.87, unit, sound_type));
    } else if (sound_type === 'click_click') {
      const ran = Math.floor(Math.random() * 7);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/build1.wav';
        sounds.push(new Sound(s, 0, 1.24, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/build2.wav';
        sounds.push(new Sound(s, 0, 1.72, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/build3.wav';
        sounds.push(new Sound(s, 0, 1.64, unit, sound_type));
      } else if (ran === 3) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/build4.wav';
        sounds.push(new Sound(s, 0, 1.85, unit, sound_type));
      } else if (ran === 4) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/build5.wav';
        sounds.push(new Sound(s, 0, 0.77, unit, sound_type));
      } else if (ran === 5) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/build6.wav';
        sounds.push(new Sound(s, 0, 0.72, unit, sound_type));
      } else if (ran === 6) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/build7.wav';
        sounds.push(new Sound(s, 0, 2.23, unit, sound_type));
      }
    } else if (sound_type === 'go_sound' || sound_type === 'build_sound') {
      const ran = Math.floor(Math.random() * 4);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/go1.wav';
        sounds.push(new Sound(s, 0, 0.72, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/go2.wav';
        sounds.push(new Sound(s, 0, 0.68, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/go3.wav';
        sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
      } else if (ran === 3) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/go4.wav';
        sounds.push(new Sound(s, 0, 0.65, unit, sound_type));
      }
    } else if (sound_type === 'select_sound') {
      const ran = Math.floor(Math.random() * 6);

      if (!ran) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/selected1.wav';
        sounds.push(new Sound(s, 0, 0.53, unit, sound_type));
      } else if (ran === 1) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/selected2.wav';
        sounds.push(new Sound(s, 0, 0.8, unit, sound_type));
      } else if (ran === 2) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/selected3.wav';
        sounds.push(new Sound(s, 0, 0.87, unit, sound_type));
      } else if (ran === 3) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/selected4.wav';
        sounds.push(new Sound(s, 0, 0.63, unit, sound_type));
      } else if (ran === 4) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/selected5.wav';
        sounds.push(new Sound(s, 0, 1.14, unit, sound_type));
      } else if (ran === 5) {
        const s = new Audio();
        s.src = 'sounds/orc/batrak/selected6.wav';
        sounds.push(new Sound(s, 0, 0.33, unit, sound_type));
      }
    }
  }
};
