import { defineComponent as s, openBlock as d, createElementBlock as g, normalizeClass as n, normalizeStyle as r, createElementVNode as a } from "vue";
const p = {
  class: "absolute inset-0",
  style: { transform: "rotateX(var(--grid-angle))" }
}, f = /* @__PURE__ */ s({
  __name: "RetroGrid",
  props: {
    className: { default: "" },
    angle: { default: 65 },
    lineColor: { default: "rgba(255, 0, 255, 0.5)" },
    glowSize: { default: 5 },
    opacity: { default: 0.5 },
    bgGradientFrom: { default: "rgba(20, 0, 40, 0.8)" },
    bgGradientTo: { default: "rgba(0, 0, 0, 0)" }
  },
  setup(t) {
    return (e, o) => (d(), g("div", {
      class: n(["pointer-events-none absolute w-full h-full overflow-hidden", e.className]),
      style: r({
        perspective: "200px",
        "--grid-angle": `${e.angle}deg`,
        "--grid-opacity": e.opacity,
        "--line-color": e.lineColor,
        "--line-glow": `0 0 ${e.glowSize}px ${e.lineColor}`,
        "--bg-from": e.bgGradientFrom,
        "--bg-to": e.bgGradientTo
      })
    }, [
      a("div", p, [
        a("div", {
          class: n([
            "animate-grid",
            "[background-repeat:repeat]",
            "[background-size:60px_60px]",
            "[height:300vh]",
            "[inset:0%_0px]",
            "[margin-left:-50%]",
            "[transform-origin:100%_0_0]",
            "[width:600vw]"
          ]),
          style: r({
            backgroundImage: `
            linear-gradient(to right, ${e.lineColor} 1px, transparent 0),
            linear-gradient(to bottom, ${e.lineColor} 1px, transparent 0)
          `,
            opacity: e.opacity,
            boxShadow: "var(--line-glow)"
          })
        }, null, 4)
      ]),
      a("div", {
        class: "absolute inset-0 bg-gradient-to-t",
        style: r({
          "--tw-gradient-from": e.bgGradientFrom,
          "--tw-gradient-to": e.bgGradientTo,
          "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to) 90%"
        })
      }, null, 4)
    ], 6));
  }
}), m = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [l, i] of e)
    o[l] = i;
  return o;
}, c = /* @__PURE__ */ m(f, [["__scopeId", "data-v-963f1bf1"]]), b = {
  install: (t) => {
    t.component("RetroGrid", c);
  }
};
export {
  c as RetroGrid,
  b as default
};
