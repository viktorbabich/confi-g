<template>
  <div id="app">
    <router-view 
    	@openProject="updateId"
			:currentProject="currentProject"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  	return {
  		currentProject: ""
  	}
  }, 
  methods: {
  	updateId (id) {
  		this.currentProject = id;
  	}
  }
}

</script>

<style lang="scss">
	#app {
		font-family: Impact, Arial, sans-serif;
		.container {
			max-width: 1280px;
			padding: 40px;
			margin: 0 auto;
		}
		.button {
			display: inline-block;
			text-decoration: none;
			padding: 20px 40px;
			border: 2px solid black;
			color: black;
			transition: background .3s ease, color .3s ease;
			&:hover {
				background: black;
				color: white;
			}
		}
	}
</style>
