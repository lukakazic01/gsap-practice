<template>
  <div class="size-[700px] relative flex text-white flex-col items-center justify-center">
    <p class="text-4xl font-bold absolute">Hello</p>
    <p class="text-4xl font-bold absolute">World</p>
    <p class="text-4xl font-bold absolute">Im</p>
    <p class="text-4xl font-bold absolute">Luka</p>
  </div>
</template>

<script setup lang="ts">
const gsap = useGSAP();
const duration = 0.5;
const pauseAmmount = 0.5;
const staggerAmount = duration + pauseAmmount;

onMounted(() => {
  const targets = gsap.utils.toArray("p");
  const repeatDelay = staggerAmount * (targets.length - 1) + pauseAmmount;

  const tl = gsap.timeline({});
  tl.from("p", {
    y: 100,
    opacity: 0,
    stagger: {
      each: staggerAmount,
      repeatDelay: repeatDelay,
      repeat: -1,
    },
  }).to("p", {
    y: -100,
    opacity: 0,
    stagger: {
      each: staggerAmount,
      repeatDelay: repeatDelay,
      repeat: -1,
    },
    repeatDelay: repeatDelay,
    repeat: -1,
  }, staggerAmount);
});
</script>
