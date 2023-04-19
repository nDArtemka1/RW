import "./index-e12b288f.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { P as Popup } from "./Popup-c7d2f0a6.js";
import { F as Form } from "./Form-14163f41.js";
import { C as Categories } from "./Categories-fe1ec79b.js";
import { C as CatalogSwiperItems } from "./CatalogSwiperItems-f3168e1b.js";
import { u as useHead } from "../server.mjs";
import "unhead";
import "./nuxt-img-9ef5105d.js";
import "destr";
import "devalue";
import "hookable";
import "h3";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "swiper/vue";
/* empty css                   *//* empty css                         */import "swiper";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "defu";
import "@fortawesome/free-solid-svg-icons";
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
      title: "Royal-Wood | Современные Двери на заказ в Москве | Изготовление кухонной мебели по размерам под заказ"
    });
    const catalogItems = [
      {
        title: "Дверь из шпона эвкалипта с глянцевым покрытием",
        materials: "",
        description: "",
        img: "Дверь-из-шпона-эвкалипта-с-глянцевым-покрытием-1.jpg",
        catalogLink: "door-1",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-шпона-эвкалипта-с-глянцевым-покрытием-1.jpg"
        }
      },
      {
        title: "Дверь с зеркалом",
        materials: "",
        description: "",
        img: "Дверь-с-зеркалом-2.jpg",
        catalogLink: "door-2",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-зеркалом-2.jpg"
        }
      },
      {
        title: "Дверь с радиусной филенкой",
        materials: "",
        description: "",
        img: "Дверь-с-радиусной-филенкой-3.jpg",
        catalogLink: "door-3",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-радиусной-филенкой-3.jpg"
        }
      },
      {
        title: "Дверь с декоративной фрезеровкой",
        materials: "",
        description: "",
        img: "Дверь-с-декоративной-фрезеровкой-4.jpg",
        catalogLink: "door-4",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-декоративной-фрезеровкой-4.jpg"
        }
      },
      {
        title: "Дверь с декоративной фрезеровкой",
        materials: "",
        description: "",
        img: "Дверь-с-декоративной-фрезеровкой-5.jpg",
        catalogLink: "door-4",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-декоративной-фрезеровкой-5.jpg"
        }
      },
      {
        title: "Дверь с декоративной фрезеровкой",
        materials: "",
        description: "",
        img: "Дверь-с-декоративной-фрезеровкой-6.jpg",
        catalogLink: "door-6",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-декоративной-фрезеровкой-6.jpg"
        }
      },
      {
        title: "Скрытые двери из шпона ореха",
        materials: "",
        description: "",
        img: "Скрытые-двери-из-шпона-ореха-7.jpg",
        catalogLink: "door-7",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Скрытые-двери-из-шпона-ореха-7.jpg"
        }
      },
      {
        title: "Дверь из американского ореха",
        materials: "",
        description: "",
        img: "Дверь-из-американского-ореха-8.jpg",
        catalogLink: "door-8",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-американского-ореха-8.jpg"
        }
      },
      {
        title: "Двери раздвижные из американского ореха ",
        materials: "",
        description: "",
        img: "Двери-раздвижные-из-американского-ореха-9.jpg",
        catalogLink: "door-9",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-раздвижные-из-американского-ореха-9.jpg"
        }
      },
      {
        title: "Дверь со вставкой из стекла",
        materials: "",
        description: "",
        img: "Дверь-со-вставкой-из-стекла-10.jpg",
        catalogLink: "door-10",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-со-вставкой-из-стекла-10.jpg"
        }
      },
      {
        title: "Дверь с декоративной фрезеровкой по периметру",
        materials: "",
        description: "",
        img: "Дверь-с-декоративной-фрезеровкой-по-периметру-11.jpg",
        catalogLink: "door-11",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-декоративной-фрезеровкой-по-периметру-11.jpg"
        }
      },
      {
        title: "Дверь со вставкой из стекла",
        materials: "",
        description: "",
        img: "Дверь-со-вставкой-из-стекла-12.jpg",
        catalogLink: "door-12",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-со-вставкой-из-стекла-12.jpg"
        }
      },
      {
        title: "Дверь с вертикальной фрезеровкой ",
        materials: "",
        description: "",
        img: "Дверь-с-вертикальной-фрезеровкой-13.jpg",
        catalogLink: "door-13",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-вертикальной-фрезеровкой-13.jpg"
        }
      },
      {
        title: "Накладка на входную дверь с вертикальной фрезеровкой ",
        materials: "",
        description: "",
        img: "Накладка-на-входную-дверь-с-вертикальной-фрезеровкой-14.jpg",
        catalogLink: "door-14",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Накладка-на-входную-дверь-с-вертикальной-фрезеровкой-14.jpg"
        }
      },
      {
        title: "Дверь с вертикальной фрезеровкой ",
        materials: "",
        description: "",
        img: "Дверь-с-вертикальной-фрезеровкой-15.jpg",
        catalogLink: "door-15",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-вертикальной-фрезеровкой-15.jpg"
        }
      },
      {
        title: "Дверь из шпона ореха с рифленым стеклом",
        materials: "",
        description: "",
        img: "Дверь-из-шпона-ореха-с-рифленым-стеклом-16.jpg",
        catalogLink: "door-16",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-шпона-ореха-с-рифленым-стеклом-16.jpg"
        }
      },
      {
        title: "Дверь из ореха с матовым стеклом",
        materials: "",
        description: "",
        img: "Дверь-из-ореха-с-матовым-стеклом-17.jpg",
        catalogLink: "door-17",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-ореха-с-матовым-стеклом-17.jpg"
        }
      },
      {
        title: "Двустворчатые двери из ореха со вставками из латуни",
        materials: "",
        description: "",
        img: "Двустворчатые-двери-из-ореха-со-вставками-из-латуни-18.jpg",
        catalogLink: "door-18",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двустворчатые-двери-из-ореха-со-вставками-из-латуни-18.jpg"
        }
      },
      {
        title: "Дверь с радиусной филенкой",
        materials: "",
        description: "",
        img: "Дверь-с-радиусный-филенкой-19.jpg",
        catalogLink: "door-19",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-радиусный-филенкой-19.jpg"
        }
      },
      {
        title: "Дверь межкомнатная",
        materials: "",
        description: "",
        img: "Дверь-межкомнатная-20.jpg",
        catalogLink: "door-20",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-межкомнатная-20.jpg"
        }
      },
      {
        title: "Дверь с радиусной филенкой",
        materials: "",
        description: "",
        img: "Дверь-с-радиусный-филенкой-21.jpg",
        catalogLink: "door-21",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-радиусный-филенкой-21.jpg"
        }
      },
      {
        title: "Двери из шпона палисандра",
        materials: "",
        description: "",
        img: "Двери-из-шпона-палисандра-22.jpg",
        catalogLink: "door-22",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-шпона-палисандра-22.jpg"
        }
      },
      {
        title: "Двери в современном стиле",
        materials: "",
        description: "",
        img: "Двери-в-современном-стиле-23.jpg",
        catalogLink: "door-23",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-в-современном-стиле-23.jpg"
        }
      },
      {
        title: "Двери из шпона палисандра",
        materials: "",
        description: "",
        img: "Двери-из-шпона-палисандра-24.jpg",
        catalogLink: "door-24",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-шпона-палисандра-24.jpg"
        }
      },
      {
        title: "Двери с гладким дверным полотном",
        materials: "",
        description: "",
        img: "Двери-с-гладким-дверным-полотном-25.jpg",
        catalogLink: "door-25",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-с-гладким-дверным-полотном-25.jpg"
        }
      },
      {
        title: "Раздвижные двери",
        materials: "",
        description: "",
        img: "Раздвижные-двери-26.jpg",
        catalogLink: "door-26",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Раздвижные-двери-26.jpg"
        }
      },
      {
        title: "Двери с матовым стеклом",
        materials: "",
        description: "",
        img: "Двери-с-матовым-стеклом-27.jpg",
        catalogLink: "door-27",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-с-матовым-стеклом-27.jpg"
        }
      },
      {
        title: "Двери из шпона ореха",
        materials: "",
        description: "",
        img: "Двери-из-шпона-ореха-28.jpg",
        catalogLink: "door-28",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-шпона-ореха-28.jpg"
        }
      },
      {
        title: "Двери из шпона ореха",
        materials: "",
        description: "",
        img: "Двери-из-шпона-ореха-29.jpg",
        catalogLink: "door-29",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-шпона-ореха-29.jpg"
        }
      },
      {
        title: "Двери из шпона ореха",
        materials: "",
        description: "",
        img: "Двери-из-шпона-ореха-30.jpg",
        catalogLink: "door-30",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-шпона-ореха-30.jpg"
        }
      },
      {
        title: "Дизайнерские двери ",
        materials: "",
        description: "",
        img: "Дизайнерские-двери-31.jpg",
        catalogLink: "door-31",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дизайнерские-двери-31.jpg"
        }
      },
      {
        title: "Двери с вертикальной фрезеровкой ",
        materials: "",
        description: "",
        img: "двери-с-вертикальной-фрезеровкой-32.jpg",
        catalogLink: "door-32",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "двери-с-вертикальной-фрезеровкой-32.jpg"
        }
      },
      {
        title: "Дизайнерские двери",
        materials: "",
        description: "",
        img: "Дизайнерские-двери-33.jpg",
        catalogLink: "door-33",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дизайнерские-двери-33.jpg"
        }
      },
      {
        title: "Двери из шпона восточно-индийского палисандра",
        materials: "",
        description: "",
        img: "Двери-из-шпона-восточно-индийского-палисандра-34.jpg",
        catalogLink: "door-34",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-шпона-восточно-индийского-палисандра-34.jpg"
        }
      },
      {
        title: "Золотистые двери с зеркальными вставками",
        materials: "",
        description: "",
        img: "Золотистые-двери-с-зеркальными-вставками-35.jpg",
        catalogLink: "door-35",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Золотистые-двери-с-зеркальными-вставками-35.jpg"
        }
      },
      {
        title: "Двери из шпона макасара",
        materials: "",
        description: "",
        img: "Двери-из-шпона-макасара-36.jpg",
        catalogLink: "door-36",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-шпона-макасара-36.jpg"
        }
      },
      {
        title: "Дверь из шпона ореха",
        materials: "",
        description: "",
        img: "Дверь-из-шпона-ореха-37.jpg",
        catalogLink: "door-37",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-шпона-ореха-37.jpg"
        }
      },
      {
        title: "Комбинированная дверь из шпона ореха и палисандра",
        materials: "",
        description: "",
        img: "Комбинированная-дверь-из-шпона-ореха-и-палисандра-38.jpg",
        catalogLink: "door-38",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Комбинированная-дверь-из-шпона-ореха-и-палисандра-38.jpg"
        }
      },
      {
        title: "Двери из ореха со стеклянной вставкой",
        materials: "",
        description: "",
        img: "Двери-из-ореха-со-стеклянной-вставкой-39.jpg",
        catalogLink: "door-39",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-ореха-со-стеклянной-вставкой-39.jpg"
        }
      },
      {
        title: "Двери из ореха с затемнённым стеклом",
        materials: "",
        description: "",
        img: "Двери-из-ореха-с-затемнённым-стеклом-40.jpg",
        catalogLink: "door-40",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-ореха-с-затемнённым-стеклом-40.jpg"
        }
      },
      {
        title: "Двери с зеркалом",
        materials: "",
        description: "",
        img: "Двери-с-зеркалом-41.jpg",
        catalogLink: "door-41",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-с-зеркалом-41.jpg"
        }
      },
      {
        title: "Дверь из американского ореха",
        materials: "",
        description: "",
        img: "Дверь-из-американского-ореха-42.jpg",
        catalogLink: "door-42",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-американского-ореха-42.jpg"
        }
      },
      {
        title: "Двери из белого глянца",
        materials: "",
        description: "",
        img: "Двери-из-белого-глянца-43.jpg",
        catalogLink: "door-43",
        catalogPathImg: "/catalog/doors/modern/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-белого-глянца-43.jpg"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "catalog container" }, _attrs))}><h1 class="catalog-title"><span>Современные двери</span></h1><div class="catalog-items">`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-a1bd48be.js.map
