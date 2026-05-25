import { Draggable } from "gsap/Draggable";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin(() => {
  useGSAP().registerPlugin(Draggable);
  useGSAP().registerPlugin(GSDevTools);
  useGSAP().registerPlugin(MotionPathPlugin);
  useGSAP().registerPlugin(InertiaPlugin);
  useGSAP().registerPlugin(CustomEase);
  useGSAP().registerPlugin(ScrollTrigger);
});
