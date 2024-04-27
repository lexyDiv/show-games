/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

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

  // 0,orc[0],h[0]
  if (orc[0]) {
    nas.push(orc[0]);
  }
  if (h[0]) {
    nas.push(h[0]);
  }

  // let stope;

  keys_strel.push(title.list_3.season);

  for (let i = 0; i <= this.map.positions.length; i++) {
    let obj = this.subjects[i];

    // if(i||(positions.length&&h.length+orc.length)||obj.fraction){

    if (obj) {
      keys_strel.push(obj.keys.nation);

      obj.keys.nation.father = obj;
      obj.keys.union.father = obj;
      obj.keys.position.father = obj;

      // };

      if (obj.fraction) {
        obj.fraction.reserv = true;
        // obj.position=positions[0];
        obj.fraction.position.reserv = true;

        /*
  for(let k=0;k<kas.length;k++){
      if(kas[i]!==obj.fraction.menu_nation)
  };
  // */

        obj.keys.nation.txt = obj.fraction.menu_nation;
        obj.keys.position.txt = obj.position.num;
        // obj.keys.position=

        let pos = obj.keys.position;
        pos.txt = obj.position.num;

        keys_strel.push(pos);

        obj.keys.union.txt = obj.union;

        keys_strel.push(obj.keys.union);
      } //
    }
  }

  if (long_punkt) {
    if (long_punkt.type === 's') {
      let txt;

      if (long_punkt.txt === 'summer') {
        txt = 'winter';
      } else {
        txt = 'summer';
      }

      keys_kaskad.push({
        x: long_punkt.x,
        y: long_punkt.y + 30,
        gabX: long_punkt.gabX,
        gabY: long_punkt.gabY,
        animY: 50,
        txt,
        father: long_punkt,
      });
    } else if (long_punkt.type === 'nation') {
      let ind = 0;
      for (let i = 0; i < nas.length; i++) {
        let txt = 'None';
        // console.log(nas[i])
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
            txt,
            father: long_punkt,
            f: nas[i],
          });
        }
      }
    } else if (long_punkt.type === 'position') {
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
            txt,
            father: long_punkt,
            p: positions[i],
          });
        }
      }
    } else if (long_punkt.type === 'union') {
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
            txt,
            father: long_punkt,
          });
        }
      }
    }
  }
};
