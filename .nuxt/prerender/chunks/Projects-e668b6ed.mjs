import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-9ef5105d.mjs';
import { withCtx, createVNode, useSSRContext } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    projectsItems: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<!--[-->`);
  ssrRenderList($props.projectsItems, (project) => {
    _push(`<div class="project-item">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: project.href
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_nuxt_img, {
            src: `projects/${project.img}`,
            alt: project.title,
            class: "project-item-img"
          }, null, _parent2, _scopeId));
          _push2(`<div class="overlay"${_scopeId}><div class="overlay-btn"${_scopeId}><div class="overlay-btn-a underline"${_scopeId}>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</div></div></div>`);
        } else {
          return [
            createVNode(_component_nuxt_img, {
              src: `projects/${project.img}`,
              alt: project.title,
              class: "project-item-img"
            }, null, 8, ["src", "alt"]),
            createVNode("div", { class: "overlay" }, [
              createVNode("div", { class: "overlay-btn" }, [
                createVNode("div", { class: "overlay-btn-a underline" }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<h4 class="project-item-title"><strong>${ssrInterpolate(project.title)}</strong></h4><span class="project-item-description">${ssrInterpolate(project.description)}</span></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Projects as P };
//# sourceMappingURL=Projects-e668b6ed.mjs.map
