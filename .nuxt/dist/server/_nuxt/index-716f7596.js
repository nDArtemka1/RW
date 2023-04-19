import "./index-e12b288f.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { P as Popup } from "./Popup-c7d2f0a6.js";
import { F as Form } from "./Form-14163f41.js";
import { C as Categories } from "./Categories-fe1ec79b.js";
import { C as CatalogItems } from "./CatalogItems-f31c3037.js";
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
/* empty css                   *//* empty css                     *//* empty css                         */import "swiper";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "defu";
import "@fortawesome/free-solid-svg-icons";
const index_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  components: {
    Popup,
    Form,
    Categories,
    CatalogItems
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
      title: "Royal-Wood | Классические Кухни на заказ в Москве | Изготовление кухонной мебели по размерам под заказ"
    });
    const catalogItems = [
      {
        title: "Кухня в Апартаментах на Кутузовском проспекте",
        materials: "Материал: Массив шпона ольхи, мдф плита",
        description: "Столешница - мрамор. Ручки Италия. Отделка - эмаль, серебряная поталь. Цвет по RAL белый.  Внимание! Стоимость техники, ручек и камня расчитывается отдельно. Срок изготовления 1.5 месяца. ",
        img: "kukhnya-1.jpg",
        catalogLink: "kukhnya-1",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-1.jpg",
          img2: "kukhnya-slide-1-1.jpg",
          img3: "kukhnya-slide-1-2.jpg",
          img4: "kukhnya-slide-1-3.jpg"
        }
      },
      {
        title: "Кухня в КП Вешки",
        materials: "Материал: Мдф, Латунь",
        description: 'Эксклюзивная дизайнерская кухня в модном цвете "классический синий" ! Раскладка из латуни несомненно сделала внешний облик кухни еще богаче и добавила винтажные нотки',
        img: "kukhnya-2.jpg",
        catalogLink: "kukhnya-2",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-2.jpg",
          img2: "kukhnya-slide-2-1.jpg",
          img3: "kukhnya-slide-2-2.jpg",
          img4: "kukhnya-slide-2-3.jpg"
        }
      },
      {
        title: "Кухня в ЖК Knightsbridge Private Park",
        materials: "Материал: Массив ольхи",
        description: "Роскошная дизайнерская кухня премиум-класса,  стилизованная под итальянский бренд, с дорогой отделкой в виде резных узоров на фасадах.  Площадь помещения позволила нам установить дополнительно большой и функциональный остров  с различными по своему назначению местами для хранения",
        img: "kukhnya-3.jpg",
        catalogLink: "kukhnya-3",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-3.jpg",
          img2: "kukhnya-slide-3-1.jpg",
          img3: "kukhnya-slide-3-2.jpg",
          img4: "kukhnya-slide-3-3.jpg",
          img5: "kukhnya-slide-3-4.jpg",
          img6: "kukhnya-slide-3-5.jpg",
          img7: "kukhnya-slide-3-6.jpg",
          img8: "kukhnya-slide-3-7.jpg",
          img9: "kukhnya-slide-3-8.jpg",
          img10: "kukhnya-slide-3-9.jpg",
          img11: "kukhnya-slide-3-10.jpg",
          img12: "kukhnya-slide-3-11.jpg",
          img13: "kukhnya-slide-3-12.jpg",
          img14: "kukhnya-slide-3-13.jpg"
        }
      },
      {
        title: "Кухня в квартире на Мосфильмовской",
        materials: "Материал: Массив и шпон ольхи, Отделка- фиолетовая эмаль с чёрной патиной, серебряная поталь",
        description: "Смелая и яркая кухня в современной классике из массива и шпона ольхи. Отделка- фиолетовая эмаль с чёрной патиной, серебряная поталь. Несмотря на небольшой размер, в этом проекте удалось вместить всю необходимую для современной жизни технику, включая большой двустворчатый холодильник. Срок изготовления 1.5 месяца. Австрийская фурнитура Blum. Столешница - гранит. Ручки Италия. Внимание! Стоимость техники, ручек и камня расчитывается отдельно.",
        img: "kukhnya-4.jpg",
        catalogLink: "kukhnya-4",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-4.jpg",
          img2: "kukhnya-slide-4-1.jpg",
          img3: "kukhnya-slide-4-2.jpg",
          // img4: "kukhnya-slide-4-3.jpg",
          img5: "kukhnya-slide-4-4.jpg"
        }
      },
      {
        title: "Кухня в КП Идиллия",
        materials: "Материал: Массив и шпон ольхи. Белая эмаль",
        description: "Кухня премиум класса с островом в стиле современная классика. Наиболее выигрышно классика сочетается именно со светлыми оттенками. Белый цвет подчеркивает строгую симметрию форм кухонной мебели, присущую именно этому интерьерному направлению. Характерный декор смотрится воздушно и изящно. Но хотим напомнить, что для себя Вы можете выбрать абсолютно любое цветовое решение по каталогу RAL",
        img: "kukhnya-5.jpg",
        catalogLink: "kukhnya-5",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-5.jpg",
          img2: "kukhnya-slide-5-1.jpg",
          img3: "kukhnya-slide-5-2.jpg"
        }
      },
      {
        title: "Кухня в КП Кронбург",
        materials: "Материал: Фасады из массива ольхи, корпуса из влагостойкой мебельной фанеры",
        description: "Далеко не все мебельные фабрики берутся за классику. Ведь классическая мебель с точки зрения изготовления самая сложная.  Эта премиальная кухня для таунхауса в КП Кронбург позволяет оценить уровень нашего профессионализма и мастерства. Сложные узлы, стыковки, рельефы, отделка высочайшего уровня - эмаль, патина, серебряная поталь, множество резных элементов, радиусные колонны, радиусный карниз и при этом европейское качество! Стоимость таких работ всегда рассчитывается индивидуально и зависит от объема и сложности элементов",
        img: "kukhnya-6.jpg",
        catalogLink: "kukhnya-6",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-6.jpg",
          img2: "kukhnya-slide-6-1.jpg",
          img3: "kukhnya-slide-6-2.jpg",
          img4: "kukhnya-slide-6-3.jpg",
          img5: "kukhnya-slide-6-4.jpg",
          img6: "kukhnya-slide-6-5.jpg",
          img7: "kukhnya-slide-6-6.jpg"
        }
      },
      {
        title: "Кухня для квартиры на Кутузовском проспекте",
        materials: "Материал: Массив ольхи",
        description: "Проект этой квартиры на Кутузовском в стиле современной классики собрал много положительных отзывов в наших социальных сетях. Небольшая по площади кухня получилась необыкновенно изящная и уютная, как и задумала хозяйка.  Австрийская фурнитура Blum. Столешница - мрамор. Ручки Италия. Фасады со стеклом и деревянной раскладкой. В комплектацию входит волшебный уголок, а также лоток для столовых приборов из массива ольхи. Срок изготовления 1.5 месяца. Внимание! Стоимость техники, ручек и камня расчитывается отдельно",
        img: "kukhnya-7.jpg",
        catalogLink: "kukhnya-7",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-7.jpg",
          img2: "kukhnya-slide-7-1.jpg",
          img3: "kukhnya-slide-7-2.jpg",
          img4: "kukhnya-slide-7-3.jpg",
          img5: "kukhnya-slide-7-4.jpg",
          img6: "kukhnya-slide-7-5.jpg",
          img7: "kukhnya-slide-7-6.jpg",
          img8: "kukhnya-slide-7-7.jpg",
          img9: "kukhnya-slide-7-8.jpg",
          img10: "kukhnya-slide-7-9.jpg"
        }
      },
      {
        title: "Кухня КП Жуковка XXI",
        materials: "",
        description: "Иногда дизайнерские решения выглядят безупречно,  но не могут быть использованы именно в Вашем интерьере. Мы можем довести Вашу кухню до идеала! Например, как в этом проекте брендовую кухню заказчики решили дополнить секциями шкафов и островом, выполненными по индивидуальным размерам. Как видите, невозможно даже усомниться в том , что левая и правая части гарнитура могут быть «неродными». ",
        img: "kukhnya-8.jpg",
        catalogLink: "kukhnya-8",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-8.jpg",
          img2: "kukhnya-slide-8-1.jpg"
        }
      },
      {
        title: "Кухня в коттедже в Поздняково",
        materials: "",
        description: "Серые оттенки - отличная замена привычным бежевым цветам, присущим классике. Серо-голубой, графитовый, серебристый, французский серый – все эти тона отлично подойдут для кухни в стиле неоклассика. Остров удачно совмещает и рабочую поверхность с встроенной мойкой, и небольшую барную стойку с другой стороны для утренней чашечки кофе. Отделка серебряной поталью и чёрной патиной вносит нотки благородства и изысканности в этот гарнитур. ",
        img: "kukhnya-9.jpg",
        catalogLink: "kukhnya-9",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-9.jpg",
          img2: "kukhnya-slide-9-1.jpg",
          img3: "kukhnya-slide-9-2.jpg"
        }
      },
      {
        title: "Кухня в загородном доме на Рублевское ш",
        materials: "",
        description: "Кухня из массива ольхи в традиционном классическом стиле. Необыкновенно торжественное сочетание глубокого винного оттенка и золотой резьбы. В комплекте также были изготовлены барные стулья и обеденный стол. Отделка : эмаль, патина, золотая поталь",
        img: "kukhnya-10.jpg",
        catalogLink: "kukhnya-10",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-10.jpg",
          img2: "kukhnya-slide-10-1.jpg",
          img3: "kukhnya-slide-10-2.jpg",
          img4: "kukhnya-slide-10-3.jpg",
          img5: "kukhnya-slide-10-4.jpg",
          img6: "kukhnya-slide-10-5.jpg"
        }
      },
      {
        title: "Кухня в посёлке Николина гора",
        materials: "",
        description: "Благородная, Интересная по своему цветовому решению кухня, сочетающая шкафы цвета слоновой кости и темно-оливковый двухуровневый остров с патиной. Выдвижные колонны, резные патинированные вставки. Австрийская фурнитура Blum. Столешница - мрамор. Ручки Италия. В комплектацию входит лоток для столовых приборов из массива ольхи с нашей фирменной гравировкой. Внимание! Стоимость техники, ручек и камня расчитывается отдельно. Срок изготовления 1.5 месяца",
        img: "kukhnya-11.jpg",
        catalogLink: "kukhnya-11",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-11.jpg",
          img2: "kukhnya-slide-11-1.jpg",
          img3: "kukhnya-slide-11-2.jpg",
          img4: "kukhnya-slide-11-3.jpg"
        }
      },
      {
        title: "Кухня в квартире на Косыгина",
        materials: "",
        description: "Ещё одна представительница традиционной классики в нашем портфолио. П-образная кухня из массива в цвете Айвори - торжество строгости и элегантности",
        img: "kukhnya-12.jpg",
        catalogLink: "kukhnya-12",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-12.jpg",
          img2: "kukhnya-slide-12-1.jpg"
        }
      },
      {
        title: "Кухня в КП Усово",
        materials: "Материал: Массив ольхи - фасады, корпус - влагостойкая мебельная фанера; отделка : эмаль, золотая поталь",
        description: "Традиционный классический интерьер в бежево-золотистых тонах украшает п-образная кухня, объединённая с обеденной зоной",
        img: "kukhnya-13.jpg",
        catalogLink: "kukhnya-13",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-13.jpg",
          img2: "kukhnya-slide-13-1.jpg",
          img3: "kukhnya-slide-13-2.jpg"
        }
      },
      {
        title: "Кухня КП Усово",
        materials: "Материал: Массив ольхи",
        description: "Эксклюзивная кухня со вставками на фасадах, выполненными из ценной породы - корень ясеня. Цена по запросу",
        img: "kukhnya-14.jpg",
        catalogLink: "kukhnya-14",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-14.jpg",
          img2: "kukhnya-slide-14-1.jpg",
          img3: "kukhnya-slide-14-2.jpg",
          img4: "kukhnya-slide-14-3.jpg"
        }
      },
      {
        title: "Кухня в квартире в Заречье",
        materials: "Материал: МДФ, отделка эмаль, золотая поталь.",
        description: "Изящная кухня в современной классике. Отличительная особенность и неугасающий тренд - деревянная раскладка на стеклянных фасадах. Использование стекла и подсветки внутри шкафов придаёт легкости, зрительно освежают помещение, делают более просторным и ухоженным",
        img: "kukhnya-15.jpg",
        catalogLink: "kukhnya-15",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-15.jpg"
          // img2: "kukhnya-slide-15-1.jpg",
          // img3: "kukhnya-slide-15-2.jpg",
          // img3: "kukhnya-slide-15-3.jpg",
        }
      },
      {
        title: "Кухня в частном доме",
        materials: "",
        description: "Белая кухня с черной столешницей - смелое решение и необычный интерьер. Но грамотный выбор цвета фартука разбавляет этот контраст, а стены теплого оттенка добавляют уюта помещению. Кухни Белого цвета не первый год бьют все рекорды по популярности",
        img: "kukhnya-16.jpg",
        catalogLink: "kukhnya-16",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-16.jpg"
          // img2: "kukhnya-slide-16-1.jpg",
          // img3: "kukhnya-slide-16-2.jpg",
          // img3: "kukhnya-slide-16-3.jpg",
        }
      },
      {
        title: "Кухня в КП Усово",
        materials: "",
        description: "С недавнего времени серый цвет перестал быть скучным, напротив он стал признаком хорошего вкуса. Но есть несколько секретов. Поверхность серой кухни в классике обязательно должна быть матовой или выполненной в технике искусственного состаривания (покрыта патиной). Резьба, витражи, стеклянные вставки — все это сделает мебель красивой и благородной. ",
        img: "kukhnya-17.jpg",
        catalogLink: "kukhnya-17",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-17.jpg"
          // img2: "kukhnya-slide-17-1.jpg",
          // img3: "kukhnya-slide-17-2.jpg",
          // img3: "kukhnya-slide-17-3.jpg",
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "catalog container" }, _attrs))}><h1 class="catalog-title"><span>Кухни классика</span></h1><div class="catalog-descriptions"><p class="catalog-description"> Кухни классика как были, так и остаются одним из самых востребованных запросов в нашей мастерской. При всей монументальности они остаются изящными и элегантными, для настоящих ценителей. </p><p class="catalog-description"> Кухня в классическом стиле - уютная, роскошная, изысканная, утонченная. Здесь каждая деталь имеет свое значение. Но Важно, чтобы все было сбалансировано. Декор – это то, что отличает классические интерьеры. Роскошные резные фасады кухонного гарнитура, бронзовые или позолоченные ручки и петли, полуколонны, барельефы, инкрустация, патина и поталь - все это мы можем предложить Вам в качестве отделки. </p><p class="catalog-description"> Для любителей классических традиций, предпочитающих максимальный комфорт, мы можем реализовать кухню в стиле современная классика. Вы получите более сдержанный и аристократичный гарнитур, который гармонично впишется практически в любой по дизайну интерьер. </p></div><div class="catalog-items"><!--[-->`);
      ssrRenderList(catalogItems, (item) => {
        _push(ssrRenderComponent(CatalogItems, {
          key: item.title,
          "catalog-data": item
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/classic/dressing-rooms/classic/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-716f7596.js.map
