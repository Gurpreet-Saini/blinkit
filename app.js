/* ==========================================================================
   blinkit (Hila Dala Edition) JavaScript
   ========================================================================== */

// 1. Meme Products Database
const MEME_PRODUCTS = [
    {
        id: "p13",
        name: "WFH Silk Pajama Set (Zero Commute Edition)",
        weight: "1 pair",
        price: 0,
        originalPrice: 1999,
        badge: "WFH FLEX",
        category: "WFH vs WFO",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p14",
        name: "WFO Morning Traffic Simulator (3-Hour Jam)",
        weight: "1 experience",
        price: 999,
        originalPrice: 0,
        badge: "WFO PAIN",
        category: "WFH vs WFO",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p15",
        name: "Mid-Day WFH Power Nap (Bed Approved)",
        weight: "45 mins",
        price: 0,
        originalPrice: 500,
        badge: "WFH WIN",
        category: "WFH vs WFO",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p16",
        name: "Office AC Survival Jacket (Set to 16°C Freeze)",
        weight: "1 unit",
        price: 799,
        originalPrice: 1200,
        badge: "WFO FREEZE",
        category: "WFH vs WFO",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p17",
        name: "Camera-Off Zoom Munchies Box",
        weight: "300g",
        price: 49,
        originalPrice: 100,
        badge: "SECRET EATS",
        category: "WFH vs WFO",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p18",
        name: "WFO Canteen Special Cold Chai",
        weight: "100ml",
        price: 150,
        originalPrice: 20,
        badge: "WFO SADNESS",
        category: "WFH vs WFO",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p1",
        name: "Hila Dala Masala (Pure WFH Surprise)",
        weight: "100g",
        price: 45,
        originalPrice: 90,
        badge: "50% OFF",
        category: "Masala & Munchies",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p2",
        name: "Sivaji Boss Sunglasses (WFH Flex Edition)",
        weight: "1 unit",
        price: 499,
        originalPrice: 999,
        badge: "CLASSIC",
        category: "Style & Sunglasses",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p3",
        name: "Choco-Shock Shake (Home Kitchen Made)",
        weight: "200ml",
        price: 60,
        originalPrice: 75,
        badge: "TRENDING",
        category: "Chilled Thrills",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p4",
        name: "Name-Only Shake (Naam Hi Kaafi Hai)",
        weight: "250ml",
        price: 80,
        originalPrice: 120,
        badge: "MUST TRY",
        category: "Chilled Thrills",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p5",
        name: "Shocking Soda (Double Fizz)",
        weight: "300ml",
        price: 35,
        originalPrice: 40,
        badge: "FIZZY",
        category: "Chilled Thrills",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p6",
        name: "Rajni Style Hair Styling Gel",
        weight: "150g",
        price: 150,
        originalPrice: 200,
        badge: "BOSS HAIR",
        category: "Rajni Specials",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p7",
        name: "Instant Epiphany (Kyu Hila Dala Dose)",
        weight: "1 dose",
        price: 0,
        originalPrice: 99,
        badge: "FREE",
        category: "Rajni Specials",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p8",
        name: "Earthquake Energy Bar (Meme Bite)",
        weight: "45g",
        price: 50,
        originalPrice: 50,
        badge: "HOT SELLER",
        category: "Masala & Munchies",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p9",
        name: "Mind-Blown Milk (Organic WFH)",
        weight: "1L",
        price: 66,
        originalPrice: 70,
        badge: "DAILY",
        category: "Masala & Munchies",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    },
    {
        id: "p11",
        name: "Sivaji Golden Coins (Pure Gold Lookalike)",
        weight: "10 units",
        price: 250,
        originalPrice: 500,
        badge: "BOSS VALUE",
        category: "Rajni Specials",
        image: "https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif"
    }
];

// Categories list
const CATEGORIES = [
    "All Shocks",
    "WFH vs WFO",
    "Rajni Specials",
    "Style & Sunglasses",
    "Masala & Munchies",
    "Chilled Thrills"
];

// 2. Application State
let cart = {}; // Format: { productId: quantity }
let selectedCategory = "All Shocks";
let searchQuery = "";
let currentSort = "default";

