<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);
const isVisible = ref(false); 
const isClicking = ref(false);
const hovered = ref(false);

const targetX = ref(0);
const targetY = ref(0);
const currentX = ref(0);
const currentY = ref(0);

const borderRef = ref(null);
let rafId = null;

const move = (e) => {
  if (!isVisible.value) {
    isVisible.value = true;
    document.documentElement.classList.add('custom-cursor-active');
  }
  targetX.value = e.clientX;
  targetY.value = e.clientY;
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
};

const animate = () => {
  const ease = 0.15;
  currentX.value += (targetX.value - currentX.value) * ease;
  currentY.value += (targetY.value - currentY.value) * ease;

  if (borderRef.value) {
    borderRef.value.style.transform = `translate3d(${currentX.value}px, ${currentY.value}px, 0) translate(-50%, -50%) scale(${hovered.value ? 1.8 : 1})`;
  }
  rafId = requestAnimationFrame(animate);
};


onMounted(() => {
  if ("ontouchstart" in window) return;
  window.addEventListener("mousemove", move);
  window.addEventListener("mousedown", () => isClicking.value = true);
  window.addEventListener("mouseup", () => isClicking.value = false);
  document.addEventListener("pointerover", (e) => {
    if (e.target.closest("a, button, .cursor-hover")) hovered.value = true;
  });
  document.addEventListener("pointerout", () => hovered.value = false);
  
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(rafId);
  window.removeEventListener("mousemove", move);
  document.documentElement.classList.remove('custom-cursor-active');
});
</script>

<template>
  <Teleport to="body">
    <div v-if="isVisible" class="custom-cursor-container">
      <div 
        id="cursor" 
        :class="{ clicking: isClicking }"
        :style="{ 
          left: `${cursorX}px`, 
          top: `${cursorY}px`,
          width: hovered ? '30px' : '6px',
          height: hovered ? '30px' : '6px'
        }"
      ></div>
      
      <div 
        id="cursor-border" 
        ref="borderRef"
        :style="{ borderColor: hovered ? '#6c733d' : '#fff' }"
      ></div>
    </div>
  </Teleport>
</template>

<style>
.custom-cursor-active, 
.custom-cursor-active * {
  cursor: none !important;
}

.custom-cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999999;
}

#cursor {
  position: fixed;
  pointer-events: none;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, opacity 0.3s;
  cursor: none !important; 
}

#cursor-border {
  position: fixed;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  border: 1px solid #fff;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
}
</style>