<template>
    <div class="container reviews">
      <h2 class="reviews__title">Отзывы</h2>
      <div class="reviews__blok">
        <div class="reviews__wrapper ">
          <div class="left_blok">
            <div class="reviews__left"
                v-for="(item, i) in infoList.length"
                :key="item">
              <div v-if="counter === i">
                <img class="reviews__img" :src="itemImage" alt="" />
                <h6 class="reviews__text" style="font-weight: 600; text-align: left;" >{{ infoList[i].text }}</h6>
                <p class="reviews__name">{{ infoList[i].name }}</p>
              </div>
            </div>
          </div>
          <div class="right_blok ">
            <div class="reviews__right">
              <img @click="() => (counter > 0 ? counter-- : counter)"
                  class="reviews__arrow__left"
                  src="../assets/img/left.svg"
                  alt=""
                  width="16"
                  height="32"/>
              <p class="counter">{{ counter + 1 }}/8</p>
              <img @click="() => (counter < 7 ? counter++ : counter)"
                  class="reviews__arrow__left"
                  src="../assets/img/right.svg"
                  alt=""
                  width="16"
                  height="32"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        infoList: [
          {
            name:
                'С уважением, Наталья Сушкова руководитель Отдела' +
                'веб-проектов Группы компаний «Си Эль парфюм»',
            text:
                'Долгие поиски единственного и неповторимого мастера на многострадальный сайт www.cielparfum.com, который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть, привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!',
            img: 'logo_0.png',
          },
          {
            name: 'Сергей Чепурко, руководитель проекта ',
            text: 'Сергей — профессиональный, высококвалифицированый программист с огромным опытом в ИТ. Я долгое время общался с топ-фрилансерами (вся первая двадцатка) на веблансере и могу сказать, что С СЕРГЕЕМ ОНИ И РЯДОМ НЕ ВАЛЯЛИСЬ. Работаем с Сергеем до сих пор. С ним приятно работать, я доволен. \n',
            img: 'logo.png',
          },
          {
            name: 'Леонид Александрович Ледовский',
            text:
                'И вот уже практически полгода как не проходит и дня,чтобы я не поудивлялась и не порадовалась своему везению!' +
                'Починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими' +
                'существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и' +
                'доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф).',
            img: 'farbors_ru.jpg',
          },
          {
            name: 'Надежда Сикорская, Женева, Швейцария',
            text: 'Моя электронная газета www.nashagazeta.ch существует в Швейцарии уже 10 лет. За это время мы сменили 7 специалистов по техподдержке, и только сейчас, \n' +
                '        в последние несколько месяцев, с начала сотрудничества с Алексеем Синицей и его командой, \n' +
                '        я впервые почувствовала, что у меня есть надежный технический тыл. Без громких слов и обещаний, ребята просто спокойно и качественно делают работу, быстро реагируют, \n' +
                '        находят решения, предлагают конкретные варианты улучшения функционирования сайта и сами их оперативно осуществляют. Сотрудничество с ними – одно удовольствие!',
            img: 'nashagazeta_ch.png',
          },
          {
            name: ' Кузин Вадим, руководитель строительного направления Дизайн-бюро интерьеров Estee',
            text: 'Наша компания Estee Design занимается дизайном интерьеров. Сайт сверстан на Drupal. Искали программистов под выполнение ряда небольших изменений и корректировок по сайту.\n' +
                '        Пообщавшись с Алексеем Синицей, приняли решение о начале работ с компанией Initlab/drupal-coder. Сотрудничеством довольны на 100%. \n' +
                '        Четкая и понятная система коммуникации, достаточно оперативное решение по задачам. Дали рекомендации по улучшению програмной части сайта, \n' +
                '        исправили ряд скрытых ошибок.\n' +
                '        Никогда не пишу отзывы (нет времени), но в данном случае, по просьбе Алексея, не могу не рекомендовать Initlab другим людям - \n' +
                '        действительно компания профессионалов.',
            img: 'logo-estee.png',
          },
          {
            name: 'Константин Бельский, зам. генерального директора портала ',
            text: 'Наша компания за несколько лет сменила несколько команд программистов и специалистов техподдержки,\n' +
                '         и почти отчаялась найти на российском рынке адекватное профессиональное предложение по разумной цене. \n' +
                '         Пока мы не начали работать с командой "Инитлаб", воплощающей в себе все наши представления о нормальной системе взаимодействия в сочетании с \n' +
                '         профессиональным неравнодушием. Впервые в моей деловой практике я чувствую надежно прикрытыми важнейшие задачи в жизни электронного СМИ, при том, \n' +
                '         что мои коллеги работают за сотни километров от нас и мы никогда не встречались лично.',
            img: 'cableman_ru.png',
          },
          {
            name: 'С уважением, Владислав',
            text:
                'За довольно продолжительный срок (2014 - 2016 годы) весьма плотной работы (интернет-магазин на безумно замороченном Drupal 6: устраняли косяки разработчиков,' +
                'ускоряли сайт, сделали множество новых функций и т.п.) - только самые добрые эмоции от работы с командой Initlab / Drupal-coder:' +
                'всегда можно рассчитывать на быструю и толковую помощь, поддержку, совет. Даже сейчас, не смотря на то, что мы почти год не работали на постоянной основе' +
                '(банально закончились задачи), случайно возникшая проблема с сайтом была решена мгновенно! В общем, только самые искренние благодарности и рекомендации!' +
                'Спасибо! )',
            img: 'logo_2.png',
          },
          {
            name: 'Дмитрий Новиков',
            text:
                'Хотел поблагодарить за работу над нашими сайтами.\n' +
                '        За 4 месяца работы привели сайт в порядок, а самое главное получили инструмент, с помощью мы теперь можем быстро и красиво выставлять \n' +
                '        контент для образования и работы с предприятиями\n' +
                '        http://lpcma.tsu.ru/ru/post/reference\n' +
                '        Ну и многому научись благодаря работе с вами. Мы очень рады, что удалось найти настолько компетентных ребят )',
            img: 'lpcma_rus_v4.jpg',
          },
        ],
        counter: 0,
      }
    },
    methods: {
      changeSlideLeft() {
        if (this.counter > 0) {
          this.counter -= this.counter
        }
      },
      changeSlideRight() {
        if (this.counter < 7) {
          this.counter += this.counter
        }
      },
    },
    computed: {
      itemImage() {
        return require(`../assets/img/slider/${this.infoList[this.counter].img}`)
      },
    },
  }
  </script>
  <style scoped>
  .counter {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
  
    margin: -8px 16px -8px 16px;
  }
  .reviews__img {
    margin-bottom: 20px;
  }
  .reviews__blok {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reviews__title {
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    margin: 30px 15px 30px 15px;
  }
  
  .img_palc {
    opacity: 0.2;
  }
  
  .reviews__wrapper {
    width: 70%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 25px;
    padding: 30px 40px 30px 40px;
    margin: 10px 15px 30px 15px;
    display: flex;
    justify-content: space-between;
  
  }
  
  .left_blok {
    width: 60%;
    justify-content: space-between;
  }
  
  @media (min-width: 560px) {
    .right_blok {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .reviews__right {
      display: flex;
    }
  }
  
  @media (max-width: 750px) and (min-width: 561px) {
    .reviews__wrapper {
      width: 100%;
    }
  }
  
  @media (max-width: 560px) {
    .reviews__wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  
    .counter {
      margin: 10px 20px 0px 20px;
    }
  
    .left_blok {
      width: 80%;
      justify-content: space-between;
    }
  
    .right_blok {
      width: 100%;
    }
    .reviews__right
    {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .reviews__arrow__left
    {
      align-self: center;
    }
    .counter
    {
      text-align: center;
    }
  }
  </style>
  