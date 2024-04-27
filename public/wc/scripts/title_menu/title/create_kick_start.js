/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Title.prototype.create_kick_start = function () {
  const fractions = [];

  for (let i = 0; i < this.subjects.length; i++) {
    const f = this.subjects[i];

    if (f.fraction) {
      fractions.push(f);
    }
  }

  kick_start = {
    fractions: [],
    map: this.map.map,
    map_name: title.map.ii_name,
    type: this.map.type,
  };

  for (let i = 0; i < fractions.length; i++) {
    const f = fractions[i];

    const fr = {
      x: f.position.x,
      y: f.position.y,
      name: f.fraction.ii_name,
      nation: f.fraction.nation,
      union: f.union,
      master_shablon: f.position.master_shablon,
      createShablon: f.position.createShablon,
      control: f.control,
    };

    kick_start.fractions.push(fr);
  }

  // console.log(kick_start.fractions[0]);
};
