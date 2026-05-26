<template>
  <div class="hero">Scroll Down</div>
  <div class="banner">
    <div class="background miata"></div>
    <div class="foreground">
      <h1 class="text-white font-[40px]">1995 Mazda Miata</h1>
      <h2 class="text-white font-[30px]">10k miles</h2>
    </div>
  </div>
  <div class="content">
    <p>Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit amet. Nulla at enim augue.
      Nam quam velit, efficitur vestibulum justo iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis dis parturient montes</p>
    <p>Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor tellus sit amet, fermentum elit. Phasellus sed neque tincidunt,
      ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non convallis eros pulvinar in. Proin sit amet ultrices est.
      Aenean non quam lectus. Nullam ac mi risus. Suspendisse sed risus varius, vulputate urna in, rhoncus sem. Mauris nec sodales mi.
    </p>
    <p>Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula. Aliquam a blandit velit. Ut diam velit, sollicitudin ac ante id,
      finibus congue urna. Vestibulum malesuada non turpis in molestie. Etiam a ullamcorper lorem. Vestibulum a hendrerit libero.</p>
  </div>

  <div class="banner">
    <div class="background cayman"></div>
    <div class="foreground">
      <h1 class="text-white font-[40px]">2006 Porsche Cayman S</h1>
      <h2 class="text-white font-[30px]">33k miles</h2>
    </div>
  </div>
  <div class="content">
    <p>Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit amet. Nulla at enim augue. Nam quam velit,
      efficitur vestibulum justo iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis dis parturient montes</p>
    <p>Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor tellus sit amet, fermentum elit. Phasellus
      sed neque tincidunt, ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non convallis eros pulvinar in.
      Proin sit amet ultrices est. Aenean non quam lectus. Nullam ac mi risus. Suspendisse sed risus varius, vulputate urna in, rhoncus sem.
      Mauris nec sodales mi.
    </p>
    <p>Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula. Aliquam a blandit velit. Ut diam velit, sollicitudin ac ante id,
      finibus congue urna. Vestibulum malesuada non turpis in molestie. Etiam a ullamcorper lorem. Vestibulum a hendrerit libero.</p>
  </div>

  <div class="banner">
    <div class="background gti"></div>
    <div class="foreground">
      <h1 class="text-white font-[40px]">1983 VW Rabbit GTI</h1>
      <h2 class="text-white font-[30px]">253k miles</h2>
    </div>
  </div>
  <div class="content">
    <p>Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit amet. Nulla at enim augue.
      Nam quam velit, efficitur vestibulum justo iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis dis parturient montes</p>
    <p>Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor tellus sit amet, fermentum elit.
      Phasellus sed neque tincidunt, ultrices ligula at, mattis elit. Fusce dictum ipsum metus,
      non convallis eros pulvinar in. Proin sit amet ultrices est. Aenean non quam lectus.
      Nullam ac mi risus. Suspendisse sed risus varius, vulputate urna in, rhoncus sem. Mauris nec sodales mi.
    </p>
    <p>Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula. Aliquam a blandit velit. Ut diam velit,
      sollicitudin ac ante id, finibus congue urna. Vestibulum malesuada non turpis in molestie. Etiam a ullamcorper lorem. Vestibulum a hendrerit libero.</p>
  </div>

  <div class="banner">
    <div class="background supra"></div>
    <div class="foreground">
      <h1 class="text-white font-[40px]">1994 Toyota Supra</h1>
      <h2 class="text-white font-[30px]">86k miles</h2>
    </div>
  </div>
  <div class="content">
    <p>Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit amet. Nulla at enim augue. Nam quam velit, efficitur
      vestibulum justo iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis dis parturient montes</p>
    <p>Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor tellus sit amet, fermentum elit. Phasellus sed neque tincidunt,
      ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non convallis eros pulvinar in. Proin sit amet ultrices est.
      Aenean non quam lectus. Nullam ac mi risus. Suspendisse sed risus varius, vulputate urna in, rhoncus sem. Mauris nec sodales mi.
    </p>
    <p>Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula. Aliquam a blandit velit. Ut diam velit, sollicitudin ac ante id,
      finibus congue urna. Vestibulum malesuada non turpis in molestie. Etiam a ullamcorper lorem. Vestibulum a hendrerit libero.</p>
  </div>
</template>

<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsap = useGSAP();

onMounted(() => {
  const banners = document.querySelectorAll(".banner");
  banners.forEach((el) => {
    const getBackground = (el: Element) => el.querySelector(".background");
    const getHeadings = (el: Element) => el.querySelectorAll("h1, h2");
    const tl = gsap.timeline()
      .from(getBackground(el), { backgroundPosition: "60% 0%", filter: "brightness(0.2)", duration: 1 }, 0)
      .from(getHeadings(el), { y: 200, stagger: 0.1 }, 0);

    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      toggleActions: "restart none none reverse",
      animation: tl,
    });
  });
});
</script>

<style scoped>
* {
  position:relative;
}

.banner {
  width:100vw;
  height:30vh;
  overflow:hidden;
  min-height:300px;
}

.background {
  filter:brightness(1);
  min-width:400px;
  width:100%;
  height:100%;
  background-size:100%;
  background-position:50%;
  background-repeat:no-repeat;
  position:absolute;
}

.miata {
  background-image: url("https://assets.codepen.io/32887/miata.jpg");
}

.gti {
  background-image: url("https://assets.codepen.io/32887/gti.jpg");
}

.cayman {
  background-image: url("https://assets.codepen.io/32887/caymans.jpeg");
}

.supra {
  background-image: url("https://assets.codepen.io/32887/supra.jpg");
}

.foreground {
  position:absolute;
  padding:25px;
}

h1, h2 {
  text-shadow:3px 3px 6px black;
  letter-spacing:1px;
}

.content {
  font-family:sans-serif;
  padding:50px;
  line-height:1.6em;
  font-size:1.3em;
  background:#263238;
  color:white;
}

.hero {
  width:100%;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ddd;
  color:#333;
  font-size:10vw;
}
</style>
