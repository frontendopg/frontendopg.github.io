<template>
    <div class = "competency-region container-fluid">
      <div class = "competencies">
        <div class = "container">
          <div class = "row justify-content-center">
            <div class = "col-md-11 time"> 
              <h1 class = "TitleCompetency">Наши профессиональные разработчики выполняют быстро любые задачи</h1>
            </div>
          </div>
          <div class = "row competencies-row row-flex">
            <div class = "col-6 col-sm-3">
              <div class = "competency mb-3">
                <div class = "competency-wrapper row justify-content-center">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "d-flex align-items-center justify-content-center">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo" style = "margin-left: -4em"/>
                        <img src = "../assets/img/competency-20.svg" alt = "competency-20" class = "img-responsive position-relative">
                      </div>
                    </div>
                  </div>
                  <h1>от 1ч</h1>
                  <div class = "BodyCompetency col-8">Настройка события GA в интернет-магазине</div>
                </div>
              </div>
            </div>
            <div class = "col-6 col-sm-3">
              <div class = "competency mb-3">
                <div class = "competency-wrapper row justify-content-center">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "d-flex align-items-center justify-content-center">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo" style = "margin-left: -4em"/>
                        <img src = "../assets/img/competency-21.svg" alt = "competency-21" class = "img-responsive position-relative">
                      </div>
                    </div>
                  </div>
                  <h1>от 20ч</h1>
                  <div class = "BodyCompetency col-8" >Разработка мобильной версии сайта</div>
                </div> 
              </div>
            </div>
            <div class = "col-6 col-sm-3">
              <div class = "competency mb-3">
                <div class = "competency-wrapper row justify-content-center">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "d-flex align-items-center justify-content-center">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo" style = "margin-left: -4em"/>
                        <img src = "../assets/img/competency-22.svg" alt = "competency-22" class = "img-responsive position-relative">
                      </div>
                    </div>
                  </div>
                  <h1>от 8ч</h1>
                  <div class = "BodyCompetency col-8">Интеграция модуля оплаты</div>
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
    margin-bottom: 50px;
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
    padding: 150px 0;
  }
  .OpacityLogo{
    opacity: 11%;
    max-width: 148px;
    max-height: 65px;
  }
  .TitleCompetency
  {
    font-size: 42px;
    font-weight: 1000;
    text-align: left;
    margin-bottom: 20px;
  }
  .BodyCompetency
  {
    font-size: 15px;
    text-align: left;
    margin-left: 65px;
  }
  </style>