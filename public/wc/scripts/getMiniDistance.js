const getMinDistanse = function (unit, object) {
  let min = [];

  if (!object || !object.length) {
    return 0;
  }

  for (let i = 0; i < object.length; i++) {
    let a = object[i].x - unit.x;
    let b = object[i].y - unit.y;

    let c = Math.sqrt(a * a + b * b);

    /*	
      if(
      (!min.length||c<min[0])&&
      object[i].hp>0&&
      ((object[i].gold!==0)||(object[i].gold===0&&object[i].unitName==="townHoll"))
      &&
      !object[i].lesorub
      
      //!(object[i].unitName==="shahta"&&object[i].gold===0)&&
      //!(object[i].unitName==="wood"&&object[i].lesorub)
      ){
          
          min=[c,object[i]];
          
          };
      */

    if (object[i].unitName === "townHoll") {
      if (
        (!min.length || c < min[0]) &&
        object[i].hp > 0 &&
        object[i].buildready > 0 &&
        object[i].fatherFraction.fraction === unit.fatherFraction.fraction &&
        //&&!object[i].isBlocked()
        object[i].cell &&
        unit.cell &&
        object[i].cell.continent === unit.cell.continent
      ) {
        min = [c, object[i]];
      }
    } else if (object[i].unitName === "shahta") {
      if (
        (!min.length || c < min[0]) &&
        object[i].hp > 0 &&
        object[i].gold &&
        //&&!object[i].isBlocked()
        object[i].cell &&
        unit.cell &&
        object[i].cell.continent === unit.cell.continent
      ) {
        min = [c, object[i]];
      }
    } else if (object[i].unitName === "wood") {
      let obj = object[i];

      if (
        obj.lesorub &&
        (obj.lesorub.hp <= 0 ||
          !obj.lesorub.cell ||
          !obj.lesorub.target ||
          (obj.lesorub.target &&
            obj.lesorub.target.persolalNumber !== obj.persolalNumber))
      ) {
        obj.lesorub = 0;
      }

      if (
        (!min.length || c < min[0]) &&
        object[i].hp > 0 &&
        !object[i].lesorub &&
        !object[i].isBlocked() &&
        object[i].cell &&
        unit.cell &&
        object[i].cell.continent === unit.cell.continent
      ) {
        min = [c, object[i]];
      }
    }
  }

  if (min.length) {
    return min[1];
  } else {
    return 0;
  }
};
