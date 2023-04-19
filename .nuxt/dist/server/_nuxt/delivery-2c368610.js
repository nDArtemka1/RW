import "./index-e12b288f.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { S as Stages } from "./Stages-60bf8bd6.js";
import { u as useHead } from "../server.mjs";
import "unhead";
import "./nuxt-img-9ef5105d.js";
import "destr";
import "devalue";
import "hookable";
import "h3";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "@fortawesome/free-solid-svg-icons";
const Delivery_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Delivery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "delivery" }, _attrs))}><h2 class="main-title"><span>Доставка и Оплата</span></h2><div class="delivery-description"><p class="delivery-title"> Мы предлагаем только самые выгодные условия. Позвоните нам и получите консультацию по оптимальному способу доставки и оплаты. </p><ul><li>1 - Доставка по Москве - 3 000 руб</li><li> 2 - Доставка по Московской области - от 4 000 до 10 000 руб (зависит от расстояния от МКАД) </li><li> 3 - Доставка по регионам РФ - стоимость оговаривается индивидуально </li><li> 4 - Отправка по России транспортными компаниями - оплачиваются только услуги транспортной компании </li></ul><p class="delivery-title"> Мы принимаем оплату следующими способами: </p><ul><li>1 - Безналичный расчет</li><li>2 - Наличные в нашем офисе</li></ul></div><h2 class="main-title"><span>Как осуществить заказ в нашей мастерской:</span></h2>`);
      _push(ssrRenderComponent(Stages, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Delivery/Delivery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Delivery = _sfc_main$1;
const _sfc_main = {
  __name: "delivery",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | Доставка и Оплата | Изготовление мебели по размерам из массива дерева под заказ"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      _push(ssrRenderComponent(Delivery, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/delivery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=delivery-2c368610.js.map
