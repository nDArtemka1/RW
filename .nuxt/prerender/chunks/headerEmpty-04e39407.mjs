import { ssrRenderSlot, ssrRenderComponent } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { F as Footer } from './Footer-923df61a.mjs';
import { W as WatsAppBtn, S as ScrollToTop } from './ScrollToTop-32b99862.mjs';
import { useSSRContext } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-6bdec6f5.mjs';
import 'file://D:/projects/royal-wood/node_modules/ufo/dist/index.mjs';
import './nuxt-img-9ef5105d.mjs';
import 'file://D:/projects/royal-wood/node_modules/h3/dist/index.mjs';
import './Form-14163f41.mjs';
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
  __name: "headerEmpty",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="container" data-v-6bd84202></div><div data-v-6bd84202>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(WatsAppBtn, null, null, _parent));
      _push(ssrRenderComponent(ScrollToTop, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headerEmpty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const headerEmpty = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6bd84202"]]);

export { headerEmpty as default };
//# sourceMappingURL=headerEmpty-04e39407.mjs.map
