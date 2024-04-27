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