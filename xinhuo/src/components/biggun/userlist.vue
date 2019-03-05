<template>
	<div class="userlist">
		<div class="top">
			<p class="iconfont" @click="goback()">&#xe6c3;</p>
			<div class="userlogo">
				<img src="https://images.xinhuo.com/5b73bbb202de5.png">
				<div class="user">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUJCODBCRUFDQjE1MTFFNkIxNDFGRUMwNzVGM0FFNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUJCODBCRUJDQjE1MTFFNkIxNDFGRUMwNzVGM0FFNTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQkI4MEJFOENCMTUxMUU2QjE0MUZFQzA3NUYzQUU1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQkI4MEJFOUNCMTUxMUU2QjE0MUZFQzA3NUYzQUU1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PghlmoMAAAL6SURBVHja1FpLSyNBEK7EF4YQNAFf+QMKwu7Bx6J40IMXnyd/wsaD6FHQn6OYP6B48yDoBhZWFwKaiyeDRtCDBh9EU9vf9mSNJJPNTKfH6YJihp7pr77qrq6pdJqYiCxtFboq9IfQB6HsM32wuK1aXP/yLpGPCz3xIWk7PbE4/xt5k8iX9FRoW1D4kBD6lcyTL0K/BxBX4uYbmSkpOPAibloNdeAFDrA2+P5+eT0/12YiqHV8FhaIFhe1mtA7A0dH8jo+bqADXV1EV1fyvreX6ObGsBCamxPoQam4N24NlJPW6ICeEGpvJ7q9lVfI0xNRLCavRszA9PQ7+ZJDaDMmhKqFzOysISGERYvsgyxULshCyEbFos9nYHS0knwpreKZ70Noft7dM7fS8Dr97IxtBc8abM9+DYyNEYVC9p6/vRHd339s6+4m2turPWIzM0S53Me2SISoqcm+z+Mj0fGxwxkYHKw9ml4JOICLDc/aIRQOMyeTn0d+Z0dyqMGxvjWwssL8/OwdcdiCzTq41b+Ih4aYLy70k4cN2KqTl7Ms1NnJvLurjzywOzocZSHnaTQQYF5fZy4UGkccWMAEtkM+7r8DExPM2aw6+ctLieWSh9qHrKeH+eDAPXn0BYaWD1m90tJCdHdHFA4765fPE0WjRIXCJ9dCIyPOyUPQZ3jYB8WcyrZJI7ZclAuqTMb9GkBfRftqDgwMqGchYChwCGoNn3Raqs4wUpqBVMp+ZLe3mUMhqVtb9u8B41NCqK+PuVisXoglEpXvo61aQQgMYHnuwPKy80LMriAElucO7O9XFmKx2P/7RaOVBSGwPHUgEnkPh9dX5s1NZ4UY3t3YkH1LYQdMzxxYWpKGcznmyUn3ixB9r68lFjA9cwA/9Q4PmeNx9Z0FYAALmJ58B5qbiTIZoqkpomxWvRQABrCACWwXW4sm/8mXxwz8InMlDQeSBjuQxCJus/62N+2owW9wN/Wwx2n5YY/y4zZrQn8KzfuQdN7itlZ+3OaPAAMA8cmMScTqRVAAAAAASUVORK5CYII=">
					EvansWu
				</div>
			</div>
			<button>关注</button>
		</div>
		<div class="bottom">
			<ul class="btop">
				<li v-for="(item,index) in nav">
					<span>{{item.num}}</span>
					<p>{{item.name}}</p>
				</li>
			</ul>
			<div class="wrapper navbox" ref="homeWrapper">
				<ul class="content bbot">
					<li v-for="(item,index) in select">
						<div class="bbotop">
							<img :src="item.img">
						</div>
						<p>{{item.title}}</p>
						<div class="bbootton">

							<p class="iconfont">&#xe626;点赞
								<span>{{item.point}}</span>
								&#xe60a;评论
								<span>{{item.click}}</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from "better-scroll";
	export default {
		data() {
			return {
				nav: [{
						name: "发布",
						num: 169
					},
					{
						name: "喜欢",
						num: 0
					},
					{
						name: "点赞",
						num: 1
					},
					{
						name: "关注",
						num: 8
					},
					{
						name: "粉丝",
						num: 19
					}
				],
				select: [{
						img: "https://images.xinhuo.com/5c7e39ce33ba4.jpeg",
						title: "吸睛度爆表！珊瑚橙和薄荷绿 Nike Air Fear of God 1 即将登场",
						point: 0,
						click: 0,
					},
					{
						img: "https://images.xinhuo.com/5c7cbd4a6d040.jpeg",
						title: "我的天啊，这全新虎纹喷也太帅了吧！",
						point: 0,
						click: 0,
					},
					{
						img: "https://images.xinhuo.com/5c7bd05e48b05.jpeg",
						title: "绿果冻！Nike Air Force 1 Volt Green 国外现已发售",
						point: 0,
						click: 0,
					},
					{
						img: "https://images.xinhuo.com/5c7a2341a16ed.jpeg",
						title: "华丽惊艳的佩斯利图案！詹姆斯专属 Nike Air Force 1 Flyknit 曝光",
						point: 0,
						click: 0,
					},
					{
						img: "https://images.xinhuo.com/5c7918602846e.jpeg",
						title: "雨季到来，不来一双防水发鞋怎么行",
						point: 0,
						click: 0,
					},
					{
						img: "https://images.xinhuo.com/5c79033d0e036.jpeg",
						title: "夜跑中最亮的星！SNS x adidas Nite Jogger 即将登场",
						point: 0,
						click: 0,
					},
					{
						img: "https://images.xinhuo.com/5c77a7f383b80.jpeg",
						title: "好看就完事了！ AJ 1 又双叒要登场了",
						point: 0,
						click: 0,
					},
					{
						img: "https://images.xinhuo.com/5c74f6456cb52.jpeg",
						title: "满满高街风，小麦色 Air Fear of God SA 即将亮相",
						point: 0,
						click: 0,
					},
				]
			}
		},
		methods: {
			goback() {
				this.$router.back();
			}
		},
		mounted() {
			if (!this.scrollX) {
				this.scrollX = new BScroll(this.$refs.homeWrapper, {
					scrollX: true,
					
				})

			}
			console.log(this.scrollX)
		}
		
	}
