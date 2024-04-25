/* eslint-disable react/prop-types */
/* eslint-disable quotes */
const React = require('react');
const Layout = require("./Layout");

function Wc({ title }) {
  return (
    <Layout title={title}>
      <script src="https://code.jquery.com/jquery-2.1.0.js" />
      <canvas id="canvas" width="900" height="700" />
      <canvas id="canvas2" width="900" height="700" />
      <canvas id="canvas3" width="900" height="700" />

      <script src="wc/scripts/script_1.js" />
      <script src="wc/scripts/images.js" />

      <script src="wc/scripts/constructors/Title.js" />
      <script src="wc/scripts/constructors/Radar.js" />
      <script src="wc/scripts/constructors/Panick.js" />
      <script src="wc/scripts/constructors/Alarm.js" />
      <script src="wc/scripts/constructors/Axes.js" />
      <script src="wc/scripts/constructors/ClickSave.js" />
      <script src="wc/scripts/constructors/Obj.js" />
      <script src="wc/scripts/constructors/Strike.js" />
      <script src="wc/scripts/constructors/Fraction.js" />
      <script src="wc/scripts/constructors/II_Attack.js" />
      <script src="wc/scripts/constructors/Water_sled.js" />
      <script src="wc/scripts/constructors/ShablonObj.js" />
      <script src="wc/scripts/constructors/LandObj.js" />
      <script src="wc/scripts/constructors/DragoonDamage.js" />
      <script src="wc/scripts/constructors/Unit.js" />
      <script src="wc/scripts/constructors/Continent.js" />
      <script src="wc/scripts/constructors/Sound.js" />
      <script src="wc/scripts/constructors/Sea.js" />
      <script src="wc/scripts/var.js" />

      <script src="wc/scripts/get_map.js" />
      <script src="wc/scripts/new_func.js" />
      <script src="wc/scripts/main_menu.js" />
      <script src="wc/scripts/menu_push_2.js" />
      <script src="wc/scripts/levels.js" />

      <script src="wc/scripts/soundControl.js" />
      <script src="wc/scripts/landObj.js" />
      <script src="wc/scripts/mapInit.js" />
      <script src="wc/scripts/shablonLand.js" />
      <script src="wc/scripts/unitCellUpdate.js" />
      <script src="wc/scripts/fractionsCreate.js" />
      <script src="wc/scripts/objProto.js" />
      <script src="wc/scripts/landObjProto.js" />
      <script src="wc/scripts/unitProto.js" />
      <script src="wc/scripts/dragoonDamageProto.js" />
      <script src="wc/scripts/unitProtoDrawUnit.js" />
      <script src="wc/scripts/removeControl.js" />
      <script src="wc/scripts/canvas3.js" />
      <script src="wc/scripts/getActiveZone.js" />
      <script src="wc/scripts/drawMouseZone.js" />
      <script src="wc/scripts/getGoodSweemeCell.js" />
      <script src="wc/scripts/getSweemeGroopPosition.js" />
      <script src="wc/scripts/dragoonsGroopPosition.js" />
      <script src="wc/scripts/getMyGroupPosition.js" />
      <script src="wc/scripts/window.js" />
      <script src="wc/scripts/radarProto.js" />
      <script src="wc/scripts/menuLitera.js" />
      <script src="wc/scripts/createUnitDopMenu.js" />
      <script src="wc/scripts/playerGroopProg.js" />
      <script src="wc/scripts/playerGroupDraw.js" />
      <script src="wc/scripts/unitDopMenuControl.js" />
      <script src="wc/scripts/unitMenuDraw.js" />
      <script src="wc/scripts/unitMenu.js" />
      <script src="wc/scripts/infoGamePanel.js" />
      <script src="wc/scripts/setInterval.js" />
      <script src="wc/scripts/playerSelectControl.js" />
      <script src="wc/scripts/getWay.js" />
      <script src="wc/scripts/getBastH.js" />
      <script src="wc/scripts/getBastVectors.js" />
      <script src="wc/scripts/fraction/unitsUpdate.js" />
      <script src="wc/scripts/fraction/ii_panick.js" />
      <script src="wc/scripts/fraction/ii_attack.js" />
      <script src="wc/scripts/fraction/attack_revers.js" />
      <script src="wc/scripts/fraction/ii_oil_control.js" />
      <script src="wc/scripts/fraction/check_resurs.js" />
      <script src="wc/scripts/fraction/peon_managmant.js" />
      <script src="wc/scripts/fraction/check_create_shablon.js" />
      <script src="wc/scripts/fraction/createShablon_reposition.js" />
      <script src="wc/scripts/fraction/dop_towers_control.js" />
      <script src="wc/scripts/fraction/dragons_attack.js" />
      <script src="wc/scripts/fraction/strike_control.js" />
      <script src="wc/scripts/fractionProto.js" />

      <script src="wc/scripts/fractionControl.js" />
      <script src="wc/scripts/checkAlienSea.js" />
      <script src="wc/scripts/checkAliens.js" />
      <script src="wc/scripts/getDistanceOfLineyka.js" />
      <script src="wc/scripts/unitProtoProg.js" />
      <script src="wc/scripts/waterSledProto.js" />
      <script src="wc/scripts/waterSledCreate.js" />
      <script src="wc/scripts/infoAddControl.js" />
      <script src="wc/scripts/goodSeaBuildCell.js" />
      <script src="wc/scripts/wellCellForBuilding.js" />
      <script src="wc/scripts/getMiniDistance.js" />
      <script src="wc/scripts/activeFreeLandObjectsToProg.js" />
      <script src="wc/scripts/landObjProtoProg.js" />
      <script src="wc/scripts/isBlocked.js" />
      <script src="wc/scripts/axesProto.js" />
      <script src="wc/scripts/unitPrice.js" />
      <script src="wc/scripts/myJobeTime.js" />
      <script src="wc/scripts/hpGraf.js" />
      <script src="wc/scripts/pausaMenu.js" />
      <script src="wc/scripts/inPausaMenu.js" />
      <script src="wc/scripts/inPausaMenuObjInCreate.js" />
      <script src="wc/scripts/drawAlarms.js" />

      <script src="wc/scripts/basic.js" />

    </Layout>
  );
}

module.exports = Wc;
