/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-undef */
Obj.prototype.progCenterDrawPoint = function () {
  /*
  if(player){
  centerDrawPoint.cellObj.vertikal=player.peoples[0].cell.vertikal;
  centerDrawPoint.cellObj.horizont=player.peoples[0].cell.horizont;
  this.cellObj=player.peoples[0].cell;
  };
  */

  let vertikal; //= this.cellObj.vertikal;
  let horizont; //= this.cellObj.horizont;

  if (this.cellObj) {
    vertikal = this.cellObj.vertikal;
    horizont = this.cellObj.horizont;
  } else {
    return;
  }
  // let od=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

  /// *

  // let check=0; oil

  od = [];

  for (let i = 0; i < 1500; i++) {
    od.push([]);
  }

  od_grunt = [];

  for (let i = 0; i < 8; i++) {
    od_grunt.push([]);
  }

  // let stena=[];

  for (let i = vertikal - 9; i < vertikal + 9; i++) {
    // cellY++;

    for (let k = horizont + 9; k > horizont - 10; k--) {
      // check++;
      if (gameFielg[i] && gameFielg[i][k]) {
        const cell = gameFielg[i][k];

        od_grunt[cell.sloy].push(cell);

        // if(gameFielg[i][k].pen.length){

        for (let p = 0; p < cell.pen.length; p++) {
          onDrawTrups.push(cell.pen[p]);
        }
        // };

        for (let p = 0; p < cell.water_sleds.length; p++) {
          water_sleds_onDraw.push(cell.water_sleds[p]);
        }

        let drawY;

        let { unit } = cell;

        if (cell.vossalObj) {
          unit = cell.vossalObj;
        }
        // if(gameFielg[i][k].oil){unit=gameFielg[i][k].oil;};

        if (unit && !unit.myDraw) {
          // if(!unit.s){
          drawY = unit.y;

          if (unit.type === "wood") {
            drawY = unit.drawY + 100;
          }

          unit.myDraw = true;

          // if(od[Math.round(drawY+removeY)+400].indexOf(unit)===-1){

          if (unit.gabarit > 50) {
            drawY -= 50;
          }

          if (unit.gabarit === 150) {
            drawY += 50;
          }

          if (!unit.s) {
            if (od[Math.round(drawY + removeY) + 400]) {
              od[Math.round(drawY + removeY) + 400].push(unit);
            }
          } else {
            od[0].push(unit);
          }
          // }
          // else{
          // od[0].push(unit);
          // };
          // };
          // }
          // else{stena.push(unit)};
        }

        for (let dr = 0; dr < cell.dragoonDamages.length; dr++) {
          const drawY = cell.dragoonDamages[dr].y;

          // if(od[Math.round(drawY+removeY)+400]){

          od[Math.round(drawY + removeY) + 400].push(cell.dragoonDamages[dr]);

          // };
        }

        if (cell.dragoon && fly.indexOf(cell.dragoon) === -1) {
          fly.push(cell.dragoon);
        }
      }
    }
  }

  /*
  for(let i=0;i<stena.length;i++){

      let unit=stena[i];

  let drawY=unit.y;

  unit.myDraw=true;

  if(od[0]){
  od[0].unshift(unit);
  }

  };
  */
  //* /

  // pausa=1;

  // console.log(check);
  /// ////////////////////////////////////////////////////////////////////////
  // console.log(obj.x)

  const x = Math.floor((Math.abs(removeX) + 350) / 50); // Math.floor((obj.x-removeX)/50);//(this.cellObj.x/50)-8;
  const y = Math.floor((Math.abs(removeY) + 350) / 50); // Math.floor((obj.y-removeY)/50);//(this.cellObj.y/50)-8;

  // console.log(y);

  if (gameFielg[y] && gameFielg[y][x]) {
    obj.cell = gameFielg[y][x];
  }

  // ctx.fillStyle="violet";
  // ctx.fillRect(this.cellObj.x+removeX,this.cellObj.y+removeY,50,50);
};

Obj.prototype.drawSpecial = function () {
  this.myDraw = false;

  if (this.type === 1) {
    ctx.drawImage(
      tree_grunt,
      this.animX,
      this.animY,
      200,
      200,
      this.x + removeX - 25 + this.ranX,
      this.y + removeY - 25 + this.ranY,
      100,
      100
    );
  }
};

Obj.prototype.draw_water = function () {
  this.myDraw = false;

  if (this.water) {
    //console.log("ok");pausa=1
    //console.log(this.gabarit); pausa=1;

    this.animTimer++;

    if (this.animTimer === 1000) {
      this.animTimer = 0;
    }

    this.animY = 0;
    let pribKoof = 3;
    let koof = 0.3;

    let dop_gab = 1;

    if (this.priboy_line) {
      this.animY = 100;
      pribKoof = 1;
      koof = 0.5;

      dop_gab = 1.5;
    }

    //ctx.globalAlpha=this.glblAlpha_2;
    //ctx.fillStyle="blue";
    //ctx.fillRect(this.x+10+removeX,this.y+10+removeY,30,30);

    if (this.vector) {
      this.gabarit += koof / pribKoof;
    } else {
      this.gabarit -= koof / 3;
    }

    //ocean

    let gabarit = this.gabarit * dop_gab;

    ctx.globalAlpha = this.glblAlpha_2;
    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      100,
      this.x - (gabarit - 50) / 2 + removeX,
      this.y - (gabarit - 50) / 2 + removeY,
      gabarit,
      gabarit
    );
    ctx.glblAlpha = 1;

    ctx.globalAlpha = this.glblAlpha;
    ctx.drawImage(
      this.imageToDraw,
      this.animX_2,
      this.animY_2,
      100,
      100,
      this.x - (gabarit - 50) / 2 + removeX,
      this.y - (gabarit - 50) / 2 + removeY,
      gabarit,
      gabarit
    );
    ctx.globalAlpha = 1;

    this.glblAlpha -= 0.01; //05;

    if (this.glblAlpha <= 0.03) {
      this.glblAlpha = 1;

      this.animX_2 = this.animX;
      this.animY_2 = this.animY;

      this.animX = Math.floor(Math.random() * 8) * 100;
      this.animY = 0; //Math.floor(Math.random()*2)*100;

      //pausa=1;
    }

    this.glblAlpha_2 = 1 - this.glblAlpha;

    //console.log(this.gabX)	;pausa=1

    if (this.gabarit >= 85) {
      this.vector = 0;
    }

    if (this.gabarit <= 75) {
      this.vector = 1;
    }
    //console.log("water");

    if (this.oil) {
      this.oil.draw();
    }

    //return;
  } else if (this.water_line) {
    //pesok

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      100,
      this.x - 35 + removeX,
      this.y - 35 + removeY,
      120,
      120
    );

    //ctx.drawImage(,0,0,100,100,(this.x+removeX)-25,(this.y+removeY)-25,100,100);

    //	return;
  }

  //ctx.strokeStyle="red";
  //ctx.strokeRect(this.x+removeX,this.y+removeY,50,50);
};

