<template>
	<div class="font__inner">
		<ul class="font__styles">
			<li>
				<span>font-family</span>
				<select v-model="currentItem['fontFamily']">
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
				<input type="text" v-model="currentItem['fontSize']">
			</li>
			<li>
				<span>font-weight</span>
				<input type="text" v-model="currentItem['fontWeight']"> 
			</li>
			<li>
				<span>line-height</span>
				<input type="text" v-model="currentItem['lineHeight']">
			</li>
			<li>
				<span>letter-spacing</span>
				<input type="text" v-model="currentItem['letterSpacing']">
			</li>
		</ul>
		<div class="font__preview">
			<div class="base-font" :style="{
				'font-family': currentItem['fontFamily'],
				fontSize: currentItem['fontSize'],
				'font-weight': currentItem['fontWeight'],
				'line-height': currentItem['lineHeight'] + 'em',
				'letter-spacing': currentItem['letterSpacing'] + 'em',
			}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid voluptate sequi nobis similique.
			</div>
		</div>
	</div>

</template>

<script>
	
	export default {
		props: ['currentItem']
	}

</script>
