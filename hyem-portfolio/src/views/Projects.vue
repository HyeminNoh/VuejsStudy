<template>
    <div>
        <h4 style="position: absolute; top: 18%; left: 12%; color: #ff4d5a;">💻 프로젝트 이력</h4>
        <div class="projects-content">
            <project-list v-bind:projects="projectSet"></project-list>
        </div>
    </div>
</template>

<script>
import db from '../firebase.js';
import ProjectList from "./ProjectList.vue";
let projectsRef = db.ref('projects')
export default {
name: 'projects',
data() {
    return {
      projectSet: {},
    }
  },
firebase:{
    projectSet: projectsRef
},
components: {
    "project-list": ProjectList
}
}
</script>

<style lang="scss">
 @import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
.projects-content{  
  position: absolute;
  top: 55%;
  left: 47%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family:comfortaa;
  }
</style>