<template>
  <div>
    <p class="text-red-500 text-[40px] font-bold">CREATIVE CODING CLUB</p>
  </div>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";

const gsap = useGSAP();

const duration = 0.2;
const each = 0.1;
const z = 50;
const rotationY = 35;
const rotationX = 5;

onMounted(() => {
  const text = SplitText.create("p", { type: "chars" });
  const tl = gsap.timeline();
  gsap.set(text.chars, { transformPerspective: 180, filter: "brightness(1)" });
  tl.to(text.chars, {
    z: z,
    filter: "brightness(2)",
    duration: duration,
    stagger: {
      each: each,
      yoyo: true,
      repeat: 1,
    },
  });
  tl.to(text.chars, {
    rotationY: rotationY,
    rotationX: rotationX,
    stagger: {
      each: each,
      yoyo: true,
      repeat: 1,
    },
    duration: duration / 2,
  }, 0);
  tl.to(text.chars, {
    rotationY: -rotationY,
    rotationX: -rotationX,
    stagger: {
      each: each,
      yoyo: true,
      repeat: 1,
    },
    duration: duration / 2,
  }, duration);
  GSDevTools.create({ animation: tl });
});
</script>
