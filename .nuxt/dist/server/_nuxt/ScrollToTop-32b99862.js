import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const WatsAppBtn_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_nuxt_img = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "https://api.whatsapp.com/send?phone=79637821473",
    target: "_blank"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="animate-pulse2"${_scopeId}><div class="vidualsatun"${_scopeId}><div class="campakesad"${_scopeId}><div class="vebusines"${_scopeId}></div><div class="nigkugas"${_scopeId}><i${_scopeId}>`);
        _push2(ssrRenderComponent(_component_nuxt_img, {
          src: "iconwhatsapp.png",
          alt: "iconwhatsapp"
        }, null, _parent2, _scopeId));
        _push2(`</i></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "animate-pulse2" }, [
            createVNode("div", { class: "vidualsatun" }, [
              createVNode("div", { class: "campakesad" }, [
                createVNode("div", { class: "vebusines" }),
                createVNode("div", { class: "nigkugas" }, [
                  createVNode("i", null, [
                    createVNode(_component_nuxt_img, {
                      src: "iconwhatsapp.png",
                      alt: "iconwhatsapp"
                    })
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/All/WatsAppBtn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WatsAppBtn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const ScrollToTop_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "scrollUp",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "scroll-to-top" }, _attrs))}><div class="scroll-to-top-svg"><svg xmlns="http://www.w3.org/2000/svg" class="scrollup-svg-icon" width="32" height="32" viewBox="0 0 18 28"><path d="M16.8 20.5c0 0.1-0.1 0.3-0.2 0.4l-0.8 0.8c-0.1 0.1-0.2 0.2-0.4 0.2-0.1 0-0.3-0.1-0.4-0.2l-6.1-6.1-6.1 6.1c-0.1 0.1-0.2 0.2-0.4 0.2s-0.3-0.1-0.4-0.2l-0.8-0.8c-0.1-0.1-0.2-0.2-0.2-0.4s0.1-0.3 0.2-0.4l7.3-7.3c0.1-0.1 0.2-0.2 0.4-0.2s0.3 0.1 0.4 0.2l7.3 7.3c0.1 0.1 0.2 0.2 0.2 0.4zM16.8 14.5c0 0.1-0.1 0.3-0.2 0.4l-0.8 0.8c-0.1 0.1-0.2 0.2-0.4 0.2-0.1 0-0.3-0.1-0.4-0.2l-6.1-6.1-6.1 6.1c-0.1 0.1-0.2 0.2-0.4 0.2s-0.3-0.1-0.4-0.2l-0.8-0.8c-0.1-0.1-0.2-0.2-0.2-0.4s0.1-0.3 0.2-0.4l7.3-7.3c0.1-0.1 0.2-0.2 0.4-0.2s0.3 0.1 0.4 0.2l7.3 7.3c0.1 0.1 0.2 0.2 0.2 0.4z"></path></svg></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/All/ScrollToTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ScrollToTop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ScrollToTop as S,
  WatsAppBtn as W
};
//# sourceMappingURL=ScrollToTop-32b99862.js.map
