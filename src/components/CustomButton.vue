<!-- Button.vue -->
<template>
    <div class="button" @mouseenter="addHoverClass" @mouseleave="removeHoverClass">
      <a :href="link">
      {{ buttonText }}
       <span class="shift">›</span>
      </a>
      <div class="mask"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    buttonText: {
      type: String,
      default: "Button"
    },
    link: {
      type: String,
      default: "#" 
    }
  },

  };
  </script>
  
  <style scoped>
  .button {
  background-color: var(--bg-button);
  border: 0.125rem solid var(--border-button);
  cursor: pointer;
  letter-spacing: 0.2110rem;
  line-height: 1;
  overflow: hidden;
  position: relative;
  padding: 0.7rem;
  text-align: center;
  text-transform: uppercase;
  transition: 
    background-color 0.3s var(--transition-easing),
    border 1s var(--transition-easing),
    color 0.6s var(--transition-easing);
  user-select: none;
}

.button a {
  color: var(--color-button);
  font-family: var(--font-button);
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  z-index: 2;
  font-size: 0.8rem;
}

.button .mask {
  background-color: var(--bg-mask);
  height: 6.25rem;
  position: absolute;
  transform: translate3d(-120%, -3.125rem, 0) rotate3d(0, 0, 1, 45deg);
  transition: all 1.1s var(--transition-easing);
  width: 12.5rem;
  z-index: 1;
}

.button .shift {
  display: inline-block;
  transition: all 1.1s var(--transition-easing);
  vertical-align: text-top;
}

.button:hover {
  background-color: var(--bg-button-hover);
  border-color: var(--border-button-hover);
  box-shadow: var(--shadow-button-hover);
}

.button:hover a {
  color: var(--color-button-hover);
}

.button:hover .mask {
  background-color: var(--bg-mask-hover);
  transform: translate3d(120%, -6.25rem, 0) rotate3d(0, 0, 1, 90deg);
}

.button:hover .shift {
  transform: translateX(0.3125rem);
}

.button:active {
  background-color: var(--bg-button-active);
}

.button:active a {
  color: var(--color-button-active);
}
/* Light mode styles */
:not([theme="dark"]) .button {
  background-color: rgb(250, 250, 250);
  border-color: black;
  color: black;
}
:not([theme="dark"]) .button a {
    color: black;
}
:not([theme="dark"]) .button:hover {
  background-color:black;
  border-color: var(--border-button-hover);
  box-shadow: var(--shadow-button-hover);
}

:not([theme="dark"]) .button:hover a {
  color: var(--color-button-hover);
}

:not([theme="dark"]) .button:hover .mask {
  background-color: var(--bg-mask-hover);
  transform: translate3d(120%, -6.25rem, 0) rotate3d(0, 0, 1, 90deg);
}

:not([theme="dark"]) .button:hover .shift {
  transform: translateX(0.3125rem);
}

:not([theme="dark"]) .button:active {
  background-color: var(--bg-button-active);
}

:not([theme="dark"]) .button:active a {
  color: var(--color-button-active);
}
  </style>
  