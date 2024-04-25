const hp_graf = function (x, res, max) {
  let hp_proc = (res * 100) / max;

  let gabarit_x = (res * x) / max;

  let color;

  if (hp_proc > 70) {
    color = "green";
  } else if (hp_proc > 40) {
    color = "yellow";
  } else {
    color = "red";
  }

  return { gabarit: gabarit_x, color: color, proc: hp_proc };
};
