<template>
	<!-- 页面展示区域 -->
	<section class="view-area">
		<!-- phone bar -->
		<div class="phone-bar">
			<div class="phone-bar-l">
				<i></i>
				<i></i>
				<i></i>
				<i></i>
			</div>
			<div class="phone-bar-m"></div>
			<div class="phone-bar-r">
				<div class="battery">
					<div class="battery-current"></div>
				</div>
				<div class="battery-r"></div>
			</div>
		</div>

		<!-- title -->
		<h3 class="page-title">标题</h3>

		<!-- 手机主要视区 -->
		<div class="phone-main-area">

            <div v-for="layer in layers" style="position:absolute; top:30px; left: 130px; height: 30px; width: 100px; background-color: red;">
                <div contenteditable="true">{{ layer.content}}</div>
            </div>
		</div>
	</section>
</template>

<script>
import store from '../vuex/store'
export default {
    computed: {
        layers () {
            return store.state.viewport.layers
        }
    }
}

</script>

<style lang="scss" scoped>
$bg-color: #cecece;
$black: #313131;
.view-area {
	position: relative;
	z-index: 1;
	width: 326px;
	height: 100%;
	padding: 35px 3px 35px;
	background-color: #f9f9f9;
	border-radius: 35px;
}

.phone-bar {
	height: 20px;
	padding: 0 6px;
	background-color: nth($black, 1);
	display: -webkit-box;
	-webkit-box-align: center;
}
.phone-bar-l {
	height: 100%;
	min-width: 100px;
	display: -webkit-box;
	-webkit-box-align: center;
	-webkit-box-flex: 1;
	i {
		display: block;
		width: 4px;
		height: 4px;
		margin-right: 3px;
		background-color: #fff;
		border-radius: 4px;
	}
}
.phone-bar-m {
	width: 25px;
	height: 5px;
	border-radius: 4px;
	background-color: #656565;
}
.phone-bar-r {
	min-width: 100px;
	display: -webkit-box;
	-webkit-box-align: center;
	-webkit-box-pack: end;
	-webkit-box-flex: 1;
}
.battery {
	width: 18px;
	height: 8px;
	padding: 1px;
	border: 1px solid #fff;
	div {
		height: 100%;
		width: 70%;
		background-color: #fff;
	}
}
.battery-r {
	height: 4px;
	width: 1px;
	background-color: #fff;
}

.page-title {
	background-color: nth($black, 1);
	line-height: 44px;
	color: #fff;
	font-size: 18px;
	text-align: center;
	-webkit-text-stroke: 0.5px;
}

.phone-main-area {
    position: relative;
	height: 486px;
	background-color: nth($bg-color, 1);
}
</style>
