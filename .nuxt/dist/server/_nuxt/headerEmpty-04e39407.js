import { ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { F as Footer } from "./Footer-923df61a.js";
import { W as WatsAppBtn, S as ScrollToTop } from "./ScrollToTop-32b99862.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./nuxt-img-9ef5105d.js";
import "./index-e12b288f.js";
import "unhead";
import "destr";
import "devalue";
import "h3";
import "./Form-14163f41.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "defu";
import "@fortawesome/free-solid-svg-icons";
const headerEmpty_vue_vue_type_style_index_0_scoped_6bd84202_lang = "";
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
export {
  headerEmpty as default
};
//# sourceMappingURL=headerEmpty-04e39407.js.map
