<template >
	<div>
    <div class="profile-content">
      <div class="img-container zoomIn animated">
        <img class="me" src="..\assets\images\me.jpg" alt="" style="width: 150px;">
      </div>
      <h1><span style="font-weight: bold">노혜민</span>입니다.</h1>
      <h2><span style="color: #ff4d5a;">Hello</span>, World :)</h2>
      <div class="socialMedia animated fadeInUp">
        <a href="https://github.com/hyeminnoh" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://hyem-study.tistory.com/" target="_blank"><i class="fab fa-blogger"></i></a>
      </div>
    </div>
    <div class="card-content">
      <b-card no-body class="overflow-hidden" header-tag="header">
        <template v-slot:header>
          <h3 style="font-size: 20px;" class="mb-0">Profile</h3>
        </template>
        <b-row no-gutters>
          <b-col md="6">
            <b-card-body class="card-title" title="Name😀">
              <b-card-text class="info"> 노혜민 (Hyemin Noh)</b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="6">
            <b-card-body class="card-title" title="Birth🎂">
              <b-card-text class="info"> 1997. 01. 03</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col md="6">
            <b-card-body class="card-title" title="Hobby💘">
              <b-card-text class="info"> #쿠키런:오븐브레이크<br> #롤<br> #블로그 </b-card-text> 
            </b-card-body>
          </b-col>
          <b-col md="6">
            <b-card-body class="card-title" title="Languages🗣️">
              <b-card-text class="info"> - Toeic Speaking: LV.6</b-card-text>
              <b-card-text class="info"> - Toeic: 755</b-card-text>  
            </b-card-body>
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col md="6">
            <b-card-body class="card-title" title="Certification🏅">
              <b-card-text class="info"> - 정보처리기사</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
.profile-content{
  position: absolute;
  top: 43%;
  left: 23%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 260px;
  margin-top: 5%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 15px gray;
  }
.img-container{
    height: 190px;
    width: 150px;
    margin:10% auto;
    display:block;
    overflow: hidden;
    text-align: center;
    animation-delay: 0.4s;
    border: 1px solid gray;
   }
.card-content{
  position: absolute;
  top: 20%;
  left: 40%;
  width: 600px;
}
.card-title{
  font-size: 15px;
}
h2{
    font-weight: normal;
    font-size: 20px;
    }
h1{
    display: inline-block;
    font-weight: normal;
    font-size: 25px;
  }
.info{
  font-size: 15px;
}
.info-subtitle{
  font-size: 15px;
  font-weight: bold;
  color: #333333;
}
@keyframes homeSkew{
  from{transform: translateY(50px) skewY(20deg);}
  50%{transform: translateY(0) skewY(20deg);}
  to{transform: skewY(0)}
}

@keyframes moveInright {
  0% {
    opacity: 0;
    transform: translateX(20px); }
  80% { }
  100% {
    opacity: 1;
    transform: translate(0); } }
 .socialMedia{
  font-size: 25px;
  margin-top: 20px;
  margin: 10%;
  a {
    color: black;
    padding: 8px;
  }
  a:hover {
    color: #ff4d5a;
  }
 }   
       
</style>