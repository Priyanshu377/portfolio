<template>
    <section class="section pt-0" id="about">
      <!-- container -->
      <div class="container text-center">
        <!-- about wrapper -->
        <div class="about">
          <div class="about-img-holder">
            <img :src="require('@/assets/images/profile.png')" class="about-img"
              alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
          </div>
          <div class="about-caption">
            <p class="section-subtitle">Who Am I ?</p>
            <h2 class="section-title mb-3">About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut
              fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam
              impedit iure nemo a iste
              <br>culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo
              esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis
              culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum
              expedita aliquid! Debitis, nam!
            </p>
            <div class="skill-container">
              <div class="logo-section">
                <h2>Frontend</h2>
                <div class="logo-container">
                  <!-- Frontend logos -->
                  <img src="@/assets/svg/bootstrap-5-1.svg" alt="Bootstrap" class="dev-icon"/>
                  <img src="@/assets/svg/css-3.svg" alt="CSS" class="dev-icon"/>
                  <img src="@/assets/svg/logo-javascript.svg" alt="JavaScript" class="dev-icon"/>
                  <img src="@/assets/svg/tailwind-css-2.svg" alt="Tailwind CSS" class="dev-icon"/>
                  <img src="@/assets/svg/vue-9.svg" alt="Vue.js" class="dev-icon"/>
                </div>
              </div>

              <div class="logo-section">
                <h2>Backend</h2>
                <div class="logo-container">
                  <!-- Backend logos -->
                  <img src="@/assets/svg/django.svg" alt="Django" class="dev-icon"/>
                  <img src="@/assets/svg/python-3.svg" alt="Python" class="dev-icon"/>
                  <img src="@/assets/svg/mysql-logo.svg" alt="MySQL" class="dev-icon"/>
                  <img src="@/assets/svg/postgresql.svg" alt="PostgreSQL" class="dev-icon"/>
                </div>
              </div>

              <div class="logo-section">
                <h2>Tools</h2>
                <div class="logo-container">
                  <!-- Tool logos -->
                  <img src="@/assets/svg/git-icon.svg" alt="Git" class="dev-icon"/>
                  <img src="@/assets/svg/github-icon-1.svg" alt="GitHub" class="dev-icon"/>
                </div>
              </div>
            </div>
            <button class="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
          </div>
        </div><!-- end of about wrapper -->
      </div><!-- end of container -->
    </section> <!-- end of about section -->
  </template>
  
  <script>
  export default {
    // You can add data, methods, and other options here
  };
  </script>
  
  <style scoped>
  #about{
    margin-top: 5%;
  }
p {
    font-size: calc(13px + (15 - 13) * ((100vw - 300px) / (1300 - 300)));
    font-weight: 100;
    opacity: 1;
    color: #111;
    letter-spacing: .6px;
}
.about {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  text-align: left;
}

.about-img-holder {
  min-width: 400px;
  max-width: 400px;
  margin-right: 20px;
}

.about-img-holder .about-img {
  width: 100%;
  margin-bottom: 15px;
}

.about-caption {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

@media (max-width: 767.98px) {
  .about {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    text-align: center;
  }
  .about-img-holder {
    max-width: 220px;
    min-width: 100%;
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
  }
}
.skill-container {
    display: flex;
    align-items: center;
    width: 85%;
    gap: 2rem;

  }

  .logo-section {
    display: flex;
    flex-direction: column; /* Align items in a column */
    align-items: center;
    margin-bottom: 20px;
  }

  .logo-container {
    display: flex;
    flex-wrap: wrap; /* Allow logos to wrap to the next line */
    justify-content: center; /* Center logos horizontally */
    gap: 10px; /* Adjust the gap between logos */
  }

  /* Add styles for individual logos */
  .dev-icon,
  .python {
    width: 30px; /* Adjust the width as needed */
    height: 30px; /* Adjust the height as needed */
  }

  /* Responsive styles for smaller screens */
  @media (max-width: 767.98px) {
    .skill-container {
      width: 100%; /* Set full width on smaller screens */
    }

    .logo-container {
      justify-content: flex-start; /* Align logos to the start on smaller screens */
    }
  }
  </style>
  