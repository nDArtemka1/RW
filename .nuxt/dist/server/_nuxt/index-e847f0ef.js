import "./index-e12b288f.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { P as Projects } from "./Projects-e668b6ed.js";
import { u as useHead } from "../server.mjs";
import "unhead";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./nuxt-img-9ef5105d.js";
import "destr";
import "devalue";
import "h3";
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
    Projects
  },
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
  },
  methods: {}
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | Наши реализованные проекты | Изготовление мебели по размерам из массива дерева под заказ"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1 class="catalog-title"><span>Наши реализованные проекты</span></h1><div class="project-items">`);
      _push(ssrRenderComponent(Projects, { projectsItems: _ctx.projects }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-e847f0ef.js.map
