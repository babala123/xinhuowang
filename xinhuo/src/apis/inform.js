import http from "../utils/http";

export const informData = (data)=>http("post","/api/index.php/Mobile/News/getBanner",data)
export const allData = (data)=>http("post","/api/index.php/Mobile/News/get_News",data)
