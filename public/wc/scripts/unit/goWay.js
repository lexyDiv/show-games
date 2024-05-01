Unit.prototype.goWay = function (arg) {
    //if(this.iFight){console.log("ok");};handTarget target console.log(this.stopGetTarget);
  
    //contaktCells
    //let speed=this.speed;
  
    //console.log("ok");glob_deep iContaktWith
    //iStand
  
    if (this.stepTakt < 1 && this.stepTakt >= 0) {
      this.iGetMyCell = true;
  
      this.hotCell = this.cell;
  
      this.x = this.cell.x;
      this.y = this.cell.y;
  
      if (this.need_return) {
        this.need_return = false;
        return;
      }
  
      if (!this.way.length) {
        this.iStand = true;
      }
  
      if (this.iGetTarget) {
        this.way = [];
        this.stepTakt = 0;
        this.iStand = true;
        return;
      }
  
      //stopGetTarget
  
      //console.log(this.way.length);
  
      //this.nockNokc=true;
      //this.moveVektor=0;
  
      //if(this.way.length&&!this.way[this.way.length-1].free&&this.way[this.way.length-1].persolalNumber===this.cell.persolalNumber){this.way.pop();};
      /*
  if(
  ((this.way.length===1&&!this.way[this.way.length-1].free)||!this.way.length)&&
  !this.target&&!this.handTarget&&this.handCell
  ){
      this.way=[];
      this.handCell=0;
      };
  */
  
      //if(!this.handCell&&!this.target&&!this.handTarget){this.way=[];this.stepTakt=0;};
  
      if (
        ((this.fatherFraction.control === "player" && !this.hold_position) ||
          this.fatherFraction.control === "comp") &&
        !this.handCell &&
        !this.target &&
        !this.handTarget
      ) {
        this.way = [];
        this.stepTakt = 0;
      }
  
      //if(this.way!=="go"&&!this.way.length&&!this.target&&!this.handTarget&&!this.ii_back){this.stopGetTarget=0;console.log("hreeeee");};
  
      if (
        ((this.way.length &&
          !this.way[this.way.length - 1].free &&
          !this.target &&
          !this.handTarget &&
          this.handCell) ||
          this.way === "go") &&
        !this.iWaitMyBros
      ) {
        this.way = [];
  
        //console.log("sdjfgidhf");
  
        //let a=Math.floor(Math.random()*2);
  
        //if(a){a=Math.floor(Math.random()*1000);};
  
        let noFree = 350;
  
        this.finish = this.handCell;
        this.sosFin = this.handCell;
        ////*
        //console.log("hren");
        //getWay=function(arg,noFree,deep,target)
        // getVektors=function(arg,target,unit)
  
        let deep = glob_deep;
  
        let dis;
  
        if (this.handCell) {
          dis = get_distanse_on_lineyka(this.cell, 50, this.handCell, 50);
        }
  
        ///*
        if (this.ii_saveCell && !this.animys.length && this.handCell) {
          //deep=5000;
  
          //if(dis<=400){deep=500;};
  
          this.ii_saveCell_reset++;
        }
        //*/
  
        if (this.ii_saveCell_reset >= 100 || this.animys.length) {
          this.ii_saveCell_reset = 0;
          this.ii_saveCell = false;
  
          //console.log("VAZHNO");
        }
  
        if (this.handCell) {
          deep = Math.floor(dis) * 2;
        }
  
        if (this.revers) {
          deep = 50000;
        }
  
        getWay(this.cell.unit, noFree, deep);
  
        //if(this.warrior){console.log(this.way.length)};
        ////////////////////////////////////////
  
        ///////////////////////////////////////////////////////////
      }
  
      if (
        this.way.length &&
        this.way[this.way.length - 1].free &&
        this.checkValideFreeCell()
      ) {
        //if(this.type===2&&!this.way[this.way.length-1].free){console.log("ggggggggggggggggggggggggggggggggg");};
  
        //speed=this.speed-(this.speed*this.stepTakt);
        let speedKoof = 1 - this.stepTakt;
  
        //if(this.checkValideFreeCell()){
  
        this.iGetMyCell = false;
  
        this.iStand = false;
  
        this.getGsp_Vsp();
  
        this.cell.unit = 0;
        this.cell.free = true;
        this.cell = this.way[this.way.length - 1];
        this.horizont = this.way[this.way.length - 1].horizont;
        this.vertikal = this.way[this.way.length - 1].vertikal;
        this.cell.unit = arg;
        this.cell.free = false;
        this.way.pop();
  
        if (
          (this.type === 1 ||
            this.type === 2 ||
            this.type === 3 ||
            this.type === "ballista" ||
            this.type === "rizar") &&
          this.cell
        ) {
          this.damagePointX = this.cell.x + 25;
          this.damagePointY = this.cell.y + 25;
        }
  
        if (this.cell) {
          this.cellUpdate(); //////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }
        ///
  
        ///
  
        this.x += this.gSp * speedKoof;
        this.y += this.vSp * speedKoof;
  
        let a = this.cell.x - this.x;
        let b = this.cell.y - this.y;
  
        let c = Math.sqrt(a * a + b * b);
  
        this.stepTakt = c / this.speed;
  
        //}
      } else if (!this.way.length) {
        this.stepTakt = 0;
        //this.way=[];
        this.finish = 0;
  
        this.iStand = true;
      }
    } else {
      //if(!this.target){
      //this.holdToGo=10;
      //}
      //else{this.holdToGo=0;this.iStand=true;};
  
      this.x += this.gSp;
      this.y += this.vSp;
  
      this.iStand = false;
      this.iGetMyCell = false;
  
      this.stepTakt--;
  
      //if(!this.way.length&&this.stepTakt<=0){this.stepTakt=0;this.finish=0;};
  
      //console.log("ok");
    }
  
    //if(!this.way.length&&this.stepTakt<=0){this.finish=0;console.log("ok");};
  
    //console.log(this.way);
    //if(fractions[0].activeUnits[0]){
    //console.log(this.way.length);
    //};
    /*
  if(this.ii_saveCell&&!this.handCell&&!this.target&&!this.handTarget&&!this.way.length){
      //console.log(this.cell.unit);// pausa=1;
      this.spedr=true;
  }
  else {this.spedr=false;};
  */
  };