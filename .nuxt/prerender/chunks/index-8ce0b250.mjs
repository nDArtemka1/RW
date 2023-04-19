import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-9ef5105d.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useHead } from './server.mjs';
import 'file://D:/projects/royal-wood/node_modules/ufo/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/h3/dist/index.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | \u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 | \u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u0435\u0431\u0435\u043B\u0438 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437"
    });
    const catalogItems = [
      {
        title: "\u041A\u0443\u0445\u043D\u0438",
        categoryLink: "kitchens/classic",
        img: "kitchens.jpg"
      },
      {
        title: "\u0428\u043A\u0430\u0444\u044B ",
        categoryLink: "wardrobes/classic",
        img: "wardrobes.jpg"
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438",
        categoryLink: "doors/classic",
        img: "doors.jpg"
      }
    ];
    const OtherCatalogItems = [
      {
        title: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C",
        categoryLink: "modern",
        img: "furniture.jpg"
      },
      {
        title: "\u0414\u0443\u0431\u043E\u0432\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C",
        categoryLink: "oak-furniture",
        img: "furniture.jpg"
      },
      {
        title: "\u0421\u0442\u043E\u043B\u044B",
        categoryLink: "tables",
        img: "tables.jpg"
      },
      {
        title: "\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0435 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u044B",
        categoryLink: "wooden-stairs",
        img: "stairs.jpg"
      },
      {
        title: "\u041A\u0430\u043C\u0438\u043D\u044B",
        categoryLink: "fireplaces",
        img: "fireplaces.jpg"
      },
      {
        title: "\u042D\u043A\u0440\u0430\u043D\u044B \u0440\u0430\u0434\u0438\u0430\u0442\u043E\u0440\u043E\u0432",
        categoryLink: "radiators",
        img: "radiators.jpg"
      },
      {
        title: "\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u044B \u0438\u0437 \u0434\u0435\u0440\u0435\u0432\u0430 ",
        categoryLink: "interiors",
        img: "interiors.jpg"
      },
      {
        title: "\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F",
        categoryLink: "other-products",
        img: "other-products.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "catalog container" }, _attrs))} data-v-de69040d><h1 class="main-title" data-v-de69040d><span data-v-de69040d>\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C \u043E\u0442 Royal Wood</span></h1><div class="catalog-categories-items" data-v-de69040d><!--[-->`);
      ssrRenderList(catalogItems, (item) => {
        _push(`<div class="catalog-categories-item" data-v-de69040d><div class="catalog-categories-item_img" data-v-de69040d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="catalog-categories-item_img-a" data-v-de69040d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `catalog/${item.img}`,
                alt: item.img
              }, null, _parent2, _scopeId));
              _push2(`<div class="overlay" data-v-de69040d${_scopeId}><div class="overlay-btn" data-v-de69040d${_scopeId}><span class="underline" data-v-de69040d${_scopeId}>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "catalog-categories-item_img-a" }, [
                  createVNode(_component_nuxt_img, {
                    src: `catalog/${item.img}`,
                    alt: item.img
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "overlay" }, [
                    createVNode("div", { class: "overlay-btn" }, [
                      createVNode("span", { class: "underline" }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="catalog-categories-item_flex" data-v-de69040d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="catalog-categories-item_title" data-v-de69040d${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
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
      _push(`<!--]--></div><h2 class="main-title" data-v-de69040d><span data-v-de69040d>\u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B</span></h2><div class="catalog-categories-items" data-v-de69040d><!--[-->`);
      ssrRenderList(OtherCatalogItems, (item) => {
        _push(`<div class="catalog-categories-item" data-v-de69040d><div class="catalog-categories-item_img" data-v-de69040d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="catalog-categories-item_img-a" data-v-de69040d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `catalog/${item.img}`,
                alt: item.img
              }, null, _parent2, _scopeId));
              _push2(`<div class="overlay" data-v-de69040d${_scopeId}><div class="overlay-btn" data-v-de69040d${_scopeId}><span class="underline" data-v-de69040d${_scopeId}>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "catalog-categories-item_img-a" }, [
                  createVNode(_component_nuxt_img, {
                    src: `catalog/${item.img}`,
                    alt: item.img
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "overlay" }, [
                    createVNode("div", { class: "overlay-btn" }, [
                      createVNode("span", { class: "underline" }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="catalog-categories-item_flex" data-v-de69040d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="catalog-categories-item_title" data-v-de69040d${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/furniture-for-the-nursery/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de69040d"]]);

export { index as default };
//# sourceMappingURL=index-8ce0b250.mjs.map