// 3. DOM Elements
const productsContainer = document.getElementById("products-container");
const categoriesContainer = document.getElementById("categories-container");
const cartBadgeCount = document.getElementById("cart-badge-count");
const cartHeaderTrigger = document.getElementById("cart-header-trigger");
const cartHeaderText = document.getElementById("cart-header-text");
const cartDrawer = document.getElementById("cart-drawer");
const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
const closeDrawerBtn = document.getElementById("close-drawer");
const drawerItemsContainer = document.getElementById("drawer-items-container");
const billSubtotal = document.getElementById("bill-subtotal");
const billGrandTotal = document.getElementById("bill-grand-total");
const placeOrderTrigger = document.getElementById("place-order-trigger");
const checkoutModal = document.getElementById("checkout-modal");
const closeCelebrationBtn = document.getElementById("close-celebration-btn");
const searchInput = document.getElementById("search-input");
const searchSuggestions = document.getElementById("search-suggestions");
const sortSelect = document.getElementById("sort-select");
const productsGridTitle = document.getElementById("products-grid-title");
const floatingCartBar = document.getElementById("floating-cart-bar");
const floatingQtyText = document.getElementById("floating-qty-text");
const floatingTotalText = document.getElementById("floating-total-text");
const floatingCartTrigger = document.getElementById("floating-cart-trigger");
const bannerActionBtn = document.getElementById("banner-action");
const locationTrigger = document.getElementById("delivery-location-trigger");
const playAudioBtn = document.getElementById("play-audio-btn");

// 4. Initialize App
window.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderProducts();
    setupEventListeners();
    setupSearchSuggestions();
    
    // Automatically trigger audio on site load
    setTimeout(() => {
        tryAutoPlayAudio();
    }, 400);
});

// Setup Events
function setupEventListeners() {
    // Cart Drawer Toggle
    cartHeaderTrigger.addEventListener("click", openCartDrawer);
    floatingCartTrigger.addEventListener("click", openCartDrawer);
    closeDrawerBtn.addEventListener("click", closeCartDrawer);
    cartDrawerOverlay.addEventListener("click", closeCartDrawer);

    // Audio button trigger
    if (playAudioBtn) {
        playAudioBtn.addEventListener("click", () => {
            playMemeSound();
            shakeElement(playAudioBtn);
        });
    }

    // Place Order Flow
    placeOrderTrigger.addEventListener("click", triggerCheckoutFlow);
    closeCelebrationBtn.addEventListener("click", closeCelebrationFlow);

    // Search Input
    searchInput.addEventListener("input", handleSearch);
    searchInput.addEventListener("focus", showSuggestions);
    
    // Hide suggestions dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.style.display = "none";
        }
    });

    // Sorting Dropdown
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Banner Promo click
    bannerActionBtn.addEventListener("click", () => {
        playMemeSound();
        // Automatically scroll to products list and add a few surprise items
        document.querySelector(".products-section").scrollIntoView({ behavior: 'smooth' });
        shakeElement(productsContainer);
    });

    // Location Change - funny warning
    locationTrigger.addEventListener("click", () => {
        alert("Location is locked to Bed & Couch, WFH Kingdom. Commute: 0 seconds! Changing location to Office Traffic is forbidden by Rajinikanth!");
        triggerVibrationFeedback();
    });
}

