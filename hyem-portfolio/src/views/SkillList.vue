<template>
  <ul class="skill-list">
    <li 
      v-for="(item, index) in skills" 
      v-bind:key="index" 
      v-bind:class="['list-item']">
        <img v-bind:src=item.imageUrl v-bind:alt=index>
        <div class="skill-detail">
            <p>{{index}}<br>{{item.star}}</p>
        </div>
    </li>       
  </ul>
</template>
<script>
  export default {
    props: ["skills"]
  }
</script>

<style>
.skill-list{
    width: 500px;
}
.list-item{
  list-style: none;
  width: 110px;
  height: 110px;
  position: relative;  
  background-color: white;
  float: left;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  margin: 7px;
  text-align: center;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}
.list-item > img{ 
    display: block;
    width: 100%;
    height: auto;
    padding: 10px; 
}
.skill-detail{
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 110px;
  border-radius: 10px;
  opacity: 0;
  transition: .5s ease;
  text-align:center;
  border: 1px solid black;
  background-color:#ff4d5a;
}
.list-item:hover .skill-detail {opacity: 0.8;}
.skill-detail > p{
  color: white;
  position: absolute;
  top: 45%;
  left: 50%;
  font-size: 15px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>