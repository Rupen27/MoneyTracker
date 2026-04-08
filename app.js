const STORAGE_KEY = "school-fee-coin-tracker-v1";

const coinValues = {
  "5 cents": 0.05,
  "10 cents": 0.1,
  "20 cents": 0.2,
  "50 cents": 0.5,
  "1 dollar": 1
};

const defaultData = {
  coins: [
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46079.593599537038, true), coinType: "20 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46079.593738425923, true), coinType: "1 dollar", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46079.594907407409, true), coinType: "1 dollar", quantity: 9 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46079.595312500001, true), coinType: "50 cents", quantity: 6 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46079.595578703702, true), coinType: "5 cents", quantity: 5 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46079.596053240741, true), coinType: "20 cents", quantity: 23 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46079.596562500003, true), coinType: "10 cents", quantity: 28 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46086.056840277779, true), coinType: "20 cents", quantity: 3 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46086.056944444441, true), coinType: "50 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46088.890428240738, true), coinType: "10 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46088.890520833331, true), coinType: "20 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46088.890590277777, true), coinType: "50 cents", quantity: 2 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46088.890659722223, true), coinType: "1 dollar", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46096.579479166663, true), coinType: "1 dollar", quantity: 9 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46096.579560185186, true), coinType: "50 cents", quantity: 2 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46097.605752314812, true), coinType: "50 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46097.605844907404, true), coinType: "20 cents", quantity: 2 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46108.735196759262, true), coinType: "50 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46108.735277777778, true), coinType: "5 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46108.735347222224, true), coinType: "10 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46114.434988425928, true), coinType: "1 dollar", quantity: 2 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46114.435208333336, true), coinType: "10 cents", quantity: 8 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46114.435300925928, true), coinType: "20 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46114.43540509259, true), coinType: "50 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46116.413356481484, true), coinType: "20 cents", quantity: 8 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46117.839803240742, true), coinType: "20 cents", quantity: 2 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46117.839895833335, true), coinType: "10 cents", quantity: 3 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46117.839953703704, true), coinType: "5 cents", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46117.84002314815, true), coinType: "1 dollar", quantity: 1 },
    { id: crypto.randomUUID(), dateTime: fromExcelSerial(46117.851331018515, true), coinType: "1 dollar", quantity: 1 }
  ],
  school: [
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.743680555555), paymentDate: fromExcelSerial(45552), description: "year 1 sch fees", amount: 7914 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.746006944442), paymentDate: fromExcelSerial(45583), description: "vle", amount: 5118 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.741631944446), paymentDate: fromExcelSerial(45631), description: "maths tuition", amount: 225 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.741238425922), paymentDate: fromExcelSerial(45643), description: "uol account", amount: 120 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.746307870373), paymentDate: fromExcelSerial(45696), description: "exam fees", amount: 784 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.740717592591), paymentDate: fromExcelSerial(45889), description: "Resit for exam", amount: 2000 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.742847222224), paymentDate: fromExcelSerial(45890), description: "tuition", amount: 210 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.743055555555), paymentDate: fromExcelSerial(45897), description: "tuition", amount: 150 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.743449074071), paymentDate: fromExcelSerial(45917), description: "year 2 sch fees", amount: 7914 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.74386574074), paymentDate: fromExcelSerial(45931), description: "tuiton", amount: 450 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.744456018518), paymentDate: fromExcelSerial(45946), description: "tuition", amount: 560 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.745879629627), paymentDate: fromExcelSerial(45948), description: "vle", amount: 5118 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.745532407411), paymentDate: fromExcelSerial(45951), description: "tuition", amount: 545 },
    { id: crypto.randomUUID(), addedAt: fromExcelSerial(46079.609872685185), paymentDate: fromExcelSerial(46079), description: "Exam fees", amount: 784 }
  ]
};

let state = loadState();

const coinForm = document.querySelector("#coinForm");
const schoolForm = document.querySelector("#schoolForm");
const coinTableBody = document.querySelector("#coinTableBody");
const schoolTableBody = document.querySelector("#schoolTableBody");
const viewTabs = document.querySelectorAll(".view-tab");
const viewPanels = document.querySelectorAll(".view-panel");
const VIEW_STORAGE_KEY = "school-fee-coin-tracker-view";

