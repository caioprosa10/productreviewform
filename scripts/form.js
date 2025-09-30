// Product Array (provided)
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate <select> with options where value === id (rubric)
(function populateProducts() {
  const select = document.getElementById("productName");
  products.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;          // rubric: value must be the id
    opt.textContent = p.name;  // label shown to the user
    select.appendChild(opt);
  });
})();

// Keyboard/Access niceties for rating labels
document.querySelectorAll('.rating label').forEach((label, idx, list) => {
  label.setAttribute('tabindex', '0');
  label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      label.previousElementSibling.checked = true;
    }
    if (e.key === 'ArrowRight' && list[idx + 1]) list[idx + 1].focus();
    if (e.key === 'ArrowLeft' && list[idx - 1]) list[idx - 1].focus();
  });
});
