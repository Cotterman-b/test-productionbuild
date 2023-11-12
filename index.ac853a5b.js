// Function to start counting animation when element is in view
const e = e => {
        let r = document.querySelectorAll(".counting-container"),
            n = new IntersectionObserver((r, n) => {
                r.forEach(r => {
                    if (r.isIntersecting) {
                        let o = parseInt(r.target.querySelector("div").getAttribute("data-target")),
                            i = r.target.querySelector("div").getAttribute("units"),
                            a = r.target.querySelector("div").getAttribute("where");
                        setTimeout(() => {
                            t(r.target, o, i, a)
                        }, e), n.unobserve(r.target)
                    }
                })
            });
        r.forEach(e => {
            n.observe(e)
        })
    },
    t = (e, t, r, n) => {
        let o = Math.round(3e3 / (1e3 / 60)),
            i = e => e * (2 - e),
            a = 0,
            u = c => {
                a++;
                let d = a / o,
                    l = Math.round(i(d) * t);
                "left" == n ? e.querySelector("div").textContent = r + l : e.querySelector("div").textContent = l + r, a < o && requestAnimationFrame(u)
            };
        requestAnimationFrame(u)
    };
document.addEventListener("DOMContentLoaded", () => {
    e(800)
}); //# sourceMappingURL=index.ac853a5b.js.map

//# sourceMappingURL=index.ac853a5b.js.map
