
import pages from './pages';

/**
 * 菜单定义
 *  title 菜单标题
 *  icon 菜单图标,如果使用element-ui的图标，直接用图标全名，如：el-icon-menu;如果使用naf图标，只写图标名字，如：user，实际上使用图标naf-icon-user
 *  children 子菜单项
 *  url 外链地址
 *  target 打开方式：_self、_blank
 *  path 路由路径
 *  page 页面，可以是两种形式：1.页面名（从pages中获取）2.页面对象（直接加载显示）。url和page不能同时出现
 */

const datas = [
  {
    title: '系统管理',
    icon: 'system',
    children: [
      {
        title: '用户管理',
        path: '/system/user',
        page: 'naf.user',
        icon: 'account',
      },
      {
        title: '部门管理',
        path: '/system/dept',
        page: 'naf.dept',
        icon: 'dept',
      },
      {
        title: '标签管理',
        path: '/system/tag',
        page: 'naf.tag',
        icon: 'tag',
      },
      {
        title: '字典管理',
        path: '/system/dict',
        page: 'naf.dict',
        icon: 'dict',
      },
      {
        title: '操作日志',
        icon: 'log',
        path: '/systme/log',
        page: 'naf.log',
      },
    ],
  },
  {
    title: '公文管理',
    icon: 'doc',
    children: [
      {
        title: '发文管理',
        path: '/doc/send',
        page: 'doc.send',
        icon: 'doc',
      },
      {
        title: '回执管理',
        path: '/doc/receipt',
        page: 'doc.receipt',
        icon: 'receipt',
      },
      {
        title: '通知管理',
        path: '/doc/notice',
        page: 'doc.notice',
        icon: 'comments',
      },
    ],
  },
  {
    title: '企业管理',
    icon: 'corp',
    children: [
      {
        title: '企业信息',
        path: '/corp/info',
        page: 'corp.info',
        icon: 'info',
      },
      {
        title: '企业用户',
        path: '/corp/user',
        page: 'corp.user',
        icon: 'corpuser',
      },
    ],
  },
  {
    title: '错误页',
    icon: 'menu',
    children: [
      {
        title: '403',
        icon: 'menu',
        path: '/page403',
        page: pages.Error403,
      },
      {
        title: '404',
        icon: 'menu',
        path: '/page404',
        page: pages.Error404,
      },
      {
        title: '500',
        icon: 'menu',
        path: '/page500',
        page: pages.Error500,
      },
    ],
  },
];

const MapMenu = item => ({
  title: item.title,
  options: { icon: item.icon, path: item.path, url: item.url, target: item.target },
  children: (item.children || []).map(MapMenu),
});


function DeepGetPropertyValue(obj, name) {
  if (!obj) {
    return undefined;
  }
  const names = name.split('.', 2);
  if (names.length === 1) {
    return obj[name];
  }
  return DeepGetPropertyValue(obj[names[0]], names[1]);
}

/**
 *
 * @param {*} catalog 父节点的路径信息
 */
const MapRoute = (catalog = []) => item => [{
  path: item.path,
  component: typeof (item.page) === 'string' ? DeepGetPropertyValue(pages, item.page) : item.page || pages.Error404,
  meta: { catalog: catalog.concat(item.title) },
},
].concat(
      (item.children || []).map(MapRoute(catalog.concat(item.title)))
                        .reduce((p, c) => p.concat(c), [])
                        .filter(p => p.path),
  );


export const menus = datas.map(MapMenu);
export const routes = datas.map(MapRoute())
                          .reduce((p, c) => p.concat(c), [])
                          .filter(p => p.path);
