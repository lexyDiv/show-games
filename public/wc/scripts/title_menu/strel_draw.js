/* eslint-disable no-shadow */
/* eslint-disable quotes */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const strel_draw = function (alfa, alfa_s) {
  if (title.list_3.mapDraw) {
    for (let k = 0; k < 2; k++) {
      let draw = keys_strel;

      if (k) {
        draw = keys_kaskad;

        for (let i = 0; i < title.list_3.texts_little.length; i++) {
          let punkt = title.list_3.texts_little[i];

          for (let i = 0; i < punkt.text_a.length; i++) {
            let ob = punkt.text_a[i];

            let imageToDraw; //= unit_menu_little_liters;

            imageToDraw = unit_menu_little_liters_3;

            let x = punkt.x - (punkt.text_a.length * 7) / 2;

            ctx3.globalAlpha = keys_menu[0].alfa;
            ctx3.drawImage(
              imageToDraw,
              menu_litera(ob),
              0,
              12,
              12,
              x + i * 7,
              punkt.y,
              10,
              12,
            );
            ctx3.globalAlpha = 1;
          }
        }
      }

      for (let i = 0; i < draw.length; i++) {
        let punkt = draw[i];

        // if(k){
        ctx3.globalAlpha = alfa_s;
        ctx3.fillStyle = "black";
        ctx3.fillRect(
          punkt.x - punkt.gabX / 2 + 10,
          punkt.y - punkt.gabY / 2 + 10,
          punkt.gabX,
          punkt.gabY,
        );
        ctx3.globalAlpha = 1;
        // };

        ctx3.globalAlpha = alfa;
        ctx3.drawImage(
          sp,
          0,
          punkt.animY,
          200,
          50,
          punkt.x - punkt.gabX / 2,
          punkt.y - punkt.gabY / 2,
          punkt.gabX,
          punkt.gabY,
        );
        ctx3.globalAlpha = 1;

        for (let i = 0; i < punkt.txt.length; i++) {
          let ob = punkt.txt[i];

          let imageToDraw; //= unit_menu_little_liters;

          imageToDraw = unit_menu_little_liters_2;

          let x;

          x = punkt.x - punkt.gabX / 2;

          ctx3.globalAlpha = alfa;
          ctx3.drawImage(
            imageToDraw,
            menu_litera(ob),
            0,
            12,
            12,
            x + i * 8,
            punkt.y - 7.5,
            10,
            15,
          );
          ctx3.globalAlpha = 1;
        }

        if (punkt.blue) {
          ctx3.globalAlpha = 0.3;
          ctx3.fillStyle = "blue";
          ctx3.fillRect(
            punkt.x - punkt.gabX / 2,
            punkt.y - punkt.gabY / 2,
            punkt.gabX,
            punkt.gabY,
          );
          ctx3.globalAlpha = 1;
        }
      }
    }
  }
};
