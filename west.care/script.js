
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"), nav = document.querySelector(".nav");
  menu?.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav?.classList.remove("open")));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("show") }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(x => io.observe(x));
  document.querySelectorAll(".faq-q").forEach(q => q.addEventListener("click", () => q.parentElement.classList.toggle("open")));
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = +el.dataset.count; let n = 0; const step = Math.max(1, Math.ceil(target / 70));
    const timer = setInterval(() => { n += step; if (n >= target) { n = target; clearInterval(timer) } el.textContent = n.toLocaleString() + "+" }, 22)
  });
  const modal = document.querySelector(".modal");
  document.querySelectorAll("[data-book]").forEach(b => b.addEventListener("click", () => modal?.classList.add("show")));
  document.querySelector(".close")?.addEventListener("click", () => modal.classList.remove("show"));
  modal?.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show") });
  document.querySelectorAll("form").forEach(f => f.addEventListener("submit", e => {
    e.preventDefault(); let m = f.querySelector(".message"); if (m) m.textContent = "Thank you. Your request has been received."; f.reset();
  }));
  document.querySelectorAll(".year").forEach(y => y.textContent = new Date().getFullYear());
});
