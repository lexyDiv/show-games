Sound.prototype.prog_fight = function () {
  if (this.sound.currentTime >= this.out_time) {
    this.readyToOut = true;
    this.sound.pause();
    return;
  } else {
    if (!this.start) {
      this.sound.play();
      this.start = true;

      if (this.start_time) {
        this.sound.currentTime = this.start_time;
      }
    }
  }
};

Sound.prototype.prog = function () {
  if (this.sound.currentTime >= this.out_time) {
    this.readyToOut = true;
    this.sound.pause();

    if (this.sound_type !== "tree_sound") {
      this.unit.voice = false;
    }

    return;
  } else {
    if (!this.start) {
      this.sound.play();
      this.start = true;
    }
  }
};

const select_sound_fly = function (unit, sound_type, volume) {
  if (volume <= 0 || !volume || volume!==volume) {
    return;
  }

  if (volume >= 1) {
    volume = 1;
  }

  if (sound_type === "crash") {
    let ran = Math.floor(Math.random() * 3);

    if (!ran) {
      let s = new Audio();
      s.src = "wc/sounds/crash1.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 3.16, unit, sound_type));
    } else if (ran === 1) {
      let s = new Audio();
      s.src = "wc/sounds/crash2.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 2.82, unit, sound_type));
    } else if (ran === 2) {
      let s = new Audio();
      s.src = "wc/sounds/crash3.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 3.95, unit, sound_type));
    }
  } else if (sound_type === "alarm_orc") {
    let ran = Math.floor(Math.random() * 2);

    if (!ran) {
      let s = new Audio();
      s.src = "wc/sounds/orc/alarm/help1.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.42, unit, sound_type));
    } else if (ran === 1) {
      let s = new Audio();
      s.src = "wc/sounds/orc/alarm/help2.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.94, unit, sound_type));
    }
  } else if (sound_type === "alarm_h") {
    let ran = Math.floor(Math.random() * 2);

    if (!ran) {
      let s = new Audio();
      s.src = "wc/sounds/h/alarm/help1.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.18, unit, sound_type));
    } else if (ran === 1) {
      let s = new Audio();
      s.src = "wc/sounds/h/alarm/help2.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.33, unit, sound_type));
    }
  } else if (sound_type === "strela") {
    let s = new Audio();
    s.src = "wc/sounds/guard/strela.wav";
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 0.3, unit, sound_type));
  } else if (sound_type === "click") {
    let s = new Audio();
    s.src = "wc/sounds/click.wav";
    s.volume = 0.5;
    sounds_fight.push(new Sound(s, 0, 0.21, unit, sound_type));
  } else if (sound_type === "cannon") {
    let s = new Audio();
    s.src = "wc/sounds/h/ship/disv.wav";
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 2, unit, sound_type));
  } else if (sound_type === "disboo") {
    let s = new Audio();
    s.src = "wc/sounds/h/ship/disboo.wav";
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 2, unit, sound_type));
  } else if (sound_type === "boo_drag") {
    let s = new Audio();
    s.src = "wc/sounds/orc/dracon/boo.mp3";
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 4.57, unit, sound_type));
  } else if (sound_type === "boo") {
    let s = new Audio();
    s.src = "wc/sounds/ballista/boo.wav";
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 1.59, unit, sound_type));
  } else if (
    sound_type === "luk" ||
    sound_type === "topor" ||
    sound_type === "hit"
  ) {
    let s = new Audio();
    s.src = "wc/sounds/h/luchnik/Bowhit.wav";

    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 0.39, unit, sound_type));
  }
};

