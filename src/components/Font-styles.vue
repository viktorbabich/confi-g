<template>
	<div class="font__inner">
		<ul class="font__styles">
			<li>
				<span>font-family</span>
				<select v-model="currentItem['font-family']">
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
				<input type="text" v-model="currentItem['font-size']">
			</li>
			<li>
				<span>font-weight</span>
				<input type="text" v-model="currentItem['font-weight']"> 
			</li>
			<li>
				<span>line-height</span>
				<input type="text" v-model="currentItem['line-height']">
			</li>
			<li>
				<span>letter-spacing</span>
				<input type="text" v-model="currentItem['letter-spacing']">
			</li>
		</ul>
		<div class="font__preview">
			<div class="base-font" :style="{
				'font-family': currentItem['font-family'],
				fontSize: currentItem['font-size']  + 'px',
				'font-weight': currentItem['font-weight'],
				'line-height': currentItem['line-height'] + 'em',
				'letter-spacing': currentItem['letter-spacing'] + 'em',
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
