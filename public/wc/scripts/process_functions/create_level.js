/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const create_level = function () {
  if (level === 1) {
    if (title.style === 'orc') {
      gameFielgMap = level_1_orc;

      map_initialization();
      check_seas();
      check_continents();

      let fr = new Fraction(
        'redOrcs',
        'player',
        [
          new Unit(1, 23, 20, 2, 'redOrcs', 'orc'),
          new Unit(2, 22, 22, 3, 'redOrcs', 'orc'),
          new Unit(3, 19, 25, 3, 'redOrcs', 'orc'),
          new Unit(3, 18, 27, 3, 'redOrcs', 'orc'),
        ],
        1,
        1,
        'orc',

        [
          { h: 20, v: 28, type: 2 },
          { h: 26, v: 26, type: 3 },
        ],
      );

      fr.gold = 0;
      fr.wood = 0;
      fr.oil = 0;

      fractions.push(fr);

      /// ///////////////////////////////////////////////

      fr = new Fraction(
        'h_blue',
        'comp',
        [
          new Unit(3, 8, 8, 3, 'h_blue', 'h'),
          new Unit(2, 1, 15, 3, 'h_blue', 'h'),
          new Unit(2, 19, 3, 3, 'h_blue', 'h'),
          new Unit(3, 1, 30, 3, 'h_blue', 'h'),
        ],
        2,
        2,
        'h',
        [],
      );

      fr.createShablon = {
        flot: false,
        base_cells: 0,
        level: 1,
        attack: false,

        farms: [],

        towers: [],

        baracks: [],

        kuznyas: [],

        ogreBases: [],

        altars: [],

        dragon_roosts: [],

        temples: [],
      };

      fr.stop_back = true;

      fractions.push(fr);
    }
  }
};
