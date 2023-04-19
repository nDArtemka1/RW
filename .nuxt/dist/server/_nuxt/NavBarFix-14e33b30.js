import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { ref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { P as Popup } from "./Popup-c7d2f0a6.js";
import { F as Form } from "./Form-14163f41.js";
const MainMobileMenu_vue_vue_type_style_index_0_lang = "";
const OFFSET$1 = 60;
const __default__$1 = {
  data() {
    return {
      isActive: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    openBodyMobileMenu() {
      document.querySelector(".navbar-burger-menu").classList.toggle("navbar-burger-menu-active");
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET$1) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "MainMobileMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const links = ref([
      { name: "Главная", path: "/" },
      { name: "Каталог", path: "/catalog" },
      { name: "Материалы", path: "/materials" },
      { name: "Доставка и Оплата", path: "/delivery" },
      { name: "Контакты", path: "/contacts" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mobile-menu", { hidden: !_ctx.showNavbar }]
      }, _attrs))}><div class="mobile-menu-logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "mobile-menu-logo-img"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "header-logo-fix.png",
              alt: "header-logo-mobile"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "header-logo-fix.png",
                alt: "header-logo-mobile"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ burgerActive: _ctx.isActive }, "mobile-menu-burger"])}"><span></span></div><nav class="navbar-burger-menu"><ul class="navbar-burger-menu-ul"><!--[-->`);
      ssrRenderList(links.value, (link) => {
        _push(`<li class="navbar-burger-menu-li">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          exact: "",
          "no-prefetch": "",
          "active-class": "active",
          to: link.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="navbar-burger-menu-span underline"${_scopeId}>${ssrInterpolate(link.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "navbar-burger-menu-span underline" }, toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="navbar-social"><div class="navbar-social-flex container"><div class="navbar-social-item">`);
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
      _push(`<span class="underline">Подпишись на нас</span></div></div></div></div></nav></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainMobileMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainMobileMenu = _sfc_main$1;
const NavBarFix_vue_vue_type_style_index_0_lang = "";
const OFFSET = 60;
const __default__ = {
  components: {
    Popup,
    Form
  },
  data() {
    return {
      ColorWhite: true,
      isVisible: false,
      scrolled: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },
  methods: {
    showPopupInfo() {
      this.isVisible = true;
    },
    closePopup() {
      this.isVisible = false;
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "NavBarFix",
  __ssrInlineRender: true,
  setup(__props) {
    const links = ref([
      { name: "Главная", path: "/" },
      { name: "Каталог", path: "/catalog" },
      { name: "Материалы", path: "/materials" },
      { name: "Доставка и Оплата", path: "/delivery" },
      { name: "Контакты", path: "/contacts" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["navbar-fix", { hidden: !_ctx.showNavbar }]
      }, _attrs))}><div class="navbar-fix-container"><div class="navbar-fix-flex">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navbar-fix-logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "header-logo-fix.png",
              alt: "header-logo-fix"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "header-logo-fix.png",
                alt: "header-logo-fix"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="navbar-fix-menu"><ul class="navbar-fix-menu-ul"><!--[-->`);
      ssrRenderList(links.value, (link) => {
        _push(`<li class="navbar-fix-menu-li">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          exact: "",
          "no-prefetch": "",
          "active-class": "active",
          to: link.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="navbar-fix-menu-span underline"${_scopeId}>${ssrInterpolate(link.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "navbar-fix-menu-span underline" }, toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
      _push(ssrRenderComponent(Popup, {
        style: _ctx.isVisible ? null : { display: "none" },
        onClosePopup: _ctx.closePopup
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="popup-form"${_scopeId}><h3 class="popup-form-title"${_scopeId}> Задайте вопрос прямо сейчас! </h3><p class="popup-form-description"${_scopeId}> Консультация по всем вопросам - бесплатно! </p>`);
            _push2(ssrRenderComponent(Form, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "popup-form" }, [
                createVNode("h3", { class: "popup-form-title" }, " Задайте вопрос прямо сейчас! "),
                createVNode("p", { class: "popup-form-description" }, " Консультация по всем вопросам - бесплатно! "),
                createVNode(Form)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="navbar-fix-social"><div class="navbar-fix-social-flex"><div class="navbar-fix-btn"><button class="navbar-fix-btn-popup"><span class="underline"> Заказать звонок</span></button><div class="navbar-fix-social-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-fix-social-svg",
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
      _push(`</div></div><div class="navbar-fix-social-item"><div class="navbar-fix-social-svg">`);
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
      _push(`</div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/All/NavBarFix.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavBarFix = _sfc_main;
export {
  MainMobileMenu as M,
  NavBarFix as N
};
//# sourceMappingURL=NavBarFix-14e33b30.js.map
