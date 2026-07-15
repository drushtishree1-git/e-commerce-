// Default Predefined Datasets
const DEFAULT_SERVICES = [
    {
        id: "srv-1",
        name: "Signature Hydrating Facial",
        category: "skin",
        price: 75.00,
        description: "Rejuvenating skin therapy with vitamin C, steam cleansing, and relaxing head-neck massage.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: "srv-2",
        name: "Luxury Argan Hair Spa",
        category: "hair",
        price: 95.00,
        description: "Intense moisture steam treatment with cold-pressed argan oil and classic blow-out.",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: "srv-3",
        name: "Gel Manicure & Polish",
        category: "nails",
        price: 45.00,
        description: "Nail shaping, cuticle treatment, organic hand massage, and long-lasting gel polish.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: "srv-4",
        name: "Bridal Radiant Makeup",
        category: "bridal",
        price: 180.00,
        description: "Airbrush bridal make-up including custom skin prep and eyelash extensions.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=60"
    }
];

const DEFAULT_PRODUCTS = [
    {
        id: "prod-1",
        name: "Organic Rose Face Serum",
        price: 28.00,
        description: "A lightweight facial oil infused with rose petals to brighten and hydrate skin.",
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-2",
        name: "Argan Therapy Hair Oil",
        price: 24.50,
        description: "Restores heat-damaged hair shafts and split ends. Non-greasy lightweight formula.",
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-3",
        name: "Lavender Smoothing Body Butter",
        price: 21.00,
        description: "Rich moisturizing cream that relaxes the mind and locks body moisture all day.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=60"
    }
];

// Preset Professional Images Library for Easy Select
const IMAGE_PRESETS = {
    hair: [
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1605497746444-ac9dbd324ce8?w=600&auto=format&fit=crop&q=60"
    ],
    skin: [
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&auto=format&fit=crop&q=60"
    ],
    nails: [
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1632345031435-8797b2d58045?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&auto=format&fit=crop&q=60"
    ],
    bridal: [
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60"
    ],
    products: [
        "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=60"
    ]
};

// Application State variables
let services = JSON.parse(localStorage.getItem("kavya_services")) || DEFAULT_SERVICES;
let products = JSON.parse(localStorage.getItem("kavya_products")) || DEFAULT_PRODUCTS;
let cart = JSON.parse(localStorage.getItem("kavya_cart")) || [];
let serviceFilter = "all";

// DOM Elements
const servicesGrid = document.getElementById("services-grid");
const productsGrid = document.getElementById("products-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const bookServiceSelect = document.getElementById("book-service");
const appointmentForm = document.getElementById("appointment-form");
const toastContainer = document.getElementById("toast-container");

// Cart Elements
const cartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn-salon");
const cartDrawer = document.getElementById("cart-drawer-salon");
const cartOverlay = document.getElementById("cart-overlay-salon");
const cartItemsContainer = document.getElementById("cart-items-container-salon");
const cartBadge = document.getElementById("cart-badge");
const cartCountDrawer = document.getElementById("cart-count-drawer-salon");
const cartSubtotal = document.getElementById("cart-subtotal-salon");
const cartTotal = document.getElementById("cart-total-salon");
const checkoutBtn = document.getElementById("checkout-btn-salon");

// Dashboard Elements
const dashboardToggle = document.getElementById("dashboard-toggle");
const closeDashboard = document.getElementById("close-dashboard");
const dashboardPanel = document.getElementById("dashboard-panel");
const dashboardOverlay = document.getElementById("dashboard-overlay");
const resetDefaultsBtn = document.getElementById("reset-defaults");

// Tab Elements
const tabServicesBtn = document.getElementById("tab-services-btn");
const tabProductsBtn = document.getElementById("tab-products-btn");
const panelServices = document.getElementById("panel-services");
const panelProducts = document.getElementById("panel-products");

// Forms
const serviceForm = document.getElementById("service-form");
const productForm = document.getElementById("product-form");
const editServiceId = document.getElementById("edit-service-id");
const editProductId = document.getElementById("edit-product-id");

// Services List (Admin)
const adminServicesList = document.getElementById("admin-services-list");
const adminProductsList = document.getElementById("admin-products-list");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    renderClientView();
    renderAdminView();
    setupEventListeners();
    renderPresetGrids();
    updateCartUI();
});

