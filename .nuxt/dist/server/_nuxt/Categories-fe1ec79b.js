import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const Categories_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  props: {
    categoryData: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "catalog-categories-item" }, _attrs))}><div class="catalog-categories-item_img">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: $props.categoryData.categoryPath + $props.categoryData.categoryLink
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="catalog-categories-item_img-a"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_nuxt_img, {
          src: $props.categoryData.categoryPath + $props.categoryData.img,
          alt: $props.categoryData.title
        }, null, _parent2, _scopeId));
        _push2(`<div class="overlay"${_scopeId}><div class="overlay-btn"${_scopeId}><span class="underline"${_scopeId}>Подробнее</span></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "catalog-categories-item_img-a" }, [
            createVNode(_component_nuxt_img, {
              src: $props.categoryData.categoryPath + $props.categoryData.img,
              alt: $props.categoryData.title
            }, null, 8, ["src", "alt"]),
            createVNode("div", { class: "overlay" }, [
              createVNode("div", { class: "overlay-btn" }, [
                createVNode("span", { class: "underline" }, "Подробнее")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="catalog-categories-item_flex">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: $props.categoryData.categoryPath + $props.categoryData.categoryLink
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="catalog-categories-item_title"${_scopeId}>${ssrInterpolate($props.categoryData.title)}</h3>`);
      } else {
        return [
          createVNode("h3", { class: "catalog-categories-item_title" }, toDisplayString($props.categoryData.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Catalog/Categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Categories = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Categories as C
};
//# sourceMappingURL=Categories-fe1ec79b.js.map
