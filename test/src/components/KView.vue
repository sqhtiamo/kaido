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

            <div v-drag v-for="layer in layers" :style="layer.style" class="drag">
                <div contenteditable="true">{{ 1111 }}</div>
            </div>

			<!-- 图片 -->
<!--             <div style="position: absolute; left: 50px; top: 50px; z-index: 2; width: 100px; height: 100px; transform: rotate(0deg); opacity: 1;">
            	<div style="width: 100%; height: 100%; border-radius: 5px; padding-top: 0; padding-bottom: 0; border: 0px solid rgb(0, 0, 0); border-radius: 0;  -webkit-box-shadow: 0 0 3px rgba(184, 184, 184, 0.5); ">
            		<div style="width: 100%; height: 100%;">
            		    <img src="" style="width: 100%; height: 100%;" />
            		</div>
            	</div>
            </div> -->

            <!-- 文字 -->
<!--             <div style="position: absolute; top: 250px; left: 0; z-index: 5; width: 320px; height: 40px; -webkit-transform: rotate(0deg); opacity: 1;">
            	<div style="width: 100%; height: 100%; padding-top: 0; padding-bottom: 0; border: 0px solid rgb(0, 0, 0); border-radius: 0; font-size: 20px; color: #fff;  -webkit-box-shadow: 0 0 3px rgba(184, 184, 184, 0.5); ">
            		<div style="width: 100%; height: 100%">
            			<div style="text-align: center">
            				<span>活动demo</span>
            			</div>
            		</div>
            	</div>
            </div> -->
		</div>
	</section>
</template>

<script>
export default {
    computed: {
        layers () {
            console.log(this.$store.getters.layerFormatData)
            return this.$store.getters.layerFormatData
        }
    },
    methods: {
        addChild: function (index) {
            this.children.splice(index + 1, 0, '')
        },
        removeChild: function (index) {
            this.children.splice(index, 1)
        },
        getData: function () {
            console.log(this.children)
        }
    }
}

</script>

<style lang="scss" scoped>
$bg-color: #e6e6e6;
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
    overflow: hidden;
	height: 486px;
	background-color: nth($bg-color, 1);
	background-image: url("../assets/images/bg-hongfa.jpeg");
	background-position: 50% 50%;
	background-size: cover;

    .drag {
        cursor: move;
    }
}
</style>
