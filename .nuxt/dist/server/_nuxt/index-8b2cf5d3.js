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
      title: "Royal-Wood | Классические Двери на заказ в Москве | Изготовление кухонной мебели по размерам под заказ"
    });
    const catalogItems = [
      {
        title: "Классическая дверь. Детали",
        materials: "",
        description: "",
        img: "Классическая-дверь.-Детали-1.jpg",
        catalogLink: "door-1",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Классическая-дверь.-Детали-1.jpg"
        }
      },
      {
        title: "Премиум отделка. Многослойная покраска",
        materials: "",
        description: "",
        img: "Премиум-отделка.-Многослойная-покраска-2.jpg",
        catalogLink: "door-2",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Премиум-отделка.-Многослойная-покраска-2.jpg"
        }
      },
      {
        title: "Премиальные двери Royal Wood - гарантия качества и долговечности",
        materials: "",
        description: "",
        img: "Премиальные-двери-Royal-Wood---гарантия-качества-и-долговечности-3.jpg",
        catalogLink: "door-3",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Премиальные-двери-Royal-Wood---гарантия-качества-и-долговечности-3.jpg"
        }
      },
      {
        title: "Дверь из массива и шпона ольхи. Эмаль с патиной",
        materials: "",
        description: "",
        img: "Дверь-из-массива-и-шпона-ольхи.-Эмаль-с-патиной-4.jpg",
        catalogLink: "door-4",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-массива-и-шпона-ольхи.-Эмаль-с-патиной-4.jpg"
        }
      },
      {
        title: "Двери из массива и шпона ольхи, МДФ плиты, с патиной",
        materials: "",
        description: "",
        img: "Двери-из-массива-и-шпона-ольхи,-МДФ-плиты,-с-патиной-5.jpg",
        catalogLink: "door-4",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-массива-и-шпона-ольхи,-МДФ-плиты,-с-патиной-5.jpg"
        }
      },
      {
        title: "Дверь из массива со стеклом и декоративными элементами",
        materials: "",
        description: "",
        img: "Дверь-из-массива-со-стеклом-и-декоративными-элементами-6.jpg",
        catalogLink: "door-6",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-массива-со-стеклом-и-декоративными-элементами-6.jpg"
        }
      },
      {
        title: "Дверь из массива и шпона дуба с позолотой",
        materials: "",
        description: "",
        img: "Дверь-из-массива-и-шпона-дуба-с-позолотой-7.jpg",
        catalogLink: "door-7",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-массива-и-шпона-дуба-с-позолотой-7.jpg"
        }
      },
      {
        title: "Классическая дверь с позолоченной резьбой",
        materials: "",
        description: "",
        img: "Классическая-дверь-с-позолоченной-резьбой-8.jpg",
        catalogLink: "door-8",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Классическая-дверь-с-позолоченной-резьбой-8.jpg"
        }
      },
      {
        title: "Классическая дверь из массива с тонировкой и позолоченными резными элементами",
        materials: "",
        description: "",
        img: "Классическая-дверь-из-массива-с-тонировкой-и-позолоченными-резными-элементами-9.jpg",
        catalogLink: "door-9",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Классическая-дверь-из-массива-с-тонировкой-и-позолоченными-резными-элементами-9.jpg"
        }
      },
      {
        title: "Дверь из массива по индивидуальному проекту",
        materials: "",
        description: "",
        img: "Дверь-из-массива-по-индивидуальному-проекту-10.jpg",
        catalogLink: "door-10",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-массива-по-индивидуальному-проекту-10.jpg"
        }
      },
      {
        title: "Раздвижные двери с оригинальным остеклением по эскизу дизайнера ",
        materials: "",
        description: "",
        img: "Раздвижные-двери-с-оригинальным-остеклением-по-эскизу-дизайнера-11.jpg",
        catalogLink: "door-11",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Раздвижные-двери-с-оригинальным-остеклением-по-эскизу-дизайнера-11.jpg"
        }
      },
      {
        title: "Раздвижная дверь из массива по авторскому проекту ",
        materials: "",
        description: "",
        img: "Раздвижная-дверь-из-массива-по-авторскому-проекту-12.jpg",
        catalogLink: "door-12",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Раздвижная-дверь-из-массива-по-авторскому-проекту-12.jpg"
        }
      },
      {
        title: "Двери из массива дуба",
        materials: "",
        description: "",
        img: "Двери-из-массива-дуба-13.jpg",
        catalogLink: "door-13",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-массива-дуба-13.jpg"
        }
      },
      {
        title: "Классические двери из массива и шпона ольхи, мдф плиты. Укрывая покраска, бежевая ратина, золотая поталь",
        materials: "",
        description: "",
        img: "Классические-двери-из-массива-и-шпона-ольхи,-мдф-плиты.-Укрывая-покраска,-бежевая-ратина,-золотая-поталь-14.jpg",
        catalogLink: "door-14",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Классические-двери-из-массива-и-шпона-ольхи,-мдф-плиты.-Укрывая-покраска,-бежевая-ратина,-золотая-поталь-14.jpg"
        }
      },
      {
        title: "Двери из массива дуба с витражами",
        materials: "",
        description: "",
        img: "Двери-из-массива-дуба-с-витражами-15.jpg",
        catalogLink: "door-15",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-массива-дуба-с-витражами-15.jpg"
        }
      },
      {
        title: "Авторская дверь из массива и шпона ольхи, МДФ плиты под эмаль",
        materials: "",
        description: "",
        img: "Авторская-дверь-из-массива-и-шпона-ольхи,-МДФ-плиты-под-эмаль-16.jpg",
        catalogLink: "door-16",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Авторская-дверь-из-массива-и-шпона-ольхи,-МДФ-плиты-под-эмаль-16.jpg"
        }
      },
      {
        title: "Дизайнерская дверь из массива и шпона ольхи, МДФ плиты",
        materials: "",
        description: "",
        img: "Дизайнерская-дверь-из-массива-и-шпона-ольхи,-МДФ-плиты-17.jpg",
        catalogLink: "door-17",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дизайнерская-дверь-из-массива-и-шпона-ольхи,-МДФ-плиты-17.jpg"
        }
      },
      {
        title: "Дизайнерская дверь с круглой филенкой",
        materials: "",
        description: "",
        img: "Дизайнерская-дверь-с-круглой-филенкой-18.jpg",
        catalogLink: "door-18",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дизайнерская-дверь-с-круглой-филенкой-18.jpg"
        }
      },
      {
        title: "Дверь из массива и шпона ольхи с декоративной резной розеткой",
        materials: "",
        description: "",
        img: "Дверь-из-массива-и-шпона-ольхи-с-декоративной-резной-розеткой-19.jpg",
        catalogLink: "door-19",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-массива-и-шпона-ольхи-с-декоративной-резной-розеткой-19.jpg"
        }
      },
      {
        title: "Входная дверь из массива с круглыми филенками и стеклом",
        materials: "",
        description: "",
        img: "Входная-дверь-из-массива-с-круглыми-филенками-и-стеклом-20.jpg",
        catalogLink: "door-20",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Входная-дверь-из-массива-с-круглыми-филенками-и-стеклом-20.jpg"
        }
      },
      {
        title: "Двери с радиусной филенкой с отделкой серебряной поталью",
        materials: "",
        description: "",
        img: "Двери-с-радиусный-филенкой-с-отделкой-серебряной-поталью-21.jpg",
        catalogLink: "door-21",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-с-радиусный-филенкой-с-отделкой-серебряной-поталью-21.jpg"
        }
      },
      {
        title: "Дверная конструкция из мдф и массива со стеклом",
        materials: "",
        description: "",
        img: "Дверная-конструкция-из-мдф-и-массива-со-стеклом-22.jpg",
        catalogLink: "door-22",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверная-конструкция-из-мдф-и-массива-со-стеклом-22.jpg"
        }
      },
      {
        title: "Двери со стеклом",
        materials: "",
        description: "",
        img: "Двери-со-стеклом-23.jpg",
        catalogLink: "door-23",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-со-стеклом-23.jpg"
        }
      },
      {
        title: "Распашные двери с глянцевым покрытием",
        materials: "",
        description: "",
        img: "Распашные-двери-с-глянцевым-покрытием-24.jpg",
        catalogLink: "door-24",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Распашные-двери-с-глянцевым-покрытием-24.jpg"
        }
      },
      {
        title: "Дверь из массива и шпона ольхи с круглей филенкой и отделкой серебряной поталью",
        materials: "",
        description: "",
        img: "Дверь-из-массива-и-шпона-ольхи-с-круглей-филенкой-и-отделкой-серебряной-поталью-25.jpg",
        catalogLink: "door-25",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-массива-и-шпона-ольхи-с-круглей-филенкой-и-отделкой-серебряной-поталью-25.jpg"
        }
      },
      {
        title: "Дверь с радиусной филенкой под эмаль",
        materials: "",
        description: "",
        img: "Дверь-с-радиусный-филенкой-под-эмаль-26.jpg",
        catalogLink: "door-26",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-радиусный-филенкой-под-эмаль-26.jpg"
        }
      },
      {
        title: "Дверь с круглой филенкой ",
        materials: "",
        description: "",
        img: "Дверь-с-круглой-филенкой-27.jpg",
        catalogLink: "door-27",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-круглой-филенкой-27.jpg"
        }
      },
      {
        title: "Двери из мдф под эмаль",
        materials: "",
        description: "",
        img: "Двери-из-мдф-под-эмаль-28.jpg",
        catalogLink: "door-28",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-мдф-под-эмаль-28.jpg"
        }
      },
      {
        title: "Двустворчатые двери с матовым стеклом ",
        materials: "",
        description: "",
        img: "Двустворчатые-двери-с-матовым-стеклом-29.jpg",
        catalogLink: "door-29",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двустворчатые-двери-с-матовым-стеклом-29.jpg"
        }
      },
      {
        title: "Филёнчатая дверь под эмаль",
        materials: "",
        description: "",
        img: "Филёнчатая-дверь-под-эмаль-30.jpg",
        catalogLink: "door-30",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Филёнчатая-дверь-под-эмаль-30.jpg"
        }
      },
      {
        title: "Классическая дверь с филенками",
        materials: "",
        description: "",
        img: "Классическая-дверь-с-филенками-31.jpg",
        catalogLink: "door-31",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Классическая-дверь-с-филенками-31.jpg"
        }
      },
      {
        title: "Классические белые двери из массива и шпона ольхи, МДФ плиты",
        materials: "",
        description: "",
        img: "Классические-белые-двери-из-массива-и-шпона-ольхи,-МДФ-плиты-32.jpg",
        catalogLink: "door-32",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Классические-белые-двери-из-массива-и-шпона-ольхи,-МДФ-плиты-32.jpg"
        }
      },
      {
        title: "Белая глянцевая филёнчатая дверь",
        materials: "",
        description: "",
        img: "Белая-глянцевая-филёнчатая-дверь-33.jpg",
        catalogLink: "door-33",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Белая-глянцевая-филёнчатая-дверь-33.jpg"
        }
      },
      {
        title: "Классическая дверь с филенками",
        materials: "",
        description: "",
        img: "Классическая-дверь-с-филенками-34.jpg",
        catalogLink: "door-34",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Классическая-дверь-с-филенками-34.jpg"
        }
      },
      {
        title: "Двери с зеркалами",
        materials: "",
        description: "",
        img: "Двери-с-зеркалами-35.jpg",
        catalogLink: "door-35",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-с-зеркалами-35.jpg"
        }
      },
      {
        title: "Филёнчатая дверь из массива и шпона ольхи, МДФ плиты",
        materials: "",
        description: "",
        img: "Филёнчатая-дверь-из-массива-и-шпона-ольхи,-МДФ-плиты-36.jpg",
        catalogLink: "door-36",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Филёнчатая-дверь-из-массива-и-шпона-ольхи,-МДФ-плиты-36.jpg"
        }
      },
      {
        title: "Раздвижные двери",
        materials: "",
        description: "",
        img: "Раздвижные-двери-37.jpg",
        catalogLink: "door-37",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Раздвижные-двери-37.jpg"
        }
      },
      {
        title: "Раздвижная дверь с зеркальными вставками",
        materials: "",
        description: "",
        img: "Раздвижная-дверь-с-зеркальными-вставками-38.jpg",
        catalogLink: "door-38",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Раздвижная-дверь-с-зеркальными-вставками-38.jpg"
        }
      },
      {
        title: "Дверь из массива и шпона ольхи, МДФ плита",
        materials: "",
        description: "",
        img: "Дверь-из-массива-и-шпона-ольхи,-МДФ-плита-39.jpg",
        catalogLink: "door-39",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-массива-и-шпона-ольхи,-МДФ-плита-39.jpg"
        }
      },
      {
        title: "Двери и перегородка из МДФ с матовым стеклом",
        materials: "",
        description: "",
        img: "Двери-и-перегородка-из-МДФ-с-матовым-стеклом-40.jpg",
        catalogLink: "door-40",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-и-перегородка-из-МДФ-с-матовым-стеклом-40.jpg"
        }
      },
      {
        title: "Перегородка и двери из массива ольхи",
        materials: "",
        description: "",
        img: "Перегородка-и-двери-из-массива-ольхи-41.jpg",
        catalogLink: "door-41",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Перегородка-и-двери-из-массива-ольхи-41.jpg"
        }
      },
      {
        title: "Двери из мдф. Эмаль оливкового оттенка  с патиной",
        materials: "",
        description: "",
        img: "Двери-из-мдф.-Эмаль-оливкового-оттенка--с-патиной-42.jpg",
        catalogLink: "door-42",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-мдф.-Эмаль-оливкового-оттенка--с-патиной-42.jpg"
        }
      },
      {
        title: "Стеклянная перегородка с дверьми из массива и шпона ольхи, МДФ плиты ",
        materials: "",
        description: "",
        img: "Стеклянная-перегородка-с-дверьми-из-массива-и-шпона-ольхи,-МДФ-плиты-43.jpg",
        catalogLink: "door-43",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Стеклянная-перегородка-с-дверьми-из-массива-и-шпона-ольхи,-МДФ-плиты-43.jpg"
        }
      },
      {
        title: "Межкомнатные двери со стеклом ",
        materials: "",
        description: "",
        img: "Межкомнатные-двери-со-стеклом-44.jpg",
        catalogLink: "door-44",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Межкомнатные-двери-со-стеклом-44.jpg"
        }
      },
      {
        title: "Перегородка с распашными дверьми из массива дуба с витражами",
        materials: "",
        description: "",
        img: "Перегородка-с-распашными-дверьми-из-массива-дуба-с-витражами-45.jpg",
        catalogLink: "door-45",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Перегородка-с-распашными-дверьми-из-массива-дуба-с-витражами-45.jpg"
        }
      },
      {
        title: "Дверь из массива и шпона ольхи",
        materials: "",
        description: "",
        img: "Дверь-из-массива-и-шпона-ольхи-46.jpg",
        catalogLink: "door-46",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-массива-и-шпона-ольхи-46.jpg"
        }
      },
      {
        title: "Белые двери из массива с резьбой в тон дверного полотна",
        materials: "",
        description: "",
        img: "Белые-двери-из-массива-с-резьбой-в-тон-дверного-полотна-47.jpg",
        catalogLink: "door-47",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Белые-двери-из-массива-с-резьбой-в-тон-дверного-полотна-47.jpg"
        }
      },
      {
        title: "Классическая дверь с резьбой",
        materials: "",
        description: "",
        img: "Классическая-дверь-с-резьбой-48.jpg",
        catalogLink: "door-48",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Классическая-дверь-с-резьбой-48.jpg"
        }
      },
      {
        title: "Белоснежная дверь с резании элементами по авторскому проекту",
        materials: "",
        description: "",
        img: "Белоснежная-дверь-с-резании-элементами-по-авторскому-проекту-49.jpg",
        catalogLink: "door-49",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Белоснежная-дверь-с-резании-элементами-по-авторскому-проекту-49.jpg"
        }
      },
      {
        title: "Высокий напольный плинтус из натурального дерева под дизайн дверей",
        materials: "",
        description: "",
        img: "Высокий-напольный-плинтус-из-натурального-дерева-под-дизайн-дверей-50.jpg",
        catalogLink: "door-50",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Высокий-напольный-плинтус-из-натурального-дерева-под-дизайн-дверей-50.jpg"
        }
      },
      {
        title: "Отделка стен панелями под дизайн межкомнатных дверей",
        materials: "",
        description: "",
        img: "Отделка-стен-панелями-под-дизайн-межкомнатных-дверей-51.jpg",
        catalogLink: "door-51",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Отделка-стен-панелями-под-дизайн-межкомнатных-дверей-51.jpg"
        }
      },
      {
        title: "Двери из шпона ясеня с инкрустацией",
        materials: "",
        description: "",
        img: "Двери-из-шпона-ясеня-с-инкрустацией-52.jpg",
        catalogLink: "door-52",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-шпона-ясеня-с-инкрустацией-52.jpg"
        }
      },
      {
        title: "Двери из шпона ясеня с художественной резьбой",
        materials: "",
        description: "",
        img: "Двери-из-шпона-ясеня-с-художественной-резьбой-53.jpg",
        catalogLink: "door-53",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-шпона-ясеня-с-художественной-резьбой-53.jpg"
        }
      },
      {
        title: "Дверь из шпона ясеня с инкрустацией",
        materials: "",
        description: "",
        img: "Дверь-из-шпона-ясеня-с-инкрустацией-54.jpg",
        catalogLink: "door-54",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-шпона-ясеня-с-инкрустацией-54.jpg"
        }
      },
      {
        title: "Дизайнерские двери в восточном стиле с резным орнаментом ",
        materials: "",
        description: "",
        img: "Дизайнерские-двери-в-восточном-стиле-с-резным-орнаментом-55.jpg",
        catalogLink: "door-55",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дизайнерские-двери-в-восточном-стиле-с-резным-орнаментом-55.jpg"
        }
      },
      {
        title: "Эксклюзивные двери в восточном стиле с резным декором",
        materials: "",
        description: "",
        img: "Эксклюзивные-двери-в-восточном-стиле-с-резным-декором-56.jpg",
        catalogLink: "door-56",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Эксклюзивные-двери-в-восточном-стиле-с-резным-декором-56.jpg"
        }
      },
      {
        title: "Дверь в современной классике с изящным резным декором",
        materials: "",
        description: "",
        img: "Дверь-в-современной-классике-с-изящным-резным-декором-57.jpg",
        catalogLink: "door-57",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-в-современной-классике-с-изящным-резным-декором-57.jpg"
        }
      },
      {
        title: "Белоснежные двери с резным декором",
        materials: "",
        description: "",
        img: "Белоснежные-двери-с-резным-декором-58.jpg",
        catalogLink: "door-58",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Белоснежные-двери-с-резным-декором-58.jpg"
        }
      },
      {
        title: "Белоснежные двери с резным декором ",
        materials: "",
        description: "",
        img: "Белоснежные-двери-с-резным-декором-59.jpg",
        catalogLink: "door-59",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Белоснежные-двери-с-резным-декором-59.jpg"
        }
      },
      {
        title: "Белоснежная дверь с резным декором ",
        materials: "",
        description: "",
        img: "Белоснежная-дверь-с-резным-декором-60.jpg",
        catalogLink: "door-60",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Белоснежная-дверь-с-резным-декором-60.jpg"
        }
      },
      {
        title: "Двери из МДФ и массива ольхи",
        materials: "",
        description: "",
        img: "Двери-из-МДФ-и-массива-ольхи-61.jpg",
        catalogLink: "door-61",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-МДФ-и-массива-ольхи-61.jpg"
        }
      },
      {
        title: "Двустворчатые двери из массива ольхи и мдф",
        materials: "",
        description: "",
        img: "Двустворчатые-двери-из-массива-ольхи-и-мдф-62.jpg",
        catalogLink: "door-62",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двустворчатые-двери-из-массива-ольхи-и-мдф-62.jpg"
        }
      },
      {
        title: "Дверь с художественным стеклом, объемной филенкой и карнизом",
        materials: "",
        description: "",
        img: "Дверь-с-художественным-стеклом,-объемной-филенкой-и-карнизом-63.jpg",
        catalogLink: "door-63",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-с-художественным-стеклом,-объемной-филенкой-и-карнизом-63.jpg"
        }
      },
      {
        title: "Накладка на входную дверь",
        materials: "",
        description: "",
        img: "Накладка-на-входную-дверь-64.jpg",
        catalogLink: "door-64",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Накладка-на-входную-дверь-64.jpg"
        }
      },
      {
        title: "Строгая классическая дверь из массива и шпона ольхи, МДФ плиты ",
        materials: "",
        description: "",
        img: "Строгая-классическая-дверь-из-массива-и-шпона-ольхи,-МДФ-плиты-65.jpg",
        catalogLink: "door-65",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Строгая-классическая-дверь-из-массива-и-шпона-ольхи,-МДФ-плиты-65.jpg"
        }
      },
      {
        title: "Дверная конструкция со встроенной в околодверное пространство библиотекой",
        materials: "",
        description: "",
        img: "Дверная-конструкция-со-встроенной-в-околодверное-пространство-библиотекой-66.jpg",
        catalogLink: "door-66",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверная-конструкция-со-встроенной-в-околодверное-пространство-библиотекой-66.jpg"
        }
      },
      {
        title: "Эксклюзивная дверь из массива со вставками из корня ясеня",
        materials: "",
        description: "",
        img: "Эксклюзивная-дверь-из-массива-со-вставками-из-корня-ясеня-67.jpg",
        catalogLink: "door-67",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Эксклюзивная-дверь-из-массива-со-вставками-из-корня-ясеня-67.jpg"
        }
      },
      {
        title: "Двери измасливавший и шпона ольхи, МДФ плиты. Наличники со вставкой из шпона ореха",
        materials: "",
        description: "",
        img: "Двери-измасливавший-и-шпона-ольхи,-МДФ-плиты.-Наличники-со-вставкой-из-шпона-ореха-68.jpg",
        catalogLink: "door-68",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-измасливавший-и-шпона-ольхи,-МДФ-плиты.-Наличники-со-вставкой-из-шпона-ореха-68.jpg"
        }
      },
      {
        title: "Премиум дверь из массива со вставками из корня ясеня",
        materials: "",
        description: "",
        img: "Премиум-дверь-из-массива-со-вставками-из-корня-ясеня-69.jpg",
        catalogLink: "door-69",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Премиум-дверь-из-массива-со-вставками-из-корня-ясеня-69.jpg"
        }
      },
      {
        title: "Двери из массива с патиной",
        materials: "",
        description: "",
        img: "Двери-из-массива-с-патиной-70.jpg",
        catalogLink: "door-70",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-массива-с-патиной-70.jpg"
        }
      },
      {
        title: "Двери из МДФ плиты и массива и шпона ольхи",
        materials: "",
        description: "",
        img: "Двери-из-МДФ-плиты-и-массива-и-шпона-ольхи-71.jpg",
        catalogLink: "door-71",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-МДФ-плиты-и-массива-и-шпона-ольхи-71.jpg"
        }
      },
      {
        title: "ЯДвери из массива с фигурными карнизами , отделкой патина",
        materials: "",
        description: "",
        img: "Двери-из-массива-с-фигурными-карнизами-,-отделкой-патина-72.jpg",
        catalogLink: "door-72",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двери-из-массива-с-фигурными-карнизами-,-отделкой-патина-72.jpg"
        }
      },
      {
        title: "Дверь из массива дерева",
        materials: "",
        description: "",
        img: "Дверь-из-массива-дерева-73.jpg",
        catalogLink: "door-73",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Дверь-из-массива-дерева-73.jpg"
        }
      },
      {
        title: "Двустворчатые глянцевые двери с матовым стеклом ",
        materials: "",
        description: "",
        img: "Двустворчатые-глянцевые-двери-с-матовым-стеклом-74.jpg",
        catalogLink: "door-74",
        catalogPathImg: "/catalog/doors/classic/",
        catalogPathCategory: "/catalog/doors/",
        catalogImgs: {
          img1: "Двустворчатые-глянцевые-двери-с-матовым-стеклом-74.jpg"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "catalog container" }, _attrs))}><h1 class="catalog-title"><span>Двери классика</span></h1><div class="catalog-items">`);
      _push(ssrRenderComponent(CatalogSwiperItems, { "catalog-items": catalogItems }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/classic/doors/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-8b2cf5d3.js.map
