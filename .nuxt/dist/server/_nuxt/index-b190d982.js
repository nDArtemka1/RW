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
      title: "Royal-Wood | Современные Кухни на заказ в Москве | Изготовление кухонной мебели по размерам под заказ"
    });
    const catalogItems = [
      {
        title: "Кухня в квартире на Полянке",
        materials: "",
        description: "Большой   и очень красивый проект  совместно с дизайнером Соболевой Софией отличается сочетанием в отделке трендовых на сегодняшний день и дорогих натуральных материалов. Кухня Поддерживает заданный стиль: фасады из ореха гармонируют с эмалью светлого оттенка, мраморная столешница, ручки из латуни, хром и стекло в оформлении витрин. Естественно как любая современная кухня она полностью укомплектованна встроеннной техникой, включая винный шкаф с постоянной влажностью, правильной температурой и минимальным количеством света. Иметь дома несколько бутылок хорошего вина – прекрасная привычка, которая подчеркивает статус и эстетические вкусы хозяев.",
        img: "kukhnya-1.jpg",
        catalogLink: "kukhnya-1",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-1.jpg",
          img2: "kukhnya-slide-1-1.jpg",
          img3: "kukhnya-slide-1-2.jpg",
          img4: "kukhnya-slide-1-3.jpg",
          img5: "kukhnya-slide-1-4.jpg",
          img6: "kukhnya-slide-1-5.jpg",
          img7: "kukhnya-slide-1-6.jpg",
          img8: "kukhnya-slide-1-7.jpg",
          img9: "kukhnya-slide-1-8.jpg",
          img10: "kukhnya-slide-1-9.jpg"
        }
      },
      {
        title: "Кухня в ЖК Эмеральд",
        materials: "",
        description: "По заказу дизайнера Оксаны Короткиной мы выполнили квадратный остров, украшающий кухню одного известного бренда.Для столещницы и основания выбрали торжественный мрамор, а фасады повторяют дизайн кухни в цвете Латте.Кухонный остров Должен быть не только красивым, но и функциональным.С одной стороны мы встроили винный шкаф, а с другой – дополнительную систему хранения.  Вы убедитесь, что остров – это удобно, красиво и функционально, если выбрать именно тот вариант, который Вам подходит. Наши специалисты несомненно Вам в этом помогут.",
        img: "kukhnya-2.jpg",
        catalogLink: "kukhnya-2",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-2.jpg",
          img2: "kukhnya-slide-2-1.jpg",
          img3: "kukhnya-slide-2-2.jpg",
          img4: "kukhnya-slide-2-3.jpg",
          img5: "kukhnya-slide-2-4.jpg"
        }
      },
      {
        title: "Кухня в таунхаусе КП Ильинка",
        materials: "",
        description: "Кухня в современном стиле - комфортная, функциональная, вместительная. Но главным трендом всегда будет использование экологичных материалов. В этой модели мы удачно совместили классические и совремнные формы: карнизы и цоколь, а также колонны относятся к классике, но фасады из шпона ореха выполнены в современном дизайне, с использованием затемненного стекла. Фурнитура Блюм. Техника, холодильники и винный шкаф расположены в отдельностоящем корпусе.",
        img: "kukhnya-3.jpg",
        catalogLink: "kukhnya-3",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-3.jpg",
          img2: "kukhnya-slide-3-1.jpg",
          img3: "kukhnya-slide-3-2.jpg",
          img4: "kukhnya-slide-3-3.jpg",
          img5: "kukhnya-slide-3-4.jpg",
          img6: "kukhnya-slide-3-5.jpg"
        }
      },
      {
        title: "Кухня в ЖК Мосфильмовский",
        materials: "Материал: Массив и шпон ольхи",
        description: "Современная кухня из массива и шпона ольхи в минималистичном дизайне со встроенной техникой, с подсветкой, отделка – матовая эмаль в молочном оттенке. Конструкция фасадов спроектирована таким образом, что не требует установки ручек.   Ничего лишнего – свобода и рациональность.",
        img: "kukhnya-4.jpg",
        catalogLink: "kukhnya-4",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-4.jpg",
          img2: "kukhnya-slide-4-1.jpg",
          img3: "kukhnya-slide-4-2.jpg",
          img4: "kukhnya-slide-4-3.jpg"
        }
      },
      {
        title: "Кухня в КП Миллениум Парк",
        materials: "Материал: МДФ плита и шпона ореха ",
        description: "Авторская современная кухня с островом – яркий пример сочетания комфорта и функциональности, стиля и лаконичности, Выполнена из МДФ плиты и шпона ореха с легкой тонировкой. Часть фасадов  для модного контраста окрашены под  эмаль в светлый оттенок, для витрин подобрали необычное бронзовое стекло.Особая фишка – варочная панель, которую мы перенесли на кухонный остров, сделав его смысловым центром интерьера.",
        img: "kukhnya-5.jpg",
        catalogLink: "kukhnya-5",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-5.jpg",
          img2: "kukhnya-slide-5-1.jpg",
          img3: "kukhnya-slide-5-2.jpg"
        }
      },
      {
        title: "Кухня в клубном доме MonCher",
        materials: "",
        description: "Дизайн апартаментов в Клубном доме Mon Cher спроектирован архитектурным бюро «Бахарев и Партнеры». Акценты в современном интерьере создает крупная мебель с яркими фасадами. В данном случае это удобная кухня П-образной планировки. Роскошной кухню делают натуральные материалы,и особое место занимает камень. Мраморная столешница смотрится здесь очень эффектно.Наиболее ярким и удивительным трендом в последнее время стали гарнитуры с двухфазной отделкой верхних шкафчиков. Заметьте, фасады могут быть не просто разными по цвету, но и по глубине, материалу, визуальному эффекту (контрастные или нейтральные).",
        img: "kukhnya-6.jpg",
        catalogLink: "kukhnya-6",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-6.jpg",
          img2: "kukhnya-slide-6-1.jpg",
          img3: "kukhnya-slide-6-2.jpg",
          img4: "kukhnya-slide-6-3.jpg",
          img5: "kukhnya-slide-6-4.jpg",
          img6: "kukhnya-slide-6-5.jpg"
        }
      },
      {
        title: "Кухня в  ЖК Садовые кварталы",
        materials: "",
        description: "Элегантная кухня в совремнном стиле с легким флером классики в виде высокого профильного карниза и изящного золотистого декора на дверцах . Отличительная особенность и неугсающий тренд - деревянная раскладка на стеклянных фасадах. Кстати этот узор повторяется также на фасадах шкафов и на межкомнатных дверях в этом интерьере, объединяя по стилю все помещения.Использование стекла и подсветки внутри шкафов придает легкости, зрительно освежают помещение, делают более просторным и ухоженным. ",
        img: "kukhnya-7.jpg",
        catalogLink: "kukhnya-7",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-7.jpg",
          img2: "kukhnya-slide-7-1.jpg",
          img3: "kukhnya-slide-7-2.jpg"
        }
      },
      {
        title: "Кухня в квартире на Коломенской набережной",
        materials: "",
        description: "«Счастье живет на кухне...», поэтому даже в небольшой кухне мы поможем разместить все необходимое для комфортной и уютной атмосферы в Вашем доме. Например наш заказчик очень хотел винный шкаф, создающий специальные условия для хранения вина. Но стоимость такого девайса может превышать и 100 000 рублей, да и нужен он тем, у кого постоянно хранится не менее 10-20 бутылок вина, причем коллекционного, которое нельзя держать при комнатной температуре. Если Вы не готовы тратиться на винный шкаф, то допустимо хранить вино в горизонтальном положении, чтобы напиток касался пробки.  В этой компактной кухне мы спроектировали винный шкафчик в навесных шкафах.  Не ограничивайтесь стандартными решениями, продумайте оснащение Вашей кухни до мелочей!",
        img: "kukhnya-8.jpg",
        catalogLink: "kukhnya-8",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-8.jpg",
          img2: "kukhnya-slide-8-1.jpg",
          img3: "kukhnya-slide-8-2.jpg"
        }
      },
      {
        title: "Мини кухня для офиса",
        materials: "",
        description: "Наша заказчица – владелица частного ателье. расположившегося в Комплексе апартаментов Art Residence. Помимо дверей, шкафов, организации рабочего пространства, переговорной, хозяйка попросила нас спроектировать зону для встречи гостей, где можно было бы расслабиться, отдохнуть, отвлечься от суеты, чтобы обсуждать творческие моменты. Частью этой зоны стала мини кухня, отличающаяся индивидуальностью и комфортом. При своей лаконичности, все гости всегда обращают внимание на ручки из латуни, изготовленные  также на заказ.",
        img: "kukhnya-9.jpg",
        catalogLink: "kukhnya-9",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-9.jpg"
        }
      },
      {
        title: "Кухня в КП Павлово",
        materials: "Массив и шпон ольхи",
        description: "Универсальное и традиционное использование дерева в интерьере, хоть и в современной  интерпретации.  Ни один дизайнер, и ни один стиль не способны отказаться от этого материала. Кухня без лишнего декора, зато какая благородная фактура палисандра! Палисандр – экзотическая древесина, его яркий рисунок можно выкладывать различными художественными способами: как в строгом вертикальном или горизонтальном направлении, так и симметричными узорами. Особенно впечатляюще палисандр смотрится в финишной отделке глянцевым лаком.",
        img: "kukhnya-10.jpg",
        catalogLink: "kukhnya-10",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-10.jpg",
          img2: "kukhnya-slide-10-1.jpg",
          img3: "kukhnya-slide-10-2.jpg",
          img4: "kukhnya-slide-10-3.jpg",
          img5: "kukhnya-slide-10-4.jpg"
        }
      },
      {
        title: "Кухня в квартире на Ленинском проспекте",
        materials: "",
        description: "Кухня в лаконичном дизайне с красивым видом на Парк горького, что является уникальной интерьерной изюминкой, поэтому было решено  обустроить подоконник-столешницу из массива дерева, встроенный в кухонный гарнитур и перетекающий  в обрамление окна. Конструкция получилась удобной, гармонично вписалась в общую обстановку и прилично сэкономила пространство. Это превосходное решение для небольшой кухни. Остается только наслаждаться уютным завтраком.",
        img: "kukhnya-11.jpg",
        catalogLink: "kukhnya-11",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-11.jpg"
        }
      },
      {
        title: "Кухня в ЖК Садовые кварталы",
        materials: "<strong>Материалы и отделка:</strong> МДФ, матовая эмаль, шпон ясеня",
        description: "Сдержанная и стильная современная кухня класса люкс в ЖК Садовые кварталы спроектирована для молодого человека, который проживает один. Мужской дизайн отличает наличие брутальных фактур, поэтому для фасадов мы подобрали уникальный рисунок шпона ясеня с переливами, который имитирует эффект отделки кожей. Верхние шкафы покрашены матовой эмалью оттенка графит, создавая нестандартное и особо эстетичное сочетание цвета и фактур. Современный стиль всегда подразумевает комфорт. Наша кухня продумана до мелочей: на дверцах использованы скрытые ручки, чтобы визуально не портить образ лишними деталями, для полезного использования пространства в углах были всторены “волшебные уголки”, по периметру кухни и в стеклянных витринах встроена подсветка, а на столешнице предусмотрена зона для завтрака или перекуса.",
        img: "kukhnya-12.jpg",
        catalogLink: "kukhnya-12",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
          img1: "kukhnya-12.jpg",
          img2: "kukhnya-slide-12-1.jpg",
          img3: "kukhnya-slide-12-2.jpg",
          img4: "kukhnya-slide-12-3.jpg",
          img5: "kukhnya-slide-12-4.jpg",
          img6: "kukhnya-slide-12-5.jpg"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "catalog container" }, _attrs))}><h1 class="catalog-title"><span>Современные кухни</span></h1><div class="catalog-descriptions"><p class="catalog-description"> Задача каждого стиля воссоздать дух времени. В случае с современным стилем Вам надо слушать только себя и создавать свой эталон комфорта и уюта. </p><p class="catalog-description"> Для лаконичного и модного дизайна сегодня мы предлагаем ровные фасады без фрезеровки, отсутствие лишнего декора, хром, латунь, глянец, подсветка, механизмы плавного закрывание фасадов и push- механизмы для открывания. Для облицовки фасадов может быть использован как нутаральный шпон дерева, так и краска. По каталогу RAL вы можете выбрать абсолютно любой цвет, а если не подберете, то мы создадим для Вас свой уникальный оттенок. Но главными преимуществами нашей мебели по -прежнему остаются эстетика , качество и долговечность. </p></div><div class="catalog-items"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/kitchens/modern/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-b190d982.js.map
