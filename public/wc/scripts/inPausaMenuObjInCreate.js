const in_pausa_menu_obj_in_create = function () {
  if (music) {
    music.pausa_command = true;
  }

  select_sound_fly(undefined, "click", 1);

  zst_obj = {
    x: 350,
    y: 350,
    gabarit: 500,
    alfa: 0,
    imageToDraw: zst,
    ret: false,
  };

  in_pausa_menu_obj_in = [
    {
      x: 500,
      y: 200,
      gabX: 150,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      text_a: "Exit to main menu",
      mas: 1,
      act: "exit",
    },
    {
      x: 500,
      y: 300,
      gabX: 150,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      text_a: "Restart scenario",
      mas: 1,
      act: "res",
    },
    {
      x: 500,
      y: 400,
      gabX: 150,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      text_a: "Return to game",
      mas: 1,
      act: "pausa",
    },
    { click: false },
  ];
};
