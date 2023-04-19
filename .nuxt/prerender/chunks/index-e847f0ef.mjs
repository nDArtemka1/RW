import { mergeProps, useSSRContext } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { P as Projects } from './Projects-e668b6ed.mjs';
import { u as useHead } from './server.mjs';
import './nuxt-link-6bdec6f5.mjs';
import 'file://D:/projects/royal-wood/node_modules/ufo/dist/index.mjs';
import './nuxt-img-9ef5105d.mjs';
import 'file://D:/projects/royal-wood/node_modules/h3/dist/index.mjs';
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
    Projects
  },
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
  },
  methods: {}
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Royal-Wood | \u041D\u0430\u0448\u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B | \u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u0435\u0431\u0435\u043B\u0438 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1 class="catalog-title"><span>\u041D\u0430\u0448\u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B</span></h1><div class="project-items">`);
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

export { _sfc_main as default };
//# sourceMappingURL=index-e847f0ef.mjs.map
