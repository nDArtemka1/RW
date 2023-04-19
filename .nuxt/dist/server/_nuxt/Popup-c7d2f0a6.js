import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const Popup_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {};
  },
  mounted() {
    const vm = this;
    document.addEventListener("click", function(item) {
      if (item.target === vm.$refs.popup_wrapper) {
        vm.closePopup();
      }
    });
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "popup_wrapper",
    class: "popup_wrapper"
  }, _attrs))}><div class="popup"><div class="popup-header"><div class="popup-header-img">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    class: "popup-header-close",
    src: "close.png",
    alt: "close",
    onClick: $options.closePopup
  }, null, _parent));
  _push(`</div></div><div class="popup-content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/All/Popup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Popup as P
};
//# sourceMappingURL=Popup-c7d2f0a6.js.map
