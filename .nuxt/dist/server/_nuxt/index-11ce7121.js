import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                   */import { FreeMode, Navigation } from "swiper";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, withModifiers } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import "./index-e12b288f.js";
import { N as NavBarFix, M as MainMobileMenu } from "./NavBarFix-14e33b30.js";
import { _ as __nuxt_component_0$3 } from "./nuxt-link-6bdec6f5.js";
import { P as Popup } from "./Popup-c7d2f0a6.js";
import { F as Form } from "./Form-14163f41.js";
import { P as Projects } from "./Projects-e668b6ed.js";
import { S as Stages } from "./Stages-60bf8bd6.js";
import { W as WatsAppBtn, S as ScrollToTop } from "./ScrollToTop-32b99862.js";
import "destr";
import "devalue";
import "hookable";
import "h3";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "@fortawesome/free-solid-svg-icons";
const MainSwiper_vue_vue_type_style_index_0_lang = "";
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
const MainRealize_vue_vue_type_style_index_0_lang = "";
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
          description: "Визуализация"
        },
        {
          id: "1-1",
          img: "1foto.jpg",
          description: "Реализация"
        },
        {
          id: "2",
          img: "2v.jpg",
          description: "Визуализация"
        },
        {
          id: "2-1",
          img: "2f.jpg",
          description: "Реализация"
        },
        {
          id: "3",
          img: "3v.jpg",
          description: "Визуализация"
        },
        {
          id: "3-1",
          img: "3f.jpg",
          description: "Реализация"
        },
        {
          id: "4",
          img: "4v.jpg",
          description: "Визуализация"
        },
        {
          id: "4-1",
          img: "4f.jpg",
          description: "Реализация"
        },
        {
          id: "5",
          img: "5v.jpg",
          description: "Визуализация"
        },
        {
          id: "5-1",
          img: "5f.jpg",
          description: "Реализация"
        },
        {
          id: "7",
          img: "7v.jpg",
          description: "Визуализация"
        },
        {
          id: "7-1",
          img: "7f.jpg",
          description: "Реализация"
        },
        {
          id: "11",
          img: "11v.jpg",
          description: "Визуализация"
        },
        {
          id: "11-1",
          img: "11f.jpg",
          description: "Реализация"
        },
        {
          id: "12",
          img: "12v.jpg",
          description: "Визуализация"
        },
        {
          id: "12-1",
          img: "12f.jpg",
          description: "Реализация"
        },
        {
          id: "13",
          img: "13v.jpg",
          description: "Визуализация"
        },
        {
          id: "13-1",
          img: "13f.jpg",
          description: "Реализация"
        },
        {
          id: "14",
          img: "14v.jpg",
          description: "Визуализация"
        },
        {
          id: "14-1",
          img: "14f.jpg",
          description: "Реализация"
        },
        {
          id: "15",
          img: "15v.jpg",
          description: "Визуализация"
        },
        {
          id: "15-1",
          img: "15f.jpg",
          description: "Реализация"
        },
        {
          id: "16",
          img: "16v.jpg",
          description: "Визуализация"
        },
        {
          id: "16-1",
          img: "16f.jpg",
          description: "Реализация"
        },
        {
          id: "17",
          img: "17v.jpg",
          description: "Визуализация"
        },
        {
          id: "17-1",
          img: "17f.jpg",
          description: "Реализация"
        },
        {
          id: "18",
          img: "18v.jpg",
          description: "Визуализация"
        },
        {
          id: "18-1",
          img: "18f.jpg",
          description: "Реализация"
        },
        {
          id: "19",
          img: "19v.jpg",
          description: "Визуализация"
        },
        {
          id: "19-1",
          img: "19f.jpg",
          description: "Реализация"
        },
        {
          id: "20",
          img: "20v.jpg",
          description: "Визуализация"
        },
        {
          id: "20-1",
          img: "20f.jpg",
          description: "Реализация"
        },
        {
          id: "21",
          img: "21v.jpg",
          description: "Визуализация"
        },
        {
          id: "21-1",
          img: "21f.jpg",
          description: "Реализация"
        },
        {
          id: "24",
          img: "24v.jpg",
          description: "Визуализация"
        },
        {
          id: "24-1",
          img: "24f.jpg",
          description: "Реализация"
        },
        {
          id: "25",
          img: "25v.jpg",
          description: "Визуализация"
        },
        {
          id: "25-1",
          img: "25f.jpg",
          description: "Реализация"
        },
        {
          id: "26",
          img: "26v.jpg",
          description: "Визуализация"
        },
        {
          id: "26-1",
          img: "26f.jpg",
          description: "Реализация"
        },
        {
          id: "27",
          img: "27v.jpg",
          description: "Визуализация"
        },
        {
          id: "27-1",
          img: "27f.jpg",
          description: "Реализация"
        }
      ]
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainSwiper = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "realize" }, _attrs))}><div class="container"><div class="realize-flex"><h3 class="main-title"><span> Визуализация / реализация</span></h3><p class="realize-flex-description"> Предоставляем возможность сравнить визуальный образ, согласованный с заказчиком, и фото после завершения строительного процесса. </p></div></div>`);
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
const HeaderPopup_vue_vue_type_style_index_0_lang = "";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-popup container" }, _attrs))}><h1 class="header-popup-title">Изготовление деревянной мебели</h1><div>`);
  _push(ssrRenderComponent(_component_Popup, {
    style: $data.isVisible ? null : { display: "none" },
    onClosePopup: $options.closePopup
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popup-form"${_scopeId}><h2 class="popup-form-title"${_scopeId}>Оставить заявку на расчет</h2>`);
        _push2(ssrRenderComponent(_component_Form, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-form" }, [
            createVNode("h2", { class: "popup-form-title" }, "Оставить заявку на расчет"),
            createVNode(_component_Form)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="container btn"><button class="btn-popup"><span class="underline"> Оставить заявку на расчет</span></button></div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/HeaderPopup.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const HeaderPopup = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8]]);
const Header_vue_vue_type_style_index_0_lang = "";
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
      { name: "Главная", path: "/" },
      { name: "Каталог", path: "/catalog" },
      { name: "Материалы", path: "/materials" },
      { name: "Доставка и Оплата", path: "/delivery" },
      { name: "Контакты", path: "/contacts" }
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
      _push(`<span class="underline">Подпишись на нас</span></div></div></div></div></div></div></div>`);
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
const MainInfo_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-info" }, _attrs))}><div class="main-info-p container"> Мебельная мастерская <strong>ROYAL WOOD</strong> работает на рынке столярных изделий 20 лет. Наша компания имеет собственное производство, включающее конструкторский отдел, покрасочные камеры, современный столярный цех. Мы используем только высококачественные и экологически безопасные материалы. Наша продукция соответствует самым высоким стандартам качества. </div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainInfo.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const MainInfo = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const MainBlockImg_vue_vue_type_style_index_0_lang = "";
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
const MainProduction_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  __name: "MainProduction",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Интерьеры из дерева ",
        a: "/catalog/interiors",
        img: "interiors.jpg"
      },
      {
        title: " Кухни",
        a: "/catalog/kitchens",
        img: "kitchens.jpg"
      },
      {
        title: "Шкафы ",
        a: "/catalog/wardrobes",
        img: "wardrobes.jpg"
      },
      {
        title: " Деревянные лестницы",
        a: "/catalog/wooden-stairs",
        img: "stairs.jpg"
      },
      {
        title: " Двери",
        a: "/catalog/doors",
        img: "doors.jpg"
      },
      {
        title: "Другие изделия",
        a: "/catalog/other-products",
        img: "other-products.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "production" }, _attrs))}><h2 class="main-title"><span> Деревянная мебель на заказ в Москве от Royal Wood</span></h2><p class="main-title-description"> Что мы производим: двери, кухни, мебель для ванных комнат, шкафы, гардеробные, деревянные лестницы, нестандартные изделия </p><div class="production-center"><div class="production-items"><!--[-->`);
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
              _push2(`<div class="overlay"${_scopeId}><div class="overlay-btn"${_scopeId}><span class="underline"${_scopeId}>Подробнее</span></div></div>`);
            } else {
              return [
                createVNode(_component_nuxt_img, {
                  src: `main/${item.img}`,
                  alt: item.img
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "overlay" }, [
                  createVNode("div", { class: "overlay-btn" }, [
                    createVNode("span", { class: "underline" }, "Подробнее")
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
            _push2(`<span class="underline"${_scopeId}>Посмотреть весь каталог</span>`);
          } else {
            return [
              createVNode("span", { class: "underline" }, "Посмотреть весь каталог")
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
const MainAdvantagesItem_vue_vue_type_style_index_0_lang = "";
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
          title: "1 - Мы изготавливаем деревянную мебель в Москве по индивидуальным заказам с 2003 года.",
          description: "- <strong>Производство.</strong>	 Компания обладает собственной производственной базой. <br/> - <strong>Гарантия качества.</strong>   Мы работаем с проверенными поставщиками древесины, предоставляющими сертификаты. Гарантийный срок на наши услуги составляет 1 год при условии монтажа мебели мастерами компании; <br/> - <strong>Большой ассортимент экологически безопасных материалов.</strong>   В каталоге вы можете ознакомиться со свойствами ценных и редких пород древесины, из которой мы создаем эксклюзивную мебель.",
          img: "advantages-img1.jpg"
        },
        {
          title: "2 - От эскиза до реализации ",
          description: "Наша столярная мастерская предлагает полный цикл изготовления мебели и деревянных интерьеров на заказ любой сложности. Наши грамотные специалисты проконсультируют, предложат мебель под Ваш дизайн интерьера, а также проведут замер, разработают дизайн проект и конструкторскую документацию. После изготовления и окраски, бережно доставят и смонтируют мебель с учётом все технических требований.",
          img: "advantages-img5.jpg"
        },
        {
          title: "3 - Индивидуальность в исполнении",
          description: "Несмотря на современный парк оборудования в нашей мастерской, мы бережно храним традиции ручного труда. Большая  часть работ, таких как шлифовка и покраска сложных фигурных элементов, резьба, роспись по дереву, патинирование, золочение, покрытие поталью, инкрустация, по-прежнему делается именно вручную.  Благодаря опыту и мастерству наших краснодеревщиков, мы можем создать авторское и по-настоящему эксклюзивное изделие из дерева  любой сложности.",
          img: "advantages-img2.jpg"
        },
        {
          title: "4 - Качество и технологии",
          description: "Мы используем только высококачественные и экологически безопасные материалы, лакокрасочную продукцию, прошедшую сертификацию в России, а также самую передовую и качественную фурнитуру и комплектующие из представленных сегодня на рынке  . Все наши изделия спроектированы с возможностью дальнейшего подключения к системе «Умный дом», пожарно-охранной сигнализации, компьютерному и телекоммуникационному оборудованию.",
          img: "advantages-img3.jpg"
        },
        {
          title: "5 - Производственные мощности",
          description: "Наша компания имеет собственное производство, включающее конструкторский отдел, покрасочные камеры ,современный столярный цех площадью более 1000м2, оснащенный новейшим итальянским оборудованием фирмы Griggio, SCM и немецким Altendorf. ",
          img: "advantages-img4.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MainAdvantagesItem = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "advantages" }, _attrs))}><h2 class="main-title"><span>Ваши преимущества работы с нами</span></h2><div class="advantages-items"><!--[-->`);
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
const MainCalc_vue_vue_type_style_index_0_lang = "";
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
        _push2(`<div class="popup-form"${_scopeId}><h2 class="popup-form-title"${_scopeId}>Оставьте заявку на замер</h2>`);
        _push2(ssrRenderComponent(_component_Form, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-form" }, [
            createVNode("h2", { class: "popup-form-title" }, "Оставьте заявку на замер"),
            createVNode(_component_Form)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="main-calc-title"><h3>Вызвать мастера на замер</h3></div><div class="btn"><a class="main-calc-btn"><span class="underline"> Вызвать мастера </span></a></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainCalc.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MainCalc = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + __publicAssetsURL("images/main/founder.jpg");
const MainFounder_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "founder" }, _attrs))}><div class="founder-title"><h2 class="main-title"><span>Основатель компании</span></h2></div><div class="founder-item"><p class="founder-item-description"> У истоков создания столярной мастерской <br><strong>Royal Wood</strong> стоит наш бессменный генеральный директор Матюхин Дмитрий Александрович, в 2003 году окончивший Московский Государственный Университет леса, с юных лет вникающий в процессы деревообработки. Его страсть к любимому делу объединила нашу команду колоссальных профессионалов, буквально чувствующих дерево всей душой, под одной общей идеей - создавать ту идеальную среду для жизни, в которой тепло и комфортно не только Вам, но и Вашему сердцу. </p><div class="founder-item-img"><img${ssrRenderAttr("src", _imports_0)} alt="founder"></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/MainFounder.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MainFounder = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const MainProjects_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  components: { Projects },
  data() {
    return {
      projects: [
        {
          img: "emerald.jpg",
          title: "ЖК Эмеральд",
          description: "Реализация мебели в ЖК Эмеральд",
          href: "/projects/emerald"
        },
        {
          img: "mon-cher.jpg",
          title: "Клубный дом Mon Cher",
          description: "Реализация мебели Клубный дом Mon Cher",
          href: "/projects/mon-cher"
        },
        {
          img: "in-the-clearing.jpg",
          title: "Квартира на Полянке",
          description: "Реализация мебели Квартира на Полянке",
          href: "/projects/in-the-clearing"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Projects = Projects;
  const _component_NuxtLink = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-project" }, _attrs))}><h4 class="main-title"><span>Наши реализованные проекты</span></h4><div class="main-project-center"><div class="project-items">`);
  _push(ssrRenderComponent(_component_Projects, { projectsItems: $data.projects }, null, _parent));
  _push(`</div><div class="production-view-all">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "production-view-all_a"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="underline"${_scopeId}>Посмотреть все проекты</span>`);
      } else {
        return [
          createVNode("span", { class: "underline" }, "Посмотреть все проекты")
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-stage-sale" }, _attrs))}><div class="main-stage-sale-title container"><h2 class="main-title"><span>Что нужно сделать для того, чтобы заказать мебель?</span></h2></div>`);
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
const index_vue_vue_type_style_index_0_lang = "";
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
      title: "Royal-Wood | Деревянная мебель на заказ в Москве | Изготовление мебели по размерам из массива дерева под заказ"
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-11ce7121.js.map
