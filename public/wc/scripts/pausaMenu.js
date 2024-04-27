const pausa_menu = function () {
  ctx3.globalAlpha = 0.5;
  ctx3.fillStyle = "black";
  ctx3.fillRect(0, 0, width, height);
  ctx3.globalAlpha = 1;

  //////////////////////// zst_obj
  ctx3.globalAlpha = zst_obj.alfa;
  ctx3.drawImage(
    zst_obj.imageToDraw,
    0,
    0,
    1000,
    700,
    zst_obj.x - zst_obj.gabarit / 2,
    zst_obj.y - zst_obj.gabarit / 2,
    zst_obj.gabarit,
    zst_obj.gabarit
  );
  ctx3.globalAlpha = 1;

  if (zst_obj.alfa < 1 && !zst_obj.ret) {
    zst_obj.alfa += 0.01;
  } else if (zst_obj.alfa > 0 && zst_obj.ret) {
    zst_obj.alfa -= 0.05;

    if (zst_obj.alfa < 0) {
      zst_obj.alfa = 0;

      if (zst_obj.ret === "pausa") {
        pausa = 0;

        if (music) {
          music.go_command = 1;
        }
      } else if (zst_obj.ret === "res") {
        //console.log("ok");

        global_zanaves.alfa_step = 0.03;
        global_zanaves.timer = 0;
        global_zanaves.go_to = "night";
        global_zanaves.active = true;

        restart_map = 100;

        win_or_loose = false;

        if (music) {
          music.melody.pause();
          music = false;
        }

        player = false;
      } else if (zst_obj.ret === "exit") {
        //console.log("ok");

        global_zanaves.alfa_step = 0.03;
        global_zanaves.timer = 0;
        global_zanaves.go_to = "night";
        global_zanaves.active = true;

        exit_timer = 500;

        win_or_loose = false;

        if (music) {
          music.melody.pause();
          music = false;
        }

        player = false;
      }
    }
  }

  //////////////////////////////

  if (in_pausa_menu_obj_in.length && zst_obj.alfa > 0.9) {
    for (let i = 0; i < in_pausa_menu_obj_in.length - 1; i++) {
      let punkt = in_pausa_menu_obj_in[i];

      /*		
  if(punkt.click){
  
  if(punkt.mas<1){	
      punkt.mas+=0.01;
  }
  else{
      
  zst_obj.ret=punkt.act;	
      
  };
      
  };		
  */

      ctx3.globalAlpha = punkt.alfa_shadow;
      ctx3.fillStyle = "black";
      ctx3.fillRect(
        punkt.x - punkt.gabX / 2 + 10,
        punkt.y - punkt.gabY / 2 + 10,
        punkt.gabX * punkt.mas,
        punkt.gabY * punkt.mas
      );

      if (punkt.alfa > 1) {
        punkt.alfa = 1;
      }

      ctx3.globalAlpha = punkt.alfa;
      ctx3.drawImage(
        sp,
        0,
        50,
        200,
        50,
        punkt.x - (punkt.gabX * punkt.mas) / 2,
        punkt.y - (punkt.gabY * punkt.mas) / 2,
        punkt.gabX * punkt.mas,
        punkt.gabY * punkt.mas
      );
      ctx3.globalAlpha = 1;

      if (punkt.alfa < 1) {
        punkt.alfa += 0.1;
        punkt.alfa_shadow += 0.05;
      } else {
        for (let i = 0; i < punkt.text_a.length; i++) {
          let ob = punkt.text_a[i];

          let imageToDraw; //=unit_menu_little_liters;

          imageToDraw = unit_menu_little_liters;

          let x = punkt.x - (punkt.text_a.length * 8 * punkt.mas) / 2;

          ctx3.drawImage(
            imageToDraw,
            menu_litera(ob),
            0,
            12,
            12,
            x + i * 8 * punkt.mas,
            punkt.y - 7.5 * punkt.mas,
            10 * punkt.mas,
            15 * punkt.mas
          );
        }
      }

      if (
        !(
          obj.x < punkt.x - punkt.gabX / 2 ||
          obj.x > punkt.x + punkt.gabX / 2 ||
          obj.y < punkt.y - punkt.gabY / 2 ||
          obj.y > punkt.y + punkt.gabY / 2
        )
      ) {
        ctx3.strokeStyle = "yellow";
        ctx3.strokeRect(
          punkt.x - (punkt.gabX * punkt.mas) / 2,
          punkt.y - (punkt.gabY * punkt.mas) / 2,
          punkt.gabX * punkt.mas,
          punkt.gabY * punkt.mas
        );

        if (pausa_click && !in_pausa_menu_obj_in[3].click) {
          in_pausa_menu_obj_in[3].click = true;

          click_key = { key: punkt, base: zst_obj };
        }
      }
    }
  }
};
