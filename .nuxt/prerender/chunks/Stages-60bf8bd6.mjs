import { _ as __nuxt_component_1 } from './nuxt-img-9ef5105d.mjs';
import { mergeProps, useSSRContext } from 'file://D:/projects/royal-wood/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file://D:/projects/royal-wood/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  data() {
    return {
      stages: [
        {
          img: "appeal-icon.png",
          title: "1 - \u041E\u0411\u0420\u0410\u0429\u0415\u041D\u0418\u0415",
          description: "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435 \u0438\u043B\u0438 \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043E\u043D\u043B\u0430\u0439\u043D-\u0444\u043E\u0440\u043C\u044B \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435."
        },
        {
          img: "project-icon.png",
          title: "2 - \u041F\u0420\u041E\u0415\u041A\u0422",
          description: "\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u0435\u0431\u0435\u043B\u0438 \u0438\u0437 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u0435\u0440\u0435\u0432\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0415\u0441\u043B\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043C\u0430\u043A\u0435\u0442, \u0442\u043E \u0441\u0440\u0430\u0437\u0443 \u0436\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440."
        },
        {
          img: "measurements-icon.png",
          title: "3 - \u0417\u0410\u041C\u0415\u0420\u042B",
          description: "\u0414\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043C\u0435\u0440\u044B \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0435 \u0438 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E \u0438\u0437\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043E\u0431\u0449\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0430."
        },
        {
          img: "contract-icon.png",
          title: "4 - \u0414\u041E\u0413\u041E\u0412\u041E\u0420",
          description: "\u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043A\u043B\u0438\u0435\u043D\u0442 \u0432\u043D\u043E\u0441\u0438\u0442 \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0443 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 40%. \u041F\u043E \u0444\u0430\u043A\u0442\u0443 \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u043E\u0437\u0432\u0430\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C. \u041D\u0430 \u044D\u0442\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0442\u0430\u043A\u0436\u0435 \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F 40 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 \u043E\u0442 \u043E\u0441\u0442\u0430\u0432\u0448\u0435\u0439\u0441\u044F \u0441\u0443\u043C\u043C\u044B."
        },
        {
          img: "montage-icon.png",
          title: "5 - \u041C\u041E\u041D\u0422\u0410\u0416",
          description: "\u0417\u0430\u0442\u0435\u043C \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430\u043C\u0438 \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442, \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F, \u0434\u043E\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u0438 \u0441\u0434\u0430\u044E\u0442\u0441\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0443. \u041E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0438 \u0430\u043A\u0442\u0430 \u043F\u0440\u0438\u0435\u043C\u0430-\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438."
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "stage-sale" }, _attrs))}><div class="stage-sale-items"><!--[-->`);
  ssrRenderList($data.stages, (stage) => {
    _push(`<div class="stage-sale-item"><div class="stage-sale-flex">`);
    _push(ssrRenderComponent(_component_nuxt_img, {
      src: `main/${stage.img}`,
      alt: stage.title,
      class: "stage-sale-item-img"
    }, null, _parent));
    _push(`<div class="stage-sale-item-title"><h4>${ssrInterpolate(stage.title)}</h4></div></div><div class="stage-sale-item-description">${ssrInterpolate(stage.description)}</div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/Stages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Stages = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Stages as S };
//# sourceMappingURL=Stages-60bf8bd6.mjs.map
