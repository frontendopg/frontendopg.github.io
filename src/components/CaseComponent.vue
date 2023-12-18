<!-- <template>
    <div id="blogger" class="container blog my-4">
      <h1 class="text-center mb-5"> Последние кейсы</h1>
      <div class="row gy-4">
        <div class="blog-guts col-12 col-md-4">
          <div class="blog-body position-relative">
            <article>
              <a href="#">
                <div class="case-image ots1">
                  <img src="../assets/img/img_noyt1.jpg" class="img-fluid" alt="1"/>
                </div>
                <div class="header-date px-3 py-4">
                  <h5> <b>Настройка кэширования данных. Апгрейд сервера. Ускорение работы сайта в 30 раз!</b> </h5>
                  <div class="case-date">
                    <p> 04.05.2020 </p>
                  </div>
                  <div class="blog-desc mt-4">
                    <p> Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения... </p>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </div>
        <div class="blog-guts col-12 col-md-8">
          <article>
            <a href="#">
              <div class="case-body position-relative">
                <div class="case-image ots2">
                  <img src="../assets/img/img_case2.jpg"  class="img-fluid" alt="2"/>
                </div>
                <div class="header-date header-date-internalized px-3 py-4">
                  <h5><b> Использование отчетов Ecommerce в Яндекс.Метрике</b> </h5>
                </div>
              </div>
            </a>
          </article>
        </div>
        <div class="blog-guts col-12 col-md-4">
          <article>
            <a href="#">
              <div class="cringe position-relative">
                <div class="case-image ots3">
                  <img src="../assets/img/img_noyt2.png" class="img-fluid" alt="3" style = "filter: blur(1px)"/>
                </div>
                <div class="header-date header-date-internalized px-3">
                  <h5><b> Повышение конверсии страницы с формой заявки с применением AB-тестирования
                    Повышение конверсии страницы с формой заявки с применением AB-тестирования</b> </h5>
                  <div class="case-date">
                    <p> 24.01.2020 </p>
                  </div>
                </div>
              </div>
            </a>
          </article>
        </div>
        <div class="blog-guts col-12 col-md-4">
          <article>
            <a href="#">
              <div class="cringe position-relative">
                <div class="case-image ots4">
                  <img src="../assets/img/img_case4.jpeg" class="img-fluid" alt="4" style = "filter: blur(1px)"/>
                </div>
                <div class="header-date header-date-internalized px-3">
                  <h5><b> Drupal 7: ускорение времени генерации страниц интернет-магазина на 32% </b> </h5>
                  <div class="case-date">
                    <p> 23.09.19 </p>
                  </div>
                </div>
              </div>
            </a>
          </article>
        </div>
        <div class="blog-guts col-12 col-md-4">
          <article>
            <a href="#">
              <div class="position-relative">
                <div class="case-image ots5">
                  <img src="../assets/img/img_case5.png" class="img-fluid" alt="5">
                </div>
                <div class="header-date px-3 py-4">
                  <h5> Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1С: Предприятие, МойСклад, Класс365 </h5>
                  <div class="case-date">
                    <p> 22.08.2019 </p>
                  </div>
                  <div class="blog-desc mt-4">
                    <p> Опубликован релиз модуля... </p>
                  </div>
                </div>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CaseComponent"
  }
  </script>
  
  <style scoped>
  
  @media (max-width: 770px)
  {
    .ots1, .ots2, .ots3, .ots4, .ots5
    {
      max-width: 400px;
      max-height: 200px;
    }
  }
  
  .blog{
    max-width: 960px;
    font-size: 16px;
  }
  .blog-guts{
    height: 360px;
    cursor: pointer;
  }
  .blog-guts a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
  .blog-guts a:hover h5{
    text-decoration: underline;
  }
  .blog-guts h5, .blog-guts p{
    font-size: 14px;
  }
  .case-image img{
    height: 140px;
    object-fit: cover;
    border-radius: 6px;
  
  }
  .case-image-internalized img{
    height: 360px; 
    object-fit: cover;
    border-radius: 8px;
  }
  .header-date-internalized{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    z-index: 1000;
  }
  .blog-desc p{
    color: black;
  }
  .header-date-internalized h5{
    color:white;
  }
  .case-date{
    color: lightgray;
  }
  @media screen and (min-width: 770px){
    .blog-guts{
      height: 470px;
    }
    .blog-guts h5, .blog-guts p{
      font-size: 18px;
    }
    .case-image-internalized img{
      height: 470px;
    }
    .case-image img{
      height: 200px;
    }
  }
  </style> -->
  <template>