// Render everything on the client-facing front page
function renderClientView() {
    // 1. Render Services
    let filteredServices = services.filter(s => serviceFilter === "all" || s.category === serviceFilter);
    
    if (filteredServices.length === 0) {
        servicesGrid.innerHTML = `<p class="w-100 text-center" style="grid-column: 1/-1; padding: 40px; color:var(--text-muted);">No services added in this category yet.</p>`;
    } else {
        servicesGrid.innerHTML = filteredServices.map(s => `
            <div class="service-card">
                <div class="service-img-container">
                    <img src="${s.image}" alt="${s.name}" class="service-img" onerror="this.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=60'">
                </div>
                <div class="service-info">
                    <span class="service-cat">${s.category}</span>
                    <h3 class="service-name">${s.name}</h3>
                    <p class="service-desc">${s.description}</p>
                    <div class="service-footer">
                        <span class="service-price">$${Number(s.price).toFixed(2)}</span>
                        <a href="#booking" class="book-service-btn" onclick="selectBookingService('${s.id}')">
                            Book Now <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join("");
    }

    // 2. Render Products
    if (products.length === 0) {
        productsGrid.innerHTML = `<p class="w-100 text-center" style="grid-column: 1/-1; padding: 40px; color:var(--text-muted);">No retail products listed yet.</p>`;
    } else {
        productsGrid.innerHTML = products.map(p => `
            <div class="product-card">
                <div class="product-img-container">
                    <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&auto=format&fit=crop&q=60'">
                </div>
                <div class="product-details">
                    <h3 class="product-name">${p.name}</h3>
                    <p class="product-desc">${p.description}</p>
                    <div class="product-price-row">
                        <span class="product-price">$${Number(p.price).toFixed(2)}</span>
                        <button class="add-product-cart-btn" onclick="addProductToCart('${p.id}')" title="Add to Bag">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join("");
    }

    // 3. Sync booking service selector options
    bookServiceSelect.innerHTML = services.map(s => `
        <option value="${s.id}">${s.name} - $${Number(s.price).toFixed(2)}</option>
    `).join("");
}

// Select a service and scroll to booking form automatically
window.selectBookingService = function(serviceId) {
    bookServiceSelect.value = serviceId;
};

// Render Admin Lists inside the Owner Dashboard
function renderAdminView() {
    // 1. Services admin list
    adminServicesList.innerHTML = services.map(s => `
        <div class="admin-item-card">
            <img src="${s.image}" alt="${s.name}" class="admin-item-thumbnail" onerror="this.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&auto=format&fit=crop&q=60'">
            <div class="admin-item-details">
                <h5>${s.name} <span style="font-size:11px; color:var(--accent-rosegold)">(${s.category})</span></h5>
                <p>$${Number(s.price).toFixed(2)} — ${s.description.substring(0, 50)}...</p>
            </div>
            <div class="admin-item-actions">
                <button class="action-icon-btn edit-action-btn" onclick="startEditService('${s.id}')" title="Edit service details"><i class="fa-solid fa-pencil"></i></button>
                <button class="action-icon-btn delete-action-btn" onclick="deleteService('${s.id}')" title="Delete service"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    `).join("");

    // 2. Products admin list
    adminProductsList.innerHTML = products.map(p => `
        <div class="admin-item-card">
            <img src="${p.image}" alt="${p.name}" class="admin-item-thumbnail" onerror="this.src='https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200&auto=format&fit=crop&q=60'">
            <div class="admin-item-details">
                <h5>${p.name}</h5>
                <p>$${Number(p.price).toFixed(2)} — ${p.description.substring(0, 50)}...</p>
            </div>
            <div class="admin-item-actions">
                <button class="action-icon-btn edit-action-btn" onclick="startEditProduct('${p.id}')" title="Edit product details"><i class="fa-solid fa-pencil"></i></button>
                <button class="action-icon-btn delete-action-btn" onclick="deleteProduct('${p.id}')" title="Delete product"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    `).join("");
}

// Render Presets Gallery Thumbnails (Mom-friendly presets selection)
function renderPresetGrids() {
    // Services Presets
    const srvPresetsGrid = document.getElementById("srv-presets-grid");
    // Flatten preset lists into a single array for easier display, or filter dynamically
    const allPresets = [...IMAGE_PRESETS.hair, ...IMAGE_PRESETS.skin, ...IMAGE_PRESETS.nails, ...IMAGE_PRESETS.bridal];
    
    srvPresetsGrid.innerHTML = allPresets.map(url => `
        <img src="${url}" class="preset-thumb" onclick="selectPresetImage(this, 'srv')" alt="preset design photo">
    `).join("");

    // Products Presets
    const prodPresetsGrid = document.getElementById("prod-presets-grid");
    prodPresetsGrid.innerHTML = IMAGE_PRESETS.products.map(url => `
        <img src="${url}" class="preset-thumb" onclick="selectPresetImage(this, 'prod')" alt="preset product photo">
    `).join("");
}

// Preset selection handler
window.selectPresetImage = function(imgElement, prefix) {
    // Clear active thumbnails in that specific grid
    const parentGrid = imgElement.parentElement;
    parentGrid.querySelectorAll(".preset-thumb").forEach(t => t.classList.remove("active"));
    imgElement.classList.add("active");

    const imgUrl = imgElement.src;
    
    // Set form state and preview
    document.getElementById(`${prefix}-image-data`).value = imgUrl;
    const previewImg = document.getElementById(`${prefix}-image-preview`);
    previewImg.src = imgUrl;
    previewImg.style.display = "block";

    showToast("Preset photo selected!", "info");
};

// Event Listeners setup
function setupEventListeners() {
    // Toggle Dashboard open/close
    dashboardToggle.addEventListener("click", () => {
        dashboardPanel.classList.add("active");
        dashboardOverlay.classList.add("active");
    });

    closeDashboard.addEventListener("click", closeOwnerDashboard);
    dashboardOverlay.addEventListener("click", closeOwnerDashboard);

    // Filter categories click
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            serviceFilter = btn.getAttribute("data-category");
            renderClientView();
        });
    });

    // Booking Submission Simulator
    appointmentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const clientName = document.getElementById("book-name").value;
        const selectedSrv = bookServiceSelect.options[bookServiceSelect.selectedIndex].text;
        showToast(`Request sent for: "${selectedSrv}". Thank you, ${clientName}!`, "success");
        appointmentForm.reset();
    });

    // Reset Defaults Button
    resetDefaultsBtn.addEventListener("click", () => {
        if (confirm("Restore website back to original service and product lists? All your custom modifications will be deleted.")) {
            services = DEFAULT_SERVICES;
            products = DEFAULT_PRODUCTS;
            saveAndRefresh();
            showToast("Restored factory original salon data.", "info");
        }
    });

    // Tab buttons toggles
    tabServicesBtn.addEventListener("click", () => {
        tabServicesBtn.classList.add("active");
        tabProductsBtn.classList.remove("active");
        panelServices.classList.add("active");
        panelProducts.classList.remove("active");
    });

    tabProductsBtn.addEventListener("click", () => {
        tabProductsBtn.classList.add("active");
        tabServicesBtn.classList.remove("active");
        panelProducts.classList.add("active");
        panelServices.classList.remove("active");
    });

    // File Uploads reader (Convert local computer file input directly to Base64 String)
    setupImageReader("srv");
    setupImageReader("prod");

    // Toggle Cart Drawer
    cartBtn.addEventListener("click", () => {
        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");
    });
    closeCartBtn.addEventListener("click", () => {
        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
    });
    cartOverlay.addEventListener("click", () => {
        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
    });
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Your bag is empty!", "info");
            return;
        }
        showToast("Simulated checkout successful! Order placed.", "success");
        cart = [];
        updateCartUI();
        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
    });

    // Add/Edit Submissions
    serviceForm.addEventListener("submit", handleServiceSubmit);
    productForm.addEventListener("submit", handleProductSubmit);

    // Cancel edits
    document.getElementById("cancel-service-edit-btn").addEventListener("click", resetServiceForm);
    document.getElementById("cancel-product-edit-btn").addEventListener("click", resetProductForm);
}

