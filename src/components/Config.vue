<template>
	<div class="container">
		<input class="title" v-model="project['name']" :readonly="active">

		<img class="edit" @click="active = false" src="static/images/edit-icon.svg" alt="">

		<ul class="links">
			<li @click="switchView('font')">Font</li>
			<li @click="switchView('grid')">Grid</li>
		</ul>

		<component :is="currentView" :project='project'></component>

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
				project: {
					"name": "Project name",
				  "baseFont":
				  {
				      "fontFamily": "Arial",
				      "fontSize": "16px",
				      "fontWeight": 400,
				      "lineHeight": 1.2,
				      "letterSpacing": 0
				  },
				  "h6":
				  {
				      "fontFamily": "Arial",
				      "fontSize": "16px",
				      "fontWeight": 400,
				      "lineHeight": 1.2,
				      "letterSpacing": 0
				  },
				  "h5":
				  {
				      "fontFamily": "Arial",
				      "fontSize": "16px",
				      "fontWeight": 400,
				      "lineHeight": 1.2,
				      "letterSpacing": 0
				  },
				  "h4":
				  {
				      "fontFamily": "Arial",
				      "fontSize": "16px",
				      "fontWeight": 400,
				      "lineHeight": 1.2,
				      "letterSpacing": 0
				  },
				  "h3":
				  {
				      "fontFamily": "Arial",
				      "fontSize": "16px",
				      "fontWeight": 400,
				      "lineHeight": 1.2,
				      "letterSpacing": 0
				  },
				  "h2":
				  {
				      "fontFamily": "Arial",
				      "fontSize": "16px",
				      "fontWeight": 400,
				      "lineHeight": 1.2,
				      "letterSpacing": 0
				  },
				  "h1":
				  {
				      "fontFamily": "Arial",
				      "fontSize": "16px",
				      "fontWeight": 400,
				      "lineHeight": 1.2,
				      "letterSpacing": 0
				  }
				},
				name: 'Project name',
				active: true
			}
		},
		methods: {
			switchView (view) {
				this.currentView = view;
			},
			saveConfig () {
			const data = this.project;
				this.$http.post('saveconfig', {config: JSON.stringify(data), _id: this.currentProject}, {
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
			} 
		},
		mounted () {
			if(this.currentProject) {
				this.$http.get('project', {params: { _id: this.currentProject }}).then(
					response => {
						this.project = response.body
						console.log(this.project)
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
		font-family: impact;
		margin-bottom: 1.2em;
		border: none;
		outline: none;
	}
	.edit {
		width: 60px;
		border: 3px solid black;
		padding: 5px;
		border-radius: 5px;
		cursor: pointer;
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


