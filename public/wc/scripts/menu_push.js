Title.prototype.strel_punkts = function () {
  for (let i = 0; i < h_fractions.length; i++) {
    if (!h_fractions[i].reserv) {
      h.push(h_fractions[i]);
    }
  }

  for (let i = 0; i < orc_fractions.length; i++) {
    if (!orc_fractions[i].reserv) {
      orc.push(orc_fractions[i]);
    }
  }

  for (let i = 0; i < this.map.positions.length; i++) {
    if (!this.map.positions[i].reserv) {
      positions.push(this.map.positions[i]);
    }
  }

  let nas = [0];

  //0,orc[0],h[0]
  if (orc[0]) {
    nas.push(orc[0]);
  }
  if (h[0]) {
    nas.push(h[0]);
  }

  //let stope;

  let player_sub = this.subjects[0];

  for (let i = 0; i <= this.map.positions.length; i++) {
    let obj = this.subjects[i];

    //if(i||(positions.length&&h.length+orc.length)||obj.fraction){

    keys_strel.push(obj.keys.nation);

    obj.keys.nation.father = obj;
    obj.keys.union.father = obj;
    obj.keys.position.father = obj;

    //};

    if (obj.fraction) {
      obj.fraction.reserv = true;
      //obj.position=positions[0];
      obj.fraction.position.reserv = true;

      /*
for(let k=0;k<kas.length;k++){	
	if(kas[i]!==obj.fraction.menu_nation)	
};
//*/

      obj.keys.nation.txt = obj.fraction.menu_nation;
      obj.keys.position.txt = obj.position.num;
      //obj.keys.position=

      let pos = obj.keys.position;
      pos.txt = obj.position.num;

      keys_strel.push(pos);

      obj.keys.union.txt = obj.union;

      keys_strel.push(obj.keys.union);
    }
  }

  if (long_punkt) {
    if (long_punkt.type === "nation") {
      let ind = 0;
      for (let i = 0; i < nas.length; i++) {
        let txt = "None";
        //console.log(nas[i])
        if (nas[i]) {
          txt = nas[i].menu_nation;
        }

        if (txt !== long_punkt.txt) {
          ind++;

          keys_kaskad.push({
            x: long_punkt.x,
            y: long_punkt.y + ind * 30,
            gabX: long_punkt.gabX,
            gabY: long_punkt.gabY,
            animY: 50,
            txt: txt,
            father: long_punkt,
            f: nas[i],
          });
        }
      }
    } else if (long_punkt.type === "position") {
      let ind = 0;
      for (let i = 0; i < positions.length; i++) {
        let txt = positions[i].num;

        if (long_punkt.txt !== txt) {
          ind++;

          keys_kaskad.push({
            x: long_punkt.x,
            y: long_punkt.y + ind * 30,
            gabX: long_punkt.gabX,
            gabY: long_punkt.gabY,
            animY: 50,
            txt: txt,
            father: long_punkt,
            p: positions[i],
          });
        }
      }
    } else if (long_punkt.type === "union") {
      let ind = 0;
      for (let i = 1; i <= title.map.positions.length; i++) {
        let txt = String(i);

        if (long_punkt.txt !== txt) {
          ind++;

          keys_kaskad.push({
            x: long_punkt.x,
            y: long_punkt.y + ind * 30,
            gabX: long_punkt.gabX,
            gabY: long_punkt.gabY,
            animY: 50,
            txt: txt,
            father: long_punkt,
          });
        }
      }
    }
  }
};

