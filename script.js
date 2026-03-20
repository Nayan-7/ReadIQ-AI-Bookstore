// GitHub Copilot

// -------------------- DATA / CONSTANTS --------------------
const books = [
  { id: 1, title: "Dune", author: "Frank Herbert", category: "Science Fiction", price: 0, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 2, title: "Neuromancer", author: "William Gibson", category: "Science Fiction", price: 370, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 3, title: "Foundation", author: "Isaac Asimov", category: "Science Fiction", price: 390, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 4, title: "Clean Code", author: "Robert C. Martin", category: "Programming", price: 200, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 5, title: "You Don't Know JS", author: "Kyle Simpson", category: "Programming", price: 100, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 6, title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "Programming", price: 111, image: "https://images.unsplash.com/photo-1518621039679-d9f7f35f6043?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 7, title: "Atomic Habits", author: "James Clear", category: "Lifestyle", price: 260, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 8, title: "The Power of Now", author: "Eckhart Tolle", category: "Lifestyle", price: 170, image: "https://images.unsplash.com/photo-1501968198498-21092fe68b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 9, title: "How to Read a Book", author: "Mortimer J. Adler", category: "Education", price: 300, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 10, title: "Make It Stick", author: "Peter C. Brown", category: "Education", price: 250, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 11, title: "Watchmen", author: "Alan Moore", category: "Comics", price: 300, image: "https://images.unsplash.com/photo-1579586145622-b6e809c6bf0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" },
  { id: 12, title: "Maus", author: "Art Spiegelman", category: "Comics", price: 250, image: "https://images.unsplash.com/photo-1547658719-da2b848c1ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300" }
];



const heroImages = [
  { src: "https://img.freepik.com/premium-photo/artificial-intelligence-ai-robot-reads-book-library-concept-collecting-data_357568-6987.jpg?w=2000", category: "all" },
  { src: "https://marketplace.canva.com/EAE52XoPlyI/1/0/1600w/canva-green-neon-modern-science-tech-desktop-wallpaper-FFzVktfu4Hg.jpg", category: "Science Fiction" },
  { src: "https://assets.telegraphindia.com/telegraph/2022/Aug/1660980532_a12.jpg", category: "Lifestyle" },
  { src: "https://tse4.mm.bing.net/th/id/OIP.JJkWzBYLP7zD4nwAPg1nQAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", category: "Programming" },
  { src: "https://www.disneydining.com/wp-content/uploads/2024/07/Harry-Potter-Books.jpg", category: "Comics" },
  { src: "https://m.media-amazon.com/images/S/aplus-media/vc/ca74c1f0-3f3e-4644-beff-95262bcb5cd8.__CR0,0,970,600_PT0_SX970_V1___.jpg", category: "Education" },
  { src: "https://tse3.mm.bing.net/th/id/OIP.ZgmJ5Ygilm_XKTr7GadEDQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", category: "Biopics" }
];

// -------------------- STATE --------------------


let chatHistory = [];
let currentBookForAI = null;
let cart = JSON.parse(localStorage.getItem('smartlearn-cart')) || [];
let discountPercent = parseInt(localStorage.getItem('smartlearn-discount')) || 0;
let lastCartSync = 0;
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let correctAnswersCount = 0;
let currentHeroIndex = 0;
let quizQuestions = [];   // ✅ ADD THIS
let userAnswers = [];
let autoChangeInterval = null;
let token = localStorage.getItem('smartlearn-token');
let user = null;
let currentPasswordStrength = "";
let otpTimer = null;
let otpTimeLeft = 30;
let backendBooks = [];
let ownedBookIds = new Set();
let isProcessingPayment = false;











// -------------------- DOM REFERENCES -------------------
const catalogGrid = document.getElementById("catalogGrid");
const filters = document.querySelectorAll(".filters .btn");
const cartCount = document.querySelector(".cart-count");
const cartItemsContainer = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartDiscountEl = document.getElementById("cartDiscount");
const finalPriceEl = document.getElementById("finalPrice");
const clearCartBtn = document.getElementById("clearCart");
const profileBadge = document.getElementById("profileBadge");

const profileEmail = document.getElementById("profileEmail");
const providerBadge = document.getElementById("providerBadge");



const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const imageSearchInput = document.getElementById("imageSearchInput");
const chatbotBtn = document.getElementById("chatbotBtn");
const chatbotBox = document.getElementById("chatbotBox");
const closeChatbot = document.getElementById("closeChatbot");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");
const chatMessages = document.getElementById("chatMessages");
const menuOrders = document.getElementById("menuOrders");
const menuCart = document.getElementById("menuCart");
const menuAI = document.getElementById("menuAI");
const menuProfile = document.getElementById("menuProfile");
const menuSettings = document.getElementById("menuSettings");
const profileModal = document.getElementById("profileModal");
const profileNameInput = document.getElementById("profileNameInput");
const profilePicInput = document.getElementById("profilePicInput");
const saveProfileBtn = document.getElementById("saveProfileBtn");
const closeProfileBtn = document.getElementById("closeProfileBtn");
const googleLogo = document.getElementById("googleLogo");
const switchGoogleAccountBtn = document.getElementById("switchGoogleAccount");
const switchToRegisterBtn = document.getElementById("switchToRegister");
const switchToLoginBtn = document.getElementById("switchToLogin");
const generateSummaryBtn = document.getElementById("generateSummaryBtn");






const loginModal = document.getElementById("loginModal");
const btnLogin = document.getElementById("btnLogin");
const loginCloseBtn = loginModal?.querySelector(".close-btn");
const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");
const googleLoginBtn = document.getElementById('googleLoginBtn');
const registerForm = document.getElementById('registerForm');
const capsWarning = document.querySelector(".caps-warning");
const registerMsg = document.getElementById("registerMsg");
// -------------------- OTP DOM --------------------
const otpBox = document.getElementById("otpBox");
const otpInput = document.getElementById("otpInput");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const resendOtpBtn = document.getElementById("resendOtpBtn");
const otpMsg = document.getElementById("otpMsg");
const otpSeconds = document.getElementById("otpSeconds");



const quizModal = document.getElementById("quizModal");
const btnQuiz = document.getElementById("btnQuiz");
const btnQuiz2 = document.getElementById("btnQuiz2");
const quizCloseBtn = quizModal?.querySelector(".close-btn");
const quizQuestionEl = document.getElementById("quizQuestion");
const quizOptionsEl = document.getElementById("quizOptions");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const quizProgressFill = document.getElementById("quizProgressFill");
const quizResult = document.getElementById("quizResult");
const accountBox = document.getElementById("accountBox");
const accountTrigger = document.getElementById("accountTrigger");
const accountMenu = document.getElementById("accountMenu");
const accountName = document.getElementById("accountName");
const menuName = document.getElementById("menuName");
const accountPic = document.getElementById("accountPic");
const menuPic = document.getElementById("menuPic");





const paymentSection = document.getElementById("paymentMethod");
const payBtn = document.getElementById("payBtn");
const collapsibleButtons = paymentSection ? paymentSection.querySelectorAll(".collapsible-btn") : [];
const upiDetails = document.getElementById("upiDetails");
const upiButtons = upiDetails ? upiDetails.querySelectorAll(".upi-btn") : [];
const netbankingButtons = paymentSection ? paymentSection.querySelectorAll(".netbanking-btn") : [];
const cardDetails = document.getElementById("cardDetails");



const orderHistorySection = document.getElementById('orderHistory');
const orderList = document.getElementById('orderList');
const btnLogout = document.getElementById('btnLogout');

const heroImageElement = document.getElementById("heroImage");
const heroPrevBtn = document.getElementById("heroPrevBtn");
const heroNextBtn = document.getElementById("heroNextBtn");

const urlParams = new URLSearchParams(window.location.search);
const tokenFromUrl = urlParams.get('token');

// -------------------- HELPERS --------------------

function getBookById(id) {
  // 🔐 If backend books are loaded, NEVER use local prices
  if (backendBooks.length > 0) {
    return backendBooks.find(b => Number(b.id) === Number(id));
  }

  // fallback only before backend loads
  return books.find(b => Number(b.id) === Number(id));
}


function getDiscountedPrice(book) {
  if (!book) return 0;

  if (discountPercent <= 0) return book.price;

 const discountAmount = Math.round(
  (book.price * discountPercent) / 100
);

  return Math.max(book.price - discountAmount, 0);
}



function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}
async function openBook(bookId) {
  if (!token) {
    alert("Please login to read this book");
    return;
  }

  try {
    const res = await fetch(
      `http://localhost:3000/api/books/${bookId}/read`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Access denied");
      return;
    }

    // 🔥 Track reading activity
fetch("http://localhost:3000/api/activity", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({
    bookId,
    action: "open"
  })
}).catch(()=>{});

    // 📖 Open reader tab
    const reader = window.open("", "_blank");

    // 🔴 POPUP BLOCKER FIX
    if (!reader) {
      alert("Popup blocked. Please allow popups for this site.");
      return;
    }

    reader.document.write(`
      <html>
        <head>
          <title>${data.book.title}</title>
          <style>
            body {
              font-family: Georgia, serif;
              background: #111;
              color: #eee;
              padding: 40px;
              line-height: 1.7;
              max-width: 800px;
              margin: auto;
            }
            h1 { color: #b22222; }
            h2 { margin-top: 40px; color: #ff6b6b; }
            p { margin-bottom: 18px; }
          </style>
        </head>
        <body>
          <h1>${data.book.title}</h1>
          <p><em>by ${data.book.author}</em></p>

          ${
            data.book.content.chapters
              .map(
                c => `
              <h2>${c.title}</h2>
              <p>${c.text.replace(/\n/g, "<br>")}</p>
            `
              )
              .join("")
          }
        </body>
      </html>
    `);

    reader.document.close();

  } catch (err) {
    alert("Failed to open book");
    console.error(err);
  }
}
function saveCart() { localStorage.setItem('smartlearn-cart', JSON.stringify(cart)); }
function saveDiscount() { localStorage.setItem('smartlearn-discount', String(discountPercent)); }
function setAuth(newToken, userData) {

  // ✅ GOOGLE LOGIN FLOW (FIXED)
  if (userData?.provider === "google") {

    token = newToken; // 🔑 store token in memory
    localStorage.setItem("smartlearn-token", newToken);

    

    // 📥 Load profile from backend then refresh UI
    bootstrapUser().then(() => {
      updateAccountUI();     // ✅ Google profile pic now appears
      loadOrderHistory?.();
    });

    return;
  }

  // ✅ NORMAL EMAIL LOGIN FLOW
  token = newToken;
  localStorage.setItem("smartlearn-token", token);

  user = {
    name:
      userData?.name ||
      userData?.email?.split("@")[0] ||
      "User",
    email: userData?.email || "",
    profilePic: userData?.profilePic || "",
    provider: userData?.provider || "email"
  };

  localStorage.setItem("smartlearn-user", JSON.stringify(user));

  updateAccountUI();
  loadOrderHistory?.();

  
}



