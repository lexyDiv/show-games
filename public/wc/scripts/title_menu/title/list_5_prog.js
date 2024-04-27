/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Title.prototype.list_5_prog = function () {
  if (!this.list_5.timer) {
    this.list_5.imageToDraw = new Image();
    this.list_5.imageToDraw_2 = new Image();
    this.list_5.imageToDraw.src = 'wc/menu/boock.png';
    this.list_5.imageToDraw_2.src = 'wc/menu/boock_2.png';
    this.list_5.alfa = 1;

    this.get_text();

    if (level === 1) {
      this.list_5.image_act = new Image();

      this.list_5.image_act.src = `wc/menu/act_1_${this.style}.png`;
    } else {
      this.list_5.image_act = false;
    }
  }

  this.list_5.timer++;

  if (
    !this.list_5.alfa
    && !global_zanaves.active
    && !this.list_5.click
    && (pausa_click || this.list_5.mas_text[this.list_5.mas_text.length - 1].y < 0)
  ) {
    this.list_5.click = true;

    global_zanaves.alfa_step = 0.03;
    global_zanaves.timer = 10;
    global_zanaves.go_to = 'night';
    global_zanaves.active = true;
  }

  if (this.list_5.click) {
    if (global_zanaves.alfa === 1) {
      this.list_5.timer = 0;
      this.list_5.click = false;

      global_zanaves.alfa_step = 0.03;
      global_zanaves.timer = 20;
      global_zanaves.go_to = 'day';
      global_zanaves.active = true;

      this.active = false;

      fractionsCrate();
      start_game = true;

      /*
  this.list=1;
  this.list_1.timer=0;
  this.list_5.timer=0;
  this.list_5.click=false;
  */
    }
  }

  ctx3.drawImage(this.list_5.imageToDraw, 0, 0, 800, 600, 0, 0, width, height);

  const on_draw = [];

  if (this.list_5.timer >= 200) {
    for (let k = 0; k < this.list_5.mas_text.length; k++) {
      const obj = this.list_5.mas_text[k];

      obj.y -= 0.5;

      if (obj.y < 370 && obj.y > 70) {
        on_draw.push(obj);
      }
    }
  }

  for (let k = 0; k < on_draw.length; k++) {
    const obj = on_draw[k];

    const punkt = obj.txt;

    for (let i = 0; i < punkt.length; i++) {
      const ob = punkt[i];

      let imageToDraw; //= unit_menu_little_liters;

      imageToDraw = unit_menu_little_liters_3;

      const { x } = obj;

      ctx3.drawImage(
        imageToDraw,
        menu_litera(ob),
        0,
        12,
        12,
        x + i * 12,
        obj.y,
        15,
        20,
      );
    }
  }

  ctx3.drawImage(
    this.list_5.imageToDraw_2,
    0,
    0,
    800,
    600,
    0,
    0,
    width,
    height,
  );

  /// ////////////////////////// oder

  ctx3.globalAlpha = 0.45;
  ctx3.fillStyle = 'black';
  ctx3.fillRect(695, 495, 190, 190);
  ctx3.globalAlpha = 1;

  for (let k = 0; k < this.list_5.oder_text.length; k++) {
    const obj = this.list_5.oder_text[k];

    const punkt = obj.txt;

    for (let i = 0; i < punkt.length; i++) {
      const ob = punkt[i];

      let imageToDraw; //= unit_menu_little_liters;

      imageToDraw = unit_menu_little_liters_3;

      const { x } = obj;

      ctx3.drawImage(
        imageToDraw,
        menu_litera(ob),
        0,
        12,
        12,
        x + i * 8,
        obj.y,
        8,
        15,
      );
    }
  }

  /// /////////////////////////////

  /// /////////////////////////////////////////  name

  for (let i = 0; i < this.list_5.name.length; i++) {
    const ob = this.list_5.name[i];

    let imageToDraw; //= unit_menu_little_liters;

    imageToDraw = unit_menu_little_liters_5;

    const x = 450 - (this.list_5.name.length * 20) / 2;

    ctx3.drawImage(
      imageToDraw,
      menu_litera(ob),
      0,
      12,
      12,
      x + i * 20,
      50,
      20,
      30,
    );
  }

  /// /////////////////////////////////////

  if (this.list_5.image_act && this.list_5.timer < 300 && this.list_5.alfa) {
    if (!music && this.list_5.timer === 45) {
      const m = new Audio();
      m.src = 'wc/music/act.mp3';

      music = {
        melody: m, start: false, min: 0, max: 5,
      };
    }

    ctx3.globalAlpha = this.list_5.alfa;
    ctx3.drawImage(this.list_5.image_act, 0, 0, 640, 480, 0, 0, width, height);
    ctx3.globalAlpha = 1;

    if (this.list_5.timer >= 250 && this.list_5.alfa > 0) {
      this.list_5.alfa -= 0.02;
    }
  }

  if (this.list_5.timer >= 300) {
    this.list_5.alfa = 0;
  }
};
