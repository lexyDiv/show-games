const getWay = function (arg, noFree, deep, target, luchnik, special) {
    //console.log("ok");
    console.log(arg.cell)
    let takt = 0;
  
    if (!arg || !arg.cell) {
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
  if(!arg.finish){
      
      if(!arg.sosFin){
      console.log(arg.type);
      console.log(arg.persolalNumber);
      //pausa=1;
      };
      
      
  arg.finish=arg.sosFin;};
  
  */
        //this.getVektors();
  
        father = arg.cell; //humansPeople[0];
        //console.log(arg.finish);
        //basick=gameFielg[father.vertikal][father.horizont];
        //console.log(arg);
        //console.log(father);
   // gameFielg[father.vertikal][father.horizont] !== father && console.log('getWay - problem') ok
        gameFielg[father.vertikal][father.horizont].finish = arg.finish;
  
        //console.log(father); ok
  
        if (
          !father ||
          !father.finish ||
          father.finish.vertikal === undefined ||
          father.finish.horizont === undefined
        ) {
          //
  
          //console.log("pizdez");
  
          arg.way = [];
          arg.target = 0;
          arg.myJoube = 0;
          father = 0;
          vektors = [];
          allVektors = [];
          basick = 0;
          noFree = 0;
  
          return;
        }
  
        gameFielg[father.vertikal][father.horizont].g = 0;
        gameFielg[father.vertikal][father.horizont].getH();
        gameFielg[father.vertikal][father.horizont].f =
          gameFielg[father.vertikal][father.horizont].g +
          gameFielg[father.vertikal][father.horizont].h;
  
        //console.log(father.f);
  
        vektors.push(gameFielg[father.vertikal][father.horizont]);
  
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
        arg.way = father.way;
        arg.wayLength = father.wayLength;
  
        //console.log(arg.way);
        //father.h=0;
        //father.g=0;
        //father.f=0;
  
        father.way = [];
        father.inUse = false;
        father.finish.inUse = false;
        father = 0;
        vektors = [];
        noFree = 0;
  
        //if(arg.type==="dragoon"){arg.dragoonWay=arg.way;};
  
        //console.log(arg.way);
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
      if (!basick) {
        //console.log("polny pizdez!!!!");
  
        arg.finish = 0;
        if (
          !father ||
          !father.finish ||
          father.finish.vertikal === undefined ||
          father.finish.horizont === undefined
        ) {
          //console.log("pizdez");
  
          arg.way = [];
          arg.target = 0;
          arg.myJoube = 0;
          father = 0;
          vektors = [];
          allVektors = [];
          basick = 0;
          noFree = 0;
  
          return;
        }
        father.way = [];
        father.inUse = false;
        father.finish.inUse = false;
        father = 0;
        vektors = [];
        allVektors = [];
        basick = 0;
        noFree = 0;
  
        arg.target = 0;
        arg.way = [];
        arg.myJoube = 0;
  
        return;
      } ///////////////////!!!!!!!!!!!!!!!!!!!!!
      //*/
  
      if (!arg.sweeme) {
        if (!special) {
          basick.getVektors(noFree, target, arg, luchnik);
        } else {
          basick.getVektors_ii(noFree, target, arg, luchnik);
        }
      } else {
        basick.getVektorsSweeme(noFree, target, arg, luchnik);
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
  
        arg.way = father.way;
        arg.wayLength = father.wayLength;
  
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
        //arg.way=[0];
        arg.finish = 0;
        //father.h=0;
        //father.g=0;
        //father.f=0;
        if (
          !father ||
          !father.finish ||
          father.finish.vertikal === undefined ||
          father.finish.horizont === undefined
        ) {
          //console.log("pizdez");
  
          arg.way = [];
          arg.target = 0;
          arg.myJoube = 0;
          father = 0;
          vektors = [];
          allVektors = [];
          basick = 0;
          noFree = 0;
  
          return;
        }
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
  
      //console.log(arg);
      //console.log(unit.finish);
    }
  };