function stopOtpTimer() {
  if (otpTimer) {
    clearInterval(otpTimer);
    otpTimer = null;
  }
}





function clearSelection(buttons) { buttons.forEach(btn => { btn.setAttribute("aria-checked", "false"); btn.tabIndex = -1; }); }
function selectButton(buttons, selectedBtn) {
  clearSelection(buttons);
  selectedBtn.setAttribute("aria-checked", "true");
  selectedBtn.tabIndex = 0;
  selectedBtn.focus();
}
function updateAccountUI() {
  // ---------------- SAFETY ----------------
  if (!btnLogin || !accountBox || !accountPic || !menuPic) return;

  // ---------------- LOGGED IN ----------------
  if (token && user) {
    // Hide login button
    btnLogin.classList.add("hidden");

    // Show account box
    accountBox.classList.remove("hidden");
    accountBox.style.display = "flex";

    // Names
    const displayName =
      user.name ||
      user.email?.split("@")[0] ||
      "User";

    accountName.textContent = displayName;
    menuName.textContent = displayName;

    // ---------------- AVATAR LOGIC (CRITICAL FIX) ----------------
    const fallbackAvatar =
      `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=111&color=fff`;

    let avatarUrl = fallbackAvatar;

    if (
      user.provider === "google" &&
      user.profilePic &&
      typeof user.profilePic === "string"
    ) {
      // Google photos sometimes need size param
      avatarUrl = user.profilePic.includes("?")
        ? user.profilePic + "&sz=96"
        : user.profilePic + "?sz=96";
    } 
    else if (
      user.profilePic &&
      user.profilePic.startsWith("http")
    ) {
      avatarUrl = user.profilePic;
    }

    // Apply avatar
    accountPic.src = avatarUrl;
    menuPic.src = avatarUrl;

    // 🔒 Image fail-safe (IMPORTANT)
    accountPic.onerror = () => {
      accountPic.src = fallbackAvatar;
    };
    menuPic.onerror = () => {
      menuPic.src = fallbackAvatar;
    };

    // ---------------- PROVIDER UI ----------------
    const menuSub = document.querySelector(".menu-sub");
    const menuProfileBtn = document.getElementById("menuProfile");

    if (user.provider === "google") {
      googleLogo?.classList.remove("hidden");
      providerBadge?.classList.remove("hidden");

      if (profileEmail) profileEmail.textContent = user.email || "";
      if (menuSub) menuSub.textContent = user.email || "Google Account";
      if (menuProfileBtn) menuProfileBtn.textContent = "👤 Google Account";

    } else {
      googleLogo?.classList.add("hidden");
      providerBadge?.classList.add("hidden");

      if (profileEmail) profileEmail.textContent = "";
      if (menuSub) menuSub.textContent = "SmartLearn Account";
      if (menuProfileBtn) menuProfileBtn.textContent = "👤 My Profile";
    }

    return;
  }

  // ---------------- LOGGED OUT ----------------
  btnLogin.classList.remove("hidden");

  accountBox.classList.add("hidden");
  accountBox.style.display = "none";
  accountMenu?.classList.add("hidden");

  googleLogo?.classList.add("hidden");
  providerBadge?.classList.add("hidden");

  const menuSub = document.querySelector(".menu-sub");
  if (menuSub) menuSub.textContent = "SmartLearn Account";
}


// -------------------- OTP FUNCTIONS (GLOBAL) --------------------
function showOtpUI(email) {
  sessionStorage.setItem("pendingEmail", email);

  registerForm.classList.add("hidden");
  otpBox.classList.remove("hidden");

  startOtpTimer();
}

function startOtpTimer() {
  otpTimeLeft = 30;
  resendOtpBtn.disabled = true;
  otpSeconds.textContent = otpTimeLeft;

  if (otpTimer) clearInterval(otpTimer);

  otpTimer = setInterval(() => {
    otpTimeLeft--;
    otpSeconds.textContent = otpTimeLeft;

    if (otpTimeLeft <= 0) {
      clearInterval(otpTimer);
      resendOtpBtn.disabled = false;
    }
  }, 1000);
}

// -------------------- LOADING SPINNER HELPERS --------------------
function startLoading(btn) {
  if (!btn) return;
  btn.dataset.originalText = btn.innerHTML;
  btn.innerHTML = `<span class="spinner"></span>`;
  btn.classList.add("loading");
  btn.disabled = true;
}

function stopLoading(btn) {
  if (!btn) return;
  btn.innerHTML = btn.dataset.originalText;
  btn.classList.remove("loading");
  btn.disabled = false;
}



// -------------------- RENDERING --------------------
function createBookCard(book) {
  const isOwned = ownedBookIds.has(Number(book.id));

  const dna = user?.learningDNA || {};
  const thinkingStyle = dna.thinkingStyle || "example-driven";

  let aiSection = "";
  let fitScoreBadge = "";

  if (thinkingStyle === "visual" && book.previewText) {
    aiSection = `<p class="ai-preview">👀 Preview: ${escapeHtml(book.previewText)}</p>`;
  } 
  else if (thinkingStyle === "theory-first" && book.aiSummary) {
    aiSection = `<p class="ai-summary">🧠 Summary: ${escapeHtml(book.aiSummary)}</p>`;
  } 
  else if (thinkingStyle === "example-driven") {
    aiSection = `<p class="ai-meta">⏱ ${book.readingTime || 15} min • 🎯 ${book.level || "Beginner"}</p>`;
  } 
  else if (thinkingStyle === "question-based") {
    aiSection = `<p class="ai-question">❓ Curious about ${escapeHtml(book.category)}?</p>`;
  }

  const discountedPrice = getDiscountedPrice(book);

  const card = document.createElement("div");
  card.className = "book-card";
  card.tabIndex = 0;

  card.innerHTML = `
    <img src="${book.image}" class="book-image" loading="lazy"/>

    <div class="book-content">
      <h3>${escapeHtml(book.title)}</h3>
      <p class="author">by ${escapeHtml(book.author)}</p>
      <span class="category">${escapeHtml(book.category)}</span>

      <div class="fit-score" style="font-size:12px;color:#4ade80;margin-top:4px"></div>

      ${aiSection}

      <p class="price">
        ₹${discountedPrice}
        ${discountPercent > 0 ? `<span class="old-price">₹${book.price}</span>` : ""}
      </p>

      <button class="access-btn ${isOwned ? "read" : ""}" data-id="${book.id}">
        ${isOwned ? "📖 Read Now" : "<i class='fas fa-book-open'></i> Get Access"}
      </button>

      ${isOwned ? `
      <button class="btn btn-outline ask-btn" 
              style="margin-top:10px"
              onclick="openAskBook(${book.id})">
        🤖 Ask The Book
      </button>

      <button class="btn btn-outline tutor-btn"
              style="margin-top:6px"
              onclick="askAITutor(${book.id}, 'Explain key concepts')">
        🎓 AI Tutor
      </button>

      <button class="btn btn-outline graph-btn"
              style="margin-top:6px"
              onclick="generateKnowledgeGraph(${book.id})">
        🧠 Knowledge Graph
      </button>
      ` : ""}
    </div>
  `;

 // 🎯 Load AI Fit Score on hover (better performance)
if (user && token) {

  card.addEventListener("mouseenter", async () => {

    const badge = card.querySelector(".fit-score");

    if (!badge || badge.dataset.loaded) return;

    const score = await getBookFitScore(book.id);

    if (score) {
      badge.textContent = `🎯 ${score}% AI Match`;
      badge.dataset.loaded = "true";
    }

  });

}

  return card;
}

