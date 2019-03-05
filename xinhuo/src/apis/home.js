import http from "../utils/http";

export const HomeData = (params)=>http("get","/api/index.php/Mobile/Index/getBanner",params)


export const GoodType = (params)=>http("get","/api/index.php/Mobile/Index/getGoodsType",params)


export const GoodList = (page)=>http("post","/api/index.php/Mobile/Index/getShoesList",{
	param:({ pageindex: page })
})

export const CategoryList = (params)=>http("post","/api/index.php/Mobile/Index/getCategoryList",params)
export const Search = (pages)=>http("post","/api/index.php/Mobile/Index/search",{

  param:({ pageindex: pages })
})