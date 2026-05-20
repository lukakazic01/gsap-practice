<template>
  <div>
    <div class="box size-20 bg-blue-300 rounded-md flex items-center justify-center" />
    <button class="rounded-md bg-green-500 text-white px-4 py-2 w-[100px] mt-10 cursor-pointer" @click="play">Play</button>
  </div>
</template>

<script setup lang="ts">
const gsap = useGSAP();

let tl: gsap.core.Timeline;
let animation: gsap.core.Timeline;

onMounted(() => {
  tl = gsap.timeline({ paused: true });
  const blue = select(".box");
  const blueAni = gsap.timeline().from(blue, { x: -200 })
    .to(blue, { scale: 2 })
    .to(blue, { rotation: 360 })
    .add("middle")
    .to(blue, { scale: 1 })
    .to(blue, { x: 200 })
    .add("end");
  animation = gsap.timeline()
    .add(blueAni.tweenTo("middle", { repeat: 1 }))
    .add(blueAni.tweenTo("end"));
});

const play = () => {
  animation.restart();
};
</script>

<style scoped>
.box {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/face-bg.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
