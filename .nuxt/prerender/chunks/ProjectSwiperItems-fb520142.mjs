import { _ as __nuxt_component_1 } from './nuxt-img-9ef5105d.mjs';
import { Swiper, SwiperSlide } from 'file://D:/projects/royal-wood/node_modules/swiper/vue/swiper-vue.js';
import { FreeMode, Navigation, Pagination, Grid } from 'file://D:/projects/royal-wood/node_modules/swiper/swiper.esm.js';
import { useSSRContext, resolveComponent, withCtx, createVNode, mergeProps, openBlock, createBlock, Fragment, renderList } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderList } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { P as Popup } from './Popup-c7d2f0a6.mjs';
import { F as Form } from './Form-14163f41.mjs';

const _sfc_main$2 = {
  props: {
    activeUser: {
      type: Object,
      default() {
        return {};
      }
    },
    activeUserImg: {
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
    return {
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
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    modules: [$setup.Navigation, $setup.Pagination],
    navigation: true,
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
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.activeUserImg, (img) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: img,
            style: { "width": "100%" }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_nuxt_img, {
                  src: $props.activeUser.catalogPathImg + img,
                  alt: $props.activeUser.catalogLink
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_nuxt_img, {
                    src: $props.activeUser.catalogPathImg + img,
                    alt: $props.activeUser.catalogLink
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
          (openBlock(true), createBlock(Fragment, null, renderList($props.activeUserImg, (img) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: img,
              style: { "width": "100%" }
            }, {
              default: withCtx(() => [
                createVNode(_component_nuxt_img, {
                  src: $props.activeUser.catalogPathImg + img,
                  alt: $props.activeUser.catalogLink
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
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectSwiper/ProjectSwiperItemInfoSwiper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-8a901008"]]);
const _sfc_main$1 = {
  props: {
    activeUser: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Popup,
    Form,
    ProjectSwiperItemInfoSwiper: __nuxt_component_0$2
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
  const _component_ProjectSwiperItemInfoSwiper = __nuxt_component_0$2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Popup, {
    style: $data.isVisible ? null : { display: "none" },
    onClosePopup: $options.closePopup
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popup-form" data-v-1bee8ea6${_scopeId}><h3 class="popup-form-title" data-v-1bee8ea6${_scopeId}>\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441!</h3><p class="popup-form-description" data-v-1bee8ea6${_scopeId}> \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0432\u0441\u0435\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C - \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E! </p>`);
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
  _push(`<div class="project-item-info" data-v-1bee8ea6><div class="project-item-info_img" data-v-1bee8ea6>`);
  _push(ssrRenderComponent(_component_ProjectSwiperItemInfoSwiper, {
    activeUser: $props.activeUser,
    activeUserImg: $props.activeUser.catalogImgs
  }, null, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectSwiper/ProjectSwiperItemInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1bee8ea6"]]);
const _sfc_main = {
  props: {
    catalogItems: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Popup,
    Form,
    ProjectSwiperItemInfo: __nuxt_component_0$1
  },
  data() {
    return {
      isVisible: false,
      showItemInfo: false,
      overflowBody: false,
      indexActiveUser: 0
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
  },
  computed: {
    activeUser() {
      return this.catalogItems[this.indexActiveUser];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Popup = resolveComponent("Popup");
  const _component_Form = resolveComponent("Form");
  const _component_ProjectSwiperItemInfo = __nuxt_component_0$1;
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
        _push2(`<div class="popup-item-info" style="${ssrRenderStyle({ "width": "100%", "height": "100%" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ProjectSwiperItemInfo, { activeUser: $options.activeUser }, null, _parent2, _scopeId));
        _push2(`<button class="swiper-btn-prev"${ssrIncludeBooleanAttr($data.indexActiveUser <= 0) ? " disabled" : ""}${_scopeId}></button><button class="swiper-btn-next"${ssrIncludeBooleanAttr($data.indexActiveUser === $props.catalogItems.length - 1) ? " disabled" : ""}${_scopeId}></button></div>`);
      } else {
        return [
          createVNode("div", {
            class: "popup-item-info",
            style: { "width": "100%", "height": "100%" }
          }, [
            createVNode(_component_ProjectSwiperItemInfo, { activeUser: $options.activeUser }, null, 8, ["activeUser"]),
            createVNode("button", {
              class: "swiper-btn-prev",
              onClick: ($event) => $data.indexActiveUser--,
              disabled: $data.indexActiveUser <= 0
            }, null, 8, ["onClick", "disabled"]),
            createVNode("button", {
              class: "swiper-btn-next",
              onClick: ($event) => $data.indexActiveUser++,
              disabled: $data.indexActiveUser === $props.catalogItems.length - 1
            }, null, 8, ["onClick", "disabled"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--[-->`);
  ssrRenderList($props.catalogItems, (item, index) => {
    _push(`<div class="main-project-item"><div class="main-project-item_img"><div class="main-project-item_img-a">`);
    _push(ssrRenderComponent(_component_nuxt_img, {
      src: item.catalogPathImg + item.img,
      alt: item.catalogLink
    }, null, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectSwiper/ProjectSwiperItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ProjectSwiperItems-fb520142.mjs.map
