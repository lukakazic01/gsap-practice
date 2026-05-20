<template>
  <div>
    <h1 class="text-[60px] font-bold text-white uppercase">chemicoluminescence</h1>
    <div class="flex items-center gap-1 mt-20">
      <div v-for="i in 91" :key="i" class="bar bg-red-400 w-[4px] h-[20px]" />
    </div>
    <div class="mt-10 flex items-center gap-6">
      <select v-model="ease" class="border border-200-gray bg-white text-black">
        <option value="power1.in">power1.in</option>
        <option value="power1.out">power1.out</option>
        <option value="power2.in">power2.in</option>
        <option value="power2.out">power2.out</option>
        <option value="power3.in">power3.in</option>
        <option value="power3.out">power3.out</option>
        <option value="power4.in">power4.in</option>
        <option value="power4.out">power4.out</option>
      </select>
      <div class="flex items-center text-white gap-2">
        <label for="start">Start</label>
        <input id="start" v-model="direction" name="direction" type="radio" value="start" />
      </div>
      <div class="flex items-center text-white gap-2">
        <label for="center">Center</label>
        <input id="center" v-model="direction" name="direction" type="radio" value="center" />
      </div>
      <div class="flex items-center text-white gap-2">
        <label for="end">End</label>
        <input id="end" v-model="direction" name="direction" type="radio" value="end" />
      </div>
      <div class="flex items-center text-white gap-2">
        <label for="edges">Edges</label>
        <input id="edges" v-model="direction" name="direction" type="radio" value="edges" />
      </div>
      <button class="bg-green-400 text-white px-4 py-2 rounded-md cursor-pointer" @click="restart">Restart</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText";

const gsap = useGSAP();

let tl: GSAPTimeline | null = null;
const ease = ref("power1.in");
const direction = ref<"edges" | "start" | "center" | "end" | "random">("start");

const config = computed(() => ({
  amount: 1,
  ease: ease.value,
  from: direction.value,
}));

let text: SplitText | null = null;

onMounted(() => {
  text = SplitText.create("h1", { type: "chars" });
  updateAnimation();
});

const updateAnimation = () => {
  tl?.progress(0).kill();
  tl = gsap.timeline().fromTo(text?.chars || [], { scale: 0, opacity: 0 }, {
    stagger: config.value,
    scale: 1,
    opacity: 1,
    transformOrigin: "center center",
  })
    .fromTo(".bar", { scaleY: 1 }, {
      scaleY: 5,
      transformOrigin: "bottom center",
      stagger: config.value,
    }, "<");
};

const restart = () => {
  updateAnimation();
  tl!.restart();
};
</script>

<style scoped>
</style>
