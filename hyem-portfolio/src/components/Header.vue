<template>
	<dir id="Header">
    <nav>
      <router-link to="/" class="items">👩‍💻🔥</router-link>
      <router-link to="/Profile" class="items">Profile</router-link>
      <router-link to="/Skills" class="items">Skills</router-link>
      <router-link to="/Projects" class="items">Projects</router-link>
    </nav>
  </dir>
</template>

<style lang="scss">
     #Header nav {
       width: 95%;
       color: black;
       min-height: 50px;
       font-family:comfortaa;
     }
     #Header .items{
      margin-top: 1.4em;
      float: left;
      margin-left: 30px;
      outline: none;
      font-size: 20px;
      color: black;
     
      text-decoration: none;
            &:hover {
             outline: none;
             color: #ff4d5a;
             text-decoration: none;
                 }
            &:focus {
             outline: none;
             color: #ff4d5a;
             text-decoration: none;
                 }
                 
                 &:actived {
             outline: none;
             color: #ff4d5a;
             text-decoration: none;
                 }     
     }
</style>