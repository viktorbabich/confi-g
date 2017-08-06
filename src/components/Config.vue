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
				baseFont: {
					"font-family": "Arial",
					"font-size": 16,
					"font-weight": 400,
					"line-height": 1.2,
					"letter-spacing": 0
				},
				h1: {
					"font-family": "Arial",
					"font-size": 36,
					"font-weight": 600,
					"line-height": 1.2,
					"letter-spacing": 0
				},
				h2: {
					"font-family": "Arial",
					"font-size": 28,
					"font-weight": 600,
					"line-height": 1.4,
					"letter-spacing": .3
				}
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


