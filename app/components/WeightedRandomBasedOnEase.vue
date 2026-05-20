<template>
  <svg width="500" height="500" stroke="white" class="mt-40" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"></svg>
</template>

<script setup lang="ts">
const SVG_NS = "http://www.w3.org/2000/svg";

const gsap = useGSAP();

const randomColor = weightedRandom(["red", "white", "blue"], "power4.in");

onMounted(() => {
  grid();
  gsap.to(".box", {
    fill: randomColor,
  });
});

const grid = () => {
  const svg = select("svg");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const rect = document.createElementNS(SVG_NS, "rect");
      gsap.set(rect, { attr: { x: i * 50, y: j * 50, width: 50, height: 50, stroke: "black", class: "box" } });
      svg!.appendChild(rect);
    }
  }
};

function weightedRandom(collection: string[], ease: string) {
  return gsap.utils.pipe(
    Math.random,
    gsap.parseEase(ease),
    gsap.utils.mapRange(0, 1, -0.5, collection.length - 0.5),
    gsap.utils.snap(1),
    i => collection[i]!,
  );
};
</script>