// Fetch remote books with graceful fallback to local dataset
async function renderBooks(filter = "all", searchQuery = "") {
  if (catalogGrid) catalogGrid.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--text-muted);">Loading books...</div>';
  try {
    const params = new URLSearchParams();
    if (filter && filter !== "all") params.append('category', filter);
    if (searchQuery) params.append('search', searchQuery.trim());
    const url = params.toString() ? `http://localhost:3000/api/books?${params.toString()}` : 'http://localhost:3000/api/books';
    const resp = await fetch(url, { cache: "no-store", headers: { 'Content-Type': 'application/json' } });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    let remoteBooks = [];
    if (data && Array.isArray(data.books)) remoteBooks = data.books;
    else if (Array.isArray(data)) remoteBooks = data;
  if (catalogGrid) {
  catalogGrid.innerHTML = "";
  backendBooks = remoteBooks;

  // 🔒 Only validate cart if backend returned books
  if (backendBooks.length > 0) {
    cart = cart.filter(item =>
      backendBooks.some(b => Number(b.id) === Number(item.id))
    );
  }


      saveCart();

      renderCart();        // 🔥 refresh visible cart items
      updateCartSummary(); // 🔥 recalc totals safely



   if (remoteBooks.length) {
  const fragment = document.createDocumentFragment();

  remoteBooks.forEach(b => {
    fragment.appendChild(createBookCard(b));
  });

  catalogGrid.appendChild(fragment);
}

      else catalogGrid.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--text-muted);">No books found.</div>';
    }
    return remoteBooks;
  } catch (err) {
    console.warn('Backend fetch failed, using local books:', err);
    const list = (filter === "all" ? books : books.filter(b => b.category === filter))
      .filter(b => !searchQuery || (b.title + " " + b.author).toLowerCase().includes(searchQuery.toLowerCase()));
    if (catalogGrid) {
      catalogGrid.innerHTML = "";
      if (list.length) list.forEach(b => catalogGrid.appendChild(createBookCard(b)));
      else catalogGrid.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--text-muted);">No books found.</div>';
    }
    return list;
  }
}

// -------------------- AI RECOMMENDATIONS --------------------
async function loadAIRecommendations() {

  if (!token) return;

  try {

    const res = await fetch(
      "http://localhost:3000/api/ai/recommendations",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await res.json();

    if (!res.ok || !Array.isArray(data.recommendations)) return;

    const container = document.getElementById("aiRecommendations");

    if (!container) return;

    container.innerHTML = "";

    if (data.recommendations.length === 0) {
      container.innerHTML =
        `<div class="ai-loading">No AI recommendations yet.</div>`;
      return;
    }

  // -------- GROUP BOOKS --------
const recommended = [];
const similar = [];
const trending = [];

data.recommendations.forEach((item, index) => {

  if (!item.book) return;

  const reason = item.reason;

  if (reason === "recommended") {
    recommended.push(item.book);
  }

  else if (reason === "similar") {
    similar.push(item.book);
  }

  else if (reason === "trending") {
    trending.push(item.book);
  }

  else {
    // balanced fallback distribution
    const position = index % 3;

    if (position === 0) {
      recommended.push(item.book);
    }
    else if (position === 1) {
      similar.push(item.book);
    }
    else {
      trending.push(item.book);
    }
  }

});

   function createRow(title, books) {

  // 🚨 do not render empty rows
  if (!books || books.length === 0) return;

  const row = document.createElement("div");
  row.className = "ai-row";

  const heading = document.createElement("h3");
  heading.className = "ai-row-title";
  heading.textContent = title;

  const rowBooks = document.createElement("div");
  rowBooks.className = "ai-row-books";

  books.forEach(book => {
    const card = createBookCard(book);
    rowBooks.appendChild(card);
  });

  row.appendChild(heading);
  row.appendChild(rowBooks);

  container.appendChild(row);
}

    // -------- RENDER ROWS --------
    createRow("Recommended For You", recommended);
    createRow("Because You Read Programming", similar);
    createRow("Trending This Week", trending);

  } catch (err) {
    console.warn("AI recommendations failed", err);
  }

}
// -------------------- AI BOOK FIT SCORE --------------------
async function getBookFitScore(bookId) {
  if (!token) return null;

  try {
    const res = await fetch("http://localhost:3000/api/ai/book-fit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ bookId })
    });

    const data = await res.json();
    if (!res.ok) return null;

    return data.fitScore || null;

  } catch (err) {
    console.warn("Book fit score failed", err);
    return null;
  }
}
// -------------------- CART OPERATIONS --------------------
function updateCartCount() {
  if (!cartCount) return;
  cartCount.textContent = cart.length;
}


function updateCartSummary() {
  if (!cartSubtotalEl || !finalPriceEl || !cartDiscountEl) return;

  let originalTotal = 0;

  cart.forEach(item => {
    const book = getBookById(item.id);
    if (!book) return;

    originalTotal += Number(book.price) || 0;
  });

 const discountAmount = Math.round(
  (originalTotal * discountPercent) / 100
);

  const finalAmount = Math.max(originalTotal - discountAmount, 0);

  // 🧾 UI
  cartSubtotalEl.textContent = `₹${originalTotal}`;

  cartDiscountEl.textContent =
    discountPercent > 0
      ? `-₹${discountAmount} (${discountPercent}%)`
      : "—";

  finalPriceEl.textContent = `₹${finalAmount}`;

  updatePayButton();
}



function updatePayButton() {
  if (!payBtn) return;

  // ✅ Calculate safely from actual book prices
  let originalTotal = 0;

  cart.forEach(item => {
    const book = getBookById(item.id);
    if (book) originalTotal += Number(book.price) || 0;
  });

  const discountAmount = Math.round(
    (originalTotal * discountPercent) / 100
  );

  const amount = Math.max(originalTotal - discountAmount, 0);

  // 🛒 Empty cart
  if (cart.length === 0) {
    payBtn.textContent = "Select books to continue";
    payBtn.disabled = true;
    payBtn.classList.remove("enabled");
    payBtn.style.cursor = "not-allowed";
    return;
  }

  // 🎁 Free checkout
  if (amount === 0) {
    payBtn.textContent = "Get Free Access";
    payBtn.disabled = false;
    payBtn.classList.add("enabled");
    payBtn.style.cursor = "pointer";
    return;
  }

  // 💳 Paid flow (display only — backend is real source)
  payBtn.textContent = `Pay ₹${amount}`;
  payBtn.disabled = false;
  payBtn.classList.add("enabled");
  payBtn.style.cursor = "pointer";
}



function renderCart() {
  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = "";

  if (!cart.length) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart" style="text-align:center; padding:40px; color:var(--text-muted)">
        <i class="fas fa-book-open" style="font-size:3rem;"></i>
        <p>Your digital library checkout is empty</p>
      </div>
    `;
    updateCartSummary();
    updatePayButton();
    return;
  }

  cart.forEach(item => {

    const book = getBookById(item.id);



    if (!book) return;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <img src="${book.image}" style="width:90px;border-radius:10px">
      <div style="flex:1">
        <h4>${escapeHtml(book.title)}</h4>
        <p style="color:var(--text-muted)">by ${escapeHtml(book.author)}</p>
       <p style="font-weight:700;color:var(--accent-red)">
       ₹${getDiscountedPrice(book)}
       ${discountPercent > 0 ? `<span class="old-price">₹${book.price}</span>` : ""}
        </p>

        <p class="digital-badge">📘 Lifetime Digital Access</p>
      </div>
      <button class="remove-item" data-id="${book.id}">
        <i class="fas fa-trash"></i>
      </button>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  updateCartSummary();
  updatePayButton();
}



function addToCart(bookId) {

  if (ownedBookIds.has(Number(bookId))) {
    alert("You already own this book");
    return;
  }

  if (cart.some(item => Number(item.id) === Number(bookId))) {
    alert("This book is already in your cart");
    return;
  }

  cart.push({ id: Number(bookId) });


  saveCart();
  updateCartCount();
  renderCart();
  updateCartSummary();
  updatePayButton();
}



function removeFromCart(bookId) {
  cart = cart.filter(item => Number(item.id) !== Number(bookId));

  

  saveCart();
  updateCartCount();
  renderCart();
  updateCartSummary();
  updatePayButton();
}


function clearCart({ skipBackend = false } = {}) {
  cart = [];

  // ❌ REMOVE THIS LINE
  // discountPercent = 0;

  saveCart();
  updateCartCount();
  renderCart();
  updatePayButton();
}



// -------------------- BACKEND SYNC / ORDERS (FINAL SAFE VERSION) --------------------










async function loadOrderHistory() {
  if (!token || !orderHistorySection || !orderList) return;

  try {
    const resp = await fetch("http://localhost:3000/api/orders", {
      headers: { Authorization: `Bearer ${token}` }
    });

    const data = await resp.json();

    if (!resp.ok || !Array.isArray(data.orders) || data.orders.length === 0) {
      orderList.innerHTML = "<p>Your digital library is empty.</p>";
      orderHistorySection.style.display = "block";
      ownedBookIds.clear();
      return;
    }

    orderList.innerHTML = "";

    // 🔒 RESET OWNED BOOKS
    ownedBookIds.clear();

    // ✅ ONLY PAID ORDERS
    const paidOrders = data.orders.filter(o => o.status === "paid");

    if (paidOrders.length === 0) {
      orderList.innerHTML = "<p>No purchased books yet.</p>";
      orderHistorySection.style.display = "block";
      return;
    }

    paidOrders.forEach(order => {

      const orderDiv = document.createElement("div");
      orderDiv.className = "order-item";

      const summary = document.createElement("div");
      summary.className = "order-summary";
      summary.innerHTML = `
        <strong>Library ID:</strong> ${order._id}<br>
        <strong>Access Type:</strong> Lifetime Digital Access<br>
        <strong>Status:</strong> Active
      `;

      const details = document.createElement("div");
      details.className = "order-details hidden";

      if (Array.isArray(order.items)) {
        order.items.forEach(item => {

          // ✅ OWNERSHIP AFTER PAYMENT
          ownedBookIds.add(Number(item.bookId));

          const book = backendBooks.find(
            b => Number(b.id) === Number(item.bookId)
          );

          if (!book) return;

          const itemRow = document.createElement("div");
          itemRow.className = "order-book";
          itemRow.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div>
              <p><strong>${book.title}</strong></p>
              <p>📘 Lifetime Digital Access</p>
              <button class="read-btn" onclick="openBook(${book.id})">
                📖 Read Now
              </button>
            </div>
          `;

          details.appendChild(itemRow);
        });
      }

      summary.onclick = () => details.classList.toggle("hidden");

      orderDiv.appendChild(summary);
      orderDiv.appendChild(details);
      orderList.appendChild(orderDiv);
    });

    // 🔔 BADGE ONLY FOR PAID LIBRARIES
    if (profileBadge) {
      profileBadge.classList.remove("hidden");
      profileBadge.textContent =
        paidOrders.length > 9 ? "9+" : paidOrders.length;

      profileBadge.classList.remove("pulse");
      void profileBadge.offsetWidth;
      profileBadge.classList.add("pulse");
    }

    orderHistorySection.style.display = "block";

  } catch (err) {
    console.warn("Library load failed:", err);
    orderList.innerHTML = "<p>Failed to load your library.</p>";
  } finally {
    // 🔁 Refresh catalog to update ownership UI
    await renderBooks("all");
  }
}

