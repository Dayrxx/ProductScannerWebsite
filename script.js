/* ========================================
   ScanAI — Interactive Scripts
   Scroll animations, demo, mobile menu
   ======================================== */

// ==================== PRODUCT DATA ====================
const products = [
  {
    name: "Organic Apple",
    brand: "Nature's Best",
    emoji: "🍎",
    score: 95,
    verdict: "Excellent",
    verdictClass: "excellent",
    color: "#4ADE80",
    tags: [
      { text: "All Natural", type: "good" },
      { text: "No Additives", type: "good" },
      { text: "High Fiber", type: "good" },
      { text: "Low Calorie", type: "good" },
    ],
    nutrients: [
      { name: "Fiber", value: "4.4g", pct: 85, color: "green" },
      { name: "Vitamin C", value: "14%", pct: 70, color: "cyan" },
      { name: "Sugar", value: "19g", pct: 40, color: "orange" },
      { name: "Calories", value: "95", pct: 20, color: "green" },
    ],
    ingredients: [
      { name: "Apple (100%)", status: "safe" },
    ],
  },
  {
    name: "Cola Classic",
    brand: "SodaCorp",
    emoji: "🥤",
    score: 18,
    verdict: "Poor",
    verdictClass: "poor",
    color: "#EF4444",
    tags: [
      { text: "High Sugar", type: "bad" },
      { text: "Artificial Colors", type: "bad" },
      { text: "Phosphoric Acid", type: "bad" },
      { text: "Caffeine", type: "neutral" },
    ],
    nutrients: [
      { name: "Sugar", value: "39g", pct: 95, color: "red" },
      { name: "Calories", value: "140", pct: 55, color: "orange" },
      { name: "Sodium", value: "45mg", pct: 30, color: "orange" },
      { name: "Protein", value: "0g", pct: 0, color: "red" },
    ],
    ingredients: [
      { name: "Carbonated Water", status: "safe" },
      { name: "High Fructose Corn Syrup", status: "danger" },
      { name: "Caramel Color (E150d)", status: "warning" },
      { name: "Phosphoric Acid", status: "warning" },
      { name: "Natural Flavors", status: "safe" },
    ],
  },
  {
    name: "Greek Salad Bowl",
    brand: "FreshPrep Co.",
    emoji: "🥗",
    score: 88,
    verdict: "Excellent",
    verdictClass: "excellent",
    color: "#4ADE80",
    tags: [
      { text: "High Protein", type: "good" },
      { text: "Low Processed", type: "good" },
      { text: "Rich in Vitamins", type: "good" },
      { text: "Moderate Sodium", type: "neutral" },
    ],
    nutrients: [
      { name: "Protein", value: "12g", pct: 60, color: "cyan" },
      { name: "Fiber", value: "6g", pct: 75, color: "green" },
      { name: "Healthy Fats", value: "14g", pct: 55, color: "green" },
      { name: "Calories", value: "280", pct: 40, color: "green" },
    ],
    ingredients: [
      { name: "Romaine Lettuce", status: "safe" },
      { name: "Feta Cheese", status: "safe" },
      { name: "Kalamata Olives", status: "safe" },
      { name: "Extra Virgin Olive Oil", status: "safe" },
      { name: "Cucumber, Tomato", status: "safe" },
    ],
  },
  {
    name: "Glazed Donut",
    brand: "Sweet Treats",
    emoji: "🍩",
    score: 25,
    verdict: "Poor",
    verdictClass: "poor",
    color: "#EF4444",
    tags: [
      { text: "High Sugar", type: "bad" },
      { text: "Trans Fats", type: "bad" },
      { text: "Refined Flour", type: "bad" },
      { text: "Low Nutrients", type: "neutral" },
    ],
    nutrients: [
      { name: "Sugar", value: "22g", pct: 85, color: "red" },
      { name: "Saturated Fat", value: "7g", pct: 70, color: "red" },
      { name: "Calories", value: "300", pct: 60, color: "orange" },
      { name: "Fiber", value: "0.7g", pct: 8, color: "red" },
    ],
    ingredients: [
      { name: "Enriched Wheat Flour", status: "warning" },
      { name: "Sugar", status: "warning" },
      { name: "Palm Oil", status: "danger" },
      { name: "Soy Lecithin", status: "safe" },
      { name: "Artificial Flavors", status: "danger" },
    ],
  },
  {
    name: "Avocado Toast",
    brand: "Café Fresh",
    emoji: "🥑",
    score: 82,
    verdict: "Good",
    verdictClass: "good",
    color: "#22D3EE",
    tags: [
      { text: "Healthy Fats", type: "good" },
      { text: "Whole Grain", type: "good" },
      { text: "Good Fiber", type: "good" },
      { text: "Moderate Cal", type: "neutral" },
    ],
    nutrients: [
      { name: "Healthy Fats", value: "18g", pct: 65, color: "green" },
      { name: "Fiber", value: "8g", pct: 80, color: "green" },
      { name: "Protein", value: "7g", pct: 35, color: "cyan" },
      { name: "Calories", value: "320", pct: 45, color: "orange" },
    ],
    ingredients: [
      { name: "Whole Grain Bread", status: "safe" },
      { name: "Hass Avocado", status: "safe" },
      { name: "Lemon Juice", status: "safe" },
      { name: "Sea Salt", status: "safe" },
      { name: "Red Pepper Flakes", status: "safe" },
    ],
  },
];

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

