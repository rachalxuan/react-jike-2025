//1、登录模块
import { request } from "@/utils/request";
//const res = await request.post('/authorizations', loginForm)
export function getChannelAPI() {
  return request({
    url: "/channels",
    method: "GET",
  });
}
//提交文章表单
export function createArticleAPI(data) {
  return request({
    url: "/mp/articles?draft=false",
    method: "POST",
    data
  });
}

//获取文章列表
export function getArticleListAPI(params) {
  return request({
    url: "/mp/articles",
    method: "GET",
    params
  });
}

//删除文章
export function delArticleAPI(id) {
  return request({
    url: `/mp/articles/${id}`,
    method: "DELETE"
  });
}
