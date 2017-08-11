<template>
	<div>
		<div class="projects">
			<div class="projects__list" scroll="scroll">
				<h1>Projects</h1>
				<ul class="projects__search" v-if="projects.length > 1">
					<li>Sort by
						<select @change="sortBy($event)">
					    <option>Update</option>
					    <option>Created</option>
					    <option>Title</option>
					    <option>Owner</option>
						</select>
					</li>
					<li>
						Find 
						<input type="text" v-model="search">
						<select v-model="searchProp">
					    <option>Update</option>
					    <option>Created</option>
					    <option>Title</option>
					    <option>Owner</option>
						</select>
					</li>
				</ul>
				<div class="projects__item" v-for="project in projects" @click="openProject(project._id)">	
					<h4 class="projects__name">{{ project.title || 'Config' }}</h4>
					<div>
						<h6>Last change:</h6>
						<p>{{ $moment(project.update).format('DD/MM/YYYY') || $moment(project.created).format('DD/MM/YYYY') }}</p>
						<h6>Created:</h6>
						<p>{{ $moment(project.created).format('DD/MM/YYYY') }} by {{ project.owner.email }}</p>
					</div>
				</div>
			</div>
			<div class="projects__new">
				<a href="#" class="button" @click.prevent="openProject(null)">Новый проект</a>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data () {
			return {
				search: '',
				searchProp: 'Title',
				projects: []
			}
		}, 
		computed: {
			filtered() {
				return this.projects.filter((project) => {
					return project[this.searchProp.toLowerCase()].match(this.search)
				})
			}
		}, 
		methods: {
			sortBy (event) {
				if(event.target.value == "Created" || event.target.value == "Update") {
					this.projects = this.projects.sort((a, b) => {
						return this.$moment(a[event.target.value.toLowerCase()], 'DD/MM/YYYY') < this.$moment(b[event.target.value.toLowerCase()], 'DD/MM/YYYY')
					})
				} else {
					this.projects = this.projects.sort((a, b) => {
						return a[event.target.value.toLowerCase()] > b[event.target.value.toLowerCase()];
					})
				}
			},
			getProjects () {
				this.$http.get('projects', {
				 	headers: { 
						'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(
				 	response => {
				 		this.projects = response.body
				 	},
				 	err => {
				 		console.log(err)
				 	}
				) 
			},
			openProject(id) {
				this.$emit("openProject", id);
				this.$router.push({name: 'Config'})
			}
		},
		mounted() {
			this.getProjects();
		}
	}

</script>

<style lang="scss" scoped>
	.projects {
		h1 {
			font-size: 56px;
			text-align: center;
			margin-bottom: 20px;
		}
		height: 100vh;
		display: flex;
		font-family: Impact, Arial, sans-serif;
		&__name {
			font-size: 32px;
		}
		&__search {
			display: flex;
			margin-bottom: 20px;
			li {
				flex: 1;
				border: 2px solid black;
				padding: 20px;
			}
		}
		&__list {
			flex: 1;
			padding: 60px;
			overflow: auto;
		}
		&__item {
			border: 2px solid black;
			padding: 20px;
			margin-bottom: 20px;
			position: relative;
			cursor: pointer;
			&:last-child {
				margin-bottom: 0;
			}
		}
		&__new {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.button__delete {
		position: absolute;
			right: 10px;
			top: 10px;
		text-decoration: none;
		color: #000;
	}
</style>