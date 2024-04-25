LandObj.prototype.prog = function (arg) {
  if (this.buildready > this.hpfull) {
    this.buildready = this.hpfull;
  }
  if (this.hp > this.hpfull) {
    this.hp = this.hpfull;
  }
  if (this.buildready <= 0) {
    this.buildready = 0;
    this.hp = 0;
  }
  if (this.hp <= 0) {
    this.hp = 0;
  }

  /*
  if(
  !this.neitral
  &&
  this.fatherFraction.control==="player"
  &&
  this.alarmTimer===500
  ){
      
      player.alarms.push(this.cell.unit);
      console.log("here");
  };
  */

  if (this.unitName === "temple") {
    //console.log(this.distroyTimer); push

    if (this.hp <= 0 || this.buildready <= 0) {
      if (this.fatherFraction.control === "comp") {
        if (this.distroyTimer === 501) {
          let repos = this.fatherFraction.createShablon_reposition(
            this.cell.unit
          );

          if (repos) {
            //console.log("!!!!!!!!!!!!!!!!!!!!!!!!");

            //this.fatherFraction.createShablon.baracks.splice(this.iBornCresteShablonNumber,1);
            //repos.iBorn=false;

            this.fatherFraction.createShablon.temples[
              this.iBornCresteShablonNumber
            ].vertikal = repos.vertikal;
            this.fatherFraction.createShablon.temples[
              this.iBornCresteShablonNumber
            ].horizont = repos.horizont;
            this.fatherFraction.createShablon.temples[
              this.iBornCresteShablonNumber
            ].x = repos.x;
            this.fatherFraction.createShablon.temples[
              this.iBornCresteShablonNumber
            ].y = repos.y;

            //this.fatherFraction.createShablon.baracks.push(repos);
          }

          this.fatherFraction.createShablon.temples[
            this.iBornCresteShablonNumber
          ].iBorn = false;
        }
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;
        this.fatherFraction.temples.splice(
          this.fatherFraction.temples.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    /*
  if(this.iComplite&&this.hp===this.hpfull){
      
      this.readyToOut=true;
      
  };
  
  */
    //console.log(this.distroyTimer);

    if (this.iComplite) {
      if (this.myJoubeTimer) {
        this.myJoubeTimer--;
      }

      if (!this.myJoubeTimer && this.myJoube) {
        this.myJoube = false;

        let outCell = this.getOutCell();

        unit = new Unit(
          "mag",
          0,
          0,
          4,
          this.fatherFraction.fraction,
          this.fatherFraction.nation
        );

        //console.log("luchnik");

        allUnits++;
        unit.persolalNumber = allUnits;

        //this.waitTime--;
        if (!outCell) {
          outCell = this.extreamGetOutCell();
        }

        //console.log(outCell.outPrioritet+" "+outCell.horizont);
        if (outCell) {
          unit.cell = gameFielg[outCell.vertikal][outCell.horizont];

          unit.horizont = unit.cell.horizont;
          unit.vertikal = unit.cell.vertikal;
          unit.x = unit.cell.x;
          unit.y = unit.cell.y;
          unit.cell.unit = unit;
          unit.cell.free = false;

          //this.animY=0;
          //unit.iStand=true;
          unit.moveVektor = outCell.moveVektorOut;
          //unit.target=0;
          unit.fatherFraction = this.fatherFraction;

          unit.initialization = true;

          unit.cellUpdate();

          unit.damagePointX = unit.cell.x + 25;
          unit.damagePointY = unit.cell.y + 25;

          this.fatherFraction.peoples.push(unit);

          if (this.fatherFraction.control === "player") {
            select_sound(unit, "ready");
          }
        }
      }

      if (this.alarmTimer) {
        if (this.alarmTimer === 500) {
          //console.log(this.agressor);

          this.fatherFraction.alarms.push(
            new Alarm(this.agressor, 1500, this.cell.unit)
          );

          this.agressor = 0;
        }

        this.alarmTimer--; //console.log("alarm");
      }
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.myJoubeTimer &&
      !this.alarmTimer
    ) {
      this.readyToOut = true;

      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "dragon_roost") {
    //console.log(this.distroyTimer); push

    if (this.hp <= 0 || this.buildready <= 0) {
      if (this.fatherFraction.control === "comp") {
        if (this.distroyTimer === 501) {
          let repos = this.fatherFraction.createShablon_reposition(
            this.cell.unit
          );

          if (repos) {
            //console.log("!!!!!!!!!!!!!!!!!!!!!!!!");

            //this.fatherFraction.createShablon.baracks.splice(this.iBornCresteShablonNumber,1);
            //repos.iBorn=false;

            this.fatherFraction.createShablon.dragon_roosts[
              this.iBornCresteShablonNumber
            ].vertikal = repos.vertikal;
            this.fatherFraction.createShablon.dragon_roosts[
              this.iBornCresteShablonNumber
            ].horizont = repos.horizont;
            this.fatherFraction.createShablon.dragon_roosts[
              this.iBornCresteShablonNumber
            ].x = repos.x;
            this.fatherFraction.createShablon.dragon_roosts[
              this.iBornCresteShablonNumber
            ].y = repos.y;

            //this.fatherFraction.createShablon.baracks.push(repos);
          }

          this.fatherFraction.createShablon.dragon_roosts[
            this.iBornCresteShablonNumber
          ].iBorn = false;
        }
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;
        this.fatherFraction.dragon_roosts.splice(
          this.fatherFraction.dragon_roosts.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    /*
  if(this.iComplite&&this.hp===this.hpfull){
      
      this.readyToOut=true;
      
  };
  
  */
    //console.log(this.distroyTimer);

    if (this.iComplite) {
      if (this.myJoubeTimer) {
        this.myJoubeTimer--;
      }

      if (!this.myJoubeTimer && this.myJoube) {
        this.myJoube = false;

        let cells = [];

        let koof = 5;

        while (!cells.length) {
          for (let i = this.vertikal - koof; i < this.vertikal + koof; i++) {
            for (let k = this.horizont - koof; k < this.horizont + koof; k++) {
              let ok = 0;

              for (let v = i - 1; v <= i; v++) {
                for (let h = k; h <= k + 1; h++) {
                  if (
                    gameFielg[v] &&
                    gameFielg[v][h] &&
                    !gameFielg[v][h].dragoon
                  ) {
                    ok++;
                  }
                }
              }

              if (ok === 4) {
                cells.push(gameFielg[i][k]);
              }
            }
          }

          koof += 5;
        } // while

        let min = [];

        for (let i = 0; i < cells.length; i++) {
          let dis = get_distanse_on_lineyka(this.cell, 50, cells[i], 100);

          if (!min.length || min[0] > dis) {
            min = [dis, cells[i]];
          }
        }

        let cell = min[1];

        /////////////////////////////////////

        let unit = new Unit(
          "dragoon",
          cell.horizont,
          cell.vertikal,
          4,
          this.fatherFraction.fraction,
          this.fatherFraction.nation
        );

        this.fatherFraction.peoples.push(unit);
        this.fatherFraction.peoples[
          this.fatherFraction.peoples.length - 1
        ].cell = cell;
        gameFielg[cell.vertikal][cell.horizont].dragoon =
          this.fatherFraction.peoples[this.fatherFraction.peoples.length - 1];
        gameFielg[cell.vertikal][cell.horizont + 1].dragoon =
          this.fatherFraction.peoples[this.fatherFraction.peoples.length - 1];
        gameFielg[cell.vertikal - 1][cell.horizont].dragoon =
          this.fatherFraction.peoples[this.fatherFraction.peoples.length - 1];
        gameFielg[cell.vertikal - 1][cell.horizont + 1].dragoon =
          this.fatherFraction.peoples[this.fatherFraction.peoples.length - 1];

        this.fatherFraction.peoples[
          this.fatherFraction.peoples.length - 1
        ].fatherFraction = this.fatherFraction;
        this.fatherFraction.peoples[
          this.fatherFraction.peoples.length - 1
        ].cellUpdate();

        this.fatherFraction.peoples[
          this.fatherFraction.peoples.length - 1
        ].initialization = true;

        allUnits++;
        this.fatherFraction.peoples[
          this.fatherFraction.peoples.length - 1
        ].persolalNumber = allUnits;

        if (this.fatherFraction.control === "player") {
          select_sound(unit, "ready");
        }

        ////////////////////////////////
      }
    }

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.myJoubeTimer &&
      !this.alarmTimer
    ) {
      this.readyToOut = true;

      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "foundry") {
    //console.log(this.distroyTimer); push readyToOut

    if (this.hp <= 0 || this.buildready <= 0) {
      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;

          if (this.myCells[i].type !== "water") {
            this.myCells[i].free = true;
          }
        }

        //this.cell.unit=0;
        this.fatherFraction.foundrys.splice(
          this.fatherFraction.foundrys.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        this.cell.continent = false;
        this.cell.sea = this.save_sea;
        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    //altars

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    /*
  if(this.iComplite&&this.hp===this.hpfull){
      
      this.readyToOut=true;
      
  };
  
  */
    //console.log(this.distroyTimer);

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.myJoubeTimer &&
      !this.alarmTimer
    ) {
      //	this.readyToOut=true;
      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "port") {
    //console.log(this.distroyTimer); push readyToOut

    if (this.hp <= 0 || this.buildready <= 0) {
      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;

          if (this.myCells[i].type !== "water") {
            this.myCells[i].free = true;
          }
        }

        //this.cell.unit=0;
        this.fatherFraction.ports.splice(
          this.fatherFraction.ports.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);
        this.cell.continent = false;
        this.cell.sea = this.save_sea;
        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    //altars

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    if (this.iComplite) {
      ///////////////////////////////////	ii
      /*
  if(this.fatherFraction.control==="comp"){
  
      
  this.ii_timer++;	
  
  
  if(this.ii_timer===100){this.ii_timer=0;};	
      
  
  if(!this.ii_timer){
      
  //console.log(this.ii_timer)
      
      let units=[];
      
      
      for(let i=this.vertikal-5;i<=this.vertikal+6;i++){
              for(let k=this.horizont-5;k<=this.horizont+6;k++){
          
      if(
      gameFielg[i]&&gameFielg[i][k]
      &&
  gameFielg[i][k].unit
  &&
  gameFielg[i][k].unit.sweeme
  &&
  gameFielg[i][k].unit.fatherFraction.fraction===this.fatherFraction.fraction
  &&
  !gameFielg[i][k].unit.active
      ){
          if(units.indexOf(gameFielg[i][k].unit)===-1){
          units.push(gameFielg[i][k].unit);
          };
      };	
          
          
      };
      };
      
  
  let cells=[];
  
  for(let i=0;i<allContinents[this.fatherFraction.continent].conturLine_sea_Cells.length;i++)	{
  
  let dis=get_distanse_on_lineyka(this.cell,100,allContinents[this.fatherFraction.continent].conturLine_sea_Cells[i],50);	
      
  if(
  dis>400
  &&
  dis<1000
  //&&
  //!allContinents[this.fatherFraction.continent].conturLine_sea_Cells[i].unit
  &&
  !allContinents[this.fatherFraction.continent].conturLine_sea_Cells[i].vossalObj
  
  ){cells.push(allContinents[this.fatherFraction.continent].conturLine_sea_Cells[i]);};	
      
      
  };
      
  
  for(let i=0;i<units.length;i++){
  
  if(cells.length){
      
      let ran=Math.floor(Math.random()*cells.length);
      
      let c=cells[ran];
      
  units[i].clickSave=new ClickSave(0,c);	
  units[i].spe=c;
  units[i].born_cell=c;
  cells.splice(ran,1);
  
  this.fatherFraction.activeUnits.push(units[i]);
  units[i].active=true;
  
  
  }
  else{break;};
      
  };
  
      
      
      
      
  };
  
  
  };	
  //*/
      ////////////////////////////////

      if (this.myJoubeTimer) {
        this.myJoubeTimer--;
      }

      if (!this.myJoubeTimer) {
        if (this.myJoube === "turtle") {
          //sea

          let min = [];

          for (let j = 0; j < allSeas[this.save_sea].cells.length; j++) {
            let cell = allSeas[this.save_sea].cells[j];

            let ok = true;

            for (let i = cell.vertikal - 1; i <= cell.vertikal; i++) {
              for (let k = cell.horizont; k <= cell.horizont + 1; k++) {
                if (
                  !gameFielg[i] ||
                  !gameFielg[i][k] ||
                  gameFielg[i][k].unit ||
                  gameFielg[i][k].vossalObj ||
                  gameFielg[i][k].type !== "water"
                ) {
                  ok = false;
                }
              }
            }

            if (ok) {
              let dis = get_distanse_on_lineyka(this.cell, 50, cell, 100);

              if (!min.length || min[0] > dis) {
                min = [dis, cell];
              }
            }
          }

          //console.log(min); pausa=1; push

          if (min.length) {
            let cell = min[1];

            let unit = new Unit(
              "turtle",
              cell.horizont,
              cell.vertikal,
              2,
              this.fatherFraction.fraction,
              this.fatherFraction.nation
            );

            unit.fatherFraction = this.fatherFraction;

            this.fatherFraction.peoples.push(unit);

            this.fatherFraction.peoples[
              this.fatherFraction.peoples.length - 1
            ].cell = gameFielg[cell.vertikal][cell.horizont];
            gameFielg[cell.vertikal][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];

            unit.initialization = true;

            allUnits++;
            unit.persolalNumber = allUnits;

            unit.cellUpdate();

            if (this.fatherFraction.control === "player") {
              select_sound(unit, "ready");
            }

            //console.log("distroer"); pausa=1;
          }
        } else if (this.myJoube === "linkor") {
          let min = [];

          for (let j = 0; j < allSeas[this.save_sea].cells.length; j++) {
            let cell = allSeas[this.save_sea].cells[j];

            let ok = true;

            for (let i = cell.vertikal - 1; i <= cell.vertikal; i++) {
              for (let k = cell.horizont; k <= cell.horizont + 1; k++) {
                if (
                  !gameFielg[i] ||
                  !gameFielg[i][k] ||
                  gameFielg[i][k].unit ||
                  gameFielg[i][k].vossalObj ||
                  gameFielg[i][k].type !== "water"
                ) {
                  ok = false;
                }
              }
            }

            if (ok) {
              let dis = get_distanse_on_lineyka(this.cell, 50, cell, 100);

              if (!min.length || min[0] > dis) {
                min = [dis, cell];
              }
            }
          }

          //console.log(min); pausa=1; push

          if (min.length) {
            let cell = min[1];

            let unit = new Unit(
              "linkor",
              cell.horizont,
              cell.vertikal,
              2,
              this.fatherFraction.fraction,
              this.fatherFraction.nation
            );

            unit.fatherFraction = this.fatherFraction;

            this.fatherFraction.peoples.push(unit);

            this.fatherFraction.peoples[
              this.fatherFraction.peoples.length - 1
            ].cell = gameFielg[cell.vertikal][cell.horizont];
            gameFielg[cell.vertikal][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];

            unit.initialization = true;

            allUnits++;
            unit.persolalNumber = allUnits;

            unit.cellUpdate();

            if (this.fatherFraction.control === "player") {
              select_sound(unit, "ready");
            }

            //console.log("distroer"); pausa=1;
          }
        } else if (this.myJoube === "distroer") {
          let min = [];

          for (let j = 0; j < allSeas[this.save_sea].cells.length; j++) {
            let cell = allSeas[this.save_sea].cells[j];

            let ok = true;

            for (let i = cell.vertikal - 1; i <= cell.vertikal; i++) {
              for (let k = cell.horizont; k <= cell.horizont + 1; k++) {
                if (
                  !gameFielg[i] ||
                  !gameFielg[i][k] ||
                  gameFielg[i][k].unit ||
                  gameFielg[i][k].vossalObj ||
                  gameFielg[i][k].type !== "water"
                ) {
                  ok = false;
                }
              }
            }

            if (ok) {
              let dis = get_distanse_on_lineyka(this.cell, 50, cell, 100);

              if (!min.length || min[0] > dis) {
                min = [dis, cell];
              }
            }
          }

          //console.log(min); pausa=1; push

          if (min.length) {
            let cell = min[1];

            let unit = new Unit(
              "distroer",
              cell.horizont,
              cell.vertikal,
              2,
              this.fatherFraction.fraction,
              this.fatherFraction.nation
            );

            unit.fatherFraction = this.fatherFraction;

            this.fatherFraction.peoples.push(unit);

            this.fatherFraction.peoples[
              this.fatherFraction.peoples.length - 1
            ].cell = gameFielg[cell.vertikal][cell.horizont];
            gameFielg[cell.vertikal][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];

            unit.initialization = true;

            allUnits++;
            unit.persolalNumber = allUnits;

            unit.cellUpdate();

            if (this.fatherFraction.control === "player") {
              select_sound(unit, "ready");
            }

            //console.log("distroer"); pausa=1;
          }
        } else if (this.myJoube === "transport") {
          //console.log("in");
          /*		
      fractions[1].peoples.push(new Unit("transport",20-12,36-8,2,"blackOrcs"));
  fractions[1].peoples[fractions[1].peoples.length-1].cell=gameFielg[36-8][20-12];
  gameFielg[36-8][20-12].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[35-8][20-12].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[35-8][21-12].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[36-8][21-12].unit=fractions[1].peoples[fractions[1].peoples.length-1];	
  */
          //console.log(allSeas[this.cell.sea])
          let min = [];

          for (let j = 0; j < allSeas[this.save_sea].cells.length; j++) {
            let cell = allSeas[this.save_sea].cells[j];

            let ok = true;

            for (let i = cell.vertikal - 1; i <= cell.vertikal; i++) {
              for (let k = cell.horizont; k <= cell.horizont + 1; k++) {
                if (
                  !gameFielg[i] ||
                  !gameFielg[i][k] ||
                  gameFielg[i][k].unit ||
                  gameFielg[i][k].vossalObj ||
                  gameFielg[i][k].type !== "water"
                ) {
                  ok = false;
                }
              }
            }

            if (ok) {
              let dis = get_distanse_on_lineyka(this.cell, 50, cell, 100);

              if (!min.length || min[0] > dis) {
                min = [dis, cell];
              }
            }
          }

          //console.log(min); pausa=1; push

          if (min.length) {
            let cell = min[1];

            let unit = new Unit(
              "transport",
              cell.horizont,
              cell.vertikal,
              2,
              this.fatherFraction.fraction,
              this.fatherFraction.nation
            );

            unit.fatherFraction = this.fatherFraction;

            this.fatherFraction.peoples.push(unit);

            this.fatherFraction.peoples[
              this.fatherFraction.peoples.length - 1
            ].cell = gameFielg[cell.vertikal][cell.horizont];
            gameFielg[cell.vertikal][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];

            unit.initialization = true;

            allUnits++;
            unit.persolalNumber = allUnits;

            unit.cellUpdate();

            if (this.fatherFraction.control === "player") {
              select_sound(unit, "ready");
            }
          }
        } else if (this.myJoube === "oil_tanker") {
          let min = [];

          for (let j = 0; j < allSeas[this.save_sea].cells.length; j++) {
            let cell = allSeas[this.save_sea].cells[j];

            let ok = true;

            for (let i = cell.vertikal - 1; i <= cell.vertikal; i++) {
              for (let k = cell.horizont; k <= cell.horizont + 1; k++) {
                if (
                  !gameFielg[i] ||
                  !gameFielg[i][k] ||
                  gameFielg[i][k].unit ||
                  gameFielg[i][k].vossalObj ||
                  gameFielg[i][k].type !== "water"
                ) {
                  ok = false;
                }
              }
            }

            if (ok) {
              let dis = get_distanse_on_lineyka(this.cell, 50, cell, 100);

              if (!min.length || min[0] > dis) {
                min = [dis, cell];
              }
            }
          }

          //console.log(min); pausa=1; push

          if (min.length) {
            let cell = min[1];

            let unit = new Unit(
              "oil_tanker",
              cell.horizont,
              cell.vertikal,
              2,
              this.fatherFraction.fraction,
              this.fatherFraction.nation
            );

            unit.fatherFraction = this.fatherFraction;

            this.fatherFraction.peoples.push(unit);

            this.fatherFraction.peoples[
              this.fatherFraction.peoples.length - 1
            ].cell = gameFielg[cell.vertikal][cell.horizont];
            gameFielg[cell.vertikal][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal - 1][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];
            gameFielg[cell.vertikal][cell.horizont + 1].unit =
              this.fatherFraction.peoples[
                this.fatherFraction.peoples.length - 1
              ];

            unit.initialization = true;

            allUnits++;
            unit.persolalNumber = allUnits;

            unit.cellUpdate();

            if (this.fatherFraction.control === "player") {
              select_sound(unit, "ready");
            }
          }
        }

        this.myJoube = false;
      }
    }

    /*
  if(this.iComplite&&this.hp===this.hpfull){
      
      this.readyToOut=true;
      
  };
  
  */
    //console.log(this.distroyTimer);

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.myJoubeTimer &&
      !this.alarmTimer
    ) {
      //	this.readyToOut=true;
      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "oil_Ref") {
    //console.log(this.distroyTimer); push readyToOut oil

    if (this.hp <= 0 || this.buildready <= 0) {
      if (!this.ch) {
        this.ch = true;

        for (let m = 0; m < this.tankers.length; m++) {
          this.tankers[m].readyToOut = true;
          this.tankers[m].katastrofa = true;
        }

        this.tankers = [];
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;

          if (this.myCells[i].type !== "water") {
            this.myCells[i].free = true;
          }
        }

        //this.cell.unit=0;
        this.fatherFraction.oil_Refs.splice(
          this.fatherFraction.oil_Refs.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);
        this.cell.continent = false;
        this.cell.sea = this.save_sea;
        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    //altars

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    if (this.iComplite) {
      if (this.timers.length) {
        if (this.timers[0].time) {
          this.timers[0].time--;
        }

        if (!this.timers[0].time) {
          let min = [];

          for (let j = 0; j < allSeas[this.save_sea].cells.length; j++) {
            let cell = allSeas[this.save_sea].cells[j];

            let ok = true;

            for (let i = cell.vertikal - 1; i <= cell.vertikal; i++) {
              for (let k = cell.horizont; k <= cell.horizont + 1; k++) {
                if (
                  !gameFielg[i] ||
                  !gameFielg[i][k] ||
                  gameFielg[i][k].unit ||
                  gameFielg[i][k].vossalObj ||
                  gameFielg[i][k].type !== "water"
                ) {
                  ok = false;
                }
              }
            }

            if (ok) {
              let dis = get_distanse_on_lineyka(this.cell, 100, cell, 50);

              if (!min.length || min[0] > dis) {
                min = [dis, cell];
              }
            }
          }

          //console.log(min); pausa=1; push

          if (min.length) {
            let cell = min[1];

            let unit = this.tankers[0];

            //unit.oil=true;

            unit.cell = cell;
            //this.hotCell=this.cell;

            unit.horizont = cell.horizont;
            unit.vertikal = cell.vertikal;
            unit.x = cell.x;
            unit.y = cell.y;
            unit.stepTakt = 0;

            for (let v = cell.vertikal - 1; v <= cell.vertikal; v++) {
              for (let h = cell.horizont; h <= cell.horizont + 1; h++) {
                gameFielg[v][h].unit = unit;
              }
            }

            //pausa=1;

            unit.cellUpdate();

            unit.clickSave = new ClickSave(this.cell.unit, 0);

            if (!unit.active) {
              unit.fatherFraction.activeUnits.push(unit);
              unit.active = true;
            }

            //console.log("go");
          }

          this.tankers.shift();
          this.timers.shift();
        }
      }
    }

    /*
  if(this.iComplite&&this.hp===this.hpfull){
      
      this.readyToOut=true;
      
  };
  
  */
    //console.log(this.distroyTimer);

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.tankers.length &&
      !this.alarmTimer
    ) {
      this.readyToOut = true;

      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "oil_platform") {
    if (this.hp <= 0 || this.buildready <= 0) {
      if (!this.ch) {
        this.ch = true;

        for (let m = 0; m < this.tankers.length; m++) {
          this.tankers[m].readyToOut = true;
          this.tankers[m].katastrofa = true;
        }

        this.tankers = [];
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        //this.cell.unit=0;
        this.fatherFraction.oil_platforms.splice(
          this.fatherFraction.oil_platforms.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        for (let i = 0; i < this.cells.length; i++) {
          this.cells[i].unit = 0;
        }

        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;
      }

      return;
    }

    if (this.buildready < this.hpfull) {
      this.buildready += 10;
    } else {
      this.buildready = this.hpfull;
      this.iComplite = true;

      if (this.timers.length) {
        if (this.timers[0].time) {
          this.timers[0].time--;
        }

        if (!this.timers[0].time && this.hp === this.hpfull) {
          let min = [];

          for (let j = 0; j < allSeas[this.cell.sea].cells.length; j++) {
            let cell = allSeas[this.cell.sea].cells[j];

            let ok = true;

            for (let i = cell.vertikal - 1; i <= cell.vertikal; i++) {
              for (let k = cell.horizont; k <= cell.horizont + 1; k++) {
                if (
                  !gameFielg[i] ||
                  !gameFielg[i][k] ||
                  gameFielg[i][k].unit ||
                  gameFielg[i][k].vossalObj ||
                  gameFielg[i][k].type !== "water"
                ) {
                  ok = false;
                }
              }
            }

            if (ok) {
              let dis = get_distanse_on_lineyka(this.cell, 100, cell, 50);

              if (!min.length || min[0] > dis) {
                min = [dis, cell];
              }
            }
          }

          //console.log(min); pausa=1; push

          if (min.length) {
            let cell = min[1];

            let unit = this.tankers[0];

            unit.oil = true;

            unit.cell = cell;
            //this.hotCell=this.cell;

            unit.horizont = cell.horizont;
            unit.vertikal = cell.vertikal;
            unit.x = cell.x;
            unit.y = cell.y;

            for (let v = cell.vertikal - 1; v <= cell.vertikal; v++) {
              for (let h = cell.horizont; h <= cell.horizont + 1; h++) {
                gameFielg[v][h].unit = unit;
              }
            }

            //pausa=1;

            unit.cellUpdate();

            unit.clickSave = new ClickSave(this.cell.unit, 0);

            if (!unit.active) {
              unit.fatherFraction.activeUnits.push(unit);
              unit.active = true;
            }
            //console.log("go");
          }

          this.tankers.shift();
          this.timers.shift();
        } else {
          this.hp += 0.5;

          if (this.hp > this.hpfull) {
            this.hp = this.hpfull;
          }
        }
      }
    }

    if (!this.tankers.length && !this.cell.oil.oil) {
      this.hp = 0;

      allSeas[this.cell.sea].oils.splice(
        allSeas[this.cell.sea].oils.indexOf(this.cell.oil),
        1
      );

      for (let i = 0; i < this.cells.length; i++) {
        this.cells[i].oil = false;
      }
    }

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }
  } else if (this.unitName === "altar") {
    //console.log(this.distroyTimer); push

    if (this.hp <= 0 || this.buildready <= 0) {
      if (this.fatherFraction.control === "comp") {
        if (this.distroyTimer === 501) {
          let repos = this.fatherFraction.createShablon_reposition(
            this.cell.unit
          );

          if (repos) {
            //console.log("!!!!!!!!!!!!!!!!!!!!!!!!");

            //this.fatherFraction.createShablon.baracks.splice(this.iBornCresteShablonNumber,1);
            //repos.iBorn=false;

            this.fatherFraction.createShablon.altars[
              this.iBornCresteShablonNumber
            ].vertikal = repos.vertikal;
            this.fatherFraction.createShablon.altars[
              this.iBornCresteShablonNumber
            ].horizont = repos.horizont;
            this.fatherFraction.createShablon.altars[
              this.iBornCresteShablonNumber
            ].x = repos.x;
            this.fatherFraction.createShablon.altars[
              this.iBornCresteShablonNumber
            ].y = repos.y;

            //this.fatherFraction.createShablon.baracks.push(repos);
          }

          this.fatherFraction.createShablon.altars[
            this.iBornCresteShablonNumber
          ].iBorn = false;
        }
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;
        this.fatherFraction.altars.splice(
          this.fatherFraction.altars.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    /*
  if(this.iComplite&&this.hp===this.hpfull){
      
      this.readyToOut=true;
      
  };
  
  */
    //console.log(this.distroyTimer);

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.myJoubeTimer &&
      !this.alarmTimer
    ) {
      this.readyToOut = true;

      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "ogreBase") {
    //console.log(this.distroyTimer);

    if (this.hp <= 0 || this.buildready <= 0) {
      if (this.fatherFraction.control === "comp") {
        if (this.distroyTimer === 501) {
          let repos = this.fatherFraction.createShablon_reposition(
            this.cell.unit
          );

          if (repos) {
            //console.log("!!!!!!!!!!!!!!!!!!!!!!!!");

            //this.fatherFraction.createShablon.baracks.splice(this.iBornCresteShablonNumber,1);
            //repos.iBorn=false;

            this.fatherFraction.createShablon.ogreBases[
              this.iBornCresteShablonNumber
            ].vertikal = repos.vertikal;
            this.fatherFraction.createShablon.ogreBases[
              this.iBornCresteShablonNumber
            ].horizont = repos.horizont;
            this.fatherFraction.createShablon.ogreBases[
              this.iBornCresteShablonNumber
            ].x = repos.x;
            this.fatherFraction.createShablon.ogreBases[
              this.iBornCresteShablonNumber
            ].y = repos.y;

            //this.fatherFraction.createShablon.baracks.push(repos);
          }

          this.fatherFraction.createShablon.ogreBases[
            this.iBornCresteShablonNumber
          ].iBorn = false;
        }
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;
        this.fatherFraction.ogreBases.splice(
          this.fatherFraction.ogreBases.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    /*
  if(this.iComplite&&this.hp===this.hpfull){
      
      this.readyToOut=true;
      
  };
  
  */
    //console.log(this.distroyTimer);

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.myJoubeTimer &&
      !this.alarmTimer
    ) {
      this.readyToOut = true;

      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "kuznya") {
    //console.log(this.distroyTimer);

    if (this.hp <= 0 || this.buildready <= 0) {
      if (this.fatherFraction.control === "comp") {
        if (this.distroyTimer === 501) {
          let repos = this.fatherFraction.createShablon_reposition(
            this.cell.unit
          );

          if (repos) {
            //console.log("!!!!!!!!!!!!!!!!!!!!!!!!");

            //this.fatherFraction.createShablon.baracks.splice(this.iBornCresteShablonNumber,1);
            //repos.iBorn=false;

            this.fatherFraction.createShablon.kuznyas[
              this.iBornCresteShablonNumber
            ].vertikal = repos.vertikal;
            this.fatherFraction.createShablon.kuznyas[
              this.iBornCresteShablonNumber
            ].horizont = repos.horizont;
            this.fatherFraction.createShablon.kuznyas[
              this.iBornCresteShablonNumber
            ].x = repos.x;
            this.fatherFraction.createShablon.kuznyas[
              this.iBornCresteShablonNumber
            ].y = repos.y;

            //this.fatherFraction.createShablon.baracks.push(repos);
          }

          this.fatherFraction.createShablon.kuznyas[
            this.iBornCresteShablonNumber
          ].iBorn = false;
        }
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;
        this.fatherFraction.kuznyas.splice(
          this.fatherFraction.kuznyas.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    /*
  if(this.iComplite&&this.hp===this.hpfull){
      
      this.readyToOut=true;
      
  };
  
  */
    //console.log(this.distroyTimer);

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.myJoubeTimer &&
      !this.alarmTimer
    ) {
      this.readyToOut = true;

      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "tower") {
    //console.log("active"); unterTowers upgradeTimer

    if (this.hp <= 0 || this.buildready <= 0) {
      if (this.distroyTimer === 501 && this.fatherFraction.control === "comp") {
        if (!this.dop) {
          this.fatherFraction.createShablon.towers[
            this.iBornCresteShablonNumber
          ].iBorn = false;
        }

        let ind = this.fatherFraction.unterTowers.indexOf(this.cell.unit);

        if (ind !== -1) {
          this.fatherFraction.unterTowers.splice(ind, 1);
        }
      }
      this.alarmTimer = 0;
      this.hp = 0;
      this.buildready = 0;

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;
        this.fatherFraction.towers.splice(
          this.fatherFraction.towers.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        this.cell.unit = 0;
        this.cell = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //farms console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    /////////////////////////////////////  upgrade
    if (this.upgrade === "guard") {
      this.iCanGetFly = true;
    }

    if (!this.iFight && this.upgrade !== "watch" && !this.upgradeTimer) {
      let min = [];

      for (let i = 0; i < this.animys.length; i++) {
        let c;

        if (this.animys[i] && this.animys[i].damagePointX) {
          let a = this.animys[i].damagePointX - this.damagePointX;
          let b = this.animys[i].damagePointY - this.damagePointY;

          c = Math.sqrt(a * a + b * b);
        }

        if (
          !this.animys[i] ||
          !c ||
          c > 550 ||
          !this.animys[i] ||
          !this.animys[i].cell ||
          this.animys[i].hp <= 0
        ) {
          if (
            this.animys[i] &&
            this.target &&
            this.target.persolalNumber === this.animys[i].persolalNumber
          ) {
            this.target = 0;
          }

          this.animys.splice(i, 1);

          i--;
        } else {
          if (
            (!min.length || c < min[0]) &&
            c <= 475 &&
            this.animys[i].cell &&
            this.animys[i].hp > 0 &&
            (!this.animys[i].fly ||
              (this.animys[i].fly && this.upgrade === "guard"))
          ) {
            min = [c, this.animys[i]];
          }
        }
      }

      if (min.length) {
        this.target = min[1];

        if (this.upgrade === "guard") {
          this.iFight = 50;
          this.attack = 100;
        } else if (this.upgrade === "cannon") {
          this.iFight = 150;
          this.attack = 350;
        }
      }
    }

    if (this.upgrade === "guard") {
      //this.iFight=50;
      this.attack = 100;
    } else if (this.upgrade === "cannon") {
      //this.iFight=150;
      this.attack = 350;
    }

    //////////////////////////////////////////////////// alarm

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    //////////////////////////////////////////////////////////

    if (this.iFight === 50 && this.upgrade === "guard") {
      let a = this.target.damagePointX - this.damagePointX;
      let b = this.target.damagePointY - this.damagePointY;

      let c = Math.sqrt(a * a + b * b);

      let a2 = this.target.damagePointX - this.firePointX;
      let b2 = this.target.damagePointY - this.firePointY;

      //x,y,type,target,attack,father

      let conor = Math.atan2(b, a);

      let axe = new Axes(
        this.firePointX,
        this.firePointY,
        "strela_tower",
        undefined,
        this.attack,
        this.cell.unit,
        conor
      );

      axe.takt = Math.floor(c / 24);

      ////////////////////////

      axe.dopGabKoof = 40 / axe.takt;

      /////////////////////////////

      let a3 = a2; //this.target.damagePointX-this.firePointX;
      let b3 = b2; //(this.target.damagePointY-30)-this.firePointY;

      if (this.target.fly) {
        a3 = this.target.damagePointX - this.firePointX;
        b3 = this.target.damagePointY - 30 - this.firePointY;
        //console.log("drdrdrdrdr");
      }

      axe.gSp = a3 / axe.takt;
      axe.vSp = b3 / axe.takt;

      axe.stopDraw = 2;

      axe.target = this.target;
      //axe.attack=this.attack;
      //x,y,type,target,attack,father,conor

      axesFly.push(axe);
    } else if (this.iFight === 150 && this.upgrade === "cannon") {
      let c;

      let a2;
      let b2;

      let a;
      let b;

      let conor;
      let conor2;

      let xy;

      if (this.target.unitStatus === "life") {
        let damagePointX;
        let damagePointY;

        if (this.target.gabarit === 50) {
          damagePointX = this.target.x + 25;
          damagePointY = this.target.y + 25;
        } else if (this.target.gabarit === 100) {
          damagePointX = this.target.x + 50;
          damagePointY = this.target.y;
        }

        a = damagePointX - this.damagePointX;
        b = damagePointY - this.damagePointY;

        c = Math.sqrt(a * a + b * b);

        a2 = damagePointX - this.firePointX;
        b2 = damagePointY - this.firePointY;

        //x,y,type,target,attack,father

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

          //console.log(c);

          a2 = xy.x - this.firePointX;
          b2 = xy.y - this.firePointY;
        }
      }

      //x,y,type,target,attack,father,conor,xy

      let axe = new Axes(
        this.firePointX,
        this.firePointY,
        "cannon_tower",
        undefined,
        this.attack,
        this.cell.unit,
        conor,
        xy
      );

      axe.takt = Math.floor(c / 10);

      ////////////////////////

      axe.dopGabKoof = 10 / axe.takt;

      /////////////////////////////

      axe.gSp = a2 / axe.takt;
      axe.vSp = b2 / axe.takt;

      axe.stopDraw = 2;

      axe.target = this.target;
      //axe.attack=this.attack;
      //x,y,type,target,attack,father,conor

      axesFly.push(axe);
    }

    if (this.iFight) {
      this.iFight--;
    }

    if (this.upgradeTimer) {
      this.upgradeTimer--;
    }

    if (this.upgradeTimer > 1) {
      this.animys = [];
    }

    this.myJoubeTimer = this.upgradeTimer;

    if (this.upgradeTimer === 1) {
      ///////////////////
      if (this.nation === "h") {
        if (this.upgrade === "cannon") {
          this.face_animY = 10300;
          this.menu_name = "Cannon tower";
        } else {
          this.face_animY = 10200;
          this.menu_name = "Guard tower";
        }

        this.dop_menu = false;
      } else {
        if (this.upgrade === "cannon") {
          this.face_animY = 10500;
          this.menu_name = "cannon tower";
        } else {
          this.face_animY = 10400;
          this.menu_name = "guard tower";
        }

        this.dop_menu = false;
      }

      ////////////////

      for (let i = this.vertikal - 11; i <= this.vertikal + 11; i++) {
        for (let k = this.horizont - 11; k <= this.horizont + 11; k++) {
          if (gameFielg[i] && gameFielg[i][k]) {
            if (
              gameFielg[i][k].unit &&
              !gameFielg[i][k].unit.neitral &&
              gameFielg[i][k].unit.fatherFraction.union !==
                this.fatherFraction.union &&
              gameFielg[i][k].unit.warrior &&
              gameFielg[i][k].unit.unitName !== "tower"
            ) {
              this.animys.push(gameFielg[i][k].unit);
            }

            if (
              gameFielg[i][k].dragoon &&
              gameFielg[i][k].dragoon.fatherFraction.union !==
                this.fatherFraction.union &&
              gameFielg[i][k].dragoon.hp > 0
            ) {
              if (this.iCanGetFly) {
                if (this.animys.indexOf(gameFielg[i][k].dragoon) === -1) {
                  this.animys.push(gameFielg[i][k].dragoon);
                }
              }

              if (
                gameFielg[i][k].dragoon.fatherFraction.activeUnits.indexOf(
                  gameFielg[i][k].dragoon
                ) === -1
              ) {
                gameFielg[i][k].dragoon.fatherFraction.activeUnits.push(
                  gameFielg[i][k].dragoon
                );
              }

              if (
                gameFielg[i][k].dragoon.animys.indexOf(this.cell.unit) === -1
              ) {
                gameFielg[i][k].dragoon.animys.push(this.cell.unit);
              }
            }
          }
        }
      }
    }

    ////////////////////////////////////

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.animys.length &&
      !this.upgradeTimer &&
      !this.iFight &&
      !this.alarmTimer
    ) {
      this.readyToOut = true;
      //console.log("out_2");
    }

    //console.log(this.distroyTimer);
  } else if (this.unitName === "barack") {
    //console.log(this.distroyTimer);

    if (this.hp <= 0 || this.buildready <= 0) {
      if (this.fatherFraction.control === "comp") {
        if (this.distroyTimer === 501) {
          let repos = this.fatherFraction.createShablon_reposition(
            this.cell.unit
          );

          if (repos) {
            //console.log("!!!!!!!!!!!!!!!!!!!!!!!!");

            //this.fatherFraction.createShablon.baracks.splice(this.iBornCresteShablonNumber,1);
            //repos.iBorn=false;

            this.fatherFraction.createShablon.baracks[
              this.iBornCresteShablonNumber
            ].vertikal = repos.vertikal;
            this.fatherFraction.createShablon.baracks[
              this.iBornCresteShablonNumber
            ].horizont = repos.horizont;
            this.fatherFraction.createShablon.baracks[
              this.iBornCresteShablonNumber
            ].x = repos.x;
            this.fatherFraction.createShablon.baracks[
              this.iBornCresteShablonNumber
            ].y = repos.y;

            //this.fatherFraction.createShablon.baracks.push(repos);
          }

          this.fatherFraction.createShablon.baracks[
            this.iBornCresteShablonNumber
          ].iBorn = false;
          //this.fatherFraction.maxUnits-=5;
        }
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;
        this.fatherFraction.baracks.splice(
          this.fatherFraction.baracks.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        this.cell.unit = 0;
        this.cell = 0;
        this.alarmTimer = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //this.fatherFraction.maxUnits+=5;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    /*
  if(this.iComplite&&this.hp===this.hpfull){
      
      this.readyToOut=true;
      
  };
  
  */
    //console.log(this.distroyTimer);

    if (this.iComplite) {
      if (this.myJoubeTimer > 0 && this.hp > 0) {
        this.myJoubeTimer--;
      }

      if (this.myJoubeTimer === 0) {
        ////////////////////////////////
        //let unit=new Unit(1,0,0,2)

        this.myJoubeTimer = false;

        //   if(this.waitTime===30){

        //console.log("eto 0");

        //console.log(this.townHolls[0]);
        // this.target.cellToOut

        let outCell = this.getOutCell();

        //console.log(this.waitTime);

        let unit;

        if (this.myJoube === "rizar") {
          unit = new Unit(
            "rizar",
            0,
            0,
            5,
            this.fatherFraction.fraction,
            this.fatherFraction.nation
          );

          unit.manaTimer = floorGlobalTimer;

          this.myJoube = 0;
        } else if (this.myJoube === "mechnick") {
          unit = new Unit(
            2,
            0,
            0,
            3,
            this.fatherFraction.fraction,
            this.fatherFraction.nation
          );

          this.myJoube = 0;
        } else if (this.myJoube === "luchnik") {
          unit = new Unit(
            3,
            0,
            0,
            2.5,
            this.fatherFraction.fraction,
            this.fatherFraction.nation
          );

          if (this.fatherFraction.nation === "h") {
            unit.attack = 15; //20

            unit.baseAttack = 15;
          }

          this.myJoube = 0;
          //console.log("luchnik");
        } else if (this.myJoube === "ballista") {
          unit = new Unit(
            "ballista",
            0,
            0,
            1,
            this.fatherFraction.fraction,
            this.fatherFraction.nation
          );

          this.myJoube = 0;
          //console.log("luchnik");
        }

        allUnits++;
        unit.persolalNumber = allUnits;

        //this.waitTime--;
        if (!outCell) {
          outCell = this.extreamGetOutCell();
        }

        //console.log(outCell.outPrioritet+" "+outCell.horizont);
        if (outCell) {
          unit.cell = gameFielg[outCell.vertikal][outCell.horizont];

          unit.horizont = unit.cell.horizont;
          unit.vertikal = unit.cell.vertikal;
          unit.x = unit.cell.x;
          unit.y = unit.cell.y;
          unit.cell.unit = unit;
          unit.cell.free = false;

          //this.animY=0;
          //unit.iStand=true;
          unit.moveVektor = outCell.moveVektorOut;
          //unit.target=0;
          unit.fatherFraction = this.fatherFraction;

          unit.initialization = true;

          unit.cellUpdate();

          unit.damagePointX = unit.cell.x + 25;
          unit.damagePointY = unit.cell.y + 25;

          this.fatherFraction.peoples.push(unit);

          if (this.fatherFraction.control === "player") {
            select_sound(unit, "ready");
          }
        }
        //console.log(this.)

        //console.log(arg.horizont+" "+this.horizont)	;

        // }

        /////////////////////////////////
      }
    }

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.myJoubeTimer &&
      !this.alarmTimer
    ) {
      this.readyToOut = true;

      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "lesopilka") {
    if (this.hp <= 0 || this.buildready <= 0) {
      this.alarmTimer = 0;
      this.hp = 0;
      this.buildready = 0;

      if (this.distroyTimer === 501) {
        for (let i = 0; i < this.workers.length; i++) {
          if (this.workers[i].waitTime === 30) {
            let unit = this.workers[i];

            unit.readyToOut = true;
            unit.katastrofa = true;
            unit.hp = 0;

            let fraction = this.fatherFraction;

            //if(fraction.peoples.indexOf(unit)!==-1){fraction.peoples.splice(fraction.peoples.indexOf(unit),1);};
            //if(fraction.batraks.indexOf(unit)!==-1){fraction.batraks.splice(fraction.batraks.indexOf(unit),1);};
            //if(fraction.batraksOnGolg.indexOf(unit)!==-1){fraction.batraksOnGolg.splice(fraction.batraksOnGolg.indexOf(unit),1);};
            //if(fraction.batraksOnWood.indexOf(unit)!==-1){fraction.batraksOnWood.splice(fraction.batraksOnWood.indexOf(unit),1);};
            //if(fraction.activeUnits.indexOf(unit)!==-1){fraction.activeUnits.splice(fraction.activeUnits.indexOf(unit),1);};
          }
        }

        this.workers = [];

        //console.log("delete");
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;

        //console.log(arg);

        if (this.fatherFraction.lesopilkas.indexOf(this.cell.unit) !== -1) {
          this.fatherFraction.lesopilkas.splice(
            this.fatherFraction.lesopilkas.indexOf(this.cell.unit),
            1
          );
          //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

          //console.log("delete");
        }

        this.readyToOut = true;
        this.cell.unit = 0;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }

        //console.log(this.fatherFraction.townHolls);
      }
      //console.log(this.workers);

      return;
    }

    ///*
    if (this.buildready >= this.hpfull) {
      this.buildready = this.hpfull;
    }
    //*/

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (this.buildready >= this.hpfull && !this.iComplite) {
      this.buildready = this.hpfull;
      this.iComplite = true;
    }

    for (let i = 0; i < this.hotCells.length; i++) {
      let obj = this.hotCells[i];

      if (obj.timer) {
        obj.timer--;
      } else {
        this.hotCells.splice(i, 1);
        i--;
      }
    }

    if (this.workers.length && this.iComplite) {
      //console.log("");

      for (let i = 0; i < this.workers.length; i++) {
        if (this.workers[i].workTimeSahta) {
          //this.workers[0].target=0;
          this.workers[i].workTimeSahta--;
        } else {
          let outCell = this.getOutCell();

          //console.log(this.waitTime);
          if (!outCell) {
            outCell = this.extreamGetOutCell();
          }

          if (outCell) {
            this.workers[i].waitTime--;

            this.hotCells.push(outCell);
            outCell.timer = 50;
            //console.log(outCell.outPrioritet+" "+outCell.horizont);

            this.workers[i].cell =
              gameFielg[outCell.vertikal][outCell.horizont];

            this.workers[i].horizont = this.workers[i].cell.horizont;
            this.workers[i].vertikal = this.workers[i].cell.vertikal;
            this.workers[i].x = this.workers[i].cell.x;
            this.workers[i].y = this.workers[i].cell.y;
            this.workers[i].cell.unit = this.workers[i];
            this.workers[i].cell.free = false;

            this.workers[i].cellUpdate();
            //this.animY=525;

            this.workers[i].moveVektor = outCell.moveVektorOut;

            if (!this.workers[i].moveVektor) {
              this.workers[i].moveVektor = "up";
            }

            //getMinDistanse=function(unit,object)

            this.workers[i].workTimeSahta = 100;

            this.workers[i].myJoube = "lesorub";
            this.workers[i].target = getMinDistanse(
              this.workers[i],
              allContinents[this.cell.continent].woods
            );

            if (!this.workers[i].active) {
              this.workers[i].fatherFraction.activeUnits.push(this.workers[i]);
              this.workers[i].active = true;
            }

            this.workers.splice(i, 1);
            i--;
          }
        } //
      }
    }

    if (
      this.buildready >= this.hpfull &&
      this.hp >= this.hpfull &&
      !this.alarmTimer &&
      !this.myJoubeTimer &&
      !this.workers.length &&
      !this.hotCells.length
    ) {
      this.readyToOut = true;
    }
  } else if (this.unitName === "wood") {
    // woods
    if (
      (!this.lesorub ||
        !this.lesorub.target ||
        this.lesorub.target.persolalNumber !== this.persolalNumber ||
        this.lesorub.hp <= 0 ||
        !this.lesorub.cell ||
        this.lesorub.target.persolalNumber !== this.persolalNumber) &&
      this.hp > 0
    ) {
      this.lesorub = 0;
      this.readyToOut = true;
    }

    if (this.hp <= 0) {
      this.hp = 0;

      this.vibro = 0;
      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
        }

        allContinents[this.cell.continent].woods.splice(
          allContinents[this.cell.continent].woods.indexOf(this.cell.unit),
          1
        );

        this.cell.free = true;
        //this.cell.unit=0;
        //this.cell=0;
        freeLandObjects.splice(freeLandObjects.indexOf(this.cell.unit), 1);

        this.cell.unit = 0;
        this.cell = 0;
        //shahts.splice(shahts.indexOf(arg),1);
        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }
    } else {
      if (this.vibro) {
        this.vibro--;
      }
    }
  } else if (this.unitName === "shahta") {
    if (!this.gold && !this.workers.length) {
      this.hp = 0;
    }

    if (this.hp <= 0) {
      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = this.vertikal - 5; i <= this.vertikal + 5; i++) {
          for (let k = this.horizont - 5; k <= this.horizont + 5; k++) {
            if (gameFielg[i] && gameFielg[i][k]) {
              gameFielg[i][k].stopTownHoll.splice(
                gameFielg[i][k].stopTownHoll.indexOf(this.cell.unit),
                1
              );
            }
          }
        }

        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;
        freeLandObjects.splice(freeLandObjects.indexOf(this.cell.unit), 1);

        allContinents[this.cell.continent].shahts.splice(
          allContinents[this.cell.continent].shahts.indexOf(this.cell.unit),
          1
        );

        shahts.splice(shahts.indexOf(this.cell.unit), 1);

        this.cell.unit = 0;
        this.cell = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    for (let i = 0; i < this.hotCells.length; i++) {
      let obj = this.hotCells[i];

      if (obj.timer) {
        obj.timer--;
      } else {
        this.hotCells.splice(i, 1);
        i--;
      }
    }

    if (!this.workers.length && this.gold && !this.hotCells.length) {
      this.readyToOut = true;
    }

    for (let i = 0; i < this.workers.length; i++) {
      if (this.workers[i].workTimeSahta) {
        this.workers[i].target = 0;
        this.workers[i].workTimeSahta--;
      } else {
        let outCell = this.getOutCell();

        this.hotCells.push(outCell);
        outCell.timer = 50;

        //console.log(this.waitTime);
        if (!outCell) {
          outCell = this.extreamGetOutCell();
        }

        if (outCell) {
          this.workers[i].waitTime--;

          //console.log(outCell.outPrioritet+" "+outCell.horizont);

          this.workers[i].cell = gameFielg[outCell.vertikal][outCell.horizont];

          this.workers[i].horizont = this.workers[i].cell.horizont;
          this.workers[i].vertikal = this.workers[i].cell.vertikal;
          this.workers[i].x = this.workers[i].cell.x;
          this.workers[i].y = this.workers[i].cell.y;
          this.workers[i].cell.unit = this.workers[i];
          this.workers[i].cell.free = false;

          this.workers[i].cellUpdate();
          //this.animY=525;

          this.workers[i].moveVektor = outCell.moveVektorOut;

          if (!this.workers[i].moveVektor) {
            this.workers[i].moveVektor = "up";
          }

          //getMinDistanse=function(unit,object)

          this.workers[i].target = getMinDistanse(
            this.workers[i],
            this.workers[i].fatherFraction.townHolls
          );
          this.workers[i].workTimeSahta = 100;
          this.workers[i].myJoube = "shahter";

          if (!this.workers[i].active) {
            this.workers[i].fatherFraction.activeUnits.push(this.workers[i]);
            this.workers[i].active = true;
          }

          this.workers.splice(i, 1);

          i--;
        }
      } //
    }
  } else if (this.unitName === "townHoll") {
    if (this.hp <= 0 || this.buildready <= 0) {
      this.hp = 0;
      this.buildready = 0;
      this.alarmTimer = 0;

      if (this.distroyTimer === 501) {
        for (let i = 0; i < this.workers.length; i++) {
          if (this.workers[i].waitTime === 30) {
            //

            let unit = this.workers[i];

            unit.readyToOut = true;
            unit.katastrofa = true;
            unit.hp = 0;

            let fraction = this.fatherFraction;

            //if(fraction.peoples.indexOf(unit)!==-1){fraction.peoples.splice(fraction.peoples.indexOf(unit),1);};
            //if(fraction.batraks.indexOf(unit)!==-1){fraction.batraks.splice(fraction.batraks.indexOf(unit),1);};
            //if(fraction.batraksOnGolg.indexOf(unit)!==-1){fraction.batraksOnGolg.splice(fraction.batraksOnGolg.indexOf(unit),1);};
            //if(fraction.batraksOnWood.indexOf(unit)!==-1){fraction.batraksOnWood.splice(fraction.batraksOnWood.indexOf(unit),1);};
            //if(fraction.activeUnits.indexOf(unit)!==-1){fraction.activeUnits.splice(fraction.activeUnits.indexOf(unit),1);};
          }
        }

        this.workers = [];

        //console.log("delete");
      }

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;

        //console.log(arg);

        if (this.fatherFraction.townHolls.indexOf(this.cell.unit) !== -1) {
          this.fatherFraction.townHolls.splice(
            this.fatherFraction.townHolls.indexOf(this.cell.unit),
            1
          );
          //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

          //console.log("delete");
        }

        this.readyToOut = true;
        this.cell.unit = 0;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }

        //console.log(this.fatherFraction.townHolls);
      }
      //console.log(this.workers);

      return;
    }

    //console.log(this.myJoubeTimer);
    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      //if(this.unitName==="farm"){this.fatherFraction.maxUnits+=5;	};

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    if (this.iComplite) {
      if (this.myJoubeTimer > 0 && this.hp > 0) {
        this.myJoubeTimer--;
      }

      if (this.myJoubeTimer === 0) {
        if (this.myJoube === "batrak") {
          ////////////////////////////////
          //let unit=new Unit(1,0,0,2)

          this.myJoubeTimer = false;

          //   if(this.waitTime===30){

          //console.log(this.townHolls[0]);
          // this.target.cellToOut

          let outCell = this.getOutCell();

          //console.log(this.waitTime);

          let unit = new Unit(
            1,
            0,
            0,
            2,
            this.fatherFraction.fraction,
            this.fatherFraction.nation
          );

          //console.log(this.fatherFraction.fraction);

          allUnits++;
          unit.persolalNumber = allUnits;

          //this.waitTime--;
          if (!outCell) {
            outCell = this.extreamGetOutCell();
          }

          //console.log(outCell.outPrioritet+" "+outCell.horizont);
          if (outCell) {
            unit.cell = gameFielg[outCell.vertikal][outCell.horizont];

            unit.horizont = unit.cell.horizont;
            unit.vertikal = unit.cell.vertikal;
            unit.x = unit.cell.x;
            unit.y = unit.cell.y;
            unit.cell.unit = unit;
            unit.cell.free = false;

            //this.animY=0;
            //unit.iStand=true;
            unit.moveVektor = outCell.moveVektorOut;
            //unit.target=0;
            unit.fatherFraction = this.fatherFraction;

            unit.initialization = true;

            unit.cellUpdate();

            unit.damagePointX = unit.cell.x + 25;
            unit.damagePointY = unit.cell.y + 25;

            if (this.fatherFraction.control === "player") {
              select_sound(unit, "ready");
            }

            this.fatherFraction.peoples.push(unit);
          }
          //console.log(this.)

          //console.log(arg.horizont+" "+this.horizont)	;

          // }

          /////////////////////////////////
        } else if (this.myJoube === "levelUpgrade") {
          this.level++;

          //this.imageToDraw=0;
          this.myJoube = false;

          ////////////////////////////////

          if (this.level === 2) {
            if (this.fatherFraction.nation === "orc") {
              this.face_animY = 2000;
              this.menu_name = "Stronghold";
            } else {
              this.face_animY = 2200;
              this.menu_name = "Keep";
            }

            this.hp = (3000 * (this.hp * 100)) / this.hpfull / 100;

            this.hpfull = 3000;
            this.buildready = this.hpfull;
          } else if (this.level === 3) {
            if (this.fatherFraction.nation === "orc") {
              this.face_animY = 2100;
              this.menu_name = "Fortress";
            } else {
              this.face_animY = 2300;
              this.menu_name = "Castle";
            }

            this.hp = (4000 * (this.hp * 100)) / this.hpfull / 100;

            this.hpfull = 4000;
            this.buildready = this.hpfull;
          }

          /////////////////////////////////////
        }
      }

      for (let i = 0; i < this.hotCells.length; i++) {
        let obj = this.hotCells[i];

        if (obj.timer) {
          obj.timer--;
        } else {
          this.hotCells.splice(i, 1);
          i--;
        }
      }

      if (this.workers.length) {
        //console.log("");

        for (let i = 0; i < this.workers.length; i++) {
          if (this.workers[i].workTimeSahta) {
            //this.workers[0].target=0;
            this.workers[i].workTimeSahta--;
          } else {
            let outCell = this.getOutCell();

            //console.log(this.waitTime);
            if (!outCell) {
              outCell = this.extreamGetOutCell();
            }

            if (outCell) {
              this.workers[i].waitTime--;

              outCell.timer = 50;

              this.hotCells.push(outCell);

              //console.log(outCell.outPrioritet+" "+outCell.horizont);

              this.workers[i].cell =
                gameFielg[outCell.vertikal][outCell.horizont];

              this.workers[i].horizont = this.workers[i].cell.horizont;
              this.workers[i].vertikal = this.workers[i].cell.vertikal;
              this.workers[i].x = this.workers[i].cell.x;
              this.workers[i].y = this.workers[i].cell.y;
              this.workers[i].cell.unit = this.workers[i];
              this.workers[i].cell.free = false;

              this.workers[i].cellUpdate();
              //this.animY=525;

              this.workers[i].moveVektor = outCell.moveVektorOut;

              if (!this.workers[i].moveVektor) {
                this.workers[i].moveVektor = "up";
              }

              //getMinDistanse=function(unit,object)

              this.workers[i].workTimeSahta = 100;

              if (this.workers[i].myJoube === "shahter") {
                this.workers[i].myJoube = "shahter";
                this.workers[i].target = getMinDistanse(
                  this.workers[i],
                  allContinents[this.cell.continent].shahts
                );
              } else if (this.workers[i].myJoube === "lesorub") {
                this.workers[i].myJoube = "lesorub";
                this.workers[i].target = getMinDistanse(
                  this.workers[i],
                  allContinents[this.cell.continent].woods
                );
              }

              if (!this.workers[i].active) {
                this.workers[i].fatherFraction.activeUnits.push(
                  this.workers[0]
                );
                this.workers[0].active = true;
              }

              this.workers.splice(i, 1);

              i--;
            }
          } //
        }
      }
    }

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (
      this.iComplite &&
      this.hp === this.hpfull &&
      !this.myJoubeTimer &&
      !this.alarmTimer &&
      !this.workers.length &&
      !this.hotCells.length
    ) {
      this.readyToOut = true;

      //console.log("build_out "+this.myJoubeTimer);
    }
  } else if (this.unitName === "farm") {
    if (this.hp <= 0 || this.buildready <= 0) {
      if (this.distroyTimer === 501) {
        if (this.fatherFraction.control === "comp") {
          this.fatherFraction.createShablon.farms[
            this.iBornCresteShablonNumber
          ].iBorn = false;
        }

        if (this.buildready === this.hpfull) {
          this.fatherFraction.maxUnits -= 15;
          this.fatherFraction.maxShips--;
        }
      }

      this.hp = 0;
      this.buildready = 0;
      this.alarmTimer = 0;

      this.distroyTimer--;

      if (this.distroyTimer === 0) {
        for (let i = 0; i < this.myCells.length; i++) {
          this.myCells[i].vossalObj = 0;
          this.myCells[i].free = true;
        }

        //this.cell.unit=0;
        this.fatherFraction.farms.splice(
          this.fatherFraction.farms.indexOf(this.cell.unit),
          1
        );
        //this.fatherFraction.buildings.splice(this.fatherFraction.buildings.indexOf(this.cell.unit),1);

        this.cell.unit = 0;
        this.cell = 0;

        this.readyToOut = true;

        for (let k = 0; k < this.contaktCells.length; k++) {
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.splice(
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.indexOf(this.contaktCells[k]),
            1
          );

          //console.log(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k]));
        }
      }

      return;
    }

    if (this.buildready >= this.hpfull && !this.iComplite) {
      //this.builders[0].iGoBuild=false;

      this.builders = [];

      this.fatherFraction.maxUnits += 15;
      this.fatherFraction.maxShips++;

      this.iComplite = true;
      //console.log(this.fatherFraction.maxUnits);
    }

    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);

        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );

        this.agressor = 0;
      }

      this.alarmTimer--; //console.log("alarm");
    }

    if (this.iComplite && this.hp === this.hpfull && !this.alarmTimer) {
      this.readyToOut = true;
    }

    //console.log(this.distroyTimer);
  }
};
