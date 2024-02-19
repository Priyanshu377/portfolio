<template>
    <section class="section" id="contact">
      <div class="container text-center">
        <h6 class="section-title mb-5">Contact Me</h6>
        <!-- contact form -->
        <form action="https://formspree.io/priyanshuchauhan96435@gmail.com" method="POST" @submit.prevent="submitForm" class="contact-form col-md-10 col-lg-8 m-auto">
          <div class="form-row">
            <div class="form-group col-sm-6">
              <input v-model="name" type="text" size="50" class="form-control" placeholder="Your Name" required>
            </div>
            <div class="form-group col-12 col-sm-6">
              <input v-model="email" type="email" class="form-control" placeholder="Enter Email" required>
            </div>
            <div class="form-group col-12 col-sm-12 ">
              <textarea v-model="message" name="comment" id="comment" rows="6" class="form-control" placeholder="Write Something"></textarea>
            </div>
            <div class="form-group col-sm-12 mt-3">
              <input type="submit" value="Send Message" class="btn btn-outline-primary rounded">
            </div>
          </div>
        </form><!-- end of contact form -->
      </div><!-- end of container -->
    </section><!-- end of contact section -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted:', this.name, this.email, this.message);
      },
    },
  };
  </script>
  
  <style scoped>

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: rgba(0, 0, 0, 0.01);
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    -webkit-transition: none;
    transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #495057;
  background-color: rgba(0, 0, 0, 0.01);
  border-color: #b4add3;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(105, 90, 166, 0.25);
}

.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: rgba(0, 0, 0, 0.01);
}






textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1rem;
}


.form-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row > .col,
.form-row > [class*="col-"] {
  padding-right: 5px;
  padding-left: 5px;
}

  </style>
  