// 5. Render Categories
function renderCategories() {
    categoriesContainer.innerHTML = CATEGORIES.map((cat, index) => {
        const isActive = cat === selectedCategory ? "active-cat" : "";
        let iconHtml = "";
        
        // Custom silhouettes/symbols for categorizing memes
        if (cat === "All Shocks") iconHtml = `<i class="fa-solid fa-bolt" style="font-size: 24px; color: #f7ec13;"></i>`;
        else if (cat === "WFH vs WFO") iconHtml = `<i class="fa-solid fa-house-laptop" style="font-size: 24px; color: #9c27b0;"></i>`;
        else if (cat === "Rajni Specials") iconHtml = `<i class="fa-solid fa-crown" style="font-size: 24px; color: #ff9800;"></i>`;
        else if (cat === "Style & Sunglasses") iconHtml = `<i class="fa-solid fa-glasses" style="font-size: 24px; color: #1f1f1f;"></i>`;
        else if (cat === "Masala & Munchies") iconHtml = `<i class="fa-solid fa-pepper-hot" style="font-size: 24px; color: #e53935;"></i>`;
        else if (cat === "Chilled Thrills") iconHtml = `<i class="fa-solid fa-ice-cream" style="font-size: 24px; color: #03a9f4;"></i>`;

        return `
            <div class="category-card ${isActive}" data-category="${cat}">
                <div class="category-icon-box">
                    ${iconHtml}
                </div>
                <span class="category-name">${cat}</span>
            </div>
        `;
    }).join("");

    // Add category click listeners
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", (e) => {
            const cardEl = e.currentTarget;
            selectedCategory = cardEl.getAttribute("data-category");
            
            // Toggle active styling
            document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active-cat"));
            cardEl.classList.add("active-cat");

            productsGridTitle.textContent = selectedCategory === "All Shocks" ? "Hila Dala Specials" : selectedCategory;
            renderProducts();
        });
    });
}

