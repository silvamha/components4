import { createHotContext as __vite__createHotContext } from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/App.vue");
import HelloWorld from "/src/components/HelloWorld.vue";
import TheWelcome from "/src/components/TheWelcome.vue";

const _sfc_main = {
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();

    const __returned__ = {
      HelloWorld,
      TheWelcome,
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true,
    });
    return __returned__;
  },
};
import {
  createElementVNode as _createElementVNode,
  createVNode as _createVNode,
  createTextVNode as _createTextVNode,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
  pushScopeId as _pushScopeId,
  popScopeId as _popScopeId,
} from "/node_modules/.vite/deps/vue.js?v=aef692cc";

const _withScopeId = (n) => (
  _pushScopeId("data-v-7a7a37b1"), (n = n()), _popScopeId(), n
);
const _hoisted_1 =
  /*#__PURE__*/
  _withScopeId(() =>
    /*#__PURE__*/
    _createElementVNode(
      "img",
      {
        alt: "Vue logo",
        class: "logo",
        src: "/src/assets/logo.svg",
        width: "125",
        height: "125",
      },
      null,
      -1 /* HOISTED */
    )
  );
const _hoisted_2 = {
  class: "wrapper",
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [
        _createElementVNode("header", null, [
          _createTextVNode(" EXAMPLE "),
          _hoisted_1,
          _createElementVNode("div", _hoisted_2, [
            _createVNode($setup["HelloWorld"], {
              msg: "You did it!",
            }),
          ]),
        ]),
        _createElementVNode("main", null, [_createVNode($setup["TheWelcome"])]),
      ],
      64 /* STABLE_FRAGMENT */
    )
  );
}

import "/src/App.vue?vue&type=style&index=0&scoped=7a7a37b1&lang.css";

_sfc_main.__hmrId = "7a7a37b1";
typeof __VUE_HMR_RUNTIME__ !== "undefined" &&
  __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
export const _rerender_only = true;
import.meta.hot.accept((mod) => {
  if (!mod) return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/@id/__x00__plugin-vue:export-helper";
export default /*#__PURE__*/
_export_sfc(_sfc_main, [
  ["render", _sfc_render],
  ["__scopeId", "data-v-7a7a37b1"],
  [
    "__file",
    "C:/Users/silva/OneDrive/Desktop/Projects/VueJS/Vue JS Projects/components/src/App.vue",
  ],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQXBwLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwPlxuaW1wb3J0IEhlbGxvV29ybGQgZnJvbSAnLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlJ1xuaW1wb3J0IFRoZVdlbGNvbWUgZnJvbSAnLi9jb21wb25lbnRzL1RoZVdlbGNvbWUudnVlJ1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGhlYWRlcj5cbiAgICBFWEFNUExFXG4gICAgPGltZyBhbHQ9XCJWdWUgbG9nb1wiIGNsYXNzPVwibG9nb1wiIHNyYz1cIi4vYXNzZXRzL2xvZ28uc3ZnXCIgd2lkdGg9XCIxMjVcIiBoZWlnaHQ9XCIxMjVcIiAvPlxuXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgIDxIZWxsb1dvcmxkIG1zZz1cIllvdSBkaWQgaXQhXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG5cbiAgPG1haW4+XG4gICAgPFRoZVdlbGNvbWUgLz5cbiAgPC9tYWluPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZD5cbmhlYWRlciB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvIDJyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1zZWN0aW9uLWdhcCkgLyAyKTtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBtYXJnaW46IDAgMnJlbSAwIDA7XG4gIH1cblxuICBoZWFkZXIgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztBQUZ0Qzs7Ozs7Ozs7Ozs7aUVBUVYsb0JBQW9GO0VBQS9FLEdBQUcsRUFBQyxVQUFVO0VBQUMsS0FBSyxFQUFDLE1BQU07RUFBQyxHQUFHLEVBQUMsc0JBQW1CO0VBQUMsS0FBSyxFQUFDLEtBQUs7RUFBQyxNQUFNLEVBQUMsS0FBSzs7cUJBRTVFLEtBQUssRUFBQyxTQUFTOzs7d0JBVnhCO0lBTUUsb0JBT1M7TUFiWCxpQkFNVSxXQUVOO01BQUEsVUFBb0Y7TUFFcEYsb0JBRU0sT0FGTixVQUVNO1FBREosYUFBZ0Msd0JBQXBCLEdBQUcsRUFBQyxhQUFhOzs7SUFJakMsb0JBRU87TUFETCxhQUFjIn0=
