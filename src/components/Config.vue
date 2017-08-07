<template>
	<div class="container">
		<ul class="links">
			<li @click="switchView('font')">Font</li>
			<li @click="switchView('grid')">Grid</li>
		</ul>
		
		<component :is="currentView"></component>

		<a class="button" href="" @click.prevent="saveConfig">Save data</a>

	</div>
</template>

<script>

	import Font from '@/components/Font'
	import Grid from '@/components/Grid'

	export default {
		components: {
			'font': Font,
			'grid': Grid
		},
		data() {
			return {
				currentView: 'font',
			}
		},
		methods: {
			switchView (view) {
				this.currentView = view;
			}
		}
	}

</script>

<style lang="scss"> 
	.links {
		display: flex;
		li {
			flex: 1;
			font-size: 56px;
			text-align: center;
			border: 2px solid black;
			padding: 20px;
			cursor: pointer;			
		}
	}

</style>