// 6. Render Products Grid
function renderProducts() {
    let filteredList = MEME_PRODUCTS;

    // Filter by Category
    if (selectedCategory !== "All Shocks") {
        filteredList = filteredList.filter(p => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        filteredList = filteredList.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    }

    // Sort Products
    if (currentSort === "price-low") {
        filteredList.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
        filteredList.sort((a, b) => b.price - a.price);
    }

    if (filteredList.length === 0) {
        productsContainer.innerHTML = `
            <div class="empty-products-state" style="grid-column: 1 / -1; text-align: center; padding: 40px 20px;">
                <img src="https://media1.tenor.com/m/x9kthrPgkiMAAAAC/kyu-hila-dala-na.gif" style="max-width: 250px; border-radius: 8px; margin-bottom: 16px;">
                <h3>Kyu, Hila Dala Na?</h3>
                <p style="color: var(--light-text); margin-top: 8px;">No real items match your search. But Rajinikanth is always here!</p>
                <button class="add-btn" id="reset-search-btn" style="margin-top: 16px; width: auto; display: inline-block;">View All Shocks</button>
            </div>
        `;
        const resetBtn = document.getElementById("reset-search-btn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                searchInput.value = "";
                searchQuery = "";
                selectedCategory = "All Shocks";
                renderCategories();
                renderProducts();
            });
        }
        return;
    }

    productsContainer.innerHTML = filteredList.map(prod => {
        const quantity = cart[prod.id] || 0;
        
        let actionBtnHtml = `
            <button class="add-btn animate-btn" onclick="addToCart('${prod.id}')">ADD</button>
        `;

        if (quantity > 0) {
            actionBtnHtml = `
                <div class="qty-selector">
                    <button class="qty-btn" onclick="decrementCart('${prod.id}')">-</button>
                    <span class="qty-val">${quantity}</span>
                    <button class="qty-btn" onclick="addToCart('${prod.id}')">+</button>
                </div>
            `;
        }

        return `
            <div class="product-card" data-id="${prod.id}">
                <div class="product-image-box">
                    <span class="product-badge">${prod.badge}</span>
                    <img src="${prod.image}" alt="${prod.name}" class="product-gif" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-weight">${prod.weight}</span>
                    <h3 class="product-title" title="${prod.name}">${prod.name}</h3>
                    <div class="product-action-row">
                        <div class="price-container">
                            <span class="product-price">₹${prod.price}</span>
                            ${prod.originalPrice > prod.price ? `<span class="product-original-price">₹${prod.originalPrice}</span>` : ''}
                        </div>
                        <div class="add-to-cart-container" id="action-${prod.id}">
                            ${actionBtnHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// 7. Search System Setup
function handleSearch(e) {
    searchQuery = e.target.value;
    renderProducts();
}

function setupSearchSuggestions() {
    searchInput.addEventListener("focus", showSuggestions);
}

function showSuggestions() {
    const suggestions = [
        "Kyu Hila Dala Na?",
        "Sivaji style sunglasses",
        "Free shock items",
        "Boss deals",
        "Fizzy Shock Soda"
    ];

    searchSuggestions.innerHTML = suggestions.map(item => `
        <div class="search-suggestion-item" onclick="selectSuggestion('${item}')">
            <i class="fa-solid fa-arrow-trend-up"></i>
            <span>${item}</span>
        </div>
    `).join("");

    searchSuggestions.style.display = "block";
}

function selectSuggestion(suggestion) {
    searchInput.value = suggestion;
    searchQuery = suggestion;
    searchSuggestions.style.display = "none";
    renderProducts();
}

// 8. Cart Operations
window.addToCart = function(productId) {
    cart[productId] = (cart[productId] || 0) + 1;
    updateCartUI();
    renderProducts();
    triggerVibrationFeedback();
    
    // Add micro-shaking animation to product card
    const card = document.querySelector(`.product-card[data-id="${productId}"]`);
    if (card) {
        card.classList.add("shake-active");
        setTimeout(() => card.classList.remove("shake-active"), 400);
    }
};

window.decrementCart = function(productId) {
    if (cart[productId]) {
        cart[productId]--;
        if (cart[productId] === 0) {
            delete cart[productId];
        }
        updateCartUI();
        renderProducts();
    }
};

function updateCartUI() {
    const totalQty = Object.values(cart).reduce((sum, q) => sum + q, 0);
    const totalPrice = Object.keys(cart).reduce((sum, id) => {
        const prod = MEME_PRODUCTS.find(p => p.id === id);
        return sum + (prod ? prod.price * cart[id] : 0);
    }, 0);

    // Update Header Badge
    if (totalQty > 0) {
        cartBadgeCount.textContent = totalQty;
        cartBadgeCount.style.display = "flex";
        cartHeaderText.textContent = `₹${totalPrice}`;
        
        // Show sticky floating cart bar
        floatingCartBar.classList.add("active");
        floatingQtyText.textContent = `${totalQty} Item${totalQty > 1 ? 's' : ''}`;
        floatingTotalText.textContent = `₹${totalPrice}`;
    } else {
        cartBadgeCount.style.display = "none";
        cartHeaderText.textContent = "My Cart";
        
        // Hide sticky floating cart bar
        floatingCartBar.classList.remove("active");
    }

    // Update drawer item list
    renderCartDrawerItems(totalPrice);
}

function renderCartDrawerItems(totalPrice) {
    const totalQty = Object.values(cart).reduce((sum, q) => sum + q, 0);

    if (totalQty === 0) {
        drawerItemsContainer.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-cart-flatbed-suitcases empty-cart-icon"></i>
                <h4 class="empty-cart-title">Your Cart is Shaken (Empty)</h4>
                <p class="empty-cart-desc">Add some shocking elements to proceed with ordering Rajini's surprise.</p>
            </div>
        `;
        document.getElementById("drawer-footer").style.display = "none";
        return;
    }

    document.getElementById("drawer-footer").style.display = "flex";

    // Show items
    drawerItemsContainer.innerHTML = Object.keys(cart).map(id => {
        const prod = MEME_PRODUCTS.find(p => p.id === id);
        if (!prod) return "";
        const quantity = cart[id];

        return `
            <div class="cart-item">
                <div class="cart-item-img-box">
                    <img src="${prod.image}" alt="${prod.name}" class="cart-item-img">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${prod.name}</h4>
                    <span class="cart-item-wt">${prod.weight}</span>
                    <div class="cart-item-price">₹${prod.price * quantity}</div>
                </div>
                <div class="cart-item-qty-selector">
                    <div class="qty-selector">
                        <button class="qty-btn" onclick="decrementCart('${prod.id}')">-</button>
                        <span class="qty-val">${quantity}</span>
                        <button class="qty-btn" onclick="addToCart('${prod.id}')">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Calculate billing
    billSubtotal.textContent = `₹${totalPrice}`;
    
    // Default Discount code logic (HILADALA100 covers everything except ₹0 order)
    const discount = totalPrice; // 100% discount
    const promoRow = document.getElementById("promo-row");
    const discountText = promoRow.querySelector(".discount-applied");
    
    discountText.textContent = `-₹${discount}`;
    billGrandTotal.textContent = `₹0 (FREE SHOCK!)`;
}

// 9. Drawer Actions
function openCartDrawer() {
    cartDrawerOverlay.style.display = "block";
    // Trigger paint
    void cartDrawerOverlay.offsetWidth;
    cartDrawerOverlay.style.opacity = "1";
    cartDrawer.classList.add("open");
}

function closeCartDrawer() {
    cartDrawerOverlay.style.opacity = "0";
    cartDrawer.classList.remove("open");
    setTimeout(() => {
        cartDrawerOverlay.style.display = "none";
    }, 300);
}

// 10. Checkout Celebration Flow
function triggerCheckoutFlow() {
    // Close cart drawer first
    closeCartDrawer();

    // 1. Rumble/vibration effect on body (screen shake)
    document.body.classList.add("shake-active");
    
    // Play funny speech synthesis
    playMemeSound();

    setTimeout(() => {
        document.body.classList.remove("shake-active");
        
        // Show modal
        checkoutModal.style.display = "flex";
        
        // Start Canvas Confetti
        initConfetti();
    }, 1200); // Shake for 1.2s
}

function closeCelebrationFlow() {
    checkoutModal.style.display = "none";
    // Reset cart state
    cart = {};
    updateCartUI();
    renderProducts();
    
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let hasAutoPlayed = false;

function tryAutoPlayAudio() {
    if (hasAutoPlayed) return;
    
    const promise = playMemeSound();
    if (promise && typeof promise.then === "function") {
        promise.then(() => {
            hasAutoPlayed = true;
        }).catch(() => {
            // Browser blocked un-triggered autoplay: attach to first user interaction
            setupFirstInteractionAudio();
        });
    } else {
        setupFirstInteractionAudio();
    }
}

function setupFirstInteractionAudio() {
    const handleFirstGesture = () => {
        if (!hasAutoPlayed) {
            playMemeSound();
            hasAutoPlayed = true;
        }
        document.removeEventListener("click", handleFirstGesture);
        document.removeEventListener("touchstart", handleFirstGesture);
        document.removeEventListener("keydown", handleFirstGesture);
        document.removeEventListener("mousemove", handleFirstGesture);
    };
    document.addEventListener("click", handleFirstGesture, { once: true });
    document.addEventListener("touchstart", handleFirstGesture, { once: true });
    document.addEventListener("keydown", handleFirstGesture, { once: true });
    document.addEventListener("mousemove", handleFirstGesture, { once: true });
}

// Play "Kyu Hila Dala Na?" audio file
function playMemeSound() {
    const audio = document.getElementById("hila-dala-audio") || new Audio("Kyu-Hila-Dala-Na.mp4");
    if (audio) {
        audio.currentTime = 0;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            return playPromise.catch(err => {
                console.log("Audio playback interrupted or blocked by browser:", err);
                // Fallback to Web Speech API if audio playback fails
                if ('speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                    const utterance = new SpeechSynthesisUtterance("Kyu, hila dala na?");
                    utterance.lang = "hi-IN";
                    utterance.rate = 1.0;
                    utterance.pitch = 0.9;
                    window.speechSynthesis.speak(utterance);
                }
                throw err;
            });
        }
    }
    return Promise.resolve();
}

// Visual/haptic vibe feedback
function triggerVibrationFeedback() {
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
    }
}

// Shake container visual helper
function shakeElement(element) {
    element.classList.add("shake-active");
    setTimeout(() => element.classList.remove("shake-active"), 800);
}

// 11. Confetti Animation logic on Canvas
let confettiActive = false;
function initConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    
    // Resize canvas
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    
    const colors = ["#f7ec13", "#0c831f", "#ff5722", "#03a9f4", "#e91e63", "#9c27b0"];
    const particles = [];
    confettiActive = true;

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }

    function draw() {
        if (!confettiActive) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, idx) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            p.tilt = Math.sin(p.tiltAngle - idx/3) * 15;

            // Loop back up if particle hits bottom
            if (p.y > canvas.height) {
                p.x = Math.random() * canvas.width;
                p.y = -20;
                p.tilt = Math.random() * 10 - 5;
            }

            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();
        });

        requestAnimationFrame(draw);
    }
    
    draw();
    
    // Stop after 6 seconds to prevent performance degradation
    setTimeout(() => {
        confettiActive = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 6000);
}
