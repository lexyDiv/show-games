water_sled_create = function (father) {
    //let vertikal=father.y/50;
    //let horizont=(father.x+50)/50;
  
    let gabarit = 100;
  
    if (father.type === "turtle") {
      gabarit = 1;
    }
  
    let cell = father.cell; //gameFielg[vertikal][horizont];
    //type,cell,conor,x,y
  
    let obj = new Water_sled(
      1,
      cell,
      Math.atan2(father.vSp, father.gSp),
      father.x + 50,
      father.y,
      gabarit
    );
  
    obj.father = father;
  
    water_sleds.push(obj);
  
    cell.water_sleds.push(obj);
  
    obj.alf = 1;
  };