/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-undef */
SablonObj.prototype.contaktCellsGetVektors = function (obj, cell) {
  if (!cell) {
    if (
      obj.type === 2
      || obj.type === 4
      || obj.type === 5
      || obj.type === 'kuznya'
      || obj.type === 'ogreBase'
      || obj.type === 'altar'
      || obj.type === 'port'
      || obj.type === 'oil_Ref'
      || obj.type === 'foundry'
      || obj.type === 'dragon_roost'
      || obj.type === 'temple'
    ) {
      if (obj.vertikal - 2 === this.vertikal) {
        this.outPrioritet = 8;

        if (
          obj.horizont - 2 === this.horizont
          || obj.horizont - 1 === this.horizont
        ) {
          this.moveVektor = 'right_Down';
          this.moveVektorOut = 'left_Up';
        }

        if (obj.horizont === this.horizont) {
          this.moveVektor = 'down';
          this.moveVektorOut = 'up';
        }

        if (
          obj.horizont + 1 === this.horizont
          || obj.horizont + 2 === this.horizont
        ) {
          this.moveVektor = 'down_Left';
          this.moveVektorOut = 'up_Right';
        }
      } else if (obj.vertikal - 1 === this.vertikal) {
        this.outPrioritet = 7;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektor = 'right_Down';
          this.moveVektorOut = 'left_Up';
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = 'down_Left';
          this.moveVektorOut = 'up_Right';
        }
      } else if (obj.vertikal === this.vertikal) {
        this.outPrioritet = 6;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektor = 'right';
          this.moveVektorOut = 'left';
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = 'left';
          this.moveVektorOut = 'right';
        }
      } else if (obj.vertikal + 1 === this.vertikal) {
        if (obj.horizont - 2 === this.horizont) {
          this.moveVektor = 'up_Right';
          this.moveVektorOut = 'down_Left';
          if (obj.type === 2) {
            this.outPrioritet = 5;
          } else if (obj.type === 4 || obj.type === 5) {
            this.outPrioritet = 1;
          }
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = 'left_Up';
          this.moveVektorOut = 'right_Down';
          this.outPrioritet = 5;
        }
      }
      if (obj.vertikal + 2 === this.vertikal) {
        if (
          obj.horizont - 2 === this.horizont
          || obj.horizont - 1 === this.horizont
        ) {
          this.moveVektor = 'up_Right';
          this.moveVektorOut = 'down_Left';
          this.outPrioritet = 4;
        }

        if (obj.horizont === this.horizont) {
          this.moveVektor = 'up';
          this.moveVektorOut = 'down';
          this.outPrioritet = 3;
        }

        if (
          obj.horizont + 1 === this.horizont
          || obj.horizont + 2 === this.horizont
        ) {
          if (obj.horizont + 1 === this.horizont) {
            if (obj.type === 2) {
              this.outPrioritet = 1;
            } else if (obj.type === 4 || obj.type === 5) {
              this.outPrioritet = 5;
            }
          } else {
            this.outPrioritet = 2;
          }

          this.moveVektor = 'left_Up';
          this.moveVektorOut = 'right_Down';

          // console.log(obj.contaktCells);
        }
      }
    } else if (obj.type === 1) {
      if (obj.vertikal - 2 === this.vertikal) {
        this.outPrioritet = 7;

        if (
          obj.horizont - 2 === this.horizont
          || obj.horizont - 1 === this.horizont
        ) {
          this.moveVektorOut = 'left_Up';
        }

        if (obj.horizont === this.horizont) {
          this.moveVektorOut = 'up';
        }

        if (
          obj.horizont + 1 === this.horizont
          || obj.horizont + 2 === this.horizont
        ) {
          this.moveVektorOut = 'up_Right';
        }
      } else if (obj.vertikal - 1 === this.vertikal) {
        this.outPrioritet = 6;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektorOut = 'left_Up';
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektorOut = 'up_Right';
        }
      } else if (obj.vertikal === this.vertikal) {
        this.outPrioritet = 5;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektorOut = 'left';
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektorOut = 'right';
        }
      } else if (obj.vertikal + 1 === this.vertikal) {
        this.outPrioritet = 4;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektorOut = 'down_Left';
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektorOut = 'right_Down';
        }
      }
      if (obj.vertikal + 2 === this.vertikal) {
        this.outPrioritet = 3;

        if (
          obj.horizont - 2 === this.horizont
          || obj.horizont - 1 === this.horizont
        ) {
          this.moveVektorOut = 'down_Left';

          if (obj.horizont - 2 === this.horizont) {
            this.outPrioritet = 1;

            // console.log("huynya");
          } else {
            this.outPrioritet = 2;
          }
        }

        if (obj.horizont === this.horizont) {
          this.moveVektorOut = 'down';
        }

        if (
          obj.horizont + 1 === this.horizont
          || obj.horizont + 2 === this.horizont
        ) {
          this.moveVektorOut = 'right_Down';

          // console.log(obj.contaktCells);
          if (obj.horizont + 1 === this.horizont) {
            obj.cellToOut = obj.contaktCells[obj.contaktCells.length - 1];
          }
        }
      }
    } else if (obj.type === 3 || obj.type === 'tower') {
      if (obj.vertikal - 2 === this.vertikal) {
        if (
          obj.horizont - 1 === this.horizont
          || obj.horizont === this.horizont
        ) {
          this.moveVektor = 'right_Down';
        }

        if (
          obj.horizont + 1 === this.horizont
          || obj.horizont + 2 === this.horizont
        ) {
          this.moveVektor = 'down_Left';
        }
      } else if (obj.vertikal - 1 === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = 'right_Down';
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = 'down_Left';
        }
      } else if (obj.vertikal === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = 'up_Right';
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = 'left_Up';
        }
      } else if (obj.vertikal + 1 === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = 'up_Right';
        }
        if (obj.horizont === this.horizont) {
          this.moveVektor = 'up_Right';
        }

        if (obj.horizont + 1 === this.horizont) {
          this.moveVektor = 'left_Up';
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = 'left_Up';
        }
      }
    } else if (obj.type === 'wood') {
      // console.log("ok");

      if (obj.vertikal - 1 === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = 'right_Down';
        }

        if (obj.horizont === this.horizont) {
          this.moveVektor = 'down';
        }

        if (obj.horizont + 1 === this.horizont) {
          this.moveVektor = 'down_Left';
        }
      } else if (obj.vertikal === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = 'right';
        }
        if (obj.horizont + 1 === this.horizont) {
          this.moveVektor = 'left';
        }
      } else if (obj.vertikal + 1 === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = 'up_Right';
        }
        if (obj.horizont === this.horizont) {
          this.moveVektor = 'up';
        }

        if (obj.horizont + 1 === this.horizont) {
          this.moveVektor = 'left_Up';
        }
      }
    }
  } else if (obj.vertikal - 1 === this.vertikal) {
    if (obj.horizont - 1 === this.horizont) {
      this.moveVektor = 'right_Down';
    }

    if (obj.horizont === this.horizont) {
      this.moveVektor = 'down';
    }

    if (obj.horizont + 1 === this.horizont) {
      this.moveVektor = 'down_Left';
    }
  } else if (obj.vertikal === this.vertikal) {
    if (obj.horizont - 1 === this.horizont) {
      this.moveVektor = 'right';
    }
    if (obj.horizont + 1 === this.horizont) {
      this.moveVektor = 'left';
    }
  } else if (obj.vertikal + 1 === this.vertikal) {
    if (obj.horizont - 1 === this.horizont) {
      this.moveVektor = 'up_Right';
    }
    if (obj.horizont === this.horizont) {
      this.moveVektor = 'up';
    }

    if (obj.horizont + 1 === this.horizont) {
      this.moveVektor = 'left_Up';
    }
  }
};
