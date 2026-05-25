<template>
  <div class="contentBlock">content 1</div>
  <div class="contentBlock">content 2</div>
  <div class="contentBlock">content 3</div>
  <div class="contentBlock">content 4</div>

  <div class="contentBlock boxContainer">content 5
    <div class="box"></div>
  </div>

  <div class="contentBlock">content 6</div>
  <div class="contentBlock">content 7</div>
  <div class="contentBlock">content 8</div>
  <div class="contentBlock">content 9</div>
  <div class="contentBlock">content 10</div>
  <div class="contentBlock">content 11</div>
  <div class="contentBlock" style="height:100vh;">content 12</div>
</template>

<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  ScrollTrigger.create({
    trigger: ".boxContainer",
    start: "top 300px",
    end: "+=300",
    markers: true,
    pin: true,
    pinSpacing: true,
  });
});
</script>

<style>
.contentBlock {
  height:100px;
  width:100%;
  background:rgb(0, 0, 0, 0.1);
  display:flex;
  justify-content:center;
  align-items:center;
}

.box {
  width:100px;
  height:100px;
  background:#f60;
  position:absolute;
  left:100px;
}

.pin-spacer {
  /* background:rgb(0, 250, 100, 0.3); */
}

.contentBlock:nth-child(odd) {
  background:rgb(0, 0, 0, 0.3);
}

.contentBlock.boxContainer {
  background:rgb(255, 100, 0, 0.2);
}
</style>
