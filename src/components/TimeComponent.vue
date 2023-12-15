<template>
    <div class = "competency-region container-fluid">
      <div class = "competencies">
        <div class = "container">
          <div class = "row">
            <div class = "col-md-10 time">
              <h1 class = "TitleCompetency">Наши профессиональные разработчики выполняют быстро любые задачи</h1>
            </div>
          </div>
          <div class = "row competencies-row row-flex">
            <div class = "col-6 col-sm-4">
              <div class = "competency mb-3">
                <div class = "competency-wrapper">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "container">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo"/>
                        <img src = "../assets/img/competency-20.svg" alt = "competency-20" class = "img-responsive position-relative" style = "margin-left: 3em"/>
                      </div>
                    </div>
                  </div>
                  <h1 style = "margin-left: 1.5em">от 1ч</h1>
                  <div class = "BodyCompetency col-8" style = "margin-left: 3em">Настройка события GA в интернет-магазине</div>
                </div>
              </div>
            </div>
            <div class = "col-6 col-sm-3">
              <div class = "competency mb-3">
                <div class = "competency-wrapper">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "container">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo"/>
                        <img src = "../assets/img/competency-21.svg" alt = "competency-21" class = "img-responsive position-relative" style = "margin-left: 3em"/>
                      </div>
                    </div>
                  </div>
                  <h1 style = "margin-left: 1.5em">от 20ч</h1>
                  <div class = "BodyCompetency col-8" style = "margin-left: 3em">Разработка мобильной версии сайта</div>
                </div>
              </div>
            </div>
            <div class = "col-7 col-sm-3">
              <div class = "competency mb-3">
                <div class = "competency-wrapper">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "container">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo"/>
                        <img src = "../assets/img/competency-22.svg" alt = "competency-22" class = "img-responsive position-relative" style = "margin-left: 3em"/>
                      </div>
                    </div>
                  </div>
                  <h1 style = "margin-left: 1.5em">от 8ч</h1>
                  <div class = "BodyCompetency col-7" style = "margin-left: 3em">Интеграция модуля оплаты</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default
  {
    name: 'TimeComponent'
  }
  </script>
  
  <style scoped>
  .time
  {
    margin-bottom: 40px;
  }
  
  @media (max-width: 1300px)
  {
    .container
    {
      position: relative;
      z-index: 15;
    }
  }
  .competencies
  {
    padding: 140px 0;
  }
  .OpacityLogo{
    opacity: 20%;
    width: 10%;
    height: 10%;
  }
  .TitleCompetency
  {
    font-size: 38px;
    font-weight: 1000;
    margin-bottom: 20px;
  }
  .BodyCompetency
  {
    font-size: 13px;
    margin-top: 20px;
  }
  </style>