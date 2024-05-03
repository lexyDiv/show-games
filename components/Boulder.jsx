/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
const React = require('react');
const Layout = require("./Layout");

function Boulder({ title }) {
  return (
    <Layout title={title}>

      <audio src="boulder/ending.mp3" id="ending" />
      <audio src="boulder/oneupzv.mp3" id="oneupzv" />
      <audio src="boulder/zastmuz.mp3" id="zastmuz" />
      <audio src="boulder/level6.mp3" id="level6" />
      <audio src="boulder/level5.mp3" id="level5" />
      <audio src="boulder/level4.mp3" id="level4" />
      <audio src="boulder/level3.mp3" id="level3" />
      <audio src="boulder/level2.mp3" id="level2" />
      <audio src="boulder/level1.mp3" id="level1" />
      <audio src="boulder/sound.wav" id="sound" />
      <audio src="boulder/soundalm.wav" id="soundalm" />
      <audio src="boulder/exitsound.wav" id="exitsound" />
      <audio src="boulder/fly.wav" id="fly" />
      <audio src="boulder/buh.mp3" id="buh" />
      <audio src="boulder/remoove.mp3" id="remoove" />
      <audio src="boulder/buhzem.wav" id="buhzem" />
      <audio src="boulder/buhalm.mp3" id="buhalm" />
      <audio src="boulder/buhtrup.mp3" id="buhtrup" />
      <audio src="boulder/buhtrupalm.mp3" id="buhtrupalm" />
      <audio src="boulder/win.wav" id="win" />
      <audio src="boulder/firzv.mp3" id="firzv" />
      <audio src="boulder/ggg.wav" id="ggg" />
      <audio src="boulder/title.mp3" id="title" />
      <audio src="boulder/miobzv.wav" id="miobzv" />

      <canvas id="c" width="1000" height="600" />
      <script src="https://code.jquery.com/jquery-2.1.0.js" />
      <canvas id="canvas" width="1000" height="600" />

      <script type="module" src="boulder/scripts/index.js" />

    </Layout>
  );
}

module.exports = Boulder;
