<template>
	<dir id="Header">
    <nav>
      <router-link to="/About" class="items">About Me</router-link>
      <router-link to="/" class="items">Home</router-link>
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
      float: right;
      margin-left: 15px;
      outline: none;
      font-size: 12px;
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