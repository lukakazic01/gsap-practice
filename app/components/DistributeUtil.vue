<template>
  <div class="text-white">
    <svg id="ease-vis" width="650" height="670" viewBox="0 0 650 650"></svg>
  </div>
</template>

<script setup lang="ts">
import { CustomEase } from "gsap/CustomEase";

const SVG_NS = "http://www.w3.org/2000/svg";

const gsap = useGSAP();

const createGraph = () => {
  const svg = document.querySelector("#ease-vis");
  if (!svg) return;
  const SIZE = 650;
  const visualizer = document.createElementNS(SVG_NS, "g");
  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute("d", `M 0 0 L 650 0`);
  path.setAttribute("stroke", "lightblue");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("class", "path");
  path.setAttribute("id", "ease");
  visualizer.appendChild(path);
  for (let i = 0; i < 65; i++) {
    const bar = document.createElementNS(SVG_NS, "rect");
    bar.setAttribute("width", "9");
    bar.setAttribute("height", `${SIZE}`);
    bar.setAttribute("x", `${i * 10}`);
    bar.setAttribute("y", "0");
    bar.setAttribute("fill", "gray");
    bar.setAttribute("class", "bar");
    visualizer.appendChild(bar);
  }
  const markers = document.createElementNS(SVG_NS, "g");
  for (let i = 0; i < 5; i++) {
    const line = document.createElementNS(SVG_NS, "line");
    const text = document.createElementNS(SVG_NS, "text");
    line.setAttribute("y1", "0");
    line.setAttribute("y2", "0");
    line.setAttribute("x1", "40");
    line.setAttribute("x2", "650");
    line.setAttribute("stroke", "red");
    text.setAttribute("y", "0");
    text.setAttribute("x", "0");
    text.setAttribute("fill", "red");
    text.textContent = `${1 - (i * 0.25)}`;
    markers.appendChild(line);
    markers.appendChild(text);
  }
  visualizer.appendChild(markers);
  svg.appendChild(visualizer);
  gsap.set("line", {
    y: gsap.utils.distribute({ base: 0, amount: 650 }),
    opacity: 0.8,
  });
  gsap.set("text", {
    y: gsap.utils.distribute({ base: 0, amount: 650 }),
    opacity: 0.8,
  });
};

onMounted(() => {
  createGraph();
  gsap.set(".bar", {
    scaleY: gsap.utils.distribute({ base: 0, amount: 1, ease: "power2.out", from: "start" }),
    transformOrigin: "50% 100%",
    opacity: 0.5,
  });
  CustomEase.getSVGData("power2.out", { width: 650, height: 650, path: "#ease" });
});
</script>

<style scoped>
</style>
