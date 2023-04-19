import "./index-e12b288f.js";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { P as Popup } from "./Popup-c7d2f0a6.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "devalue";
import "defu";
import "@fortawesome/free-solid-svg-icons";
const Contacts_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contacts" }, _attrs))}><h1 class="main-title"><span>Контакты</span></h1><div class="contact-adress-info"><p class="contact-adress-info-p"> Мы всегда рады гостям! Чтобы приехать к нам на производство, проконсультироваться более подробно, ознакомиться с нашими материалами и образцами, Вы можете оставить <a href="#form"><strong>ЗАЯВКУ</strong></a> на сайте для согласования удобного времени. </p></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/Contacts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Contacts = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const ContactAdress_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-adress" }, _attrs))}><div class="contact-adress-right"><h2 class="contact-title">Адрес:</h2><div class="contacts-info"><div class="contact-info-cart"><div class="contact-info-cart-adress"> 142100, Московская область, г. Подольск, ул. Комсомольская, д. 1 </div><iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3A9db1e2dc6273ec949fa7ac07309879c199d7846488473e8c1b27d198a25b276c" frameborder="0" allowfullscreen="true" width="630px" height="400px" style="${ssrRenderStyle({ "display": "block" })}"></iframe></div></div></div><div class="contact-adress-left"><h2 class="contact-title">Реквизиты</h2><ul class="contact-adress-left-ul"><li><strong>ООО «Роял Вуд»</strong></li><li><strong>ОГРН:</strong> 1145074007528</li><li><strong>ИНН/КПП:</strong> 5036141396/503601001</li></ul></div><h2 class="main-title"><span>Схема проезда к нам:</span></h2></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/ContactAdress.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContactAdress = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const ContactSteps_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  props: {
    stepData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Popup
  },
  data() {
    return { isVisible: false };
  },
  methods: {
    closePopup() {
      this.isVisible = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_1;
  const _component_Popup = resolveComponent("Popup");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-step" }, _attrs))}><div class="contact-step-flex">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: `contacts/${$props.stepData.img}`,
    alt: $props.stepData.img,
    onClick: ($event) => $data.isVisible = !$data.isVisible,
    style: { "width": "100%", "height": "500px", "object-fit": "cover" }
  }, null, _parent));
  if ($data.isVisible) {
    _push(ssrRenderComponent(_component_Popup, { onClosePopup: $options.closePopup }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_nuxt_img, {
            src: `contacts/${$props.stepData.img}`,
            alt: $props.stepData.img,
            class: "popup-img",
            onClick: ($event) => $data.isVisible = !$data.isVisible
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_nuxt_img, {
              src: `contacts/${$props.stepData.img}`,
              alt: $props.stepData.img,
              class: "popup-img",
              onClick: withModifiers(($event) => $data.isVisible = !$data.isVisible, ["prevent"])
            }, null, 8, ["src", "alt", "onClick"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="contact-step-title">${ssrInterpolate($props.stepData.title)}</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/ContactSteps.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactSteps = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  data() {
    return {
      steps: [
        {
          title: "Заезд с Комсомольской улицы ",
          img: "step1-1.jpg"
        },
        {
          title: "Заезд с Большой Серпуховской улицы ",
          img: "step2-1.jpg"
        }
        // {
        //     title: "Шаг 1 - Expostroy, павион 3. ",
        //     img: "step1.jpg",
        // },
        // {
        //     title: "Шаг 2 - Пройдите прямо по Галлерее. ",
        //     img: "step2.jpg",
        // },
        // {
        //     title: "Шаг 3 - Второй поворот направо. ",
        //     img: "step3.jpg",
        // },
        // {
        //     title: "Шаг 4 - Экспозиция Мебельной Мастерской Royal Wood.",
        //     img: "step4.jpg",
        // },
      ]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | Контакты компании Royal-Wood | Изготовление мебели по размерам из массива дерева под заказ"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      _push(ssrRenderComponent(Contacts, null, null, _parent));
      _push(ssrRenderComponent(ContactAdress, null, null, _parent));
      _push(`<div class="contact-steps"><!--[-->`);
      ssrRenderList(_ctx.steps, (item) => {
        _push(ssrRenderComponent(ContactSteps, {
          key: item.title,
          "step-data": item
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contacts-c90003f0.js.map