Obj.prototype.draw2 = function () {
  this.myDraw = false;

  if (this.type === 0 || this.under_wood) {
    //sumexpe
    if (!this.water_line) {
      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        0,
        100,
        100,
        this.x + removeX - 35,
        this.y + removeY - 35,
        120,
        120
      );
    } else if (this.water_line) {
      ctx.drawImage(
        this.imageToDraw,
        this.animX_wl,
        this.animY_w1,
        100,
        100,
        this.x + removeX - 25,
        this.y + removeY - 25,
        100,
        100
      );
    } else {
      ctx.drawImage(
        this.imageToDraw,
        0,
        0,
        100,
        100,
        this.x + removeX,
        this.y + removeY,
        50,
        50
      );
    }
    //ctx.strokeStyle="red";
    //ctx.strokeRect(this.x+removeX,this.y+removeY,50,50);
    //console.log(this.animX);
  } else if (this.type === 1) {
    ctx.drawImage(
      this.imageToDraw,
      0,
      0,
      100,
      100,
      this.x + removeX - 25,
      this.y + removeY - 25,
      100,
      100
    );
    //ctx.drawImage(tree_grunt,0,0,800,800,this.x+removeX-12,this.y+removeY-12,75,75);

    //sumexpe

    //ctx.drawImage(this.imageToDraw,0,0,100,100,this.x+removeX,this.y+removeY,50,50);

    //onDrawSpecial.push(gameFielg[this.vertikal][this.horizont]);
  }

  this.draw_water();

  /*
  if(this.dragoon){
      
          ctx.fillStyle="green";
  ctx.fillRect(this.x+removeX,this.y+removeY,50,50);	
      
  };
  */

  /*
  for(let i=0;i<this.iContaktWith.length;i++){
      
                  ctx.textBaseline="top";
  ctx.textAlign="left";
  ctx.font="15px Areal";	
  ctx.fillStyle="black";
      
      if(this.iContaktWith[i].father.unitStatus==="life"){ctx.fillStyle="red";};
      
      
  
  ctx.fillText(this.iContaktWith[i].father.persolalNumber,this.x+removeX,this.y+removeY+i*15);
      
  };
  */

  /*	
  if(this.father){
      
      if(this.father.vertikal===this.vertikal-1&&this.father.horizont===this.horizont){
          
          ctx.drawImage(ve,0,0,100,100,this.x+removeX,this.y+removeY,50,50);
          
      }
      else if(this.father.vertikal===this.vertikal-1&&this.father.horizont===this.horizont+1){
          
          ctx.drawImage(ve,100,0,100,100,this.x+removeX,this.y+removeY,50,50);
          
      }
      else if(this.father.vertikal===this.vertikal&&this.father.horizont===this.horizont+1){
          
          ctx.drawImage(ve,200,0,100,100,this.x+removeX,this.y+removeY,50,50);
          
      }
      else if(this.father.vertikal===this.vertikal+1&&this.father.horizont===this.horizont+1){
          
          ctx.drawImage(ve,300,0,100,100,this.x+removeX,this.y+removeY,50,50);
          
      }
      else if(this.father.vertikal===this.vertikal+1&&this.father.horizont===this.horizont){
          
          ctx.drawImage(ve,400,0,100,100,this.x+removeX,this.y+removeY,50,50);
          
      }
      else if(this.father.vertikal===this.vertikal+1&&this.father.horizont===this.horizont-1){
          
          ctx.drawImage(ve,500,0,100,100,this.x+removeX,this.y+removeY,50,50);
          
      }
      else if(this.father.vertikal===this.vertikal&&this.father.horizont===this.horizont-1){
          
          ctx.drawImage(ve,600,0,100,100,this.x+removeX,this.y+removeY,50,50);
          
      }
      else if(this.father.vertikal===this.vertikal-1&&this.father.horizont===this.horizont-1){
          
          ctx.drawImage(ve,700,0,100,100,this.x+removeX,this.y+removeY,50,50);
          
      }
      
      
  };	
  
  
  //*/

  /*	
  if(this.continent){	
  
          ctx.textBaseline="top";
  ctx.textAlign="left";
  ctx.font="20px Areal";	
  ctx.fillStyle="red";
      
  
  //ctx.fillText(this.f,this.x+removeX,this.y+removeY);
  
  ctx.fillText(this.continent,this.x+removeX,this.y+removeY+35);
  
  //ctx.fillText(this.h,this.x+removeX+30,this.y+removeY+35);	
      
  };	
  */

  /*	
      if(this.h>=0||isNaN(this.h)){
          
          
          ctx.textBaseline="top";
  ctx.textAlign="left";
  ctx.font="15px Areal";	
  ctx.fillStyle="red";
      
  
  ctx.fillText(this.f,this.x+removeX,this.y+removeY);
  
  ctx.fillText(this.g,this.x+removeX,this.y+removeY+35);
  
  ctx.fillText(this.h,this.x+removeX+30,this.y+removeY+35);		
          
          
      };
  //*/
};

Obj.prototype.draw = function () {
  let koofX = width / document.documentElement.clientWidth;
  let koofY = height / document.documentElement.clientHeight;

  this.x = x * koofX;
  this.y = y * koofY;

  //ctx3.fillStyle="red";
  //ctx3.fillRect(this.x,this.y,10,10);

  //console.log(player)

  if (player) {
    if (player.nation === "orc") {
      ctx3.drawImage(player.cursorOk, 0, 0, 26, 32, this.x, this.y, 50, 50);
    } else {
      ctx3.drawImage(player.cursorOk, 0, 0, 26, 32, this.x - 5, this.y, 50, 50);
    }
  } else {
    ctx3.drawImage(human_cursor_ok, 0, 0, 26, 32, this.x - 5, this.y, 50, 50);
  }

  //ctx3.drawImage(human_cursor_ok,0,0,28,32,menu_kursor[0]-3,menu_kursor[1],40,40);

  //console.log("x "+x+" y "+y+obj.x+" obj.x "+" obj.y "+obj.y);
};

