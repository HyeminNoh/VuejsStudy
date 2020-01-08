<template>
  <ul class="project-list">
    <li 
      v-for="(item, index) in projects" 
      v-bind:key="index" 
      v-bind:class="['project-item']">
        <a v-bind:href=item.Git target="_blank"><img v-bind:src=item.imageUrl v-bind:alt=index></a>
        <div class="project-detail">
            <a v-bind:href=item.Git target="_blank"><h5>{{index}}</h5></a>
            <p>{{item.detail}}</p>
        </div>
    </li>       
  </ul>
</template>
<script>
  export default {
    props: ["projects"]
  }
</script>

<style>
.project-list{
    width: 1000px;
}
.project-item{
  list-style: none;
  width: 300px;
  height: 200px;
  position: relative;
  margin: 7px;
  float: left;
  text-align: center;
}
.project-item > a > img{
  height: 100%; 
  width: 100%;
  border: 1px solid black;
}
.project-detail{
  position: relative;
  width: 300px;
  margin-top: 10px;
  text-align:center;
}
.project-detail>a{
    color: black;
}
.project-detail>a:hover {
  color: #ff4d5a;
}
.project-detail>p{
  color:darkgray;
  font-size: 15px;
}
</style>