document.querySelector('input[name="dateTime"]').value = toDateTimeLocalValue(new Date());
document.querySelector('input[name="paymentDate"]').value = toDateInputValue(new Date());

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveView(tab.dataset.viewTarget);
  });
});

coinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.coins.unshift({
    id: crypto.randomUUID(),
    dateTime: formData.get("dateTime"),
    coinType: formData.get("coinType"),
    quantity: Number(formData.get("quantity"))
  });
  saveAndRender();
  event.currentTarget.reset();
  document.querySelector('input[name="dateTime"]').value = toDateTimeLocalValue(new Date());
});

schoolForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.school.unshift({
    id: crypto.randomUUID(),
    addedAt: toDateTimeLocalValue(new Date()),
    paymentDate: formData.get("paymentDate"),
    description: formData.get("description").trim(),
    amount: Number(formData.get("amount"))
  });
  saveAndRender();
  event.currentTarget.reset();
  document.querySelector('input[name="paymentDate"]').value = toDateInputValue(new Date());
});

document.querySelector("#resetCoins").addEventListener("click", () => {
  if (!confirm("Reset coin data back to the original Excel values?")) {
    return;
  }
  state.coins = structuredClone(defaultData.coins);
  saveAndRender();
});

document.querySelector("#resetSchool").addEventListener("click", () => {
  if (!confirm("Reset school payment data back to the original Excel values?")) {
    return;
  }
  state.school = structuredClone(defaultData.school);
  saveAndRender();
});

coinTableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-delete-id]");
  if (!button) {
    return;
  }
  state.coins = state.coins.filter((entry) => entry.id !== button.dataset.deleteId);
  saveAndRender();
});

schoolTableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-delete-id]");
  if (!button) {
    return;
  }
  state.school = state.school.filter((entry) => entry.id !== button.dataset.deleteId);
  saveAndRender();
});

render();
setActiveView(localStorage.getItem(VIEW_STORAGE_KEY) || "overview");

function render() {
  const coinSummary = buildCoinSummary(state.coins);
  const schoolTotal = sum(state.school.map((entry) => entry.amount));
  const schoolByDescription = summarizeByDescription(state.school);
  const trackedTotal = coinSummary.total + schoolTotal;
  const schoolPercent = trackedTotal === 0 ? 0 : (schoolTotal / trackedTotal) * 100;

  updateText("#coinsTotal", formatCurrency(coinSummary.total));
  updateText("#coinsTotalView", formatCurrency(coinSummary.total));
  updateText("#coinsTotalHero", formatCurrency(coinSummary.total));
  updateText("#coinCountHero", String(state.coins.length));
  renderCoinBreakdown(coinSummary.byType, "#coinsBreakdown");
  renderCoinBreakdown(coinSummary.byType, "#coinsBreakdownView");

  updateText("#schoolTotal", formatCurrency(schoolTotal));
  updateText("#schoolTotalView", formatCurrency(schoolTotal));
  updateText("#schoolTotalHero", formatCurrency(schoolTotal));
  updateText("#schoolCountHero", String(state.school.length));
  renderSchoolBreakdown(schoolByDescription, "#schoolBreakdown");
  renderSchoolBreakdown(schoolByDescription, "#schoolBreakdownView");
  document.querySelector("#heroMeterFill").style.width = `${schoolPercent}%`;

  renderCoinTable(state.coins);
  renderSchoolTable(state.school);
}

function renderCoinTable(entries) {
  if (!entries.length) {
    coinTableBody.innerHTML = `<tr><td colspan="6" class="empty-state">No coin entries yet.</td></tr>`;
    return;
  }

  coinTableBody.innerHTML = entries
    .slice()
    .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
    .map((entry) => {
      const value = coinValues[entry.coinType] ?? 0;
      const total = value * entry.quantity;
      return `
        <tr>
          <td>${formatDateTime(entry.dateTime)}</td>
          <td>${entry.coinType}</td>
          <td>${entry.quantity}</td>
          <td>${formatCurrency(value)}</td>
          <td>${formatCurrency(total)}</td>
          <td><button class="delete-button" type="button" data-delete-id="${entry.id}">Delete</button></td>
        </tr>
      `;
    })
    .join("");
}

