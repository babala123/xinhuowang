import http from "../utils/http";
//轮播图
export const SellBanner = (data)=>http("post","/api/index.php/Mobile/Launch/getBanner",data)
//即将发售的商品
export const SellLaunchList = (data)=>http("post","/api/index.php/Mobile/Launch/getLaunchList",{
	type: 0})
//已发售的商品
export const SelledLaunchList = (data)=>http("post","/api/index.php/Mobile/Launch/getLaunchList",{type:1})
//品牌分类
export const SellBrandList = (data)=>http("post","/api/index.php/Mobile/Launch/getBrandList",data)
//即将发售内的日期
export const SellLaunchYearMonthList = (data)=>http("post","/api/index.php/Mobile/Launch/getLaunchYearMonthList",data)
//最近发售的商品
//export const SellLateList = (data)=>http("post","/api/index.php/Mobile/Launch/getLaunchList/s?type=1",data)

//详情页推荐
export const Sellgoodslike = (data)=>http("post","/api/index.php/Mobile/Goods/getLikelyLikeGoods",data)


