Obj.prototype.drawRadar = function () {
  if (!this.drawGabaritRadar) {
    this.drawGabaritRadar = 130 / gameFielgMap.length;

    this.radarX = radar.x + this.horizont * this.drawGabaritRadar;
    this.radarY = radar.y + this.vertikal * this.drawGabaritRadar;
  }

  let unit = false;

  let imageToDraw = false;

  if (this.unit) {
    unit = this.unit;
  } else if (this.vossalObj) {
    unit = this.vossalObj;
  }

  if (this.dragoon) {
    unit = this.dragoon;
  }

  if (!unit) {
    if (this.water) {
      ctx2.fillStyle = "#18AFFF";

      //imageToDraw=ocean;
    } else {
      ctx2.fillStyle = "#7DB5A6";
      imageToDraw = sumexpe;
    }
  } else {
    if (unit.unitName === "wood") {
      ctx2.fillStyle = "#003f00";
      imageToDraw = unit.imageToDraw;
    } else if (unit.unitName === "shahta") {
      ctx2.fillStyle = "#D6BB3D";
    } else if (unit.type === "stena") {
      ctx2.fillStyle = "white";
    } else if (unit.type === "gora") {
      ctx2.fillStyle = "grey";
    } else if (!unit.neitral) {
      if (unit.fatherFraction.fraction === "blackOrcs") {
        ctx2.fillStyle = "#0F0F0F";
        //imageToDraw=unit.imageToDraw
      } else if (unit.fatherFraction.fraction === "redOrcs") {
        ctx2.fillStyle = "#DF434C";
        //imageToDraw=unit.imageToDraw
      } else if (unit.fatherFraction.fraction === "lazurOrcs") {
        ctx2.fillStyle = "#00FFFF";
        //imageToDraw=unit.imageToDraw
      } else if (unit.fatherFraction.fraction === "h_blue") {
        ctx2.fillStyle = "blue";
        //imageToDraw=unit.imageToDraw
      }
    }
  }

  if (this.oil) {
    ctx2.fillStyle = "#4B0082";

    ctx2.fillRect(
      this.radarX,
      this.radarY,
      this.drawGabaritRadar,
      this.drawGabaritRadar
    );
  } else if (unit) {
    ctx2.fillRect(
      this.radarX,
      this.radarY,
      this.drawGabaritRadar,
      this.drawGabaritRadar
    );
  } else {
    ctx2.drawImage(
      this.imageToDraw,
      40,
      40,
      10,
      10,
      this.radarX,
      this.radarY,
      this.drawGabaritRadar * 1.1,
      this.drawGabaritRadar * 1.1
    );

    //ctx2.fillRect(this.radarX,this.radarY,this.drawGabaritRadar,this.drawGabaritRadar);
  }

  /*
  if(this.imageToDraw){imageToDraw=this.imageToDraw;};
  
  
  if(!imageToDraw){	
      ctx2.fillRect(this.radarX,this.radarY,this.drawGabaritRadar,this.drawGabaritRadar);	
  }else{
          
  
  ctx2.drawImage(this.imageToDraw,this.animX,0,100,100,this.radarX,this.radarY,this.drawGabaritRadar,this.drawGabaritRadar);	
      
  
      
  }
  */
};

