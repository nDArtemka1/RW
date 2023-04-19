import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<form${ssrRenderAttrs(mergeProps({
    class: "form",
    action: "http://royalw31.beget.tech/sender.php",
    method: "post"
  }, _attrs))}><div class="input-box"><input type="text" class="name" name="name" placeholder="\u0418\u043C\u044F" required></div><div class="input-box"><input type="text" class="phone" name="phone" placeholder="+7 (999) 999 99 99" required></div><div class="input-box"><input type="email" name="email" placeholder="Email"></div><div class="input-box-chekbox"><input type="checkbox" name="checkbox" id="checkbox" checked required><label for="checkbox">\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacity",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}> \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 </span>`);
      } else {
        return [
          createVNode("span", null, " \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</label></div><div class="button"><button type="button" class="send-form">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</button></div><div class="status"></div></form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/All/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Form as F };
//# sourceMappingURL=Form-14163f41.mjs.map
