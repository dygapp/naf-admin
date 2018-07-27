import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b1808dd4 = () => import('..\\src\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _807bf930 = () => import('..\\src\\pages\\job\\job-info.vue' /* webpackChunkName: "pages_job_job-info" */).then(m => m.default || m)
const _bb392c06 = () => import('..\\src\\pages\\doc\\notice.vue' /* webpackChunkName: "pages_doc_notice" */).then(m => m.default || m)
const _6706a581 = () => import('..\\src\\pages\\sys\\site.vue' /* webpackChunkName: "pages_sys_site" */).then(m => m.default || m)
const _43d24d36 = () => import('..\\src\\pages\\naf\\dict.vue' /* webpackChunkName: "pages_naf_dict" */).then(m => m.default || m)
const _09a8a8a8 = () => import('..\\src\\pages\\demo\\page1.vue' /* webpackChunkName: "pages_demo_page1" */).then(m => m.default || m)
const _640ede4a = () => import('..\\src\\pages\\naf\\tag.vue' /* webpackChunkName: "pages_naf_tag" */).then(m => m.default || m)
const _6f2e29b6 = () => import('..\\src\\pages\\demo\\home.vue' /* webpackChunkName: "pages_demo_home" */).then(m => m.default || m)
const _be8a4620 = () => import('..\\src\\pages\\corp\\points.vue' /* webpackChunkName: "pages_corp_points" */).then(m => m.default || m)
const _001ef118 = () => import('..\\src\\pages\\corp\\user.vue' /* webpackChunkName: "pages_corp_user" */).then(m => m.default || m)
const _09e4aa0b = () => import('..\\src\\pages\\corp\\check.vue' /* webpackChunkName: "pages_corp_check" */).then(m => m.default || m)
const _1a9c407b = () => import('..\\src\\pages\\corp\\info.vue' /* webpackChunkName: "pages_corp_info" */).then(m => m.default || m)
const _567e4618 = () => import('..\\src\\pages\\naf\\log.vue' /* webpackChunkName: "pages_naf_log" */).then(m => m.default || m)
const _79fa0bc0 = () => import('..\\src\\pages\\job\\campus-talk.vue' /* webpackChunkName: "pages_job_campus-talk" */).then(m => m.default || m)
const _21f0e4a4 = () => import('..\\src\\pages\\naf\\cert.vue' /* webpackChunkName: "pages_naf_cert" */).then(m => m.default || m)
const _4d678289 = () => import('..\\src\\pages\\cms\\news.vue' /* webpackChunkName: "pages_cms_news" */).then(m => m.default || m)
const _178cec26 = () => import('..\\src\\pages\\doc\\send.vue' /* webpackChunkName: "pages_doc_send" */).then(m => m.default || m)
const _3e121acb = () => import('..\\src\\pages\\naf\\user.vue' /* webpackChunkName: "pages_naf_user" */).then(m => m.default || m)
const _6cfcd48e = () => import('..\\src\\pages\\cms\\notice.vue' /* webpackChunkName: "pages_cms_notice" */).then(m => m.default || m)
const _f32f3f76 = () => import('..\\src\\pages\\naf\\dept.vue' /* webpackChunkName: "pages_naf_dept" */).then(m => m.default || m)
const _039bd753 = () => import('..\\src\\pages\\naf\\contacts.vue' /* webpackChunkName: "pages_naf_contacts" */).then(m => m.default || m)
const _17a025e8 = () => import('..\\src\\pages\\cms\\policy.vue' /* webpackChunkName: "pages_cms_policy" */).then(m => m.default || m)
const _20d99684 = () => import('..\\src\\pages\\demo\\dashboard.vue' /* webpackChunkName: "pages_demo_dashboard" */).then(m => m.default || m)
const _4e928de3 = () => import('..\\src\\pages\\doc\\receipt.vue' /* webpackChunkName: "pages_doc_receipt" */).then(m => m.default || m)
const _44936a44 = () => import('..\\src\\pages\\job\\job-fair.vue' /* webpackChunkName: "pages_job_job-fair" */).then(m => m.default || m)
const _098c79a6 = () => import('..\\src\\pages\\demo\\page2.vue' /* webpackChunkName: "pages_demo_page2" */).then(m => m.default || m)
const _44cfd402 = () => import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/login",
			component: _b1808dd4,
			name: "login"
		},
		{
			path: "/job/job-info",
			component: _807bf930,
			name: "job-job-info"
		},
		{
			path: "/doc/notice",
			component: _bb392c06,
			name: "doc-notice"
		},
		{
			path: "/sys/site",
			component: _6706a581,
			name: "sys-site"
		},
		{
			path: "/naf/dict",
			component: _43d24d36,
			name: "naf-dict"
		},
		{
			path: "/demo/page1",
			component: _09a8a8a8,
			name: "demo-page1"
		},
		{
			path: "/naf/tag",
			component: _640ede4a,
			name: "naf-tag"
		},
		{
			path: "/demo/home",
			component: _6f2e29b6,
			name: "demo-home"
		},
		{
			path: "/corp/points",
			component: _be8a4620,
			name: "corp-points"
		},
		{
			path: "/corp/user",
			component: _001ef118,
			name: "corp-user"
		},
		{
			path: "/corp/check",
			component: _09e4aa0b,
			name: "corp-check"
		},
		{
			path: "/corp/info",
			component: _1a9c407b,
			name: "corp-info"
		},
		{
			path: "/naf/log",
			component: _567e4618,
			name: "naf-log"
		},
		{
			path: "/job/campus-talk",
			component: _79fa0bc0,
			name: "job-campus-talk"
		},
		{
			path: "/naf/cert",
			component: _21f0e4a4,
			name: "naf-cert"
		},
		{
			path: "/cms/news",
			component: _4d678289,
			name: "cms-news"
		},
		{
			path: "/doc/send",
			component: _178cec26,
			name: "doc-send"
		},
		{
			path: "/naf/user",
			component: _3e121acb,
			name: "naf-user"
		},
		{
			path: "/cms/notice",
			component: _6cfcd48e,
			name: "cms-notice"
		},
		{
			path: "/naf/dept",
			component: _f32f3f76,
			name: "naf-dept"
		},
		{
			path: "/naf/contacts",
			component: _039bd753,
			name: "naf-contacts"
		},
		{
			path: "/cms/policy",
			component: _17a025e8,
			name: "cms-policy"
		},
		{
			path: "/demo/dashboard",
			component: _20d99684,
			name: "demo-dashboard"
		},
		{
			path: "/doc/receipt",
			component: _4e928de3,
			name: "doc-receipt"
		},
		{
			path: "/job/job-fair",
			component: _44936a44,
			name: "job-job-fair"
		},
		{
			path: "/demo/page2",
			component: _098c79a6,
			name: "demo-page2"
		},
		{
			path: "/",
			component: _44cfd402,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
