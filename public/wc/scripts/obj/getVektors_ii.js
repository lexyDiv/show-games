Obj.prototype.getVektors_ii = function (arg, target, unit, luchnik) {
  if (!gameFielg[this.vertikal] || !gameFielg[this.vertikal][this.horizont]) {
    console.log('this is problem')
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
          father.finish !== this && console.log('problem')
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
          father.finish !== this && console.log('problem')
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