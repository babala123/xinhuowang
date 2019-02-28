import http from "../utils/http";

export const HomeData = (params)=>http("get","/api/index.php/Mobile/Index/getBanner",params)

export const GoodList = (params)=>http("post","/api/index.php/Mobile/Index/getShoesList",params)
