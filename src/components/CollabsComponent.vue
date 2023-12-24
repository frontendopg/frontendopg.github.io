<template>
    <div class = "container-fluid" style = "margin-top: 200px">
    <div class = "text-center">
      <h1>С нами работают</h1>
      <p class = "text-center">Десятки компаний доверяют нам самое ценное, что у них есть в интренете - свои сайты.</p>
      <p class = "text-center">Мы делаем всё, чтобы наше сотрудничество было долгим.</p>
    </div>
    <div class="first-swiper">
        <swiper
        :observer="true"
        :observeParents="true"
        :slidesPerView="6"
        :centeredSlides="true"
        :centeredSlidesBounds="true"
        :spaceBetween="30"
        :freeMode="true"
        :loop="true"
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
        :breakpoints="{
            640: {
            slidesPerView: 3,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
            1024: {
            slidesPerView: 5,
            }
        }"
        >
        <swiper-slide><img src="../assets/img/rings/1.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/2.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/3.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/4.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/5.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/6.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/7.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/1.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/2.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/3.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/img/rings/2.jpg"></swiper-slide>
        
        </swiper>
    </div>
    <div class="second-swiper">
        <swiper
            :observer="true"
            :observeParents="true"
            :slidesPerView="5"
            :spaceBetween="30"
            :centeredSlides="true"
            :centeredSlidesBounds="true"
            :loop="true"
            :freeMode="true"
            :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
            }"
            :modules="modules"
            class="mySwiper"
            :breakpoints="{
            640: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 40,
            }
        }"
        >
            <swiper-slide><img src="../assets/img/rings/1.jpg"></swiper-slide>
            <swiper-slide><img src="../assets/img/rings/2.jpg"></swiper-slide>
            <swiper-slide><img src="../assets/img/rings/3.jpg"></swiper-slide>
            <swiper-slide><img src="../assets/img/rings/4.jpg"></swiper-slide>
            <swiper-slide><img src="../assets/img/rings/5.jpg"></swiper-slide>
            <swiper-slide><img src="../assets/img/rings/6.jpg"></swiper-slide>
            <swiper-slide><img src="../assets/img/rings/7.jpg"></swiper-slide>
            <swiper-slide><img src="../assets/img/rings/1.jpg"></swiper-slide>
            <swiper-slide><img src="../assets/img/rings/2.jpg"></swiper-slide>
        </swiper>
    </div>
    </div>

  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { Autoplay,Pagination } from 'swiper/modules';
  
    export default {
    name: "CollabsComponent",
        components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Autoplay, Pagination],
        };
      },
    };
  </script>
<style>
.swiper {
    margin-bottom: 1% ;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  min-width: 20%;
  height: 100px;
  border: 1px solid #a1a1a1 !important;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


.swiper-slide:nth-child(2n) {
  width: 60%;
}

.swiper-slide:nth-child(3n) {
  width: 40%;
}

</style>
  