<div class="container block block-views block-views-blockblog-block-1" id="block-views-block-blog-block-1">
                <h2 class="block-title" id="cases">Последние кейсы</h2>
                <div class="form-group">
                    <div class="inverse view view-blog view-id-blog view-display-id-block_1">
                        <div class="view-content">
                            <article about="#" class="blog keys-1">
                                <div class="keys-wrapper" :style="{'background-image': 'url(' + require('../assets/img/img_noyt1.jpg') + ')'}">

                                    <div class="keys-img" :style="{'background-image': 'url(' + require('../assets/img/img_noyt1.jpg') + ')'}"></div>
                                    <div class="keys-header">
                                        <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span></a>
                                        </h2>
                                        <div class="keys-date">22.04.2019</div>
                                    </div>
                                    <div class="keys-content">
                                        <div class="field field--name-body  field--label-hidden field--item">
                                            <p>Эти слова совершенно справедливы, однако гипнотический рифф продолжает
                                                паузный пласт.</p>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article about="#" class="blog is-promoted is-sticky keys-2">
                                <div class="keys-wrapper" style="background-image: url('~@/src/assets/img/img_noyt3.jpg');">
                                    <div class="keys-header">
                                        <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span>
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                            </article>

                            <article data-history-node-id="263" about="#"
                                class="blog is-promoted keys-1">
                                <div class="keys-wrapper" style="background-image: url('./src/assets/img/img_noyt4.jpg');">
                                    <div class="keys-img" style="background-image: url('./src/assets/img/img_case4.jpg');"></div>
                                    <div class="keys-header">
                                        <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span></a>
                                        </h2>
                                        <div class="keys-date">22.04.2019</div>
                                    </div>
                                </div>
                            </article>


                            <article about="#" class="blog is-promoted keys-1">
                                <div class="keys-wrapper" style="background-image: url('~@/src/assets/img/img_case3.jpg');">
                                    <div class="keys-img" style="background-image: url('~@/src/assets/img/img_case3.jpg');"></div>
                                    <div class="keys-header">
                                        <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span></a>
                                        </h2>
                                        <div class="keys-date">22.04.20</div>
                                    </div>
                                </div>
                            </article>


                            <article about="#" class="blog is-promoted keys-1 clearfix">
                                <div class="keys-wrapper" style="background-image: url('~@/src/assets/img/img_noyt4.jpg');">
                                    <div class="keys-img" style="background-image: url('~@/src/assets/img/img_noyt4.jpg');"></div>
                                    <div class="keys-header">
                                        <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета </span>
                                            </a>
                                        </h2>
                                        <div class="keys-date">
                                            22.04.2019
                                        </div>
                                    </div>
                                    <div class="keys-content">
                                        <div class="field field--name-body  field--label-hidden field--item">
                                            <p>Эти слова совершенно справедливы, однако гипнотический рифф продолжает
                                                паузный пласт.</p>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article about="#" class="blog is-promoted keys-2 clearfix">
                                <div class="keys-wrapper" style="background-image: url('~@/src/assets/img/img_case2.jpg');">
                                    <div class="keys-header">
                                        <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span>
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                            </article>

                            <article about="#" class="blog is-promoted keys-1 clearfix">
                                <div class="keys-wrapper" style="background-image: url('~@/src/assets/img/img_case2.jpg');">

                                    <div class="keys-img" style="background-image: url('~@/src/assets/img/img_case2.jpg');"></div>
                                    <div class="keys-header">
                                        <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span></a>
                                        </h2>
                                        <div class="keys-date">
                                            22.04.2019
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="more-link form-group"><a href="#">Показать еще</a></div>
                    </div>
                </div>
            </div>
</template>
<script>
  export default {
    name: "CaseComponent"
  }
  </script>
<style>
.blog {
display: block;
width: 100%;
}

#block-views-block-blog-block-1 .more-link a {
display: inline-block;
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 1;
text-transform: uppercase;
color: #050c33;
padding: 24px 75px;
border: 1px solid #cccdd5;
border-radius: 5px;
text-decoration: none;
margin-bottom: 20px;
}

.blog.keys-1 {
width: 33.333333%;
padding: 0 10px;
float: left;
margin-bottom: 20px;
min-height: 475px;
font-family: 'Montserrat', sans-serif;
overflow: hidden;
cursor: pointer;
}

.blog.keys-2 {
width: 66.66666667%;
padding: 0 10px;
float: left;
margin-bottom: 20px;
min-height: 475px;
font-family: 'Montserrat', sans-serif;
overflow: hidden;
cursor: pointer;
}

.keys-wrapper {
height: 100%;
display: flex;
flex-direction: column;
position: relative;
padding: 40px;
border-radius: 5px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
}

.keys-wrapper:before {
content: "";
display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: linear-gradient(360deg, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 55.58%);
z-index: 5;
border-radius: 5px;
}

.keys-header {
margin-top: auto;
position: relative;
z-index: 10;
}

.keys-header h2 {
font-weight: bold;
font-size: 18px;
line-height: 1.25;
margin-bottom: 5px;
width: 320px;
max-width: 100%;
}

.keys-header h2 a {
color: #fff;
}

.keys-content {
position: relative;
z-index: 10;
margin-top: 20px;
font-weight: 500;
font-size: 14px;
color: #4e5a73;
}

.keys-img {
position: relative;
z-index: 10;
height: 50%;
background-position: center;
background-size: cover;
margin-left: -40px;
margin-right: -40px;
margin-top: -40px;
border-radius: 5px;
box-sizing: content-box;
}

.keys-date {
color: #fff;
opacity: .5;
font-size: 12px;
line-height: 1.25;
}

.blog.keys-1 .keys-content,
.blog.keys-1 .keys-img {
 display: none; 
}

.inverse .blog.keys-1:nth-of-type(4n+1) .keys-wrapper {
background: none!important;
}

.inverse .blog.keys-1:nth-of-type(4n+1) .keys-wrapper:before {
display: none;
}

.inverse .blog.keys-1:nth-of-type(4n+1) .keys-content,
.inverse .blog.keys-1:nth-of-type(4n+1) .keys-img {
 display: block;
}

.inverse .blog.keys-1:nth-of-type(4n+1) .keys-header {
margin-top: 40px;
}

.inverse .blog.keys-1:nth-of-type(4n+1) .keys-header h2 a {
color: #050c33;
}

.inverse .blog.keys-1:nth-of-type(4n+1) .keys-date {
color: #050c33;
}
</style>