<template>
    <section class="catalog container">
        <h1 class="catalog-title"><span>Мебель для интерьера </span></h1>

        <!-- Вывод категорий -->
        <div class="catalog-categories">
            <Categories
                v-for="item in categories"
                :key="item.title"
                :category-data="item"
            />
        </div>

        <!-- Вывод каталога товаров -->
        <h2 class="catalog-title">
            <span>Смотреть всю Мебель для интерьера</span>
        </h2>

        <div class="catalog-items">
            <CatalogItems
                v-for="item in catalogItems"
                :key="item.title"
                :catalog-data="item"
            />
        </div>
    </section>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";
import Form from "~~/components/All/Form.vue";
import Categories from "~~/components/Catalog/Categories.vue";
import CatalogItems from "~~/components/Catalog/CatalogItems.vue";

export default {
    components: {
        Popup,
        Form,
        Categories,
        CatalogItems,
    },
    data() {
        return {
            isVisible: false,
        };
    },
    methods: {
        closePopup() {
            this.isVisible = false;
        },
    },
};
</script>

<script setup>
useHead({
    title: "Royal-Wood | Мебель для интерьера на заказ в Москве | Изготовление кухонной мебели по размерам под заказ",
});

const categories = [
    {
        title: "Кухни в современном исполнении",
        categoryLink: "modern",
        categoryPath: "/catalog/kitchens/",
        img: "modern-title.jpg",
    },
    {
        title: "Кухни в классическом исполнении",
        categoryLink: "classic",
        categoryPath: "/catalog/kitchens/",
        img: "classic-title.jpg",
    },
    // {
    //     title: "С островом",
    //     categoryLink: "island",
    //     img: "island-title.jpg",
    // },
    // {
    //     title: "Под старину",
    //     categoryLink: "antique",
    //     img: "antique-title.jpg",
    // },
    // {
    //     title: "Элитные кухни",
    //     categoryLink: "elite",
    //     img: "elite-title.jpg",
    // },
];