// ==================== NAVBAR SCROLL ====================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    lastScroll = currentScroll;
  });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

// ==================== DEMO SECTION ====================
function initDemo() {
  const demoResult = document.getElementById("demoResult");
  const productBtns = document.querySelectorAll(".demo-product");

  function renderProduct(index) {
    const p = products[index];

    // Calculate stroke offset for score ring
    const circumference = 2 * Math.PI * 58;
    const offset = circumference - (p.score / 100) * circumference;

    const tagsHtml = p.tags
      .map((t) => `<span class="demo-tag ${t.type}">${t.text}</span>`)
      .join("");

    const nutrientsHtml = p.nutrients
      .map(
        (n) => `
      <div class="nutrient-item">
        <div class="nutrient-header">
          <span>${n.name}</span>
          <span>${n.value}</span>
        </div>
        <div class="nutrient-bar">
          <div class="nutrient-fill ${n.color}" data-width="${n.pct}"></div>
        </div>
      </div>
    `
      )
      .join("");

    const ingredientsHtml = p.ingredients
      .map(
        (i) => `
      <div class="ingredient-item">
        <span class="ingredient-dot ${i.status}"></span>
        <span>${i.name}</span>
      </div>
    `
      )
      .join("");

    demoResult.style.opacity = "0";

    setTimeout(() => {
      demoResult.innerHTML = `
        <div class="demo-grid">
          <div class="demo-score-section">
            <div class="demo-score-ring">
              <svg viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="58" stroke="rgba(255,255,255,0.06)" stroke-width="10" fill="none"/>
                <circle class="demo-ring-progress" cx="70" cy="70" r="58" stroke="${p.color}" stroke-width="10" fill="none" stroke-linecap="round"
                  stroke-dasharray="${circumference}" stroke-dashoffset="${circumference}" transform="rotate(-90 70 70)"
                  data-target="${offset}" />
              </svg>
              <div class="demo-score-value">
                <span class="demo-score-num" data-target="${p.score}">0</span>
                <span class="demo-score-of">/100</span>
              </div>
            </div>
            <div class="demo-verdict ${p.verdictClass}">${p.verdict}</div>
          </div>
          <div class="demo-info">
            <h3>${p.emoji} ${p.name}</h3>
            <span class="brand">${p.brand}</span>
            <h4>Key Findings</h4>
            <div class="demo-tags">${tagsHtml}</div>
            <h4>Ingredients</h4>
            <div class="ingredient-list">${ingredientsHtml}</div>
          </div>
          <div class="demo-nutrients">
            <h4>Nutrition Breakdown</h4>
            <div class="nutrient-bars">${nutrientsHtml}</div>
          </div>
        </div>
      `;

      demoResult.style.opacity = "1";

      // Animate score number
      const scoreEl = demoResult.querySelector(".demo-score-num");
      animateNumber(scoreEl, 0, p.score, 1000);

      // Animate ring
      const ringEl = demoResult.querySelector(".demo-ring-progress");
      requestAnimationFrame(() => {
        ringEl.style.transition =
          "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
        ringEl.style.strokeDashoffset = offset;
      });

      // Animate nutrient bars
      setTimeout(() => {
        demoResult.querySelectorAll(".nutrient-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width + "%";
        });
      }, 200);
    }, 300);
  }

  productBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      productBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProduct(parseInt(btn.dataset.product));
    });
  });

  // Initial render
  renderProduct(0);
}

// ==================== ANIMATE NUMBER ====================
function animateNumber(el, start, end, duration) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offset = 80;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

// ==================== SCORE RING ANIMATION (Hero phone) ====================
function initHeroScoreRing() {
  const ring = document.querySelector(".score-ring-progress");
  if (!ring) return;

  // Animate on scroll into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ring.style.transition =
            "stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1)";
          ring.style.strokeDashoffset = "190"; // ~42/100 of 327
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(ring);
}

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initNavbar();
  initMobileMenu();
  initDemo();
  initSmoothScroll();
  initHeroScoreRing();
});
