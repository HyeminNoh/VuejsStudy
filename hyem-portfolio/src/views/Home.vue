<template >
	<div>
    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">새로움을 두려워하지 않고</span>
        <span class="heading-primary-sub">배움의 과정을 즐기는</span>
        <span class="heading-primary-last">노혜민 입니다 :)</span>
      </h1>
    </div>
	</div>
</template>

<script >
	export default {
		computed: {
			total() {
				return this.$store.getters.total;
			}
		}
	}
</script>

<style>
 .text-box {
  position: absolute;
  top: 50%;
  left: 34%;
  transform: translate(-50%, -50%);
  text-align: left; 
  }
.heading-primary-main {
  display: block;
  font-size: 50px;
  font-weight: 100;
  animation-name: moveInleft;
  animation-duration: 2s;
  color: black;
  font-family:comfortaa;
   }
.heading-primary-sub {
  display: block;
  font-size: 50px;
  font-weight: 100;
  margin-top: 10px;
  animation-name: moveInleft;
  animation-duration: 2s;
  color: black; 
  }
.heading-primary-last {
  display: block;
  font-size: 60px;
  font-family: Arial;
  font-weight: 100;
  margin-top: 50px;
  animation-name: moveInleft;
  animation-duration: 2s;
  color: black; 
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
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
</style>