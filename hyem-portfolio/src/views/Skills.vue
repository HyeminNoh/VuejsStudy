<template>
    <div>
        <div class="skills-content">
            <div class="skills-header fadeInDown animated">
                <i class="fas fa-code" style="font-size: 18px; color: #ff4d5a;"></i>
                <p style="font-size: 10px; font-family:comfortaa; color: #ff4d5a;">CODING</p> 
            </div>
            <div class="chart-container">
                <canvas id="codingChart" width="300" height="300"></canvas>
            </div>
        </div>
        <div class="skills-detail">
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
            labels: ["Vue.js", "Html", "Css", "Sass", "Bootstrap" ,["JavaScript", "      ES6"], "React.js", "Angular 6","Node.js","Express.js","MongoDB","Php","Sql","Wordpress","APIs",["Web   ","Sockets"],"Git", "C", "Java", "Linux"],
            datasets: [{
                label: '# of Votes',
                data: [4.5, 4.9, 4.9, 4.5, 4.9, 4.9, 4, 4, 4, 4, 4, 4, 3.5,4,3.5,3.5,4,4,4.5,4],
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

<style>
 @import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
.skills-content{  
  position: absolute;
  top: 56%;
  left: 25%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family:comfortaa;
  }
.skills-header{ 
    margin-bottom: -30px;
}
.chart-container{
  width: 480px;
  margin:auto;
  font-family:comfortaa;
}
@media(max-width:1069px){
  .skills-content{
    font-family:comfortaa;
     }
  }
</style>