Obj.prototype.getVektors_ii = function (arg, target, unit, luchnik) {
  if (!gameFielg[this.vertikal] || !gameFielg[this.vertikal][this.horizont]) {
    return;
  }

  /*	
  if(isNaN(this.f)){
  
  console.log(gameFielg[this.vertikal][this.horizont]);
  
  this.f=0;
  this.g=0;
  this.h=0;
    
    };	
  */
  //if(luchnik){console.log(luchnik);};

  //console.log(arg)

  //if(unit.fatherFraction.control==="player"){
  //console.log("scan");
  //};

  if (
    unit.warrior &&
    (unit.target ||
      (unit.handTarget && unit.fatherFraction.control === "comp")) &&
    !unit.fly
  ) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.warrior &&
        this.iContaktWith[d].father.hp > 0 &&
        this.iContaktWith[d].father.fatherFraction.union !==
          unit.fatherFraction.union
      ) {
        father.finish = gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        //console.log("ura");
        //unit.iCanGet=true;

        return;
      }
    }
  }

  if (target && !luchnik) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.persolalNumber === target.persolalNumber
      ) {
        father.finish = gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        //console.log("ura");
        unit.iCanGet = true;

        return;
      }
    }

    /*	
      
      if(this.vertikal===target.contaktCells[d].vertikal&&this.horizont===target.contaktCells[d].horizont){
        
      //father.finish.myWay(gameFielg[i][k]);	
        
      father.finish=gameFielg[this.vertikal][this.horizont];
  
      father.finish.myWay(father.finish);
        
        
      console.log("ura");	
        
      return;	
        
        //console.log("uh")
        
      };
      
      
    */
  }

  //left_Up left_

  let koof = 0;

  for (let i = this.vertikal - 1; i < this.vertikal - 1 + 3; i++) {
    for (let k = this.horizont - 1; k < this.horizont - 1 + 3; k++) {
      //if(isNaN(this.f)){console.log(this.father.f);};

      /*		
      
  if(gameFielg[i]&&gameFielg[i][k]&&gameFielg[i][k].startFinish.length&&
  (gameFielg[i][k].startFinish[0].vertikal!==father.vertikal||
  gameFielg[i][k].startFinish[0].horizont!==father.horizont||
  gameFielg[i][k].startFinish[1].vertikal!==father.finish.vertikal||
  gameFielg[i][k].startFinish[1].horizont!==father.finish.horizont
  )){
  
  
    
  gameFielg[i][k].inUse=false;
  gameFielg[i][k].h=0;
  gameFielg[i][k].f=0;
  gameFielg[i][k].g=0;	
    
  };
    
  */
      if (
        gameFielg[i] &&
        gameFielg[i][k] &&
        gameFielg[i][k].forCheck !== forCheck //||
        //(gameFielg[i]&&gameFielg[i][k]&&isNaN(gameFielg[i][k].h))||
        //(gameFielg[i]&&gameFielg[i][k]&&isNaN(gameFielg[i][k].f))
      ) {
        gameFielg[i][k].inUse = false;
        gameFielg[i][k].h = 0;
        gameFielg[i][k].f = 0;
        gameFielg[i][k].g = 0;
      }
      /*
  let aa;
  let bb;
  let cc;
  
  
  if(arg&&gameFielg[i]&&gameFielg[i][k]){
    
    aa=(arg.x+50)-(gameFielg[i][k].x+50);
    bb=(arg.y+50)-(gameFielg[i][k].y+50);
    
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
  
  
  if(!unit.fly&&arg&&gameFielg[i]&&gameFielg[i][k]&&gameFielg[i][k].unit&&gameFielg[i][k].unit.unitStatus==="life"){
    
  let a=unit.x-gameFielg[i][k].x;
  let b=unit.y-gameFielg[i][k].y;
  
  dis=Math.sqrt(a*a+b*b);
  
  if(dis<arg){okey=false;};
  
  };
  //*/

      ///////////////

      ///*
      let ok2 = false;

      let a, c, b;

      //console.log(unit.goGroop)
      //floorGlobalTimer

      if (
        gameFielg[i] &&
        gameFielg[i][k] &&
        ((gameFielg[i][k].unit && !gameFielg[i][k].unit.neitral) ||
          (gameFielg[i][k].vossalObj && !gameFielg[i][k].vossalObj.neitral))
      ) {
        ok2 = true; //console.log("pizdez");
      }

      //console.log()
      //*/

      let hart =
        gameFielg[i] &&
        gameFielg[i][k] &&
        !unit.fly &&
        (gameFielg[i][k].free ||
          //||
          //(!gameFielg[i][k].free&&gameFielg[i][k].unit&&gameFielg[i][k].unit.unitStatus==="life"&&okey)
          ok2);

      ///////////////////////
      //if(!arg){okey=false;};
      //console.log(arg);
      if (
        hart &&
        !gameFielg[i][k].inUse &&
        !gameFielg[i][k].f
        //&&
        //!(gameFielg[i][k].vertikal==this.vertikal&&gameFielg[i][k].horizont==this.horizont)
      ) {
        let a = Math.abs(father.finish.horizont - gameFielg[i][k].horizont);
        let b = Math.abs(father.finish.vertikal - gameFielg[i][k].vertikal);

        let c = a + b;

        //console.log(c)
        //if(!father.finish.horizont){console.log("koshmar " +father.finish.horizont);};/////////////!!!!!!!!!!!!!!!!

        if (koof === 0) {
          gameFielg[i][k].g = this.g + 14;
        }
        if (koof === 1) {
          gameFielg[i][k].g = this.g + 10;
        }
        if (koof === 2) {
          gameFielg[i][k].g = this.g + 14;
        }

        if (koof === 3) {
          gameFielg[i][k].g = this.g + 10;
        }
        if (koof === 5) {
          gameFielg[i][k].g = this.g + 10;
        }

        if (koof === 6) {
          gameFielg[i][k].g = this.g + 14;
        }
        if (koof === 7) {
          gameFielg[i][k].g = this.g + 10;
        }
        if (koof === 8) {
          gameFielg[i][k].g = this.g + 14;
        }

        //koof++;
        //console.log(c2);

        gameFielg[i][k].father = gameFielg[this.vertikal][this.horizont];

        //this.vektors.push(gameFielg[i][k]);

        vektors.push(gameFielg[i][k]);

        allVektors.push(gameFielg[i][k]);

        gameFielg[i][k].h = c * 10; //+c2//+v+h;

        gameFielg[i][k].f = gameFielg[i][k].g + gameFielg[i][k].h;

        //gameFielg[i][k].startFinish=[father,father.finish];

        gameFielg[i][k].forCheck = forCheck;

        /*	
    
  for(let d=0;d<target.contaktCells.length;d++){
      
      if(gameFielg[i][k].vertikal===target.contaktCells[d].vertikal&&gameFielg[i][k].horizont===target.contaktCells[d].horizont){
        
      //father.finish.myWay(gameFielg[i][k]);	
        
      //father.finish=gameFielg[i][k];
  
      //father.finish.myWay(father.finish);
        
      //target.stop=true;	
        
        
        console.log(gameFielg[i][k])
        
        break
        
      };
      
      
    };	
      
  //*/

        ///*
        if (
          gameFielg[i][k].vertikal === father.finish.vertikal &&
          gameFielg[i][k].horizont === father.finish.horizont
        ) {
          //console.log("sucssess!!!!!!!!!!!!!!!");

          father.finish.myWay(father.finish);
          //arg.way=father.way;

          //vektors=[];
          //allVektors=[];
          //father=0;

          //if(unit.type==="dragoon"){console.log(father);pausa=1;};
        }
      } else if (
        hart &&
        !gameFielg[i][k].inUse &&
        gameFielg[i][k].f &&
        !(
          gameFielg[i][k].vertikal == this.vertikal &&
          gameFielg[i][k].horizont == this.horizont
        )
      ) {
        //gameFielg[i][k].startFinish=[father,father.finish];
        gameFielg[i][k].forCheck = forCheck;

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

        if (g < gameFielg[i][k].g) {
          gameFielg[i][k].g = g;

          let a = Math.abs(father.finish.horizont - gameFielg[i][k].horizont);
          let b = Math.abs(father.finish.vertikal - gameFielg[i][k].vertikal);

          let c = a + b;

          gameFielg[i][k].father = gameFielg[this.vertikal][this.horizont];

          gameFielg[i][k].h = c * 10; //+c2//+v+h;

          gameFielg[i][k].f = gameFielg[i][k].g + gameFielg[i][k].h;

          //console.log(gameFielg[i][k].f);
        }

        //koof++;
      }
      koof++;
    }
  }
};

