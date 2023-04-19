import { useSSRContext, mergeProps, ref, resolveComponent, withCtx, createVNode } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { M as MainMobileMenu, N as NavBarFix } from './NavBarFix-14e33b30.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-9ef5105d.mjs';
import { F as Footer } from './Footer-923df61a.mjs';
import { W as WatsAppBtn, S as ScrollToTop } from './ScrollToTop-32b99862.mjs';
import { _ as _export_sfc } from './server.mjs';
import './Popup-c7d2f0a6.mjs';
import './Form-14163f41.mjs';
import 'file://D:/projects/royal-wood/node_modules/ufo/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/h3/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/ofetch/dist/node.mjs';
import 'file://D:/projects/royal-wood/node_modules/hookable/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unctx/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unhead/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/projects/royal-wood/node_modules/defu/dist/defu.mjs';
import 'file://D:/projects/royal-wood/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://D:/projects/royal-wood/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/projects/royal-wood/node_modules/destr/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/scule/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/ohash/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unstorage/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/projects/royal-wood/node_modules/radix3/dist/index.mjs';

const _sfc_main$1 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      { name: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", path: "/", addClassSubLink: "", icon: "none" },
      {
        name: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
        path: "/catalog",
        addClassSubLink: "sub-link",
        icon: "angle-down",
        subLinks: [
          {
            title: "\u041C\u0435\u0431\u0435\u043B\u044C \u0432 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438",
            path: "/catalog/classic",
            subLinks2: [
              {
                title: "\u041A\u0443\u0445\u043D\u0438",
                path: "/catalog/classic"
              },
              {
                title: "\u0414\u0432\u0435\u0440\u0438",
                path: "/catalog/modern"
              },
              {
                title: "\u0428\u043A\u0430\u0444\u044B",
                path: "/catalog/bathroom-furniture"
              },
              {
                title: "\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u044B\u0435",
                path: "/catalog/bathroom-furniture"
              }
            ]
          },
          {
            title: "\u041C\u0435\u0431\u0435\u043B\u044C \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438",
            path: "/catalog/modern",
            subLinks2: [
              {
                title: "\u041A\u0443\u0445\u043D\u0438",
                path: "/catalog/classic"
              },
              {
                title: "\u0414\u0432\u0435\u0440\u0438",
                path: "/catalog/modern"
              },
              {
                title: "\u0428\u043A\u0430\u0444\u044B",
                path: "/catalog/bathroom-furniture"
              },
              {
                title: "\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u044B\u0435",
                path: "/catalog/bathroom-furniture"
              }
            ]
          },
          {
            title: "\u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0432\u0430\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u043D\u0430\u0442\u044B",
            path: "/catalog/bathroom-furniture"
          },
          {
            title: "\u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0434\u0435\u0442\u0441\u043A\u043E\u0439",
            path: "/catalog/furniture-for-the-nursery"
          },
          {
            title: "\u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430",
            path: "/catalog/interiors"
          },
          {
            title: "\u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u044B\u0435",
            path: "/catalog/dressing-rooms"
          },
          {
            title: "\u041B\u0435\u0441\u0442\u043D\u0438\u0446\u044B",
            path: "/catalog/wooden-stairs"
          },
          {
            title: "\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F",
            path: "/catalog/wall-panels"
          },
          {
            title: "\u041C\u0435\u0431\u0435\u043B\u044C \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438",
            path: "/catalog/other-products"
          }
        ]
      },
      { name: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B", path: "/materials", addClassSubLink: "", icon: "" },
      {
        name: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u041E\u043F\u043B\u0430\u0442\u0430",
        path: "/delivery",
        addClassSubLink: "",
        icon: ""
      },
      { name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", path: "/contacts", addClassSubLink: "", icon: "" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="navbar"><div class="navbar-flex container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navbar-logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "header-logo.png",
              alt: "header-logo"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "header-logo.png",
                alt: "header-logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="navbar-menu"><ul class="navbar-menu-ul"><li class="navbar-menu-li">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="navbar-menu-span underline"${_scopeId}> \u0413\u043B\u0430\u0432\u043D\u0430\u044F </span>`);
          } else {
            return [
              createVNode("span", { class: "navbar-menu-span underline" }, " \u0413\u043B\u0430\u0432\u043D\u0430\u044F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="navbar-menu-li">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="underline"${_scopeId}>\u041A\u0430\u0442\u0430\u043B\u043E\u0433</div><div class="navbar-menu-arrow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-down"] }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "underline" }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"),
              createVNode("div", { class: "navbar-menu-arrow" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-down"] })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="submenu"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        to: "/catalog/classic",
        class: "submenu-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u041C\u0435\u0431\u0435\u043B\u044C \u0432 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 </span>`);
          } else {
            return [
              createVNode("span", null, " \u041C\u0435\u0431\u0435\u043B\u044C \u0432 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        to: "/catalog/classic/kitchens"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u041A\u0443\u0445\u043D\u0438 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u041A\u0443\u0445\u043D\u0438 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        to: "/catalog/classic/doors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u0414\u0432\u0435\u0440\u0438 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u0414\u0432\u0435\u0440\u0438 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        to: "/catalog/classic/wardrobes"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u0428\u043A\u0430\u0444\u044B </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u0428\u043A\u0430\u0444\u044B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog/classic/dressing-rooms"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u044B\u0435 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u044B\u0435 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog/modern",
        class: "submenu-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u041C\u0435\u0431\u0435\u043B\u044C \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 </span>`);
          } else {
            return [
              createVNode("span", null, " \u041C\u0435\u0431\u0435\u043B\u044C \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        to: "/catalog/modern/kitchens"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u041A\u0443\u0445\u043D\u0438 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u041A\u0443\u0445\u043D\u0438 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        to: "/catalog/modern/doors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u0414\u0432\u0435\u0440\u0438 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u0414\u0432\u0435\u0440\u0438 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        to: "/catalog/modern/wardrobes"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u0428\u043A\u0430\u0444\u044B </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u0428\u043A\u0430\u0444\u044B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog/modern/dressing-rooms"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u044B\u0435 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u0413\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u044B\u0435 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog/radiators"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0432\u0430\u043D\u043D\u043E\u0439 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0432\u0430\u043D\u043D\u043E\u0439 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog/furniture-for-the-nursery"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0434\u0435\u0442\u0441\u043A\u043E\u0439 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0434\u0435\u0442\u0441\u043A\u043E\u0439 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog/interiors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog/wooden-stairs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u041B\u0435\u0441\u0442\u043D\u0438\u0446\u044B </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u041B\u0435\u0441\u0442\u043D\u0438\u0446\u044B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog/radiators"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u0421\u0442\u0435\u043D\u043E\u0432\u044B\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u0421\u0442\u0435\u043D\u043E\u0432\u044B\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/catalog/other-products"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="navbar-menu-arrow-right"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-right"] }, null, _parent2, _scopeId));
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> \u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " \u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="navbar-menu-li">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/materials"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="navbar-menu-span underline"${_scopeId}> \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B </span>`);
          } else {
            return [
              createVNode("span", { class: "navbar-menu-span underline" }, " \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="navbar-menu-li">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/delivery"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="navbar-menu-span underline"${_scopeId}> \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u041E\u043F\u043B\u0430\u0442\u0430 </span>`);
          } else {
            return [
              createVNode("span", { class: "navbar-menu-span underline" }, " \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u041E\u043F\u043B\u0430\u0442\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="navbar-menu-li">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        exact: "",
        "no-prefetch": "",
        "active-class": "active",
        to: "/contacts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="navbar-menu-span underline"${_scopeId}> \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B </span>`);
          } else {
            return [
              createVNode("span", { class: "navbar-menu-span underline" }, " \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><div class="navbar-social"><div class="navbar-social-flex container"><div class="navbar-social-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-social-svg",
        to: "tel:+7 (495) 995-34-73"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "phone-icon.svg",
              alt: "phone-icon",
              class: "navbar-icon-svg"
            }, null, _parent2, _scopeId));
            _push2(`<span class="underline"${_scopeId}>+7 (495) 995-34-73</span>`);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "phone-icon.svg",
                alt: "phone-icon",
                class: "navbar-icon-svg"
              }),
              createVNode("span", { class: "underline" }, "+7 (495) 995-34-73")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-social-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-social-svg",
        to: "mailto:info@royalwood.ru"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "mail-icon.svg",
              alt: "mail-icon",
              class: "navbar-icon-svg"
            }, null, _parent2, _scopeId));
            _push2(`<span class="underline"${_scopeId}>info@royalwood.ru</span>`);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "mail-icon.svg",
                alt: "mail-icon",
                class: "navbar-icon-svg"
              }),
              createVNode("span", { class: "underline" }, "info@royalwood.ru")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-social-item"><div class="navbar-social-svg">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://vk.com/club211531768",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "vk-icon.svg",
              alt: "vk-icon",
              class: "navbar-icon-svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "vk-icon.svg",
                alt: "vk-icon",
                class: "navbar-icon-svg"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://t.me/royal_wood_mebel",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "telegram-icon.svg",
              alt: "telegram-icon",
              class: "navbar-icon-svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "telegram-icon.svg",
                alt: "telegram-icon",
                class: "navbar-icon-svg"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="underline">\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0441\u044C \u043D\u0430 \u043D\u0430\u0441</span></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/All/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NavBar = _sfc_main$1;
const __default__ = {
  watch: {
    $route() {
      location.reload();
    }
  },
  mounted() {
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "body" }, _attrs))} data-v-20c7264a>`);
      _push(ssrRenderComponent(MainMobileMenu, null, null, _parent));
      _push(`<header data-v-20c7264a>`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(ssrRenderComponent(NavBarFix, null, null, _parent));
      _push(`</header><main data-v-20c7264a><div class="container" data-v-20c7264a></div><div data-v-20c7264a>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(WatsAppBtn, null, null, _parent));
      _push(ssrRenderComponent(ScrollToTop, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-20c7264a"]]);

export { _default as default };
//# sourceMappingURL=default-d0665e66.mjs.map