const select_sound_fight = function (unit, sound_type, volume) {
  if (volume <= 0 || !volume || volume!==volume) {
    return;
  }

 
if (volume > 1) {
      volume = 1;
    }


  if (unit.sweeme) {
    if (sound_type === "dead") {
      let s = new Audio();
      s.src = "wc/sounds/h/ship/dead.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 2.5, unit, sound_type));
    }
  }

  if (unit.type === "turtle") {
    if (sound_type === "fight") {
      let s = new Audio();
      s.src = "wc/sounds/orc/ship/subv.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.5, unit, sound_type));
    }
  } else if (unit.type === "linkor") {
    if (sound_type === "fight") {
      let s = new Audio();
      s.src = "wc/sounds/h/ship/linv.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 2, unit, sound_type));
    }
  } else if (unit.type === "distroer") {
    if (sound_type === "fight") {
      let s = new Audio();
      s.src = "wc/sounds/h/ship/disv.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 2, unit, sound_type));
    }
  } else if (unit.fly) {
    if (unit.nation === "h") {
      if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/h/dracon/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.91, unit, sound_type));
      } else if (sound_type === "fight") {
        let s = new Audio();
        s.src = "wc/sounds/h/dracon/boo.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 4.87, unit, sound_type));
      }
    } else {
      if (sound_type === "fight") {
        let ran = Math.floor(Math.random() * 2);

        let s = new Audio();
        s.src = "wc/sounds/orc/dracon/rev1.mp3";
        sounds.push(new Sound(s, 0.43, 2.53, unit, sound_type));
      } else if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/orc/dracon/rev2.mp3";
        sounds.push(new Sound(s, 0.43, 9.9, unit, sound_type));
      }
    }
  } else if (unit.unitName === "mag") {
    if (unit.nation === "orc") {
      if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/orc/mag/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.41, unit, sound_type));
      }
    } else {
      if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/h/mag/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.61, unit, sound_type));
      }
    }

    if (sound_type === "nar") {
      let s = new Audio();
      s.src = "wc/sounds/h/mag/Slow.wav";

      sounds_fight.push(new Sound(s, 0, 2.25, unit, sound_type));
    } else if (sound_type === "tor") {
      let s = new Audio();
      s.src = "wc/sounds/orc/mag/tor.wav";

      sounds_fight.push(new Sound(s, 0, 2.58, unit, sound_type));
    } else if (sound_type === "z") {
      let s = new Audio();
      s.src = "wc/sounds/orc/mag/Dethcoil.wav";

      sounds_fight.push(new Sound(s, 0, 2.02, unit, sound_type));
    } else if (sound_type === "fight") {
      let s = new Audio();
      s.src = "wc/sounds/h/mag/Touchdrk.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 0.52, unit, sound_type));
    }
  } else if (unit.unitName === "ballista") {
    if (sound_type === "fight") {
      let s = new Audio();
      s.src = "wc/sounds/ballista/Catapult.wav";
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 0.84, unit, sound_type));
    }
  } else if (unit.unitName === "rizar") {
    if (unit.nation === "h") {
      if (sound_type === "rage") {
        let s = new Audio();
        s.src = "wc/sounds/h/rizar/mag/Heal.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.83, unit, sound_type));
        //console.log("here");
      } else if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/h/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      } else if (sound_type === "fight") {
        let s = new Audio();
        s.src = "wc/sounds/orc/mechnik/Sword2.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.39, unit, sound_type));
      }
    } else {
      if (sound_type === "rage") {
        let s = new Audio();
        s.src = "wc/sounds/orc/rizar/mag/bloodlust.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 2.22, unit, sound_type));
        //console.log("here");
      } else if (sound_type === "fight") {
        let s = new Audio();
        s.src = "wc/sounds/orc/rizar/hit.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.25, unit, sound_type));
        //console.log("here");
      } else if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/orc/batrak/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      }
    }
  } else if (unit.unitName === "luchnik") {
    if (unit.nation === "h") {
      if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/h/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      } else if (sound_type === "fight") {
        let s = new Audio();
        s.src = "wc/sounds/h/luchnik/Bowfire.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.47, unit, sound_type));
      }
    } else {
      if (sound_type === "fight") {
        let s = new Audio();
        s.src = "wc/sounds/orc/luchnik/Bowfire.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.12, unit, sound_type));
      } else if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/orc/batrak/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      }
    }
  } else if (unit.unitName === "mechnick") {
    if (unit.nation === "h") {
      if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/h/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      } else if (sound_type === "fight") {
        let s = new Audio();
        s.src = "wc/sounds/orc/mechnik/Sword3.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.43, unit, sound_type));
      }
    } else {
      if (sound_type === "fight") {
        let s = new Audio();
        s.src = "wc/sounds/orc/mechnik/Sword1.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.31, unit, sound_type));
      } else if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/orc/batrak/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      }
    }
  } else if (unit.unitName === "peon") {
    if (sound_type === "tree_sound") {
      let ran = Math.floor(Math.random() * 4);

      if (!ran) {
        let s = new Audio();
        s.src = "wc/sounds/h/batrak/tree_1.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.09, unit, sound_type));
      } else if (ran === 1) {
        let s = new Audio();
        s.src = "wc/sounds/h/batrak/tree_2.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.09, unit, sound_type));
      } else if (ran === 2) {
        let s = new Audio();
        s.src = "wc/sounds/h/batrak/tree_3.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.09, unit, sound_type));
      } else if (ran === 3) {
        let s = new Audio();
        s.src = "wc/sounds/h/batrak/tree_4.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 0.09, unit, sound_type));
      }
    }

    if (unit.nation === "h") {
      if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/h/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      }
    } else {
      if (sound_type === "dead") {
        let s = new Audio();
        s.src = "wc/sounds/orc/batrak/dead.wav";
        s.volume = volume;
        sounds_fight.push(new Sound(s, 0, 1.26, unit, sound_type));
      }
    }
  }
};

