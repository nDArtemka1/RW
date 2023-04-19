import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { mergeProps, useSSRContext, ref, withCtx, createVNode, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { F as Form } from "./Form-14163f41.js";
const MainForm_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "MainForm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-form" }, _attrs))}><div id="form" class="main-form-title"><h2 class="main-title"><span>Готовы заказать? Нужна консультация специалиста?</span></h2></div><div class="main-form-flex"><div class="main-form-info"><div class="main-form-info-adresses">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "location-icon.svg",
        alt: "location-icon",
        class: "navbar-icon-svg"
      }, null, _parent));
      _push(`<span>142100, Московская область, г. Подольск, ул. Комсомольская, д. 1</span></div><div class="main-form-info-adresses"><a class="main-form-info-adresses-svg" href="tel:+7 (495) 995-34-73">`);
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
      _push(`<div class="underline">info@royalwood.ru</div></a></div></div><div class="main-form-inputs"><p class="main-form-inputs-title"> Заполните форму, и наши специалисты свяжутся с Вами для уточнения всех деталей </p>`);
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
const Footer_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerLinks = ref([
      { name: "Главная", path: "/" },
      { name: "Каталог", path: "/catalog" },
      { name: "Материалы", path: "/materials" },
      { name: "Доставка и Оплата", path: "/delivery" },
      { name: "Контакты", path: "/contacts" }
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
      _push(`</div><div class="footer-social"><div class="footer-social-title">Мы в соцсетях:</div><div class="footer-social-svg">`);
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
      _push(`</div></div></div><div class="footer-bottom"><div class="footer-bottom-copyriting"><span>© 2023 все права защищены</span></div><div class="footer-bottom-privacy">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacity",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="underline"${_scopeId}> Политика конфиденциальности </span>`);
          } else {
            return [
              createVNode("span", { class: "underline" }, " Политика конфиденциальности ")
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
            _push2(`<br${_scopeId}> Создание Сайтов и Маркетинг `);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "webkass-logo.png",
                alt: "webkass-logo"
              }),
              createVNode("br"),
              createTextVNode(" Создание Сайтов и Маркетинг ")
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
export {
  Footer as F
};
//# sourceMappingURL=Footer-923df61a.js.map
