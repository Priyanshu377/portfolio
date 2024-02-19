<template>
    <header id="home" class="header" :style="{ backgroundImage: 'url(' + require('@/assets/images/header.jpg') + ')' }">
      <div class="overlay"></div>
    <div class="header-content container">
      <h1 class="header-title">
        <span class="up">HI!</span>
        <span class="down">I am Priyanshu</span>
      </h1>
      <div class="intro">
      <p class="intro-subtitle">
        <span class="text-slider-items">Full-Stack Developer,Python Developer,Frontend Developer,Backend Developer</span>
        <strong class="text-slider"></strong>
      </p>
    </div>
    <div class="overlay-itro"></div>
        <button class="btn btn-primary">Visit My Works</button>
      </div>
    </header>
  </template>
  
  <script>
import Typed from 'typed.js';

export default {
  mounted() {
    if (document.querySelector('.text-slider')) {
      const typedStrings = document.querySelector('.text-slider-items').textContent;

      new Typed('.text-slider', {
        strings: typedStrings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30,
      });
    }
  },
};
</script>
<style>

.intro .text-slider-items {
  display: none;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
  font-family: 'Baloo Paaji', cursive;
  color: #695aa6;
}
.header {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(bottom, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%);
  background-image: linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%);
}

.header .header-content {
  margin-top: 20px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: 550px;
}

.header .header-content .header-title .up {
  font-size: calc(30px + (60 - 30) * ((100vw - 300px) / (1300 - 300)));
  font-weight: 500;
  color: #444;
  margin-bottom: 5px;
  position: relative;
  display: block;
}

.header .header-content .header-title .down {
  font-size: calc(30px + (75 - 30) * ((100vw - 300px) / (1300 - 300)));
  margin-bottom: 0;
  position: relative;
  display: block;
}

.header .header-content .header-subtitle {
  font-size: calc(10px + (22 - 10) * ((100vw - 300px) / (1300 - 300)));
  letter-spacing: calc(1px + (7 - 1) * ((100vw - 300px) / (1300 - 300)));
  opacity: .8;
  margin-top: -10px;
  margin-bottom: 20px;
}

.header .header-content .btn {
  position: relative;
  margin-top: 20px;
  border-radius: 20px;
  padding: 8px 15px;
}

.header-title {
  font-size: 2.4rem;
  font-weight: bold;
  opacity: .8;
  color: #212529;
}

.header-mini {
  min-height: 24rem;
  height: 24rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-align: center;
  padding: 1rem;
  background: #a59cca;
}

@media (max-width: 991.98px) {
  .header {
    background-size: cover;
  }
  .header-content {
    padding-left: calc(100% / 5) !important;
  }
}

  </style>
  