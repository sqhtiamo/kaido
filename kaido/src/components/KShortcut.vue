<template>
	<section class="shortcut-area">
		<div class="shortcut-t">
			<div class="shortcut font" v-on:click="addFont()">
				<p>文字</p>
			</div>
			<div class="shortcut img">
				<p>图片</p>
			</div>
			<div class="shortcut background">
				<p>背景</p>
			</div>
		</div>
		<div class="shortcut-b">
			<div class="shortcut copy">
				<p>复制</p>
			</div>
			<div class="shortcut preview" v-on:click="updateRoute(1)">

				<p><router-link :to="{ path: 'preview', query: { workId: workId }}">预览</router-link></p>
			</div>
			<div class="shortcut phone">
				<p>机型</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
    data () {
        return {
            workId: this.$store.state.work.workId
        }
    },
    methods: {
        addFont: function (message) {
            this.$store.dispatch('addLayer', {layerType: 'font'})
        }
        // updateRoute: function (query) {
        //     this.$route.router.go({
        //         name: 'search',
        //         query: {
        //             workId: 1
        //         }
        //     })
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$bg-color: #e6e6e6;
$black: #313131;
.shortcut-area {
	margin-right: 5px;
	.shortcut-t {
		margin-bottom: 10px;
	}
	.shortcut {
		position: relative;
		width: 35px;
		height: 35px;
		overflow: hidden;
		margin-bottom: 1px;
		background-color: #626262;
		border-radius: 1px;
		cursor: pointer;
		display: -webkit-box;
		-webkit-box-align: center;
		-webkit-box-pack: center;
		-webkit-transition: background 0.2s linear;
		transition: background 0.2s linear;
		p {
			position: absolute;
			top: 0;
			left: -5px;
			z-index: -1;
			width: 40px;
			background-color: #626262;
			font-size: 13px;
			color: #fff;
			text-align: right;
			line-height: 35px;
			-webkit-transition: background 0.2s linear, transform 0.2s linear;
			transition: background 0.2s linear, transform 0.2s linear;
            a {
                color: #fff;
                text-decoration: none;
            }
		}
		&:hover {
			background-color: nth($black, 1);
			overflow: inherit;
			p {
				background-color: nth($black, 1);
				-webkit-transform: translateX(-35px);
			}
		}
		&::after {
			content: "";
			display: block;
			width: 35px;
			height: 16px;
			background-size: 16px auto;
			background-repeat: no-repeat;
			background-position: center;
		}
		&.font {
			&::after {
				background-image: url("../assets/svg/font.svg");
			}
		}
		&.img {
			&::after {
				background-image: url("../assets/svg/img.svg");
			}
		}
		&.background {
			&::after {
				background-image: url("../assets/svg/background.svg");
			}
		}
		&.copy {
			&::after {
				background-image: url("../assets/svg/copy.svg");
			}
		}
		&.preview {
			&::after {
				background-image: url("../assets/svg/preview.svg");
			}
		}
		&.phone {
			&::after {
				background-image: url("../assets/svg/phone.svg");
			}
		}
	}
}

</style>