function closeOwnerDashboard() {
    dashboardPanel.classList.remove("active");
    dashboardOverlay.classList.remove("active");
}

// Convert user uploaded local image to Base64 data strings (saved directly inside browser storage offline)
function setupImageReader(prefix) {
    const fileInput = document.getElementById(`${prefix}-file-upload`);
    const previewImg = document.getElementById(`${prefix}-image-preview`);
    const dataInput = document.getElementById(`${prefix}-image-data`);
    const presetsGrid = document.getElementById(`${prefix}-presets-grid`);

    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(evt) {
            const base64Data = evt.target.result;
            
            // Set value and display preview
            dataInput.value = base64Data;
            previewImg.src = base64Data;
            previewImg.style.display = "block";

            // Remove active tags on presets
            presetsGrid.querySelectorAll(".preset-thumb").forEach(t => t.classList.remove("active"));
            
            showToast("Custom photo uploaded and prepared!", "success");
        };
        reader.readAsDataURL(file);
    });
}

// Service form submission (Creates new service or saves edited service)
function handleServiceSubmit(e) {
    e.preventDefault();

    const id = editServiceId.value;
    const name = document.getElementById("srv-name").value;
    const category = document.getElementById("srv-category").value;
    const price = parseFloat(document.getElementById("srv-price").value) || 0;
    const description = document.getElementById("srv-desc").value;
    let image = document.getElementById("srv-image-data").value;

    // Set fallback if empty
    if (!image) {
        image = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=60";
    }

    if (id) {
        // Edit mode
        const index = services.findIndex(s => s.id === id);
        if (index !== -1) {
            services[index] = { id, name, category, price, description, image };
            showToast("Service details updated!", "success");
        }
    } else {
        // Create mode
        const newId = `srv-${Date.now()}`;
        services.push({ id: newId, name, category, price, description, image });
        showToast("New salon service added successfully!", "success");
    }

    resetServiceForm();
    saveAndRefresh();
}

