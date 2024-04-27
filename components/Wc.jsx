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

      <script defer src="wc/scripts/script_1.js" />
      <script defer src="wc/scripts/images.js" />

      <script defer src="wc/scripts/constructors/Title.js" />
      <script defer src="wc/scripts/constructors/Radar.js" />
      <script defer src="wc/scripts/constructors/Panick.js" />
      <script defer src="wc/scripts/constructors/Alarm.js" />
      <script defer src="wc/scripts/constructors/Axes.js" />
      <script defer src="wc/scripts/constructors/ClickSave.js" />
      <script defer src="wc/scripts/constructors/Obj.js" />
      <script defer src="wc/scripts/constructors/Strike.js" />
      <script defer src="wc/scripts/constructors/Fraction.js" />
      <script defer src="wc/scripts/constructors/II_Attack.js" />
      <script defer src="wc/scripts/constructors/Water_sled.js" />
      <script defer src="wc/scripts/constructors/ShablonObj.js" />
      <script defer src="wc/scripts/constructors/LandObj.js" />

      <script defer src="wc/scripts/landObj/check_steny.js" />
      <script defer src="wc/scripts/landObj/check_gory.js" />
      <script defer src="wc/scripts/landObj/player_pro_draw.js" />
      <script defer src="wc/scripts/landObj/extreamGetOutCell.js" />
      <script defer src="wc/scripts/landObj/player_pro_building_position.js" />
      <script defer src="wc/scripts/landObj/getOutCell.js" />
      <script defer src="wc/scripts/landObj/draw.js" />
      <script defer src="wc/scripts/landObj/drawTrups.js" />
      <script defer src="wc/scripts/landObj/prog.js" />

      <script defer src="wc/scripts/constructors/DragoonDamage.js" />
      <script defer src="wc/scripts/constructors/Unit.js" />
      <script defer src="wc/scripts/constructors/Continent.js" />
      <script defer src="wc/scripts/constructors/Sound.js" />
      <script defer src="wc/scripts/constructors/Sea.js" />
      <script defer src="wc/scripts/var.js" />

      <script defer src="wc/scripts/sound/prog_sound_menu.js" />
      <script defer src="wc/scripts/sound/prog_fight.js" />
      <script defer src="wc/scripts/sound/prog.js" />
      <script defer src="wc/scripts/sound/select_sound_fly.js" />
      <script defer src="wc/scripts/sound/select_sound_fight.js" />
      <script defer src="wc/scripts/sound/select_sound.js" />

      <script defer src="wc/scripts/get_map.js" />

      <script defer src="wc/scripts/process_functions/global_obnul.js" />
      <script defer src="wc/scripts/process_functions/global_zanaves_prog_draw.js" />
      <script defer src="wc/scripts/process_functions/restart_map_prog.js" />
      <script defer src="wc/scripts/process_functions/click_to_iden_prog.js" />
      <script defer src="wc/scripts/process_functions/mem_prog.js" />
      <script defer src="wc/scripts/process_functions/mem_prog_load.js" />
      <script defer src="wc/scripts/process_functions/music_prog.js" />
      <script defer src="wc/scripts/process_functions/create_level.js" />
      <script defer src="wc/scripts/process_functions/game_music_control.js" />
      <script defer src="wc/scripts/new_func.js" />

      <script defer src="wc/scripts/title_menu/do_start_draw.js" />
      <script defer src="wc/scripts/title_menu/title/prog_draw.js" />
      <script defer src="wc/scripts/title_menu/click_key_prog.js" />
      <script defer src="wc/scripts/title_menu/menu_cursor_draw.js" />
      <script defer src="wc/scripts/title_menu/type_3_order.js" />
      <script defer src="wc/scripts/title_menu/title/list_5_prog.js" />
      <script defer src="wc/scripts/title_menu/title/get_text.js" />
      <script defer src="wc/scripts/title_menu/title/create_kick_start.js" />
      <script defer src="wc/scripts/title_menu/title/strel_punkts.js" />
      <script defer src="wc/scripts/title_menu/strel_draw.js" />
      <script defer src="wc/scripts/title_menu/strel_prog.js" />
      <script defer src="wc/scripts/title_menu/kaskad_prog.js" />
      <script defer src="wc/scripts/title_menu/title/re_subjects.js" />
      <script defer src="wc/scripts/title_menu/maps_txt_draw.js" />
      <script defer src="wc/scripts/title_menu/exit.js" />
      <script defer src="wc/scripts/title_menu/menu_litera.js" />
      <script defer src="wc/scripts/main_menu.js" />
      <script defer src="wc/scripts/menu_push_2.js" />
      <script defer src="wc/scripts/levels.js" />

      <script defer src="wc/scripts/soundControl.js" />
      <script defer src="wc/scripts/landObj.js" />

      <script defer src="wc/scripts/map/map_initialisation.js" />
      <script defer src="wc/scripts/map/water_initialisation.js" />
      <script defer src="wc/scripts/map/check_continents.js" />
      <script defer src="wc/scripts/map/check_seas.js" />
      <script defer src="wc/scripts/mapInit.js" />


      <script defer src="wc/scripts/shablonLand.js" />
      <script defer src="wc/scripts/unitCellUpdate.js" />
      <script defer src="wc/scripts/fractionsCreate.js" />

      <script defer src="wc/scripts/obj/progCenterDrawPoint.js" />
      <script defer src="wc/scripts/obj/drawSpecial.js" />
      <script defer src="wc/scripts/obj/drawWater.js" />
      <script defer src="wc/scripts/obj/draw2.js" />
      <script defer src="wc/scripts/obj/draw.js" />
      <script defer src="wc/scripts/obj/drawRadar.js" />
      <script defer src="wc/scripts/obj/getVektors_ii.js" />
      <script defer src="wc/scripts/obj/getVektorsSweeme.js" />
      <script defer src="wc/scripts/objProto.js" />
      <script defer src="wc/scripts/landObjProto.js" />
      <script defer src="wc/scripts/unitProto.js" />
      <script defer src="wc/scripts/dragoonDamageProto.js" />
      <script defer src="wc/scripts/unitProtoDrawUnit.js" />
      <script defer src="wc/scripts/removeControl.js" />
      <script defer src="wc/scripts/canvas3.js" />
      <script defer src="wc/scripts/getActiveZone.js" />
      <script defer src="wc/scripts/drawMouseZone.js" />
      <script defer src="wc/scripts/getGoodSweemeCell.js" />
      <script defer src="wc/scripts/getSweemeGroopPosition.js" />
      <script defer src="wc/scripts/dragoonsGroopPosition.js" />
      <script defer src="wc/scripts/getMyGroupPosition.js" />
      <script defer src="wc/scripts/window.js" />
      <script defer src="wc/scripts/radarProto.js" />
      <script defer src="wc/scripts/createUnitDopMenu.js" />
      <script defer src="wc/scripts/playerGroopProg.js" />
      <script defer src="wc/scripts/playerGroupDraw.js" />
      <script defer src="wc/scripts/unitDopMenuControl.js" />
      <script defer src="wc/scripts/unitMenuDraw.js" />
      <script defer src="wc/scripts/unitMenu.js" />
      <script defer src="wc/scripts/infoGamePanel.js" />
      <script defer src="wc/scripts/setInterval.js" />
      <script defer src="wc/scripts/playerSelectControl.js" />
      <script defer src="wc/scripts/getWay.js" />
      <script defer src="wc/scripts/getBastH.js" />
      <script defer src="wc/scripts/getBastVectors.js" />
      <script defer src="wc/scripts/fraction/unitsUpdate.js" />
      <script defer src="wc/scripts/fraction/ii_panick.js" />
      <script defer src="wc/scripts/fraction/ii_attack.js" />
      <script defer src="wc/scripts/fraction/attack_revers.js" />
      <script defer src="wc/scripts/fraction/ii_oil_control.js" />
      <script defer src="wc/scripts/fraction/check_resurs.js" />
      <script defer src="wc/scripts/fraction/peon_managmant.js" />
      <script defer src="wc/scripts/fraction/check_create_shablon.js" />
      <script defer src="wc/scripts/fraction/createShablon_reposition.js" />
      <script defer src="wc/scripts/fraction/dop_towers_control.js" />
      <script defer src="wc/scripts/fraction/dragons_attack.js" />
      <script defer src="wc/scripts/fraction/strike_control.js" />
      <script defer src="wc/scripts/fraction/ii.js" />
      <script defer src="wc/scripts/fraction/lesopilka.js" />
      <script defer src="wc/scripts/fraction/kuznya.js" />
      <script defer src="wc/scripts/fraction/foundry.js" />
      <script defer src="wc/scripts/fraction/globalUpdate.js" />
      <script defer src="wc/scripts/fraction/unit_dop_menu_create.js" />
      <script defer src="wc/scripts/fraction/check_resurs_pro.js" />
      <script defer src="wc/scripts/fraction/update_createShablon.js" />
      <script defer src="wc/scripts/fraction/alarm_more_warriors.js" />
      <script defer src="wc/scripts/fraction/checkAlarms_player.js" />
      <script defer src="wc/scripts/fraction/checkAlarms.js" />
      <script defer src="wc/scripts/fraction/check_end.js" />
      <script defer src="wc/scripts/fractionProto.js" />
      <script defer src="wc/scripts/fractionControl.js" />
      <script defer src="wc/scripts/checkAlienSea.js" />
      <script defer src="wc/scripts/checkAliens.js" />
      <script defer src="wc/scripts/getDistanceOfLineyka.js" />
      <script defer src="wc/scripts/unitProtoProg.js" />
      <script defer src="wc/scripts/waterSledProto.js" />
      <script defer src="wc/scripts/waterSledCreate.js" />
      <script defer src="wc/scripts/infoAddControl.js" />
      <script defer src="wc/scripts/goodSeaBuildCell.js" />
      <script defer src="wc/scripts/wellCellForBuilding.js" />
      <script defer src="wc/scripts/getMiniDistance.js" />
      <script defer src="wc/scripts/activeFreeLandObjectsToProg.js" />
      <script defer src="wc/scripts/isBlocked.js" />
      <script defer src="wc/scripts/axesProto.js" />
      <script defer src="wc/scripts/unitPrice.js" />
      <script defer src="wc/scripts/myJobeTime.js" />
      <script defer src="wc/scripts/hpGraf.js" />
      <script defer src="wc/scripts/pausaMenu.js" />
      <script defer src="wc/scripts/inPausaMenu.js" />
      <script defer src="wc/scripts/inPausaMenuObjInCreate.js" />
      <script defer src="wc/scripts/drawAlarms.js" />

      <script defer src="wc/scripts/basic.js" />

    </Layout>
  );
}

module.exports = Wc;