// -------------------- AI DASHBOARD --------------------
async function loadAIDashboard() {

  if (!token) return;

  try {
    const res = await fetch(
      "http://localhost:3000/api/ai/dashboard",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await res.json();

    if (!res.ok) return;

    document.getElementById("aiFocus").textContent =
      data.brain?.focus || "-";

    document.getElementById("aiSpeed").textContent =
      data.brain?.learningSpeed || "-";

    document.getElementById("aiEngagement").textContent =
      data.brain?.engagement || "-";

  } catch (err) {
    console.warn("AI dashboard failed", err);
  }
}

const studyCoachBtn = document.getElementById("studyCoachBtn");

studyCoachBtn?.addEventListener("click", async () => {

  if (!token) {
    alert("Login required");
    return;
  }

  const section = document.getElementById("studyCoachSection");
  const result = document.getElementById("studyCoachResult");

  section.classList.remove("hidden");
  result.textContent = "🧠 Generating study advice...";

  try {

    const res = await fetch(
      "http://localhost:3000/api/ai/study-coach",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await res.json();

    result.textContent = data.advice || "No advice available.";

  } catch (err) {

    result.textContent = "Failed to load study coach.";

  }

});

// -------------------- SEARCH & IMAGE SEARCH --------------------
async function performSearch(query) {

  const trimmedQuery = query ? query.trim() : "";

  // Empty search → show all books
  if (!trimmedQuery) {
    renderBooks("all");
    return;
  }

  try {

    // 🔎 AI semantic search
    const res = await fetch(
      `http://localhost:3000/api/search/ai?q=${encodeURIComponent(trimmedQuery)}`
    );

    const data = await res.json();

    if (res.ok && Array.isArray(data.books) && data.books.length > 0) {

      if (catalogGrid) catalogGrid.innerHTML = "";

      const fragment = document.createDocumentFragment();

      data.books.forEach(book => {
        fragment.appendChild(createBookCard(book));
      });

      catalogGrid.appendChild(fragment);
      return;
    }

  } catch (err) {
    console.warn("AI search failed, using normal search");
  }

  // fallback to normal search
  await renderBooks("all", trimmedQuery);
}


async function performImageSearch(file) {

  if (!file) return;

  // 🔒 Validate file type
  const allowedTypes = ["image/png", "image/jpeg", "image/webp"];

  if (!allowedTypes.includes(file.type)) {
    alert("Please upload a PNG, JPG, or WEBP image.");
    return;
  }

  // Loading state
  if (catalogGrid) {
    catalogGrid.innerHTML = `
      <div style="text-align:center;padding:40px;">
        <div class="spinner"></div>
        <p>Analyzing image...</p>
      </div>
    `;
  }

  const formData = new FormData();
  formData.append("image", file);

  try {

    const response = await fetch(
      "http://localhost:3000/api/image-search-ocr",
      {
        method: "POST",
        body: formData
      }
    );

    if (!response.ok) {
      throw new Error(`Server error ${response.status}`);
    }

    const data = await response.json();

    let filteredBooks = [];

    if (Array.isArray(data?.books)) {
      filteredBooks = data.books;
    } else if (Array.isArray(data)) {
      filteredBooks = data;
    }

    if (!catalogGrid) return;

    catalogGrid.innerHTML = "";

    if (filteredBooks.length === 0) {
      catalogGrid.innerHTML = `
        <div style="text-align:center;padding:40px;color:var(--text-muted)">
          No matching books found
        </div>
      `;

      await renderBooks("all");
      return;
    }

    // 🚀 Faster rendering
    const fragment = document.createDocumentFragment();

    filteredBooks.forEach(book => {
      fragment.appendChild(createBookCard(book));
    });

    catalogGrid.appendChild(fragment);

  } catch (err) {

    console.error("Image search error:", err);

    if (catalogGrid) {
      catalogGrid.innerHTML = `
        <div style="text-align:center;padding:40px;color:red">
          Image search failed. Showing all books.
        </div>
      `;
    }

    await renderBooks("all");
  }
}
// -------------------- CHATBOT UI --------------------
function openChatbot() {
  if (!chatbotBox) return;

  chatbotBox.classList.remove("hidden");
  chatbotBox.style.display = "flex";
  chatbotBox.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 50);
}

function closeAITutor() {
  document.getElementById("aiTutorModal").classList.add("hidden");
}

// -------------------- AI TUTOR --------------------
async function askAITutor(bookId, topic) {

  if (!token) {
    alert("Login required");
    return;
  }

  const modal = document.getElementById("aiTutorModal");
  const content = document.getElementById("aiTutorContent");

  // Open modal
  modal.classList.remove("hidden");
  content.innerHTML = "🤖 Generating AI lesson...";

  try {

    const res = await fetch(
      "http://localhost:3000/api/ai/tutor",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          bookId,
          topic
        })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      content.innerHTML = "⚠️ AI tutor failed.";
      return;
    }

    content.innerHTML = `
      <div class="ai-lesson">
        ${data.lesson.replace(/\n/g,"<br>")}
      </div>
    `;

  } catch (err) {

    console.error(err);
    content.innerHTML = "⚠️ AI tutor error.";

  }
}

function closeGraph() {
  document.getElementById("graphModal").classList.add("hidden");
}