const strel_draw = function (alfa, alfa_s) {
  if (title.list_3.mapDraw) {
    for (let k = 0; k < 2; k++) {
      let draw = keys_strel;

      if (k) {
        draw = keys_kaskad;

        for (let i = 0; i < title.list_3.texts_little.length; i++) {
          let punkt = title.list_3.texts_little[i];

          for (let i = 0; i < punkt.text_a.length; i++) {
            let ob = punkt.text_a[i];

            let imageToDraw; //=unit_menu_little_liters;

            imageToDraw = unit_menu_little_liters_3;

            let x = punkt.x - (punkt.text_a.length * 7) / 2;

            ctx3.globalAlpha = keys_menu[0].alfa;
            ctx3.drawImage(
              imageToDraw,
              menu_litera(ob),
              0,
              12,
              12,
              x + i * 7,
              punkt.y,
              10,
              12
            );
            ctx3.globalAlpha = 1;
          }
        }
      }

      for (let i = 0; i < draw.length; i++) {
        let punkt = draw[i];

        //if(k){
        ctx3.globalAlpha = alfa_s;
        ctx3.fillStyle = "black";
        ctx3.fillRect(
          punkt.x - punkt.gabX / 2 + 10,
          punkt.y - punkt.gabY / 2 + 10,
          punkt.gabX,
          punkt.gabY
        );
        ctx3.globalAlpha = 1;
        //};

        ctx3.globalAlpha = alfa;
        ctx3.drawImage(
          sp,
          0,
          punkt.animY,
          200,
          50,
          punkt.x - punkt.gabX / 2,
          punkt.y - punkt.gabY / 2,
          punkt.gabX,
          punkt.gabY
        );
        ctx3.globalAlpha = 1;

        for (let i = 0; i < punkt.txt.length; i++) {
          let ob = punkt.txt[i];

          let imageToDraw; //=unit_menu_little_liters;

          imageToDraw = unit_menu_little_liters_2;

          let x;

          x = punkt.x - punkt.gabX / 2;

          ctx3.globalAlpha = alfa;
          ctx3.drawImage(
            imageToDraw,
            menu_litera(ob),
            0,
            12,
            12,
            x + i * 8,
            punkt.y - 7.5,
            10,
            15
          );
          ctx3.globalAlpha = 1;
        }

        if (punkt.blue) {
          ctx3.globalAlpha = 0.3;
          ctx3.fillStyle = "blue";
          ctx3.fillRect(
            punkt.x - punkt.gabX / 2,
            punkt.y - punkt.gabY / 2,
            punkt.gabX,
            punkt.gabY
          );
          ctx3.globalAlpha = 1;
        }
      }
    }
  }
};

const strel_prog = function (dx, dy) {
  kaskad_key = false;

  for (let i = 0; i < keys_strel.length; i++) {
    let punkt = keys_strel[i];

    if (
      punkt.type === "nation" &&
      (orc.length + h.length === 0 || !positions.length) &&
      !punkt.father.fraction
    ) {
      punkt.blue = true;
    } else if (
      punkt.type === "position" &&
      !positions.length &&
      punkt.father.fraction
    ) {
      punkt.blue = true;
    } else {
      punkt.blue = false;
    }

    if (
      !punkt.blue &&
      !selected &&
      !(
        dx < punkt.x - punkt.gabX / 2 ||
        dx > punkt.x + punkt.gabX / 2 ||
        dy < punkt.y - punkt.gabY / 2 ||
        dy > punkt.y + punkt.gabY / 2
      )
    ) {
      strel_q = {
        x: punkt.x - punkt.gabX / 2,
        y: punkt.y - punkt.gabY / 2,
        gabX: punkt.gabX,
        gabY: punkt.gabY,
      };
      selected = true;

      if ((menu_long_click && pausa_click) || punkt.long_click) {
        punkt.long_click = true;
        long_punkt = punkt;
      }
    }
    //else{punkt.long_click=false;long_punkt=false;};
  }
};

