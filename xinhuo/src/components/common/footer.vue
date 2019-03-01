<template>
	<div class="footer">
		<ul>
			<li v-for="(item,index) in taBer">
				<router-link :to = "item.path">
					<p class="iconfont" v-html="item.icon"></p>
					<span>{{item.name}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				taBer:[
					{
						icon:"&#xe63b;",
						name:"商城",
						path:"/home"
					},
					{
						icon:"&#xe512;",
						name:"资讯",
						path:"/inform"
					},
					{
						icon:"&#xe611;",
						name:"发售",
						path:"/sell"
					},
					{
						icon:"&#xe683;",
						name:"达人",
						path:"/biggun"
					},
					{
						icon:"&#xe505;",
						name:"我的",
						path:"/my"
					}
				]
			}
		}
	}
</script>

<style>
	.footer{
		position:fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1rem;
		border-top: .02rem solid lightgrey;
		background: white;
	}
	.footer>ul{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}
	.footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }
	.footer>ul>li>a{
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
    }
	.footer>ul>li>a>p{
		margin-bottom: .1rem;
         font-size: .52rem
     }

     .footer>ul>li>a>span{
         font-size: .23rem;
     }
	.footer>ul>li:nth-of-type(5)>a>p{
		font-weight: 700;
	}
     .footer>ul>li>.router-link-active{
         color:#fe0000;
     }
</style>