async function generateKnowledgeGraph(bookId){

  if(!token){
    alert("Login required")
    return
  }

  const book=getBookById(bookId)
  if(!book) return

  const modal=document.getElementById("graphModal")
  const container=document.getElementById("knowledgeGraphCanvas")

  modal.classList.remove("hidden")
  container.innerHTML="🧠 Generating knowledge graph..."

  try{

    const res=await fetch(
      "http://localhost:3000/api/ai/knowledge-graph",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${token}`
        },
        body:JSON.stringify({topic:book.title})
      }
    )

    const data=await res.json()

    const graph=data.graph || data

    if(!graph.nodes || !graph.connections){
      container.innerHTML="⚠️ Invalid graph data"
      console.error(graph)
      return
    }

    const nodes=graph.nodes.map((n,i)=>({
      id:i,
      label:String(n)
    }))

    const edges=graph.connections.map(c=>({
      from:graph.nodes.indexOf(c[0]),
      to:graph.nodes.indexOf(c[1])
    }))

    container.innerHTML=""

    new vis.Network(
      container,
      {nodes,edges},
      {physics:true}
    )

  }catch(err){

    console.error(err)
    container.innerHTML="⚠️ Knowledge graph error."

  }
}
// -------------------- CHATBOT IMAGE UPLOAD --------------------
async function sendImageToChatbot(file) {

  openChatbot();

  addMessage("📷 I uploaded an image", "user");

  const formData = new FormData();
  formData.append("image", file);

  // typing indicator
  addMessage("Analyzing image...", "bot", true);

  try {
    const res = await fetch("http://localhost:3000/api/chatbot/image", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    // remove typing indicator
    chatMessages.lastChild?.remove();

    addMessage(data.reply || "I analyzed the image.", "bot");

    chatHistory.push({ role: "assistant", content: data.reply });

    // ✅ ADD ACTION BUTTONS (FIRST MATCHED BOOK)
    if (Array.isArray(data.books) && data.books.length > 0) {
      addChatbotActions(data.books[0]);
    }

  } catch (err) {
    chatMessages.lastChild?.remove();
    addMessage("❌ Failed to analyze image.", "bot");
  }
}

// -------------------- CHATBOT LOGIC --------------------
async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  chatInput.value = "";

  // 1️⃣ Show user message
  addMessage(message, "user");

  // 2️⃣ Save user message
  chatHistory.push({ role: "user", content: message });
  if (chatHistory.length > 10) chatHistory.shift();

  // 3️⃣ Add typing indicator (store reference)
  const typingEl = addMessage("AI is typing...", "bot", true);

  try {
    const res = await fetch("http://localhost:3000/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify({
        message,
        history: chatHistory
      })
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    // 4️⃣ Remove typing indicator safely
    typingEl?.remove();

    // 5️⃣ Safe fallback reply
    const reply =
      data.reply?.trim() ||
      "🤖 I'm having trouble responding right now. Please try again.";

    addMessage(reply, "bot");

    // 6️⃣ Save bot reply
    chatHistory.push({ role: "assistant", content: reply });
    if (chatHistory.length > 10) chatHistory.shift();

  } catch (err) {
    console.error("Chatbot fetch error:", err);

    typingEl?.remove();

    addMessage(
      "⚠️ Server not responding. Please check backend or API key.",
      "bot"
    );
  }
}

// -------------------- ADD MESSAGE TO CHAT --------------------
function addMessage(text, sender, typing = false) {
  if (!chatMessages) return null;

  const msg = document.createElement("div");
  msg.className = sender === "user" ? "user-msg" : "bot-msg";
  chatMessages.appendChild(msg);

  if (!typing) {
    msg.textContent = text;
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return msg; // ✅ return element
  }

  // Typing animation
  let i = 0;
  const interval = setInterval(() => {
    msg.textContent += text.charAt(i);
    i++;
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (i >= text.length) {
      clearInterval(interval);
      speakText(text, selectedLang);
    }
  }, 20);

  return msg; // ✅ IMPORTANT: return element even for typing
}
// -------------------- CHATBOT ACTION BUTTONS --------------------
function addChatbotActions(book) {
  if (!chatMessages || !book) return;

  const wrapper = document.createElement("div");
  wrapper.className = "chat-actions";

  const addBtn = document.createElement("button");
  addBtn.textContent = `📖 Get "${book.title}" Access`;
  addBtn.className = "chat-action-btn";

 addBtn.addEventListener("click", () => {
  if (ownedBookIds.has(Number(book.id))) {
    addMessage(`✔ You already own "${book.title}".`, "bot");
    return;
  }

  addToCart(book.id);
  addMessage(`📘 Digital access added for "${book.title}".`, "bot");
});


  const viewBtn = document.createElement("button");
  viewBtn.textContent = "👀 View Book";
  viewBtn.className = "chat-action-btn";

  viewBtn.addEventListener("click", () => {
    chatbotBox.classList.add("hidden");
    chatbotBox.style.display = "none";
    chatbotBox.setAttribute("aria-hidden", "true");

    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  });

  wrapper.appendChild(addBtn);
  wrapper.appendChild(viewBtn);

  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}



// -------------------- SPEECH RECOGNITION --------------------
const micBtn = document.getElementById("micBtn");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition && micBtn) {
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  micBtn.addEventListener("click", () => {
    recognition.start();
    micBtn.classList.add("listening");
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.trim();
    chatInput.value = transcript;
    micBtn.classList.remove("listening");

    // ✅ Auto-send after speaking
    if (transcript.length > 0) {
      sendMessage();
    }
  };


  recognition.onerror = () => {
    micBtn.classList.remove("listening");
  };

  recognition.onend = () => {
    micBtn.classList.remove("listening");
  };
} else {
  console.warn("Speech Recognition not supported in this browser");
}
// -------------------- TEXT-TO-SPEECH --------------------
function speakText(text, lang = selectedLang) {
  if (!window.speechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 1;
  utterance.pitch = 1;

  window.speechSynthesis.cancel(); // stop previous speech
  window.speechSynthesis.speak(utterance);
}
// -------------------- LANGUAGE SELECTION --------------------

let selectedLang = "en-US";
const languageSelect = document.getElementById("languageSelect");
languageSelect?.addEventListener("change", () => {
  selectedLang = languageSelect.value;
});
// -------------------- CLEAR CHAT --------------------
const clearChatBtn = document.getElementById("clearChat");

clearChatBtn?.addEventListener("click", () => {
  chatMessages.innerHTML = "";
  chatHistory = [];
  window.speechSynthesis.cancel();
});



// -------------------- QUIZ LOGIC --------------------
function showQuizQuestion() {

  if (!quizModal || !quizQuestionEl || !quizOptionsEl) return;

  if (!Array.isArray(quizQuestions) || quizQuestions.length === 0) {
    console.error("Quiz questions not loaded:", quizQuestions);
    if (quizResult) quizResult.textContent = "Failed to load quiz questions.";
    return;
  }

  const q = quizQuestions[currentQuestionIndex];

  if (!q) {
    console.error("Invalid quiz index:", currentQuestionIndex);
    return;
  }

  quizQuestionEl.textContent = q.question;
  quizOptionsEl.innerHTML = "";

  if (!Array.isArray(q.options)) {
    console.error("Invalid quiz options:", q);
    if (quizResult) quizResult.textContent = "Quiz data invalid.";
    return;
  }

  q.options.forEach((opt, i) => {

    const optionBtn = document.createElement("button");
    optionBtn.className = "quiz-option";
    optionBtn.textContent = opt;
    optionBtn.dataset.index = i;
    optionBtn.tabIndex = 0;

    optionBtn.addEventListener("click", () => selectOption(i));

    optionBtn.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectOption(i);
      }
    });

    quizOptionsEl.appendChild(optionBtn);

  });

  selectedOptionIndex = null;

  if (nextQuestionBtn) nextQuestionBtn.disabled = true;

  if (quizProgressFill) {
    quizProgressFill.style.width =
      `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
  }

  if (quizResult) quizResult.textContent = "";
}

function selectOption(index) {
  selectedOptionIndex = index;
  Array.from(quizOptionsEl.children).forEach((btn, i) => {
    btn.style.backgroundColor = i === index ? "var(--accent-red)" : "var(--bg-darker)";
    btn.style.color = "var(--text-white)";
    btn.style.borderColor = i === index ? "var(--accent-red-dark)" : "transparent";
  });
  if (nextQuestionBtn) nextQuestionBtn.disabled = false;
}

async function showQuizResult() {

  if (quizProgressFill) quizProgressFill.style.width = "100%";
  if (quizOptionsEl) quizOptionsEl.innerHTML = "";
  if (nextQuestionBtn) nextQuestionBtn.disabled = true;

  try {

    let score = 0;

    userAnswers.forEach(a => {
      if (a && a.selected === a.correct) {
        score++;
      }
    });

    let discount = 0;

    if (score === 5) discount = 60;
    else if (score === 4) discount = 40;
    else if (score === 3) discount = 20;

    // keep best discount
    discountPercent = Math.max(discountPercent, discount);

    if (quizQuestionEl)
      quizQuestionEl.textContent =
        `You scored ${score} out of ${quizQuestions.length}!`;

    if (quizResult) {

      quizResult.innerHTML = `
        <div class="quiz-result-box">
          <h3>🎯 Quiz Complete</h3>
          <p>You scored <strong>${score}/${quizQuestions.length}</strong></p>
          ${
            discount > 0
              ? `<p class="discount-msg">🎉 ${discount}% discount unlocked!</p>`
              : `<p class="retry-msg">Good try! Try again for discounts.</p>`
          }
        </div>
      `;
    }

    saveDiscount();
    renderBooks();
    updateCartSummary();
    updatePayButton();

  } catch (err) {

    console.error("Quiz error:", err);

    if (quizResult)
      quizResult.textContent = "Failed to calculate quiz.";

  }

  setTimeout(() => {

    if (!quizModal) return;

    quizModal.style.display = "none";
    quizModal.setAttribute("aria-hidden", "true");

    currentQuestionIndex = 0;

    if (quizResult) quizResult.textContent = "";
    if (quizProgressFill) quizProgressFill.style.width = "0%";

  }, 5000);
}


async function openQuizModal() {

  if (!quizModal) return;

  // 🔐 login check
  if (!token) {
    openLoginModal();
    return;
  }

  quizModal.style.display = "flex";
  quizModal.setAttribute("aria-hidden", "false");

  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  userAnswers = [];

  if (nextQuestionBtn) nextQuestionBtn.disabled = true;
  if (quizResult) quizResult.textContent = "Loading quiz...";

  try {

    await loadQuiz();

    if (!quizQuestions || quizQuestions.length === 0) {
      if (quizResult) {
        quizResult.textContent = "Quiz could not be loaded.";
      }
      return;
    }

    showQuizQuestion();

    const firstOption = quizOptionsEl?.querySelector("button");
    if (firstOption) firstOption.focus();

    if (quizResult) quizResult.textContent = "";

  } catch (err) {

    console.error("Quiz load failed:", err);

    if (quizResult) {
      quizResult.textContent = "Failed to load quiz.";
    }

  }
}
async function loadQuiz() {

  try {


    if (quizResult) {
      quizResult.innerHTML = `
        <div class="quiz-loader">
          <div class="quiz-spinner"></div>
        </div>
      `;
    }

    // 🔐 Ensure user is logged in
    if (!token) {
      alert("Please login to take the quiz");
      openLoginModal();
      return;
    }

    const res = await fetch("http://localhost:3000/api/quiz-ai", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();

    // ❌ API error
    if (!res.ok) {
      console.error("Quiz API error:", data);
      quizQuestions = [];
      if (quizResult) {
        quizResult.textContent = data.error || "Failed to load quiz.";
      }
      return;
    }

    // ✅ Safe parsing
    quizQuestions = [];

    if (Array.isArray(data.questions)) {
      quizQuestions = data.questions;
    } else if (Array.isArray(data)) {
      quizQuestions = data;
    }

    console.log("Quiz loaded:", quizQuestions);

    if (quizQuestions.length === 0) {
      if (quizResult) {
        quizResult.textContent = "No quiz questions available.";
      }
      return;
    }

  } catch (err) {

    console.error("Quiz fetch failed:", err);

    quizQuestions = [];

    if (quizResult) {
      quizResult.textContent = "Server error loading quiz.";
    }

  }
}
// -------------------- PAYMENT & RAZORPAY INTEGRATION --------------------
if (!window.__razorpayPayBound) {
  window.__razorpayPayBound = true;

  payBtn?.addEventListener("click", async () => {
    if (!token) {
      alert("Login required");
      return;
    }

    if (isProcessingPayment) return;
    isProcessingPayment = true;

    try {
     const res = await fetch("http://localhost:3000/api/cart", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({
    items: cart.map(i => ({ bookId: i.id })),
    discountPercent
  })
});

const data = await res.json();
if (!res.ok) {
  throw new Error(data.error || "Order creation failed");
}

// 🎁 Free checkout (₹0)
if (data.displayAmount === 0) {
  alert("🎉 Free access activated!");
  clearCart({ skipBackend: true });
  loadOrderHistory();
  return;
}

const rzp = new Razorpay({
  key: "rzp_test_SE9kcrW8ZZEJNl",

  order_id: data.orderId,

  amount: data.razorpayAmount,   // 👈 THIS IS THE FIX (in paise)

  currency: "INR",

  name: "ReadIQ Digital Library",
  description: "Lifetime digital access",

  handler: function () {
    alert("✅ Payment successful!");
    clearCart({ skipBackend: true });
    loadOrderHistory();
  }
});

rzp.open();


    } catch (err) {
  console.error(err);
  alert("Payment failed: " + err.message);
} finally {
  isProcessingPayment = false;
}

  });
}
generateSummaryBtn?.addEventListener("click", async () => {

  if (!token) {
    alert("Login required");
    return;
  }

  if (!currentBookForAI) {
    alert("No book selected");
    return;
  }

  const answerBox = document.getElementById("bookAnswer");

  answerBox.innerHTML = "✨ Generating AI summary...";

  try {

    const book = getBookById(currentBookForAI);

    const res = await fetch(
      "http://localhost:3000/api/ai/book-summary",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title: book.title,
          author: book.author
        })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      answerBox.textContent = data.error || "Failed to generate summary.";
      return;
    }

    answerBox.innerHTML = `
      <h4>📚 AI Book Summary</h4>
      <p>${data.summary.replace(/\n/g,"<br>")}</p>
    `;

  } catch (err) {

    console.error(err);
    answerBox.textContent = "⚠️ AI summary error.";

  }

});



