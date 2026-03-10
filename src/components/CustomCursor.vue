<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const HOVER_SELECTORS = [
  "a", "button", "li", "input", "select", "textarea",
  "[role='button']", "[role='link']",
  "[tabindex]:not([tabindex='-1'])",
  ".cursor-hover", "[data-cursor='hover']",
].join(",");

// Reale Position (für den Punkt)
const cursorX = ref(0);
const cursorY = ref(0);

// States
const isClicking = ref(false);
const hovered = ref(false);
const isTouch = ref(false);

// Refs für die verzögerte Animation (Border)
const targetX = ref(0);
const targetY = ref(0);
const currentX = ref(0);
const currentY = ref(0);

const borderRef = ref(null);
let rafId = null;

const isHoverTarget = (target) => {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest(HOVER_SELECTORS));
};

const move = (e) => {
  targetX.value = e.clientX;
  targetY.value = e.clientY;
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
};

const animate = () => {
  const ease = 0.15; // Etwas höherer Wert für smoothere Verfolgung
  currentX.value += (targetX.value - currentX.value) * ease;
  currentY.value += (targetY.value - currentY.value) * ease;

  if (borderRef.value) {
    borderRef.value.style.left = `${currentX.value}px`;
    borderRef.value.style.top = `${currentY.value}px`;
  }
  rafId = requestAnimationFrame(animate);
};

const handleDown = () => isClicking.value = true;
const handleUp = () => isClicking.value = false;

const handlePointerOver = (e) => {
  if (isHoverTarget(e.target)) hovered.value = true;
};

const handlePointerOut = (e) => {
  const fromHover = isHoverTarget(e.target);
  const toHover = isHoverTarget(e.relatedTarget);
  if (fromHover && !toHover) hovered.value = false;
};

onMounted(() => {
  isTouch.value = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouch.value) return;

  document.addEventListener("mousemove", move);
  document.addEventListener("mousedown", handleDown);
  document.addEventListener("mouseup", handleUp);
  document.addEventListener("pointerover", handlePointerOver);
  document.addEventListener("pointerout", handlePointerOut);
  
  animate();
});

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId);
  document.removeEventListener("mousemove", move);
  document.removeEventListener("mousedown", handleDown);
  document.removeEventListener("mouseup", handleUp);
  document.removeEventListener("pointerover", handlePointerOver);
  document.removeEventListener("pointerout", handlePointerOut);
});
</script>

<template>
  <div v-if="!isTouch">
    <div
      id="cursor"
      :class="{ 'clicking': isClicking }"
      :style="{ 
        left: `${cursorX}px`, 
        top: `${cursorY}px`,
        height: hovered ? '30px' : '6px',
        width: hovered ? '30px' : '6px',
        opacity: hovered ? '0.5' : '1'
      }"
    ></div>

    <div 
      id="cursor-border" 
      ref="borderRef"
      :style="{
        borderColor: hovered ? '#6c733d' : '#fff',
        transform: `translate(-50%, -50%) scale(${hovered ? 1.8 : 1})`
      }"
    ></div>
  </div>
</template>

<style>
/* Globaler Cursor-Reset */
html, body, a, button, * {
  cursor: none !important;
}

#cursor {
  position: fixed;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: 
    background-color 0.2s ease, 
    height 0.3s ease, 
    width 0.3s ease, 
    opacity 0.3s ease,
    transform 0.1s ease;
  z-index: 9999;
  background-color: #fff;
}

#cursor-border {
  position: fixed;
  width: 35px;
  height: 35px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  pointer-events: none;
  transition: border-color 0.25s ease, transform 0.25s ease;
  z-index: 9998;
  left: 0;
  top: 0;
}

#cursor.clicking {
  transform: translate(-50%, -50%) scale(1.2);
}
</style>