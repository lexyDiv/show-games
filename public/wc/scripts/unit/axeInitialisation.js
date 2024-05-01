/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.axeInitialization = function (target, type, father) {
  if (type === 'ballista') {
    const a = target.damagePointX - this.firePoint.x;
    const b = target.damagePointY - this.firePoint.y;

    const c = Math.sqrt(a * a + b * b);

    const conor = Math.atan2(b, a);

    // x,y,type,target,attack,father,conor,xy

    let rage = 1;

    if (father.rage) {
      rage = 1.5;
    }

    const attack = this.attack * rage;

    const axe = new Axes(
      this.damagePointX,
      this.damagePointY,
      'ballista',
      undefined,
      attack,
      this.cell.unit,
      conor,
    );

    axe.takt = Math.floor(c / 10);

    axe.boo_point = { x: target.damagePointX, y: target.damagePointY };

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axesFly.push(axe);
  } else if (type === 'luk') {
    const a = target.damagePointX - father.damagePointX;
    const b = target.damagePointY - father.damagePointY;

    const c = Math.sqrt(a * a + b * b);

    // x,y,type,target,attack,father

    const conor = Math.atan2(b, a);

    const axe = new Axes(
      father.damagePointX,
      father.damagePointY,
      'luk',
      undefined,
      father.attack,
      father,
      conor,
    );

    axe.takt = Math.floor(c / 24);

    /// /////////////////////

    axe.dopGabKoof = 40 / axe.takt;

    /// //////////////////////////

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axe.stopDraw = 2;

    axe.target = target;
    // axe.attack=this.attack;
    // x,y,type,target,attack,father,conor

    axesFly.push(axe);

    // console.log(axe); pausa=1
  } else if (type === 'turtle') {
    const a = target.damagePointX - father.damagePointX;
    const b = target.damagePointY - father.damagePointY;

    const c = Math.sqrt(a * a + b * b);

    // x,y,type,target,attack,father

    const conor = Math.atan2(b, a);

    const axe = new Axes(
      father.damagePointX,
      father.damagePointY,
      'turtle',
      undefined,
      father.attack,
      father,
      conor,
    );

    axe.takt = Math.floor(c / 24);

    /// /////////////////////

    axe.dopGabKoof = 40 / axe.takt;

    /// //////////////////////////

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axe.stopDraw = 2;

    axe.target = target;
    // axe.attack=this.attack;
    // x,y,type,target,attack,father,conor

    axesFly.push(axe);

    // console.log(axe); pausa=1
  } else if (type === 'linkor') {
    const a = target.damagePointX - this.damagePointX;
    const b = target.damagePointY - this.damagePointY;

    const c = Math.sqrt(a * a + b * b);

    const conor = Math.atan2(b, a);

    // x,y,type,target,attack,father,conor,xy

    const { attack } = this;

    const axe = new Axes(
      this.damagePointX,
      this.damagePointY,
      'orc_ballista',
      undefined,
      attack,
      this.cell.unit,
      conor,
    );

    axe.inviz = 5;

    axe.takt = Math.floor(c / 10);

    axe.boo_point = { x: target.damagePointX, y: target.damagePointY };

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axesFly.push(axe);
  } else if (type === 'distroer_canon') {
    let c;

    let a2;
    let b2;

    let a;
    let b;

    let conor;
    let conor2;

    let xy;

    // if(this.target.unitStatus==="life"){

    let damagePointX;
    let damagePointY;

    damagePointX = target.damagePointX;
    damagePointY = target.damagePointY;

    // console.log(target)

    a = damagePointX - this.damagePointX;
    b = damagePointY - this.damagePointY;

    c = Math.sqrt(a * a + b * b);

    a2 = damagePointX - this.damagePointX;
    b2 = damagePointY - this.damagePointY;

    // x,y,type,target,attack,father

    conor = Math.atan2(b2, a2);
    conor2 = Math.atan2(b, a);

    if (c >= 125) {
      xy = { x: damagePointX, y: damagePointY };
    } else {
      xy = {
        x: this.damagePointX + Math.cos(conor2) * 125,
        y: this.damagePointY + Math.sin(conor2) * 125,
      };

      a = xy.x - this.damagePointX;
      b = xy.y - this.damagePointY;

      c = Math.sqrt(a * a + b * b);

      // console.log(c);

      a2 = xy.x - this.damagePointX;
      b2 = xy.y - this.damagePointY;
    }

    // };

    // x,y,type,target,attack,father,conor,xy

    const axe = new Axes(
      this.damagePointX,
      this.damagePointY,
      'distroer_canon',
      undefined,
      this.attack,
      this.cell.unit,
      conor,
      xy,
    );

    axe.takt = Math.floor(c / 10);

    /// /////////////////////

    axe.dopGabKoof = 10 / axe.takt;

    /// //////////////////////////

    axe.gSp = a2 / axe.takt;
    axe.vSp = b2 / axe.takt;

    axe.stopDraw = 2;

    axe.target = target;
    // axe.attack=this.attack;
    // x,y,type,target,attack,father,conor

    axesFly.push(axe);
  } else if (type === 'dragoonFire') {
    // pausa=1;

    let a = target.damagePointX - this.damagePointX; // this.firePoint.x;
    let b = target.damagePointY - this.damagePointY; // this.firePoint.y;

    let c = Math.sqrt(a * a + b * b) + 50;

    let a2 = target.damagePointX - this.firePoint.x;
    let b2 = target.damagePointY - this.firePoint.y;

    let conor = Math.atan2(b2, a2);

    // console.log("c : "+c);

    // x,y,type,target,attack,father,conor,xy

    const { attack } = this;

    const axe = new Axes(
      this.firePoint.x,
      this.firePoint.y,
      'dragoonFire',
      target,
      attack,
      this.cell.dragoon,
      Math.atan2(b, a),
    );

    axe.conorAnim = conor;

    axe.takt = Math.floor(c / 10);

    axe.boo_point = { x: target.damagePointX, y: target.damagePointY };

    axe.gSp = a2 / axe.takt;
    axe.vSp = b2 / axe.takt;

    axesFly.push(axe);
  } else if (type === 'orc_ballista') {
    let a = target.damagePointX - this.firePoint.x;
    let b = target.damagePointY - this.firePoint.y;

    let c = Math.sqrt(a * a + b * b);

    let conor = Math.atan2(b, a);

    // x,y,type,target,attack,father,conor,xy

    let rage = 1;

    if (father.rage) {
      rage = 1.5;
    }

    const attack = this.attack * rage;

    const axe = new Axes(
      this.firePoint.x,
      this.firePoint.y,
      'orc_ballista',
      undefined,
      attack,
      this.cell.unit,
      conor,
    );

    axe.takt = Math.floor(c / 10);

    axe.boo_point = { x: target.damagePointX, y: target.damagePointY };

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axesFly.push(axe);
  } else if (type === 'topor' && this.firePoint) {
    // ok x,y,type,target,attack,father
    let rage = 1;

    if (father.rage) {
      rage = 1.5;
    }

    const attack = this.attack * rage;

    // console.log(attack);

    const axe = new Axes(
      this.firePoint.x,
      this.firePoint.y,
      'topor',
      undefined,
      attack,
      father,
    );

    let a;
    let b;

    let a2;
    let b2;

    if (!target.fly) {
      a = target.damagePointX - this.damagePointX;
      b = target.damagePointY - this.damagePointY;

      a2 = target.damagePointX - this.firePoint.x;
      b2 = target.damagePointY - this.firePoint.y;
    } else {
      a = target.damagePointX - this.damagePointX;
      b = target.damagePointY - 30 - this.damagePointY;

      a2 = target.damagePointX - this.firePoint.x;
      b2 = target.damagePointY - 30 - this.firePoint.y;
    }

    const c = Math.sqrt(a * a + b * b);

    axe.takt = Math.floor(c / 20);

    /*
  if(target.fly){
   a2=(target.damagePointX)-(this.damagePointX);
   b2=(target.damagePointY-30)-(this.damagePointY);
  // console.log("drdrdrd");
  };
  */

    axe.gSp = a2 / axe.takt;
    axe.vSp = b2 / axe.takt;

    axe.target = target;
    // axe.attack=this.attack;
    // console.log(axe.takt);

    axesFly.push(axe);
  }
};
