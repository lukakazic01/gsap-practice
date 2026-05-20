<template>
  <div class="text-white">
    <p class="text-4xl font-bold uppercase">Rubberbander</p>
  </div>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText";

const gsap = useGSAP();
onMounted(() => {
  const text = SplitText.create("p", { type: "chars" });
  gsap.from(text.chars, {
    x: gsap.utils.distribute({ base: -200, amount: 400, ease: "none" }),
    scale: gsap.utils.distribute({ base: 0.2, amount: 1.5, from: "center", ease: "power1.in" }),
    ease: "linear",
    duration: 0.5,
    repeat: -1,
    opacity: 0,
    yoyo: true,
    stagger: {
      from: "center",
      amount: 0.01,
    },
  });
});
</script>
