<template>
  <div id="parallax" class="keyart h-full w-full">
    <div id="keyart-0" class="keyart_layer parallax h-[1000px] w-full" data-speed="2"></div>
    <div id="keyart-1" class="keyart_layer parallax" data-speed="5"></div>
    <div id="keyart-2" class="keyart_layer parallax" data-speed="11"></div>
    <div id="keyart-3" class="keyart_layer parallax" data-speed="16"></div>
    <div id="keyart-4" class="keyart_layer parallax" data-speed="26"></div>
    <div id="keyart-5" class="keyart_layer parallax" data-speed="36"></div>
    <div id="keyart-6" class="keyart_layer parallax" data-speed="49"></div>
    <div id="keyart-scrim" class="keyart_layer"></div>
    <div id="keyart-7" class="keyart_layer parallax" data-speed="69"></div>
    <div id="keyart-8" class="keyart_layer" data-speed="100"></div>
  </div>
  <div class="h-screen w-full bg-white text-black text-[60px] flex items-center justify-center">
    <p>Good!</p>
  </div>
</template>

<script setup lang="ts">
const gsap = useGSAP();

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#parallax",
      start: "top top",
      end: "bottom 25%",
      scrub: 0.5,
      markers: true,
      pin: true,
      toggleActions: "restart none none reverse",
      pinSpacing: true,
    },
  });
  timeline.from("#keyart-1", { y: 10 }, 0);
  timeline.from("#keyart-2", { y: 20 }, 0);
  timeline.from("#keyart-3", { y: 30 }, 0);
  timeline.from("#keyart-4", { y: 50 }, 0);
  timeline.from("#keyart-5", { y: 80 }, 0);
  timeline.from("#keyart-6", { y: 110 }, 0);
  timeline.from("#keyart-7", { y: 120 }, 0);
  timeline.from("#keyart-8", { y: 150 }, 0);
});
</script>

<style scoped>
.keyart {
  position: relative;
  height: 1000px;
  width: 100%;
  overflow: hidden;
}

.keyart_layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-size: auto 1038px;
  background-repeat: repeat-x;
}

#keyart-0 {
    background-image: url('http://www.firewatchgame.com/images/parallax/parallax0.png');
    background-color: #ffaf1b;
}
#keyart-1 {
    background-image: url('http://www.firewatchgame.com/images/parallax/parallax1.png');
}
#keyart-2 {
    background-image: url('http://www.firewatchgame.com/images/parallax/parallax2.png');
}
#keyart-3 {
    background-image: url('http://www.firewatchgame.com/images/parallax/parallax3.png');
}
#keyart-4 {
    background-image: url('http://www.firewatchgame.com/images/parallax/parallax4.png');
}
#keyart-5 {
    background-image: url('http://www.firewatchgame.com/images/parallax/parallax5.png');
}
#keyart-6 {
    background-image: url('http://www.firewatchgame.com/images/parallax/parallax6.png');
}
#keyart-7 {
    background-image: url('http://www.firewatchgame.com/images/parallax/parallax7.png');
}
#keyart-8 {
    background-image: url('http://www.firewatchgame.com/images/parallax/parallax8.png');
}
#keyart-scrim {
    background-color: #ffaf00;
    opacity: 0;
}
</style>
