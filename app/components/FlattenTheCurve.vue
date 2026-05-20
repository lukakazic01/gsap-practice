<template>
  <div class="wrapper">
    <div class="banner">

      <div class="panel panel1">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/hands-icon.svg" alt="" width="100" height="100">
        <div class="heading-wrapper">
          <h2><span class="word1">wash</span><span class="word2">&nbsp;hands</span></h2>
        </div>
      </div>

      <div class="panel panel2">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/mask-icon.svg" alt="" width="100" height="100">
        <div class="heading-wrapper">
          <h2><span class="word1">wear</span><span class="word2">&nbsp;mask</span></h2>
        </div>
      </div>

      <div class="panel panel3">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/home-icon.svg" alt="" width="100" height="100">
        <div class="heading-wrapper">
          <h2><span class="word1">stay</span><span class="word2">&nbsp;home</span></h2>
        </div>
      </div>
      <div class="panel panel4">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="300" height="250" viewBox="0 0 300 250">
          <path id="curveTall" class="cls-2" d="M49.16 192.62h203.06c-37.09-.65-53-135.31-105.76-135.27-55.27.05-78.7 135.27-97.3 135.27z" transform="translate(0)" />
          <path id="curveFlat" class="cls-3" d="M49.16 192.62h203.06c-37.09-.62-49.44-48.15-102.22-48.11-55.26.05-82.24 48.11-100.84 48.11z" transform="translate(0)" /></svg>
        <div class="heading-wrapper">
          <h2><span class="word1">#</span><span class="word2">flattenTheCurve</span></h2>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { GSDevTools } from "gsap/GSDevTools";

const gsap = useGSAP();
let master: gsap.core.Timeline;

function panelAnimation(panel: string) {
  const img = select(panel + " img");
  const headings = select(panel + " h2");
  const word1 = select(panel + " .word1");
  const word2 = select(panel + " .word2");
  return gsap.timeline()
    .set(panel, { left: 0 })
    .from(img, { x: -150, scale: 0.5, ease: "power1.in" })
    .from(img, { y: 50, ease: "power1.out" }, "<")
    .from(img, { opacity: 0, duration: 0.2 }, "<")
    .from(word1, { x: -80 }, "<0.25")
    .from(word2, { x: 80 }, "<")
    .from(headings, { opacity: 0, duration: 0.2 }, "<")

    .to(img, { x: 150, scale: 0.5, ease: "power1" }, "+=0.5")
    .to(img, { y: 80, ease: "power1.in" }, "<")
    .to(headings, { y: 20, opacity: 0, duration: 0.2 }, "<")
    .to(img, { opacity: 0, duration: 0.2 }, "-=0.2");
}

function curveAnimation() {
  return gsap.timeline()
    .set(".panel4", { left: 0 })
    .from(".panel4", { opacity: 0, duration: 0.2 })
    .from(".panel4 .heading-wrapper", { opacity: 0, y: -134, duration: 0.2, ease: "power1.in" }, "<")
    .to("#curveTall", { attr: { d: "M49.16 192.62h203.06c-37.09-.62-49.44-48.15-102.22-48.11-55.26.05-82.24 48.11-100.84 48.11z" }, duration: 0.1 }, "<0.13");
}

onMounted(() => {
  master = gsap.timeline();
  master
    .add(panelAnimation(".panel1"))
    .add(panelAnimation(".panel2"), "=-0.5")
    .add(panelAnimation(".panel3"), "=-0.5")
    .add(curveAnimation(), "=-0.2");
  GSDevTools.create({ animate: master });
});
</script>

<style scoped>
.banner {
  /*visibility:hidden;*/
  width:300px;
  overflow:hidden;
  height:250px;
  background:red;
  position:relative;
  background-color:#c36;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/wash-hands-bg.svg);
}

h2 {
    font-family:Kanit;
    color:white;
    margin:0;
    font-weight:800;
    font-size:39px;
}
img {
    position:absolute;
    left:100px;
    top:50px;
}
.heading-wrapper {
    position:relative;
    top:150px;
    text-align:center;
}
h2 span:nth-child(2) {
    color:#0cf;
}

h2 span {
    display:inline-block;
}

.panel {
    position:absolute;
    width:300px;
    height:250px;
}

.panel2 {
    left:300px;
}

.panel3 {
    left:600px;
}

.panel4 {
    left:900px;
}

.panel4 svg {
    position:absolute;
}

.panel4 h2{
    font-size:34px;
    font-weight:400;
    letter-spacing:1px;
}

.panel4 .heading-wrapper{
    top:95px;
}
.cls-1 { fill: #f460b1; }
.cls-2 { fill: #FFF; }
.cls-3 { fill: #f69; }
</style>
