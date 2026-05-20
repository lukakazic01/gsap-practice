<template>
  <div class="wrapper invisible flex gap-6 items-center perspective-normal mt-40">
    <div v-for="i in 5" :key="i" class="box size-40 bg-pink-300 rounded-md" />
  </div>
  <p class="text text-white text-[100px] font-bold mt-40 tracking-widest">Wind blow out effect</p>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText";

const gsap = useGSAP();

onMounted(() => {
  const animation = gsap.timeline({});
  gsap.set(".wrapper", { autoAlpha: 1 });
  const split = new SplitText("p", { type: "chars" });
  gsap.set(split.chars, { transformPerspective: 500 });
  animation.to(".box", {
    rotationY: 360,
    duration: 6,
    repeat: -1,
    ease: "linear",
    transformOrigin: "50% 50%",
  }).to(split.chars, { duration: 1.2, rotationY: 360, ease: "back(2)", stagger: { amount: 1 } }, 0);
});
</script>
