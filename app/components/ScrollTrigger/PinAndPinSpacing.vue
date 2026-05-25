<template>
  <section><h1>Scroll Down to See Pinning in Action</h1></section>
  <section class="">
    <h2>Pinning with ScrollTrigger</h2>
    <p>Mauris tristique ex id ante facilisis, at sollicitudin tortor molestie. Maecenas sit amet dolor non leo molestie bibendum.
      Nullam vitae pretium enim. Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit sapien.
      Sed fermentum dapibus arcu, elementum feugiat leo porta ac.</p>
    <p>Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit</p>
    <p>Pellentesque ac libero tortor. Mauris eu eros libero. Aliquam erat volutpat. Donec volutpat felis eget sapien posuere condimentum.</p>
  </section>

  <section>
    <h2>Pinned Content Gets Removed From Document Flow</h2>
    <p>Mauris tristique ex id ante facilisis, at sollicitudin tortor molestie. Maecenas sit amet dolor non leo molestie bibendum.
      Nullam vitae pretium enim. Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit sapien.
      Sed fermentum dapibus arcu, elementum feugiat leo porta ac.</p>
    <p>Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit</p>
    <p>Pellentesque ac libero tortor. Mauris eu eros libero. Aliquam erat volutpat. Donec volutpat felis eget sapien posuere condimentum.</p>
  </section>

  <div class="ad_wrapper">
    <div class="ad_content">
      <div class="logo">
        <h1 class="ccc">CreativeCodingClub.com</h1>
      </div>
      <div class="tagline">
        <h2 class="tagline_text">Discover the joy of animating with code</h2>
      </div>
    </div>
  </div>

  <section>
    <h2>Pinned Content Can Be Animated</h2>
    <p>Mauris tristique ex id ante facilisis, at sollicitudin tortor molestie. Maecenas sit amet dolor non leo molestie bibendum.
      Nullam vitae pretium enim. Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit sapien.
      Sed fermentum dapibus arcu, elementum feugiat leo porta ac.</p>
    <p>Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit</p>
    <p>Pellentesque ac libero tortor. Mauris eu eros libero. Aliquam erat volutpat. Donec volutpat felis eget sapien posuere condimentum.</p>
  </section>

  <section>
    <h2>Pinned Content Can Be Scrubbed</h2>
    <p>Mauris tristique ex id ante facilisis, at sollicitudin tortor molestie. Maecenas sit amet dolor non leo molestie bibendum.
      Nullam vitae pretium enim. Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit sapien.
      Sed fermentum dapibus arcu, elementum feugiat leo porta ac.</p>
    <p>Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit</p>
    <p>Pellentesque ac libero tortor. Mauris eu eros libero. Aliquam erat volutpat. Donec volutpat felis eget sapien posuere condimentum.</p>
  </section>

  <section>
    <h2>Full Screen Pinned Animations</h2>
    <p>Mauris tristique ex id ante facilisis, at sollicitudin tortor molestie. Maecenas sit amet dolor non leo molestie bibendum.
      Nullam vitae pretium enim. Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit sapien.
      Sed fermentum dapibus arcu, elementum feugiat leo porta ac.</p>
    <p>Nullam eleifend est at orci ultrices efficitur. Morbi ac aliquet lectus. Proin eu elit</p>
    <p>Pellentesque ac libero tortor. Mauris eu eros libero. Aliquam erat volutpat. Donec volutpat felis eget sapien posuere condimentum.</p>
  </section>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/SplitText";

const gsap = useGSAP();

onMounted(() => {
  const text = SplitText.create(".tagline_text", { type: "words" });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ad_wrapper",
      start: "top",
      end: "bottom 75%",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      markers: true,
    },
  });
  tl.from(".logo", { width: 0, ease: "none", duration: 0.8 })
    .from(text.words, { y: -100, opacity: 0, stagger: 0.05, ease: "none", duration: 0.3 }, ">");
});
</script>

<style scoped>
section {
  width:80%;
  max-width:800px;
  margin:auto;
}

.ad_content {
  width:584px;
}

.logo, .tagline {
  overflow:hidden;

/* border:1px solid white; */
}

.ccc,  .tagline_text {
  margin:0;
  text-align:center;
  width:584px;
}

.ccc {
    line-height:60px;
    background:#f39;
    font-size:40px;
    color:white;
    font-family:'Kanit', sans-serif;
    font-weight:600;
    font-style:italic;
}

.tagline_text {
    font-size:22px;
    color:#1d1d1d;
    font-family:'Kanit', sans-serif;
    font-weight:300;
    letter-spacing:1px;
}

.ad_wrapper {
    height:100vh;
    padding:20px;
    display:flex;
    justify-content:center;
    background:#1d1d1d;
    align-items:center;
    overflow:hidden;
    background:rgba(30,30,30, 0.4);
}

h1 {
    font-size:2em;
    line-height:1.3em;
}

h2 {
    line-height:1.1em;
}
</style>
