import { inject as L, defineComponent as I, ref as A, computed as H, watch as g, onBeforeMount as k, onBeforeUnmount as $, withDirectives as E, openBlock as p, createElementBlock as m, unref as K, normalizeClass as b, renderSlot as S, vShow as B, reactive as j, provide as h, onMounted as M, toRefs as N, createElementVNode as v, Fragment as O, renderList as U } from "vue";
const y = Symbol("addTab"), C = Symbol("updateTab"), w = Symbol("deleteTab"), D = Symbol("tabsProvider");
function f(s, c) {
  const a = L(s, c);
  if (typeof a > "u")
    throw new Error(`Could not resolve ${s.description}`);
  return a;
}
const F = ["data-tab-id", "aria-hidden"], P = /* @__PURE__ */ I({
  __name: "Tab",
  props: {
    panelClass: {
      type: String,
      default: "tabs-component-panel"
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: !0
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    },
    isDisabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(s, { expose: c }) {
    const a = s, i = A(!1), t = f(D), o = f(y), u = f(C), l = f(w), n = a.prefix + a.name + a.suffix, e = a.id ? a.id : a.name.toLowerCase().replace(/ /g, "-"), r = e + "-pane", d = H(() => "#" + (a.isDisabled ? "" : e));
    return g(
      () => t.activeTabHash,
      () => {
        i.value = d.value === t.activeTabHash;
      }
    ), g(
      () => Object.assign({}, a),
      () => {
        u(e, {
          name: a.name,
          header: a.prefix + a.name + a.suffix,
          isDisabled: a.isDisabled,
          hash: d.value,
          index: t.tabs.length,
          computedId: e,
          paneId: r
        });
      }
    ), k(() => {
      o({
        name: a.name,
        header: n,
        isDisabled: a.isDisabled,
        hash: d.value,
        index: t.tabs.length,
        computedId: e,
        paneId: r
      });
    }), $(() => {
      l(e);
    }), c({
      header: n,
      computedId: e,
      paneId: r,
      hash: d,
      isActive: i
    }), (x, z) => E((p(), m("section", {
      ref: "tab",
      id: r,
      "data-tab-id": K(e),
      "aria-hidden": !i.value,
      class: b(s.panelClass),
      role: "tabpanel"
    }, [
      S(x.$slots, "default")
    ], 10, F)), [
      [B, i.value]
    ]);
  }
});
class q {
  get(c) {
    const a = localStorage.getItem(c);
    if (a === null)
      return null;
    const i = JSON.parse(a);
    return i ? new Date(i.expires) < /* @__PURE__ */ new Date() ? (localStorage.removeItem(c), null) : i.value : null;
  }
  set(c, a, i) {
    const t = (/* @__PURE__ */ new Date()).getTime(), o = new Date(t + i * 6e4);
    localStorage.setItem(c, JSON.stringify({ value: a, expires: o }));
  }
}
const T = new q(), J = ["aria-controls", "aria-selected", "href", "onClick", "innerHTML"], W = /* @__PURE__ */ I({
  __name: "Tabs",
  props: {
    cacheLifetime: {
      type: Number,
      default: 5
    },
    options: {
      type: Object,
      required: !1,
      default: () => ({
        useUrlFragment: !0,
        defaultTabHash: null
      })
    },
    wrapperClass: {
      type: String,
      default: "tabs-component"
    },
    panelsWrapperClass: {
      type: String,
      default: "tabs-component-panels"
    },
    navClass: {
      type: String,
      default: "tabs-component-tabs"
    },
    navItemClass: {
      type: String,
      default: "tabs-component-tab"
    },
    navItemDisabledClass: {
      type: String,
      default: "is-disabled"
    },
    navItemActiveClass: {
      type: String,
      default: "is-active"
    },
    navItemInactiveClass: {
      type: String,
      default: "is-inactive"
    },
    navItemLinkClass: {
      type: String,
      default: "tabs-component-tab-a"
    },
    navItemLinkActiveClass: {
      type: String,
      default: "is-active"
    },
    navItemLinkInactiveClass: {
      type: String,
      default: "is-inactive"
    },
    navItemLinkDisabledClass: {
      type: String,
      default: "is-disabled"
    }
  },
  emits: ["changed", "clicked"],
  setup(s, { expose: c, emit: a }) {
    const i = s, t = j({
      activeTabHash: "",
      lastActiveTabHash: "",
      tabs: []
    });
    h(D, t), h(y, (l) => {
      t.tabs.push(l);
    }), h(C, (l, n) => {
      const e = t.tabs.findIndex((r) => r.computedId === l);
      n.isActive = t.tabs[e].isActive, t.tabs[e] = n;
    }), h(w, (l) => {
      const n = t.tabs.findIndex((e) => e.computedId === l);
      t.tabs.splice(n, 1);
    });
    const o = (l, n) => {
      n && !i.options.useUrlFragment && n.preventDefault();
      const e = u(l);
      if (!e)
        return;
      if (n && e.isDisabled) {
        n.preventDefault();
        return;
      }
      if (t.lastActiveTabHash === e.hash) {
        a("clicked", { tab: e });
        return;
      }
      if (t.tabs.forEach((d) => {
        d.isActive = d.hash === e.hash;
      }), a("changed", { tab: e }), t.lastActiveTabHash = t.activeTabHash = e.hash, i.cacheLifetime <= 0)
        return;
      const r = `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`;
      T.set(r, e.hash, i.cacheLifetime);
    }, u = (l) => t.tabs.find((n) => n.hash === l);
    return M(() => {
      if (t.tabs.length) {
        if (window.addEventListener("hashchange", () => o(window.location.hash)), u(window.location.hash)) {
          o(window.location.hash);
          return;
        }
        if (i.cacheLifetime > 0) {
          const l = `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`, n = T.get(l);
          if (n !== null && u(n)) {
            o(n);
            return;
          }
          if (i.options.defaultTabHash && u("#" + i.options.defaultTabHash)) {
            o("#" + i.options.defaultTabHash);
            return;
          }
        }
        o(t.tabs[0].hash);
      }
    }), c({
      ...N(t),
      selectTab: o,
      findTab: u
    }), (l, n) => (p(), m("div", {
      class: b(s.wrapperClass)
    }, [
      v("ul", {
        role: "tablist",
        class: b(s.navClass)
      }, [
        (p(!0), m(O, null, U(t.tabs, (e, r) => (p(), m("li", {
          key: r,
          class: b([s.navItemClass, e.isDisabled ? s.navItemDisabledClass : "", e.isActive ? s.navItemActiveClass : e.isDisabled ? "" : s.navItemInactiveClass]),
          role: "presentation"
        }, [
          v("a", {
            role: "tab",
            class: b([s.navItemLinkClass, e.isDisabled ? s.navItemLinkDisabledClass : "", e.isActive ? s.navItemLinkActiveClass : e.isDisabled ? "" : s.navItemLinkInactiveClass]),
            "aria-controls": e.paneId,
            "aria-selected": e.isActive,
            href: e.hash,
            onClick: (d) => o(e.hash, d),
            innerHTML: e.header
          }, null, 10, J)
        ], 2))), 128))
      ], 2),
      v("div", {
        class: b(s.panelsWrapperClass)
      }, [
        S(l.$slots, "default")
      ], 2)
    ], 2));
  }
}), V = {
  install(s) {
    s.component("tab", P), s.component("tabs", W);
  }
};
export {
  P as Tab,
  W as Tabs,
  V as default
};
