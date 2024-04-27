/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
const Title = function (list) {
  this.active = false;
  this.list = 1;
  this.timer = 0;
  this.can_start = false;

  this.map = all_maps[0];

  this.subjects = [];

  for (let i = 0; i < all_fractions.length + 1; i++) {
    const f = all_fractions[i];

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

  this.list_and = {
    timer: 0,
    imageToDraw: 0,
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
  };

  this.list_1 = {
    timer: 0,
    imageToDraw: 0,
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
  };

  this.list_2 = {
    timer: 0,
    imageToDraw: 0,
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
  };

  this.list_4 = {
    /*
  var video = document.createElement('video');

  /// set video elemet size
  video.width = 640;
  video.height = 360;

  /// setup with auto preload and loop
  video.preload = 'auto';
  video.loop = true;
  */

    timer: 0,
    // imageToDraw:document.createElement('video'),
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
  };

  // this.list_4.imageToDraw.src="video/all.mp4";

  this.list_5 = {
    timer: 0,
    imageToDraw: false,
    imageToDraw_2: false,
    animX: 0,
    alfa: 1,
    click: false,
  };

  this.list_3 = {
    timer: 0,
    imageToDraw: 0,
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
    sx: 0,
    sy: 0,
    list: 0,

    season: {
      x: 200,
      y: 480,
      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: true,
      type: 's',
      animY: 100,
      // kaskad_keys:["None","Orc","Human"],
      txt: season,
      txt_little: [
        {
          x: 200,
          y: 450,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: 'Season:',
        },
      ],
    },

    map_control: {
      click_up: {
        x: 520,
        y: 350,
        gabX: 20,
        gabY: 31,
      },
      click_down: {
        x: 520,
        y: 536,
        gabX: 20,
        gabY: 31,
      }, // dif 217

      scroller: {
        x: 520,
        y: 381,
        gabX: 20,
        gabY: 31,
        up_y: 381,
        down_y: 505,
        remove: all_maps.length * 31,
        koof_y: ((all_maps.length - 7) * 31) / 124,
      }, // dif 124
    },

    punkts: [],

    new_base_text: [
      {
        x: 450,
        y: 100,
        gabX: 150,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'New Campaign Game Setup',
      },
    ],
    new_keys: [
      {
        x: 450,
        y: 600,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'Previous Menu',
        mas: 1,
        act: 'back 1',
        type: 1,
      },
      {
        x: 450,
        y: 300,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'Human Campaign',
        mas: 1,
        act: 'h',
        type: 1,
      },
      {
        x: 450,
        y: 350,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'Orc Campaign',
        mas: 1,
        act: 'orc',
        type: 1,
      },
    ],
    base_keys: [
      {
        x: 450,
        y: 300,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'New Campaign',
        mas: 1,
        act: 'new',
        type: 1,
      },
      {
        x: 450,
        y: 400,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'Custom Game Setup',
        mas: 1,
        act: 'custom',
        type: 1,
      },
      {
        x: 450,
        y: 500,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'Enter Password',
        mas: 1,
        act: 'pass',
        type: 1,
      },
    ],
    base_text: [
      {
        x: 450,
        y: 100,
        gabX: 150,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'Game Setup',
        mas: 1,
      },
    ],
    custom_keys: [
      {
        x: 450,
        y: 600,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'Previous Menu',
        mas: 1,
        act: 'back 1',
        type: 1,
      },
    ],
    custom_base_text: [
      {
        x: 450,
        y: 100,
        gabX: 150,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: 'Custom Game Setup',
      },
    ],
    start_key_1: {
      x: 450,
      y: 650,
      gabX: 200,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      text_a: 'Start Game',
      mas: 1,
      act: 'start_1',
      type: 1,
    },
  };
};
