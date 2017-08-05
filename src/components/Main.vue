<template>
	<div>
		<div class="projects">
			<div class="projects__list" scroll="scroll">
				<h1>Projects</h1>
				<ul class="projects__search">
					<li>Filter</li>
					<li>Sort</li>
					<li>Find</li>
				</ul>
				<div class="projects__item" v-for="project in projects" @click.prevent="openProject(project._id)">	
					<h4 class="projects__name">{{ project.title || 'Project title' }}</h4>
					<div>
						<h6>Last change:</h6>
						<p>{{ project.update }}</p>
						<h6>Created:</h6>
						<p>{{ project.created }} by {{ project.owner.email }}</p>
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
	export default {
		data () {
			return {
				projects: [
					{
						title: 'one',
						owner: {
							name: 'Victor',
							email: 'test@gmail.com'
						},
						update: '12.05.2017',
						created: '20.02.2017'
					},
					{
						title: 'two',
						owner: {
							name: 'Oleg',
							email: 'test@gmail.com'
						},
						update: '12.05.2017',
						created: '20.02.2017'
					}
				]
			}
		}
	} 
</script>

<style lang="scss" scoped>
	.container * {
		// outline: 1px solid red;
	}
	.projects {
		h1 {
			font-size: 56px;
			text-align: center;
			margin-bottom: 20px;
		}
		height: 100vh;
		display: flex;
		font-family: Impact, Arial, sans-serif;
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