</script>

<style scoped>
	.userlist {
		width: 100%;
		height: 100%;
		background: white;

	}

	.userlist>.top {
		width: 100%;
		height: 8.3rem;
		margin-bottom: ;
		background: url(../../assets/bgone.png) no-repeat;
		overflow: hidden;
		border-bottom: .2rem solid #f5f5f5;
	}

	.userlist>.top>p {
		margin: .25rem;
		font-size: .35rem;
		font-weight: 600;
		color: black;
	}

	.userlist>.top>.userlogo {
		width: 2rem;
		height: 2rem;
		margin: 0 auto;

		margin-top: 2.35rem;
		margin-bottom: 1.8rem;
	}

	.userlist>.top>.userlogo>img {
		width: 100%;
		height: 100%;
		border: .1rem solid white;
		border-radius: 100%;
		margin-bottom: .2rem;
	}

	.userlist>.top>.userlogo>.user {
		height: .35rem;
		display: flex;
		line-height: .35rem;
		margin-left: .15rem;

		color: black;
		font-size: .3rem;
	}

	.userlist>.top>.userlogo>.user>img {
		width: .32rem;
		height: .32rem;
		margin-right: .1rem;

	}

	.userlist>.top>button {
		display: block;
		width: 2.9rem;
		height: .72rem;
		border: .02rem solid #666;
		border-radius: .07rem;
		text-align: center;
		background: white;
		font-size: .3rem;
		margin: 0 auto;
	}

	.userlist>.bottom>.btop {
		height: 1.5rem;
		display: flex;
	}

	.userlist>.bottom {
		width: 100%;
		overflow: hidden;
	}

	.userlist>.bottom>.btop>li {
		width: 1.5rem;
		height: 100%;
		text-align: center;
	}

	.userlist>.bottom>.btop>li>span {
		display: block;
		height: .5rem;
		padding-top: .2rem;
		font-size: .33rem;
		margin-bottom: .2rem;
	}

	.userlist>.bottom>.btop>li>p {
		height: .4rem;
		font-size: .3rem;
		color: darkgray;
	}

	.userlist>.bottom>.navbox>.bbot {
		width: 100%;
		display: flex;
		margin-bottom: .8rem;
	}

	.userlist>.bottom>.navbox>.bbot>li {
		height: 5.2rem;
		margin-left: .3rem;
		border: .02rem solid #dcdcdc;
	}

	.userlist>.bottom>.navbox>.bbot>li>.bbotop {
		width: 5.86rem;
		height: 2.4rem;
		margin-bottom: .35rem;
		overflow: hidden;
		position: relative;
	}

	.userlist>.bottom>.navbox>.bbot>li>.bbotop>img {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}

	.userlist>.bottom>.navbox>.bbot>li>p {
		font-size: .32rem;
		text-align: center;
		margin: 0 auto;
		width: 4.5rem;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		white-space: normal;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.userlist>.bottom>.navbox>.bbot>li>.bbootton {
		padding-top: .8rem;
		text-align: center;
		display: flex;
		margin: 0 auto;
	}

	.userlist>.bottom>.navbox>.bbot>li>.bbootton>p {
		width: 100%;
		font-size: .28rem;
		color: #999;
	}

	.userlist>.bottom>.navbox>.bbot>li>.bbootton>p>span:nth-of-type(1) {
		margin-right: .5rem;
	}
</style>
