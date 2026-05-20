<template>
  <div class="wrapper">
    <div class="boxes flex gap-10 text-white invisible">
      <div class="box b0 size-30 bg-blue-300 rounded-md flex items-center justify-center">0</div>
      <div class="box b1 size-30 bg-blue-300 rounded-md flex items-center justify-center">1</div>
      <div class="box b2 size-30 bg-blue-300 rounded-md flex items-center justify-center">2</div>
      <div class="box b3 size-30 bg-blue-300 rounded-md flex items-center justify-center">3</div>
    </div>
    <div class="flex gap-10">
      <template v-if="labels.length > 0">
        <div v-for="label in labels" :key="label" class="size-30 flex items-center justify-center">
          <button class="size-10 bg-purple-400 rounded-full" @click="handleLabel(label)"></button>
        </div>
      </template>
    </div>
    <div class="nav flex justify-center gap-10 mt-10">
      <button id="prev_btn" class="py-2 w-[150px] bg-green-300 rounded-md text-white cursor-pointer" @click="handlePrev">prev</button>
      <button id="next_btn" class="py-2 w-[150px] bg-green-300 rounded-md text-white cursor-pointer" @click="handleNext">next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const gsap = useGSAP();
const labels = ref<string[]>([]);

let tl: gsap.core.Timeline;

onMounted(() => {
  gsap.set(".boxes", { autoAlpha: 1 });
  tl = gsap.timeline({ paused: true, defaults: { scale: 0, duration: 0.3 } });
  tl.add("b0").from(".b0", {}).addPause(">", gsap.delayedCall, [2, () => tl.play()]).to(".b0", { opacity: 0 })
    .add("b1").from(".b1", { rotation: -180 }).addPause().to(".b1", { opacity: 0 })
    .add("b2").from(".b2", { rotation: 180, y: -100 }).addPause().to(".b2", { opacity: 0 })
    .add("b3").from(".b3", { rotation: 180, y: 100 });
  labels.value = Object.keys(tl.labels);
});

const handleNext = () => {
  tl.play();
};

const handlePrev = () => {
  tl.reverse();
};

const handleLabel = (label: string) => {
  tl.play(label);
};
</script>
