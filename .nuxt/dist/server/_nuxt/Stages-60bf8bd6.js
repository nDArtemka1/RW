import { _ as __nuxt_component_1 } from "./nuxt-img-9ef5105d.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const Stages_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {
      stages: [
        {
          img: "appeal-icon.png",
          title: "1 - ОБРАЩЕНИЕ",
          description: "Вы можете оформить заказ на изготовление авторской мебели из массива дерева по телефону, электронной почте или при помощи онлайн-формы обратной связи на сайте."
        },
        {
          img: "project-icon.png",
          title: "2 - ПРОЕКТ",
          description: "Для начала изготовления мебели из натурального дерева необходимо наличие проекта. Если вы можете предоставить готовый макет, то сразу же составляется коммерческое предложение и подписывается договор."
        },
        {
          img: "measurements-icon.png",
          title: "3 - ЗАМЕРЫ",
          description: "Для разработки проекта авторской мебели необходимо сделать замеры на объекте и подробно изучить пожелания клиента. Стоимость конструкторских работ входит в общую сумму заказа."
        },
        {
          img: "contract-icon.png",
          title: "4 - ДОГОВОР",
          description: "После подписания договора клиент вносит предоплату в размере 40%. По факту готовности авторской мебели менеджер созванивается с клиентом. На этом этапе также оплачивается 40 процентов от оставшейся суммы."
        },
        {
          img: "montage-icon.png",
          title: "5 - МОНТАЖ",
          description: "Затем изделия доставляются нами на объект, монтируются, доводятся и сдаются клиенту. Окончательный расчет производится при подписании акта приема-передачи."
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
export {
  Stages as S
};
//# sourceMappingURL=Stages-60bf8bd6.js.map
