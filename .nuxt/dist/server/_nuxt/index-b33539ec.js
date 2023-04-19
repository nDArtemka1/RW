import "./index-e12b288f.js";
import { ref, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                   *//* empty css                     *//* empty css                         */import { Zoom, Thumbs, FreeMode, Navigation, Pagination, Grid } from "swiper";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import { P as Popup } from "./Popup-c7d2f0a6.js";
import { F as Form } from "./Form-14163f41.js";
import "unhead";
import "destr";
import "devalue";
import "hookable";
import "h3";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "@fortawesome/free-solid-svg-icons";
import "./nuxt-link-6bdec6f5.js";
const MaterialsItemInfoSwiper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
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
  _push(ssrRenderComponent(_component_swiper, mergeProps({
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
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.catalogDataImg, (img) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: img }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_nuxt_img, {
                  src: $props.catalogData.catalogPathImg + img,
                  alt: $props.catalogData.catalogLink
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_nuxt_img, {
                    src: $props.catalogData.catalogPathImg + img,
                    alt: $props.catalogData.catalogLink
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
                  alt: $props.catalogData.catalogLink
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Materials/MaterialsItemInfoSwiper.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const MaterialsItemInfo_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
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
    MaterialsItemInfoSwiper: __nuxt_component_0$1
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
  const _component_MaterialsItemInfoSwiper = __nuxt_component_0$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Popup, {
    style: $data.isVisible ? null : { display: "none" },
    onClosePopup: $options.closePopup
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popup-form"${_scopeId}><h3 class="popup-form-title"${_scopeId}>Задайте вопрос прямо сейчас!</h3><p class="popup-form-description"${_scopeId}> Консультация по всем вопросам - бесплатно! </p>`);
        _push2(ssrRenderComponent(_component_Form, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-form" }, [
            createVNode("h3", { class: "popup-form-title" }, "Задайте вопрос прямо сейчас!"),
            createVNode("p", { class: "popup-form-description" }, " Консультация по всем вопросам - бесплатно! "),
            createVNode(_component_Form)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="materials-item-info"><div class="materials-item-info_img">`);
  _push(ssrRenderComponent(_component_MaterialsItemInfoSwiper, {
    catalogData: $props.catalogData,
    catalogDataImg: $props.catalogData.catalogImgs
  }, null, _parent));
  _push(`</div><div class="materials-item-info-desription"><div class="materials-item-info-desription-p"><p class="materials-item-info_p"><strong>${ssrInterpolate($props.catalogData.title)}</strong></p><p class="materials-item-info_p-materials">${ssrInterpolate($props.catalogData.materials)}</p><div class="materials-item-info_p-materials">${$props.catalogData.description}</div><div class="materials-item-info_p-materials">${$props.catalogData.description2}</div></div><div class="materials-item-info_button-wrap"><div class="materials-item-info_button"><span> Узнать стоимость </span></div></div></div></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Materials/MaterialsItemInfo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const Materials_vue_vue_type_style_index_0_lang = "";
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
    MaterialsItemInfo: __nuxt_component_0
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
  const _component_MaterialsItemInfo = __nuxt_component_0;
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Popup, {
    style: $data.isVisible ? null : { display: "none" },
    onClosePopup: $options.closePopup
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="popup-form"${_scopeId}><h3 class="popup-form-title"${_scopeId}>Задайте вопрос прямо сейчас!</h3><p class="popup-form-description"${_scopeId}> Консультация по всем вопросам - бесплатно! </p>`);
        _push2(ssrRenderComponent(_component_Form, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-form" }, [
            createVNode("h3", { class: "popup-form-title" }, "Задайте вопрос прямо сейчас!"),
            createVNode("p", { class: "popup-form-description" }, " Консультация по всем вопросам - бесплатно! "),
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
        _push2(`<div class="popup-materials-info"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_MaterialsItemInfo, { catalogData: $props.catalogData }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "popup-materials-info" }, [
            createVNode(_component_MaterialsItemInfo, { catalogData: $props.catalogData }, null, 8, ["catalogData"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="materials-item"><div class="materials-item_img"><div class="materials-item_img-a">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: $props.catalogData.catalogPathImg + $props.catalogData.img,
    alt: $props.catalogData.catalogLink
  }, null, _parent));
  _push(`<div class="overlay"><div class="overlay-btn"><span class="underline">Подробнее</span></div></div></div></div><div class="materials-item_flex"><div class="materials-item_flex-p"><p class="materials-item_p"><strong>${ssrInterpolate($props.catalogData.title)}</strong></p></div></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Materials/Materials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Materials = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | Материалы используемые компанией Royal Wood | Изготовление мебели по размерам из массива дерева под заказ"
    });
    const materialsItems = [
      {
        title: "Американский дуб",
        materials: "Белый дуб привлекает внимание неповторимой текстурой и прочностью. Владельцы мебельных фабрик приобретают шпон дуб американский, чтобы собирать кровати, комоды, гардеробы, шкафы-купе, письменные и обеденные столы. Материал позволяет изготавливать долговечные межкомнатные двери и лестницы. Его укладывают на пол во время ремонта квартир и частных домов. Цвет древесины может быть желтым или темно-коричневым. Из-за непрерывного скрещивания различных видов растений появляются самые разнообразные оттенки.",
        description: "В продаже встречаются розовые пиломатериалы с темными пятнами неправильной формы. Минеральные отложения в виде темных небольших черточек – это характерные особенности материала.  Заготовки легко и быстро обрабатываются вручную и при помощи станков. ",
        description2: "Премиальный шпон дуб американский украшает интерьер. Материал допустимо размещать внутри помещений, под открытым небом и водой. Его выбирают, когда необходимо изготовить прочный паркет. ",
        img: "american-oak.jpg",
        catalogLink: "american-oak",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "american-oak.jpg",
          img2: "american-oak-1.jpg",
          img3: "american-oak-2.jpg"
        }
      },
      {
        title: "Дуб европейский",
        materials: "Дуб обыкновенный (также имеющий много других названий – дуб европейский, дуб английский, дуб черешчатый и дуб летний) очень широко распространен в Евразии и Северной Америке, и издавна активно применяется в разнообразном производстве. Изделия из дуба не устаревают и по-прежнему имеют широкий спрос благодаря отличным техническим характеристикам и эстетическим свойствам этой породы древесины, а благодаря возможностям искусственной вариации оттенков имеет большую ценность для дизайна интерьеров, производства мебели и строительства коттеджей. Для Европы и в частности России дуб является традиционным строительным и общепромышленным материалом благодаря доступности и обильному росту на всей территории европейских стран. Древесина дуба практически не имеет недостатков, за исключением необходимости очень бережной сушки (дуб усыхает медленно и при этом сильно склонен к растрескиванию, как внутреннему, так и поверхностному). Шпон дуба не подвержен изменению объема под влиянием высоких или низких температур, он прочен, упруг, устойчив против истирания и древесных паразитов, при этом легко поддается обработке, хорошо полируется. Клей на дубовой древесине держится хорошо, шурупные и гвоздевые соединения очень надежны.",
        description: "В виде строганого шпона дуб используют для облицовки древесины и для внутренней отделки помещений, а из массива производят: <br/> <ul><li>мебель</li><li>паркет</li><li>лестницы</li><li>древесный стройматериал</li><li>ДВП и ДСП</li></ul>",
        description2: "Несмотря на свою твердость, древесина дуба хорошо поддается обработке любыми инструментами. Строганые поверхности очень гладкие. Древесина данной породы легко гнется и обтачивается.Данный вид древесины прекрасно подвергается любым видам финишной обработки, поэтому шпон дубовый имеет широкую область применения.",
        img: "european-oak.jpg",
        catalogLink: "european-oak",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "european-oak.jpg",
          img2: "european-oak-1.jpg",
          img3: "european-oak-2.jpg",
          img4: "european-oak-3.jpg"
        }
      },
      {
        title: "Сапеле",
        materials: "Натуральный шпон из древесины cапеле c текстурой «поммеле» [Sapele Pommele]. (может встречаться название Сапели помеле) Декоративный шпон, мебельное и краснодеревное производство, судостроение, панельная отделка, покрытие полов, столярные изделия.",
        description: "",
        description2: "",
        img: "sapele.jpg",
        catalogLink: "sapele",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "sapele.jpg",
          img2: "sapele-1.jpg"
        }
      },
      {
        title: "Орех американский [BLACK WALNUT]",
        materials: "Строганая доска и шпон американского ореха используются как для строительных, столярных работ, так и для производства высококачественной мебели. Благодаря своей высокой прочности и эластичности, американский черный орех также подходит для производства стульев и кресел. Применяется в частности для изготовления оружейных прикладов и вертолетных пропеллеров. Черный грецкий орех — традиционная древесина для изготовления пианино и роялей.",
        description: "<strong>Основные характеристики:</strong><br/>Цвет древесины темно-коричневый. Шпон орех американский отличается своими так называемыми «птичьими клевками», сучками размером с ноготь, которые проявляются в шпоне в виде окрашенных прожилок с маленькой дырочкой в середине.",
        description2: "Древесина может легко обрабатываться вручную или механически любыми инструментами. Древесина  ореха отлично гнется.",
        img: "american-walnut.jpg",
        catalogLink: "american-walnut",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "american-walnut.jpg",
          img2: "american-walnut-1.jpg",
          img3: "american-walnut-2.jpg"
        }
      },
      {
        title: "Орех корень",
        materials: "",
        description: "Натуральный шпон из капа ореха американского <strong>«Орех корень» [Walnut Burl]</strong> .«Корень» — особая конфигурация шпона с уникальной текстурой, получаемого из наростов (капов) на стволе дерева, что является большой редкостью. Как правило, наросты образуются на дереве в местах разрастания побегов и спящих почек в отдельных породах древесины. Кап является очень редким и красивым материалом с необычным рисунком волокон, напоминающим мрамор.",
        description2: "",
        img: "nut-root.jpg",
        catalogLink: "nut-root",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "nut-root.jpg"
        }
      },
      {
        title: "Берёза карельская",
        materials: "",
        description: " Древесина обладает ни с чем не сравнимой, уникальной текстурой, которая относит её к эксклюзивным материалам для декоративной отделки и высокохудожественных изделий.",
        description2: "",
        img: "karelian-birch.jpg",
        catalogLink: "karelian-birch",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "karelian-birch.jpg",
          img2: "karelian-birch-1.jpg"
        }
      },
      {
        title: "Бук",
        materials: "",
        description: 'В свежесрубленном виде древесина бледно-коричневого цвета, под действием внешних условий становится красновато-корич­невой, а при пропаривании, практикуемом обычно в некоторых районах перед отгрузкой, приобретает интенсивный красновато-коричневый цвет. В свежесрубленном состоянии древесина бука лесного по основным механическим характеристикам примерно одинакова с древесиной дуба. После сушки большинство пока­зателей улучшаются, и бук становится прочнее дуба при из­гибе, превосходит его в жесткости и сопротивлении сдвигу Обычно древесина бука лесного европейского обрабатывается без осложнений и может давать доброкачественную гладкую по­верхность.Из-за высокой гигроскопичности пиломатериалы из бука нельзя содержать в среде с повышенной влажностью. Такое явление называют "дыханием" древесины, чтобы избежать его, температура и влажность в помещении не должны колебаться в больших пределах.',
        description2: "",
        img: "beech.jpg",
        catalogLink: "beech",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "beech.jpg"
        }
      },
      {
        title: "Венге",
        materials: "",
        description: "Ядро темно-коричневое, с тонкими частыми прожилками, придающими древесине красивый вид. Ядро темно-коричневое, с тонкими частыми прожилками, придающими древесине красивый вид.Легко обрабатывается, но поли­руется с трудом.Пиломатериалы из этой породы, используетcя для покрытия полов и изготовления мебели. Из нее производят доброкачествен­ный декоративный шпон, пригодный для мебельного производ­ства и отделки интерьеров.",
        description2: "",
        img: "wenge.jpg",
        catalogLink: "wenge",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "wenge.jpg",
          img2: "wenge-1.jpg",
          img3: "wenge-2.jpg"
        }
      },
      {
        title: "Вишня",
        materials: "",
        description: "Древесина твердая, с мелкой, прямоволокнистой, плотной структурой, очень декоративная, имеет красивый теплый оттенок, но с течением времени темнеет. Цвет ядра различный - от красновато-коричневого до интенсивного красного.Обрабатывается легко, успешно поддается токарной обработке и великолепно полируется.Благодаря красивому строению и цвету древесины вишня американская всегда пользуется спросом, высоко ценится в мебельном и краснодеревном производствах. Используется для производства шпона, а так же для изготовления курительных трубок, музыкальных инструментов, для внутреннего обустройства маломерных судов и столярных изделий высокого класса.",
        description2: "",
        img: "cherry.jpg",
        catalogLink: "cherry",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "cherry.jpg",
          img2: "cherry-1.jpg"
        }
      },
      {
        title: "Груша",
        materials: "",
        description: "Розовато-коричневая, с мелкой, ровной тексту­рой Цвет древесины у старых деревьев обычно темнее, чем у молодых. Сосуды очень мелкие, годичные слои и сердцевинные лучи едва видны.Древесина груши плотная, твердая, хорошо обрабатывается, мало растрескивается.Древесина превосходно под­дается токарной обработке. Благодаря плотной структуре, груша хорошо полируется и дает превосходный материал для самых мелких профилей в резьбе.Груша используется для изготовления декоративного шпона, пиломатериалов, мебели, музыкальных инструментов, чертежных принадлежностей, производства ху­дожественно-декоративных изделий.",
        description2: "",
        img: "pear.jpg",
        catalogLink: "pear",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "pear.jpg"
        }
      },
      {
        title: "Зебрано",
        materials: "",
        description: "Очень декоративная светло-золотистого цвета, с узкими штрихами от темно-коричневой до почти черной окраски. По­верхность блестящая. Текстура несколько крупная. Древесина твердая и тяжелая.Очень декоративная светло-золотистого цвета, с узкими штрихами от темно-коричневой до почти черной окраски. По­верхность блестящая. Текстура несколько крупная. Древесина твердая и тяжелая.Легко обрабатывается любыми инструментами. Шпон необ­ходимо наклеивать осторожно, а перед полировкой обрабатывать прозрачным, светлым порозаполнителем. При обработке на лен­точных шлифовальных станках получается высококачественная поверхность. Зебрано используется преимущественно в виде шпона, обычно для декоративной фанеровки. Также пиломатериалы из зебрано находят применение в производстве мебели, паркета, высококачественных краснодеревных работах.",
        description2: "",
        img: "zebrano.jpg",
        catalogLink: "zebrano",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "zebrano.jpg",
          img2: "zebrano-1.jpg",
          img3: "zebrano-2.jpg"
        }
      },
      {
        title: "Каштан",
        materials: "",
        description: "Внешне сходный с древесиной дуба, но без характерного для дуба серебристого рисунка из тонких сердцевинных лучей. Прочность: Каштан европейский, внешне сходен с древесиной дуба, уступает ему в твердости и ударной вязкости и приблизительно на 20 % по всем показателям механических свойств.Легко поддается механической обработке и позволяет получать высококачественную поверхность. Хорошо склеивается, протравливается красителями и полируется.Изготовление мебели, строганного шпона, токарных изделий. Каштан иногда используют взамен древесины дуба.",
        description2: "",
        img: "chestnut.jpg",
        catalogLink: "chestnut",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "chestnut.jpg"
        }
      },
      {
        title: "Каштан корень ",
        materials: "",
        description: "Изготовление мебели, строганного шпона, токарных изделий.  Каштан иногда используют взамен древесины дуба.",
        description2: "",
        img: "chestnut-root.jpg",
        catalogLink: "chestnut-root",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "chestnut-root.jpg"
        }
      },
      {
        title: "Клен птичий глаз",
        materials: "",
        description: "У твёрдых пород клена древесина прочная, прямоволокнистая, с мелкой текстурой, светлого розоватого цвета. Клён «птичий глаз» является особой разновидностью клёна Hard maple (Sugar maple), в текстуре которого встречаются маленькие точки, похожие на птичий глаз. Уникальная текстура этой разновидности клёна обуславливает её применение в изготовлении эксклюзивной мебели, в столярных и кабинетных работах высокого класса, производство эксклюзивного шпона.",
        description2: "",
        img: "birds-eye-maple.jpg",
        catalogLink: "birds-eye-maple",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "birds-eye-maple.jpg",
          img2: "birds-eye-maple-1.jpg"
        }
      },
      {
        title: "Клен [SYCAMORE]",
        materials: "",
        description: "Другие названия: клен ложноплатановый, явор, клен фигурный, клен пламенный, клен сикамора, sicomoro frisse, figured sycamore.Белая или желтовато-белая с естественным блеском и характерными, для этой разновидности, перламутровыми волнами в рисунке на радиальных разрезах. Расположение волокон обычно прямое, но может быть свилеватым или волнистым. Текстура мелкаяДревесина клена плотная, твердая, блестящая, хорошо полируется. Клен сикамора имеет высокие показатели механических свойств, как у древесины дуба.Древесина клена сикаморе легко поддается ручной и машинной обработке. Древесина очень хорошо обтачивается на токарных станках, склеивается, протравливается красителями и полируется. <br/><br/>  <strong>Применение:</strong> Производство эксклюзивного шпона, токарных изделий, мебели, напольных покрытий.",
        description2: "",
        img: "maple.jpg",
        catalogLink: "maple",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "maple.jpg",
          img2: "maple-1.jpg",
          img3: "maple-2.jpg"
        }
      },
      {
        title: "Красное дерево",
        materials: "Красное дерево - обобщенное название тропических пород, имеющих древесину с гаммой красных оттенков. Также, это может быть насыщенный оранжевый, красно-фиолетовый или яркий бордовый оттенок.",
        description: "К этой группе можно отнести такие африканские породы, как Сапели, Макоре, Падук, Боссе, Сипо, Кандолей, Тиама, Азобе, Бубинга, Габон, Моаби, Этимое, Кая. Породы, растущие в Юго-Восточной Азии, например - Меранти, Мербау, Балау, Бангкирай, Суар, Ярра. И в Центральной и Южной Америке - Махагон, Гренадилло, Муирапиранга, Гонсало Алвес, Амарант, Кумару, Ятоба и др.",
        description2: "Обычно породы группы Красного дерева используют в производстве мебели, деталей интерьера, для напольных покрытий. Некоторые из них могут применяться вне помещений за счёт природной биостойкости.",
        img: "mahogany.jpg",
        catalogLink: "mahogany",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "mahogany.jpg",
          img2: "mahogany-1.jpg",
          img3: "mahogany-2.jpg",
          img4: "mahogany-3.jpg",
          img5: "mahogany-4.jpg",
          img6: "mahogany-5.jpg",
          img7: "mahogany-6.jpg"
        }
      },
      {
        title: "Лайсвуд",
        materials: "",
        description: "",
        description2: "Розоватого или красновато-коричневого цвета. С возрастом темнеет до коричневого. Иногда наблюдается золотистый блеск древесины, но наиболее четкий признак породы - это крупные сердцевинные лучи, которые образуют хорошо заметный шелковистый рисунок волокон. Древесина лэйсвуда (lacewood) прямослойная, за исключением тех участков, где волокна огибают радиальные лучи. Текстура крупная, равномерная.<br/><br/>  <strong>Применение:</strong> Изготовление шпона, панельная облицовка. Пиломатериалы из древесины лайсвуда применяютcя в изготовлении мебели, краснодеревных и декоративных изделий.",
        img: "laiswood.jpg",
        catalogLink: "laiswood",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "laiswood.jpg",
          img2: "laiswood-1.jpg"
        }
      },
      {
        title: "Лиственница",
        materials: "",
        description: "Ядро бледное красновато-коричневое, или кирпично-коричневое, резко отграниченное от узкой более светлой заболони. Древесина очень смолистая, с четко выраженными годичными слоями, прямым расположением волокон и мелкой однородной текстурой, довольно тяжелая,Древесина лиственницы используется при изготовлении шпона, строительстве подводных сооружений, в судостроении (обшивка маломерных судов), изготовлении окон, а также везде, где долговечность и прочность являются первостепенными требованиями.",
        description2: "",
        img: "larch.jpg",
        catalogLink: "larch",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "larch.jpg"
        }
      },
      {
        title: "Макоре",
        materials: "По цвету древесина ва­рьирует от розоватого до кроваво-красного или красно-корич­невого. Древесина у некоторых кряжей с прямыми волокнами, у дру­гих с очень оригинальным пестрым рисунком и изредка с темными штрихами. Текстура значительно мельче, чем у красного дерева.Класс использования, определяющийся естественной долговечностью: 4 (использование в условиях высокой влажности, допустим контакт с землей и пресной водой).Используется в мебельном производстве. Древе­сина с рисунком пригодна для выработки строганого декора­тивного шпона высокого класса. Пиломатериалы из древесины макоре применяются для изготовле­ния дверей, кресел, ножек столов, высококачественных столярных изделий, подоконников, поро­гов и покрытия полов, обычных токарных изделий, а также для панельной обшивки и облицовочных работ.",
        description: "Шпон из древесины макоре – это материал, который обладает превосходным внешним видом. <br/><br/> Древесина, из которой он изготовлен, произрастает преимущественно в Камеруне, Гане, Кот-д’Ивуаре, в Нигерии и Сьерра-Леоне. Ее оттенок может быть разным в пределах красного спектра и меняться от розового до ярко-красного. Она отличается прямыми волокнами или пестрым рисунком с темными штрихами. Плотная, твердая и прочная древесина оптимально подходит для производства шпона, который, за счет исходного материала изготовления, приобретает массу достоинств.",
        description2: "",
        img: "makore.jpg",
        catalogLink: "makore",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "makore.jpg",
          img2: "makore-1.jpg"
        }
      },
      {
        title: "Махагон",
        materials: "Пиломатериалы из древесины африканского махогона (кайя) широко используются в мебельном производстве, для внутренней декоративной от­делки помещений, как в виде цельной древесины, так и мето­дом фанеровки шпоном, для высококачественных столярных работ (лестниц, панелей), покрытия полов в жилых помещениях, в судостроении (обшивка, отделка кают, поручни, перила). Шпон из древесины африканского махогона может иметь разные конфигурации, в том числе и, так называемую, «пирамиду» или crotch (развилина). Шпон с таким рисунком получают строганием развилки ствола дерева и используют исключительно как лицевой шпон в мебельном и краснодеревном производстве, изготовлении музыкальных инструментов. Уникальность конфигурации «пирамида» придаёт изделиям особую красоту и благородство.",
        description: "",
        description2: "",
        img: "mahagon.jpg",
        catalogLink: "mahagon",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "mahagon.jpg",
          img2: "mahagon-1.jpg"
        }
      },
      {
        title: "Мербау",
        materials: "Пиломатериалы из древесины мербау используются на местах заготовки для возведения массивных зданий и сооружений,  сельскохозяйственного инвентаря, мебели. Благодаря высокой износостойкости и малой степени усушки, мербау пригодна для покрытия полов, рассчитан­ных на среднюю интенсивность эксплуатации. Иногда древесина мербау используется для производства шпона. В числе прочих областей применения древесины мербау можно встретить следующие: декоративные панели для внутренней и внешней отделки, мебельные щиты, индустриальные половые покрытия, кабинетные работы, токарные изделия и резьба, музыкальные инстументы, судостроение.",
        description: "",
        description2: "",
        img: "merbau.jpg",
        catalogLink: "merbau",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "merbau.jpg",
          img2: "merbau-1.jpg"
        }
      },
      {
        title: "Олива европейская",
        materials: "Олива используется для производства декоративного шпона, изготовления мебели, покрытия полов, панельной отделки, токарных изделий, применяется для инкрустаций. Ядро желтовато-коричневое с красивыми неравномерными коричневыми штрихами, придающими древесине оливы мраморный облик. Заболонь светлая желтоватая. Волокна слегка путано-свилеватые. Текстура мелкая и ровная. Древесина оливы твердая и тяжелая,характеризуется высокими показателями прочности. Олива обрабатывается трудно из-за частой смены направления волокон и очень высокой твердости, но дает гладкую поверхность, отлично поддается токарной обработке. Древесина оливы хорошо протравливается красителями и полируется. Отличается высокой износостойкостью.",
        description: "",
        description2: "",
        img: "european-olive.jpg",
        catalogLink: "european-olive",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "european-olive.jpg",
          img2: "european-olive-1.jpg"
        }
      },
      {
        title: "Ольха",
        materials: "",
        description: "<strong>Применение:</strong>  Производство лущеного и строганого шпона, пиломатериалы, столярные и мебельные изделия. Вязкая и податливая для обработки во всех направлениях, она используется в таких ответственных изделиях, как музыкальные инструменты. Массив и шпон ольхи широко применяется на нашем производстве для изготовления дверей, кухонь и шкафов.",
        description2: "",
        img: "alder.jpg",
        catalogLink: "alder",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "alder.jpg"
        }
      },
      {
        title: "Орех сатиновый",
        materials: "",
        description: "Заболонь кремово-белая. Цвет ядра варьирует от розовато-коричневого до интенсивного красновато-коричневого. Текстура мелкая и однородная. Древесина имеет атласный блеск, что является одним из привлекательных свойств этой породы, наряду с богатой цветовой гаммой. <br/><br/> <strong>Применение:</strong> Мебельное производство и панельная отделка внутри помещений, изготовление декоративного шпона.",
        description2: "",
        img: "satin-walnut.jpg",
        catalogLink: "satin-walnut",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "satin-walnut.jpg",
          img2: "satin-walnut-1.jpg"
        }
      },
      {
        title: "Орех Европейский",
        materials: "Натуральный шпон Орех европейский Colored.",
        description: "Заболонь бледно-соломенного цвета, четко отграничена от серовато-коричневого ядра. Иногда красящее вещество создает рисунок из крапин и полосок более темной окраски, беспорядочно разбросанных по всему ядру, либо сосредоточенных в относительно узкой центральной зоне. Шпон ореха европейского из Италии, наиболее декоративный и ценный.",
        description2: "<strong>Применение:</strong> Производство мебели и декоративного шпона, изготовление ружейных лож, художественных поделок и токарных изделий.",
        img: "satin-europe.jpg",
        catalogLink: "satin-europe",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "satin-europe.jpg",
          img2: "satin-europe-1.jpg",
          img3: "satin-europe-2.jpg"
        }
      },
      {
        title: "Палисандр сантос",
        materials: "",
        description: 'Цвет от розовато-коричневого до фиолетово-коричневого. Древесина этой породы имеет несколько волокнистую структуру, волнисто-свилеватая, с крупной текстурой. В настоящее время является признанной породой, имеющий высокий спрос на рынке, как декоративная древесина для мебели высокого класса. Особенностью породы является большое разнообразие оттенков, вплоть до того, что у каждого дерева они могут быть свои.<br/><br/>  <strong>Применение:</strong> Изготовление декоративного шпона, мебельное и краснодеревное производство. Пиломатериалы из древесины "палисандр" Сантос находят применение в производстве эксклюзивной мебели, напольных покрытий, изготовлении столешниц, подоконников и лестниц.',
        description2: "",
        img: "rosewood-santos.jpg",
        catalogLink: "rosewood-santos",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "rosewood-santos.jpg",
          img2: "rosewood-santos-1.jpg"
        }
      },
      {
        title: "Палисандр, Индия",
        materials: "",
        description: "По цвету: от светлого, почти золотисто-коричневого до розовато-багрового разных тонов, с более тёмными штрихами.Древесина тусклая, с однородной и умеренно крупной текстурой, со свилеватыми волокнами, образующие узкие полоски.При порозаполнении превосходно полируется и воспринимает восковую отделку. Позволяет получать красивый декоративный шпон.<br/><br/>  <strong>Применение:</strong> Мебельное и краснодеревное производства высокого класса, покрытие полов, изготовление шпона.",
        description2: "",
        img: "rosewood-india.jpg",
        catalogLink: "rosewood-india",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "rosewood-india.jpg",
          img2: "rosewood-india-1.jpg"
        }
      },
      {
        title: "Платан",
        materials: "",
        description: "По цвету напоминает бук. Ядро светлое красновато-коричневое, обычно четко отграничено от более светлой заболони. Сердцевинные лучи шире и многочисленнее, чем у бука, и создают красивый крапчатый рисунок на радиальных разрезах. Красновато-коричневые сердцевинные лучи контрастируют с более светлым фоном, что объясняет происхождение английского названия древесины платана радиальной распиловки - lacewood (cлово lасе означает кружево, wood – древесина).<br/><br/>  <strong>Применение:</strong> Художественно-декоративные изделия, отделка интерьеров, изготовление мозаик и декоративного облицовочного шпона.",
        description2: "",
        img: "sycamore.jpg",
        catalogLink: "sycamore",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "sycamore.jpg",
          img2: "sycamore-1.jpg"
        }
      },
      {
        title: "Суар",
        materials: "",
        description: "Суар является быстрорастущим деревом, имеющим твердую древесину с очень красивой текстурой. Необыкновенный рисунок образуют годовые кольца, обладающие яркими контрастными оттенками и богатой палитрой. Порода устойчива к высокой влажности и не рассыхается на протяжении длительного времени.Благодаря сильному сцеплению волокон древесина имеет высокую прочность и долговечность. Порода устойчива к высокой влажности и не рассыхается на протяжении длительного времени.Суар достаточно популярен у производителей мебели. Суар не вызывает аллергических реакций и не обладает специфическими запахами, что позволяет использовать его в производстве кухонной мебели, посуды, сервировочных аксессуаров, а также детских игрушек.",
        description2: "",
        img: "suar.jpg",
        catalogLink: "suar",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "suar.jpg"
        }
      },
      {
        title: "Сукупира",
        materials: "",
        description: "Цвет от темно-коричневого до красновато-коричневого, со светлыми желтыми прожилками,особенно различимыми на радиальных разрезах. Древесина сукупиры твердая, тяжелая, вязкая и прочная. Имеет 3 класс биостойкости - возможно применение на открытом воздухе, не рекомендуется контакт с землёй. <br/><br/>  <strong>Применение:</strong> Мебельное и токарное производство, напольные покрытия, окна, двери, судостроение, изготовление шпона. Древесину этой породы используют также в строитель­стве массивных сооружений, каркасов домов.",
        description2: "",
        img: "sukupira.jpg",
        catalogLink: "sukupira",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "sukupira.jpg"
        }
      },
      {
        title: "Тамо [ASH, JAPANESE]",
        materials: "",
        description: "Покрытие полов, производство спортивного инвентаря, мебели. Отборные материалы дают декоративный шпон с крапчатыми и завитковыми узорами, который высоко ценится в отделке интерьеров высокого класса.",
        description2: "",
        img: "tamo.jpg",
        catalogLink: "tamo",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "tamo.jpg",
          img2: "tamo-1.jpg"
        }
      },
      {
        title: "Тайгервуд",
        materials: "",
        description: "Древесина: На свежем срезе розовато- или желтовато-коричневая, со временем приобретает красно-коричневый и темно-коричневый оттенок. Тайгервуд Goncalo Alves имеет характерный для этой породы пестрый рисунок, образующийся темно-коричневыми ярко выраженными полосками, иногда беспорядочно расположенными на поверхности среза. Из-за такого пестрого рисунка порода и получила обиходное название тайгервуд (tigerwood). <br/><br/>  <strong>Применение:</strong> Производство строганого шпона, изготовление напольных покрытий, токарных изделий, мебели высокого класса, музыкальных инструментов. Применяется так же во внутренней и внешней отделке помещений. ",
        description2: "",
        img: "tigerwood.jpg",
        catalogLink: "tigerwood",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "tigerwood.jpg",
          img2: "tigerwood-1.jpg"
        }
      },
      {
        title: "Тик",
        materials: "Тик - одна из самых известных в мире и ценных древесных пород. Встречается во многих тропических районах цвет изменяется до темно-коричневого, иногда с темными крапинами. Древесина тусклая, блеклая, шероховатая и маслянистая на ощупь, с характерным запахом на свежем срезе, напоминающим запах кожи. Волокна варьируют от прямых, типичных для лучшей древесины из Бирмы, до волнистых, что более характерно для индийского тика. Бирманская разновидность древесины тика более однородна по цвету, с немногочисленными крапинами, тогда как в Индии пятнистость древесины нередко обильная. Текстура довольно крупная и неровная. Тик - очень долговечная, стойкая порода.Тик хорошо поддается токарной обработке, протравливанию красителями, удовлетворительно склеивается сразу же после обработки резанием или шлифования, удовлетворительно лакируется или полируется. ",
        description: "<strong>Применение: </strong> Древесина тика имеет большой спрос на мировом рынке благодаря таким качествам, как долговечность, прочность, умеренная плотность, привлекательный внешний вид и стабильность при колебании атмосферных условий, легкость обработки. Тик применяется в мебельном производстве и судостроении, для изготовления столярных изделий высокого качества (двери, лестницы и пр.), панельной облицовки, шпона, фанеры, пиломатериалов, сооружений в портах и доках, покрытия полов, а так же в тех случаях, когда требуется химически стойкая древесина.",
        description2: "",
        img: "tick.jpg",
        catalogLink: "tick",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "tick.jpg",
          img2: "tick-1.jpg"
        }
      },
      {
        title: "Эбен Маскар [MACASSAR EBONY]",
        materials: "",
        description: "Преимущественно серовато-коричневого с более темными штрихами или черными полосами. Древесина гладкая на ощупь, с мелкой и однородной текстурой, прямоволокнистая. Древесина макасара (Macassar Ebony) сравнительно прочная, но её потенциальный рынок сбыта зависит больше от декоративной ценности. Очень стойкая порода. <br/><br/>  <strong>Применение:</strong> Резные и токарные изделия, краснодеревные работы, инкрустация, художественно-декоративные изделия, производство шпона.",
        description2: "",
        img: "eben-maskar.jpg",
        catalogLink: "eben-maskar",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "eben-maskar.jpg",
          img2: "eben-maskar-1.jpg",
          img3: "eben-maskar-2.jpg"
        }
      },
      {
        title: "Эбеновое дерево [EBONY, AFRICAN]",
        materials: "",
        description: "Одна из лучших глянцево-черных разновидностей древесины относится к Diospyros crassiflora.Другие ботанические виды дают красивые черные и коричневые разновидности древесины с полосатым рисунком. Очень стойкая древесина.Древесина эбенового дерева отлично полируется.<br/><br/>  <strong>Применение:</strong> Токарные и художественно-декоративные изделия, инкрустация и мозаика, музыкальные инструменты.",
        description2: "",
        img: "ebony-wood.jpg",
        catalogLink: "ebony-wood",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "ebony-wood.jpg",
          img2: "ebony-wood-1.jpg"
        }
      },
      {
        title: "Эвкалипт",
        materials: "",
        description: "По цвету от золотисто-медового до розово-коричневого. Древесина обычно свилеватая, иногда прямоволокнистая, с текстурой от среднего до крупного размера. Финишная обработка капа эвкалипта осуществляется обычным образом, и лакирование или полировка поверхности хорошо подчеркивают его насыщенную текстуру. <br/><br/>  <strong>Применение:</strong> Строительство, обшивочные доски (при условии антисептирования), покрытие полов, изготовление мебели, производство шпона.",
        description2: "",
        img: "eucalyptus.jpg",
        catalogLink: "eucalyptus",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "eucalyptus.jpg",
          img2: "eucalyptus-1.jpg"
        }
      },
      {
        title: "Этимое",
        materials: "",
        description: "Другие названия: тигровое дерево, tigerwood (для древесины с пестрым рисунком), entedua (Гана), bofelele (Конго), andem-evine (Габон).Ядро красновато-коричневое, заболонь палевая шириной от 5 до 10 см. Структура волокон прямая, либо слегка свилеватая, что образует муаровый рисунок на срезе древесины. Некоторые деревья имеют древесину с черными прожилками или пятнами, которая носит коммерческое название тайгервуд (tigerwood) и высоко ценится на рынке шпона и пиломатериалов. Древесину Этимое используют в различных целях, таких как: производство шпона и фанеры, изготовление мебели и её компонентов, краснодеревные работы, напольные покрытия, внутренняя и внешняя панельная отделка помещений, для производства дверей.",
        description2: "",
        img: "etymoe.jpg",
        catalogLink: "etymoe",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "etymoe.jpg",
          img2: "etymoe-1.jpg"
        }
      },
      {
        title: "Этимое Wild",
        materials: "Новинка в ассортименте натурального шпона  - Этимое Wild, для производства дверей, мебели и панельной отделки помещений. ",
        description: "Этимое Wild - это настоящий африканский сюрреализм, воплощенный в дереве. Вот так, обычная тропическая порода, может выглядеть внутри.<br/> <br/>Другое название этой древесины, которое встречается в обиходе - Дэвилвуд (Devilwood), что полностью оправдывает неистовость и необузданность текстуры.<br/><br/> Вы получаете возможность проявить свою индивидуальность и произвести незабываемое впечатление на окружающих своими интерьерами.<br/><br/> <strong>Применение:</strong> Древесину Этимое используют в различных целях, таких как: производство шпона и фанеры, изготовление мебели и её компонентов, краснодеревные работы, напольные покрытия, внутренняя и внешняя панельная отделка помещений. ",
        description2: "",
        img: "etymoe-wild.jpg",
        catalogLink: "etymoe-wild",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "etymoe-wild.jpg",
          img2: "etymoe-wild-1.jpg"
        }
      },
      {
        title: "Якаранда [JACARANDA]",
        materials: "Очень разнообразна по рисунку и цвету, варьируя от шоколадного до фиолетово-коричневого с багрово-чёрными прожилками, образующими как бы паутину. Чёрные прожилки часто перекрываются, образуя иллюзию ландшафта.",
        description: " Палисандр Jacaranda (джакаранда, якаранда) известна уже около 200 лет как декоративный материал, применяемый в форме пиломатериалов и шпона, является очень редкой и дорогой, если вообще доступна. В настоящее время используется в виде шпона для облицовки мебели, роялей, пианино, краснодеревных изделий и в цельном виде - для художественно-декоративных поделок, изготовления рукояток ножей, наборного паркета, и т.д. Древесина якаранды считается одной из лучших для изготовления деталей акустических музыкальных инструментов.",
        description2: "",
        img: "yakaranda.jpg",
        catalogLink: "yakaranda",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "yakaranda.jpg"
        }
      },
      {
        title: "Ясень",
        materials: "",
        description: "Ясень - одна из лучших пород для гнутья, и пиломатериалы этой породы широко используются в производстве соответствующей мебели, в том числе стульев. Древесина ясеня применяется также в производстве фанеры и декоративного облицовочного шпона, спортивного инвентаря, рукояток инструментов.Прочность: по основным показателям механических свойств древесины ясень сходен с дубом, но отличается более высокой ударной вязкостью и сопротивлением раскалыванию.",
        description2: "",
        img: "ash.jpg",
        catalogLink: "ash",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "ash.jpg"
        }
      },
      {
        title: "Ясень белый корень",
        materials: "",
        description: "Натуральный шпон из капа ясеня Ясень корень [Ash burl].",
        description2: "«Корень» - особая конфигурация шпона с уникальной текстурой, получаемого из наростов (капов) на стволе дерева, что является большой редкостью. Как правило, наросты образуются на дереве в местах разрастания побегов и спящих почек в отдельных породах древесины. Кап является очень редким и красивым материалом с необычным рисунком волокон, напоминающим мрамор.",
        img: "ash-white-root.jpg",
        catalogLink: "ash-white-root",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "ash-white-root.jpg"
        }
      },
      {
        title: "Ясень дальневосточный",
        materials: "",
        description: "Пиломатериалы из древесины ясеня дальневосточного используются в судостроении, производстве мебели, столярных изделий, паркета. Из ясеня также изготавливают высококачественный шпон и фанеру.",
        description2: "",
        img: "ash-of-the-far-east.jpg",
        catalogLink: "ash-of-the-far-east",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "ash-of-the-far-east.jpg"
        }
      },
      {
        title: "Дуб корень",
        materials: "Натуральный шпон из капа дуба - Дуб корень [Oak Burl].",
        description: "«Шпон корень» - особая конфигурация шпона с уникальной текстурой, получаемого из наростов (капов) на стволе дерева, что является большой редкостью. Как правило, наросты образуются на дереве в местах разрастания побегов и спящих почек в отдельных породах древесины. Кап является очень редким и красивым материалом с необычным рисунком волокон, напоминающим мрамор.",
        description2: "Наросты (капы), изредка образующиеся на стволах деревьев, используются для изготовления облицовочного шпона с высокими декоративными качествами, текстура такого шпона носит название «корень».",
        img: "oak-root.jpg",
        catalogLink: "oak-root",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "oak-root.jpg",
          img2: "oak-root-1.jpg",
          img3: "oak-root-2.jpg"
        }
      },
      {
        title: "Лауро претто ",
        materials: "",
        description: "Лауро Прето имеет великолепную окраску от светло-коричневой до оливково-коричневой, что с успехом  может использоваться для создания элементов мебели и декора, где требуется создать акцент, и поставлена задача подчеркнуть солидность и благородство. <br/><br/>  <strong>Применение:</strong> Лауро Прето, как красивая порода, потенциально пригодна для мебельного и столярного производства, изготовления декоративного шпона.",
        description2: "",
        img: "lauro-preto.jpg",
        catalogLink: "lauro-preto",
        catalogPathImg: "/materials/",
        catalogImgs: {
          img1: "lauro-preto.jpg",
          img2: "lauro-preto-1.jpg",
          img3: "lauro-preto-2.jpg"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "materials container" }, _attrs))}><h1 class="catalog-title"><span>Материалы используемые компанией Royal Wood</span></h1><div class="materials"><div class="materials-items"><!--[-->`);
      ssrRenderList(materialsItems, (item) => {
        _push(ssrRenderComponent(Materials, {
          key: item.title,
          "catalog-data": item
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/materials/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-b33539ec.js.map
