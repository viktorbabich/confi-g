<template>
	<div class="font">
		<ul class="font__items">
			<li>Base-font</li>
			<li>H1</li>
			<li>H2</li>
			<li>H3</li>
			<li>H4</li>
			<li>H5</li>
			<li>H6</li>
		</ul>
		<ul class="font__styles">
			<li>
				<span>font-family</span>
				<select v-model="baseFont['font-family']">
			    <option disabled>font-family</option>
			    <option>Times New Roman</option>
			    <option>Arial</option>
			    <option>Calibri</option>
			    <option>Georgia</option>
			    <option>Impact</option>
			    <option>Tahoma</option>
			    <option>Verdana</option>
				</select>
			</li>
			<li>
				<span>font-size</span>
				<input type="text" v-model="baseFont['font-size']">
			</li>
			<li>
				<span>font-weight</span>
				<input type="text" v-model="baseFont['font-weight']"> 
			</li>
			<li>
				<span>line-height</span>
				<input type="text" v-model="baseFont['line-height']">
			</li>
			<li>
				<span>letter-spacing</span>
				<input type="text" v-model="baseFont['letter-spacing']">
			</li>
		</ul>
		<div class="font__preview">
			<div class="base-font" :style="{
				'font-family': baseFont['font-family'],
				fontSize: baseFont['font-size']  + 'px',
				'font-weight': baseFont['font-weight'],
				'line-height': baseFont['line-height'] + 'em',
				'letter-spacing': baseFont['letter-spacing'] + 'em',
			}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid voluptate sequi nobis similique.
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				baseFont: {
					"font-family": "Arial",
					"font-size": 16,
					"font-weight": 400,
					"line-height": 1.2,
					"letter-spacing": 0
				}
			} 	
		}
	}
</script>

<style lang="scss" scoped> 
	.font {
		display: flex;
		margin-bottom: 40px;
		&__items {
			display: flex;
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