<template>
  <div id="demo" class="relative overflow-hidden mt-40 w-[600px] h-[600px] border border-gray-200 flex items-center" @mousemove="handleMouseMove">
    <div class="line pointer-events-none absolute top-0 left-1/2 z-10 h-full w-px -translate-x-1/2 bg-gray-200" />
    <div class="track flex flex-nowrap gap-2 relative z-20" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div
        v-for="i in 30" :key="i" class="box flex items-center justify-center text-white w-[47px] h-[50px]
       bg-blue-400 rounded-lg"
      >{{ i }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Draggable } from "gsap/Draggable";

const CENTER = 300;

const gsap = useGSAP();
let tween: gsap.core.Tween | undefined;
let boxWrapperWidth: number = 0;
let demoWidth: number = 0;
let scrollAmount: number = 0;
let draggable: Draggable[] | undefined;
let didDrag: boolean = false;

onMounted(() => {
  boxWrapperWidth = select(".track")!.offsetWidth;
  demoWidth = select("#demo")!.offsetWidth;
  scrollAmount = boxWrapperWidth - demoWidth;
  tween = gsap.to(".track", {
    duration: 10,
    x: -scrollAmount,
    ease: "none",
  });
  draggable = Draggable.create(".track", {
    type: "x",
    bounds: "#demo",
    trigger: ".track",
    inertia: true,
    onDragEnd: () => {
      didDrag = true;
    },
  });
});

const handleMouseMove = (event: MouseEvent) => {
  const distance = event.offsetX - CENTER;
  const timeScale = gsap.utils.mapRange(-300, 300, -5, 5, distance);
  tween!.timeScale(timeScale);
};

const handleMouseEnter = () => {
  if (!tween) return;
  tween.paused(true);
};

const handleMouseLeave = () => {
  const d = draggable?.[0];
  if (!d || !tween || scrollAmount <= 0) return;
  if (didDrag) {
    tween.progress(gsap.utils.clamp(0, 1, -d.endX / scrollAmount));
  }
  didDrag = false;
  tween.paused(false);
};
</script>

<style scoped>
</style>
