import { p as publicAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-9ef5105d.mjs';
import { Swiper, SwiperSlide } from 'file://D:/projects/royal-wood/node_modules/swiper/vue/swiper-vue.js';
import { FreeMode, Navigation } from 'file://D:/projects/royal-wood/node_modules/swiper/swiper.esm.js';
import { useSSRContext, withCtx, createVNode, ref, mergeProps, toDisplayString, resolveComponent, openBlock, createBlock, Fragment, renderList, withModifiers } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { u as useHead, _ as _export_sfc } from './server.mjs';
import { M as MainMobileMenu, N as NavBarFix } from './NavBarFix-14e33b30.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-6bdec6f5.mjs';
import { P as Popup } from './Popup-c7d2f0a6.mjs';
import { F as Form } from './Form-14163f41.mjs';
import { P as Projects } from './Projects-e668b6ed.mjs';
import { S as Stages } from './Stages-60bf8bd6.mjs';
import { W as WatsAppBtn, S as ScrollToTop } from './ScrollToTop-32b99862.mjs';
import 'file://D:/projects/royal-wood/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/projects/royal-wood/node_modules/h3/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/ufo/dist/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://D:/projects/royal-wood/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/projects/royal-wood/node_modules/ofetch/dist/node.mjs';
import 'file://D:/projects/royal-wood/node_modules/destr/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/hookable/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/scule/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/defu/dist/defu.mjs';
import 'file://D:/projects/royal-wood/node_modules/ohash/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unstorage/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/projects/royal-wood/node_modules/radix3/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unctx/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/unhead/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/projects/royal-wood/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';

const _sfc_main$d = {
  props: {
    itemData: {
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
      Navigation
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_img = __nuxt_component_1;
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    modules: [$setup.Navigation],
    spaceBetween: 25,
    navigation: true,
    class: "mySwiperRealize",
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      321: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      426: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 25
      }
    }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.itemData, (slide) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: slide.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_nuxt_img, {
                  src: `main/${slide.img}`,
                  alt: slide.img
                }, null, _parent3, _scopeId2));
                _push3(`<p${_scopeId2}>${ssrInterpolate(slide.description)}</p>`);
              } else {
                return [
                  createVNode(_component_nuxt_img, {
                    src: `main/${slide.img}`,
                    alt: slide.img
                  }, null, 8, ["src", "alt"]),
                  createVNode("p", null, toDisplayString(slide.description), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.itemData, (slide) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: slide.id
            }, {
              default: withCtx(() => [
                createVNode(_component_nuxt_img, {
                  src: `main/${slide.img}`,
                  alt: slide.img
                }, null, 8, ["src", "alt"]),
                createVNode("p", null, toDisplayString(slide.description), 1)
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainSwiper.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$c = {
  components: {
    MainSwiper: __nuxt_component_0$2
  },
  data() {
    return {
      sliderItems: [
        {
          id: "1",
          img: "1viz.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "1-1",
          img: "1foto.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "2",
          img: "2v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "2-1",
          img: "2f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "3",
          img: "3v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "3-1",
          img: "3f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "4",
          img: "4v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "4-1",
          img: "4f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "5",
          img: "5v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "5-1",
          img: "5f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "7",
          img: "7v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "7-1",
          img: "7f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "11",
          img: "11v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "11-1",
          img: "11f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "12",
          img: "12v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "12-1",
          img: "12f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "13",
          img: "13v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "13-1",
          img: "13f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "14",
          img: "14v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "14-1",
          img: "14f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "15",
          img: "15v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "15-1",
          img: "15f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "16",
          img: "16v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "16-1",
          img: "16f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "17",
          img: "17v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "17-1",
          img: "17f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "18",
          img: "18v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "18-1",
          img: "18f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "19",
          img: "19v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "19-1",
          img: "19f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "20",
          img: "20v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "20-1",
          img: "20f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "21",
          img: "21v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "21-1",
          img: "21f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "24",
          img: "24v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "24-1",
          img: "24f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "25",
          img: "25v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "25-1",
          img: "25f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "26",
          img: "26v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "26-1",
          img: "26f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "27",
          img: "27v.jpg",
          description: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        },
        {
          id: "27-1",
          img: "27f.jpg",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"
        }
      ]
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainSwiper = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "realize" }, _attrs))}><div class="container"><div class="realize-flex"><h3 class="main-title"><span> \u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F / \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F</span></h3><p class="realize-flex-description"> \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u0440\u0430\u0437, \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C, \u0438 \u0444\u043E\u0442\u043E \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430. </p></div></div>`);
  _push(ssrRenderComponent(_component_MainSwiper, { itemData: $data.sliderItems }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainRealize.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$b = {
  components: {
    Popup,
    Form
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    showPopupInfo() {
      this.isVisible = true;
    },
    closePopup() {
      this.isVisible = false;
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Popup = resolveComponent("Popup");
  const _component_Form = resolveComponent("Form");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-popup container" }, _attrs))}><h1 class="header-popup-title">\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438</h1><div>`);
  _push(ssrRenderComponent(_component_Popup, {
    style: $data.isVisible ? null : { display: "none" },
    onClosePopup: $options.closePopup
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popup-form"${_scopeId}><h2 class="popup-form-title"${_scopeId}>\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0440\u0430\u0441\u0447\u0435\u0442</h2>`);
        _push2(ssrRenderComponent(_component_Form, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-form" }, [
            createVNode("h2", { class: "popup-form-title" }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0440\u0430\u0441\u0447\u0435\u0442"),
            createVNode(_component_Form)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="container btn"><button class="btn-popup"><span class="underline"> \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0440\u0430\u0441\u0447\u0435\u0442</span></button></div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/HeaderPopup.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const HeaderPopup = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8]]);
const __default__$1 = {
  data() {
    return {
      headLogos: [
        {
          headerLogo: "header-logo-white.png",
          alt: "header-logo-white"
        },
        {
          otherHeaderLogo: "header-logo.png",
          otherAlt: "header-logo"
        }
      ]
    };
  }
};
const _sfc_main$a = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const links = ref([
      { name: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", path: "/" },
      { name: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433", path: "/catalog" },
      { name: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B", path: "/materials" },
      { name: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u041E\u043F\u043B\u0430\u0442\u0430", path: "/delivery" },
      { name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", path: "/contacts" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="color-white"><div class="navbar"><div class="navbar-flex container">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navbar-logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "header-logo-white.png",
              alt: "header-logo-white"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "header-logo-white.png",
                alt: "header-logo-white"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="navbar-menu"><ul class="navbar-menu-ul"><!--[-->`);
      ssrRenderList(links.value, (link) => {
        _push(`<li class="navbar-menu-li">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          exact: "",
          "no-prefetch": "",
          "active-class": "active",
          to: link.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="navbar-menu-span underline"${_scopeId}>${ssrInterpolate(link.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "navbar-menu-span underline" }, toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav><div class="navbar-social"><div class="navbar-social-flex container"><div class="navbar-social-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-social-svg",
        to: "tel:+7 (495) 995-34-73"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "phone-icon.svg",
              alt: "phone-icon",
              class: "navbar-icon-svg"
            }, null, _parent2, _scopeId));
            _push2(`<span class="underline"${_scopeId}>+7 (495) 995-34-73</span>`);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "phone-icon.svg",
                alt: "phone-icon",
                class: "navbar-icon-svg"
              }),
              createVNode("span", { class: "underline" }, "+7 (495) 995-34-73")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-social-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-social-svg",
        to: "mailto:info@royalwood.ru"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "mail-icon.svg",
              alt: "mail-icon",
              class: "navbar-icon-svg"
            }, null, _parent2, _scopeId));
            _push2(`<span class="underline"${_scopeId}>info@royalwood.ru</span>`);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "mail-icon.svg",
                alt: "mail-icon",
                class: "navbar-icon-svg"
              }),
              createVNode("span", { class: "underline" }, "info@royalwood.ru")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-social-item"><div class="navbar-social-svg">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://vk.com/club211531768",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "vk-icon.svg",
              alt: "vk-icon",
              class: "navbar-icon-svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "vk-icon.svg",
                alt: "vk-icon",
                class: "navbar-icon-svg"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://t.me/royal_wood_mebel",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "telegram-icon.svg",
              alt: "telegram-icon",
              class: "navbar-icon-svg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "telegram-icon.svg",
                alt: "telegram-icon",
                class: "navbar-icon-svg"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="underline">\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0441\u044C \u043D\u0430 \u043D\u0430\u0441</span></div></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(NavBarFix, null, null, _parent));
      _push(ssrRenderComponent(HeaderPopup, { class: "color-white" }, null, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Header = _sfc_main$a;
const _sfc_main$9 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-info" }, _attrs))}><div class="main-info-p container"> \u041C\u0435\u0431\u0435\u043B\u044C\u043D\u0430\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F <strong>ROYAL WOOD</strong> \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u0441\u0442\u043E\u043B\u044F\u0440\u043D\u044B\u0445 \u0438\u0437\u0434\u0435\u043B\u0438\u0439 20 \u043B\u0435\u0442. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0435\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B, \u043F\u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0435 \u043A\u0430\u043C\u0435\u0440\u044B, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u043E\u043B\u044F\u0440\u043D\u044B\u0439 \u0446\u0435\u0445. \u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0438 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B. \u041D\u0430\u0448\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0430\u043C\u044B\u043C \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. </div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainInfo.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const MainInfo = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$8 = {
  props: {
    images: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-block-img" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainBlockImg.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const MainBlockImg = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = {
  __name: "MainProduction",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u044B \u0438\u0437 \u0434\u0435\u0440\u0435\u0432\u0430 ",
        a: "/catalog/interiors",
        img: "interiors.jpg"
      },
      {
        title: " \u041A\u0443\u0445\u043D\u0438",
        a: "/catalog/kitchens",
        img: "kitchens.jpg"
      },
      {
        title: "\u0428\u043A\u0430\u0444\u044B ",
        a: "/catalog/wardrobes",
        img: "wardrobes.jpg"
      },
      {
        title: " \u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0435 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u044B",
        a: "/catalog/wooden-stairs",
        img: "stairs.jpg"
      },
      {
        title: " \u0414\u0432\u0435\u0440\u0438",
        a: "/catalog/doors",
        img: "doors.jpg"
      },
      {
        title: "\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F",
        a: "/catalog/other-products",
        img: "other-products.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "production" }, _attrs))}><h2 class="main-title"><span> \u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u043E\u0442 Royal Wood</span></h2><p class="main-title-description"> \u0427\u0442\u043E \u043C\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C: \u0434\u0432\u0435\u0440\u0438, \u043A\u0443\u0445\u043D\u0438, \u043C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0432\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043C\u043D\u0430\u0442, \u0448\u043A\u0430\u0444\u044B, \u0433\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u044B\u0435, \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0435 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u044B, \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F </p><div class="production-center"><div class="production-items"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="production-item"><div class="production-item_img">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "production-item_img-a",
          to: item.a
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `main/${item.img}`,
                alt: item.img
              }, null, _parent2, _scopeId));
              _push2(`<div class="overlay"${_scopeId}><div class="overlay-btn"${_scopeId}><span class="underline"${_scopeId}>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</span></div></div>`);
            } else {
              return [
                createVNode(_component_nuxt_img, {
                  src: `main/${item.img}`,
                  alt: item.img
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "overlay" }, [
                  createVNode("div", { class: "overlay-btn" }, [
                    createVNode("span", { class: "underline" }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="production-item_flex">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.a
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="production-item_title"${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
            } else {
              return [
                createVNode("h3", { class: "production-item_title" }, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="production-view-all">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalog",
        class: "production-view-all_a"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="underline"${_scopeId}>\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433</span>`);
          } else {
            return [
              createVNode("span", { class: "underline" }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainProduction.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const MainProduction = _sfc_main$7;
const _sfc_main$6 = {
  props: {
    itemData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Popup
  },
  data() {
    return { isVisible: false };
  },
  methods: {
    closePopup() {
      this.isVisible = false;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_1;
  const _component_Popup = resolveComponent("Popup");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "advantages-item" }, _attrs))}><div class="advantages-item_img">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    id: "myImg",
    src: `main/${$props.itemData.img}`,
    alt: $props.itemData.img,
    onClick: ($event) => $data.isVisible = !$data.isVisible
  }, null, _parent));
  _push(`</div>`);
  if ($data.isVisible) {
    _push(ssrRenderComponent(_component_Popup, { onClosePopup: $options.closePopup }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="popup-img"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_nuxt_img, {
            src: `main/${$props.itemData.img}`,
            alt: $props.itemData.img,
            onClick: ($event) => $data.isVisible = !$data.isVisible
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", { class: "popup-img" }, [
              createVNode(_component_nuxt_img, {
                src: `main/${$props.itemData.img}`,
                alt: $props.itemData.img,
                onClick: withModifiers(($event) => $data.isVisible = !$data.isVisible, ["prevent"])
              }, null, 8, ["src", "alt", "onClick"])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="advantages-item_flex"><h3 class="advantages-item_title">${ssrInterpolate($props.itemData.title)}</h3><p class="advantages-item_description">${$props.itemData.description}</p></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainAdvantagesItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {
  components: {
    MainAdvantagesItem: __nuxt_component_0
  },
  data() {
    return {
      items: [
        {
          title: "1 - \u041C\u044B \u0438\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0443\u044E \u043C\u0435\u0431\u0435\u043B\u044C \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u043F\u043E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u0430\u0437\u0430\u043C \u0441 2003 \u0433\u043E\u0434\u0430.",
          description: "- <strong>\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E.</strong>	 \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u043E\u0439. <br/> - <strong>\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430.</strong>   \u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u043C\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B. \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u043D\u0430 \u043D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 1 \u0433\u043E\u0434 \u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043C\u0435\u0431\u0435\u043B\u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u0430\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438; <br/> - <strong>\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432.</strong>   \u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438 \u0446\u0435\u043D\u043D\u044B\u0445 \u0438 \u0440\u0435\u0434\u043A\u0438\u0445 \u043F\u043E\u0440\u043E\u0434 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0443\u044E\xA0\u043C\u0435\u0431\u0435\u043B\u044C.",
          img: "advantages-img1.jpg"
        },
        {
          title: "2 - \u041E\u0442 \u044D\u0441\u043A\u0438\u0437\u0430 \u0434\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 ",
          description: "\u041D\u0430\u0448\u0430 \u0441\u0442\u043E\u043B\u044F\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u0435\u0431\u0435\u043B\u0438 \u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u043E\u0432 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438. \u041D\u0430\u0448\u0438 \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u044B\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0442, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0430\u0442 \u043C\u0435\u0431\u0435\u043B\u044C \u043F\u043E\u0434 \u0412\u0430\u0448 \u0434\u0438\u0437\u0430\u0439\u043D \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u043E\u0432\u0435\u0434\u0443\u0442 \u0437\u0430\u043C\u0435\u0440, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0434\u0438\u0437\u0430\u0439\u043D \u043F\u0440\u043E\u0435\u043A\u0442 \u0438 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0441\u043A\u0443\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E. \u041F\u043E\u0441\u043B\u0435 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u043E\u043A\u0440\u0430\u0441\u043A\u0438, \u0431\u0435\u0440\u0435\u0436\u043D\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0438 \u0441\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442 \u043C\u0435\u0431\u0435\u043B\u044C \u0441 \u0443\u0447\u0451\u0442\u043E\u043C \u0432\u0441\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439.",
          img: "advantages-img5.jpg"
        },
        {
          title: "3 - \u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438",
          description: "\u041D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u043A \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u043D\u0430\u0448\u0435\u0439 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439, \u043C\u044B \u0431\u0435\u0440\u0435\u0436\u043D\u043E \u0445\u0440\u0430\u043D\u0438\u043C \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0442\u0440\u0443\u0434\u0430. \u0411\u043E\u043B\u044C\u0448\u0430\u044F  \u0447\u0430\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442, \u0442\u0430\u043A\u0438\u0445 \u043A\u0430\u043A \u0448\u043B\u0438\u0444\u043E\u0432\u043A\u0430 \u0438 \u043F\u043E\u043A\u0440\u0430\u0441\u043A\u0430 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0444\u0438\u0433\u0443\u0440\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432, \u0440\u0435\u0437\u044C\u0431\u0430, \u0440\u043E\u0441\u043F\u0438\u0441\u044C \u043F\u043E \u0434\u0435\u0440\u0435\u0432\u0443, \u043F\u0430\u0442\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0437\u043E\u043B\u043E\u0447\u0435\u043D\u0438\u0435, \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u043F\u043E\u0442\u0430\u043B\u044C\u044E, \u0438\u043D\u043A\u0440\u0443\u0441\u0442\u0430\u0446\u0438\u044F, \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E.  \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043E\u043F\u044B\u0442\u0443 \u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0443 \u043D\u0430\u0448\u0438\u0445 \u043A\u0440\u0430\u0441\u043D\u043E\u0434\u0435\u0440\u0435\u0432\u0449\u0438\u043A\u043E\u0432, \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u043E\u0435 \u0438 \u043F\u043E-\u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u0435 \u0438\u0437 \u0434\u0435\u0440\u0435\u0432\u0430  \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438.",
          img: "advantages-img2.jpg"
        },
        {
          title: "4 - \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
          description: "\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0438 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u043B\u0430\u043A\u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u0443\u044E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E, \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0443\u044E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0432 \u0420\u043E\u0441\u0441\u0438\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u0430\u043C\u0443\u044E \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u0443\u044E \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0443 \u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435 \u0438\u0437 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043D\u0430 \u0440\u044B\u043D\u043A\u0435  . \u0412\u0441\u0435 \u043D\u0430\u0448\u0438 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0441\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \xAB\u0423\u043C\u043D\u044B\u0439 \u0434\u043E\u043C\xBB, \u043F\u043E\u0436\u0430\u0440\u043D\u043E-\u043E\u0445\u0440\u0430\u043D\u043D\u043E\u0439 \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438, \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u043C\u0443 \u0438 \u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443\xA0\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044E.",
          img: "advantages-img3.jpg"
        },
        {
          title: "5 - \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438",
          description: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0435\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u043E\u0442\u0434\u0435\u043B, \u043F\u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0435 \u043A\u0430\u043C\u0435\u0440\u044B ,\u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u043E\u043B\u044F\u0440\u043D\u044B\u0439 \u0446\u0435\u0445 \u043F\u043B\u043E\u0449\u0430\u0434\u044C\u044E \u0431\u043E\u043B\u0435\u0435 1000\u043C2, \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u043D\u044B\u0439 \u043D\u043E\u0432\u0435\u0439\u0448\u0438\u043C \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0444\u0438\u0440\u043C\u044B Griggio, SCM \u0438 \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u043C Altendorf. ",
          img: "advantages-img4.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainAdvantagesItem = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "advantages" }, _attrs))}><h2 class="main-title"><span>\u0412\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043D\u0430\u043C\u0438</span></h2><div class="advantages-items"><!--[-->`);
  ssrRenderList($data.items, (item) => {
    _push(ssrRenderComponent(_component_MainAdvantagesItem, {
      key: item.title,
      "item-data": item
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainAdvantages.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MainAdvantages = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {
  components: {
    Popup,
    Form
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    closePopup() {
      this.isVisible = false;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Popup = resolveComponent("Popup");
  const _component_Form = resolveComponent("Form");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-calc" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Popup, {
    style: $data.isVisible ? null : { display: "none" },
    onClosePopup: $options.closePopup
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popup-form"${_scopeId}><h2 class="popup-form-title"${_scopeId}>\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0437\u0430\u043C\u0435\u0440</h2>`);
        _push2(ssrRenderComponent(_component_Form, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-form" }, [
            createVNode("h2", { class: "popup-form-title" }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0437\u0430\u043C\u0435\u0440"),
            createVNode(_component_Form)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="main-calc-title"><h3>\u0412\u044B\u0437\u0432\u0430\u0442\u044C \u043C\u0430\u0441\u0442\u0435\u0440\u0430 \u043D\u0430 \u0437\u0430\u043C\u0435\u0440</h3></div><div class="btn"><a class="main-calc-btn"><span class="underline"> \u0412\u044B\u0437\u0432\u0430\u0442\u044C \u043C\u0430\u0441\u0442\u0435\u0440\u0430 </span></a></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainCalc.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MainCalc = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + publicAssetsURL("images/main/founder.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "founder" }, _attrs))}><div class="founder-title"><h2 class="main-title"><span>\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</span></h2></div><div class="founder-item"><p class="founder-item-description"> \u0423 \u0438\u0441\u0442\u043E\u043A\u043E\u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0442\u043E\u043B\u044F\u0440\u043D\u043E\u0439 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439 <br><strong>Royal Wood</strong> \u0441\u0442\u043E\u0438\u0442 \u043D\u0430\u0448 \u0431\u0435\u0441\u0441\u043C\u0435\u043D\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u041C\u0430\u0442\u044E\u0445\u0438\u043D \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447, \u0432 2003 \u0433\u043E\u0434\u0443 \u043E\u043A\u043E\u043D\u0447\u0438\u0432\u0448\u0438\u0439 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0438\u0439 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u043B\u0435\u0441\u0430, \u0441 \u044E\u043D\u044B\u0445 \u043B\u0435\u0442 \u0432\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0439 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0434\u0435\u0440\u0435\u0432\u043E\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438. \u0415\u0433\u043E \u0441\u0442\u0440\u0430\u0441\u0442\u044C \u043A \u043B\u044E\u0431\u0438\u043C\u043E\u043C\u0443 \u0434\u0435\u043B\u0443 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u043B\u0430 \u043D\u0430\u0448\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u043A\u043E\u043B\u043E\u0441\u0441\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432, \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u043E \u0432\u0441\u0435\u0439 \u0434\u0443\u0448\u043E\u0439, \u043F\u043E\u0434 \u043E\u0434\u043D\u043E\u0439 \u043E\u0431\u0449\u0435\u0439 \u0438\u0434\u0435\u0435\u0439 - \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u0443 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u0440\u0435\u0434\u0443 \u0434\u043B\u044F \u0436\u0438\u0437\u043D\u0438, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0442\u0435\u043F\u043B\u043E \u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0412\u0430\u043C, \u043D\u043E \u0438 \u0412\u0430\u0448\u0435\u043C\u0443 \u0441\u0435\u0440\u0434\u0446\u0443. </p><div class="founder-item-img"><img${ssrRenderAttr("src", _imports_0)} alt="founder"></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainFounder.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MainFounder = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  components: { Projects },
  data() {
    return {
      projects: [
        {
          img: "emerald.jpg",
          title: "\u0416\u041A \u042D\u043C\u0435\u0440\u0430\u043B\u044C\u0434",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043C\u0435\u0431\u0435\u043B\u0438 \u0432 \u0416\u041A \u042D\u043C\u0435\u0440\u0430\u043B\u044C\u0434",
          href: "/projects/emerald"
        },
        {
          img: "mon-cher.jpg",
          title: "\u041A\u043B\u0443\u0431\u043D\u044B\u0439 \u0434\u043E\u043C Mon Cher",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043C\u0435\u0431\u0435\u043B\u0438 \u041A\u043B\u0443\u0431\u043D\u044B\u0439 \u0434\u043E\u043C Mon Cher",
          href: "/projects/mon-cher"
        },
        {
          img: "in-the-clearing.jpg",
          title: "\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043D\u0430 \u041F\u043E\u043B\u044F\u043D\u043A\u0435",
          description: "\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043C\u0435\u0431\u0435\u043B\u0438 \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043D\u0430 \u041F\u043E\u043B\u044F\u043D\u043A\u0435",
          href: "/projects/in-the-clearing"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Projects = Projects;
  const _component_NuxtLink = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-project" }, _attrs))}><h4 class="main-title"><span>\u041D\u0430\u0448\u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B</span></h4><div class="main-project-center"><div class="project-items">`);
  _push(ssrRenderComponent(_component_Projects, { projectsItems: $data.projects }, null, _parent));
  _push(`</div><div class="production-view-all">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "production-view-all_a"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="underline"${_scopeId}>\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B</span>`);
      } else {
        return [
          createVNode("span", { class: "underline" }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainProjects.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MainProjects = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  components: {
    Stages
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Stages = resolveComponent("Stages");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-stage-sale" }, _attrs))}><div class="main-stage-sale-title container"><h2 class="main-title"><span>\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u0431\u0435\u043B\u044C?</span></h2></div>`);
  _push(ssrRenderComponent(_component_Stages, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainStageSale.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainStageSale = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  data() {
    return {
      images: {
        bgImg1: "main-block-img.jpg",
        bgImg2: "main-block-img1.jpg",
        bgImg3: "main-block-img2.jpg",
        background: "linear-gradient(rgba(54, 52, 45, 0.7), rgba(54, 52, 45, 0.57))"
      }
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | \u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 | \u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u0435\u0431\u0435\u043B\u0438 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainRealize = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MainMobileMenu, null, null, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(MainInfo, null, null, _parent));
      _push(ssrRenderComponent(MainBlockImg, {
        images: _ctx.images,
        style: {
          background: _ctx.images.background + `, url(images/main/${_ctx.images.bgImg1})`,
          height: "400px",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          color: "#ffffff",
          alignItems: "center",
          position: "relative"
        }
      }, null, _parent));
      _push(`<div class="container">`);
      _push(ssrRenderComponent(MainProduction, null, null, _parent));
      _push(ssrRenderComponent(MainAdvantages, null, null, _parent));
      _push(ssrRenderComponent(MainCalc, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_MainRealize, null, null, _parent));
      _push(`<div class="container">`);
      _push(ssrRenderComponent(MainFounder, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(MainBlockImg, {
        images: _ctx.images,
        style: {
          background: _ctx.images.background + `, url(images/main/${_ctx.images.bgImg2})`,
          padding: "100px 0",
          backgroundAttachment: "fixed",
          color: "#ffffff"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container main-calc-fl-end"${_scopeId}>`);
            _push2(ssrRenderComponent(MainCalc, { class: "color-white" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "container main-calc-fl-end" }, [
                createVNode(MainCalc, { class: "color-white" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container">`);
      _push(ssrRenderComponent(MainProjects, null, null, _parent));
      _push(ssrRenderComponent(MainStageSale, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(MainBlockImg, {
        images: _ctx.images,
        style: {
          background: _ctx.images.background + `, url(images/main/${_ctx.images.bgImg3})`,
          height: "330px",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          color: "#ffffff",
          alignItems: "center",
          position: "relative"
        }
      }, null, _parent));
      _push(ssrRenderComponent(WatsAppBtn, null, null, _parent));
      _push(ssrRenderComponent(ScrollToTop, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-11ce7121.mjs.map
