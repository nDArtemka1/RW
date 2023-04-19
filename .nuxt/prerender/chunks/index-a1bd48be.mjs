import { mergeProps, useSSRContext } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { P as Popup } from './Popup-c7d2f0a6.mjs';
import { F as Form } from './Form-14163f41.mjs';
import { C as Categories } from './Categories-fe1ec79b.mjs';
import { C as CatalogSwiperItems } from './CatalogSwiperItems-f3168e1b.mjs';
import { u as useHead } from './server.mjs';
import './nuxt-img-9ef5105d.mjs';
import 'file://D:/projects/royal-wood/node_modules/h3/dist/index.mjs';
import './nuxt-link-6bdec6f5.mjs';
import 'file://D:/projects/royal-wood/node_modules/ufo/dist/index.mjs';
import 'file://D:/projects/royal-wood/node_modules/swiper/vue/swiper-vue.js';
import 'file://D:/projects/royal-wood/node_modules/swiper/swiper.esm.js';
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

const __default__ = {
  components: {
    Popup,
    Form,
    Categories,
    CatalogSwiperItems
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0414\u0432\u0435\u0440\u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 | \u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u0443\u0445\u043E\u043D\u043D\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437"
    });
    const catalogItems = [
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u044D\u0432\u043A\u0430\u043B\u0438\u043F\u0442\u0430 \u0441 \u0433\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u043C \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435\u043C",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u044D\u0432\u043A\u0430\u043B\u0438\u043F\u0442\u0430-\u0441-\u0433\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u043C-\u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435\u043C-1.jpg",
        catalogLink: "door-1",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u044D\u0432\u043A\u0430\u043B\u0438\u043F\u0442\u0430-\u0441-\u0433\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u043C-\u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435\u043C-1.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0437\u0435\u0440\u043A\u0430\u043B\u043E\u043C",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0437\u0435\u0440\u043A\u0430\u043B\u043E\u043C-2.jpg",
        catalogLink: "door-2",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0437\u0435\u0440\u043A\u0430\u043B\u043E\u043C-2.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0440\u0430\u0434\u0438\u0443\u0441\u043D\u043E\u0439 \u0444\u0438\u043B\u0435\u043D\u043A\u043E\u0439",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0440\u0430\u0434\u0438\u0443\u0441\u043D\u043E\u0439-\u0444\u0438\u043B\u0435\u043D\u043A\u043E\u0439-3.jpg",
        catalogLink: "door-3",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0440\u0430\u0434\u0438\u0443\u0441\u043D\u043E\u0439-\u0444\u0438\u043B\u0435\u043D\u043A\u043E\u0439-3.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-4.jpg",
        catalogLink: "door-4",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-4.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-5.jpg",
        catalogLink: "door-4",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-5.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-6.jpg",
        catalogLink: "door-6",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-6.jpg"
        }
      },
      {
        title: "\u0421\u043A\u0440\u044B\u0442\u044B\u0435 \u0434\u0432\u0435\u0440\u0438 \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043E\u0440\u0435\u0445\u0430",
        materials: "",
        description: "",
        img: "\u0421\u043A\u0440\u044B\u0442\u044B\u0435-\u0434\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-7.jpg",
        catalogLink: "door-7",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0421\u043A\u0440\u044B\u0442\u044B\u0435-\u0434\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-7.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0438\u0437 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0440\u0435\u0445\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E-\u043E\u0440\u0435\u0445\u0430-8.jpg",
        catalogLink: "door-8",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E-\u043E\u0440\u0435\u0445\u0430-8.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0440\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435 \u0438\u0437 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0440\u0435\u0445\u0430 ",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0440\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435-\u0438\u0437-\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E-\u043E\u0440\u0435\u0445\u0430-9.jpg",
        catalogLink: "door-9",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0440\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435-\u0438\u0437-\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E-\u043E\u0440\u0435\u0445\u0430-9.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441\u043E \u0432\u0441\u0442\u0430\u0432\u043A\u043E\u0439 \u0438\u0437 \u0441\u0442\u0435\u043A\u043B\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441\u043E-\u0432\u0441\u0442\u0430\u0432\u043A\u043E\u0439-\u0438\u0437-\u0441\u0442\u0435\u043A\u043B\u0430-10.jpg",
        catalogLink: "door-10",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441\u043E-\u0432\u0441\u0442\u0430\u0432\u043A\u043E\u0439-\u0438\u0437-\u0441\u0442\u0435\u043A\u043B\u0430-10.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439 \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-\u043F\u043E-\u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443-11.jpg",
        catalogLink: "door-11",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-\u043F\u043E-\u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443-11.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441\u043E \u0432\u0441\u0442\u0430\u0432\u043A\u043E\u0439 \u0438\u0437 \u0441\u0442\u0435\u043A\u043B\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441\u043E-\u0432\u0441\u0442\u0430\u0432\u043A\u043E\u0439-\u0438\u0437-\u0441\u0442\u0435\u043A\u043B\u0430-12.jpg",
        catalogLink: "door-12",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441\u043E-\u0432\u0441\u0442\u0430\u0432\u043A\u043E\u0439-\u0438\u0437-\u0441\u0442\u0435\u043A\u043B\u0430-12.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439 ",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-13.jpg",
        catalogLink: "door-13",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-13.jpg"
        }
      },
      {
        title: "\u041D\u0430\u043A\u043B\u0430\u0434\u043A\u0430 \u043D\u0430 \u0432\u0445\u043E\u0434\u043D\u0443\u044E \u0434\u0432\u0435\u0440\u044C \u0441 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439 ",
        materials: "",
        description: "",
        img: "\u041D\u0430\u043A\u043B\u0430\u0434\u043A\u0430-\u043D\u0430-\u0432\u0445\u043E\u0434\u043D\u0443\u044E-\u0434\u0432\u0435\u0440\u044C-\u0441-\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-14.jpg",
        catalogLink: "door-14",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u041D\u0430\u043A\u043B\u0430\u0434\u043A\u0430-\u043D\u0430-\u0432\u0445\u043E\u0434\u043D\u0443\u044E-\u0434\u0432\u0435\u0440\u044C-\u0441-\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-14.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439 ",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-15.jpg",
        catalogLink: "door-15",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-15.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043E\u0440\u0435\u0445\u0430 \u0441 \u0440\u0438\u0444\u043B\u0435\u043D\u044B\u043C \u0441\u0442\u0435\u043A\u043B\u043E\u043C",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-\u0441-\u0440\u0438\u0444\u043B\u0435\u043D\u044B\u043C-\u0441\u0442\u0435\u043A\u043B\u043E\u043C-16.jpg",
        catalogLink: "door-16",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-\u0441-\u0440\u0438\u0444\u043B\u0435\u043D\u044B\u043C-\u0441\u0442\u0435\u043A\u043B\u043E\u043C-16.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0438\u0437 \u043E\u0440\u0435\u0445\u0430 \u0441 \u043C\u0430\u0442\u043E\u0432\u044B\u043C \u0441\u0442\u0435\u043A\u043B\u043E\u043C",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u043E\u0440\u0435\u0445\u0430-\u0441-\u043C\u0430\u0442\u043E\u0432\u044B\u043C-\u0441\u0442\u0435\u043A\u043B\u043E\u043C-17.jpg",
        catalogLink: "door-17",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u043E\u0440\u0435\u0445\u0430-\u0441-\u043C\u0430\u0442\u043E\u0432\u044B\u043C-\u0441\u0442\u0435\u043A\u043B\u043E\u043C-17.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0443\u0441\u0442\u0432\u043E\u0440\u0447\u0430\u0442\u044B\u0435 \u0434\u0432\u0435\u0440\u0438 \u0438\u0437 \u043E\u0440\u0435\u0445\u0430 \u0441\u043E \u0432\u0441\u0442\u0430\u0432\u043A\u0430\u043C\u0438 \u0438\u0437 \u043B\u0430\u0442\u0443\u043D\u0438",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0443\u0441\u0442\u0432\u043E\u0440\u0447\u0430\u0442\u044B\u0435-\u0434\u0432\u0435\u0440\u0438-\u0438\u0437-\u043E\u0440\u0435\u0445\u0430-\u0441\u043E-\u0432\u0441\u0442\u0430\u0432\u043A\u0430\u043C\u0438-\u0438\u0437-\u043B\u0430\u0442\u0443\u043D\u0438-18.jpg",
        catalogLink: "door-18",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0443\u0441\u0442\u0432\u043E\u0440\u0447\u0430\u0442\u044B\u0435-\u0434\u0432\u0435\u0440\u0438-\u0438\u0437-\u043E\u0440\u0435\u0445\u0430-\u0441\u043E-\u0432\u0441\u0442\u0430\u0432\u043A\u0430\u043C\u0438-\u0438\u0437-\u043B\u0430\u0442\u0443\u043D\u0438-18.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0440\u0430\u0434\u0438\u0443\u0441\u043D\u043E\u0439 \u0444\u0438\u043B\u0435\u043D\u043A\u043E\u0439",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0440\u0430\u0434\u0438\u0443\u0441\u043D\u044B\u0439-\u0444\u0438\u043B\u0435\u043D\u043A\u043E\u0439-19.jpg",
        catalogLink: "door-19",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0440\u0430\u0434\u0438\u0443\u0441\u043D\u044B\u0439-\u0444\u0438\u043B\u0435\u043D\u043A\u043E\u0439-19.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u043C\u0435\u0436\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0430\u044F",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u043C\u0435\u0436\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0430\u044F-20.jpg",
        catalogLink: "door-20",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u043C\u0435\u0436\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0430\u044F-20.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0441 \u0440\u0430\u0434\u0438\u0443\u0441\u043D\u043E\u0439 \u0444\u0438\u043B\u0435\u043D\u043A\u043E\u0439",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0440\u0430\u0434\u0438\u0443\u0441\u043D\u044B\u0439-\u0444\u0438\u043B\u0435\u043D\u043A\u043E\u0439-21.jpg",
        catalogLink: "door-21",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0441-\u0440\u0430\u0434\u0438\u0443\u0441\u043D\u044B\u0439-\u0444\u0438\u043B\u0435\u043D\u043A\u043E\u0439-21.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430-22.jpg",
        catalogLink: "door-22",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430-22.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u0441\u0442\u0438\u043B\u0435",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0432-\u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C-\u0441\u0442\u0438\u043B\u0435-23.jpg",
        catalogLink: "door-23",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0432-\u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C-\u0441\u0442\u0438\u043B\u0435-23.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430-24.jpg",
        catalogLink: "door-24",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430-24.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0441 \u0433\u043B\u0430\u0434\u043A\u0438\u043C \u0434\u0432\u0435\u0440\u043D\u044B\u043C \u043F\u043E\u043B\u043E\u0442\u043D\u043E\u043C",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0441-\u0433\u043B\u0430\u0434\u043A\u0438\u043C-\u0434\u0432\u0435\u0440\u043D\u044B\u043C-\u043F\u043E\u043B\u043E\u0442\u043D\u043E\u043C-25.jpg",
        catalogLink: "door-25",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0441-\u0433\u043B\u0430\u0434\u043A\u0438\u043C-\u0434\u0432\u0435\u0440\u043D\u044B\u043C-\u043F\u043E\u043B\u043E\u0442\u043D\u043E\u043C-25.jpg"
        }
      },
      {
        title: "\u0420\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435 \u0434\u0432\u0435\u0440\u0438",
        materials: "",
        description: "",
        img: "\u0420\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435-\u0434\u0432\u0435\u0440\u0438-26.jpg",
        catalogLink: "door-26",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0420\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435-\u0434\u0432\u0435\u0440\u0438-26.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0441 \u043C\u0430\u0442\u043E\u0432\u044B\u043C \u0441\u0442\u0435\u043A\u043B\u043E\u043C",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0441-\u043C\u0430\u0442\u043E\u0432\u044B\u043C-\u0441\u0442\u0435\u043A\u043B\u043E\u043C-27.jpg",
        catalogLink: "door-27",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0441-\u043C\u0430\u0442\u043E\u0432\u044B\u043C-\u0441\u0442\u0435\u043A\u043B\u043E\u043C-27.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043E\u0440\u0435\u0445\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-28.jpg",
        catalogLink: "door-28",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-28.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043E\u0440\u0435\u0445\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-29.jpg",
        catalogLink: "door-29",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-29.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043E\u0440\u0435\u0445\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-30.jpg",
        catalogLink: "door-30",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-30.jpg"
        }
      },
      {
        title: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0435 \u0434\u0432\u0435\u0440\u0438 ",
        materials: "",
        description: "",
        img: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0435-\u0434\u0432\u0435\u0440\u0438-31.jpg",
        catalogLink: "door-31",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0435-\u0434\u0432\u0435\u0440\u0438-31.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0441 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439 ",
        materials: "",
        description: "",
        img: "\u0434\u0432\u0435\u0440\u0438-\u0441-\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-32.jpg",
        catalogLink: "door-32",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0434\u0432\u0435\u0440\u0438-\u0441-\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439-\u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u043E\u0439-32.jpg"
        }
      },
      {
        title: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0435 \u0434\u0432\u0435\u0440\u0438",
        materials: "",
        description: "",
        img: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0435-\u0434\u0432\u0435\u0440\u0438-33.jpg",
        catalogLink: "door-33",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0435-\u0434\u0432\u0435\u0440\u0438-33.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u0432\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u0438\u043D\u0434\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u0438\u043D\u0434\u0438\u0439\u0441\u043A\u043E\u0433\u043E-\u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430-34.jpg",
        catalogLink: "door-34",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u0438\u043D\u0434\u0438\u0439\u0441\u043A\u043E\u0433\u043E-\u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430-34.jpg"
        }
      },
      {
        title: "\u0417\u043E\u043B\u043E\u0442\u0438\u0441\u0442\u044B\u0435 \u0434\u0432\u0435\u0440\u0438 \u0441 \u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0432\u0441\u0442\u0430\u0432\u043A\u0430\u043C\u0438",
        materials: "",
        description: "",
        img: "\u0417\u043E\u043B\u043E\u0442\u0438\u0441\u0442\u044B\u0435-\u0434\u0432\u0435\u0440\u0438-\u0441-\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438-\u0432\u0441\u0442\u0430\u0432\u043A\u0430\u043C\u0438-35.jpg",
        catalogLink: "door-35",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0417\u043E\u043B\u043E\u0442\u0438\u0441\u0442\u044B\u0435-\u0434\u0432\u0435\u0440\u0438-\u0441-\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438-\u0432\u0441\u0442\u0430\u0432\u043A\u0430\u043C\u0438-35.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043C\u0430\u043A\u0430\u0441\u0430\u0440\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043C\u0430\u043A\u0430\u0441\u0430\u0440\u0430-36.jpg",
        catalogLink: "door-36",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043C\u0430\u043A\u0430\u0441\u0430\u0440\u0430-36.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043E\u0440\u0435\u0445\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-37.jpg",
        catalogLink: "door-37",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-37.jpg"
        }
      },
      {
        title: "\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0434\u0432\u0435\u0440\u044C \u0438\u0437 \u0448\u043F\u043E\u043D\u0430 \u043E\u0440\u0435\u0445\u0430 \u0438 \u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430",
        materials: "",
        description: "",
        img: "\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F-\u0434\u0432\u0435\u0440\u044C-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-\u0438-\u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430-38.jpg",
        catalogLink: "door-38",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F-\u0434\u0432\u0435\u0440\u044C-\u0438\u0437-\u0448\u043F\u043E\u043D\u0430-\u043E\u0440\u0435\u0445\u0430-\u0438-\u043F\u0430\u043B\u0438\u0441\u0430\u043D\u0434\u0440\u0430-38.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u043E\u0440\u0435\u0445\u0430 \u0441\u043E \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u043E\u0439 \u0432\u0441\u0442\u0430\u0432\u043A\u043E\u0439",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u043E\u0440\u0435\u0445\u0430-\u0441\u043E-\u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u043E\u0439-\u0432\u0441\u0442\u0430\u0432\u043A\u043E\u0439-39.jpg",
        catalogLink: "door-39",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u043E\u0440\u0435\u0445\u0430-\u0441\u043E-\u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u043E\u0439-\u0432\u0441\u0442\u0430\u0432\u043A\u043E\u0439-39.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u043E\u0440\u0435\u0445\u0430 \u0441 \u0437\u0430\u0442\u0435\u043C\u043D\u0451\u043D\u043D\u044B\u043C \u0441\u0442\u0435\u043A\u043B\u043E\u043C",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u043E\u0440\u0435\u0445\u0430-\u0441-\u0437\u0430\u0442\u0435\u043C\u043D\u0451\u043D\u043D\u044B\u043C-\u0441\u0442\u0435\u043A\u043B\u043E\u043C-40.jpg",
        catalogLink: "door-40",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u043E\u0440\u0435\u0445\u0430-\u0441-\u0437\u0430\u0442\u0435\u043C\u043D\u0451\u043D\u043D\u044B\u043C-\u0441\u0442\u0435\u043A\u043B\u043E\u043C-40.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0441 \u0437\u0435\u0440\u043A\u0430\u043B\u043E\u043C",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0441-\u0437\u0435\u0440\u043A\u0430\u043B\u043E\u043C-41.jpg",
        catalogLink: "door-41",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0441-\u0437\u0435\u0440\u043A\u0430\u043B\u043E\u043C-41.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u044C \u0438\u0437 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0440\u0435\u0445\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E-\u043E\u0440\u0435\u0445\u0430-42.jpg",
        catalogLink: "door-42",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u044C-\u0438\u0437-\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E-\u043E\u0440\u0435\u0445\u0430-42.jpg"
        }
      },
      {
        title: "\u0414\u0432\u0435\u0440\u0438 \u0438\u0437 \u0431\u0435\u043B\u043E\u0433\u043E \u0433\u043B\u044F\u043D\u0446\u0430",
        materials: "",
        description: "",
        img: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0431\u0435\u043B\u043E\u0433\u043E-\u0433\u043B\u044F\u043D\u0446\u0430-43.jpg",
        catalogLink: "door-43",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "\u0414\u0432\u0435\u0440\u0438-\u0438\u0437-\u0431\u0435\u043B\u043E\u0433\u043E-\u0433\u043B\u044F\u043D\u0446\u0430-43.jpg"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "catalog container" }, _attrs))}><h1 class="catalog-title"><span>\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0434\u0432\u0435\u0440\u0438</span></h1><div class="catalog-items">`);
      _push(ssrRenderComponent(CatalogSwiperItems, { "catalog-items": catalogItems }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/modern/doors/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a1bd48be.mjs.map
