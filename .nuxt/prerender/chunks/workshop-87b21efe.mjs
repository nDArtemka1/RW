import { mergeProps, useSSRContext } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { u as useHead, _ as _export_sfc } from './server.mjs';
import 'file://D:/projects/royal-wood/node_modules/ofetch/dist/node.mjs';
import 'file://D:/projects/royal-wood/node_modules/hookable/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unctx/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unhead/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/projects/royal-wood/node_modules/h3/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/ufo/dist/index.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "workshop" }, _attrs))}><h2 class="main-title">\u0421\u0442\u043E\u043B\u044F\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F</h2></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Workshop/Workshop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Workshop = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "workshop",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | \u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 | \u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u0435\u0431\u0435\u043B\u0438 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      _push(ssrRenderComponent(Workshop, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/workshop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=workshop-87b21efe.mjs.map
