import http from "../utils/http";
//用户晒单
export const SellBiggun = (data)=>http("post","/api/index.php/Mobile/Talent/getTalentList",data)
//横向滚动
//export const newsCategory = (params)=>http("get","/api/index.php/Mobile/News/newsCategory",params)

