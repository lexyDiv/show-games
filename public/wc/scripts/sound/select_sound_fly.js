/* eslint-disable no-param-reassign */
/* eslint-disable no-self-compare */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable func-names */

const select_sound_fly = function (unit, sound_type, volume) {
  if (volume <= 0 || !volume || volume !== volume || sounds_fight.length >= 18) {
    return;
  }

  if (volume >= 1) {
    volume = 1;
  }

  if (sound_type === 'crash') {
    const ran = Math.floor(Math.random() * 3);

    if (!ran) {
      const s = new Audio();
      s.src = 'sounds/crash1.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 3.16, unit, sound_type));
    } else if (ran === 1) {
      const s = new Audio();
      s.src = 'sounds/crash2.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 2.82, unit, sound_type));
    } else if (ran === 2) {
      const s = new Audio();
      s.src = 'sounds/crash3.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 3.95, unit, sound_type));
    }
  } else if (sound_type === 'alarm_orc') {
    const ran = Math.floor(Math.random() * 2);

    if (!ran) {
      const s = new Audio();
      s.src = 'sounds/orc/alarm/help1.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.42, unit, sound_type));
    } else if (ran === 1) {
      const s = new Audio();
      s.src = 'sounds/orc/alarm/help2.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.94, unit, sound_type));
    }
  } else if (sound_type === 'alarm_h') {
    const ran = Math.floor(Math.random() * 2);

    if (!ran) {
      const s = new Audio();
      s.src = 'sounds/h/alarm/help1.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.18, unit, sound_type));
    } else if (ran === 1) {
      const s = new Audio();
      s.src = 'sounds/h/alarm/help2.wav';
      s.volume = volume;
      sounds_fight.push(new Sound(s, 0, 1.33, unit, sound_type));
    }
  } else if (sound_type === 'strela') {
    const s = new Audio();
    s.src = 'sounds/guard/strela.wav';
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 0.3, unit, sound_type));
  } else if (sound_type === 'click') {
    const s = new Audio();
    s.src = 'sounds/click.wav';
    s.volume = 0.5;
    sounds_fight.push(new Sound(s, 0, 0.21, unit, sound_type));
  } else if (sound_type === 'cannon') {
    const s = new Audio();
    s.src = 'sounds/h/ship/disv.wav';
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 2, unit, sound_type));
  } else if (sound_type === 'disboo') {
    const s = new Audio();
    s.src = 'sounds/h/ship/disboo.wav';
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 2, unit, sound_type));
  } else if (sound_type === 'boo_drag') {
    const s = new Audio();
    s.src = 'sounds/orc/dracon/boo.mp3';
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 4.57, unit, sound_type));
  } else if (sound_type === 'boo') {
    const s = new Audio();
    s.src = 'sounds/ballista/boo.wav';
    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 1.59, unit, sound_type));
  } else if (
    sound_type === 'luk'
      || sound_type === 'topor'
      || sound_type === 'hit'
  ) {
    const s = new Audio();
    s.src = 'sounds/h/luchnik/Bowhit.wav';

    s.volume = volume;
    sounds_fight.push(new Sound(s, 0, 0.39, unit, sound_type));
  }
};
