(() => {
  function g(t) {
    let e = () => {
      let n,
        s = localStorage;
      return t.interceptor(
        (r, i, a, p, m) => {
          let o = n || `_x_${p}`,
            l = c(o, s) ? d(o, s) : r;
          return (
            a(l),
            t.effect(() => {
              let u = i();
              f(o, u, s), a(u);
            }),
            l
          );
        },
        (r) => {
          (r.as = (i) => ((n = i), r)), (r.using = (i) => ((s = i), r));
        }
      );
    };
    Object.defineProperty(t, "$persist", { get: () => e() }),
      t.magic("persist", e);
  }
  function c(t, e) {
    return e.getItem(t) !== null;
  }
  function d(t, e) {
    return JSON.parse(e.getItem(t, e));
  }
  function f(t, e, n) {
    n.setItem(t, JSON.stringify(e));
  }
  document.addEventListener("alpine:init", () => {
    window.Alpine.plugin(g);
  });
})();
