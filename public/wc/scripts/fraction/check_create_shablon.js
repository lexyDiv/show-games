/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable no-undef */

Fraction.prototype.check_create_shablon = function () {
  let base_max = gameFielg.length * 7;

  if (this.createShablon.base_cells) {
    base_max = this.createShablon.base_cells;
  }

  let cells = [];
  const diss = [];

  for (
    let i = this.startPoint.vertikal - 50;
    i <= this.startPoint.vertikal + 50;
    i++
  ) {
    for (
      let k = this.startPoint.horizont - 50;
      k <= this.startPoint.horizont + 50;
      k++
    ) {
      let obj; //= gameFielg[i][k];

      if (gameFielg[i] && gameFielg[i][k]) {
        obj = gameFielg[i][k];
      }

      if (
        obj
        && obj.continent
        && obj.continent === this.startPoint.continent
        && !obj.water_line
        && !obj.stop_block
        && !obj.fraction
      ) {
        diss.push(get_distanse_on_lineyka(this.startPoint, 50, obj, 50));

        cells.push(obj);
      }
    }
  }

  while (true) {
    let min = [];

    for (let i = 0; i < diss.length; i++) {
      if (!min.length || min[0] > diss[i]) {
        min = [diss[i], i];
      }
    }

    diss.splice(min[1], 1);

    cells[min[1]].fraction = this.fraction;

    this.base_cells.push(cells[min[1]]);
    // ccc.push(cells[min[1]]);
    cells.splice(min[1], 1);

    if (!diss.length || this.base_cells.length >= base_max) {
      break;
    }
  }

  if (this.master_shablon) {
    return;
  }

  // this.createShablon.flot=true;
  // this.createShablon.level=3;

  this.conturLineCells = [];

  for (let i = 0; i < this.base_cells.length; i++) {
    const obj = this.base_cells[i];

    let ok;

    for (let k = obj.vertikal - 1; k <= obj.vertikal + 1; k++) {
      for (let j = obj.horizont - 1; j <= obj.horizont + 1; j++) {
        let cell;

        if (gameFielg[k] && gameFielg[k][j]) {
          cell = gameFielg[k][j];
        }

        if (
          cell
          && !cell.water_line
          && (!cell.fraction || (cell.fraction && cell.fraction !== this.fraction))
        ) {
          ok = true;
        }
      }
    }

    if (ok) {
      this.conturLineCells.push(obj);
    }
  }

  // console.log(this.conturLineCells);
  // console.log(this.base_cells); pausa=1;

  let radius = 0;

  for (let i = 0; i < this.base_cells.length; i++) {
    const dis = get_distanse_on_lineyka(
      this.startPoint,
      50,
      this.base_cells[i],
      50,
    );

    if (radius < dis) {
      radius = dis;
    }
  }

  // console.log(radius);

  let peoples;
  let farms;
  let baracks;
  let ogreBases;
  let altars;
  let towers;
  let kuznyas;
  let dragon_roosts;
  let temples;

  /*

              batraks:10,

              mechniks:30,
              luchniks:30,
              ballistas:0,
              rizars:30,
              transports:5,
              oil_tankers:0,
              distroers:3,
              linkors:2,
              turtles:5

  */

  if (this.sea) {
    // console.log(this.createShablon.peoples)

    peoples = Math.floor(this.base_cells.length / 5);

    // if(peoples>250){peoples=250;};

    // peoples=250;

    if (!this.createShablon.p_farms) {
      farms = Math.floor(peoples / 15) + 1;
    }
    if (!this.createShablon.p_baracks) {
      baracks = Math.floor(farms / 3);
    }
    if (!this.createShablon.p_ogreBases) {
      ogreBases = 1;
    }
    if (!this.createShablon.p_altars) {
      altars = 1;
    }
    if (!this.createShablon.p_towers) {
      towers = Math.floor(farms) * 2; // Math.floor(this.conturLineCells.length/2);
    }
    if (!this.createShablon.p_kuznyas) {
      kuznyas = 1;
    }
    if (!this.createShablon.p_temples) {
      temples = 1;
    }
    if (!this.createShablon.p_dragon_roosts) {
      dragon_roosts = 1;
    }

    // console.log(baracks);
    if (!this.createShablon.peoples) {
      this.createShablon.peoples = peoples;

      this.createShablon.batraks = Math.floor(peoples / 8);

      this.createShablon.luchniks = Math.floor(peoples / 4.4);

      this.createShablon.mechniks = Math.floor(peoples / 4.4);

      this.createShablon.rizars = Math.floor(peoples / 4.4);

      this.createShablon.ballistas = Math.floor(peoples / 16);

      this.createShablon.dragons = Math.floor(peoples / 25);

      this.createShablon.oil_tankers = Math.floor(farms / 5);

      this.createShablon.transports = Math.floor(farms / 5);

      this.createShablon.distroers = Math.floor(farms / 5);

      this.createShablon.linkors = Math.floor(farms / 5);

      this.createShablon.turtles = Math.floor(farms / 5);

      this.createShablon.mags = Math.floor(
        peoples
          - this.createShablon.batraks
          - this.createShablon.luchniks
          - this.createShablon.mechniks
          - this.createShablon.rizars
          - this.createShablon.ballistas
          - this.createShablon.dragons
          - this.createShablon.oil_tankers
          - this.createShablon.transports
          - this.createShablon.distroers
          - this.createShablon.linkors
          - this.createShablon.turtles,
      );
      // console.log(this.createShablon.mags)
    }
    // console.log(this.createShablon.mags);

    // console.log(peoples-batraks-luchniks-mechnicks-rizars
    // -ballistas-dragons-oil_tankers-transports-distroers-linkors-turtles-mags);
  } else {
    peoples = Math.floor(this.base_cells.length / 5);

    // if(peoples>250){peoples=250;};

    // peoples=250;

    if (!this.createShablon.p_farms) {
      farms = Math.floor(peoples / 15) + 1;
    }
    if (!this.createShablon.p_baracks) {
      baracks = Math.floor(farms / 3);
    }
    if (!this.createShablon.p_ogreBases) {
      ogreBases = 1;
    }
    if (!this.createShablon.p_altars) {
      altars = 1;
    }
    if (!this.createShablon.p_towers) {
      towers = Math.floor(farms) * 2; // Math.floor(this.conturLineCells.length/2);
    }
    if (!this.createShablon.p_kuznyas) {
      kuznyas = 1;
    }
    if (!this.createShablon.p_temples) {
      temples = 1;
    }
    if (!this.createShablon.p_dragon_roosts) {
      dragon_roosts = 1;
    }

    /*
  farms=Math.floor(peoples/15);
  baracks=Math.floor(farms/3);
  ogreBases=1;
   altars=1;
  towers=Math.floor(farms)*2;//Math.floor(this.conturLineCells.length/2);
  kuznyas=1;
  temples=1;
  */
    // console.log(baracks);
    if (!this.createShablon.peoples) {
      this.createShablon.peoples = peoples;

      this.createShablon.batraks = Math.floor(peoples / 8);

      this.createShablon.luchniks = Math.floor(peoples / 4);

      this.createShablon.mechniks = Math.floor(peoples / 4);

      this.createShablon.rizars = Math.floor(peoples / 4);

      this.createShablon.ballistas = Math.floor(peoples / 16);

      this.createShablon.dragons = Math.floor(peoples / 25);

      // this.createShablon.oil_tankers=Math.floor(peoples/30);

      // this.createShablon.transports=Math.floor(peoples/40);

      // this.createShablon.distroers=Math.floor(peoples/30);

      // this.createShablon.linkors=Math.floor(peoples/40);

      // this.createShablon.turtles=Math.floor(peoples/40);

      this.createShablon.mags = Math.floor(
        peoples
          - this.createShablon.batraks
          - this.createShablon.luchniks
          - this.createShablon.mechniks
          - this.createShablon.rizars
          - this.createShablon.ballistas,
      );
    }
  }

  let brc = 0;

  /// /////////////////////////////////  BARACKS

  /// *

  // console.log(radius/1.5);

  cells = [];

  for (let i = 0; i < this.base_cells.length; i++) {
    const obj = this.base_cells[i];

    const dis = get_distanse_on_lineyka(obj, 50, this.startPoint, 50);

    if (
      // dis>500&&dis<1400
      dis > radius / 3
      && dis < radius / 1.5
      && this.conturLineCells.indexOf(obj) === -1
    ) {
      cells.push(obj);
      // cc.push(obj);
    }
  }

  while (true) {
    brc++;

    const ran = Math.floor(Math.random() * cells.length);

    const farm_cells = [];

    let ok = 0;

    for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal + 1; v++) {
      for (let h = cells[ran].horizont - 1; h <= cells[ran].horizont + 1; h++) {
        if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].ii_free) {
          ok++;
          farm_cells.push(gameFielg[v][h]);
        }
      }
    }

    if (ok === 9) {
      // cc.push(cells[ran]);

      this.createShablon.baracks.push(
        new SablonObj(cells[ran].horizont, cells[ran].vertikal),
      );
      /*
  for(let i=0;i<farm_cells.length;i++){
      farm_cells[i].ii_free=false;
  };
  */

      for (let i = cells[ran].vertikal - 4; i <= cells[ran].vertikal + 4; i++) {
        for (
          let k = cells[ran].horizont - 4;
          k <= cells[ran].horizont + 4;
          k++
        ) {
          if (gameFielg[i] && gameFielg[i][k]) {
            gameFielg[i][k].ii_free = false;
          }
        }
      }
    }

    if (brc >= 1000 || this.createShablon.baracks.length === baracks) {
      break;
    }
  }
  //* /
  /// //////////////////////////////////

  /// /////////////////////////////////  KUZNNYAS

  /// *

  // console.log(radius/1.5);

  cells = [];

  for (let i = 0; i < this.base_cells.length; i++) {
    const obj = this.base_cells[i];

    const dis = get_distanse_on_lineyka(obj, 50, this.startPoint, 50);

    if (
      // dis>500&&dis<1400
      dis > radius / 4
      && dis < radius / 1.5
      && this.conturLineCells.indexOf(obj) === -1
    ) {
      cells.push(obj);
      // cc.push(obj);
    }
  }

  brc = 0;

  while (true) {
    brc++;

    const ran = Math.floor(Math.random() * cells.length);

    const farm_cells = [];

    let ok = 0;

    for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal + 1; v++) {
      for (let h = cells[ran].horizont - 1; h <= cells[ran].horizont + 1; h++) {
        if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].ii_free) {
          ok++;
          farm_cells.push(gameFielg[v][h]);
        }
      }
    }

    if (ok === 9) {
      // cc.push(cells[ran]);

      this.createShablon.kuznyas.push(
        new SablonObj(cells[ran].horizont, cells[ran].vertikal),
      );
      /*
  for(let i=0;i<farm_cells.length;i++){
      farm_cells[i].ii_free=false;
  };
  */

      for (let i = cells[ran].vertikal - 1; i <= cells[ran].vertikal + 1; i++) {
        for (
          let k = cells[ran].horizont - 1;
          k <= cells[ran].horizont + 1;
          k++
        ) {
          if (gameFielg[i] && gameFielg[i][k]) {
            gameFielg[i][k].ii_free = false;
          }
        }
      }
    }

    if (brc >= 1000 || this.createShablon.kuznyas.length === kuznyas) {
      break;
    }
  }
  //* /
  /// //////////////////////////////////

  /// /////////////////////////////////  OGREBASE

  /// *

  // console.log(radius/1.5);

  cells = [];

  for (let i = 0; i < this.base_cells.length; i++) {
    const obj = this.base_cells[i];

    const dis = get_distanse_on_lineyka(obj, 50, this.startPoint, 50);

    if (
      // dis>500&&dis<1400
      dis > radius / 4
      && dis < radius / 1.5
      && this.conturLineCells.indexOf(obj) === -1
    ) {
      cells.push(obj);
      // cc.push(obj);
    }
  }

  brc = 0;

  while (true) {
    brc++;

    const ran = Math.floor(Math.random() * cells.length);

    const farm_cells = [];

    let ok = 0;

    for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal + 1; v++) {
      for (let h = cells[ran].horizont - 1; h <= cells[ran].horizont + 1; h++) {
        if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].ii_free) {
          ok++;
          farm_cells.push(gameFielg[v][h]);
        }
      }
    }

    if (ok === 9) {
      // cc.push(cells[ran]);

      this.createShablon.ogreBases.push(
        new SablonObj(cells[ran].horizont, cells[ran].vertikal),
      );
      /*
  for(let i=0;i<farm_cells.length;i++){
      farm_cells[i].ii_free=false;
  };
  */

      for (let i = cells[ran].vertikal - 1; i <= cells[ran].vertikal + 1; i++) {
        for (
          let k = cells[ran].horizont - 1;
          k <= cells[ran].horizont + 1;
          k++
        ) {
          if (gameFielg[i] && gameFielg[i][k]) {
            gameFielg[i][k].ii_free = false;
          }
        }
      }
    }

    if (brc >= 1000 || this.createShablon.ogreBases.length === ogreBases) {
      break;
    }
  }
  //* /
  /// //////////////////////////////////

  /// /////////////////////////////////  ALTARS

  /// *

  // console.log(radius/1.5);

  cells = [];

  for (let i = 0; i < this.base_cells.length; i++) {
    const obj = this.base_cells[i];

    const dis = get_distanse_on_lineyka(obj, 50, this.startPoint, 50);

    if (
      // dis>500&&dis<1400
      dis > radius / 4
      && dis < radius / 1.5
      && this.conturLineCells.indexOf(obj) === -1
    ) {
      cells.push(obj);
      // cc.push(obj);
    }
  }

  brc = 0;

  while (true) {
    brc++;

    const ran = Math.floor(Math.random() * cells.length);

    const farm_cells = [];

    let ok = 0;

    for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal + 1; v++) {
      for (let h = cells[ran].horizont - 1; h <= cells[ran].horizont + 1; h++) {
        if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].ii_free) {
          ok++;
          farm_cells.push(gameFielg[v][h]);
        }
      }
    }

    if (ok === 9) {
      // cc.push(cells[ran]);

      this.createShablon.altars.push(
        new SablonObj(cells[ran].horizont, cells[ran].vertikal),
      );
      /*
  for(let i=0;i<farm_cells.length;i++){
      farm_cells[i].ii_free=false;
  };
  */

      for (let i = cells[ran].vertikal - 1; i <= cells[ran].vertikal + 1; i++) {
        for (
          let k = cells[ran].horizont - 1;
          k <= cells[ran].horizont + 1;
          k++
        ) {
          if (gameFielg[i] && gameFielg[i][k]) {
            gameFielg[i][k].ii_free = false;
          }
        }
      }
    }

    if (brc >= 1000 || this.createShablon.altars.length === altars) {
      break;
    }
  }
  //* /
  /// //////////////////////////////////

  /// /////////////////////////////////  TEMPLE

  /// *

  // console.log(radius/1.5);

  cells = [];

  for (let i = 0; i < this.base_cells.length; i++) {
    const obj = this.base_cells[i];

    const dis = get_distanse_on_lineyka(obj, 50, this.startPoint, 50);

    if (
      // dis>500&&dis<1400
      dis > radius / 4
      && dis < radius / 1.5
      && this.conturLineCells.indexOf(obj) === -1
    ) {
      cells.push(obj);
      // cc.push(obj);
    }
  }

  brc = 0;

  while (true) {
    brc++;

    const ran = Math.floor(Math.random() * cells.length);

    const farm_cells = [];

    let ok = 0;

    for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal + 1; v++) {
      for (let h = cells[ran].horizont - 1; h <= cells[ran].horizont + 1; h++) {
        if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].ii_free) {
          ok++;
          farm_cells.push(gameFielg[v][h]);
        }
      }
    }

    if (ok === 9) {
      // cc.push(cells[ran]);

      this.createShablon.temples.push(
        new SablonObj(cells[ran].horizont, cells[ran].vertikal),
      );
      /*
  for(let i=0;i<farm_cells.length;i++){
      farm_cells[i].ii_free=false;
  };
  */

      for (let i = cells[ran].vertikal - 1; i <= cells[ran].vertikal + 1; i++) {
        for (
          let k = cells[ran].horizont - 1;
          k <= cells[ran].horizont + 1;
          k++
        ) {
          if (gameFielg[i] && gameFielg[i][k]) {
            gameFielg[i][k].ii_free = false;
          }
        }
      }
    }

    if (brc >= 2000 || this.createShablon.temples.length === temples) {
      break;
    }
  }
  //* /
  /// //////////////////////////////////

  /// /////////////////////////////////  DRAGON_ROOST

  /// *

  // console.log(radius/1.5);

  cells = [];

  for (let i = 0; i < this.base_cells.length; i++) {
    const obj = this.base_cells[i];

    const dis = get_distanse_on_lineyka(obj, 50, this.startPoint, 50);

    if (
      // dis>500&&dis<1400
      dis > radius / 4
      && dis < radius / 1.5
      && this.conturLineCells.indexOf(obj) === -1
    ) {
      cells.push(obj);
      // cc.push(obj);
    }
  }

  brc = 0;

  while (true) {
    brc++;

    const ran = Math.floor(Math.random() * cells.length);

    const farm_cells = [];

    let ok = 0;

    for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal + 1; v++) {
      for (let h = cells[ran].horizont - 1; h <= cells[ran].horizont + 1; h++) {
        if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].ii_free) {
          ok++;
          farm_cells.push(gameFielg[v][h]);
        }
      }
    }

    if (ok === 9) {
      // cc.push(cells[ran]);

      this.createShablon.dragon_roosts.push(
        new SablonObj(cells[ran].horizont, cells[ran].vertikal),
      );
      /*
  for(let i=0;i<farm_cells.length;i++){
      farm_cells[i].ii_free=false;
  };
  */

      for (let i = cells[ran].vertikal - 1; i <= cells[ran].vertikal + 1; i++) {
        for (
          let k = cells[ran].horizont - 1;
          k <= cells[ran].horizont + 1;
          k++
        ) {
          if (gameFielg[i] && gameFielg[i][k]) {
            gameFielg[i][k].ii_free = false;
          }
        }
      }
    }

    if (
      brc >= 1000
      || this.createShablon.dragon_roosts.length === dragon_roosts
    ) {
      break;
    }
  }
  //* /
  /// //////////////////////////////////

  /// /////////////////////////////////  FARMS

  /// *

  // console.log(radius/1.5);

  cells = [];

  for (let i = 0; i < this.base_cells.length; i++) {
    const obj = this.base_cells[i];

    const dis = get_distanse_on_lineyka(obj, 100, this.startPoint, 50);

    if (
      // dis>500&&dis<1400
      dis > radius / 3
      && dis < radius / 1.5
      && this.conturLineCells.indexOf(obj) === -1
    ) {
      cells.push(obj);
      // cc.push(obj);
    }
  }

  brc = 0;

  while (true) {
    brc++;

    const ran = Math.floor(Math.random() * cells.length);

    const farm_cells = [];

    let ok = 0;

    for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal; v++) {
      for (let h = cells[ran].horizont; h <= cells[ran].horizont + 1; h++) {
        if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].ii_free) {
          ok++;
          farm_cells.push(gameFielg[v][h]);
        }
      }
    }

    if (ok === 4) {
      // cc.push(cells[ran]);

      this.createShablon.farms.push(
        new SablonObj(cells[ran].horizont, cells[ran].vertikal),
      );

      for (let i = cells[ran].vertikal - 2; i <= cells[ran].vertikal + 1; i++) {
        for (let k = cells[ran].horizont; k <= cells[ran].horizont + 1; k++) {
          if (gameFielg[i] && gameFielg[i][k]) {
            gameFielg[i][k].ii_free = false;
          }
        }
      }

      /*
  for(let i=0;i<farm_cells.length;i++){
      farm_cells[i].ii_free=false;
  };
  */
    }

    if (brc >= 10000 || this.createShablon.farms.length === farms) {
      break;
    }
  }

  /// *
  if (this.createShablon.farms.length < farms) {
    while (this.createShablon.farms.length < farms) {
      const ran = Math.floor(Math.random() * this.base_cells.length);

      const c = this.base_cells[ran];

      this.createShablon.farms.push(new SablonObj(c.horizont, c.vertikal));
    }
  }

  // if(this.control==="comp"){console.log(this.createShablon.farms.length)};
  //* /
  //* /
  /// //////////////////////////////////

  /// /////////////////////////////////  TOWERS

  /// *

  cells = [];

  for (let i = 0; i < this.base_cells.length; i++) {
    const obj = this.base_cells[i];

    const dis = get_distanse_on_lineyka(obj, 100, this.startPoint, 50);

    if (
      // dis>1500&&dis<2000
      (dis > radius / 1.5 && dis <= radius)
      // dis>300&&dis<1000
      || (dis > 300 && dis < radius / 2)
    ) {
      cells.push(obj);
      // cc.push(obj);
    }
  }

  brc = 0;

  while (true) {
    brc++;

    const ran = Math.floor(Math.random() * cells.length);

    const farm_cells = [];

    let ok = 0;

    for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal; v++) {
      for (let h = cells[ran].horizont; h <= cells[ran].horizont + 1; h++) {
        if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].ii_free) {
          ok++;
          farm_cells.push(gameFielg[v][h]);
        }
      }
    }

    if (ok === 4) {
      // cc.push(cells[ran]);
      let type;

      const ran_2 = Math.floor(Math.random() * 2);

      if (!ran_2) {
        type = 'guard';
      } else {
        type = 'cannon';
      }

      this.createShablon.towers.push(
        new SablonObj(cells[ran].horizont, cells[ran].vertikal, undefined, type),
      );

      for (let i = cells[ran].vertikal - 2; i <= cells[ran].vertikal + 1; i++) {
        for (
          let k = cells[ran].horizont - 1;
          k <= cells[ran].horizont + 2;
          k++
        ) {
          if (gameFielg[i] && gameFielg[i][k]) {
            gameFielg[i][k].ii_free = false;
          }
        }
      }

      /*
  for(let i=0;i<farm_cells.length;i++){
      farm_cells[i].ii_free=false;
  };
  */
    }

    if (brc >= 1000 || this.createShablon.towers.length === towers) {
      break;
    }
  }
  //* /
  /// //////////////////////////////////

  if (this.fraction === 'redOrcs') {
    // this.createShablon.turtles=0;
    // this.createShablon.distroers=0;
    // this.createShablon.transports=0;
    // this.createShablon.turtles=0;
    // this.createShablon.linkors=0;
    // this.createShablon.rizars=0;
    // this.createShablon.luchniks=0;
    // this.createShablon.ballistas=0;
    // this.createShablon.mechniks=0;
    // this.createShablon.towers.length=3;
    // this.createShablon.oil_tankers=0;
    // this.createShablon.dragons=0;
    // this.createShablon.mags=0;
    // if(this.fraction==="redOrcs"){this.createShablon.mags=50;};
  }
  // this.createShablon.transports=1;
  // this.createShablon.dragons=0;

  // this.createShablon.mags=0;

  /*
  if(this.fraction==="blackOrcs"){
      //this.createShablon.turtles=0;
      //this.createShablon.distroers=0;
      //this.createShablon.transports=1;
      //this.createShablon.turtles=0;
      //this.createShablon.linkors=15;
      this.createShablon.rizars=0;
      this.createShablon.luchniks=0;
      this.createShablon.ballistas=0;
      this.createShablon.mechniks=2;
      this.createShablon.baracks.length=1;
      //this.createShablon.towers.length=3;
  };
  // */

  // if(this.fraction==="blackOrcs"){this.createShablon.mechniks=10;};

  // console.log(this.createShablon);

  // console.log(brc);
};