// -------------------- AUTH / LOGIN UI --------------------
function openLoginModal() {
  if (!loginModal) return;

  loginModal.classList.remove("hidden");
  loginModal.style.display = "flex";

  // ✅ DO NOT RESET IF OTP OR SET PASSWORD IS ACTIVE
  const setPasswordBox = document.getElementById("setPasswordBox");

  if (
    (otpBox && !otpBox.classList.contains("hidden")) ||
    (setPasswordBox && !setPasswordBox.classList.contains("hidden"))
  ) {
    return;
  }

  // Normal open → show login
  loginForm?.classList.remove("hidden");
  registerForm?.classList.add("hidden");

  loginForm?.reset();
  loginMsg.textContent = "";
  registerMsg.textContent = "";
}



// Close login modal

function closeLoginModal() {
  if (!loginModal) return;

  loginModal.classList.add("hidden");
  loginModal.style.display = "none";

  // Hide all auth sub-steps
  otpBox?.classList.add("hidden");
  document.getElementById("setPasswordBox")?.classList.add("hidden");
  registerForm?.classList.add("hidden");
  loginForm?.classList.remove("hidden");

  // Clear inputs & messages
  otpInput.value = "";
  registerMsg.textContent = "";
  otpMsg.textContent = "";

  // ✅ CRITICAL CLEANUP
  sessionStorage.removeItem("pendingEmail"); // clear OTP session
  stopOtpTimer();                             // stop countdown
}


googleLoginBtn?.addEventListener("click", () => {
  // Disable button & show loading
  googleLoginBtn.disabled = true;
  googleLoginBtn.classList.add("loading");

  const originalHTML = googleLoginBtn.innerHTML;
  googleLoginBtn.innerHTML = `
    <span class="spinner"></span>
    <span style="margin-left:8px;">Connecting to Google…</span>
  `;

  // Small delay = real OAuth feel
  setTimeout(() => {
    window.location.href = "http://localhost:3000/auth/google";
  }, 600);
});

// -------------------- LOGOUT FUNCTIONALITY --------------------
function logout() {
  // 1️⃣ Clear auth storage
  localStorage.removeItem("smartlearn-token");
  localStorage.removeItem("smartlearn-user");

  // 2️⃣ Reset state
  token = null;
  user = null;

  // 3️⃣ Update UI in one place
  updateAccountUI();
  accountMenu?.classList.add("hidden");

  // 4️⃣ Hide order history safely
  if (orderHistorySection) {
    orderHistorySection.style.display = "none";
  }
}

// -------------------- EVENT BINDINGS --------------------
function bindEvents() {
  if (window.__eventsBound) return;
window.__eventsBound = true;
  // -------------------- CHATBOT TOGGLE --------------------
  chatbotBtn?.addEventListener("click", () => {
  openChatbot(); // ✅ correct, reusable, safe
});

  closeChatbot?.addEventListener("click", () => {
    chatbotBox.classList.add("hidden");
    chatbotBox.style.display = "none";
    chatbotBox.setAttribute("aria-hidden", "true");
  });


  sendChat?.addEventListener("click", sendMessage);

  chatInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  // -------------------- ACCOUNT DROPDOWN --------------------
  accountTrigger?.addEventListener("click", (e) => {
    e.stopPropagation(); // 🔥 VERY IMPORTANT
    accountMenu.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!accountBox?.contains(e.target)) {
      accountMenu?.classList.add("hidden");
    }

  });
  // -------------------- OTP VERIFICATION --------------------
verifyOtpBtn?.addEventListener("click", async () => {
  otpMsg.textContent = "Verifying OTP...";
  otpMsg.style.color = "var(--text-muted)";
  verifyOtpBtn.disabled = true;

  const email = sessionStorage.getItem("pendingEmail");
  if (!email) {
    otpMsg.textContent = "Session expired. Please register again.";
    verifyOtpBtn.disabled = false;
    return;
  }

  const otp = otpInput.value.trim();
  if (!/^\d{6}$/.test(otp)) {
    otpMsg.textContent = "Enter a valid 6-digit OTP";
    otpMsg.style.color = "#ff453a";
    verifyOtpBtn.disabled = false;
    return;
  }

  try {
    const resp = await fetch("http://localhost:3000/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp })
    });

    const data = await resp.json();

  if (!resp.ok) {
  otpMsg.textContent = data.error || "Invalid OTP";
  otpMsg.style.color = "#ff453a";
  verifyOtpBtn.disabled = false;

  // 🔁 Restart timer only if OTP still valid
  if (otpTimeLeft <= 0) {
    startOtpTimer();
  }

  return;
}
    // OTP verified successfully  

otpMsg.textContent = "OTP verified. Please set your password.";
otpMsg.style.color = "var(--accent-red)";
otpInput.value = "";

stopOtpTimer(); // ✅ ADD THIS

otpBox?.classList.add("hidden");
document.getElementById("setPasswordBox")?.classList.remove("hidden");


  } catch {
    otpMsg.textContent = "OTP verification failed";
    otpMsg.style.color = "#ff453a";
    verifyOtpBtn.disabled = false;
        stopOtpTimer();

  }
});

