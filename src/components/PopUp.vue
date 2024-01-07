<script setup>
import { reactive, computed, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, email, numeric, helpers } from '@vuelidate/validators'
const formData = reactive({
  login:"",
  number:"",
  email:"",
  message:"",
});
const rules = computed(()=>
{
  return {
    login: {
      required: helpers.withMessage('Введите имя', required),
      maxLength: helpers.withMessage('Длина имени не должна превышать 25 символов', maxLength(25)),
      alpha: helpers.withMessage('Имя должно содержать только буквы', val => /^[а-яёa-zA-Z]*$/i.test(val)),
    },
    number: {
      required: helpers.withMessage('Введите номер', required),
      minLength: helpers.withMessage('Минимальная длина 3 символа',minLength(3)),
      maxLength: helpers.withMessage('Максимальная длина 11 символов', maxLength(11)),
      numeric: helpers.withMessage('Поле должно содержать только цифры', numeric),
    },
    email: {
      required: helpers.withMessage('Введите E-mail', required),
      email: helpers.withMessage('Введите E-mail в правильном формате', email),
    },
    message: {},
  };
});
const isLoading = ref(false); // новая переменная состояния
const v$ = useVuelidate(rules, formData);
const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    if (!v$.value.$invalid) {
      isLoading.value = true; // начало загрузки
      const formDataToSend = {
        login: formData.login,
        number: formData.number,
        email: formData.email,
        message: formData.message,
      };

      fetch('https://formcarry.com/s/b_pRIT1yrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      })
        .then(response => {
          isLoading.value = false; // конец загрузки
          if (response.ok) {
            alert('Form submitted successfully!');
          } else {
            alert('Failed to submit the form. Please try again.');
          }
        })
        .catch(error => {
          isLoading.value = false; // конец загрузки
          console.error('Error submitting the form:', error);
          alert('An error occurred while submitting the form. Please try again.');
        });
    }
  }
};

</script>
<template>
<div class="justify-content-center flex popup" :class="{ open: isOpen }" ref="popup">
<div class="col-12 col-md-5 form-form">
<div class="lds-ellipsis" v-if="isLoading">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<form id = "Form2" @submit.prevent="submitForm" v-if="!isLoading">
  <div class = "form-row">
    <div class = "col-12">
      <label class = "text-light form-group"><br/>
        
        <input class = "form-control form-control-md info" 
        type = "text" 
        id="login" 
        v-model="formData.login" 
         @blur="v$.login.$touch()"
         placeholder="Имя"
        >
        
        <div class="error" v-for="error in v$.login.$errors" :key="error.$uid">
        {{ error.$message }}
        </div>
      </label><br/>
    </div>
    <div class = "col-12">
      <label class = "text-light form-group"><br/>
        <input class = "form-control form-control-md info" type = "text" 
        id = "number"
        
        v-model.trim="formData.number" 
        @blur="v$.number.$touch()"
        placeholder="Номер"
        >
        <div class="error" v-for="error in v$.number.$errors" :key="error.$uid">
        {{ error.$message }}
        </div>
       
      
      </label><br/>
    </div>
    <div class = "col-12">
      <label class = "text-light form-group"><br/>
        <input class = "form-control form-control-md info" 
        type = "email" 
        id = "email" 
        v-model.trim="formData.email" 
        @blur="v$.email.$touch()"
        placeholder="E-mail"
        >
      
        <div class="error" v-for="error in v$.email.$errors" :key="error.$uid">
        {{ error.$message }}
        </div>
      </label><br/>
    </div>
    <div class = "col-12">
      <label class = "form-group"><br/>
        <textarea class = "form-control form-control-md info" 
         v-model="formData.message"
        id = "message" 
        placeholder="Ваше сообщение"
        ></textarea>
      </label><br/>
    </div>
    <div class = "col-12">
      <label class = "text-light form-group text-checkbox">
        <input type = "checkbox" id = "CB" name = "Agreement" class = "info" required>
        Отправляя заявку, я даю согласие на
        <a class = "form-politics" href = "" rel = "nofollow">обработку своих персональных данных. *</a>
      </label><br/>
    </div>
    <div class = "col-12 mt-3">
      <button class = "btn btn-footer" type="submit" id = "Button" :disabled="v$.$pending || v$.$invalid" >Свяжитесь с нами!</button>
      <div v-if="v$.$error">Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.</div>.
    </div>
  </div>
</form>

</div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false, // Track the state of the pop-up window
      };
    },
    mounted() {
      this.animateOpacity();
    },
    methods: {
      animateOpacity() {
        let start = null;
        const animate = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          this.isOpen = true; // Set the state to open the pop-up window
          this.$refs.popup.style.opacity = Math.min(progress / 1000, 1); // Adjust the duration and maximum opacity as needed
          if (progress < 1000) { // Adjust the duration as needed
            window.requestAnimationFrame(animate);
          }
        };
        window.requestAnimationFrame(animate);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Define styles for the pop-up container and content */
  
  .lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
  
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(18, 18, 46);
    padding: 20px;
    border: 1px solid #ccc;
    transition: opacity 0.5s; /* Add opacity transition */
    z-index: 1000;
  }
  

  .error
  {
    color: red;
  }

  h1
  {
    color: #e5e5e5;
    margin-bottom: 1em;
    text-align: left;
  }
  
  .text_
  {
    color: #e5e5e5;
    text-align: left;
    margin-bottom: 5em;
  }
  .text-checkbox, .footerText
  {
    text-align: left;
  }
  .footer_region
  {
    position: relative;
    width: 100%;
    height: auto;
    background: url("../assets/img/druplar-emblem.svg") top center,
    url("../assets/img/druplar-emblem2.png") bottom right;
    background-repeat: no-repeat;
    background-size: 20%;
  }
  
  .footer_background
  {
    position: absolute;
    z-index: -2;
    background: linear-gradient(254.72deg, rgba(245, 240, 240, 0.27) -114.85%, rgba(252, 249, 249, 0) 69.04%), #06091c;
    left:0;
    right:0;
    top:0;
    bottom:0;
  }
  
  .emblems-block{
    margin: 40px;
  }
  .emblems-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .form-politics
{
  color: #ef4c35;
}
.form-control::placeholder {
  color: rgb(206, 206, 206);
}
.btn-footer
{
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 1em 2em;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-radius: 6px;
  background: #ef4c35;
  transition: 0.2s;
  width: 100%;
}

.form-row
{
  margin-left: 4em;
}

.phone, .email
{
  font-size:25px;
}

.form-group
{
  width: 100%;
}

.info
{
  background: transparent;
  color:#fff;
}
  .emblems-list {
    list-style: none;
    display: flex;
    padding-left: 0;
  }
  .emblems-list-item a {
    width: 30px;
    height: 30px;
    background: #f14d34;
    display: inline-block;
    text-align: center;
    border-radius: 5px;
  }
  .emblems-list-item img {
    width: 18px;
    height: 16px;
    filter: invert(1);
  }
  .footerText {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    opacity: 0.7;
  }
  hr
  {
    position: absolute;
    width: 100%;
    border-top: 2px solid grey;
    left: 0;
  }
  @media (max-width: 767px)
{
  .form-text
  {
    padding: 0 24px;
  }
  .form-form
  {
    padding: 0 24px;
  }
  h1
  {
    text-align: center;
  }
  .text_
  {
    text-align: justify;
  }
  .form-row
  {
    margin-left: 0;
  }
  .footerText
  {
    font-size: 16px;
  }
  .emblems-block{
    margin: 0;
    padding: 0 24px;
  }
  .footer_region
  {
    background-size: 35%;
  }
}
  </style>