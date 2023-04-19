import { ref, resolveComponent, withCtx, createVNode, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { M as MainMobileMenu, N as NavBarFix } from "./NavBarFix-14e33b30.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { F as Footer } from "./Footer-923df61a.js";
import { W as WatsAppBtn, S as ScrollToTop } from "./ScrollToTop-32b99862.js";
import { _ as _export_sfc } from "../server.mjs";
import "./Popup-c7d2f0a6.js";
import "./Form-14163f41.js";
import "ufo";
import "hookable";
import "./index-e12b288f.js";
import "unhead";
import "destr";
import "devalue";
import "h3";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "defu";
import "@fortawesome/free-solid-svg-icons";
const NavBar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      { name: "Главная", path: "/", addClassSubLink: "", icon: "none" },
      {
        name: "Каталог",
        path: "/catalog",
        addClassSubLink: "sub-link",
        icon: "angle-down",
        subLinks: [
          {
            title: "Мебель в классическом исполнении",
            path: "/catalog/classic",
            subLinks2: [
              {
                title: "Кухни",
                path: "/catalog/classic"
              },
              {
                title: "Двери",
                path: "/catalog/modern"
              },
              {
                title: "Шкафы",
                path: "/catalog/bathroom-furniture"
              },
              {
                title: "Гардеробные",
                path: "/catalog/bathroom-furniture"
              }
            ]
          },
          {
            title: "Мебель в современном исполнении",
            path: "/catalog/modern",
            subLinks2: [
              {
                title: "Кухни",
                path: "/catalog/classic"
              },
              {
                title: "Двери",
                path: "/catalog/modern"
              },
              {
                title: "Шкафы",
                path: "/catalog/bathroom-furniture"
              },
              {
                title: "Гардеробные",
                path: "/catalog/bathroom-furniture"
              }
            ]
          },
          {
            title: "Мебель для ванной комнаты",
            path: "/catalog/bathroom-furniture"
          },
          {
            title: "Мебель для детской",
            path: "/catalog/furniture-for-the-nursery"
          },
          {
            title: "Мебель для интерьера",
            path: "/catalog/interiors"
          },
          {
            title: "Гардеробные",
            path: "/catalog/dressing-rooms"
          },
          {
            title: "Лестницы",
            path: "/catalog/wooden-stairs"
          },
          {
            title: "Другие изделия",
            path: "/catalog/wall-panels"
          },
          {
            title: "Мебель в современном исполнении",
            path: "/catalog/other-products"
          }
        ]
      },
      { name: "Материалы", path: "/materials", addClassSubLink: "", icon: "" },
      {
        name: "Доставка и Оплата",
        path: "/delivery",
        addClassSubLink: "",
        icon: ""
      },
      { name: "Контакты", path: "/contacts", addClassSubLink: "", icon: "" }
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
            _push2(`<span class="navbar-menu-span underline"${_scopeId}> Главная </span>`);
          } else {
            return [
              createVNode("span", { class: "navbar-menu-span underline" }, " Главная ")
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
            _push2(`<div class="underline"${_scopeId}>Каталог</div><div class="navbar-menu-arrow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "angle-down"] }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "underline" }, "Каталог"),
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
            _push2(`<span${_scopeId}> Мебель в классическом исполнении </span>`);
          } else {
            return [
              createVNode("span", null, " Мебель в классическом исполнении ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Кухни </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Кухни ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Двери </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Двери ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Шкафы </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Шкафы ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Гардеробные </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Гардеробные ")
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
            _push2(`<span${_scopeId}> Мебель в современном исполнении </span>`);
          } else {
            return [
              createVNode("span", null, " Мебель в современном исполнении ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Кухни </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Кухни ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Двери </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Двери ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Шкафы </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Шкафы ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Гардеробные </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Гардеробные ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Мебель для ванной </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Мебель для ванной ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Мебель для детской </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Мебель для детской ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Мебель для интерьера </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Мебель для интерьера ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Лестницы </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Лестницы ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Стеновые панели </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Стеновые панели ")
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
            _push2(`</div><span class="navbar-sub-menu-span underline"${_scopeId}> Другие изделия </span>`);
          } else {
            return [
              createVNode("div", { class: "navbar-menu-arrow-right" }, [
                createVNode(_component_font_awesome_icon, { icon: ["fas", "angle-right"] })
              ]),
              createVNode("span", { class: "navbar-sub-menu-span underline" }, " Другие изделия ")
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
            _push2(`<span class="navbar-menu-span underline"${_scopeId}> Материалы </span>`);
          } else {
            return [
              createVNode("span", { class: "navbar-menu-span underline" }, " Материалы ")
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
            _push2(`<span class="navbar-menu-span underline"${_scopeId}> Доставка и Оплата </span>`);
          } else {
            return [
              createVNode("span", { class: "navbar-menu-span underline" }, " Доставка и Оплата ")
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
            _push2(`<span class="navbar-menu-span underline"${_scopeId}> Контакты </span>`);
          } else {
            return [
              createVNode("span", { class: "navbar-menu-span underline" }, " Контакты ")
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
      _push(`<span class="underline">Подпишись на нас</span></div></div></div></div></div></div></div>`);
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
const default_vue_vue_type_style_index_0_scoped_20c7264a_lang = "";
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
export {
  _default as default
};
//# sourceMappingURL=default-d0665e66.js.map
