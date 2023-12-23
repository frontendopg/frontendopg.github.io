<template>
    <div class = "competency-region container-fluid">
      <div class = "competencies">
        <div class = "container">
          <div class = "row justify-content-center">
            <div class = "col-md-11 time"> 
              <h1 class = "TitleCompetency">Наши профессиональные разработчики выполняют быстро любые задачи</h1>
            </div>
          </div>
          <div class = "row competencies-row row-flex blocks">
            <div class = "col-md-4 col-sm-12">
              <div class = "competency mb-3">
                <div class = "competency-wrapper row justify-content-center">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "d-flex align-items-center col-md-7 justify-content-center">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo" style = "margin-left: -4em"/>
                        <img src = "../assets/img/competency-20.svg" alt = "competency-20" class = "img-responsive position-relative">
                      </div>
                    </div>
                  </div>
                  <h1 class="text col-9 justify-content-center">от 1ч</h1>
                  <div class = "BodyCompetency col-sm-5 col-md-9">Настройка события GA в интернет-магазине</div>
                </div>
              </div>
            </div>
            <div class = "col-md-4 col-sm-12">
              <div class = "competency mb-3">
                <div class = "competency-wrapper row justify-content-center">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "d-flex align-items-center col-md-8 justify-content-center">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo" style = "margin-left: -4em"/>
                        <img src = "../assets/img/competency-21.svg" alt = "competency-21" class = "img-responsive position-relative">
                      </div>
                    </div>
                  </div>
                  <h1 class="text col-8 justify-content-center">от 20ч</h1>
                  <div class = "BodyCompetency col-sm-5 col-md-8" >Разработка мобильной версии сайта</div>
                </div> 
              </div>
            </div>
            <div class = "col-md-4 col-sm-12">
              <div class = "competency mb-3">
                <div class = "competency-wrapper row justify-content-center">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "d-flex align-items-center col-md-9 justify-content-center">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo" style = "margin-left: -4em"/>
                        <img src = "../assets/img/competency-22.svg" alt = "competency-22" class = "img-responsive position-relative">
                      </div>
                    </div>
                  </div>
                  <h1 class="text col-md-7 justify-content-center">от 8ч</h1>
                  <div class = "BodyCompetency col-sm-4 col-md-7">Интеграция модуля оплаты</div>
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
  @media(max-width: 767px){
  .blocks{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container{
    justify-content: center;
  }
  }
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
  @media(min-width: 767px){
    .blocks{
      display: flex;
      flex-direction: row;
    }
    .text{
      text-align: left;
    }
  }
  .competencies
  {
    padding: 80px;
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
    margin: auto;
    text-align: left;
  }
  </style>