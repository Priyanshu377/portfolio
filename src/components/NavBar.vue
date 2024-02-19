<template>
  <div>
    <nav class="navbar">
      <ul class="navbar__menu">
        <li class="navbar__item" v-for="(item, index) in menuItems" :key="index">
          <a v-if="item.to" :href="item.to" class="navbar__link" @mouseover="showTooltip(index)" @mouseleave="hideTooltip(index)">
          <i :data-feather="item.icon"></i><span>{{ item.label }}</span>
        </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import feather from 'feather-icons';
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
  menuItems: [
    { label: 'Home', icon: 'home', showTooltip: false, to: '/' },
    { label: 'About', icon: 'user', showTooltip: false, to: '/about/' },
    { label: 'Project', icon: 'code', showTooltip: false, to: '/projects/' },
    { label: 'Contact', icon: 'mail', showTooltip: false, to: '/contact/' },
    { label: 'Github', icon: 'github', showTooltip: false,  to: 'https://github.com/Priyanshu377' }, 
  ],
});

    const showTooltip = (index) => {
      state.menuItems[index].showTooltip = true;
    };

    const hideTooltip = (index) => {
      state.menuItems[index].showTooltip = false;
    };

    return {
      menuItems: state.menuItems,
      showTooltip,
      hideTooltip
    };
  },
  mounted() {
// Add the eslint-disable-next-line comment
/* eslint-disable-next-line */
feather.replace();
  },
};

</script>
<style scoped lang="scss">
.navbar__menu {
  list-style: none; /* Add this line to remove list bullets */
  
}
/* Your SCSS styling goes here, make sure to replace the variables with their values */
@mixin gooeyEffect($i) {
  @keyframes gooeyEffect-#{$i} {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(0.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

body {
  background: #eaeef6;
  font-family: 'Open Sans', sans-serif;
}

.navbar {
  $ref: &;
  position: fixed;
  top: 17%;
  left: $spacer;
  backdrop-filter: blur(4px);
  border-radius: $borderRadius;
  padding: $spacer 0;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.03);
  height: calc(70vh - #{$spacer * 2});
  z-index: 2;

  &__link {
    position: relative;
    display: flex;
    align-items: center;
    height: $linkHeight;
    width: $spacer * 4.5;
    color: $text;
    transition: $transition;

    span {
      position: absolute;
      left: 100%;
      transform: translate(-($spacer * 3));
      margin-left: 1rem;
      opacity: 0;
      pointer-events: none;
      color: $primary;
      background: #fff;
      padding: $spacer * 0.75;
      transition: $transition;
      border-radius: $borderRadius * 1.75;
    }

    &:hover {
      color: #fff;
    }

    .navbar:not(:hover) &:focus,
    &:hover {
      span {
        opacity: 1;
        transform: translate(0);
      }
    }
  }

  &__menu {
    position: relative;
  }

  &__item {
    &:last-child {
      &:before {
        content: '';
        position: absolute;
        opacity: 0;
        z-index: -1;
        top: 0;
        left: $spacer;
        width: $linkHeight;
        height: $linkHeight;
        background: $primary;
        border-radius: $borderRadius * 1.75;
        transition: $timing cubic-bezier(1, 0.2, 0.1, 1.2) all;
      }
    }

    @for $i from 1 to 12 {
      &:first-child:nth-last-child(#{$i}),
      &:first-child:nth-last-child(#{$i}) ~ li {
        &:hover {
          ~ li:last-child:before {
            opacity: 1;
          }
        }
        &:last-child:hover:before {
          opacity: 1;
        }

        @for $j from 1 to $i {
          &:nth-child(#{$j}):hover {
            ~ li:last-child:before {
              @include gooeyEffect($j);
              top: calc((100% / #{$i}) * (#{$j} - 1));
              animation: gooeyEffect-#{$j} $timing 1;
            }
          }
        }

        &:last-child:hover:before {
          @include gooeyEffect($i);
          top: calc((100% / #{$i}) * (#{$i} - 1));
          animation: gooeyEffect-#{$i} $timing 1;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  /* Mobile-specific styles */
  .navbar {
    padding: $spacer 1rem;
    box-shadow: none;
    backdrop-filter: none;
    width: 100%; /* Adjust the width as needed for mobile */

    &__link {
      width: 100%; /* Adjust the width of the link for mobile */
      justify-content: center; /* Center the content in the link */
    }

    &__item {
      width: 100%; /* Adjust the width of the item for mobile */
      text-align: center; /* Center the text in the item */

      &:before {
        display: none; /* Hide the pseudo-element on mobile */
      }
    }
  }

  .navbar__menu {
    padding: 0;
  }
}
</style>
