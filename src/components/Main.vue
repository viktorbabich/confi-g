<template>
	<div>
		<div class="projects">
			<div class="projects__list" scroll="scroll">
				<h1>Projects</h1>
				<ul class="projects__search">
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
				<div class="projects__item" v-for="project in filtered">	
					<h4 class="projects__name">{{ project.title || 'Project title' }}</h4>
					<div>
						<h6>Last change:</h6>
						<p>{{ project.update }}</p>
						<h6>Created:</h6>
						<p>{{ project.created }} by {{ project.owner }}</p>
					</div>
				</div>
			</div>
			<div class="projects__new">
				<router-link to="/Config" class="button">Новый проект</router-link>
			</div>
		</div>
	</div>
</template>

<script>

	// import moment from 'moment'

	export default {
		data () {
			return {
				jopa: 'piska',
				search: '',
				searchProp: 'Title',
				projects: [
					{
						title: 'one',
						owner: 'gtest@gmail.com',
						update: '12.05.2016',
						created: '25.10.2016',
						data: {
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
					{
						title: 'two',
						owner: 'dtest@gmail.com',
						update: '22.01.2017',
						created: '11.12.2016',
						data: {
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
					{
						title: 'three',
						owner: 'ctest@gmail.com',
						update: '12.05.2018',
						created: '11.02.2018',
						data: {
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
					}
				]
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
			}
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