// Product form submission
function handleProductSubmit(e) {
    e.preventDefault();

    const id = editProductId.value;
    const name = document.getElementById("prod-name").value;
    const price = parseFloat(document.getElementById("prod-price").value) || 0;
    const description = document.getElementById("prod-desc").value;
    let image = document.getElementById("prod-image-data").value;

    if (!image) {
        image = "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&auto=format&fit=crop&q=60";
    }

    if (id) {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products[index] = { id, name, price, description, image };
            showToast("Product details updated!", "success");
        }
    } else {
        const newId = `prod-${Date.now()}`;
        products.push({ id: newId, name, price, description, image });
        showToast("New retail beauty product added!", "success");
    }

    resetProductForm();
    saveAndRefresh();
}

// Edit actions trigger
window.startEditService = function(id) {
    const srv = services.find(s => s.id === id);
    if (!srv) return;

    editServiceId.value = srv.id;
    document.getElementById("srv-name").value = srv.name;
    document.getElementById("srv-category").value = srv.category;
    document.getElementById("srv-price").value = srv.price;
    document.getElementById("srv-desc").value = srv.description;
    
    // Set preview
    const previewImg = document.getElementById("srv-image-preview");
    const dataInput = document.getElementById("srv-image-data");
    dataInput.value = srv.image;
    previewImg.src = srv.image;
    previewImg.style.display = "block";

    // Update buttons
    document.getElementById("service-form-title").innerText = "Edit Salon Service Details";
    document.getElementById("save-service-btn").innerText = "Save Changes";
    document.getElementById("cancel-service-edit-btn").style.display = "inline-flex";

    // Scroll admin panel form to view
    document.getElementById("service-form").scrollIntoView();
};

window.startEditProduct = function(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    editProductId.value = prod.id;
    document.getElementById("prod-name").value = prod.name;
    document.getElementById("prod-price").value = prod.price;
    document.getElementById("prod-desc").value = prod.description;
    
    const previewImg = document.getElementById("prod-image-preview");
    const dataInput = document.getElementById("prod-image-data");
    dataInput.value = prod.image;
    previewImg.src = prod.image;
    previewImg.style.display = "block";

    document.getElementById("product-form-title").innerText = "Edit Retail Product Details";
    document.getElementById("save-product-btn").innerText = "Save Changes";
    document.getElementById("cancel-product-edit-btn").style.display = "inline-flex";

    document.getElementById("product-form").scrollIntoView();
};

