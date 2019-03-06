import http from "../utils/http";
//用户晒单
export const SellBiggun = (data)=>http("post","/api/index.php/Mobile/Talent/getTalentList",data)


