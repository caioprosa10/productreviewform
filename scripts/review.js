// Increment review counter in localStorage
const KEY = "reviewCount";
const current = Number(localStorage.getItem(KEY) || 0) + 1;
localStorage.setItem(KEY, String(current));
document.getElementById("reviewCount").textContent = current;

// Display submitted data from URL params
const params = new URLSearchParams(window.location.search);
const details = document.getElementById("details");

// (optional) map id -> name for nicer Product display
const products = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];
const productNameFromId = (id) => {
  const p = products.find(x => x.id === id);
  return p ? `${p.name} (${id})` : id;
};

function addRow(term, value) {
  if (!value) return;
  const dt = document.createElement("dt");
  dt.textContent = term;
  const dd = document.createElement("dd");
  dd.textContent = value;
  details.append(dt, dd);
}

addRow("Product", productNameFromId(params.get("productName")));
addRow("Rating", params.get("rating"));
addRow("Installation Date", params.get("installDate"));
addRow("Useful Features", params.getAll("features").join(", "));
addRow("Written Review", params.get("writtenReview"));
addRow("Your Name", params.get("userName"));