Obj.prototype.getVektorsSweeme = function (arg, target, unit, luchnik) {
  /*	
  if(isNaN(this.f)){
  
  console.log(gameFielg[this.vertikal][this.horizont]);
  
  this.f=0;
  this.g=0;
  this.h=0;
    
    };	
  */
  //if(luchnik){console.log(luchnik);};
  //if(unit.type==="transport"){console.log(unit.persolalNumber);};

  //if(this.persolalNumber===unit.spe.persolalNumber){ // hold_position

  /*
      
            father.finish=gameFielg[this.vertikal][this.horizont];
  
      father.finish.myWay(father.finish);
              
      console.log("ura");	
    
        
      return;
      
  */

  //};

  //if(unit.type==="distroer"){
  //console.log(unit.go);
  //};

  if (
    unit.type === "distroer" ||
    unit.type === "linkor" ||
    unit.type === "turtle"
  ) {
    //console.log("scan");

    //console.log(unit.go);

    let target;

    if (unit.target) {
      target = unit.target;
    } else if (unit.handTarget) {
      target = unit.handTarget;
    }

    if (target) {
      let dis = get_distanse_on_lineyka(
        gameFielg[this.vertikal][this.horizont],
        100,
        target.cell,
        target.gabarit
      );

      if ((dis <= unit.seeing && target.visible) || dis <= 141.5) {
        father.finish = gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        //console.log("ura");
        //unit.tanker_iCanGet=true;

        return;
      }
    }
  }

  if (
    unit.type === "oil_tanker" &&
    unit.handTarget &&
    unit.handTarget.gabarit === 100
  ) {
    unit.check_way = true;

    if (
      get_distanse_on_lineyka(
        gameFielg[this.vertikal][this.horizont],
        100,
        unit.handTarget.cell,
        unit.handTarget.gabarit
      ) <= 141.5
    ) {
      father.finish = gameFielg[this.vertikal][this.horizont];

      father.finish.myWay(father.finish);

      //console.log("ura");
      unit.tanker_iCanGet = true;

      return;
    }
  } else if (
    unit.type === "oil_tanker" &&
    unit.handTarget &&
    unit.handTarget.gabarit === 150
  ) {
    unit.check_way = true;

    if (
      get_distanse_on_lineyka(
        gameFielg[this.vertikal][this.horizont],
        100,
        unit.handTarget.cell,
        unit.handTarget.gabarit
      ) <= 176
    ) {
      father.finish = gameFielg[this.vertikal][this.horizont];

      father.finish.myWay(father.finish);

      //console.log(get_distanse_on_lineyka(gameFielg[this.vertikal][this.horizont],100,unit.handTarget.cell,unit.handTarget.gabarit));
      unit.tanker_iCanGet = true;

      return;
    }
  }

  let koof = 0;

  for (let i = this.vertikal - 1; i < this.vertikal - 1 + 3; i++) {
    for (let k = this.horizont - 1; k < this.horizont - 1 + 3; k++) {
      if (
        gameFielg[i] &&
        gameFielg[i][k] &&
        gameFielg[i][k].forCheck !== forCheck
      ) {
        gameFielg[i][k].inUse = false;
        gameFielg[i][k].h = 0;
        gameFielg[i][k].f = 0;
        gameFielg[i][k].g = 0;
      }

      let dis = false;
      let okey = true;

      let okSweeme = 0;

      let fin = false;

      for (let v = i - 1; v <= i; v++) {
        for (let h = k; h <= k + 1; h++) {
          if (gameFielg[v] && gameFielg[v][h]) {
            /*
  
  if(
  gameFielg[v][h].persolalNumber===unit.spe.persolalNumber
  ||
  gameFielg[v][h].persolalNumber===gameFielg[unit.spe.vertikal-1][unit.spe.horizont].persolalNumber
  ||
  gameFielg[v][h].persolalNumber===gameFielg[unit.spe.vertikal][unit.spe.horizont+1].persolalNumber
  ||
  gameFielg[v][h].persolalNumber===gameFielg[unit.spe.vertikal-1][unit.spe.horizont+1].persolalNumber
  ){
    //fin=true;
  };
  
  */

            let dis = get_distanse_on_lineyka(
              gameFielg[v][h],
              100,
              unit.cell,
              100
            );

            if (
              //gameFielg[v]&&gameFielg[v][h]
              //&&
              gameFielg[v][h].water &&
              !gameFielg[v][h].vossalObj &&
              (!gameFielg[v][h].unit ||
                gameFielg[v][h].unit.persolalNumber === unit.persolalNumber ||
                (gameFielg[v][h].unit.unitStatus === "life" &&
                  gameFielg[v][h].unit.way.length &&
                  dis > 141.5) ||
                ///*
                (unit.hold_position &&
                  gameFielg[v][h].unit.hold_position &&
                  gameFielg[v][h].unit.active &&
                  gameFielg[v][h].unit.fatherFraction.fraction ===
                    unit.fatherFraction.fraction &&
                  gameFielg[v][h].unit.hold_position === unit.hold_position &&
                  unit.goGroop_sweeme &&
                  unit.persolalNumber !== gameFielg[v][h].unit.persolalNumber &&
                  !unit.go) ||
                //&&
                //	gameFielg[v][h].unit.way.length
                (gameFielg[v][h].unit.fatherFraction !== unit.fatherFraction &&
                  unit.type !== "transport" &&
                  dis >= 600))

              //*/

              //||
              //gameFielg[v][h].persolalNumber===unit.spe.persolalNumber
            ) {
              okSweeme++;

              //	pausa=1
            } else {
              break;
            }
          }
        }
      }

      /*
  
  if(okSweeme<4//&&fin
  &&
  (
  this.persolalNumber===unit.spe.persolalNumber
  ||
  this.persolalNumber===gameFielg[unit.spe.vertikal-1][unit.spe.horizont].persolalNumber
  ||
  this.persolalNumber===gameFielg[unit.spe.vertikal][unit.spe.horizont+1].persolalNumber
  ||
  this.persolalNumber===gameFielg[unit.spe.vertikal-1][unit.spe.horizont+1].persolalNumber
  )
  ){
    
    
  
            father.finish=gameFielg[this.vertikal][this.horizont];
  
      father.finish.myWay(father.finish);
              
      //console.log(unit.persolalNumber);	
    
        
      return;	
    
    
    
  };
  
  
  
  */

      ////////////////////////////
      //*

      if (
        unit.type !== "transport" &&
        unit.fatherFraction.control === "comp" &&
        okSweeme < 4
      ) {
        if (
          unit.handCell &&
          get_distanse_on_lineyka(
            unit.handCell,
            100,
            gameFielg[this.vertikal][this.horizont],
            100
          ) <= 350
        ) {
          father.finish = gameFielg[this.vertikal][this.horizont];

          father.finish.myWay(father.finish);

          //console.log(unit.type);
          //unit.tanker_iCanGet=true;

          return;
        }
      }

      //*/

      //////////////////////////////////////////

      if (
        okSweeme >= 4 &&
        //||
        //finish_ok
        /*
  (
  !unit.fly
  &&
  (
  gameFielg[i][k].free||
  (!gameFielg[i][k].free&&gameFielg[i][k].unit&&gameFielg[i][k].unit.unitStatus==="life"&&okey)
  )
  )
  
  ||
  
  (
  unit.fly&&okDrag===4
  )
  
  //*/

        !gameFielg[i][k].inUse &&
        !gameFielg[i][k].f
        //&&
        //!(gameFielg[i][k].vertikal==this.vertikal&&gameFielg[i][k].horizont==this.horizont)
      ) {
        let a = Math.abs(father.finish.horizont - gameFielg[i][k].horizont);
        let b = Math.abs(father.finish.vertikal - gameFielg[i][k].vertikal);

        let c = a + b;

        //console.log(c)
        //if(!father.finish.horizont){console.log("koshmar " +father.finish.horizont);};/////////////!!!!!!!!!!!!!!!!

        if (koof === 0) {
          gameFielg[i][k].g = this.g + 14;
        }
        if (koof === 1) {
          gameFielg[i][k].g = this.g + 10;
        }
        if (koof === 2) {
          gameFielg[i][k].g = this.g + 14;
        }

        if (koof === 3) {
          gameFielg[i][k].g = this.g + 10;
        }
        if (koof === 5) {
          gameFielg[i][k].g = this.g + 10;
        }

        if (koof === 6) {
          gameFielg[i][k].g = this.g + 14;
        }
        if (koof === 7) {
          gameFielg[i][k].g = this.g + 10;
        }
        if (koof === 8) {
          gameFielg[i][k].g = this.g + 14;
        }

        //koof++;
        //console.log(c2);

        gameFielg[i][k].father = gameFielg[this.vertikal][this.horizont];

        //this.vektors.push(gameFielg[i][k]);

        vektors.push(gameFielg[i][k]);

        allVektors.push(gameFielg[i][k]);

        gameFielg[i][k].h = c * 10; //+c2//+v+h;

        gameFielg[i][k].f = gameFielg[i][k].g + gameFielg[i][k].h;

        //gameFielg[i][k].startFinish=[father,father.finish];

        gameFielg[i][k].forCheck = forCheck;

        /*	
    
  for(let d=0;d<target.contaktCells.length;d++){
      
      if(gameFielg[i][k].vertikal===target.contaktCells[d].vertikal&&gameFielg[i][k].horizont===target.contaktCells[d].horizont){
        
      //father.finish.myWay(gameFielg[i][k]);	
        
      //father.finish=gameFielg[i][k];
  
      //father.finish.myWay(father.finish);
        
      //target.stop=true;	
        
        
        console.log(gameFielg[i][k])
        
        break
        
      };
      
      
    };	
      
  //*/

        ///*
        if (
          gameFielg[i][k].vertikal === father.finish.vertikal &&
          gameFielg[i][k].horizont === father.finish.horizont
        ) {
          //console.log("sucssess!!!!!!!!!!!!!!!");

          father.finish.myWay(father.finish);

          unit.iCanGet = true;

          //arg.way=father.way;

          //vektors=[];
          //allVektors=[];
          //father=0;

          //if(unit.type==="dragoon"){console.log(father);pausa=1;};
          if (
            unit.fatherFraction.control === "comp" &&
            unit.type === "transport"
          ) {
            unit.trans_can_get = true;
          }
        }
      } else if (
        //gameFielg[i]&&gameFielg[i][k]&&
        ////////////////
        okSweeme === 4 && //////////////////////
        !gameFielg[i][k].inUse &&
        gameFielg[i][k].f &&
        !(
          gameFielg[i][k].vertikal == this.vertikal &&
          gameFielg[i][k].horizont == this.horizont
        )
      ) {
        //gameFielg[i][k].startFinish=[father,father.finish];
        gameFielg[i][k].forCheck = forCheck;

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

        if (g < gameFielg[i][k].g) {
          gameFielg[i][k].g = g;

          let a = Math.abs(father.finish.horizont - gameFielg[i][k].horizont);
          let b = Math.abs(father.finish.vertikal - gameFielg[i][k].vertikal);

          let c = a + b;

          gameFielg[i][k].father = gameFielg[this.vertikal][this.horizont];

          gameFielg[i][k].h = c * 10; //+c2//+v+h;

          gameFielg[i][k].f = gameFielg[i][k].g + gameFielg[i][k].h;

          //console.log(gameFielg[i][k].f);
        }

        //koof++;
      }
      koof++;
    }
  }
};

