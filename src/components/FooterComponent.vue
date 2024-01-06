<script setup>
import router from '@/router'

const r$ = router;

const openPopup = () => {
  r$.push('/popup');

};
</script>
<template>
    <div class = "container-fluid pt-3 pb-5 pb-md-0 footer_region" id = "Footer">
      <div class = "footer_background"></div>
      <div class = "row d-flex mt-2 px-2">
        <div class = "col-12 col-md-10 mx-auto px-0">
          <div class = "row" style="margin-bottom: 40px;">
            <div class = "col-12 col-md-5 mx-auto form-text">
              <h1>Оставить заявку на поддержку сайта</h1>
              <p class = "col-12 text_">
                Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой?
                Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!
              </p>
              <div class = "text-start">
                <a class = "text-light text-decoration-none phone" href = "">8 800 222-26-73</a>
              </div>
              <div class = "text-start">
                <a class = "text-light email" href = "">info@drupal-coder.ru</a>
              </div>
            </div>
            <div class = "col-12 col-md-5 mx-auto form-form">
            <form id = "Form" action = "https://formcarry.com/s/b_pRIT1yrl" method = "POST" enctype = "multipart/form-data" accept-charset = "UTF-8">
              <div class = "form-row">
                <div class = "col-12">
                  <label class = "text-light form-group"><br/>
                    <input class = "form-control form-control-md info" type = "text" id = "Name" name = "lastName" placeholder = "Ваше имя" autocomplete = "off">
                  </label><br/>
                </div>
                <div class = "col-12">
                  <label class = "text-light form-group"><br/>
                    <input class = "form-control form-control-md info" type = "text" id = "Phone" name = "userPhone" placeholder = "Телефон" autocomplete = "off">
                  </label><br/>
                </div>
                <div class = "col-12">
                  <label class = "text-light form-group"><br/>
                    <input class = "form-control form-control-md info" type = "email" id = "Email" name = "userEmail" placeholder = "E-mail" autocomplete = "off">
                  </label><br/>
                </div>
                <div class = "col-12">
                  <label class = "form-group"><br/>
                    <textarea class = "form-control form-control-md info" name = "userMsg" id = "Text" placeholder = "Ваш комментарий" autocomplete = "off"></textarea>
                  </label><br/>
                </div>
                <div class = "col-12">
                  <label class = "text-light form-group text-checkbox">
                    <input type = "checkbox" id = "CB" name = "Agreement" class = "info">
                    Отправляя заявку, я даю согласие на
                    <a class = "form-politics" href = "" rel = "nofollow">обработку своих персональных данных. *</a>
                  </label><br/>
                </div>
                <div class = "col-12 mt-3">
                  <button class = "btn btn-footer" type="button" id = "button-open"  @click="openPopup">Свяжитесь с нами!</button>
                </div>
              </div>
            </form>
          </div>
          <router-view></router-view>
        </div>
        <hr>
          <div class="col-12 footer+">
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="row">
                  <div class="emblems-block">
                    <ul class="emblems-list" style="margin-top: 40px;">
                      <li class="emblems-list-item">
                        <a href="#"><img src="../assets/img/facebook.svg" alt=""/></a>
                      </li>
                      <li class="emblems-list-item">
                        <a href="#"><img src="../assets/img/vk.svg" alt="" /> </a>
                      </li>
                      <li class="emblems-list-item">
                        <a href="#"
                        ><img src="../assets/img/youtube.svg" alt=""
                        /></a>
                      </li>
                      <li class="emblems-list-item">
                        <a href="#"><img src="../assets/img/telegram.svg" alt=""/></a>
                      </li>
                    </ul>
                    <div class="footerText">
                      <p>
                        Проект ООО «Инитлаб», Краснодар, Россия.<br />
                        Drupal является зарегистрированной торговой маркой Dries Buytaert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
<!--
    <div class="justify-content-center flex form-popup">
<div class="col-12 col-md-5 form-form">
<form id = "Form2" @submit.prevent="submitForm">
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

-->
</template>
  
  <script>
  export default
  {
    name: "FooterComponent",
}
  </script>
  
  <style scoped>
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