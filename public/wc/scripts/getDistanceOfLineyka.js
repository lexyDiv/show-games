const get_distanse_on_lineyka = function (
    ot_cell,
    ot_gabarit,
    do_cell,
    do_gabarit
  ) {
    //let dif_hor=do_cell.horizont-ot_cell.horizont;
    //let dif_ver=do_cell.vertikal-ot_cell.vertikal;
  
    //centrCell_vertikal
  
    let distanse;
  
    //let lineyka;
  
    if ((ot_gabarit === 50 || ot_gabarit === 150) && do_gabarit === 100) {
      let a = do_cell.x + 50 - (ot_cell.x + 25);
      let b = do_cell.y - (ot_cell.y + 25);
  
      distanse = Math.sqrt(a * a + b * b);
    } else if (
      (ot_gabarit === 50 || ot_gabarit === 150) &&
      (do_gabarit === 50 || do_gabarit === 150)
    ) {
      let a = do_cell.x - ot_cell.x;
      let b = do_cell.y - ot_cell.y;
  
      distanse = Math.sqrt(a * a + b * b);
    } else if (ot_gabarit === 100 && (do_gabarit === 50 || do_gabarit === 150)) {
      let a = do_cell.x + 25 - (ot_cell.x + 50);
      let b = do_cell.y + 25 - ot_cell.y;
  
      distanse = Math.sqrt(a * a + b * b);
    } else if (ot_gabarit === 100 && do_gabarit === 100) {
      let a = do_cell.x + 50 - (ot_cell.x + 50);
      let b = do_cell.y - ot_cell.y;
  
      distanse = Math.sqrt(a * a + b * b);
    }
  
    //console.log(dif_ver+dif_ver); pausa=1; lineyka_2x2Cell_do_2x2Cell
    //console.log(lineyka);
  
    //console.log(distanse);
  
    /*	
  if(!distanse&&distanse!==0){
      
      console.log("dif_hor : "+dif_hor);
      console.log("dif_ver : "+dif_ver);
      console.log("distanse : "+distanse);
      console.log(ot_cell.unit)
      console.log(do_cell.unit);
      
      console.log("lineyka.field : ");
      console.log(lineyka.field);
      
      
      pausa=1;
  };	
  */
  
    return distanse;
  };