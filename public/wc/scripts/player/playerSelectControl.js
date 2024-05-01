const player_select_control = function () {
    if (player) {
      if (
        player.selectUnits.length === 1 &&
        (!player.selectUnits[0].cell || player.selectUnits[0].hp <= 0)
      ) {
        player.selectUnits = [];
  
        if (!player.selectIsSweem.length) {
          player_pro_building = false;
        }
      }
  
      if (
        player.selectBuildings.length === 1 &&
        (!player.selectBuildings[0].cell || player.selectBuildings[0].hp <= 0)
      ) {
        player.selectBuildings = [];
        //player_pro_building=false;
      }
  
      if (
        player.selectDragons.length === 1 &&
        (!player.selectDragons[0].cell || player.selectDragons[0].hp <= 0)
      ) {
        player.selectDragons = [];
        //player_pro_building=false;
      }
  
      if (
        player.selectIsSweem.length === 1 &&
        (!player.selectIsSweem[0].cell || player.selectIsSweem[0].hp <= 0)
      ) {
        player.selectIsSweem = [];
  
        if (!player.selectUnits.length) {
          player_pro_building = false;
        }
      }
    }
  };