import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const Form_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<form${ssrRenderAttrs(mergeProps({
    class: "form",
    action: "http://royalw31.beget.tech/sender.php",
    method: "post"
  }, _attrs))}><div class="input-box"><input type="text" class="name" name="name" placeholder="Имя" required></div><div class="input-box"><input type="text" class="phone" name="phone" placeholder="+7 (999) 999 99 99" required></div><div class="input-box"><input type="email" name="email" placeholder="Email"></div><div class="input-box-chekbox"><input type="checkbox" name="checkbox" id="checkbox" checked required><label for="checkbox">Согласие на обработку `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacity",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}> персональных данных </span>`);
      } else {
        return [
          createVNode("span", null, " персональных данных ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</label></div><div class="button"><button type="button" class="send-form">Отправить заявку</button></div><div class="status"></div></form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/All/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Form as F
};
//# sourceMappingURL=Form-14163f41.js.map
