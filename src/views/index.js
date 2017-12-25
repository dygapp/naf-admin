
const pages = {
  Error403: () => import('@/components/error/403.vue'),
  Error404: () => import('@/components/error/404.vue'),
  Error500: () => import('@/components/error/500.vue'),
  page1: () => import('@/views/demo/page1.vue'),
  page2: () => import('@/views/demo/page2.vue'),
  /* 系统管理页面 */
  naf: {
    user: () => import('@/views/naf/user.vue'),
    dept: () => import('@/views/naf/dept.vue'),
    tag: () => import('@/views/naf/tag.vue'),
    dict: () => import('@/views/naf/dict.vue'),
    cert: () => import('@/views/naf/cert.vue'),
    log: () => import('@/views/naf/log.vue'),
  },
  /* 系统管理页面 */
  sys: {
    site: () => import('@/views/sys/site.vue'),
  },
  /* 公文管理页面 */
  doc: {
    send: () => import('@/views/doc/send.vue'),
    receipt: () => import('@/views/doc/receipt.vue'),
    notice: () => import('@/views/doc/notice.vue'),
  },
  /* 企业管理页面 */
  corp: {
    info: () => import('@/views/corp/info.vue'),
    check: () => import('@/views/corp/check.vue'),
    points: () => import('@/views/corp/points.vue'),
    user: () => import('@/views/corp/user.vue'),
  },
  /* 招聘管理页面 */
  job: {
    info: () => import('@/views/job/job-info.vue'),
    fair: () => import('@/views/job/job-fair.vue'),
    talk: () => import('@/views/job/campus-talk.vue'),
  },
  /* 招聘管理页面 */
  cms: {
    notice: () => import('@/views/cms/notice.vue'),
    policy: () => import('@/views/cms/policy.vue'),
    news: () => import('@/views/cms/news.vue'),
  },
};
export default pages;
