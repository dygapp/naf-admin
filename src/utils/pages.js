
const pages = {
  Error403: () => import('@/components/error/403.vue'),
  Error404: () => import('@/components/error/404.vue'),
  Error500: () => import('@/components/error/500.vue'),
  page1: () => import('@/views/demo/page1.vue'),
  page2: () => import('@/views/demo/page2.vue'),
  /* naf pages */
  naf: {
    user: () => import('@/views/naf/user.vue'),
    dept: () => import('@/views/naf/dept.vue'),
    tag: () => import('@/views/naf/tag.vue'),
    dict: () => import('@/views/naf/dict.vue'),
    log: () => import('@/views/naf/log.vue'),
  },
  doc: {
    send: () => import('@/views/doc/send.vue'),
    receipt: () => import('@/views/doc/receipt.vue'),
    notice: () => import('@/views/doc/notice.vue'),
  },
};
export default pages;
