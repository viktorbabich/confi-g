<template>
	<div class="container">
	
		<div>{{ project }}</div>

		<!-- <input type="text" v-model="project.h1.fz"> -->

		<h1 class="title">{{ currentProject }}</h1>
		<ul class="links">
			<li @click="switchView('font')">Font</li>
			<li @click="switchView('grid')">Grid</li>
		</ul>

		<component :is="currentView"></component>

		<a class="button" href="" @click.prevent="saveConfig">Save config</a>

	</div>
</template>

<script>

	import Font from '@/components/Font'
	import Grid from '@/components/Grid'

	export default {
		props: ["currentProject"],
		components: {
			'font': Font,
			'grid': Grid
		},
		data() {
			return {
				currentView: 'font',
				project: null,
				id: this.currentProject,
				parameters: {
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
					}
				}
			}
		},
		methods: {
			switchView (view) {
				this.currentView = view;
			}, 
			saveConfig () {
				const data = this.project;		
				if(this.id) {
					console.log(this.id)
					this.$http.post('saveconfig', {config: JSON.stringify(data), _id: this.id}, {
						headers: { 
							'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(
						response => {
							this.filename = response.body.file;
						},
						err => {
							console.log(err)
						}
					)
				} else {
					this.$http.get('new').then(
						response => {
							this.id = response.body._id;
							this.saveConfig()
						},
						err => {
							console.log(err)
						}
					)
				}
			}
		},
		created () {
			console.log(this.currentProject)
			if(this.currentProject) {
				this.$http.get('project', {params: { _id: this.currentProject }}).then(
					response => {
						this.project = response.body
					},
					err => {
						console.log(err)
					}
				)
			}
		}
	}

</script>

<style lang="scss"> 
	.title {
		font-size: 52px;
		text-align: center;
		margin-bottom: 1.2em;
	}
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


