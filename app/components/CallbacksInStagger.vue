<template>
  <div class="grid grid-cols-4 gap-6">
    <div v-for="i in 16" :key="i" class="box size-40 rounded-md bg-pink-300 cursor-pointer" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
const gsap = useGSAP();
let tween: gsap.core.Tween;

onMounted(() => {
  tween = gsap.to(".box", {
    scale: 0.2,
    opacity: 0.2,
    stagger: {
      each: 0.5,
      onStart: function () {
        const target: HTMLDivElement = this.targets()[0];
        if (gsap.getProperty(target, "backgroundColor") === "red") {
          tween.reverse(this.startTime());
        }
      },
    },
  });
});

const handleClick = (e: PointerEvent) => {
  gsap.set(e.target, { backgroundColor: "red" });
};
</script>
