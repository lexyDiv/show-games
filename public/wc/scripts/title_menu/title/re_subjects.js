/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Title.prototype.re_subjects = function () {
  this.list_3.mapDraw = this.map;

  for (let i = 0; i < this.subjects.length; i++) {
    let sub = this.subjects[i];

    if (sub.fraction) {
      sub.fraction.reserv = false;
    }
    if (sub.position) {
      sub.position.reserv = false;
    }
  }

  this.subjects = [];

  for (let i = 0; i < all_fractions.length + 1; i++) {
    this.subjects.push({
      num: i,
      f: false,
      nation: 'none',
      union: '1', // , position:f.position
    });
  }

  for (let i = 1; i < this.subjects.length; i++) {
    this.subjects[i].control = 'comp';
    this.subjects[i].keys = {
      nation: {
        x: 525 + 90,
        y: 280 + i * 50,
        gabX: 100,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        active: true,
        type: 'nation',
        animY: 100,
        // kaskad_keys:["None","Orc","Human"],
        txt: 'None',
      },

      union: {
        x: 525 + 310,
        y: 280 + i * 50,

        gabX: 100,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        active: false,
        type: 'union',
        txt: '1',
        animY: 100,
      },

      position: {
        x: 525 + 200,
        y: 280 + i * 50,
        gabX: 100,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        active: false,
        type: 'position',
        animY: 100,
      },
    };

    if (i > 0) {
      let sub = this.subjects[i].keys.nation;

      this.subjects[i].keys.nation.txt_little = [
        {
          x: sub.x,
          y: sub.y - 30,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: `Bot${String(i)} Race:`,
        },
      ];

      sub = this.subjects[i].keys.position;

      this.subjects[i].keys.position.txt_little = [
        {
          x: sub.x,
          y: sub.y - 30,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: `Bot${String(i)} Position:`,
        },
      ];

      sub = this.subjects[i].keys.union;

      this.subjects[i].keys.union.txt_little = [
        {
          x: sub.x,
          y: sub.y - 30,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: `Bot${String(i)} Union:`,
        },
      ];
    }
  }

  this.subjects[0].control = 'player';
  this.subjects[0].keys = {
    nation: {
      x: 60,
      y: 330,
      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: true,
      type: 'nation',
      animY: 100,
      // kaskad_keys:["None","Orc","Human"],
      txt: 'None',

      txt_little: [
        {
          x: 0,
          y: 0,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: 'Your Race:',
        },
      ],
    },

    union: {
      x: 280,
      y: 330,

      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: false,
      type: 'union',
      txt: '1',
      animY: 100,
      txt_little: [
        {
          x: 0,
          y: 0,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: 'Your Union:',
        },
      ],
    },

    position: {
      x: 170,
      y: 330,
      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: false,
      type: 'position',
      animY: 100,
      txt_little: [
        {
          x: 0,
          y: 0,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: 'Your Position:',
        },
      ],
    },
  };

  this.subjects[0].keys.nation.txt_little[0].x = this.subjects[0].keys.nation.x;
  this.subjects[0].keys.nation.txt_little[0].y = this.subjects[0].keys.nation.y - 30;

  this.subjects[0].keys.union.txt_little[0].x = this.subjects[0].keys.union.x;
  this.subjects[0].keys.union.txt_little[0].y = this.subjects[0].keys.union.y - 30;

  this.subjects[0].keys.position.txt_little[0].x = this.subjects[0].keys.position.x;
  this.subjects[0].keys.position.txt_little[0].y = this.subjects[0].keys.position.y - 30;
};

/// //////////////////////////

if (all_maps.length < 7) {
  while (all_maps.length < 7) {
    all_maps.push({
      ii_name: 'castome_map_1',
      name: false,
      size: 65,
      apponents: 1,
      animX: 0,
      reserv: false,
    });
  }
}

/// ///////////////////////////////
