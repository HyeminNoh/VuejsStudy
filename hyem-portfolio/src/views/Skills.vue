<template>
    <div>
        <h4 style="position: absolute; top: 18%; left: 12%; color: #ff4d5a;">📚 기술스택</h4>
        <div class="skills-content">
            <skill-list v-bind:skills="skillSet"></skill-list>
        </div>
        <div class="skills-chart">
            <div class="chart-container">
                <canvas id="codingChart" width="440" height="440"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../firebase.js';
import SkillList from "./SkillList.vue";
import Chart from 'chart.js';

let skillsRef = db.ref('skills')
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultStrokeColor = 'black';
export default {
name: 'skills',
data() {
    return {
      skillSet: {},
    }
  },
firebase:{
    skillSet: skillsRef
},
components: {
    "skill-list": SkillList
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
                data: [4, 5, 4.5, 4, 4, 4, 3.5, 3, 4.5, 3.5, 4.5, 5, 5, 4.5, 3.5],
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
  top: 58%;
  left: 28%;
  margin-top: 1%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family:comfortaa;
  }
.chart-container{
  width: 440px;
  margin:auto;
  font-family:comfortaa;
}
.skills-chart{
    position: absolute;
    top: 55%;
    left: 68%;
    transform: translate(-50%, -50%);
    font-family:comfortaa;
}
@media(max-width:1069px){
  .skills-content{
    font-family:comfortaa;
     }
  }
</style>