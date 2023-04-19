import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-9ef5105d.mjs';
import { useSSRContext, ref, withCtx, createVNode, toDisplayString, createTextVNode, mergeProps } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { F as Form } from './Form-14163f41.mjs';

const _sfc_main$1 = {
  __name: "MainForm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-form" }, _attrs))}><div id="form" class="main-form-title"><h2 class="main-title"><span>\u0413\u043E\u0442\u043E\u0432\u044B \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C? \u041D\u0443\u0436\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430?</span></h2></div><div class="main-form-flex"><div class="main-form-info"><div class="main-form-info-adresses">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "location-icon.svg",
        alt: "location-icon",
        class: "navbar-icon-svg"
      }, null, _parent));
      _push(`<span>142100, \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0433. \u041F\u043E\u0434\u043E\u043B\u044C\u0441\u043A, \u0443\u043B. \u041A\u043E\u043C\u0441\u043E\u043C\u043E\u043B\u044C\u0441\u043A\u0430\u044F, \u0434. 1</span></div><div class="main-form-info-adresses"><a class="main-form-info-adresses-svg" href="tel:+7 (495) 995-34-73">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "phone-icon.svg",
        alt: "phone-icon",
        class: "navbar-icon-svg"
      }, null, _parent));
      _push(`<div class="underline">+7 (495) 995-34-73</div></a></div><div class="main-form-info-adresses"><a class="main-form-info-adresses-svg" href="mailto:info@royalwood.ru">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "mail-icon.svg",
        alt: "mail-icon",
        class: "navbar-icon-svg"
      }, null, _parent));
      _push(`<div class="underline">info@royalwood.ru</div></a></div></div><div class="main-form-inputs"><p class="main-form-inputs-title"> \u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443, \u0438 \u043D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u0434\u043B\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 </p>`);
      _push(ssrRenderComponent(Form, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainForm = _sfc_main$1;
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerLinks = ref([
      { name: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", path: "/" },
      { name: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433", path: "/catalog" },
      { name: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B", path: "/materials" },
      { name: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u041E\u043F\u043B\u0430\u0442\u0430", path: "/delivery" },
      { name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", path: "/contacts" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container">`);
      _push(ssrRenderComponent(MainForm, null, null, _parent));
      _push(`</div><footer class="footer"><div class="container"><div class="footer-top"><nav class="footer-menu"><ul class="footer-menu-ul"><!--[-->`);
      ssrRenderList(footerLinks.value, (link) => {
        _push(`<li class="footer-menu-li">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          exact: "",
          "no-prefetch": "",
          "active-class": "active",
          to: link.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="footer-menu-span underline"${_scopeId}>${ssrInterpolate(link.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "footer-menu-span underline" }, toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav><div id="header-logo" class="footer-logo">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "main/header-logo.png",
        alt: "header-logo",
        class: "footer-item-img"
      }, null, _parent));
      _push(`</div><div class="footer-social"><div class="footer-social-title">\u041C\u044B \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445:</div><div class="footer-social-svg">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "footer-svg",
        to: "https://api.whatsapp.com/send?phone=79637821473",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "whatsapp-icon.svg",
              alt: "whatsapp-icon",
              class: "footer-icon-svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "whatsapp-icon.svg",
                alt: "whatsapp-icon",
                class: "footer-icon-svg"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://vk.com/club211531768",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "vk-icon.svg",
              alt: "vk-icon",
              class: "footer-icon-svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "vk-icon.svg",
                alt: "vk-icon",
                class: "footer-icon-svg"
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
              class: "footer-icon-svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "telegram-icon.svg",
                alt: "telegram-icon",
                class: "footer-icon-svg"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="footer-bottom"><div class="footer-bottom-copyriting"><span>\xA9 2023 \u0432\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B</span></div><div class="footer-bottom-privacy">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacity",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="underline"${_scopeId}> \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 </span>`);
          } else {
            return [
              createVNode("span", { class: "underline" }, " \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="footer-bottom-development">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mailto:online@webkas.ru" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "webkass-logo.png",
              alt: "webkass-logo"
            }, null, _parent2, _scopeId));
            _push2(`<br${_scopeId}> \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0421\u0430\u0439\u0442\u043E\u0432 \u0438 \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 `);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "webkass-logo.png",
                alt: "webkass-logo"
              }),
              createVNode("br"),
              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0421\u0430\u0439\u0442\u043E\u0432 \u0438 \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/All/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = _sfc_main;

export { Footer as F };
//# sourceMappingURL=Footer-923df61a.mjs.map
