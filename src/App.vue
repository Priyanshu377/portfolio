<template>
  <div id="app">
    <!-- Include the Navbar component -->
    <NavBar />
    <HomeSection v-if="$route.path === '/' || $route.path === '/portfolio/'"/>
    <AboutSection v-if="$route.path === '/about' || $route.path === '/portfolio/' || $route.path === '/'" />
    <ProjectSection v-if="$route.path === '/projects' || $route.path === '/portfolio/' || $route.path === '/'" />
    <ContactSection v-if="$route.path === '/contact' || $route.path === '/portfolio/' || $route.path === '/'" />
    <router-view></router-view>
    <CustomFooter />

  </div>
</template>

<script>
// Import the Navbar component
import NavBar from './components/NavBar.vue';
import CustomFooter from './components/CustomFooter.vue';
import HomeSection from './views/HomeSection.vue';
import AboutSection from './views/AboutSection.vue';
import ProjectSection from './views/ProjectSection.vue';
import ContactSection from './views/ContactSection.vue';

export default {
  components: {
    NavBar,
    CustomFooter,
    HomeSection,
    AboutSection,
    ProjectSection,
    ContactSection
},
methods: {
    navigateTo(route) {
      this.toggleMenu(); // Close the menu
      this.$router.push(route);
    },
},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Baloo+Paaji|Open+Sans:300,300i,400,400i,600,600i,700,700i");
:root {
  --blue: #1e549f;
  --indigo: #695aa6;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #ec185d;
  --orange: #ff6d02;
  --yellow: #ffc107;
  --green: #1bb74f;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #393e46;
  --primary: #695aa6;
  --secondary: #393e46;
  --success: #1bb74f;
  --info: #17a2b8;
  --warning: #ff6d02;
  --danger: #ec185d;
  --light: #f8f9fa;
  --dark: #212529;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: "Open Sans", sans-serif;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
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
/* sections */
.section {
  padding: 70px 10px;
}

.section .section-title {
  font-size: calc(20px + (35 - 20) * ((100vw - 300px) / (1300 - 300)));
}

.section .section-subtitle {
  margin-bottom: 6px;
  font-weight: 400;
  opacity: .6;
}

.section-sm {
  padding: 40px 0 !important;
}

.section-md {
  padding: 60px 0 !important;
}

.section-lg {
  padding: 100px 0 !important;
}

</style>