const select_sound = function (unit, sound_type) {
  if (unit.no_voice) {
    unit.voice = false;
  }

  if (unit.unitStatus === "building") {
    if (unit.neitral) {
      if (unit.type === 1) {
        let s = new Audio();
        s.src = "wc/sounds/neitral/gold.wav";
        sounds.push(new Sound(s, 0, 1.7, unit, sound_type));
      }
    } else if (unit.buildready >= unit.hpfull) {
      if (unit.hp <= unit.hpfull / 1.5) {
       

        let s = new Audio();
        s.src = "wc/sounds/Burning.wav";
        sounds.push(new Sound(s, 0, 2.02, unit, sound_type));
      }

      if (unit.fatherFraction.nation === "h") {
        if (unit.unitName === "farm") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/farm.wav";
          sounds.push(new Sound(s, 0, 1.74, unit, sound_type));
        } else if (unit.unitName === "lesopilka") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/lumber-mill.wav";
          sounds.push(new Sound(s, 0, 2.33, unit, sound_type));
        } else if (unit.unitName === "kuznya") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/blacksmith.wav";
          sounds.push(new Sound(s, 0, 1.8, unit, sound_type));
        } else if (unit.unitName === "ogreBase") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/stables.wav";
          sounds.push(new Sound(s, 0, 1.96, unit, sound_type));
        } else if (unit.unitName === "altar") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/church.wav";
          sounds.push(new Sound(s, 0, 3.85, unit, sound_type));
        } else if (unit.unitName === "dragon_roost") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/gryphon-aviary.wav";
          sounds.push(new Sound(s, 0, 1.14, unit, sound_type));
        } else if (unit.unitName === "port") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/shipyard.wav";
          sounds.push(new Sound(s, 0, 1.53, unit, sound_type));
        } else if (unit.unitName === "oil_Ref") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/oil-refinery.wav";
          sounds.push(new Sound(s, 0, 1.77, unit, sound_type));
        } else if (unit.unitName === "temple") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/mage-tower.wav";
          sounds.push(new Sound(s, 0, 2.19, unit, sound_type));
        } else if (unit.unitName === "foundry") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/foundry.wav";
          sounds.push(new Sound(s, 0, 2.02, unit, sound_type));
        } else if (unit.unitName === "oil_platform") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/oil-platform.wav";
          sounds.push(new Sound(s, 0, 2.24, unit, sound_type));
        }
      } else {
        if (unit.unitName === "farm") {
          let s = new Audio();
          s.src = "wc/sounds/orc/building/Ofarm.wav";
          sounds.push(new Sound(s, 0, 1.35, unit, sound_type));
        } else if (unit.unitName === "lesopilka") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/lumber-mill.wav";
          sounds.push(new Sound(s, 0, 2.33, unit, sound_type));
        } else if (unit.unitName === "kuznya") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/blacksmith.wav";
          sounds.push(new Sound(s, 0, 1.8, unit, sound_type));
        } else if (unit.unitName === "ogreBase") {
          let s = new Audio();
          s.src = "wc/sounds/orc/building/ogre-mound.wav";
          sounds.push(new Sound(s, 0, 2.14, unit, sound_type));
        } else if (unit.unitName === "altar") {
          let s = new Audio();
          s.src = "wc/sounds/orc/building/altar.wav";
          sounds.push(new Sound(s, 0, 2.38, unit, sound_type));
        } else if (unit.unitName === "dragon_roost") {
          let s = new Audio();
          s.src = "wc/sounds/orc/building/dragon-roast.wav";
          sounds.push(new Sound(s, 0, 2.05, unit, sound_type));
        } else if (unit.unitName === "port") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/shipyard.wav";
          sounds.push(new Sound(s, 0, 1.53, unit, sound_type));
        } else if (unit.unitName === "oil_Ref") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/oil-refinery.wav";
          sounds.push(new Sound(s, 0, 1.77, unit, sound_type));
        } else if (unit.unitName === "temple") {
          let s = new Audio();
          s.src = "wc/sounds/orc/building/temple.wav";
          sounds.push(new Sound(s, 0, 3.69, unit, sound_type));
        } else if (unit.unitName === "foundry") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/foundry.wav";
          sounds.push(new Sound(s, 0, 2.02, unit, sound_type));
        } else if (unit.unitName === "oil_platform") {
          let s = new Audio();
          s.src = "wc/sounds/h/building/oil-platform.wav";
          sounds.push(new Sound(s, 0, 2.24, unit, sound_type));
        }
      }
    } else {
      let s = new Audio();
      s.src = "wc/sounds/neitral/Constrct.wav";
      sounds.push(new Sound(s, 0, 2.19, unit, sound_type));
    }
  } else if (unit.type === "turtle") {
    if (
      sound_type === "go_sound" ||
      sound_type === "target" ||
      sound_type === "ready" ||
      sound_type === "select_sound" ||
      sound_type === "click_click"
    ) {
      let ran = Math.floor(Math.random() * 4);

      if (!ran) {
        let s = new Audio();
        s.src = "wc/sounds/orc/ship/sub1.wav";
        sounds.push(new Sound(s, 0, 1.13, unit, sound_type));
      } else if (ran === 1) {
        let s = new Audio();
        s.src = "wc/sounds/orc/ship/sub2.wav";
        sounds.push(new Sound(s, 0, 0.68, unit, sound_type));
      } else if (ran === 2) {
        let s = new Audio();
        s.src = "wc/sounds/orc/ship/sub3.wav";
        sounds.push(new Sound(s, 0, 0.81, unit, sound_type));
      } else if (ran === 3) {
        let s = new Audio();
        s.src = "wc/sounds/orc/ship/sub4.wav";
        sounds.push(new Sound(s, 0, 1.42, unit, sound_type));
      }
    }
  } else if (unit.type === "oil_tanker") {
    if (
      sound_type === "go_sound" ||
      sound_type === "target" ||
      sound_type === "ready" ||
      sound_type === "select_sound" ||
      sound_type === "click_click"
    ) {
      let s = new Audio();
      s.src = "wc/sounds/orc/ship/tanker.wav";
      sounds.push(new Sound(s, 0, 1.52, unit, sound_type));
    }
  } else if (unit.sweeme) {
    if (unit.nation === "h") {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/h/ship/human1.wav";
        sounds.push(new Sound(s, 0, 1.26, unit, sound_type));
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/acknowledge1.wav";
          sounds.push(new Sound(s, 0, 0.98, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/acknowledge2.wav";
          sounds.push(new Sound(s, 0, 0.97, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/acknowledge3.wav";
          sounds.push(new Sound(s, 0, 0.91, unit, sound_type));
        }
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/annoyed1.wav";
          sounds.push(new Sound(s, 0, 1.87, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/annoyed2.wav";
          sounds.push(new Sound(s, 0, 1.99, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/annoyed3.wav";
          sounds.push(new Sound(s, 0, 2.18, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/human1.wav";
          sounds.push(new Sound(s, 0, 1.26, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/human2.wav";
          sounds.push(new Sound(s, 0, 0.88, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/human3.wav";
          sounds.push(new Sound(s, 0, 0.56, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/ship/human4.wav";
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        }
      }
    } else {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/orc/ship/orc1.wav";
        sounds.push(new Sound(s, 0, 1.1, unit, sound_type));
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/ship/acknowledge1.wav";
          sounds.push(new Sound(s, 0, 0.7, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/ship/acknowledge2.wav";
          sounds.push(new Sound(s, 0, 0.96, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/ship/acknowledge3.wav";
          sounds.push(new Sound(s, 0, 0.96, unit, sound_type));
        }
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/ship/annoyed1.wav";
          sounds.push(new Sound(s, 0, 0.81, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/ship/annoyed2.wav";
          sounds.push(new Sound(s, 0, 1.17, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/ship/annoyed3.wav";
          sounds.push(new Sound(s, 0, 3.2, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/ship/orc2.wav";
          sounds.push(new Sound(s, 0, 0.51, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/ship/orc3.wav";
          sounds.push(new Sound(s, 0, 0.74, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/ship/orc4.wav";
          sounds.push(new Sound(s, 0, 0.89, unit, sound_type));
        }
      }
    }
  } else if (unit.fly) {
    if (unit.nation === "h") {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/h/dracon/Griffon1.wav";
        sounds.push(new Sound(s, 0, 1.14, unit, sound_type));
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let s = new Audio();
        s.src = "sounds/h/dracon/Grwhat.wav";
        sounds.push(new Sound(s, 0, 2.03, unit, sound_type));
      } else if (
        sound_type === "select_sound" ||
        sound_type === "click_click"
      ) {
        let ran = Math.floor(Math.random() * 2);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/dracon/Griffon1.wav";
          sounds.push(new Sound(s, 0, 1.14, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/dracon/Griffon2.wav";
          sounds.push(new Sound(s, 0, 1.11, unit, sound_type));
        }
      }
    } else {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/orc/dracon/ready.wav";
        sounds.push(new Sound(s, 0, 2.05, unit, sound_type));
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 2);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/dracon/acknowledge1.wav";
          sounds.push(new Sound(s, 0, 1.79, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/dracon/acknowledge2.wav";
          sounds.push(new Sound(s, 0, 1.39, unit, sound_type));
        }
      } else if (
        sound_type === "select_sound" ||
        sound_type === "click_click"
      ) {
        let s = new Audio();
        s.src = "wc/sounds/orc/dracon/selected1.wav";
        sounds.push(new Sound(s, 0, 0.99, unit, sound_type));
      }
    }
  } else if (unit.unitName === "mag") {
    if (unit.nation === "h") {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/h/mag/ready.wav";
        sounds.push(new Sound(s, 0, 1.18, unit, sound_type));
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/mag/annoyed1.wav";
          sounds.push(new Sound(s, 0, 1.33, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/mag/annoyed2.wav";
          sounds.push(new Sound(s, 0, 1.26, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/mag/annoyed3.wav";
          sounds.push(new Sound(s, 0, 3.59, unit, sound_type));
        }
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/mag/acknowledge1.wav";
          sounds.push(new Sound(s, 0, 0.94, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/mag/acknowledge2.wav";
          sounds.push(new Sound(s, 0, 0.85, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/mag/acknowledge3.wav";
          sounds.push(new Sound(s, 0, 0.73, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/mag/selected1.wav";
          sounds.push(new Sound(s, 0, 0.75, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/mag/selected2.wav";
          sounds.push(new Sound(s, 0, 1.41, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/mag/selected3.wav";
          sounds.push(new Sound(s, 0, 1.06, unit, sound_type));
        }
      }
    } else {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/orc/mag/ready.wav";
        sounds.push(new Sound(s, 0, 2.05, unit, sound_type));
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/mag/annoyed1.wav";
          sounds.push(new Sound(s, 0, 2.15, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/mag/annoyed2.wav";
          sounds.push(new Sound(s, 0, 1.53, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/mag/annoyed3.wav";
          sounds.push(new Sound(s, 0, 3.8, unit, sound_type));
        }
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/mag/acknowledge1.wav";
          sounds.push(new Sound(s, 0, 2.48, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/mag/acknowledge2.wav";
          sounds.push(new Sound(s, 0, 1.58, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/mag/acknowledge3.wav";
          sounds.push(new Sound(s, 0, 1.63, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 2);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/mag/selected1.wav";
          sounds.push(new Sound(s, 0, 1.34, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/mag/selected2.wav";
          sounds.push(new Sound(s, 0, 1.73, unit, sound_type));
        }
      }
    }
  } else if (unit.unitName === "ballista") {
    if (sound_type === "ready") {
      let s = new Audio();
      s.src = "wc/sounds/ballista/all.wav";
      sounds.push(new Sound(s, 0, 1.72, unit, sound_type));
    } else if (
      sound_type === "go_sound" ||
      sound_type === "target" ||
      sound_type === "click_click"
    ) {
      let s = new Audio();
      s.src = "wc/sounds/ballista/all.wav";
      sounds.push(new Sound(s, 0, 1.72, unit, sound_type));
    } else if (sound_type === "select_sound") {
      let s = new Audio();
      s.src = "wc/sounds/ballista/all.wav";
      sounds.push(new Sound(s, 0, 1.72, unit, sound_type));
    }
  } else if (unit.unitName === "rizar") {
    if (unit.nation === "h") {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/h/rizar/ready.wav";
        sounds.push(new Sound(s, 0, 1.57, unit, sound_type));
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/annoyed1.wav";
          sounds.push(new Sound(s, 0, 1.61, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/annoyed2.wav";
          sounds.push(new Sound(s, 0, 1.41, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/annoyed3.wav";
          sounds.push(new Sound(s, 0, 2.05, unit, sound_type));
        }
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/acknowledge1.wav";
          sounds.push(new Sound(s, 0, 1.08, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/acknowledge2.wav";
          sounds.push(new Sound(s, 0, 1.03, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/acknowledge3.wav";
          sounds.push(new Sound(s, 0, 1.31, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/acknowledge4.wav";
          sounds.push(new Sound(s, 0, 1.39, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/selected1.wav";
          sounds.push(new Sound(s, 0, 1.2, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/selected2.wav";
          sounds.push(new Sound(s, 0, 1.23, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/selected3.wav";
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/rizar/selected4.wav";
          sounds.push(new Sound(s, 0, 0.65, unit, sound_type));
        }
      }
    } else {
      if (sound_type === "ready") {
        if (!unit.fatherFraction.canMagick) {
          let s = new Audio();
          s.src = "wc/sounds/orc/rizar/ready.wav";
          sounds.push(new Sound(s, 0, 2.14, unit, sound_type));
        } else {
          let s = new Audio();
          s.src = "wc/sounds/orc/rizar/mag/ready.wav";
          sounds.push(new Sound(s, 0, 1.36, unit, sound_type));
        }
      } else if (sound_type === "click_click") {
        if (!unit.fatherFraction.canMagick) {
          let ran = Math.floor(Math.random() * 4);

          if (!ran) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/annoyed1.wav";
            sounds.push(new Sound(s, 0, 2.01, unit, sound_type));
          } else if (ran === 1) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/annoyed2.wav";
            sounds.push(new Sound(s, 0, 1.91, unit, sound_type));
          } else if (ran === 2) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/annoyed3.wav";
            sounds.push(new Sound(s, 0, 1.55, unit, sound_type));
          } else if (ran === 3) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/annoyed4.wav";
            sounds.push(new Sound(s, 0, 2.46, unit, sound_type));
          }
        } else {
          let ran = Math.floor(Math.random() * 3);

          if (!ran) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/mag/annoyed1.wav";
            sounds.push(new Sound(s, 0, 1.93, unit, sound_type));
          } else if (ran === 1) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/mag/annoyed2.wav";
            sounds.push(new Sound(s, 0, 1.74, unit, sound_type));
          } else if (ran === 2) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/mag/annoyed3.wav";
            sounds.push(new Sound(s, 0, 2.19, unit, sound_type));
          }
        }
      } else if (sound_type === "go_sound" || sound_type === "target") {
        if (!unit.fatherFraction.canMagick) {
          let ran = Math.floor(Math.random() * 3);

          if (!ran) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/acknowledge1.wav";
            sounds.push(new Sound(s, 0, 0.76, unit, sound_type));
          } else if (ran === 1) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/acknowledge2.wav";
            sounds.push(new Sound(s, 0, 0.94, unit, sound_type));
          } else if (ran === 2) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/acknowledge3.wav";
            sounds.push(new Sound(s, 0, 0.9, unit, sound_type));
          }
        } else {
          let ran = Math.floor(Math.random() * 3);

          if (!ran) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/mag/acknowledge1.wav";
            sounds.push(new Sound(s, 0, 0.99, unit, sound_type));
          } else if (ran === 1) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/mag/acknowledge2.wav";
            sounds.push(new Sound(s, 0, 0.85, unit, sound_type));
          } else if (ran === 2) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/mag/acknowledge3.wav";
            sounds.push(new Sound(s, 0, 0.9, unit, sound_type));
          }
        }
      } else if (sound_type === "select_sound") {
        if (!unit.fatherFraction.canMagick) {
          let ran = Math.floor(Math.random() * 4);

          if (!ran) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/selected1.wav";
            sounds.push(new Sound(s, 0, 0.81, unit, sound_type));
          } else if (ran === 1) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/selected2.wav";
            sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
          } else if (ran === 2) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/selected3.wav";
            sounds.push(new Sound(s, 0, 0.55, unit, sound_type));
          } else if (ran === 3) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/selected4.wav";
            sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
          }
        } else {
          let ran = Math.floor(Math.random() * 3);

          if (!ran) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/mag/selected1.wav";
            sounds.push(new Sound(s, 0, 1.06, unit, sound_type));
          } else if (ran === 1) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/mag/selected2.wav";
            sounds.push(new Sound(s, 0, 0.51, unit, sound_type));
          } else if (ran === 2) {
            let s = new Audio();
            s.src = "wc/sounds/orc/rizar/mag/selected3.wav";
            sounds.push(new Sound(s, 0, 0.53, unit, sound_type));
          }
        }
      }
    }
  } else if (unit.unitName === "luchnik") {
    if (unit.nation === "h") {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/h/luchnik/ready.wav";
        sounds.push(new Sound(s, 0, 1.3, unit, sound_type));
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/annoyed1.wav";
          sounds.push(new Sound(s, 0, 1.03, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/annoyed2.wav";
          sounds.push(new Sound(s, 0, 1.41, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/annoyed3.wav";
          sounds.push(new Sound(s, 0, 2.46, unit, sound_type));
        }
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/acknowledge1.wav";
          sounds.push(new Sound(s, 0, 0.52, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/acknowledge2.wav";
          sounds.push(new Sound(s, 0, 0.87, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/acknowledge3.wav";
          sounds.push(new Sound(s, 0, 0.89, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/acknowledge4.wav";
          sounds.push(new Sound(s, 0, 0.56, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/selected1.wav";
          sounds.push(new Sound(s, 0, 1.03, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/selected2.wav";
          sounds.push(new Sound(s, 0, 0.81, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/selected3.wav";
          sounds.push(new Sound(s, 0, 0.77, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/luchnik/selected4.wav";
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        }
      }
    } else {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/orc/luchnik/ready.wav";
        sounds.push(new Sound(s, 0, 1.1, unit, sound_type));
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/luchnik/annoyed1.wav";
          sounds.push(new Sound(s, 0, 1.02, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/luchnik/annoyed2.wav";
          sounds.push(new Sound(s, 0, 2.55, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/luchnik/annoyed3.wav";
          sounds.push(new Sound(s, 0, 2.22, unit, sound_type));
        }
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/luchnik/acknowledge1.wav";
          sounds.push(new Sound(s, 0, 0.73, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/luchnik/acknowledge2.wav";
          sounds.push(new Sound(s, 0, 0.56, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/luchnik/acknowledge3.wav";
          sounds.push(new Sound(s, 0, 0.92, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 3);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/luchnik/selected1.wav";
          sounds.push(new Sound(s, 0, 0.57, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/luchnik/selected2.wav";
          sounds.push(new Sound(s, 0, 0.83, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/luchnik/selected3.wav";
          sounds.push(new Sound(s, 0, 0.85, unit, sound_type));
        }
      }
    }
  } else if (unit.unitName === "mechnick") {
    if (unit.nation === "h") {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/h/mechnik/ready.wav";
        sounds.push(new Sound(s, 0, 1.07, unit, sound_type));
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/acknowledge1.wav";
          sounds.push(new Sound(s, 0, 0.59, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/acknowledge2.wav";
          sounds.push(new Sound(s, 0, 1, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/acknowledge3.wav";
          sounds.push(new Sound(s, 0, 0.93, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/acknowledge4.wav";
          sounds.push(new Sound(s, 0, 1.04, unit, sound_type));
        }
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 7);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/annoyed1.wav";
          sounds.push(new Sound(s, 0, 1.46, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/annoyed2.wav";
          sounds.push(new Sound(s, 0, 1.61, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/annoyed3.wav";
          sounds.push(new Sound(s, 0, 1.93, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/annoyed4.wav";
          sounds.push(new Sound(s, 0, 1.8, unit, sound_type));
        } else if (ran === 4) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/annoyed5.wav";
          sounds.push(new Sound(s, 0, 1.92, unit, sound_type));
        } else if (ran === 5) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/annoyed6.wav";
          sounds.push(new Sound(s, 0, 1.69, unit, sound_type));
        } else if (ran === 6) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/annoyed7.wav";
          sounds.push(new Sound(s, 0, 1.79, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 6);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/selected1.wav";
          sounds.push(new Sound(s, 0, 0.91, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/selected2.wav";
          sounds.push(new Sound(s, 0, 1.01, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/selected3.wav";
          sounds.push(new Sound(s, 0, 0.8, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/selected4.wav";
          sounds.push(new Sound(s, 0, 0.51, unit, sound_type));
        } else if (ran === 4) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/selected5.wav";
          sounds.push(new Sound(s, 0, 0.59, unit, sound_type));
        } else if (ran === 5) {
          let s = new Audio();
          s.src = "wc/sounds/h/mechnik/selected6.wav";
          sounds.push(new Sound(s, 0, 1.2, unit, sound_type));
        }
      }
    } else {
      if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/orc/mechnik/ready.wav";
        sounds.push(new Sound(s, 0, 1.71, unit, sound_type));
      } else if (sound_type === "go_sound" || sound_type === "target") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/go1.wav";
          sounds.push(new Sound(s, 0, 0.72, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/go2.wav";
          sounds.push(new Sound(s, 0, 0.68, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/go3.wav";
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/go4.wav";
          sounds.push(new Sound(s, 0, 0.65, unit, sound_type));
        }
      } else if (
        sound_type === "select_sound" ||
        sound_type === "click_click"
      ) {
        let ran = Math.floor(Math.random() * 2);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/selected1.wav";
          sounds.push(new Sound(s, 0, 0.53, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/selected2.wav";
          sounds.push(new Sound(s, 0, 0.8, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/selected3.wav";
          sounds.push(new Sound(s, 0, 0.87, unit, sound_type));
        }
      }
    }
  } else if (unit.unitName === "peon") {
    if (unit.fatherFraction.nation === "h") {
      if (sound_type === "complite") {
        let s = new Audio();
        s.src = "wc/sounds/h/batrak/complete.wav";
        sounds.push(new Sound(s, 0, 1.13, unit, sound_type));
      } else if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/h/batrak/ready.wav";
        sounds.push(new Sound(s, 0, 1.07, unit, sound_type));
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 7);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/build_1.wav";
          sounds.push(new Sound(s, 0, 0.66, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/build_2.wav";
          sounds.push(new Sound(s, 0, 1.32, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/build_3.wav";
          sounds.push(new Sound(s, 0, 1.71, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/build_4.wav";
          sounds.push(new Sound(s, 0, 0.9, unit, sound_type));
        } else if (ran === 4) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/build_5.wav";
          sounds.push(new Sound(s, 0, 0.98, unit, sound_type));
        } else if (ran === 5) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/build_6.wav";
          sounds.push(new Sound(s, 0, 0.79, unit, sound_type));
        } else if (ran === 6) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/build_7.wav";
          sounds.push(new Sound(s, 0, 1.58, unit, sound_type));
        }
      } else if (sound_type === "go_sound" || sound_type === "build_sound") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/batrak_go_1.wav";
          sounds.push(new Sound(s, 0, 0.8, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/batrak_go_2.wav";
          sounds.push(new Sound(s, 0, 0.88, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/batrak_go_3.wav";
          sounds.push(new Sound(s, 0, 0.98, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/batrak_go_4.wav";
          sounds.push(new Sound(s, 0, 0.59, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/batrak_select_1.wav";
          sounds.push(new Sound(s, 0, 0.5, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/batrak_select_2.wav";
          sounds.push(new Sound(s, 0, 0.64, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/batrak_select_3.wav";
          sounds.push(new Sound(s, 0, 0.73, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/h/batrak/batrak_select_4.wav";
          sounds.push(new Sound(s, 0, 0.7, unit, sound_type));
        }
      }
    } else {
      if (sound_type === "complite") {
        let s = new Audio();
        s.src = "wc/sounds/orc/batrak/complete.wav";
        sounds.push(new Sound(s, 0, 0.95, unit, sound_type));
      } else if (sound_type === "ready") {
        let s = new Audio();
        s.src = "wc/sounds/orc/batrak/ready.wav";
        sounds.push(new Sound(s, 0, 0.87, unit, sound_type));
      } else if (sound_type === "click_click") {
        let ran = Math.floor(Math.random() * 7);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/build1.wav";
          sounds.push(new Sound(s, 0, 1.24, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/build2.wav";
          sounds.push(new Sound(s, 0, 1.72, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/build3.wav";
          sounds.push(new Sound(s, 0, 1.64, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/build4.wav";
          sounds.push(new Sound(s, 0, 1.85, unit, sound_type));
        } else if (ran === 4) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/build5.wav";
          sounds.push(new Sound(s, 0, 0.77, unit, sound_type));
        } else if (ran === 5) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/build6.wav";
          sounds.push(new Sound(s, 0, 0.72, unit, sound_type));
        } else if (ran === 6) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/build7.wav";
          sounds.push(new Sound(s, 0, 2.23, unit, sound_type));
        }
      } else if (sound_type === "go_sound" || sound_type === "build_sound") {
        let ran = Math.floor(Math.random() * 4);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/go1.wav";
          sounds.push(new Sound(s, 0, 0.72, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/go2.wav";
          sounds.push(new Sound(s, 0, 0.68, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/go3.wav";
          sounds.push(new Sound(s, 0, 0.84, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/go4.wav";
          sounds.push(new Sound(s, 0, 0.65, unit, sound_type));
        }
      } else if (sound_type === "select_sound") {
        let ran = Math.floor(Math.random() * 6);

        if (!ran) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/selected1.wav";
          sounds.push(new Sound(s, 0, 0.53, unit, sound_type));
        } else if (ran === 1) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/selected2.wav";
          sounds.push(new Sound(s, 0, 0.8, unit, sound_type));
        } else if (ran === 2) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/selected3.wav";
          sounds.push(new Sound(s, 0, 0.87, unit, sound_type));
        } else if (ran === 3) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/selected4.wav";
          sounds.push(new Sound(s, 0, 0.63, unit, sound_type));
        } else if (ran === 4) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/selected5.wav";
          sounds.push(new Sound(s, 0, 1.14, unit, sound_type));
        } else if (ran === 5) {
          let s = new Audio();
          s.src = "wc/sounds/orc/batrak/selected6.wav";
          sounds.push(new Sound(s, 0, 0.33, unit, sound_type));
        }
      }
    }
  }
};