const kaskad_prog = function (dx, dy) {
  let stop;

  for (let i = 0; i < keys_kaskad.length; i++) {
    let punkt = keys_kaskad[i];

    if (
      !selected &&
      !(
        dx < punkt.x - punkt.gabX / 2 ||
        dx > punkt.x + punkt.gabX / 2 ||
        dy < punkt.y - punkt.gabY / 2 ||
        dy > punkt.y + punkt.gabY / 2
      )
    ) {
      strel_q = {
        x: punkt.x - punkt.gabX / 2,
        y: punkt.y - punkt.gabY / 2,
        gabX: punkt.gabX,
        gabY: punkt.gabY,
      };
      selected = true;

      if (long_punkt && long_punkt.father.num === punkt.father.father.num) {
        kaskad_key = punkt;

        stop = true;
      }
    }
  }

  if (click_up && kaskad_key) {
    if (kaskad_key.father.type === "nation") {
      if (kaskad_key.txt !== "None") {
        //console.log(kaskad_key.father.father.position);
        if (kaskad_key.father.father.fraction) {
          kaskad_key.father.father.fraction.reserv = false;
        }

        kaskad_key.father.father.fraction = kaskad_key.f;

        if (!kaskad_key.father.father.position) {
          kaskad_key.father.father.position = positions[0];
          positions[0].reserv = true;
        }
      } else {
        //console.log(kaskad_key.father.father.fraction);

        kaskad_key.father.father.fraction.reserv = false;
        kaskad_key.father.father.position.reserv = false;
        //console.log(kaskad_key.father.father.fraction.position);

        kaskad_key.father.father.position = false;
        kaskad_key.father.txt = "None";
        kaskad_key.father.father.fraction = false;
        kaskad_key.father.father.union = "1";
      }
    } else if (kaskad_key.father.type === "position") {
      kaskad_key.father.father.position.reserv = false;
      kaskad_key.father.father.position = kaskad_key.p;
      kaskad_key.father.father.position.reserv = true;
    } else if (kaskad_key.father.type === "union") {
      kaskad_key.father.father.union = kaskad_key.txt;
    }

    kaskad_key = false;
  }

  return stop;
};

//title.map=all_maps[1]; title.re_subjects();

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
    let f = all_fractions[i];

    this.subjects.push({
      num: i,
      f: false,
      nation: "none",
      union: "1", //, position:f.position
    });
  }

  for (let i = 1; i < this.subjects.length; i++) {
    this.subjects[i].keys = {
      nation: {
        x: 525 + 90,
        y: 280 + i * 50,
        gabX: 100,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        active: true,
        type: "nation",
        animY: 100,
        //kaskad_keys:["None","Orc","Human"],
        txt: "None",
      },

      union: {
        x: 525 + 310,
        y: 280 + i * 50,

        gabX: 100,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        active: false,
        type: "union",
        txt: "1",
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
        type: "position",
        animY: 100,
      },
    };
  }

  this.subjects[0].keys = {
    nation: {
      x: 60,
      y: 330,
      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: true,
      type: "nation",
      animY: 100,
      //kaskad_keys:["None","Orc","Human"],
      txt: "None",

      txt_little: {
        x: 0,
        y: 0,
        gabX: 150,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Your Race:",
      },
    },

    union: {
      x: 280,
      y: 330,

      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: false,
      type: "union",
      txt: "1",
      animY: 100,
      txt_little: {
        x: 0,
        y: 0,
        gabX: 150,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Your Union:",
      },
    },

    position: {
      x: 170,
      y: 330,
      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: false,
      type: "position",
      animY: 100,
      txt_little: {
        x: 0,
        y: 0,
        gabX: 150,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Your Position:",
      },
    },
  };

  this.subjects[0].keys.nation.txt_little.x = this.subjects[0].keys.nation.x;
  this.subjects[0].keys.nation.txt_little.y =
    this.subjects[0].keys.nation.y - 30;

  this.subjects[0].keys.union.txt_little.x = this.subjects[0].keys.union.x;
  this.subjects[0].keys.union.txt_little.y = this.subjects[0].keys.union.y - 30;

  this.subjects[0].keys.position.txt_little.x =
    this.subjects[0].keys.position.x;
  this.subjects[0].keys.position.txt_little.y =
    this.subjects[0].keys.position.y - 30;
};
