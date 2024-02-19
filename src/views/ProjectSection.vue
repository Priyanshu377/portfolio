<template>
    <section id="projects">
        <p class="section-subtitle">Browse My Recent</p>
        <h1 class="title">Projects</h1>
      <div class="container">
        <div v-for="project in projects" :key="project.id" class="card">
          <div class="card-image">
            <img :src="require(`@/assets/images/${project.image}`)" />
          </div>
          <div class="card-text">
            <h2 class="card-title">{{ project.title }}</h2>
            <p class="card-body">{{ project.description }}</p>
          </div>
          <div class="card-button"><CustomButton buttonText="visit" :link="project.link" /></div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import CustomButton from "@/components/CustomButton.vue";
  
  export default {
    components: {
      CustomButton,
    },
    data() {
      return {
        projects : [
          {
            id: 1,
            image: "project-1.jpg",
            title: "Délicieux Bénédicte",
            description: "Eggs Benedict with hollandaise sauce, crispy bacon and an assortment of garden herbs.",
            link: "https://priyanshu377.github.io/natpri/"
          },
          {
            id: 2,
            image: "project-2.png",
            title: "Du bœuf Burger",
            description: "A beef burger with wholewheat patty, juicy lettuce and a side of gluten-free fries",
            link: "https://priyanshu377.github.io/natpri/"
          },
          {
            id: 3,
            image: "project-3.png",
            title: "Soupe à l’oignon",
            description: "The traditional French soup made with onions and beef with a dollop of garlic and saffron mayonnaise.",
            link: "https://priyanshu377.github.io/natpri/"
          },
          {
            id: 4,
            image: "project-4.png",
            title: "Coq au Vin",
            description: "Chickens doused in wine, mushrooms, pork, onions and garlic.",
            link: "https://priyanshu377.github.io/natpri/"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  #projects{
    margin-top: 5%;
  }
  *{
    font-family:'Playfair Display', serif;
  }
  .container{
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    padding:40px 20px;
  }
  .section-subtitle{
    margin-bottom: 6px;
    font-weight: 400;
    opacity: .6;
    text-align: center;
  }
.title{
    font-weight: 500;
    font-family: 'Baloo Paaji', cursive;
    color: #695aa6;
    text-align: center;

}
  .card{
    display:flex;
    flex-direction:column;
    width:400px;
    margin-bottom:60px;
    overflow: hidden;
  }
  .card>div{
    box-shadow:0 15px 20px 0 rgba(0,0,0,0.5);
  }
  .card-image{
    width:400px;
    height:250px;
  }
  .card-image>img{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:bottom;
  }
  .card-text{
    margin:-30px auto;
    margin-bottom:-50px;
    height:300px;
    width:300px;
    background-color:#1D1C20;
    color:#fff;
    padding:20px;
  }
  .card-title{
    font-size:2.2rem;
    margin-bottom:20px;
    margin-top:5px;
  }
  .card-body{
    font-size:1.25rem;
  }
  .card-button{
    margin-left:auto;
    margin-top: 1.3rem;
    width: 35%;
  
  }
  
  </style>
  
  