function renderCoinBreakdown(byType, selector) {
  const container = document.querySelector(selector);
  if (!container) {
    return;
  }

  container.innerHTML = Object.entries(byType)
    .map(([coinType, quantity]) => `
      <article class="coin-pill">
        <span class="coin-pill-label">${coinType}</span>
        <strong class="coin-pill-value">${quantity}</strong>
        <span class="coin-pill-total">${formatCurrency((coinValues[coinType] ?? 0) * quantity)}</span>
      </article>
    `)
    .join("");
}

function renderSchoolBreakdown(descriptionTotals, selector) {
  const container = document.querySelector(selector);
  if (!container) {
    return;
  }

  if (!descriptionTotals.length) {
    container.innerHTML = `<p class="summary-subtext">No school payments yet.</p>`;
    return;
  }

  const paymentCounts = state.school.reduce((counts, entry) => {
    counts[entry.description] = (counts[entry.description] ?? 0) + 1;
    return counts;
  }, {});

  container.innerHTML = descriptionTotals
    .map(([description, amount]) => `
      <article class="school-pill">
        <span class="school-pill-label">${description}</span>
        <strong class="school-pill-value">${formatCurrency(amount)}</strong>
        <span class="school-pill-count">${paymentCounts[description]} payment${paymentCounts[description] === 1 ? "" : "s"}</span>
      </article>
    `)
    .join("");
}

function renderSchoolTable(entries) {
  if (!entries.length) {
    schoolTableBody.innerHTML = `<tr><td colspan="5" class="empty-state">No school payments yet.</td></tr>`;
    return;
  }

  schoolTableBody.innerHTML = entries
    .slice()
    .sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate))
    .map((entry) => `
      <tr>
        <td>${formatDate(entry.addedAt)}</td>
        <td>${formatDate(entry.paymentDate)}</td>
        <td>${entry.description}</td>
        <td>${formatCurrency(entry.amount)}</td>
        <td><button class="delete-button" type="button" data-delete-id="${entry.id}">Delete</button></td>
      </tr>
    `)
    .join("");
}

function buildCoinSummary(entries) {
  const byType = {
    "5 cents": 0,
    "10 cents": 0,
    "20 cents": 0,
    "50 cents": 0,
    "1 dollar": 0
  };

  let total = 0;

  entries.forEach((entry) => {
    byType[entry.coinType] = (byType[entry.coinType] ?? 0) + entry.quantity;
    total += (coinValues[entry.coinType] ?? 0) * entry.quantity;
  });

  return { byType, total };
}

function summarizeByDescription(entries) {
  const totals = new Map();
  entries.forEach((entry) => {
    totals.set(entry.description, (totals.get(entry.description) ?? 0) + entry.amount);
  });
  return [...totals.entries()].sort((a, b) => b[1] - a[1]);
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Could not read saved tracker state.", error);
  }
  return structuredClone(defaultData);
}

function saveAndRender() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function updateText(selector, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = value;
  }
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  }).format(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-SG", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(parseStoredDate(value));
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("en-SG", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(parseStoredDate(value));
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function fromExcelSerial(serial, includeTime = false) {
  const excelEpoch = new Date(1899, 11, 30);
  const milliseconds = serial * 24 * 60 * 60 * 1000;
  const date = new Date(excelEpoch.getTime() + milliseconds);
  return includeTime ? toDateTimeLocalValue(date) : toDateInputValue(date);
}

function toDateTimeLocalValue(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function toDateInputValue(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function parseStoredDate(value) {
  if (typeof value !== "string") {
    return new Date(value);
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) {
    const [datePart, timePart] = value.split("T");
    const [year, month, day] = datePart.split("-").map(Number);
    const [hours, minutes] = timePart.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  }

  return new Date(value);
}

function setActiveView(view) {
  viewTabs.forEach((tab) => {
    const isActive = tab.dataset.viewTarget === view;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  viewPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `view-${view}`);
  });

  localStorage.setItem(VIEW_STORAGE_KEY, view);
}
