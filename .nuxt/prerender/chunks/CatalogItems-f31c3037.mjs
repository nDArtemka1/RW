import { _ as __nuxt_component_1 } from './nuxt-img-9ef5105d.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode, ref, openBlock, createBlock, Fragment, renderList } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { Swiper, SwiperSlide } from 'file://D:/projects/royal-wood/node_modules/swiper/vue/swiper-vue.js';
import { Zoom, Thumbs, FreeMode, Navigation, Pagination, Grid } from 'file://D:/projects/royal-wood/node_modules/swiper/swiper.esm.js';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { P as Popup } from './Popup-c7d2f0a6.mjs';
import { F as Form } from './Form-14163f41.mjs';

const _sfc_main$2 = {
  props: {
    catalogData: {
      type: Object,
      default() {
        return {};
      }
    },
    catalogDataImg: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      Zoom,
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      FreeMode,
      Navigation,
      Pagination,
      Grid
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: [$setup.Thumbs, $setup.Navigation, $setup.Pagination, $setup.Zoom],
    thumbs: { swiper: $setup.thumbsSwiper },
    spaceBetween: 20,
    navigation: true,
    zoom: true,
    class: "mySwiperTop",
    pagination: {
      dynamicBullets: true,
      clickable: true
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      321: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.catalogDataImg, (img) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: img }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_nuxt_img, {
                  src: $props.catalogData.catalogPathImg + img,
                  alt: $props.catalogData.title
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_nuxt_img, {
                    src: $props.catalogData.catalogPathImg + img,
                    alt: $props.catalogData.title
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.catalogDataImg, (img) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: img }, {
              default: withCtx(() => [
                createVNode(_component_nuxt_img, {
                  src: $props.catalogData.catalogPathImg + img,
                  alt: $props.catalogData.title
                }, null, 8, ["src", "alt"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_swiper, {
    modules: [$setup.Thumbs],
    onSwiper: $setup.setThumbsSwiper,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
    class: "mySwiperBottom",
    spaceBetween: 10
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.catalogDataImg, (img) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: img }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_nuxt_img, {
                  src: $props.catalogData.catalogPathImg + img,
                  alt: $props.catalogData.title
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_nuxt_img, {
                    src: $props.catalogData.catalogPathImg + img,
                    alt: $props.catalogData.title
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.catalogDataImg, (img) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: img }, {
              default: withCtx(() => [
                createVNode(_component_nuxt_img, {
                  src: $props.catalogData.catalogPathImg + img,
                  alt: $props.catalogData.title
                }, null, 8, ["src", "alt"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Catalog/CatalogItemInfoSwiper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: {
    catalogData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Popup,
    Form,
    CatalogItemInfoSwiper: __nuxt_component_0$1
  },
  data() {
    return {
      isVisible: false,
      showItemInfo: false
    };
  },
  methods: {
    closePopup() {
      this.isVisible = false;
      this.showItemInfo = false;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Popup = resolveComponent("Popup");
  const _component_Form = resolveComponent("Form");
  const _component_CatalogItemInfoSwiper = __nuxt_component_0$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Popup, {
    style: $data.isVisible ? null : { display: "none" },
    onClosePopup: $options.closePopup
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popup-form"${_scopeId}><h3 class="popup-form-title"${_scopeId}>\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441!</h3><p class="popup-form-description"${_scopeId}> \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0432\u0441\u0435\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C - \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E! </p>`);
        _push2(ssrRenderComponent(_component_Form, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-form" }, [
            createVNode("h3", { class: "popup-form-title" }, "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441!"),
            createVNode("p", { class: "popup-form-description" }, " \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0432\u0441\u0435\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C - \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E! "),
            createVNode(_component_Form)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="catalog-item-info"><div class="catalog-item-info_img">`);
  _push(ssrRenderComponent(_component_CatalogItemInfoSwiper, {
    catalogData: $props.catalogData,
    catalogDataImg: $props.catalogData.catalogImgs
  }, null, _parent));
  _push(`</div><div class="catalog-item-info-desription"><div class="catalog-item-info-desription-p"><p class="catalog-item-info_p"><strong>${ssrInterpolate($props.catalogData.title)}</strong></p><div class="catalog-item-info_p-materials">${$props.catalogData.materials}</div><div class="catalog-item-info_p-materials">${$props.catalogData.description}</div></div><div class="catalog-item-info_button-wrap"><div class="catalog-item-info_button"><span> \u0423\u0437\u043D\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C </span></div></div></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Catalog/CatalogItemInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    catalogData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Popup,
    Form,
    CatalogItemInfo: __nuxt_component_0
  },
  data() {
    return {
      isVisible: false,
      showItemInfo: false,
      overflowBody: false
    };
  },
  methods: {
    closePopup() {
      this.isVisible = false;
      this.showItemInfo = false;
      this.overflowBody = false;
      document.body.classList.remove("body-overflow");
    },
    showModal() {
      this.overflowBody = true;
      document.body.classList.add("body-overflow");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Popup = resolveComponent("Popup");
  const _component_Form = resolveComponent("Form");
  const _component_CatalogItemInfo = __nuxt_component_0;
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Popup, {
    style: $data.isVisible ? null : { display: "none" },
    onClosePopup: $options.closePopup
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popup-form"${_scopeId}><h3 class="popup-form-title"${_scopeId}>\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441!</h3><p class="popup-form-description"${_scopeId}> \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0432\u0441\u0435\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C - \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E! </p>`);
        _push2(ssrRenderComponent(_component_Form, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-form" }, [
            createVNode("h3", { class: "popup-form-title" }, "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441!"),
            createVNode("p", { class: "popup-form-description" }, " \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0432\u0441\u0435\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C - \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E! "),
            createVNode(_component_Form)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Popup, {
    style: $data.showItemInfo ? null : { display: "none" },
    onClosePopup: $options.closePopup
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popup-item-info"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_CatalogItemInfo, { catalogData: $props.catalogData }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-item-info" }, [
            createVNode(_component_CatalogItemInfo, { catalogData: $props.catalogData }, null, 8, ["catalogData"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="catalog-item"><div class="catalog-item_img"><div class="catalog-item_img-a">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: $props.catalogData.catalogPathImg + $props.catalogData.img,
    alt: $props.catalogData.title
  }, null, _parent));
  _push(`<div class="overlay"><div class="overlay-btn"><span class="underline">\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440</span></div></div></div></div><div class="catalog-item_flex"><div class="catalog-item_flex-p"><p class="catalog-item_p"><strong>${ssrInterpolate($props.catalogData.title)}</strong></p></div></div><div class="catalog-item_button-wrap"><div class="catalog-item_button"><span> \u0423\u0437\u043D\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C </span></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Catalog/CatalogItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CatalogItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CatalogItems as C };
//# sourceMappingURL=CatalogItems-f31c3037.mjs.map
