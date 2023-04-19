import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import "./index-e12b288f.js";
import { mergeProps, useSSRContext, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
const CatalogInfo_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "catalog-info" }, _attrs))}><h1 class="main-title"><span>Деревянная мебель каталог от Royal Wood</span></h1><p class="main-title-description"> Мы изготавливаем деревянную мебель в Москве с 2003 года. </p><p class="catalog-info-description"> Цена авторской мебели по индивидуальным заказам складывается из таких составляющих: </p><ul class="catalog-info-ul" type="disc"><li class="catalog-info-li"> Стоимость выбранного материала и комплектующих; </li><li class="catalog-info-li">Размеры изделий, их перечень;</li><li class="catalog-info-li">Сложность проекта;</li><li class="catalog-info-li">Наличие элементов декора.</li></ul><p class="catalog-info-p"> При составлении сметы учитывается проведение покраски, доставки, монтажа и доводки мебели. Отдельно просчитывается стоимость ручек, изготовление столешниц и наличие встраиваемой бытовой техники. </p><p class="catalog-info-p"> Выезд мастера для проведения замеров осуществляется бесплатно. </p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Catalog/CatalogInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CatalogInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const index_vue_vue_type_style_index_0_scoped_59638628_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | Каталог деревянной мебели на заказ в Москве | Изготовление мебели по размерам из массива дерева под заказ"
    });
    const catalogItems = [
      // {
      //     title: "Классическая мебель",
      //     categoryLink: "classic",
      //     img: "furniture.jpg",
      // },
      // {
      //     title: "Современная мебель",
      //     categoryLink: "modern",
      //     img: "furniture.jpg",
      // },
      {
        title: "Кухни",
        categoryLink: "kitchens",
        img: "kitchens.jpg"
      },
      {
        title: "Двери",
        categoryLink: "doors",
        img: "doors.jpg"
      },
      {
        title: "Шкафы ",
        categoryLink: "wardrobes",
        img: "wardrobes.jpg"
      },
      {
        title: "Гардеробные",
        categoryLink: "dressing-rooms",
        img: "furniture.jpg"
      },
      {
        title: "Деревянные лестницы",
        categoryLink: "wooden-stairs",
        img: "stairs.jpg"
      },
      {
        title: "Панели",
        categoryLink: "radiators",
        img: "radiators.jpg"
      },
      {
        title: "Мебель для ванны",
        categoryLink: "interiors",
        img: "fireplaces.jpg"
      },
      {
        title: "Мебель для интерьера",
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "catalog container" }, _attrs))} data-v-59638628>`);
      _push(ssrRenderComponent(CatalogInfo, null, null, _parent));
      _push(`<div class="catalog-categories-items" data-v-59638628><!--[-->`);
      ssrRenderList(catalogItems, (item) => {
        _push(`<div class="catalog-categories-item" data-v-59638628><div class="catalog-categories-item_img" data-v-59638628>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="catalog-categories-item_img-a" data-v-59638628${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `catalog/${item.img}`,
                alt: item.img
              }, null, _parent2, _scopeId));
              _push2(`<div class="overlay" data-v-59638628${_scopeId}><div class="overlay-btn" data-v-59638628${_scopeId}><span class="underline" data-v-59638628${_scopeId}>Подробнее</span></div></div></div>`);
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
        _push(`</div><div class="catalog-categories-item_flex" data-v-59638628>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: /catalog/ + item.categoryLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="catalog-categories-item_title" data-v-59638628${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59638628"]]);
export {
  index as default
};
//# sourceMappingURL=index-60b38de5.js.map
