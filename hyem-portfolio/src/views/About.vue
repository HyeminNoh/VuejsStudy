<template >
	<div>
     <div class="home-content">

        <div class="img-container zoomIn animated">
          <img class="me" src="../assets/me.jpg" alt="" style="width: 200px;">
        </div>
        <h1><span>Hi</span>, I'm Hyemin Noh ;)</h1>
        <h4>주니어 개발자 노혜민입니다.</h4>
        <div class="socialMedia animated fadeInUp">
              <a href="https://github.com/hyeminnoh" target="_blank"><i class="fab fa-github"></i></a>
        </div>

     </div>
  </div>
</template>

<style lang="scss">
   
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
.home-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 350px;
  }
  
.img-container{
    height: 240px;
    width: 240px;
    margin:0 auto;
    display:block;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
    animation-delay: 0.4s;
   }
   
h4{
    font-weight: normal;
    animation-name: moveInright;
    animation-duration: 2s;
    font-size: 14px;
    }
h1{
    display: inline-block;
    animation-name: moveInleft;
    animation-duration: 2s;
    font-weight: normal;
    font-family: comfortaa;
    font-size: 30px;
  }
    span{
      color: #ff4d5a;
    }
  
@keyframes homeSkew{
  from{transform: translateY(50px) skewY(20deg);}
  50%{transform: translateY(0) skewY(20deg);}
  to{transform: skewY(0)}
}
@keyframes moveInleft {
  0% {
    opacity: 0;
    transform: translateX(-20px); }
  80% { }
  100% {
    opacity: 1;
    transform: translate(0); } }
@keyframes moveInright {
  0% {
    opacity: 0;
    transform: translateX(20px); }
  80% { }
  100% {
    opacity: 1;
    transform: translate(0); } }
 .socialMedia{
  font-size: 16px;
  margin-top: 20px;
  a {
    color: black;
    padding: 8px;
  }
  a:hover {
    color: #ff4d5a;
    
  }
 }   
       
</style>