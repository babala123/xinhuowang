<template>
	<div class="username">
		<div class="recommend" v-for="(item,index) in username">
			<router-link to="/userlist">
				<div class="top">
					<img :src="item.head_pic">
					<div>
						<p>{{item.username}}</p>
						<span>{{item.followed}}人关注</span>
					</div>

				</div>
				<div class="bottom">
					<ul>
						<li v-for="data in item.list">
							<img :src="data.cover">
						</li>
					</ul>
				</div>
			</router-link>

		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		methods: {
			tolist() {
				this.router.push("/userlist")
			}
		},
		computed: {
			...Vuex.mapState({
				username: state => state.home.username,
			})
		},
	}
</script>

<style scoped>
	.username {
		height: 100%;
		width: 100%;
		padding-top: .8rem;
	}

	.username>.recommend {
		border-top: #f5f5f5 solid .3rem;
		width: 100%;
		background: white;
		/* margin-top: .3rem; */
	}

	.recommend>a>.top {
		display: flex;
		height: 1.2rem;
		background: white;
	}

	.recommend>a>.top>img {
		width: .8rem;
		height: .8rem;
		margin: .2rem .2rem 0 .28rem;
		border-radius: 100%;
	}

	.recommend>a>.top>div {
		margin-top: .2rem;
	}

	.recommend>a>.top>div>p {
		font-size: .3rem;
	}

	.recommend>a>.top>div>span {
		color: darkgrey;
	}

	.recommend>a>.bottom {
		height: 3.8rem;
		width: 100%;
	}

	.recommend>a>.bottom>ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.recommend>a>.bottom>ul>li {
		width: 2.48rem;
		height: 1.8rem;
		overflow: hidden;
		position: relative;
	}

	.recommend>a>.bottom>ul>li>img {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
</style>
