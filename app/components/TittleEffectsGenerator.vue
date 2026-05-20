<template>
  <div id="main" class="flex justify-center w-full invisible" @click="handleClick">
    <div id="container" class="text-white relative text-2xl w-8/12 flex justify-center items-center h-[200px]">
      <ul id="wrapper" class="h-full relative w-full flex justify-center items-center">
        <li class="absolute select-none">Take breaks and clear your head</li>
        <!-- <li class="absolute select-none">Go slow</li>
        <li class="absolute select-none">Avoid distractions</li>
        <li class="absolute select-none">Stick to a routine</li>
        <li class="absolute select-none">Celebrate small victories</li>
        <li class="absolute select-none">Type all the code</li> -->
      </ul>
    </div>
  </div>
  <div class="flex justify-center gap-6 w-full">
    <button class="text-white bg-red-500 p-2 rounded-md w-[100px]" @click="handleLeft">Left</button>
    <button class="text-white bg-green-500 p-2 rounded-md w-[100px]" @click="handleRight">Right</button>
  </div>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";

const gsap = useGSAP();
let effectsTimeline: GSAPTimeline | null = null;

onMounted(() => {
  gsap.set("#main", { autoAlpha: 1 });
  gsap.registerEffect({
    name: "in",
    extendTimeline: true,
    defaults: {
      x: 0,
      y: 0,
      duration: 0.5,
      fade: 0.1,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      transformOrigin: "50% 50%",
      perspective: 400,
      ease: "power1.in",
      each: 0.05,
      staggerEase: "power1.in",
      from: "start",
    },
    effect: (targets: any, config: any) => {
      const tl = gsap.timeline();
      if (config.rotationX || config.rotationY) {
        gsap.set(targets[0].parentElement, { perspective: config.perspective });
      }
      tl.from(targets, {
        x: config.x,
        y: config.y,
        duration: config.duration,
        rotationX: config.rotationX,
        rotationY: config.rotationY,
        scale: config.scale,
        transformOrigin: config.transformOrigin,
        perspective: config.perspective,
        ease: config.ease,
        stagger: {
          each: config.each,
          ease: config.staggerEase,
          from: config.from,
        },
      });
      tl.from(targets, {
        duration: config.fade,
        opacity: 0,
        ease: "none",
        stagger: {
          each: config.each,
          ease: config.staggerEase,
          from: config.from,
        },
      }, 0);
      return tl;
    },
  });
  gsap.registerEffect({
    name: "out",
    extendTimeline: true,
    defaults: {
      duration: 0.5,
      fade: 0.5,
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      transformOrigin: "50% 50%",
      perspective: 400,
      ease: "power1",
      each: 0.05,
      staggerEase: "power1",
      from: "start",
    },
    effect: (targets: any, config: any) => {
      const tl = gsap.timeline();
      if (config.rotationX || config.rotationY) {
        gsap.set(targets[0].parentElement, { perspective: config.perspective });
      }
      tl.to(targets, {
        x: config.x,
        y: config.y,
        rotationX: config.rotationX,
        rotationY: config.rotationY,
        scale: config.scale,
        transformOrigin: config.transformOrigin,
        perspective: config.perspective,
        duration: config.duration,
        ease: config.ease,
        stagger: {
          each: config.each,
          ease: config.staggerEase,
          from: config.from,
        },
      });
      tl.to(targets, {
        duration: config.fade,
        opacity: 0,
        stagger: {
          each: config.each,
          ease: config.staggerEase,
          from: config.from,
        },
      }, 0);
      return tl;
    },
  });
  const lis = document.querySelectorAll("li");
  effectsTimeline = gsap.timeline();

  lis.forEach((li) => {
    const text = SplitText.create(li, { type: "chars, words" });
    effectsTimeline!
      .in(text.words, { rotationX: -90, fade: 0.5, transformOrigin: "50% 0% -30", duration: 1, from: "center" })
      .out(text.words, { y: 50, fade: 0.3 });
  });
  GSDevTools.create({ animation: effectsTimeline });
});

const handleClick = () => {
  effectsTimeline!.play();
};

const handleLeft = () => {
  effectsTimeline!.reverse();
};

const handleRight = () => {
  effectsTimeline!.play();
};
</script>

<style scoped>
</style>
