// Hành vi của trang: ô tìm kiếm lọc chỉ tiêu, dòng dưới ô tìm kiếm đếm số chỉ tiêu đang hiện.
// Mỗi chỉ tiêu là một thẻ <section> trong index.html.
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const kpis = document.querySelectorAll("section");

function filter() {
  const q = search.value.trim().toLowerCase();
  let shown = 0;
  kpis.forEach((kpi) => {
    const match = kpi.textContent.toLowerCase().includes(q);
    kpi.hidden = !match;
    if (match) shown++;
  });
  count.textContent = `Đang hiện ${shown}/${kpis.length} chỉ tiêu`;
}

search.addEventListener("input", filter);
filter();
