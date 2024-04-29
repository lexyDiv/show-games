window.onmouseup = function () {
    var x = event.offsetX;
    var y = event.offsetY;
  
    if (long_punkt) {
      long_punkt.long_click = false;
      long_punkt = false;
    }
  
    click_up = true;
    radar.move = false;
  
    crateZoonMouse.active = false;
    //console.log(crateZoonMouse.active);
  };
  
  window.onmousedown = function () {
    //in_unit_menu
  
    let vertikal = Math.floor((obj.y - removeY) / 50);
    let horizont = Math.floor((obj.x - removeX) / 50);
  
    /*
  if(gameFielg.length&&gameFielg[vertikal][horizont].unit&&gameFielg[vertikal][horizont].unit.type===1){
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(gameFielg[vertikal][horizont].unit)
      console.log("target :"+gameFielg[vertikal][horizont].unit.target);
      console.log("handTarget");console.log(gameFielg[vertikal][horizont].unit.handTarget);
      //console.log("animys");console.log(gameFielg[vertikal][horizont].unit.animys);
      //pausa=1;
      //gameFielg[vertikal][horizont].unit.metka=1;
      //console.log("ok");
      gameFielg[vertikal][horizont].unit.nar=500
  };
  //*/
    menu_long_click = true;
    pausa_click = true;
  
    if (vertikal) {
      if (unit_dop_menu.length) {
        menu_click = true;
  
        /*	
  if(player&&player.menu_unit&&player.menu_unit.list===1){	
      player.menu_unit.click=true;
      
      //console.log("ok");drawQuatro
      
  };
  */
      }
  
      if (pausa || !start_game) {
        return;
      }
  
      if (player_pro_building && obj.x < 700) {
        player_pro_building_click = true;
      }
  
      obj.cell = gameFielg[vertikal][horizont];
  
      if (
        obj.x > radar.x &&
        obj.x < radar.x + radar.gabarit &&
        obj.y > radar.y &&
        obj.y < radar.y + radar.gabarit
      ) {
        radar.move = true;
  
        let r_x = obj.x - radar.x;
        let r_y = obj.y - radar.y;
  
        let gab = gameFielg[0][0].drawGabaritRadar;
        //drawGabaritRadar
  
        let reX = r_x / gab;
        let reY = r_y / gab;
  
        removeX =
          -(Math.floor(reX) * 50 - 350) + ((Math.floor(reX) * 50 - 350) % 25);
        removeY =
          -(Math.floor(reY) * 50 - 350) + ((Math.floor(reY) * 50 - 350) % 25);
  
        if (removeX > 0) {
          removeX = 0;
        } else if (Math.abs(removeX - 700) > gameFielg.length * 50) {
          removeX = -(gameFielg.length * 50 - 700);
        }
  
        if (removeY > 0) {
          removeY = 0;
        } else if (Math.abs(removeY - 700) > gameFielg.length * 50) {
          removeY = -(gameFielg.length * 50 - 700);
        }
      }
  
      //console.log(obj.x)
  
      var x = event.offsetX;
      var y = event.offsetY;
  
      /////////////////////////////
  
      /////////////////////////////////////
  
      crateZoonMouse.x = obj.x - removeX;
      crateZoonMouse.y = obj.y - removeY;
  
      if (obj.x < 700) {
        crateZoonMouse.active = true;
      }
  
      //console.log(crateZoonMouse.active);
      //console.log(crateZoonMouse.x);
  
      key = event.which;
  
      //console.log(key);
  
      if (
        iLoockTo &&
        (player.selectUnits.length ||
          player.selectDragons.length ||
          player.selectIsSweem.length) &&
        obj.x < 700
      ) {
        // console.log("huynya");
  
        if (player.selectUnits.length) {
          getMyGroupPosition();
          groupe = true;
        }
  
        if (player.selectDragons.length) {
          getDragonsGroopPosition();
        }
  
        if (player.selectIsSweem.length) {
          getSweemeGroopPosition();
  
          //console.log("start here");
        }
  
        /*	
  for(let i=0;i<player.selectUnits.length;i++){
  
  if(!(obj.cell.vertikal===player.selectUnits[i].vertikal&&
  obj.cell.horizont===player.selectUnits[i].horizont
  )&&obj.x<700){	
      player.selectUnits[i].way=[];
      player.selectUnits[i].finish=obj.cell;
      player.selectUnits[i].active=false;
  };
      //console.log(player.selectUnits[i].finish);
      
  };
      
  */
      } else {
        if (obj.x < 700 && !iLoockTo && !player_pro_building) {
          player.selectUnits = [];
          player.selectDragons = [];
          groupe = false;
        }
        //console.log(player.selectDragons);
        //player.selectUnits=[];
      }
      //console.log(player.selectUnits);
  
      //go=1;
      //console.log(player.selectUnits);
    }
  };

const body = document.getElementsByTagName('body')



function keyDown(event) {
    let kc = event.keyCode;
  
    if (kc === 32) {
      iLoockTo = 1;
    }
  
    if (kc === 13) {
      pausa = 0;
    }
  
    if (kc === 17) {
      mem_active = true;
    }
  
    mem_prog(kc);
    //console.log(kc)
  };

  function keyUp (event) {
      let kcUp = event.keyCode;
    
      if (kcUp === 32) {
        iLoockTo = 0;
      }
    
      if (kcUp === 17) {
        mem_active = false;
      }
    }
 
  window.addEventListener('keydown', keyDown)
  window.addEventListener('keyup', keyUp)

  // body.keydown(function (event) {
  //   let kc = event.keyCode;
  
  //   if (kc === 32) {
  //     iLoockTo = 1;
  //   }
  
  //   if (kc === 13) {
  //     pausa = 0;
  //   }
  
  //   if (kc === 17) {
  //     mem_active = true;
  //   }
  
  //   mem_prog(kc);
  //   //console.log(kc)
  // });
  
  // $("body").keyup(function (event) {
  //   let kcUp = event.keyCode;
  
  //   if (kcUp === 32) {
  //     iLoockTo = 0;
  //   }
  
  //   if (kcUp === 17) {
  //     mem_active = false;
  //   }
  // });
  