Obj.prototype.getVektors = function (arg, target, unit, luchnik) {
  if (!gameFielg[this.vertikal] || !gameFielg[this.vertikal][this.horizont]) {
    return;
  }

  /*	
  if(isNaN(this.f)){
  
  console.log(gameFielg[this.vertikal][this.horizont]);
  
  this.f=0;
  this.g=0;
  this.h=0;
    
    };	
  */
  //if(luchnik){console.log(luchnik);};

  //console.log(arg)

  //if(unit.ii_index){
  //	console.log("scan");
  //	};

  //if(unit.type==="dragoon"){
  //console.log("scan");
  //};

  /*
  if(unit.type==="dragoon"){
    
    if(unit.finish.dragoon){
      
      let dis=get_distanse_on_lineyka(target.cell,100,gameFielg[this.vertikal][this.horizont],100);
      
    if(dis<=300){
      
            father.finish=gameFielg[this.vertikal][this.horizont];
  
      father.finish.myWay(father.finish);
              
    
      //unit.iCanGet=true;	
        
      console.log("go");	
        
      return;
      
      
    };	
      
    };
    
  };
  
  */
  //if(unit.warrior){
  //console.log("scan");
  //};

  //if(unit.type===1){

  if (!unit.target && !unit.handTarget && unit.finish.unit) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.persolalNumber ===
        unit.finish.unit.persolalNumber
      ) {
        father.finish = gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        //console.log("ura");
        //unit.iCanGet=true;

        return;
      }
    }
  }

  //};

  if (unit.ii_index && this.ii_fractions_way) {
    //console.log("ura");
    let index = this.ii_fractions_way[unit.fatherFraction.persolalNumber].index;

    //console.log(this.ii_index); pausa=1;

    if (index && index <= unit.ii_index) {
      father.finish = gameFielg[this.vertikal][this.horizont];

      father.finish.myWay(father.finish);

      //unit.iCanGet=true;

      return;
    }
  }

  if (
    unit.warrior &&
    (unit.target ||
      (unit.handTarget && unit.fatherFraction.control === "comp")) &&
    !unit.fly
  ) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.warrior &&
        this.iContaktWith[d].father.hp > 0 &&
        this.iContaktWith[d].father.fatherFraction.union !==
          unit.fatherFraction.union
      ) {
        father.finish = gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        //console.log("ura");
        //unit.iCanGet=true;

        return;
      }
    }
  }

  if (
    unit.fatherFraction.control === "comp" &&
    unit.handCell &&
    !unit.handCell.free &&
    !unit.ii_attack
  ) {
    if (
      get_distanse_on_lineyka(
        gameFielg[this.vertikal][this.horizont],
        50,
        unit.handCell,
        50
      ) <= 250
    ) {
      father.finish = gameFielg[this.vertikal][this.horizont];

      father.finish.myWay(father.finish);
      //unit.ii_saveCell=false;
      //console.log("ura");

      return;
    }
  }

  if (target && luchnik && luchnik === 1) {
    //pausa=1;
    /*
  let a=target.damagePointX-(this.x+25);
  let b=target.damagePointY-(this.y+25);	
  
  let c=Math.sqrt(a*a+b*b);	
  
  console.log("c : "+c);
  
  */

    //console.log(get_distanse_on_lineyka(gameFielg[this.vertikal][this.horizont],unit.gabarit,target.cell,target.gabarit));

    let x;
    let y;

    let cell = gameFielg[this.vertikal][this.horizont];

    if (unit.gabarit === 50) {
      x = cell.x + 25;
      y = cell.y + 25;
    } else if (unit.gabarit === 100) {
      x = cell.x + 50;
      y = cell.y;
    }

    let a = x - target.damagePointX;
    let b = y - target.damagePointY;

    let c = Math.sqrt(a * a + b * b);

    if (c <= unit.seeing) {
      father.finish = cell;

      father.finish.myWay(father.finish);

      //console.log("okokokok");
      unit.iCanGet = true;

      return;
    }
  } else if (target && luchnik && luchnik === 2) {
    //console.log("ok");

    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.persolalNumber === target.persolalNumber
      ) {
        father.finish = gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        //console.log("ura");
        unit.iCanGet = true;

        return;
      }
    }
  } else if (target && luchnik && luchnik === 3) {
    let x = this.x + 25;
    let y = this.y + 25;

    if (unit.type === "dragoon") {
      x = this.x + 50;
      y = this.y;
    }

    let a = target.damagePointX - x;
    let b = target.damagePointY - y;

    let c = Math.sqrt(a * a + b * b);

    if (c <= unit.seeing) {
      father.finish = gameFielg[this.vertikal][this.horizont];

      father.finish.myWay(father.finish);

      //console.log(c+" way");
      unit.iCanGet = true;

      return;
    }
  }

  if (target && !luchnik) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.persolalNumber === target.persolalNumber
      ) {
        father.finish = gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        //console.log("ura");
        unit.iCanGet = true;

        return;
      }

      ///*

      if (father.unit.type === 1) {
        if (unit.type === 1 && unit.fatherFraction.control === "comp") {
          if (
            !unit.iGoBuild &&
            !unit.iGetTarget &&
            this.iContaktWith[d].father.unitStatus === "building" &&
            !this.iContaktWith[d].father.neitral &&
            this.iContaktWith[d].father.fatherFraction.persolalNumber ===
              unit.fatherFraction.persolalNumber &&
            (this.iContaktWith[d].father.hp <
              this.iContaktWith[d].father.hpfull ||
              this.iContaktWith[d].father.buildready <
                this.iContaktWith[d].father.hpfull) &&
            this.iContaktWith[d].father.hp > 0
          ) {
            father.finish = gameFielg[this.vertikal][this.horizont];

            father.finish.myWay(father.finish);

            //console.log(c+" way");
            unit.iCanGet = true;

            unit.target = this.iContaktWith[d].father;

            return;
          }
        }

        if (!father.unit.potentialTarget) {
          //console.log("ok");

          if (
            (this.iContaktWith[d].father.unitName === target.unitName &&
              (this.iContaktWith[d].father.neitral ||
                this.iContaktWith[d].father.fatherFraction.fraction ===
                  unit.fatherFraction.fraction)) ||
            (father.unit.wood && this.iContaktWith[d].father.unitWoodOut)
          ) {
            if (
              father.unit.wood &&
              this.iContaktWith[d].father.unitWoodOut &&
              !father.unit.iGoBuild &&
              this.iContaktWith[d].father.fatherFraction.fraction ===
                father.unit.fatherFraction.fraction &&
              this.iContaktWith[d].father.hp > 0 &&
              this.free &&
              (target.unitName === "townHoll" ||
                target.unitName === "lesopilka")
            ) {
              father.unit.potentialTarget = this.iContaktWith[d].father;

              father.finish = gameFielg[this.vertikal][this.horizont];
              father.finish.myWay(father.finish);

              father.unit.potentialWay = father.way;

              if (father.unit.fatherFraction.control === "player") {
                father.finish = target.cell;
                father.way = [];
              } else {
                return;
              }
            } else if (
              target.unitName === "wood" &&
              !this.iContaktWith[d].father.lesorub &&
              this.iContaktWith[d].father.hp > 0 &&
              this.free
            ) {
              father.unit.potentialTarget = this.iContaktWith[d].father;

              father.finish = gameFielg[this.vertikal][this.horizont];
              father.finish.myWay(father.finish);

              father.unit.potentialWay = father.way;

              if (father.unit.fatherFraction.control === "player") {
                father.finish = target.cell;
                father.way = [];
              } else {
                return;
              }
            } else if (
              target.unitName === "shahta" &&
              this.iContaktWith[d].father.gold > 0 &&
              this.iContaktWith[d].father.hp > 0 &&
              this.free
            ) {
              father.unit.potentialTarget = this.iContaktWith[d].father;

              father.finish = gameFielg[this.vertikal][this.horizont];
              father.finish.myWay(father.finish);

              father.unit.potentialWay = father.way;

              if (father.unit.fatherFraction.control === "player") {
                father.finish = target.cell;
                father.way = [];
              } else {
                return;
              }
            } else if (
              !father.unit.iGoBuild &&
              target.unitName === "townHoll" &&
              target.fatherFraction.fraction ===
                father.unit.fatherFraction.fraction &&
              this.iContaktWith[d].father.hp > 0 &&
              this.free
            ) {
              father.unit.potentialTarget = this.iContaktWith[d].father;

              father.finish = gameFielg[this.vertikal][this.horizont];
              father.finish.myWay(father.finish);

              father.unit.potentialWay = father.way;

              if (father.unit.fatherFraction.control === "player") {
                father.finish = target.cell;
                father.way = [];
              } else {
                return;
              }
            }
          }
        }

        //*/
      }
    }

    /*	
      
      if(this.vertikal===target.contaktCells[d].vertikal&&this.horizont===target.contaktCells[d].horizont){
        
      //father.finish.myWay(gameFielg[i][k]);	
        
      father.finish=gameFielg[this.vertikal][this.horizont];
  
      father.finish.myWay(father.finish);
        
        
      console.log("ura");	
        
      return;	
        
        //console.log("uh")
        
      };
      
      
    */
  }

  //left_Up left_

  let koof = 0;

  for (let i = this.vertikal - 1; i < this.vertikal - 1 + 3; i++) {
    for (let k = this.horizont - 1; k < this.horizont - 1 + 3; k++) {
      //if(isNaN(this.f)){console.log(this.father.f);};

      /*		
      
  if(gameFielg[i]&&gameFielg[i][k]&&gameFielg[i][k].startFinish.length&&
  (gameFielg[i][k].startFinish[0].vertikal!==father.vertikal||
  gameFielg[i][k].startFinish[0].horizont!==father.horizont||
  gameFielg[i][k].startFinish[1].vertikal!==father.finish.vertikal||
  gameFielg[i][k].startFinish[1].horizont!==father.finish.horizont
  )){
  
  
    
  gameFielg[i][k].inUse=false;
  gameFielg[i][k].h=0;
  gameFielg[i][k].f=0;
  gameFielg[i][k].g=0;	
    
  };
    
  */

      let cell;

      if (gameFielg[i] && gameFielg[i][k]) {
        cell = gameFielg[i][k];
      }

      if (
        cell &&
        cell.forCheck !== forCheck //||
        //(gameFielg[i]&&gameFielg[i][k]&&isNaN(gameFielg[i][k].h))||
        //(gameFielg[i]&&gameFielg[i][k]&&isNaN(gameFielg[i][k].f))
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
  
  
  if(arg&&gameFielg[i]&&gameFielg[i][k]){
    
    aa=(arg.x+50)-(gameFielg[i][k].x+50);
    bb=(arg.y+50)-(gameFielg[i][k].y+50);
    
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
  
  
  if(!unit.fly&&arg&&gameFielg[i]&&gameFielg[i][k]&&gameFielg[i][k].unit&&gameFielg[i][k].unit.unitStatus==="life"){
    
  let a=unit.x-gameFielg[i][k].x;
  let b=unit.y-gameFielg[i][k].y;
  
  dis=Math.sqrt(a*a+b*b);
  
  if(dis<arg){okey=false;};
  
  };
  //*/

      ///////////////

      let okDrag = 0;

      if (unit.fly) {
        //console.log("fly");

        for (let v = i - 1; v <= i; v++) {
          for (let h = k; h <= k + 1; h++) {
            let dc;

            if (gameFielg[v] && gameFielg[v][h]) {
              dc = gameFielg[v][h];
            }

            if (
              dc &&
              (!dc.dragoon ||
                (dc.dragoon &&
                  dc.dragoon.persolalNumber === unit.persolalNumber))
            ) {
              okDrag++;
            } else {
              break;
            }
          }
        }
      }

      ///*
      let ok2 = false;

      let a, c, b;

      //console.log(unit.goGroop)
      //floorGlobalTimer

      if (
        unit.gabarit === 50 &&
        cell &&
        cell.unit &&
        cell.unit.gabarit === 50 &&
        cell.unit.unitStatus === "life" &&
        (cell.unit.way.length ||
          cell.unit.fatherFraction.union !== unit.fatherFraction.union ||
          (unit.hold_position &&
            cell.unit.hold_position &&
            unit.hold_position === cell.unit.hold_position &&
            !unit.iNeedFreeWay))
      ) {
        a = cell.unit.cell.x - unit.cell.x;
        b = cell.unit.cell.y - unit.cell.y;

        c = Math.sqrt(a * a + b * b);

        if (
          (c >= 80 ||
            (unit.hold_position &&
              cell.unit.hold_position &&
              unit.hold_position === cell.unit.hold_position &&
              unit.persolalNumber !== cell.unit.persolalNumber) ||
            (unit.goGroop && cell.unit.goGroop && unit.isBlockedMem) ||
            (unit.goGroop &&
              cell.unit.goGroop &&
              unit.speed <= cell.unit.speed)) &&
          !unit.iNeedFreeWay
        ) {
          ok2 = true; //console.log("pizdez");
        }
      }

      //console.log()
      //*/

      let hart =
        (cell &&
          !unit.fly &&
          (cell.free ||
            //||
            //(!gameFielg[i][k].free&&gameFielg[i][k].unit&&gameFielg[i][k].unit.unitStatus==="life"&&okey)
            ok2)) ||
        (unit.fly && okDrag === 4);

      ///////////////////////
      //if(!arg){okey=false;};
      //console.log(arg);
      if (
        hart &&
        !cell.inUse &&
        !cell.f
        //&&
        //!(gameFielg[i][k].vertikal==this.vertikal&&gameFielg[i][k].horizont==this.horizont)
      ) {
        let a = Math.abs(father.finish.horizont - cell.horizont);
        let b = Math.abs(father.finish.vertikal - cell.vertikal);

        let c = a + b;

        //console.log(c)
        //if(!father.finish.horizont){console.log("koshmar " +father.finish.horizont);};/////////////!!!!!!!!!!!!!!!!

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

        //koof++;
        //console.log(c2);

        cell.father = gameFielg[this.vertikal][this.horizont];

        //this.vektors.push(gameFielg[i][k]);

        vektors.push(cell);

        allVektors.push(cell);

        cell.h = c * 10; //+c2//+v+h;

        cell.f = gameFielg[i][k].g + cell.h;

        //gameFielg[i][k].startFinish=[father,father.finish];

        cell.forCheck = forCheck;

        /*	
    
  for(let d=0;d<target.contaktCells.length;d++){
      
      if(gameFielg[i][k].vertikal===target.contaktCells[d].vertikal&&gameFielg[i][k].horizont===target.contaktCells[d].horizont){
        
      //father.finish.myWay(gameFielg[i][k]);	
        
      //father.finish=gameFielg[i][k];
  
      //father.finish.myWay(father.finish);
        
      //target.stop=true;	
        
        
        console.log(gameFielg[i][k])
        
        break
        
      };
      
      
    };	
      
  //*/

        ///*
        if (
          cell.vertikal === father.finish.vertikal &&
          cell.horizont === father.finish.horizont
        ) {
          //console.log("sucssess!!!!!!!!!!!!!!!");

          father.finish.myWay(father.finish);
          //arg.way=father.way;

          //vektors=[];
          //allVektors=[];
          //father=0;

          //if(unit.type==="dragoon"){console.log(father);pausa=1;};
        }
      } else if (
        hart &&
        !cell.inUse &&
        cell.f &&
        !(cell.vertikal == this.vertikal && cell.horizont == this.horizont)
      ) {
        //gameFielg[i][k].startFinish=[father,father.finish];
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

          let a = Math.abs(father.finish.horizont - cell.horizont);
          let b = Math.abs(father.finish.vertikal - cell.vertikal);

          let c = a + b;

          cell.father = gameFielg[this.vertikal][this.horizont];

          cell.h = c * 10; //+c2//+v+h;

          cell.f = cell.g + cell.h;

          //console.log(gameFielg[i][k].f);
        }

        //koof++;
      }
      koof++;
    }
  }
};

Obj.prototype.myWay = function (arg) {
  let b = this.father;

  father.way.push(arg);
  father.way[father.way.length - 1].drawWay = 1;

  //console.log(b);

  let a = father.x - father.finish.x;
  let s = father.y - father.finish.y;

  let c = Math.sqrt(a * a + s * s);

  //console.log(c);

  if (c < 100) {
    return;
  }

  father.wayLength = 0;

  while (true) {
    father.wayLength += b.g;

    father.way.push(b);

    b = father.way[father.way.length - 1].father;

    father.way[father.way.length - 1].drawWay = 1;

    if (b.vertikal === father.vertikal && b.horizont === father.horizont) {
      //console.log(father)

      break;
    }
  }
};

Obj.prototype.getH = function () {
  if (
    !father ||
    !father.finish ||
    father.finish.vertikal === undefined ||
    father.finish.horizont === undefined
  ) {
    console.log("pizdez");
    return;
  }

  let a = Math.abs(father.finish.vertikal - this.vertikal);
  let b = Math.abs(father.finish.horizont - this.horizont);

  let c = a + b;

  this.h = c * 10;
};