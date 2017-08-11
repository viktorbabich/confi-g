<template>
	<div class="font">
		<ul class="font__items">
			<li :class="{'active': true}" @click="switchItem('baseFont')">Base-font</li>
			<li @click="switchItem('h1')">H1</li>
			<li @click="switchItem('h2')">H2</li>
			<li @click="switchItem('h3')">H3</li>
			<li @click="switchItem('h4')">H4</li>
			<li @click="switchItem('h5')">H5</li>
			<li @click="switchItem('h6')">H6</li>
		</ul>

		<font-styles 
			:currentItem="currentItem">
		</font-styles>

	</div>
</template>

<script>
	import fontStyles from "@/components/Font-styles"

	export default {
		props: ['project'],
		components: {
			"font-styles": fontStyles
		},
		data () {
			return {
				currentItem: ''
			}
		},
		methods: {
			switchItem(item) {
				this.currentItem = this.project[item];
			}
		},
		mounted () {
			if(this.project) this.currentItem = this.project['baseFont'];
		},
		watch: {
			project: function (project) {
				this.currentItem = this.project['baseFont'];
			}
		}
	}
</script>

<style lang="scss"> 
	.active {
		background: red;
	}
	.font {
		margin-bottom: 40px;
		display: flex;
		&__items {
			display: flex;
			flex-basis: 200px;
			flex-shrink: 0;
			flex-direction: column;
			li {
				flex: 1;
				padding: 20px;
				border: 2px solid black;
				cursor: pointer;			
			}
		}
		&__config {
			display: flex;
		}
		&__inner {
			display: flex;
			flex: 1;
		}
		&__styles {
			flex: 1;
			list-style-type: none;
			border: 2px solid black;
			padding: 20px;
			li {
				margin-bottom: .5em;
				&:last-child {
					margin-bottom: 0;
				}
			}
			span {
				display: inline-block;
				width: 120px; 
				margin-right: -0.25em;
			}
			select {
				width: 50px;
				display: inline-block;
				margin-left: 40px;
			}
			input {
				width: 50px;
				text-align: center;
				margin-left: 40px;
				margin-right: -0.25em;
			}
		}
		&__preview {
			flex: 2;
			padding: 20px;
			border: 2px solid black;
		}
	}
</style>