const catalogItems = [
    //современные кухни
    {
        title: "Кухня в квартире на Полянке",
        materials: "",
        description:
            "Большой   и очень красивый проект  совместно с дизайнером Соболевой Софией отличается сочетанием в отделке трендовых на сегодняшний день и дорогих натуральных материалов. Кухня Поддерживает заданный стиль: фасады из ореха гармонируют с эмалью светлого оттенка, мраморная столешница, ручки из латуни, хром и стекло в оформлении витрин. Естественно как любая современная кухня она полностью укомплектованна встроеннной техникой, включая винный шкаф с постоянной влажностью, правильной температурой и минимальным количеством света. Иметь дома несколько бутылок хорошего вина – прекрасная привычка, которая подчеркивает статус и эстетические вкусы хозяев.",
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
            img10: "kukhnya-slide-1-9.jpg",
        },
    },
    {
        title: "Кухня в ЖК Эмеральд",
        materials: "",
        description:
            "По заказу дизайнера Оксаны Короткиной мы выполнили квадратный остров, украшающий кухню одного известного бренда.Для столещницы и основания выбрали торжественный мрамор, а фасады повторяют дизайн кухни в цвете Латте.Кухонный остров Должен быть не только красивым, но и функциональным.С одной стороны мы встроили винный шкаф, а с другой – дополнительную систему хранения.  Вы убедитесь, что остров – это удобно, красиво и функционально, если выбрать именно тот вариант, который Вам подходит. Наши специалисты несомненно Вам в этом помогут.",
        img: "kukhnya-2.jpg",
        catalogLink: "kukhnya-2",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-2.jpg",
            img2: "kukhnya-slide-2-1.jpg",
            img3: "kukhnya-slide-2-2.jpg",
            img4: "kukhnya-slide-2-3.jpg",
            img5: "kukhnya-slide-2-4.jpg",
        },
    },
    {
        title: "Кухня в таунхаусе КП Ильинка",
        materials: "",
        description:
            "Кухня в современном стиле - комфортная, функциональная, вместительная. Но главным трендом всегда будет использование экологичных материалов. В этой модели мы удачно совместили классические и совремнные формы: карнизы и цоколь, а также колонны относятся к классике, но фасады из шпона ореха выполнены в современном дизайне, с использованием затемненного стекла. Фурнитура Блюм. Техника, холодильники и винный шкаф расположены в отдельностоящем корпусе.",
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
            img6: "kukhnya-slide-3-5.jpg",
        },
    },
    {
        title: "Кухня в ЖК Мосфильмовский",
        materials: "Материал: Массив и шпон ольхи",
        description:
            "Современная кухня из массива и шпона ольхи в минималистичном дизайне со встроенной техникой, с подсветкой, отделка – матовая эмаль в молочном оттенке. Конструкция фасадов спроектирована таким образом, что не требует установки ручек.   Ничего лишнего – свобода и рациональность.",
        img: "kukhnya-4.jpg",
        catalogLink: "kukhnya-4",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-4.jpg",
            img2: "kukhnya-slide-4-1.jpg",
            img3: "kukhnya-slide-4-2.jpg",
            img4: "kukhnya-slide-4-3.jpg",
        },
    },
    {
        title: "Кухня в КП Миллениум Парк",
        materials: "Материал: МДФ плита и шпона ореха ",
        description:
            "Авторская современная кухня с островом – яркий пример сочетания комфорта и функциональности, стиля и лаконичности, Выполнена из МДФ плиты и шпона ореха с легкой тонировкой. Часть фасадов  для модного контраста окрашены под  эмаль в светлый оттенок, для витрин подобрали необычное бронзовое стекло.Особая фишка – варочная панель, которую мы перенесли на кухонный остров, сделав его смысловым центром интерьера.",
        img: "kukhnya-5.jpg",
        catalogLink: "kukhnya-5",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-5.jpg",
            img2: "kukhnya-slide-5-1.jpg",
            img3: "kukhnya-slide-5-2.jpg",
        },
    },
    {
        title: "Кухня в клубном доме MonCher",
        materials: "",
        description:
            "Дизайн апартаментов в Клубном доме Mon Cher спроектирован архитектурным бюро «Бахарев и Партнеры». Акценты в современном интерьере создает крупная мебель с яркими фасадами. В данном случае это удобная кухня П-образной планировки. Роскошной кухню делают натуральные материалы,и особое место занимает камень. Мраморная столешница смотрится здесь очень эффектно.Наиболее ярким и удивительным трендом в последнее время стали гарнитуры с двухфазной отделкой верхних шкафчиков. Заметьте, фасады могут быть не просто разными по цвету, но и по глубине, материалу, визуальному эффекту (контрастные или нейтральные).",
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
            img6: "kukhnya-slide-6-5.jpg",
        },
    },
    {
        title: "Кухня в  ЖК Садовые кварталы",
        materials: "",
        description:
            "Элегантная кухня в совремнном стиле с легким флером классики в виде высокого профильного карниза и изящного золотистого декора на дверцах . Отличительная особенность и неугсающий тренд - деревянная раскладка на стеклянных фасадах. Кстати этот узор повторяется также на фасадах шкафов и на межкомнатных дверях в этом интерьере, объединяя по стилю все помещения.Использование стекла и подсветки внутри шкафов придает легкости, зрительно освежают помещение, делают более просторным и ухоженным. ",
        img: "kukhnya-7.jpg",
        catalogLink: "kukhnya-7",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-7.jpg",
            img2: "kukhnya-slide-7-1.jpg",
            img3: "kukhnya-slide-7-2.jpg",
        },
    },
    {
        title: "Кухня в квартире на Коломенской набережной",
        materials: "",
        description:
            "«Счастье живет на кухне...», поэтому даже в небольшой кухне мы поможем разместить все необходимое для комфортной и уютной атмосферы в Вашем доме. Например наш заказчик очень хотел винный шкаф, создающий специальные условия для хранения вина. Но стоимость такого девайса может превышать и 100 000 рублей, да и нужен он тем, у кого постоянно хранится не менее 10-20 бутылок вина, причем коллекционного, которое нельзя держать при комнатной температуре. Если Вы не готовы тратиться на винный шкаф, то допустимо хранить вино в горизонтальном положении, чтобы напиток касался пробки.  В этой компактной кухне мы спроектировали винный шкафчик в навесных шкафах.  Не ограничивайтесь стандартными решениями, продумайте оснащение Вашей кухни до мелочей!",
        img: "kukhnya-8.jpg",
        catalogLink: "kukhnya-8",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-8.jpg",
            img2: "kukhnya-slide-8-1.jpg",
            img3: "kukhnya-slide-8-2.jpg",
        },
    },
    {
        title: "Мини кухня для офиса",
        materials: "",
        description:
            "Наша заказчица – владелица частного ателье. расположившегося в Комплексе апартаментов Art Residence. Помимо дверей, шкафов, организации рабочего пространства, переговорной, хозяйка попросила нас спроектировать зону для встречи гостей, где можно было бы расслабиться, отдохнуть, отвлечься от суеты, чтобы обсуждать творческие моменты. Частью этой зоны стала мини кухня, отличающаяся индивидуальностью и комфортом. При своей лаконичности, все гости всегда обращают внимание на ручки из латуни, изготовленные  также на заказ.",
        img: "kukhnya-9.jpg",
        catalogLink: "kukhnya-9",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-9.jpg",
        },
    },
    {
        title: "Кухня в КП Павлово",
        materials: "Массив и шпон ольхи",
        description:
            "Универсальное и традиционное использование дерева в интерьере, хоть и в современной  интерпретации.  Ни один дизайнер, и ни один стиль не способны отказаться от этого материала. Кухня без лишнего декора, зато какая благородная фактура палисандра! Палисандр – экзотическая древесина, его яркий рисунок можно выкладывать различными художественными способами: как в строгом вертикальном или горизонтальном направлении, так и симметричными узорами. Особенно впечатляюще палисандр смотрится в финишной отделке глянцевым лаком.",
        img: "kukhnya-10.jpg",
        catalogLink: "kukhnya-10",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-10.jpg",
            img2: "kukhnya-slide-10-1.jpg",
            img3: "kukhnya-slide-10-2.jpg",
            img4: "kukhnya-slide-10-3.jpg",
            img5: "kukhnya-slide-10-4.jpg",
        },
    },
    {
        title: "Кухня в квартире на Ленинском проспекте",
        materials: "",
        description:
            "Кухня в лаконичном дизайне с красивым видом на Парк горького, что является уникальной интерьерной изюминкой, поэтому было решено  обустроить подоконник-столешницу из массива дерева, встроенный в кухонный гарнитур и перетекающий  в обрамление окна. Конструкция получилась удобной, гармонично вписалась в общую обстановку и прилично сэкономила пространство. Это превосходное решение для небольшой кухни. Остается только наслаждаться уютным завтраком.",
        img: "kukhnya-11.jpg",
        catalogLink: "kukhnya-11",
        catalogPathImg: "/catalog/kitchens/modern/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-11.jpg",
        },
    },
    // классические кухни
    {
        title: "Кухня в Апартаментах на Кутузовском проспекте",
        materials: "Материал: Массив шпона ольхи, мдф плита",
        description:
            "Столешница - мрамор. Ручки Италия. Отделка - эмаль, серебряная поталь. Цвет по RAL белый.  Внимание! Стоимость техники, ручек и камня расчитывается отдельно. Срок изготовления 1.5 месяца. ",
        img: "kukhnya-1.jpg",
        catalogLink: "kukhnya-1",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-1.jpg",
            img2: "kukhnya-slide-1-1.jpg",
            img3: "kukhnya-slide-1-2.jpg",
            img4: "kukhnya-slide-1-3.jpg",
        },
    },
    {
        title: "Кухня в КП Вешки",
        materials: "Материал: Мдф, Латунь",
        description:
            'Эксклюзивная дизайнерская кухня в модном цвете "классический синий" ! Раскладка из латуни несомненно сделала внешний облик кухни еще богаче и добавила винтажные нотки',
        img: "kukhnya-2.jpg",
        catalogLink: "kukhnya-2",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-2.jpg",
            img2: "kukhnya-slide-2-1.jpg",
            img3: "kukhnya-slide-2-2.jpg",
            img4: "kukhnya-slide-2-3.jpg",
        },
    },
    {
        title: "Кухня в ЖК Knightsbridge Private Park",
        materials: "Материал: Массив ольхи",
        description:
            "Роскошная дизайнерская кухня премиум-класса,  стилизованная под итальянский бренд, с дорогой отделкой в виде резных узоров на фасадах.  Площадь помещения позволила нам установить дополнительно большой и функциональный остров  с различными по своему назначению местами для хранения",
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
            img14: "kukhnya-slide-3-13.jpg",
        },
    },
    {
        title: "Кухня в квартире на Мосфильмовской",
        materials:
            "Материал: Массив и шпон ольхи, Отделка- фиолетовая эмаль с чёрной патиной, серебряная поталь",
        description:
            "Смелая и яркая кухня в современной классике из массива и шпона ольхи. Отделка- фиолетовая эмаль с чёрной патиной, серебряная поталь. Несмотря на небольшой размер, в этом проекте удалось вместить всю необходимую для современной жизни технику, включая большой двустворчатый холодильник. Срок изготовления 1.5 месяца. Австрийская фурнитура Blum. Столешница - гранит. Ручки Италия. Внимание! Стоимость техники, ручек и камня расчитывается отдельно.",
        img: "kukhnya-4.jpg",
        catalogLink: "kukhnya-4",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-4.jpg",
            img2: "kukhnya-slide-4-1.jpg",
            img3: "kukhnya-slide-4-2.jpg",
            // img4: "kukhnya-slide-4-3.jpg",
            img5: "kukhnya-slide-4-4.jpg",
        },
    },
    {
        title: "Кухня в КП Идиллия",
        materials: "Материал: Массив и шпон ольхи. Белая эмаль",
        description:
            "Кухня премиум класса с островом в стиле современная классика. Наиболее выигрышно классика сочетается именно со светлыми оттенками. Белый цвет подчеркивает строгую симметрию форм кухонной мебели, присущую именно этому интерьерному направлению. Характерный декор смотрится воздушно и изящно. Но хотим напомнить, что для себя Вы можете выбрать абсолютно любое цветовое решение по каталогу RAL",
        img: "kukhnya-5.jpg",
        catalogLink: "kukhnya-5",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-5.jpg",
            img2: "kukhnya-slide-5-1.jpg",
            img3: "kukhnya-slide-5-2.jpg",
        },
    },
    {
        title: "Кухня в КП Кронбург",
        materials:
            "Материал: Фасады из массива ольхи, корпуса из влагостойкой мебельной фанеры",
        description:
            "Далеко не все мебельные фабрики берутся за классику. Ведь классическая мебель с точки зрения изготовления самая сложная.  Эта премиальная кухня для таунхауса в КП Кронбург позволяет оценить уровень нашего профессионализма и мастерства. Сложные узлы, стыковки, рельефы, отделка высочайшего уровня - эмаль, патина, серебряная поталь, множество резных элементов, радиусные колонны, радиусный карниз и при этом европейское качество! Стоимость таких работ всегда рассчитывается индивидуально и зависит от объема и сложности элементов",
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
            img7: "kukhnya-slide-6-6.jpg",
        },
    },
    {
        title: "Кухня для квартиры на Кутузовском проспекте",
        materials: "Материал: Массив ольхи",
        description:
            "Проект этой квартиры на Кутузовском в стиле современной классики собрал много положительных отзывов в наших социальных сетях. Небольшая по площади кухня получилась необыкновенно изящная и уютная, как и задумала хозяйка.  Австрийская фурнитура Blum. Столешница - мрамор. Ручки Италия. Фасады со стеклом и деревянной раскладкой. В комплектацию входит волшебный уголок, а также лоток для столовых приборов из массива ольхи. Срок изготовления 1.5 месяца. Внимание! Стоимость техники, ручек и камня расчитывается отдельно",
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
            img10: "kukhnya-slide-7-9.jpg",
        },
    },
    {
        title: "Кухня КП Жуковка XXI",
        materials: "",
        description:
            "Иногда дизайнерские решения выглядят безупречно,  но не могут быть использованы именно в Вашем интерьере. Мы можем довести Вашу кухню до идеала! Например, как в этом проекте брендовую кухню заказчики решили дополнить секциями шкафов и островом, выполненными по индивидуальным размерам. Как видите, невозможно даже усомниться в том , что левая и правая части гарнитура могут быть «неродными». ",
        img: "kukhnya-8.jpg",
        catalogLink: "kukhnya-8",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-8.jpg",
            img2: "kukhnya-slide-8-1.jpg",
        },
    },
    {
        title: "Кухня в коттедже в Поздняково",
        materials: "",
        description:
            "Серые оттенки - отличная замена привычным бежевым цветам, присущим классике. Серо-голубой, графитовый, серебристый, французский серый – все эти тона отлично подойдут для кухни в стиле неоклассика. Остров удачно совмещает и рабочую поверхность с встроенной мойкой, и небольшую барную стойку с другой стороны для утренней чашечки кофе. Отделка серебряной поталью и чёрной патиной вносит нотки благородства и изысканности в этот гарнитур. ",
        img: "kukhnya-9.jpg",
        catalogLink: "kukhnya-9",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-9.jpg",
            img2: "kukhnya-slide-9-1.jpg",
            img3: "kukhnya-slide-9-2.jpg",
        },
    },
    {
        title: "Кухня в загородном доме на Рублевское ш",
        materials: "",
        description:
            "Кухня из массива ольхи в традиционном классическом стиле. Необыкновенно торжественное сочетание глубокого винного оттенка и золотой резьбы. В комплекте также были изготовлены барные стулья и обеденный стол. Отделка : эмаль, патина, золотая поталь",
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
            img6: "kukhnya-slide-10-5.jpg",
        },
    },
    {
        title: "Кухня в посёлке Николина гора",
        materials: "",
        description:
            "Благородная, Интересная по своему цветовому решению кухня, сочетающая шкафы цвета слоновой кости и темно-оливковый двухуровневый остров с патиной. Выдвижные колонны, резные патинированные вставки. Австрийская фурнитура Blum. Столешница - мрамор. Ручки Италия. В комплектацию входит лоток для столовых приборов из массива ольхи с нашей фирменной гравировкой. Внимание! Стоимость техники, ручек и камня расчитывается отдельно. Срок изготовления 1.5 месяца",
        img: "kukhnya-11.jpg",
        catalogLink: "kukhnya-11",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-11.jpg",
            img2: "kukhnya-slide-11-1.jpg",
            img3: "kukhnya-slide-11-2.jpg",
            img4: "kukhnya-slide-11-3.jpg",
        },
    },
    {
        title: "Кухня в квартире на Косыгина",
        materials: "",
        description:
            "Ещё одна представительница традиционной классики в нашем портфолио. П-образная кухня из массива в цвете Айвори - торжество строгости и элегантности",
        img: "kukhnya-12.jpg",
        catalogLink: "kukhnya-12",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-12.jpg",
            img2: "kukhnya-slide-12-1.jpg",
        },
    },
    {
        title: "Кухня в КП Усово",
        materials:
            "Материал: Массив ольхи - фасады, корпус - влагостойкая мебельная фанера; отделка : эмаль, золотая поталь",
        description:
            "Традиционный классический интерьер в бежево-золотистых тонах украшает п-образная кухня, объединённая с обеденной зоной",
        img: "kukhnya-13.jpg",
        catalogLink: "kukhnya-13",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-13.jpg",
            img2: "kukhnya-slide-13-1.jpg",
            img3: "kukhnya-slide-13-2.jpg",
        },
    },
    {
        title: "Кухня КП Усово",
        materials: "Материал: Массив ольхи",
        description:
            "Эксклюзивная кухня со вставками на фасадах, выполненными из ценной породы - корень ясеня. Цена по запросу",
        img: "kukhnya-14.jpg",
        catalogLink: "kukhnya-14",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-14.jpg",
            img2: "kukhnya-slide-14-1.jpg",
            img3: "kukhnya-slide-14-2.jpg",
            img4: "kukhnya-slide-14-3.jpg",
        },
    },
    {
        title: "Кухня в квартире в Заречье",
        materials: "Материал: МДФ, отделка эмаль, золотая поталь.",
        description:
            "Изящная кухня в современной классике. Отличительная особенность и неугасающий тренд - деревянная раскладка на стеклянных фасадах. Использование стекла и подсветки внутри шкафов придаёт легкости, зрительно освежают помещение, делают более просторным и ухоженным",
        img: "kukhnya-15.jpg",
        catalogLink: "kukhnya-15",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-15.jpg",
            // img2: "kukhnya-slide-15-1.jpg",
            // img3: "kukhnya-slide-15-2.jpg",
            // img3: "kukhnya-slide-15-3.jpg",
        },
    },
    {
        title: "Кухня в частном доме",
        materials: "",
        description:
            "Белая кухня с черной столешницей - смелое решение и необычный интерьер. Но грамотный выбор цвета фартука разбавляет этот контраст, а стены теплого оттенка добавляют уюта помещению. Кухни Белого цвета не первый год бьют все рекорды по популярности",
        img: "kukhnya-16.jpg",
        catalogLink: "kukhnya-16",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-16.jpg",
            // img2: "kukhnya-slide-16-1.jpg",
            // img3: "kukhnya-slide-16-2.jpg",
            // img3: "kukhnya-slide-16-3.jpg",
        },
    },
    {
        title: "Кухня в КП Усово",
        materials: "",
        description:
            "С недавнего времени серый цвет перестал быть скучным, напротив он стал признаком хорошего вкуса. Но есть несколько секретов. Поверхность серой кухни в классике обязательно должна быть матовой или выполненной в технике искусственного состаривания (покрыта патиной). Резьба, витражи, стеклянные вставки — все это сделает мебель красивой и благородной. ",
        img: "kukhnya-17.jpg",
        catalogLink: "kukhnya-17",
        catalogPathImg: "/catalog/kitchens/classic/",
        catalogPathCategory: "/catalog/kitchens/",
        catalogImgs: {
            img1: "kukhnya-17.jpg",
            // img2: "kukhnya-slide-17-1.jpg",
            // img3: "kukhnya-slide-17-2.jpg",
            // img3: "kukhnya-slide-17-3.jpg",
        },
    },
];
</script>

<style lang="scss"></style>