// Reset Form fields
function resetServiceForm() {
    editServiceId.value = "";
    serviceForm.reset();
    document.getElementById("srv-image-data").value = "";
    document.getElementById("srv-image-preview").style.display = "none";
    document.getElementById("service-form-title").innerText = "Add New Salon Service";
    document.getElementById("save-service-btn").innerText = "Create Service";
    document.getElementById("cancel-service-edit-btn").style.display = "none";

    // Clear preset highlighting
    document.getElementById("srv-presets-grid").querySelectorAll(".preset-thumb").forEach(t => t.classList.remove("active"));
}

function resetProductForm() {
    editProductId.value = "";
    productForm.reset();
    document.getElementById("prod-image-data").value = "";
    document.getElementById("prod-image-preview").style.display = "none";
    document.getElementById("product-form-title").innerText = "Add New Retail Product";
    document.getElementById("save-product-btn").innerText = "Create Product";
    document.getElementById("cancel-product-edit-btn").style.display = "none";

    document.getElementById("prod-presets-grid").querySelectorAll(".preset-thumb").forEach(t => t.classList.remove("active"));
}

// Delete actions trigger
window.deleteService = function(id) {
    if (confirm("Are you sure you want to remove this service from the salon menu?")) {
        services = services.filter(s => s.id !== id);
        saveAndRefresh();
        showToast("Service deleted from catalogue.", "info");
    }
};

window.deleteProduct = function(id) {
    if (confirm("Are you sure you want to delete this product from the inventory shop?")) {
        products = products.filter(p => p.id !== id);
        saveAndRefresh();
        showToast("Product deleted from shop inventory.", "info");
    }
};

// Save state and refresh interface grids
function saveAndRefresh() {
    localStorage.setItem("kavya_services", JSON.stringify(services));
    localStorage.setItem("kavya_products", JSON.stringify(products));
    renderClientView();
    renderAdminView();
}

// Alerts system
function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check text-green' : 'fa-circle-info'}"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(20px)";
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ==============================================
// SHOPPING CART CONTROLLERS & RENDERERS
// ==============================================
window.addProductToCart = function(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: prod.id,
            name: prod.name,
            price: prod.price,
            image: prod.image,
            quantity: 1
        });
    }
    updateCartUI();
    showToast(`Added ${prod.name} to bag!`, "success");
};

window.updateCartQty = function(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    updateCartUI();
};

window.removeProductFromCart = function(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
    showToast("Removed item from bag.", "info");
};

function updateCartUI() {
    localStorage.setItem("kavya_cart", JSON.stringify(cart));
    
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.innerText = totalCount;
    cartCountDrawer.innerText = totalCount;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart text-center" style="margin-top: 50px; text-align:center;">
                <i class="fa-solid fa-bag-shopping" style="font-size: 36px; color: var(--text-muted); margin-bottom: 10px;"></i>
                <p style="color: var(--text-muted); font-size:13px;">Your bag is empty.</p>
            </div>
        `;
        cartSubtotal.innerText = "$0.00";
        cartTotal.innerText = "$0.00";
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item-salon">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img-salon" onerror="this.src='https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200&auto=format&fit=crop&q=60'">
            <div class="cart-item-details-salon">
                <h4>${item.name}</h4>
                <p>$${Number(item.price).toFixed(2)}</p>
                <div class="qty-controls-salon">
                    <button class="qty-btn-salon" onclick="updateCartQty('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val-salon">${item.quantity}</span>
                    <button class="qty-btn-salon" onclick="updateCartQty('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div style="text-align: right; display:flex; flex-direction:column; justify-content:space-between; height:100%;">
                <span class="cart-item-price-salon">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="cart-item-remove-salon" onclick="removeProductFromCart('${item.id}')"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>
    `).join("");

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.innerText = `$${subtotal.toFixed(2)}`;
    cartTotal.innerText = `$${subtotal.toFixed(2)}`;
}
