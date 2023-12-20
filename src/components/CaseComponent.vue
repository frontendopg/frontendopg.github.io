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
                <div class="keys-date">24.12.2023</div>
              </div>
              <div class="keys-content">
                <div class="field field--name-body  field--label-hidden field--item">
                  <p>Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.</p>
                </div>
              </div>
            </div>
          </article>

          <article about="#" class="blog is-promoted is-sticky keys-2">
            <div class="keys-wrapper" :style="{'background-image': 'url(' + require('../assets/img/img_noyt3.jpg') + ')'}">
              <div class="keys-header">
                <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span>
                                            </a>
                                        </h2>
              </div>
            </div>
          </article>

          <article data-history-node-id="263" about="#" class="blog is-promoted keys-1">
            <div class="keys-wrapper" :style="{'background-image': 'url(' + require('../assets/img/img_noyt4.jpg') + ')'}">
              <div class="keys-img" :style="{'background-image': 'url(' + require('../assets/img/img_case4.jpeg') + ')'}"></div>
              <div class="keys-header">
                <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span></a>
                                        </h2>
                <div class="keys-date">24.12.2023</div>
              </div>
            </div>
          </article>

          <article about="#" class="blog is-promoted keys-1">
            <div class="keys-wrapper" :style="{'background-image': 'url(' + require('../assets/img/img_case3.jpeg') + ')'}">
              <div class="keys-img" :style="{'background-image': 'url(' + require('../assets/img/img_case3.jpeg') + ')'}"></div>
              <div class="keys-header">
                <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span></a>
                                        </h2>
                <div class="keys-date">24.12.2023</div>
              </div>
            </div>
          </article>

          <article about="#" class="blog is-promoted keys-1 clearfix">
            <div class="keys-wrapper" :style="{'background-image': 'url(' + require('../assets/img/img_noyt4.jpg') + ')'}">
              <div class="keys-img" :style="{'background-image': 'url(' + require('../assets/img/img_noyt4.jpg') + ')'}"></div>
              <div class="keys-header">
                <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета </span>
                                            </a>
                                        </h2>
                <div class="keys-date">
                  24.12.2023
                </div>
              </div>
              <div class="keys-content">
                <div class="field field--name-body  field--label-hidden field--item">
                  <p>Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.</p>
                </div>
              </div>
            </div>
          </article>

          <article about="#" class="blog is-promoted keys-2 clearfix">
            <div class="keys-wrapper" :style="{'background-image': 'url(' + require('../assets/img/img_case2.jpg') + ')'}">
              <div class="keys-header">
                <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span>
                                            </a>
                                        </h2>
              </div>
            </div>
          </article>

          <article about="#" class="blog is-promoted keys-1 clearfix">
            <div class="keys-wrapper" :style="{'background-image': 'url(' + require('../assets/img/img_case2.jpg') + ')'}">

              <div class="keys-img" :style="{'background-image': 'url(' + require('../assets/img/img_case2.jpg') + ')'}"></div>
              <div class="keys-header">
                <h2>
                                            <a href="#"><span>Настройка выгрузки YML для Яндекс.Маркета</span></a>
                                        </h2>
                <div class="keys-date">
                  24.12.2023
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
    #block-views-block-blog-block-1 .view-content {
        display: flex;
        flex-wrap: wrap;
    }
    #block-views-block-blog-block-1 .view-content:after {
        content: "";
        display: table;
        clear: both;
    }
    #block-views-block-blog-block-1 .block-title {
        font-weight: bold;
        font-size: 42px;
        margin-bottom: 46px;
        margin-top: 0;
        text-align: center;
        color: #050c33;
    }
    #block-views-block-blog-block-1 .more-link {
        text-align: center;
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
        text-decoration: none;
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
    .blog.keys-1 .keys-content, .blog.keys-1 .keys-img {
        display: none;
    }

    .inverse .blog.keys-1:nth-of-type(4n+1) .keys-wrapper {
        background: none!important;
    }
    .inverse .blog.keys-1:nth-of-type(4n+1) .keys-wrapper:before {
        display: none;
    }
    .inverse .blog.keys-1:nth-of-type(4n+1) .keys-content, .inverse .blog.keys-1:nth-of-type(4n+1) .keys-img {
        display: block;
    }
    .inverse .blog.keys-1:nth-of-type(4n+1) .keys-header {
        margin-top: 40px;
        text-decoration: none;
    }
    .inverse .blog.keys-1:nth-of-type(4n+1) .keys-header h2 a {
        color: #050c33;
    }
    .inverse .blog.keys-1:nth-of-type(4n+1) .keys-date {
        color: #050c33;
    }

</style>