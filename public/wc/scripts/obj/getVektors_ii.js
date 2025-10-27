/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Obj.prototype.getVektors_ii = function (arg, target, unit, luchnik) {
  /*
    if(isNaN(this.f)){

    console.log(gameFielg[this.vertikal][this.horizont]);

    this.f=0;
    this.g=0;
    this.h=0;

      };
    */
  // if(luchnik){console.log(luchnik);};

  // console.log(arg)

  // if(unit.fatherFraction.control==="player"){
  // console.log("scan");
  // };

  if (
    unit.warrior
    && (unit.target
      || (unit.handTarget && unit.fatherFraction.control === 'comp'))
    && !unit.fly
  ) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.warrior
        && this.iContaktWith[d].father.hp > 0
        && this.iContaktWith[d].father.fatherFraction.union
          !== unit.fatherFraction.union
      ) {
        // gameFielg[this.vertikal][this.horizont] !== this && console.log('BUG - 1')

        father.finish = this; // gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        // console.log("ura");
        // unit.iCanGet=true;

        return;
      }
    }
  }

  if (target && !luchnik) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.persolalNumber === target.persolalNumber
      ) {
        father.finish = this; // gameFielg[this.vertikal][this.horizont];

        // gameFielg[this.vertikal][this.horizont] !== this && console.log('BUG - 2')

        father.finish.myWay(father.finish);

        // console.log("ura");
        unit.iCanGet = true;

        return;
      }
    }
  }

  // left_Up left_

  let koof = 0;

  for (let k = 0; k < this.aroundCells.length; k++) {
    // if(isNaN(this.f)){console.log(this.father.f);};

    const cell = this.aroundCells[k];
    /*

    if(gameFielg[i]&&cell&&cell.startFinish.length&&
    (cell.startFinish[0].vertikal!==father.vertikal||
    cell.startFinish[0].horizont!==father.horizont||
    cell.startFinish[1].vertikal!==father.finish.vertikal||
    cell.startFinish[1].horizont!==father.finish.horizont
    )){

    cell.inUse=false;
    cell.h=0;
    cell.f=0;
    cell.g=0;

    };

    */
    if (
      cell.forCheck !== forCheck // ||
      // (gameFielg[i]&&cell&&isNaN(cell.h))||
      // (gameFielg[i]&&cell&&isNaN(cell.f))
    ) {
      cell.inUse = false;
      cell.h = 0;
      cell.f = 0;
      cell.g = 0;
    }
    /*
    let aa;
    let bb;
    let cc;

    if(arg&&gameFielg[i]&&cell){

      aa=(arg.x+50)-(cell.x+50);
      bb=(arg.y+50)-(cell.y+50);

      cc=Math.sqrt(aa*aa+bb*bb);

    };

    if(arg){

      console.log(cc);

    };

    */

    /*

    let dis=false;
    let okey=true;

    let okDrag=0;

    if(!unit.fly&&arg&&gameFielg[i]&&cell&&cell.unit&&cell.unit.unitStatus==="life"){

    let a=unit.x-cell.x;
    let b=unit.y-cell.y;

    dis=Math.sqrt(a*a+b*b);

    if(dis<arg){okey=false;};

    };
    // */

    /// ////////////

    /// *
    let ok2 = false;

    if (
      (cell.unit && !cell.unit.neitral)
      || (cell.vossalObj && !cell.vossalObj.neitral)
    ) {
      ok2 = true; // console.log("pizdez");
    }

    // console.log()
    //* /

    const hart = !unit.fly
      && (cell.free
        // ||
        // (!cell.free&&cell.unit&&cell.unit.unitStatus==="life"&&okey)
        || ok2);

    /// ////////////////////
    // if(!arg){okey=false;};
    // console.log(arg);
    if (
      hart
      && !cell.inUse
      && !cell.f
      // &&
      //! (cell.vertikal==this.vertikal&&cell.horizont==this.horizont)
    ) {
      const a = Math.abs(father.finish.horizont - cell.horizont);
      const b = Math.abs(father.finish.vertikal - cell.vertikal);

      const c = a + b;

      if (koof === 0) {
        cell.g = this.g + 14;
      }
      if (koof === 1) {
        cell.g = this.g + 10;
      }
      if (koof === 2) {
        cell.g = this.g + 14;
      }

      if (koof === 3) {
        cell.g = this.g + 10;
      }
      if (koof === 5) {
        cell.g = this.g + 10;
      }

      if (koof === 6) {
        cell.g = this.g + 14;
      }
      if (koof === 7) {
        cell.g = this.g + 10;
      }
      if (koof === 8) {
        cell.g = this.g + 14;
      }

      // koof++;
      // console.log(c2);

      cell.father = this; // gameFielg[this.vertikal][this.horizont];

      // this.vektors.push(cell);

      vektors.push(cell);

      allVektors.push(cell);

      cell.h = c * 10; // +c2//+v+h;

      cell.f = cell.g + cell.h;

      // cell.startFinish=[father,father.finish];

      cell.forCheck = forCheck;

      /// *
      if (
        cell.vertikal === father.finish.vertikal
        && cell.horizont === father.finish.horizont
      ) {
        // console.log("sucssess!!!!!!!!!!!!!!!");

        father.finish.myWay(father.finish);
        // arg.way=father.way;

        // vektors=[];
        // allVektors=[];
        // father=0;

        // if(unit.type==="dragoon"){console.log(father);pausa=1;};
      }
    } else if (
      hart
      && !cell.inUse
      && cell.f
      && !(cell.vertikal == this.vertikal && cell.horizont == this.horizont)
    ) {
      // cell.startFinish=[father,father.finish];
      cell.forCheck = forCheck;

      let g;

      if (koof === 0) {
        g = this.g + 14;
      }
      if (koof === 1) {
        g = this.g + 10;
      }
      if (koof === 2) {
        g = this.g + 14;
      }

      if (koof === 3) {
        g = this.g + 10;
      }
      if (koof === 5) {
        g = this.g + 10;
      }

      if (koof === 6) {
        g = this.g + 14;
      }
      if (koof === 7) {
        g = this.g + 10;
      }
      if (koof === 8) {
        g = this.g + 14;
      }

      if (g < cell.g) {
        cell.g = g;

        const a = Math.abs(father.finish.horizont - cell.horizont);
        const b = Math.abs(father.finish.vertikal - cell.vertikal);

        const c = a + b;

        cell.father = this; // gameFielg[this.vertikal][this.horizont];

        cell.h = c * 10; // +c2//+v+h;

        cell.f = cell.g + cell.h;

        // console.log(cell.f);
      }

      // koof++;
    }
    koof++;
  }
};
