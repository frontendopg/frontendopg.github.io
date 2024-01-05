<template>
    <div class = "competency-region container-fluid">
      <div class = "competencies">
        <div class = "container">
          <div class = "row justify-content-center">
            <div class = "col-md-11 time row"> 
              <h1 class = "TitleCompetency">Наши профессиональные разработчики выполняют быстро любые задачи</h1>
            </div>
          </div>
          <div class = "row competencies-row row-flex">
            <div class = "col-6 col-sm-4 timeBlock">
              <div class = "competency mb-3">
                <div class = "competency-wrapper row">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "d-flex align-items-center col-md-7 justify-content-center">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo" style = "margin-left: -4em"/>
                        <img src = "../assets/img/competency-20.svg" alt = "competency-20" class = "img-responsive position-relative">
                      </div>
                    </div>
                  </div>
                  <h1>от 1ч</h1>
                  <div class = "BodyCompetency col-9">Настройка события GA в интернет-магазине</div>
                </div>
              </div>
            </div>
            <div class = "col-6 col-sm-4 timeBlock">
              <div class = "competency mb-3">
                <div class = "competency-wrapper row">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "d-flex align-items-center col-md-8 justify-content-center">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo" style = "margin-left: -4em"/>
                        <img src = "../assets/img/competency-21.svg" alt = "competency-21" class = "img-responsive position-relative">
                      </div>
                    </div>
                  </div>
                  <h1>от 20ч</h1>
                  <div class = "BodyCompetency col-9" >Разработка мобильной версии сайта</div>
                </div> 
            </div>
              </div>
            <div class = "col-6 col-sm-4 timeBlock">
              <div class = "competency mb-3">
                <div class = "competency-wrapper row">
                  <div class = "competency-header">
                    <div class = "competency-icon">
                      <div class = "d-flex align-items-center col-md-9 justify-content-center">
                        <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute OpacityLogo" style = "margin-left: -4em"/>
                        <img src = "../assets/img/competency-22.svg" alt = "competency-22" class = "img-responsive position-relative">
                      </div>
                    </div>
                  </div>
                  <h1>от 8ч</h1>
                  <div class = "BodyCompetency col-9">Интеграция модуля оплаты</div>
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
  .TitleCompetency{
    font-size: 20px;
    flex-direction: row;
  }
  /* .BodyCompetency{
    margin: 0;
  } */
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
    .TitleCompetency
  {
    font-size: 42px;
  }
  h1{
    padding-right: 85px;
  }
}
@media(min-width: 940px){
  h1{
    padding-right: 120px;
  }
}
  .competencies
  {
    padding: 80px 0 80px 0;
  }
  .OpacityLogo{
    opacity: 11%;
    max-width: 148px;
    max-height: 65px;
  }
  .TitleCompetency
  {
    font-weight: 1000;
    text-align: left;
    margin-bottom: 20px;
    padding: 0;
  }
  .BodyCompetency
  {
    font-size: 15px;
    margin: auto;
    text-align: left;
  }
  .competency-wrapper
  {
    justify-content: end;
  }
  h1{
    font-weight: 700;
  }
  @media (max-width: 766px)
  {
    .timeBlock
    {
      width: 100%;
    }
    .competency-wrapper
    {
      justify-content: center;
    }
    .BodyCompetency
  {
    font-size: 16px;
    width: 45%;
  }
}
  </style>