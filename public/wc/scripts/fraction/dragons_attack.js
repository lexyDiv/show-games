/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.dragons_attack = function () {
  // return;

  for (let i = 0; i < this.dragons.length; i++) {
    const obj = this.dragons[i];

    if (!obj.animys.length && !obj.way.length && !obj.iFight) {
      // obj.ii_attack=true;

      let ranY;
      let ranX;

      while (true) {
        ranY = Math.floor(Math.random() * gameFielg.length);
        ranX = Math.floor(Math.random() * gameFielg.length);

        if (!ranY) {
          ranY = 1;
        }
        if (!ranX) {
          ranX = 1;
        }

        if (ranY === gameFielg.length - 1) {
          ranY--;
        }
        if (ranX === gameFielg.length - 1) {
          ranX--;
        }

        if (
          !gameFielg[ranY][ranX].fraction
            || gameFielg[ranY][ranX].fraction !== this.fraction
        ) {
          break;
        }
      }

      obj.born_cell = gameFielg[ranY][ranX];
      obj.clickSave = new ClickSave(0, gameFielg[ranY][ranX]);
      obj.ii_attack = true;

      if (!obj.active) {
        this.activeUnits.push(obj);
        obj.active = true;
      }
    }
  }

  /*
    if(!this.drag_on_go){

        this.drag_on_go=1+Math.floor(Math.random()*this.createShablon.dragons-1);

        let ran=Math.floor(Math.random()*2);
        ran=0;

    if(!ran){this.drag_attack_type="personal";}else{this.drag_attack_type="groop";};

    };

    if(this.fraction==="blackOrcs"){console.log(this.drag_on_go);};

    if(this.dragons.length>=this.drag_on_go&&!this.dragoon_attack_check){

    this.dragoon_attack_check=true;

    //this.dragoon_attack=[];

    for(let i=0;i<this.drag_on_go;i++){

    if(!this.dragons[i].isBlockedDrag()&&!this.dragons[i].active){

    this.dragoon_attack.push(this.dragons[i]);
    }

    };

    if(!this.dragoon_attack.length){this.dragoon_attack_check=false;};

    };

    if(this.dragoon_attack.length){

        for(let i=0;i<this.dragoon_attack.length;i++){

            let obj=this.dragoon_attack[i];

    if(obj.hp<=0){this.dragoon_attack.splice(i,1); i--;};

        };

    if(this.drag_attack_type==="personal"){

        for(let i=0;i<this.dragoon_attack.length;i++){

            let obj=this.dragoon_attack[i];

    if(

    !obj.animys.length
    &&
    (
    !obj.active
    ||
    (obj.handCell&&get_distanse_on_lineyka(obj.cell,100,obj.handCell,100)<=1000)
    ||
    obj.ii_saveCell
    )

    ){

    let ranY;
    let ranX;

    while(true){

         ranY=Math.floor(Math.random()*gameFielg.length);
         ranX=Math.floor(Math.random()*gameFielg.length);

    if(!ranY){ranY=1;};
    if(!ranX){ranX=1;};

    if(ranY===gameFielg.length-1){ranY--;};
    if(ranX===gameFielg.length-1){ranX--;};

    if(!gameFielg[ranY][ranX].fraction||gameFielg[ranY][ranX].fraction!==this.fraction){break;};

    };

    obj.born_cell=gameFielg[ranY][ranX];
    obj.clickSave=new ClickSave(0,gameFielg[ranY][ranX]);
    obj.ii_attack=true;

    if(!obj.active){this.activeUnits.push(obj); obj.active=true;};

    };

        };

    }

    if(!this.dragoon_attack.length){this.drag_on_go=false; this.dragoon_attack_check=false;};

    };

    // */
};
