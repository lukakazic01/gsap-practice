<template>
  <div class="wrapper invisible mt-40">
    <h1 class="text text-2xl font-bold text-white">Bobs's Ice Cream</h1>
    <h1 class="text2 text-lg text-white font-bold">A rainbow of flavours</h1>
  </div>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText";
// import { GSDevTools } from "gsap/GSDevTools";

const gsap = useGSAP();
gsap.registerEffect({
  name: "rainbow",
  extendTimeline: true,
  defaults: {
    y: -100,
    colors: ["pink", "yellow", "aqua"],
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effect: (targets: never, config: any) => {
    const split = SplitText.create(targets, { type: "chars" });
    const tl = gsap.timeline();
    const colors = gsap.utils.wrap(config.colors as string[]);
    const endY = gsap.utils.wrap([-50, -50, -50, 50, 50, 50]);
    return tl
      .from(split.chars, {
        y: config.y,
        duration: 0.5,
        stagger: { each: 0.05 },
        opacity: 0,
      })
      .to(split.chars, {
        color: colors,
        duration: 0.5,
        stagger: { each: 0.05 },
      })
      .to(split.chars, {
        y: endY,
        duration: 0.5,
        stagger: { each: 0.05 },
        ease: "back",
        yoyo: true,
        repeat: 1,
      }, "<");
  },
});

onMounted(() => {
  gsap.set(".wrapper", { autoAlpha: 1 });
  const tl = gsap.timeline();
  tl.rainbow(".text", { y: -100 })
    .rainbow(".text2", { y: 50 }, 0);
});
</script>
