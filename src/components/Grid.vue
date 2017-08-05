<template>
	<div class="grid">
		<div class="grid__container" :style="{'padding': '0 ' + grid.margin/grid.container * 100 + '%'}">
			<div class="row" :style="{
			'margin-left': -grid.gutter/2/grid.container * 100 + '%', 'margin-right': -grid.gutter/2/grid.container * 100 + '%'}">
	      <div class="col" v-for="item in +grid.amount" :style="{
	      'width': grid.container / grid.amount / grid.container * 100 + '%', padding: '0 ' + grid.gutter/2/grid.container*100 + '%'}">
					<div class="colored"></div>
				</div>
      


     	</div>
		</div>
		<ul class="grid__styles">
			<li>
				<span>container width</span><input type="text" v-model="grid.container">
			</li>
			<li>
				<span>columns amount</span><input type="text" v-model="grid.amount">
			</li>
			<li>
				<span>gutter</span><input type="text" v-model="grid.gutter">
			</li>
			<li>
				<span>margin</span><input type="text" v-model="grid.margin">
			</li>
		</ul>
	</div>
</template>

<script>

	export default {
		data () {
			return {
				grid: {
					container: 979,
					amount: 2,
					gutter: 30,
					margin: 15
				}
			}
		},
	}

</script>


<style lang="scss" scoped> 
  .grid {
  	margin-bottom: 40px;
  	&__styles {
  		display: flex;
  		flex-direction: column;
  		li {
  			flex: 1;
  			span {
					display: inline-block;
					width: 120px;
					margin-right: -0.25em;
  			}
  			input {
  				width: 50px;
  				display: inline-block;
  				margin-left: 40px;
  				text-align: center;
  			}
  		}
  	}
    &__container {
      background: black;
      width: 100%;
      overflow: hidden;
      border: 2px solid black;
      margin-bottom: 40px;
    }
  }
  .col {
    outline: 1px solid white;
    float: left;
  }
  .colored {
    min-height: 500px;
    background: white;
  }
  .row:before {
		content: '';
		display: block;
		clear: both;
  }
  .row:after {
		content: '';
		display: block;
		clear: both;
  }
</style>
