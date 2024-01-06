<template>
    <div class = "competency-region container-fluid">
      <div class = "competencies">
        <div class = "container main-container">
          <div class = "row">
            <div class = "team">
              <div class = "container">
                <h1 class = "competency-title">Команда</h1>
              </div>
            </div>
          </div>
          <div class = "row competencies-row row-flex">
            <div class = "col-sm-6 col-xs-12 col-lg-4 ots1">
              <div class = "competency mb-3">
                <div class = "competency-wrapper">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "container">
                        <img src = "../assets/img/IMG_2472_0.jpg" alt = "IMG_2472_0" class = "img-responsive"/>
                        <h2>Сергей Синица</h2>
                        <div class = "competency-body">Руководитель отдела веб-разработки, канд. тех. наук, заместитель директора</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class = "col-sm-6 col-xs-12 col-lg-4 ots2">
              <div class = "competency mb-3">
                <div class = "competency-wrapper">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "container">
                        <img src = "../assets/img/IMG_2539_0.jpg" alt = "IMG_2539_0" class = "img-responsive"/>
                        <h2>Роман Агабеков</h2>
                        <div class = "competency-body">Руководитель отдела DevOPS, директор</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class = "col-sm-6 col-xs-12 col-lg-4 ots3">
              <div class = "competency mb-3">
                <div class = "competency-wrapper">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "container">
                        <img src = "../assets/img/IMG_2474_1.jpg" alt = "IMG_2474_1" class = "img-responsive"/>
                        <h2>Алексей Синица</h2>
                        <div class = "competency-body">Руководитель отдела поддержки сайтов</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class = "col-sm-6 col-xs-12 col-lg-4 ots4">
              <div class = "competency mb-3">
                <div class = "competency-wrapper">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "container">
                        <img src = "../assets/img/IMG_2522_0.jpg" alt = "IMG_2522_0" class = "img-responsive"/>
                        <h2>Дарья Бочкарёва</h2>
                        <div class = "competency-body">Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class = "col-sm-6 col-xs-12 col-lg-4 ots5">
              <div class = "competency mb-3">
                <div class = "competency-wrapper">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "container">
                        <img src = "../assets/img/IMG_9971_16.jpg" alt = "IMG_9971_16" class = "img-responsive"/>
                        <h2>Ирина Торкунова</h2>
                        <div class = "competency-body">Менеджер по работе с клиентами</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class = "text-center mt-2">
        <div class = "container">
          <a href = "#FooterApp" role = "button" class = "btn btn-outline-light button_team">ВСЯ КОМАНДА</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default
    {
      name: 'TeamComponent'
    }
  </script>
  
  <style scoped>

  @media (max-width: 990px)
  {
    .main-container
    {
      max-width: 720px;
    }
    .ots1, .ots3, .ots5
    {
      width: 50%;
      padding: 0 8px 0 16px;
    }
    .ots2, .ots4
    {
      width: 50%;
      padding: 0 16px 0 8px;
    }
    img
    {
      width: 100%;
      height: 100%;
    }
    .text-about-person
    {
      width: 50%;
    }
  }
    .container
    {
      padding: 0;
    }
    h2
    {
      margin: 20px auto 10px auto;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      max-width: 280px;
      padding: 0;
    }
    .button_team
    {
      color: #292b2c;
      border-color: rgb(199, 199, 199);
      width: 20%;
      margin-bottom: 50px;
      padding: 10px;
      font-size: 12px;
    }
  
    .team
    {
      text-align: center;
      margin-bottom: 50px;
    }
    .text-about-person
    {
      width: 280px;
      margin: 0 auto;
    }
  
    .competencies
    {
      padding: 80px 0;
    }
  
    .competency-title
    {
      font-size: 42px;
      font-weight: 1000;
      margin-bottom: 20px;
    }
  
    .competency-body
    {
      font-size: 15px;
      text-align: left;
      max-width: 280px;
      padding: 0;
      margin: 0 auto;
    }
    @media (max-width: 990px)
    {
      .competency-title
    {
      font-size: 30px;
      font-weight: 800;
    }
    h2
    {
      font-size: 18px;
      width: 100%;
      margin: 15px 0 0 0;
    }
    .competency-body
    {
      width: 100%;
      margin: 7px 0 0 0;
    }
    .button_team
    {
      width: 44%;
      padding: 5px;
      font-size: 13px;
    }
    }
  </style>