// -------------------- SET PASSWORD FUNCTIONALITY --------------------
document.getElementById("setPasswordBtn")?.addEventListener("click", async () => {
  const password = document.getElementById("newPassword").value.trim();
  const msg = document.getElementById("setPasswordMsg");

  const email =
    sessionStorage.getItem("pendingEmail");

  if (!email) {
    msg.textContent = "Session expired. Please register again.";
    return;
  }

  msg.textContent = "";

  if (password.length < 6) {
    msg.textContent = "Password must be at least 6 characters";
    msg.style.color = "#ff453a";
    return;
  }

  try {
    const resp = await fetch("http://localhost:3000/api/set-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await resp.json();

    if (!resp.ok) {
      msg.textContent = data.error || "Failed to set password";
      return;
    }


    setAuth(data.token, data.user);
    sessionStorage.removeItem("pendingEmail");
    closeLoginModal();

  } catch {
    msg.textContent = "Network error";

  }
});
  // -------------------- ACCOUNT MENU OPTIONS --------------------

  menuOrders?.addEventListener("click", () => {
    // Close account menu
    accountMenu.classList.add("hidden");

    // 🔔 CLEAR PROFILE BADGE (Play Store style)
    if (profileBadge) {
      profileBadge.classList.add("hidden");
      profileBadge.textContent = "0";
    }

    // Show & scroll to order history
    const orderSection = document.getElementById("orderHistory");
    if (orderSection) {
      orderSection.style.display = "block";
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  });


  menuCart?.addEventListener("click", () => {
    accountMenu.classList.add("hidden");
    const cartSection = document.getElementById("cart");
    cartSection?.scrollIntoView({ behavior: "smooth" });
  });

  menuAI?.addEventListener("click", () => {
    accountMenu.classList.add("hidden");
    openChatbot();
    addMessage("🤖 I’m ready to recommend books for you!", "bot");
  });

  menuProfile?.addEventListener("click", (e) => {
    e.stopPropagation();
    accountMenu.classList.add("hidden");

    if (!user) {
      alert("User not loaded");
      return;
    }

    // 🔵 GOOGLE USERS → REAL GOOGLE ACCOUNT
    if (user.provider === "google") {
      window.open("https://myaccount.google.com", "_blank");
      return;
    }

    // 🔹 NON-GOOGLE USERS → LOCAL PROFILE MODAL
    profileModal.classList.remove("hidden");

    // Name
    profileNameInput.value = user.name || "";

    // Photo
    profilePicInput.value = user.profilePic || "";

    // Avatar preview
    const avatarEl = document.getElementById("profileAvatarPreview");
    if (avatarEl) {
      avatarEl.src =
        user.profilePic ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`;
    }

    // Email
    const emailEl = document.getElementById("profileEmail");
    if (emailEl) {
      emailEl.textContent = user.email || "";
    }


    

    // Unlock fields for non-Google users
    profileNameInput.removeAttribute("readonly");
    profilePicInput.removeAttribute("readonly");
    profileNameInput.classList.remove("readonly");
    profilePicInput.classList.remove("readonly");
  });

 switchGoogleAccountBtn?.addEventListener("click", () => {
  // 🔒 Close menu
  accountMenu?.classList.add("hidden");

  // 🧹 Clear ALL local auth data
  localStorage.removeItem("smartlearn-token");
  localStorage.removeItem("smartlearn-user");
  sessionStorage.removeItem("pendingEmail");

  token = null;
  user = null;

  updateAccountUI();

  // 🔥 HARD redirect → Google account chooser
  window.location.href = "http://localhost:3000/auth/google";
});



  saveProfileBtn?.addEventListener("click", () => {
    if (user?.provider === "google") {
      alert("Google profile details cannot be edited here.");
      profileModal.classList.add("hidden");
      return;
    }

    user.name = profileNameInput.value.trim();
    user.profilePic = profilePicInput.value.trim();

    localStorage.setItem("smartlearn-user", JSON.stringify(user));
    updateAccountUI();
    profileModal.classList.add("hidden");
  });
  // -------------------- RESEND OTP FUNCTIONALITY --------------------
  resendOtpBtn?.addEventListener("click", async () => {
  const email = sessionStorage.getItem("pendingEmail");

  // 🚫 SAFETY CHECK
  if (!email) {
    otpMsg.textContent = "Session expired. Please register again.";
    otpMsg.style.color = "#ff453a";
    return;
  }

  // 🔒 Prevent spam clicks
  resendOtpBtn.disabled = true;
  otpMsg.textContent = "Resending code…";
  otpMsg.style.color = "var(--text-muted)";

  try {
    const resp = await fetch("http://localhost:3000/api/resend-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await resp.json();

    if (!resp.ok) {
  otpMsg.textContent = data.error || "Failed to resend OTP";
  otpMsg.style.color = "#ff453a";
  resendOtpBtn.disabled = false;
  stopOtpTimer(); // ✅ ADD
  return;
}


    // ✅ SUCCESS
    otpMsg.textContent = "New OTP sent to your email";
    otpMsg.style.color = "var(--accent-red)";
    startOtpTimer(); // timer will re-enable button

 } catch (err) {
  otpMsg.textContent = "Network error. Please try again.";
  otpMsg.style.color = "#ff453a";
  resendOtpBtn.disabled = false;
  stopOtpTimer(); // ✅ ADD
}

});


  closeProfileBtn?.addEventListener("click", () => {
    profileModal.classList.add("hidden");
  });

menuSettings?.addEventListener("click", () => {
  accountMenu.classList.add("hidden");

  const securitySection = document.getElementById("securitySection");
  const orderSection = document.getElementById("orderHistory");

  // Hide other sections
  if (orderSection) orderSection.style.display = "none";

  // Fill security data
  document.getElementById("securityEmail").textContent = user?.email || "—";
  document.getElementById("securityProvider").textContent =
    user?.provider === "google" ? "Google" : "Email & Password";

  // Show security section
  securitySection.style.display = "block";
  securitySection.scrollIntoView({ behavior: "smooth" });
});
 
document.getElementById("changePasswordBtn")?.addEventListener("click", () => {
  if (user?.provider === "google") {
    alert("Password is managed by Google.");
    return;
  }

  alert("Redirect to Forgot Password / Change Password flow");
});


  // Filters
  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      renderBooks(btn.dataset.category);
    });
  });

  // Catalog actions (Buy / Read)
  catalogGrid?.addEventListener("click", e => {
  const btn = e.target.closest("button.access-btn");
  if (!btn) return;

  const bookId = Number(btn.dataset.id);
  if (!bookId) return;

  // 📖 Owned → Read
  if (ownedBookIds.has(bookId)) {
    openBook(bookId);
    return;
  }

  // 🛒 Not owned → Buy
  addToCart(bookId);
});


  // Cart operations
  cartItemsContainer?.addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const bookId = parseInt(btn.dataset.id);
  if (!bookId) return;

  if (btn.classList.contains("remove-item")) {
    removeFromCart(bookId);
  }
});


  clearCartBtn?.addEventListener("click", () => { if (confirm("Are you sure you want to clear the cart?")) clearCart(); });

  // Search
  searchBtn?.addEventListener("click", () => performSearch(searchInput.value));
 const suggestionsBox = document.getElementById("searchSuggestions");

searchInput?.addEventListener("input", async () => {
  const q = searchInput.value.trim();

  if (q.length < 2) {
    suggestionsBox.innerHTML = "";
    return;
  }

  try {
    const res = await fetch(
      `http://localhost:3000/api/search/autocomplete?q=${encodeURIComponent(q)}`
    );

    const suggestions = await res.json();

    suggestionsBox.innerHTML = "";

    suggestions.forEach(book => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.textContent = book.title;

      item.addEventListener("click", () => {
        searchInput.value = book.title;
        suggestionsBox.innerHTML = "";
        performSearch(book.title);
      });

      suggestionsBox.appendChild(item);
    });

  } catch (err) {
    console.warn("Autocomplete failed");
  }
});

  // Image search
  imageSearchInput?.addEventListener("change", e => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1️⃣ Update catalog (existing behavior)
    performImageSearch(file);

    // 2️⃣ Send image to chatbot (NEW)
    sendImageToChatbot(file);

    e.target.value = "";
  });


  // Login form
  loginForm?.addEventListener("submit", async e => {
    e.preventDefault();
    const submitBtn = loginForm.querySelector("button[type='submit']");
    startLoading(submitBtn);   // 🔄 START SPINNER

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();
    if (!email || !password) {
      loginMsg.textContent = "Please fill in all fields.";
      loginMsg.style.color = "#ff453a";
      stopLoading(submitBtn);  // 🛑 STOP SPINNER
      return;
    }
    try {
      const resp = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await resp.json();
      if (resp.ok) { setAuth(data.token, data.user); closeLoginModal(); }
      else { loginMsg.textContent = data.error || 'Login failed.'; loginMsg.style.color = "#ff453a"; }
    } catch (err) {
      loginMsg.textContent = 'Network error. Try again.';
      loginMsg.style.color = "#ff453a";
    } finally {
      stopLoading(submitBtn);  // 🛑 STOP SPINNER
    }
  });

  // -------------------- LOGOUT ALL SESSIONS --------------------

document.getElementById("logoutAllBtn")?.addEventListener("click", () => {
  if (!confirm("Logout from all devices?")) return;

  logout(); // ✅ reuse existing logout()

  const securitySection = document.getElementById("securitySection");
  if (securitySection) securitySection.style.display = "none";

  alert("Logged out from all sessions");
});



  // Register form
registerForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = registerForm.querySelector("button[type='submit']");
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();

  registerMsg.textContent = "";
  startLoading(submitBtn);

  if (!name || !email) {
    registerMsg.textContent = "Name and email are required";
    registerMsg.style.color = "#ff453a";
    stopLoading(submitBtn);
    return;
  }

  try {
    const resp = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });

    const data = await resp.json();

    if (!resp.ok) {
      registerMsg.textContent = data.error || "Registration failed";
      registerMsg.style.color = "#ff453a";
      stopLoading(submitBtn);
      return;
    }

    // ✅ TRUST BACKEND FLOW
    sessionStorage.setItem("pendingEmail", email);

    // 🔥 HARD UI RESET (CRITICAL)
    loginForm?.classList.add("hidden");
    registerForm?.classList.add("hidden");
    otpBox?.classList.remove("hidden");

    otpMsg.textContent = data.message || "OTP sent to your email";
    otpMsg.style.color = "var(--accent-red)";

    startOtpTimer();

  } catch (err) {
    console.error(err);
    registerMsg.textContent = "Network error";
    registerMsg.style.color = "#ff453a";
  } finally {
    stopLoading(submitBtn);
  }
});






  // -------- LOGIN ↔ REGISTER TOGGLE (FINAL) --------
  if (switchToRegisterBtn && switchToLoginBtn && loginForm && registerForm) {

    switchToRegisterBtn.addEventListener("click", () => {
      loginForm.classList.add("hidden");
      registerForm.classList.remove("hidden");

      // UX polish
      document.getElementById("regName")?.focus();
    });

    switchToLoginBtn.addEventListener("click", () => {
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");

      // UX polish
      document.getElementById("email")?.focus();
    });

  }
  // 👁 Show / Hide password
  document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
      const input = document.getElementById(icon.dataset.target);
      input.type = input.type === "password" ? "text" : "password";
    });
  });

  


  // 👁‍🗨 Auto-hide password after blur
  function autoHidePassword(inputId) {
    const input = document.getElementById(inputId);
    const toggle = document.querySelector(`[data-target="${inputId}"]`);

    if (!input) return;

    input.addEventListener("blur", () => {
      input.type = "password";
      if (toggle) toggle.textContent = "👁";
    });
  }

  autoHidePassword("password");


  // ⇪ Caps Lock warning
  function capsLockWarning(inputId) {
    const input = document.getElementById(inputId);
    const warning = input?.parentElement?.querySelector(".caps-warning");

    if (!input || !warning) return;

    input.addEventListener("keyup", e => {
      if (e.getModifierState && e.getModifierState("CapsLock")) {
        warning.classList.remove("hidden");
      } else {
        warning.classList.add("hidden");
      }
    });
  }

  capsLockWarning("password");     // login

  // Logout
  btnLogout?.addEventListener('click', logout);

  // Buttons to open login modal
  btnLogin?.addEventListener('click', openLoginModal);
  loginCloseBtn?.addEventListener('click', closeLoginModal);

  // Quiz events
  btnQuiz?.addEventListener("click", openQuizModal);
  btnQuiz2?.addEventListener("click", openQuizModal);
  quizCloseBtn?.addEventListener("click", () => { if (quizModal) { quizModal.style.display = "none"; quizModal.setAttribute("aria-hidden", "true"); } });
  nextQuestionBtn?.addEventListener("click", () => {

  if (selectedOptionIndex === null) return;

  const question = quizQuestions[currentQuestionIndex];
// ✅ Store user answer for backend submission
 userAnswers.push({
  questionIndex: currentQuestionIndex,
  selected: selectedOptionIndex,
  correct: question.answer
});

  // Optional local score tracking
  if (selectedOptionIndex === question.answer) {
    correctAnswersCount++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuizQuestion();
  } else {
    showQuizResult();
  }

  if (quizProgressFill) {
    quizProgressFill.style.width =
      `${(currentQuestionIndex / quizQuestions.length) * 100}%`;
  }

});

  // Global keyboard
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (loginModal?.style.display === "flex") closeLoginModal();
      if (quizModal?.style.display === "flex") { quizModal.style.display = "none"; quizModal.setAttribute("aria-hidden", "true"); }
    }
  });

  // Hero interactions
  heroImageElement?.parentElement?.addEventListener("click", heroClickHandler);
  heroImageElement?.parentElement?.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); heroClickHandler(); } });
  heroPrevBtn?.addEventListener("click", e => { e.stopPropagation(); showPrevImage(); resetAutoChangeTimer(); });
  heroNextBtn?.addEventListener("click", e => { e.stopPropagation(); showNextImage(); resetAutoChangeTimer(); });
}

// -------------------- HERO CAROUSEL --------------------
function updateHeroImage(index) {
  if (!heroImageElement) return;
  currentHeroIndex = (index + heroImages.length) % heroImages.length;
  heroImageElement.style.animation = "none";
  void heroImageElement.offsetHeight;
  heroImageElement.style.animation = "fadeIn 0.5s ease-in-out";
  heroImageElement.src = heroImages[currentHeroIndex].src;
  heroImageElement.alt = `Hero image ${currentHeroIndex + 1}`;
}
function showNextImage() { updateHeroImage(currentHeroIndex + 1); }
function showPrevImage() { updateHeroImage(currentHeroIndex - 1); }
function resetAutoChangeTimer() {
  if (autoChangeInterval) clearInterval(autoChangeInterval);
  autoChangeInterval = setInterval(showNextImage, 5000);
}
function heroClickHandler() {
  showNextImage();
  resetAutoChangeTimer();
  const catalogSection = document.getElementById("catalog");
  if (catalogSection) catalogSection.scrollIntoView({ behavior: "smooth" });
  const category = heroImages[currentHeroIndex].category || "all";
  filters.forEach(btn => {
    const isActive = btn.dataset.category === category || (category === "all" && btn.dataset.category === "all");
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  renderBooks(category);
}

// -------------------- AUTH BOOTSTRAP (STEP 3) --------------------
async function bootstrapUser() {
  const storedToken = localStorage.getItem("smartlearn-token");
  if (!storedToken) return;

  token = storedToken;

  try {
    const res = await fetch("http://localhost:3000/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) {
      console.warn("Profile fetch failed");
      return;
    }
const { user: backendUser } = await res.json();

// ✅ MERGE — DO NOT OVERWRITE GOOGLE DATA
const storedUser =
  JSON.parse(localStorage.getItem("smartlearn-user")) || {};

user = {
  ...storedUser,            // keep Google profilePic if present
  ...backendUser,           // update backend fields
  profilePic:
    backendUser.profilePic ||
    storedUser.profilePic || // fallback to Google photo
    ""
};

// Persist user
localStorage.setItem("smartlearn-user", JSON.stringify(user));


   updateAccountUI();
await loadOrderHistory();


  } catch (err) {
    console.error("bootstrapUser error:", err);
  }
}



// -------------------- INIT --------------------
function ensureHeroVideoFallback() {
  try {
    const v = document.getElementById('heroVideo');
    if (!v) return;
    v.addEventListener('error', () => { v.style.display = 'none'; });
    function tryPlay() { v.play().catch(() => { }); document.removeEventListener('click', tryPlay, { once: true }); }
    document.addEventListener('click', tryPlay, { once: true });
  } catch (e) { console.warn('ensureHeroVideoFallback error:', e); }
}

async function init() {
  bindEvents();

  // 1️⃣ Restore token from Google redirect (FIRST)
  if (tokenFromUrl) {
    localStorage.setItem("smartlearn-token", tokenFromUrl);
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // 2️⃣ Load user first (so ownership is ready)
  await bootstrapUser();
  
  // 3️⃣ Load AI dashboard early (non-blocking)
  await loadAIDashboard();  

// 4️⃣ Then render books (ownership badges will work)
  await renderBooks("all");

// 5️⃣ Load AI recommendations (can be async, but should be after user is set)
  await loadAIRecommendations();

  //  Now safely restore cart UI
  renderCart();

  updateCartSummary();
  updateCartCount();
  updatePayButton();

  //  UI extras
  ensureHeroVideoFallback();
  resetAutoChangeTimer();
}

// ================= ASK THE BOOK =================
function openAskBook(bookId) {

  currentBookForAI = bookId;

  document.getElementById("askBookModal").classList.remove("hidden");

  // clear input
  document.getElementById("bookQuestion").value = "";

  // clear answer area
  document.getElementById("bookAnswer").innerHTML = "";

}
// Close modal when clicking outside content
document.getElementById("askBookBtn")?.addEventListener("click", async () => {

  const questionInput = document.getElementById("bookQuestion");
  const answerBox = document.getElementById("bookAnswer");

  const question = questionInput.value.trim();

  if (!question) return;

  // replace previous content
  answerBox.innerHTML = "🤖 Thinking...";

  try {

    const res = await fetch(
      `http://localhost:3000/api/books/${currentBookForAI}/ask`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ question })
      }
    );

    const data = await res.json();

    answerBox.innerHTML = `
      <h4>📖 Answer</h4>
      <p>${(data.reply || data.error).replace(/\n/g,"<br>")}</p>
    `;

  } catch (err) {

    answerBox.textContent = "⚠️ Failed to fetch answer.";

  }

});


document.addEventListener("DOMContentLoaded", init);
