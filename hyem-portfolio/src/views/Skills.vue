<template>
    <div>
        <div class="skills-content">
            <div class="skills-header fadeInDown animated">
                <i class="fas fa-code" style="font-size: 18px; color: #ff4d5a;"></i>
                <p style="font-size: 10px; font-family:comfortaa; color: #ff4d5a;">CODING</p> 
            </div>
            <div class="chart-container">
                <canvas id="codingChart" width="330" height="330"></canvas>
            </div>
        </div>
        <div class="skills-detail">
            <div class="skill-line">
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/html-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">html5</div>
                    </div>
                </div>
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/css-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">css3</div>
                    </div>
                </div>
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/js-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">javascript</div>
                    </div>
                </div>
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/bootstrap-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">bootstrap</div>
                    </div>
                </div>
            </div>
            <div class="skill-line">
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/php-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">php</div>
                    </div>
                </div>
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/vue-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">vue.js</div>
                    </div>
                </div>
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/node-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">node.js</div>
                    </div>
                </div>
            </div>
            <div class="skill-line">
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/mysql-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">mywql</div>
                    </div>
                </div>
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/c-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">c</div>
                    </div>
                </div>
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/java-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">java</div>
                    </div>
                </div>
                <div class="language-icon">
                    <img class="icon-img" align="center" src="../assets/img/python-logo.png"/>
                    <div class="icon-overlay">
                        <div class="text">python</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Chart from 'chart.js';
    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultStrokeColor = 'black';
    export default {
    name: 'skills',
    data(){
      return {
        chart: 1
      }
    },
    mounted(){
        Chart.defaults.global.defaultFontFamily = "comfortaa";
        //coding chart
        var ctx = document.getElementById("codingChart");
        new Chart(ctx, {
            type: 'radar',
            data: {
            labels: ["Vue.js", "Html", "Css", "Bootstrap" ,["JavaScript", "      ES6"], "Node.js","Express.js","Php","Sql","APIs","Git", "C", "Java", "Python", "Linux"],
            datasets: [{
                label: '# of Votes',
                data: [4, 5, 4.5, 4, 4, 4, 3.5, 3, 4.5, 3.5, 4.5, 5, 4, 4.5, 3.5],
                backgroundColor: [
                'rgba(253,121,131,0.3)',
                ],
                borderColor:"#ff4d5a",
                borderWidth: 1
            }]
            },
            options: {
                responsive : true,
                scale: {
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        max: 5
                    },
                    pointLabels: {
                        fontSize: 13,
                    },
                    gridLines: { 
                        color: "#2f2f2f",
                    },
                    angleLines: { 
                        color: "#2f2f2f",
                    },  
                },
                legend: {
                    display: false
                },
                tooltips : {
                    enabled : false
                }
            }
        });

    }
  }
</script>

<style lang="scss">
 @import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
.skills-content{  
  position: absolute;
  top: 55%;
  left: 27%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family:comfortaa;
  }
.skills-header{ 
    margin-bottom: -20px;
    margin-left: -40px;
}
.chart-container{
  width: 370px;
  margin:auto;
  font-family:comfortaa;
}
.skills-detail{
    position: absolute;
    top: 55%;
    left: 68%;
    transform: translate(-50%, -50%);
    text-align: left;
    font-family:comfortaa;
}
.skill-line{
    width: 500px;
    display: block;
}
.language-icon{
    width: 110px;
    height: 110px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 7px;
    float: left;
    text-align: center;
}
.icon-img{
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
}
.icon-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 120px;
  height: 120px;
  margin: 5px;
  border-radius: 10px;
  opacity: 0;
  transition: .5s ease;
  background-color:#ff4d5a;
}
.language-icon:hover .icon-overlay {
  opacity: 0.8;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
@media(max-width:1069px){
  .skills-content{
    font-family:comfortaa;
     }
  }
</style>