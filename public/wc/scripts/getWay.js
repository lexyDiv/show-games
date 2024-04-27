const getWay = function (unit, noFree, deep, tunitet, luchnik, special) {
    //console.log("ok");
   // console.log(unit.handTarget, unit.target)
    let takt = 0;
  
    if ((!unit || !unit.cell)
    ||
  (unit.fatherFraction.control !== 'player'
&&
unit.target
&&
unit.target.unitStatus === 'building'
&&
isBlockedBuilding(unit.target)
)
  ) {
      return;
    }
    //console.log("scan");
  
    forCheck += 0.0001;
  
    if (forCheck >= 100000000000) {
      forCheck = -forCheck;
    }
  
    while (true) {
      takt++;
  
      if (!father) {
        
        /*
  if(!unit.finish){
      
      if(!unit.sosFin){
      console.log(unit.type);
      console.log(unit.persolalNumber);
      //pausa=1;
      };
      
      
  unit.finish=unit.sosFin;};
  
  */
        //this.getVektors();
  
        father = unit.cell; //humansPeople[0];
        //console.log(unit.finish);
        //basick=father;
        //console.log(unit);
        //console.log(father);
   // father !== father && console.log('getWay - problem') ok
        father.finish = unit.finish;
  
        //console.log(father); ok
  
        // if (
        //   !father ||
        //   !father.finish ||
        //   father.finish.vertikal === undefined ||
        //   father.finish.horizont === undefined
        // ) {
        //   //
  
        //   console.log("pizdez");
  
        //   unit.way = [];
        //   unit.tunitet = 0;
        //   unit.myJoube = 0;
        //   father = 0;
        //   vektors = [];
        //   allVektors = [];
        //   basick = 0;
        //   noFree = 0;
  
        //   return;
        // }
  
        father.g = 0;
        father.getH();
        father.f =
          father.g +
          father.h;
  
        //console.log(father.f);
  
        vektors.push(father);
  
        vektors[0].inUse = false;
        //vektors[0].finish.h=0;
        //vektors[0].finish.g=0;
        //vektors[0].finish.f=0;
        //vektors[0].h=0;
        //vektors[0].g=0;
        //vektors[0].f=0;
        //console.log(vektors[0]);
      }
      //console.log(takt);
      //removeInUse();
      //console.log(basick);
      basick = getBastVektors();
  
      //console.log(vektors);
  
      if (father.way.length) {
        unit.way = father.way;
        unit.wayLength = father.wayLength;
  
        //console.log(unit.way);
        //father.h=0;
        //father.g=0;
        //father.f=0;
  
        father.way = [];
        father.inUse = false;
        father.finish.inUse = false;
        father = 0;
        vektors = [];
        noFree = 0;
  
        //if(unit.type==="dragoon"){unit.dragoonWay=unit.way;};
  
        //console.log(unit.way);
        //pausa=1
        //allVektors=[];
        /*
  for(let i=0;i<allVektors.length;i++){
      
      allVektors[i].h=0;
      allVektors[i].g=0;
      allVektors[i].f=0;
      allVektors[i].inUse=0;
      
  };
  //*/
  
        allVektors = [];
  
        basick = 0;
        //console.log(forCheck);
        //console.log(takt);
  
        //console.log(takt);
        return;
      }
  
      //console.log();
      ///*
      // if (!basick) {
      //   console.log("polny pizdez!!!!");
  
      //   unit.finish = 0;
      //   if (
      //     !father ||
      //     !father.finish ||
      //     father.finish.vertikal === undefined ||
      //     father.finish.horizont === undefined
      //   ) {
      //     //console.log("pizdez");
  
      //     unit.way = [];
      //     unit.tunitet = 0;
      //     unit.myJoube = 0;
      //     father = 0;
      //     vektors = [];
      //     allVektors = [];
      //     basick = 0;
      //     noFree = 0;
  
      //     return;
      //   }
      //   father.way = [];
      //   father.inUse = false;
      //   father.finish.inUse = false;
      //   father = 0;
      //   vektors = [];
      //   allVektors = [];
      //   basick = 0;
      //   noFree = 0;
  
      //   unit.tunitet = 0;
      //   unit.way = [];
      //   unit.myJoube = 0;
  
      //   return;
      // }
       ///////////////////!!!!!!!!!!!!!!!!!!!!!
      //*/
  
      if (!unit.sweeme) {
        if (!special) {
          basick.getVektors(noFree, tunitet, unit, luchnik);
        } else {
          basick.getVektors_ii(noFree, tunitet, unit, luchnik);
        }
      } else {
        basick.getVektorsSweeme(noFree, tunitet, unit, luchnik);
      }
  
      //basick.inUse=true;
      if ((!vektors.length && takt > 1) || takt === deep) {
        //go=1;
  
        //return;
        father.finish = getBastH();
        //father.saveFinish=father.finish;
  
        //father.h=0;
        //father.g=0;
        //father.f=0;
  
        father.finish.myWay(father.finish);
  
        unit.way = father.way;
        unit.wayLength = father.wayLength;
  
        father.way = [];
        father.inUse = false;
        father.finish.inUse = false;
        father = 0;
        vektors = [];
        father.finish = 0;
        noFree = 0;
        //allVektors=[];
        /*
  for(let i=0;i<allVektors.length;i++){
      
      allVektors[i].h=0;
      allVektors[i].g=0;
      allVektors[i].f=0;
      allVektors[i].inUse=0;
      
  };
  //*/
        allVektors = [];
        basick = 0;
        //console.log(forCheck);
  
        return;
  
        //console.log(father.finish+" vektors "+vektors.length+" allVektors "+allVektors.length);
  
        //basick=father;
      } else if (!vektors.length && takt === 1) {
        //console.log("ko");
        //unit.way=[0];
        unit.finish = 0;
        //father.h=0;
        //father.g=0;
        //father.f=0;
        // if (
        //   !father ||
        //   !father.finish ||
        //   father.finish.vertikal === undefined ||
        //   father.finish.horizont === undefined
        // ) {
        //   //console.log("pizdez");
  
        //   unit.way = [];
        //   unit.tunitet = 0;
        //   unit.myJoube = 0;
        //   father = 0;
        //   vektors = [];
        //   allVektors = [];
        //   basick = 0;
        //   noFree = 0;
  
        //   return;
        // }
        father.way = [];
        father.inUse = false;
        father.finish.inUse = false;
        father = 0;
        vektors = [];
        allVektors = [];
        basick = 0;
        noFree = 0;
  
        return;
      }
  
      //if(!basick){console.log("no way"); return;};
  
      //for(let i=0;i<vektors.length;i++){
  
      //	if(vektors[i].inUse||vektors[i].trup||vektors[i].taboo){vektors.splice(i,1);i--;};
  
      //};
  
      //basick.getVektors();
  
      //if(stop===0){
      //basick=getBastVektors();
      //};
      //basick.inUse=true;
  
      //console.log(takt);
  
      //go=0;
  
      //console.log(unit);
     
    }
  };