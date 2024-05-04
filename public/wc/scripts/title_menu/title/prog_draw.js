/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Title.prototype.prog_draw = function () {
  // console.log(this.list_1.timer);

  let koofX = width / document.documentElement.clientWidth;
  let koofY = height / document.documentElement.clientHeight;

  let dx = x * koofX;
  let dy = y * koofY;

  if (this.list === 'and') {
    if (global_zanaves.alfa === 1 && !this.list_and.timer) {
      this.list_5.imageToDraw = new Image();
      this.list_5.imageToDraw.src = `menu/${this.style}_${win_or_loose}.png`;

      if (music) {
        music.melody.pause();
        music == false;
      }

      let m = new Audio();
      m.src = `music/${this.style}/${win_or_loose}.mp3`;

      music = {
        melody: m, start: false, min: 0, max: 35,
      };

      this.list_and.timer = 1;
      global_obnul();
      start_game = false;

      ctx3.clearRect(0, 0, width, height);
      ctx2.clearRect(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);

      global_zanaves.alfa_step = 0.03;
      global_zanaves.timer = 50;
      global_zanaves.go_to = 'day';
      global_zanaves.active = true;

      menu_kursor = false;
    }

    if (this.list_and.timer) {
      this.list_and.timer++;

      ctx3.drawImage(
        this.list_5.imageToDraw,
        0,
        0,
        640,
        480,
        0,
        0,
        width,
        height,
      );
    }
  } else if (this.list === 5) {
    this.list_5_prog();
  } else if (this.list === 1) {
    if (this.list_1.timer === 420 && !this.list_1.click) {
      pausa_click = true;
    }

    if (!this.list_1.timer) {
      this.list_3.timer = 0;
      this.list_3.ret = false;
      this.list_3.list = false;

      this.list_1.imageToDraw = new Image();
      this.list_1.imageToDraw_2 = new Image();
      this.list_1.imageToDraw.src = 'title_images/fir.png';
      this.list_1.imageToDraw_2.src = 'title_images/fir_full.png';

      global_zanaves.alfa_step = 0.03;
      global_zanaves.timer = 30;
      global_zanaves.go_to = 'night';
      global_zanaves.active = true;
    } else if (this.list_1.timer === 70) {
      do_global_start = false;

      global_zanaves.alfa_step = 0.03;
      global_zanaves.timer = 10;
      global_zanaves.go_to = 'day';
      global_zanaves.active = true;

      global_start = true;
    } else if (this.list_1.timer >= 130) {
      if (!this.list_1.click) {
        if (this.list_1.timer === 130) {
          /// /////////////// sound
          // sound,start_time,out_time,unit,sound_type

          let sound = new Sound(new Audio(), 0.3, 3.2, undefined, undefined);
          sound.sound.src = 'sounds/menu_sounds/firzv.mp3';

          sounds_menu.push(sound);
        }

        if (this.list_1.timer === 215) {
          let sound = new Sound(new Audio(), 0, 2.3, undefined, undefined);
          sound.sound.src = 'sounds/menu_sounds/ggg.wav';

          sounds_menu.push(sound);
        }
      }
      /// /////////////////////////////////////////////

      if (this.list_1.animX === 5500) {
        ctx3.drawImage(
          this.list_1.imageToDraw_2,
          0,
          0,
          800,
          600,
          -25,
          0,
          width,
          height,
        );

        this.list_1.alfa -= 0.02;

        if (this.list_1.alfa < 0) {
          this.list_1.alfa = 0;
        }
      }

      ctx3.globalAlpha = this.list_1.alfa;
      ctx3.fillStyle = '#FFFFFF';
      ctx3.fillRect(0, 0, width, height);
      ctx3.drawImage(
        this.list_1.imageToDraw,
        this.list_1.animX,
        0,
        100,
        100,
        -25,
        0,
        width,
        height,
      );
      ctx3.globalAlpha = 1;

      if (this.list_1.timer % 3 === 0 && this.list_1.animX < 5500) {
        this.list_1.animX += 100;
      }
    }

    /// ///////////////////////////////////////// VIHOD

    if (pausa_click && this.list_1.timer >= 130 && !this.list_1.click) {
      this.list_1.click = true;

      for (let i = 0; i < sounds_menu.length; i++) {
        sounds_menu[i].stop = true;
        // console.log(true);
      }

      global_zanaves.alfa_step = 0.03;
      global_zanaves.timer = 10;
      global_zanaves.go_to = 'night';
      global_zanaves.active = true;
    }

    if (this.list_1.click) {
      if (global_zanaves.alfa === 1) {
        global_zanaves.alfa_step = 0.03;
        global_zanaves.timer = 280;
        global_zanaves.go_to = 'day';
        global_zanaves.active = true;

        this.list_1.click = false;
        this.list_1.timer = 0;
        this.list_1.animX = 0;
        this.list_1.alfa = 1;
        this.list_1.imageToDraw = new Image();
        this.list_1.imageToDraw_2 = new Image();
        this.list_1.imageToDraw.src = 'font/!.png';
        this.list_1.imageToDraw_2.src = 'font/!.png';

        this.list = 2;
        return;
      }
    }
    /// ////////////////////////////////////////////

    this.list_1.timer++;
  } else if (this.list === 2) {
    if (this.list_2.timer >= 30 && pausa_click && !this.list_2.click) {
      this.list_2.click = true;

      global_zanaves.alfa_step = 0.03;
      global_zanaves.timer = 10;
      global_zanaves.go_to = 'night';
      global_zanaves.active = true;
    }

    if (!this.list_2.timer) {
      // this.imageToDraw=intro;//tanker_oil_h_blue;
      this.list_2.imageToDraw_2 = new Image();
      this.list_2.imageToDraw_2.src = 'title_images/shadow.png';

      vid = document.createElement('video');
      vid.src = 'video/intro.mp4';

      this.list_2.x = 450;
      this.list_2.y = 200;
      this.list_2.gabX = 600;
      this.list_2.gabY = 300;
      this.list_2.alfa = 0;
    }

    if (this.list_2.timer === 1) {
      vid.play();
    }

    if (this.list_2.timer >= 30 && vid.currentTime <= 50) {
      ctx3.drawImage(vid, 0, 0, 480, 360, 0, 0, width, height);
    }

    /// //////////////////////////////////

    if (vid.currentTime >= 41.9) {
      if (this.list_2.gabX > 400) {
        this.list_2.gabX -= 2;
        this.list_2.gabY--;
      }

      if (this.list_2.alfa < 0.8) {
        this.list_2.alfa += 0.004;
      }

      ctx3.globalAlpha = this.list_2.alfa;
      ctx3.drawImage(
        this.list_2.imageToDraw_2,
        0,
        0,
        600,
        150,
        this.list_2.x - this.list_2.gabX / 2,
        this.list_2.y - this.list_2.gabY / 2,
        this.list_2.gabX,
        this.list_2.gabY,
      );
      ctx3.globalAlpha = 1;
    }

    /// //////////////////////////////////////////////

    if (vid.currentTime >= 48 && !this.list_2.night && !this.list_2.click) {
      this.list_2.night = true;

      global_zanaves.alfa_step = 0.03;
      global_zanaves.timer = 0;
      global_zanaves.go_to = 'night';
      global_zanaves.active = true;
    }

    if (vid.currentTime >= 50 || this.list_2.click) {
      if (vid.volume > 0.05) {
        vid.volume -= 0.02;

        // console.log("!!!!!!!!!!!!!!!!!!!!!!!");
      }

      if (global_zanaves.alfa === 1 && vid.volume <= 0.05) {
        global_zanaves.alfa_step = 0.03;
        global_zanaves.timer = 100;
        global_zanaves.go_to = 'day';
        global_zanaves.active = true;

        vid.pause();
        vid.volume = 1;
        vid.currentTime = 0;
        this.list_2.timer = 0;
        this.list_2.click = false;
        this.list_2.night = false;
        this.list = 3;

        return;
      }
    }

    this.list_2.timer++;
  } else if (this.list === 4) {
    if (level === 1) {
      if (!this.list_4.timer) {
        vid = document.createElement('video');
        vid.src = 'video/all.mp4';

        if (level === 1) {
          vid.currentTime = 7;
          this.list_4.video_finish = 111;
          this.list_4.video_click = 107;
        }
        vid.volume = 1;
        vid.play();
        this.list_4.timer = 1;
      }
      if (
        !global_zanaves.alfa
        && !this.list_4.click
        && (vid.currentTime >= this.list_4.video_click || pausa_click)
      ) {
        this.list_4.click = true;

        global_zanaves.alfa_step = 0.02;
        global_zanaves.timer = 0;
        global_zanaves.go_to = 'night';
        global_zanaves.active = true;
      }

      if (this.list_4.click) {
        vid.volume = 1 - global_zanaves.alfa;

        if (global_zanaves.alfa === 1) {
          vid.currentTime = 0;
          this.list_4.timer = 0;
          this.list_4.click = false;
          vid.pause();

          this.list = 5;

          global_zanaves.alfa_step = 0.02;
          global_zanaves.timer = 50;
          global_zanaves.go_to = 'day';
          global_zanaves.active = true;
        }
      }

      ctx3.drawImage(vid, 0, 0, 640, 360, 0, 0, width, height);
    }
  } else if (this.list === 3) {
    /// ///////////////////////////////////////////////// custom start

    if (this.list_3.castom_start) {
      // this.active=false;
      global_zanaves.alfa_step = 0.03;
      global_zanaves.timer = 0;
      global_zanaves.go_to = 'night';
      global_zanaves.active = true;

      if (global_zanaves.alfa === 1) {
        /// / START CUSTOM

        global_zanaves.alfa_step = 0.03;
        global_zanaves.timer = 20;
        global_zanaves.go_to = 'day';
        global_zanaves.active = true;

        this.active = false;

        this.style = false;

        this.create_kick_start();

        fractionsCrate();
        start_game = true;
      }
    }

    /// ///////////////////////////////////////////

    if (this.list_3.list === 'orc' || this.list_3.list === 'h') {
      if (global_zanaves.alfa === 1) {
        this.list = 4;

        level = 1;

        this.style = this.list_3.list;

        menu_kursor = false;

        global_zanaves.alfa_step = 0.03;
        global_zanaves.timer = 100;
        global_zanaves.go_to = 'day';
        global_zanaves.active = true;

        return;
      }
    } else if (this.list_3.list === 'custom') {
      this.strel_punkts(); /// ///////////////////!!!!!!!!!!!!!!!!!!!!!!!

      for (let i = 0; i < this.subjects.length; i++) {
        let sub = this.subjects[i];

        if (sub.position) {
          this.can_start = true;
          break;
        }
      }

      if (this.can_start) {
        let txt = this.list_3.start_key_1;

        if (this.list_3.punkts.indexOf(txt) === -1) {
          this.list_3.punkts.push(txt);
          txt.base = this.list_3;
        }
      } else {
        let txt = this.list_3.start_key_1;

        if (this.list_3.punkts.indexOf(txt) !== -1) {
          this.list_3.punkts.splice(this.list_3.punkts.indexOf(txt), 1);
        }
      }
    }

    if (this.list_3.ret) {
      if (!this.list_3.punkts[0].alfa) {
        this.list_3.list = this.list_3.ret;

        if (this.list_3.ret === 'orc' || this.list_3.ret === 'h') {
          if (music && !music.stop_command) {
            music.stop_command = true;
          }

          this.list_3.punkts = [];
          this.list_3.texts = [];
          this.list_3.texts_little = [];

          global_zanaves.alfa_step = 0.03;
          global_zanaves.timer = 10;
          global_zanaves.go_to = 'night';
          global_zanaves.active = true;

          /*
  var video = document.createElement('video');

  /// set video elemet size
  video.width = 640;
  video.height = 360;

  /// setup with auto preload and loop
  video.preload = 'auto';
  video.loop = true;
  */
        } else if (this.list_3.ret === 'new') {
          // this.list_3.mapDraw=this.map;

          this.list_3.punkts = [];
          this.list_3.texts = [];
          this.list_3.texts_little = [];

          for (let i = 0; i < this.list_3.new_base_text.length; i++) {
            let txt = this.list_3.new_base_text[i];
            this.list_3.texts.push(txt);
          }

          for (let i = 0; i < this.list_3.new_keys.length; i++) {
            let key = this.list_3.new_keys[i];
            key.base = this.list_3;
            this.list_3.punkts.push(key);
          }
        } else if (this.list_3.ret === 'start_1') {
          /// custom start

          if (music && !music.stop_command) {
            music.stop_command = true;
          }

          this.list_3.mapDraw = false;

          this.list_3.punkts = [];
          this.list_3.texts = [];
          this.list_3.texts_little = [];

          // console.log("ok")
          this.list_3.castom_start = true;
        } else if (this.list_3.ret === 'custom') {
          this.list_3.mapDraw = this.map;

          this.list_3.punkts = [];
          this.list_3.texts = [];
          this.list_3.texts_little = [];

          for (let i = 0; i < this.list_3.custom_base_text.length; i++) {
            let txt = this.list_3.custom_base_text[i];
            this.list_3.texts.push(txt);
          }

          for (let i = 0; i < this.list_3.custom_keys.length; i++) {
            let key = this.list_3.custom_keys[i];
            key.base = this.list_3;
            this.list_3.punkts.push(key);
          }
        } else if (this.list_3.ret === 'back 1') {
          this.list_3.timer = 0;
        }

        this.list_3.ret = false;
        this.list_3.click = false;
      }

      // this.list_3.ret=false;
    }

    menu_kursor = [dx, dy];

    if (this.list_3.timer && this.list_3.timer < 1000) {
      if (this.list_3.sx !== x || this.list_3.sy !== y) {
        this.list_3.timer = 1;
      }

      this.list_3.sx = x;
      this.list_3.sy = y;

      if (!global_zanaves.active) {
        for (let i = 0; i < this.list_3.punkts.length; i++) {
          let key = this.list_3.punkts[i];

          if (this.list_3.ret) {
            if (key.alfa > 0) {
              key.alfa -= 0.1;
            }
            if (key.alfa < 0) {
              key.alfa = 0;
            }

            key.alfa_shadow = key.alfa;
          }

          keys_menu.push(key);
        }
      }
    }

    if (!this.list_3.timer) {
      // this.list_3.music=new Audio();
      // this.list_3.music.src="music/intro.mp3";

      this.list_3.list = 'base';

      this.list_3.imageToDraw = new Image();
      this.list_3.imageToDraw_2 = new Image();
      this.list_3.imageToDraw.src = 'title_images/menu_base_q.png';
      this.list_3.imageToDraw_2.src = 'title_images/menu_base_zap.png';

      this.list_3.punkts = [];
      this.list_3.texts = [];
      this.list_3.texts_little = [];
      this.list_3.mapDraw = false;

      for (let i = 0; i < this.list_3.base_keys.length; i++) {
        let key = this.list_3.base_keys[i];
        key.base = this.list_3;
        this.list_3.punkts.push(key);
      }

      for (let i = 0; i < this.list_3.base_text.length; i++) {
        let txt = this.list_3.base_text[i];
        this.list_3.texts.push(txt);
      }
    }

    /// ////////////////////////////////////////// music

    // console.log(global_zanaves.timer)

    if (
      !start_game
      && ((global_zanaves.go_to === 'day' && global_zanaves.timer < 40)
        || !global_zanaves.active)
    ) {
      if (!music) {
        let m = new Audio();
        m.src = 'music/intro.mp3';

        music = {
          melody: m, start: false, min: 0, max: 77,
        };
      }
    }
    /// //////////////////////////////////////

    if (this.list_3.timer === 1000) {
      if (music && !music.stop_command) {
        music.stop_command = true;
      }

      global_zanaves.alfa_step = 0.03;
      global_zanaves.timer = 0;
      global_zanaves.go_to = 'night';
      global_zanaves.active = true;
    }

    if (global_zanaves.alfa === 1 && this.list_3.timer > 500) {
      this.list_3.timer = 0;
      this.list_3.imageToDraw = null;

      this.list = 1;
      menu_kursor = false;
      this.list_3.mapDraw = false;
      return;
    }

    this.list_3.timer++;

    ctx3.drawImage(
      this.list_3.imageToDraw_2,
      0,
      0,
      1000,
      600,
      0,
      0,
      width,
      height,
    );

    /// ///////////////////////////////////////////////////////////

    if (this.list_3.list === 'custom') {
      maps_txt_draw(dx, dy);
    }

    /// ////////////////////////////////////////////////////////////

    ctx3.drawImage(
      this.list_3.imageToDraw,
      0,
      0,
      1000,
      600,
      0,
      0,
      width,
      height,
    );
  }

  /// //////////////////////////////////////////// OTRIS OBRAB LIST3
  this.alfa_2 = 0;

  if (keys_menu.length) {
    if (keys_menu[0].alfa) {
      this.alfa_2 = keys_menu[0].alfa;
    }

    let pro = kaskad_prog(dx, dy);

    if (!pro) {
      strel_prog(dx, dy);
    }

    for (let i = 0; i < keys_strel.length; i++) {
      if (keys_strel[i].txt_little && keys_strel[i].txt_little.length) {
        // console.log("here");

        // if(keys_strel[i].type==="s"){console.log("here");};

        for (let j = 0; j < keys_strel[i].txt_little.length; j++) {
          this.list_3.texts_little.push(keys_strel[i].txt_little[j]);
        }
      }
    }

    /// ///////////////////////////////////// info text

    let { base } = keys_menu[0];

    for (let i = 0; i < base.texts.length; i++) {
      let punkt = base.texts[i];

      for (let i = 0; i < punkt.text_a.length; i++) {
        let ob = punkt.text_a[i];

        let imageToDraw; //= unit_menu_little_liters;

        imageToDraw = unit_menu_little_liters_3;

        let x = punkt.x - (punkt.text_a.length * 12) / 2;

        ctx3.globalAlpha = keys_menu[0].alfa;
        ctx3.drawImage(
          imageToDraw,
          menu_litera(ob),
          0,
          12,
          12,
          x + i * 12,
          punkt.y,
          15,
          20,
        );
        ctx3.globalAlpha = 1;
      }
    }

    /// /////////////////////////////////////////////////////////////////////////

    let mass;

    mass = keys_menu;

    for (let i = 0; i < mass.length; i++) {
      let punkt = mass[i];

      if (!menu_long_click) {
        punkt.long_click = false;
      }

      let animY = 50;

      if (punkt.type === 2) {
        animY = 100;
      }

      if (punkt.type === 3) {
        type_3_order(punkt);
      }

      ctx3.globalAlpha = punkt.alfa_shadow;
      ctx3.fillStyle = 'black';
      ctx3.fillRect(
        punkt.x - punkt.gabX / 2 + 10,
        punkt.y - punkt.gabY / 2 + 10,
        punkt.gabX * punkt.mas,
        punkt.gabY * punkt.mas,
      );

      if (punkt.alfa > 1) {
        punkt.alfa = 1;
      }

      ctx3.globalAlpha = punkt.alfa;
      ctx3.drawImage(
        sp,
        0,
        animY,
        200,
        50,
        punkt.x - (punkt.gabX * punkt.mas) / 2,
        punkt.y - (punkt.gabY * punkt.mas) / 2,
        punkt.gabX * punkt.mas,
        punkt.gabY * punkt.mas,
      );
      ctx3.globalAlpha = 1;

      if (punkt.alfa < 1 && !punkt.base.ret) {
        punkt.alfa += 0.1;
        punkt.alfa_shadow += 0.05;
      } else {
        for (let i = 0; i < punkt.text_a.length; i++) {
          let ob = punkt.text_a[i];

          let imageToDraw; //= unit_menu_little_liters;

          imageToDraw = unit_menu_little_liters_2;

          let x = punkt.x - (punkt.text_a.length * 8 * punkt.mas) / 2;

          if (punkt.type === 2 || punkt.type === 3) {
            x = punkt.x - punkt.gabX / 2;
          }

          ctx3.globalAlpha = punkt.alfa;
          ctx3.drawImage(
            imageToDraw,
            menu_litera(ob),
            0,
            12,
            12,
            x + i * 8 * punkt.mas,
            punkt.y - 7.5 * punkt.mas,
            10 * punkt.mas,
            15 * punkt.mas,
          );
          ctx3.globalAlpha = 1;
        }
      }

      if (
        !selected
        && !(
          dx < punkt.x - punkt.gabX / 2
          || dx > punkt.x + punkt.gabX / 2
          || dy < punkt.y - punkt.gabY / 2
          || dy > punkt.y + punkt.gabY / 2
        )
      ) {
        selected = true;

        ctx3.globalAlpha = punkt.alfa;
        ctx3.strokeStyle = 'yellow';
        ctx3.strokeRect(
          punkt.x - (punkt.gabX * punkt.mas) / 2,
          punkt.y - (punkt.gabY * punkt.mas) / 2,
          punkt.gabX * punkt.mas,
          punkt.gabY * punkt.mas,
        );
        ctx3.globalAlpha = 1;

        if (pausa_click && !punkt.base.click && punkt.type === 1) {
          punkt.base.click = true;

          click_key = { key: punkt, base: punkt.base };
        }

        /*
  if(menu_long_click||click_up){
  if(punkt.type===2&&pausa_click){
      punkt.long_click=true;
  };

  if(punkt.type===3){

      punkt.father.long_click=true;

  if(click_up){

      punkt.father.text_a=punkt.text_a;

  };

  };
  };
  */
      } else {
        punkt.long_click = false;
      }
    } // for

    strel_draw(keys_menu[0].alfa, keys_menu[0].alfa_shadow);

    if (strel_q) {
      ctx3.globalAlpha = keys_menu[0].alfa;
      ctx3.strokeStyle = 'yellow';
      ctx3.strokeRect(strel_q.x, strel_q.y, strel_q.gabX, strel_q.gabY);
      ctx3.globalAlpha = 1;
    }

    selected = false;
    strel_q = false;
  } // keys_menu.length

  /// /////////////////////////////////// custom map list_3 draw

  if (this.list_3.mapDraw) {
    ctx3.globalAlpha = this.list_3.punkts[0].alfa;
    ctx3.fillStyle = 'blue';
    ctx3.fillRect(375, 150, 150, 150);
    ctx3.drawImage(
      maps,
      this.list_3.mapDraw.animX,
      0,
      100,
      100,
      375,
      150,
      150,
      150,
    );

    for (let i = 0; i < this.list_3.mapDraw.name.length; i++) {
      let ob = this.list_3.mapDraw.name[i];

      let imageToDraw; //= unit_menu_little_liters;

      imageToDraw = unit_menu_little_liters_3;

      let x = 450 - (this.list_3.mapDraw.name.length * 12) / 2;

      ctx3.drawImage(
        imageToDraw,
        menu_litera(ob),
        0,
        12,
        12,
        x + i * 12,
        320,
        15,
        20,
      );
    }

    ctx3.globalAlpha = 1;
  }

  if (click_up) {
    for (let i = 0; i < keys_strel.length; i++) {
      keys_strel[i].long_click = false;
      long_punkt = false;
    }
  }

  keys_menu = [];
  this.list_3.texts_little = [];
  keys_nation = [];
  keys_union = [];
  keys_position = [];
  keys_kaskad = [];
  keys_strel = [];
  orc = [];
  h = [];
  positions = [];
  this.can_start = false;
};
