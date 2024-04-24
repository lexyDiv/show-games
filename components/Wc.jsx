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
      <script src="wc/scripts/constructors.js" />
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

      <script src="wc/scripts/basic.js" />
      
    </Layout>
  );
}

module.exports = Wc;
