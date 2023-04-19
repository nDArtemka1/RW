import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import "./index-e12b288f.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import "ufo";
import "hookable";
import "destr";
import "devalue";
import "h3";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "defu";
import "@fortawesome/free-solid-svg-icons";
const index_vue_vue_type_style_index_0_scoped_c6b8bc89_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | Каталог современной деревянной мебели на заказ в Москве | Изготовление мебели по размерам из массива дерева под заказ"
    });
    const catalogItems = [
      {
        title: "Кухни",
        categoryLink: "kitchens/modern",
        img: "kitchens.jpg"
      },
      {
        title: "Шкафы ",
        categoryLink: "wardrobes/modern",
        img: "wardrobes.jpg"
      },
      {
        title: "Двери",
        categoryLink: "doors/modern",
        img: "doors.jpg"
      }
    ];
    const OtherCatalogItems = [
      {
        title: "Классическая мебель",
        categoryLink: "classic",
        img: "furniture.jpg"
      },
      {
        title: "Дубовая мебель",
        categoryLink: "oak-furniture",
        img: "furniture.jpg"
      },
      {
        title: "Столы",
        categoryLink: "tables",
        img: "tables.jpg"
      },
      {
        title: "Деревянные лестницы",
        categoryLink: "wooden-stairs",
        img: "stairs.jpg"
      },
      {
        title: "Камины",
        categoryLink: "fireplaces",
        img: "fireplaces.jpg"
      },
      {
        title: "Экраны радиаторов",
        categoryLink: "radiators",
        img: "radiators.jpg"
      },
      {
        title: "Интерьеры из дерева ",
        categoryLink: "interiors",
        img: "interiors.jpg"
      },
      {
        title: "Другие изделия",
        categoryLink: "other-products",
        img: "other-products.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "catalog container" }, _attrs))} data-v-c6b8bc89><h1 class="main-title" data-v-c6b8bc89><span data-v-c6b8bc89>Современная деревянная мебель от Royal Wood</span></h1><div class="catalog-categories-items" data-v-c6b8bc89><!--[-->`);
      ssrRenderList(catalogItems, (item) => {
        _push(`<div class="catalog-categories-item" data-v-c6b8bc89><div class="catalog-categories-item_img" data-v-c6b8bc89>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="catalog-categories-item_img-a" data-v-c6b8bc89${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `catalog/${item.img}`,
                alt: item.img
              }, null, _parent2, _scopeId));
              _push2(`<div class="overlay" data-v-c6b8bc89${_scopeId}><div class="overlay-btn" data-v-c6b8bc89${_scopeId}><span class="underline" data-v-c6b8bc89${_scopeId}>Подробнее</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "catalog-categories-item_img-a" }, [
                  createVNode(_component_nuxt_img, {
                    src: `catalog/${item.img}`,
                    alt: item.img
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
          _: 2
        }, _parent));
        _push(`</div><div class="catalog-categories-item_flex" data-v-c6b8bc89>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="catalog-categories-item_title" data-v-c6b8bc89${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
            } else {
              return [
                createVNode("h3", { class: "catalog-categories-item_title" }, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><h2 class="main-title" data-v-c6b8bc89><span data-v-c6b8bc89>Другие разделы</span></h2><div class="catalog-categories-items" data-v-c6b8bc89><!--[-->`);
      ssrRenderList(OtherCatalogItems, (item) => {
        _push(`<div class="catalog-categories-item" data-v-c6b8bc89><div class="catalog-categories-item_img" data-v-c6b8bc89>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="catalog-categories-item_img-a" data-v-c6b8bc89${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `catalog/${item.img}`,
                alt: item.img
              }, null, _parent2, _scopeId));
              _push2(`<div class="overlay" data-v-c6b8bc89${_scopeId}><div class="overlay-btn" data-v-c6b8bc89${_scopeId}><span class="underline" data-v-c6b8bc89${_scopeId}>Подробнее</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "catalog-categories-item_img-a" }, [
                  createVNode(_component_nuxt_img, {
                    src: `catalog/${item.img}`,
                    alt: item.img
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
          _: 2
        }, _parent));
        _push(`</div><div class="catalog-categories-item_flex" data-v-c6b8bc89>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="catalog-categories-item_title" data-v-c6b8bc89${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
            } else {
              return [
                createVNode("h3", { class: "catalog-categories-item_title" }, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/modern/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c6b8bc89"]]);
export {
  index as default
};
//# sourceMappingURL=index-0226456e.js.map
