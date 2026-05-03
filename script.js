/* ========================================
   FOOD HUB - ELEGANT NEO-BRUTALISM v3
   JavaScript Logic
   ======================================== */

// ========================================
// USERS WITH ROLES
// ========================================
const USERS = [
    { username: 'admin', password: 'admin123', role: 'admin', name: 'Administrator' },
    { username: 'seller1', password: 'seller123', role: 'seller', sellerId: 'seller1', name: 'Batagor Wiliam' },
    { username: 'seller2', password: 'seller123', role: 'seller', sellerId: 'seller2', name: 'Bakso Cup Ambyar' },
    { username: 'seller3', password: 'seller123', role: 'seller', sellerId: 'seller3', name: 'Kedai Kopi Kak Srik' },
    { username: 'seller4', password: 'seller123', role: 'seller', sellerId: 'seller4', name: 'Ayam Geprek wak Ijol' },
];

// ========================================
// DATA STORE
// ========================================
const AppData = {
    sellers: [
        {
            id: 'seller1',
            name: 'Batagor Wiliam',
            description: 'Kuliner tradisional Indonesia autentik dengan resep turun-temurun. Nasi goreng, sate, dan masakan rumahan.',
            status: 'open',
            whatsapp: '6281234567891',
            image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=250&fit=crop',
            products: [
                { id: 'p1', name: 'Nasi Goreng Spesial', price: 25000, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop', description: 'Nasi goreng dengan telur, ayam, dan kerupuk' },
                { id: 'p2', name: 'Sate Ayam Madura', price: 30000, image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=300&h=200&fit=crop', description: '10 tusuk s ayam dengan bumbu kacang khas Madura' },
                { id: 'p3', name: 'Gado-Gado Jakarta', price: 20000, image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=300&h=200&fit=crop', description: 'Sayuran segar dengan saus kacang dan lontong' },
                { id: 'p4', name: 'Rendang Padang', price: 35000, image: 'https://images.unsplash.com/photo-1635437930207-488f97dfdf87?w=300&h=200&fit=crop', description: 'Daging sapi empuk bumbu rendang asli Padang' },
                { id: 'p5', name: 'Es Teh Manis', price: 5000, image: '', description: 'Es teh manis segar' },
                { id: 'p6', name: 'Es Jeruk', price: 7000, image: '', description: 'Es jeruk peras segar' }
            ]
        },
        {
            id: 'seller2',
            name: 'Bakso Cup Ambyar',
            description: 'Bakso dan mie ayam legendaris sejak 1995. Kuah kaldu sapi asli, bakso urat yang kenyal.',
            status: 'open',
            whatsapp: '6281234567892',
            image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=250&fit=crop',
            products: [
                { id: 'p7', name: 'Bakso Urat Jumbo', price: 22000, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop', description: '5 bakso urat jumbo dengan kuah kaldu spesial' },
                { id: 'p8', name: 'Mie Ayam Bakso', price: 20000, image: '', description: 'Mie ayam komplit dengan bakso dan pangsit' },
                { id: 'p9', name: 'Bakso Tetelan', price: 25000, image: '', description: 'Bakso dengan tetelan sapi dan kuah kaldu' },
                { id: 'p10', name: 'Mie Ayam Jamur', price: 18000, image: '', description: 'Mie ayam dengan topping jamur merang' },
                { id: 'p11', name: 'Es Campur', price: 12000, image: '', description: 'Es campur segar dengan berbagai topping' }
            ]
        },
        {
            id: 'seller3',
            name: 'Kedai Kopi Kak Srik',
            description: 'Kopi lokal dan internasional dengan biji kopi pilihan. Suasana nyaman untuk bersantai.',
            status: 'open',
            whatsapp: '6281234567893',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop',
            products: [
                { id: 'p12', name: 'Kopi Susu Gula Aren', price: 18000, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop', description: 'Kopi susu dengan gula aren asli' },
                { id: 'p13', name: 'Espresso Single', price: 15000, image: '', description: 'Espresso shot dengan crema sempurna' },
                { id: 'p14', name: 'Cappuccino', price: 22000, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop', description: 'Cappuccino dengan latte art' },
                { id: 'p15', name: 'Croissant Butter', price: 15000, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300&h=200&fit=crop', description: 'Croissant mentega renyah' },
                { id: 'p16', name: 'Klepon Latte', price: 25000, image: '', description: 'Kopi susu dengan rasa klepon khas' },
                { id: 'p17', name: 'Affogato', price: 20000, image: '', description: 'Espresso dengan es krim vanila' }
            ]
        },
        {
            id: 'seller4',
            name: 'Ayam Geprek wak Ijol',
            description: 'Ayam geprek dengan sambal level 1-10. Pedasnya nampol, rasanya juara!',
            status: 'open',
            whatsapp: '6281234567894',
            image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=250&fit=crop',
            products: [
                { id: 'p18', name: 'Ayam Geprek Level 3', price: 20000, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=300&h=200&fit=crop', description: 'Ayam geprek dengan sambal level 3' },
                { id: 'p19', name: 'Ayam Geprek Level 5', price: 20000, image: '', description: 'Ayam geprek dengan sambal level 5' },
                { id: 'p20', name: 'Ayam Geprek Level 10', price: 22000, image: '', description: 'Ayam geprek dengan sambal level 10 - EXTREME' },
                { id: 'p21', name: 'Paket Komplit', price: 28000, image: '', description: 'Ayam geprek + nasi + tahu + tempe + sambal' },
                { id: 'p22', name: 'Es Kopi Susu', price: 10000, image: '', description: 'Es kopi susu segar' },
                { id: 'p23', name: 'Tahu Crispy', price: 8000, image: '', description: 'Tahu crispy 5 pcs' }
            ]
        }
    ],
    cart: [],
    transactions: [],
    currentSeller: null,
    currentSellerDashboard: null,
    isLoggedIn: false,
    currentUser: null
};

// ========================================
// UTILITY FUNCTIONS
// ========================================
const formatRupiah = (num) => {
    return 'Rp ' + num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, '.');
};

const generateResi = () => {
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `#INV-${dateStr}-${random}`;
};

const showToast = (message, type = 'success') => {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.textContent = message;
    toast.style.background = type === 'error' ? 'var(--danger)' : 'var(--emerald)';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
};

const getProductById = (productId) => {
    for (const seller of AppData.sellers) {
        const product = seller.products.find(p => p.id === productId);
        if (product) return { ...product, sellerId: seller.id, sellerName: seller.name, sellerWhatsapp: seller.whatsapp };
    }
    return null;
};

const getSellerById = (sellerId) => {
    return AppData.sellers.find(s => s.id === sellerId);
};

// ========================================
// LOADING SCREEN - CINEMATIC STRIPS
// ========================================
const initLoadingScreen = () => {
    const loader = document.getElementById('loading-screen');
    const loadBar = document.getElementById('load-bar');
    const strips = document.querySelectorAll('.load-strip');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        loadBar.style.width = progress + '%';
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                strips.forEach((strip, i) => {
                    gsap.to(strip, {
                        scaleY: 0,
                        duration: 0.6,
                        delay: i * 0.05,
                        ease: 'power4.inOut',
                        transformOrigin: strip.dataset.dir === 'up' ? 'top' : 'bottom'
                    });
                });
                
                gsap.to('.load-center', {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.4,
                    delay: 0.3,
                    ease: 'power2.in'
                });
                
                setTimeout(() => {
                    loader.style.display = 'none';
                    initHeroAnimations();
                }, 1000);
            }, 500);
        }
    }, 200);
};

// ========================================
// HERO ANIMATIONS
// ========================================
const initHeroAnimations = () => {
    gsap.from('.hero-badge', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    });
    
    gsap.from('.hero-title .line', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
    });
    
    gsap.from('.hero-desc', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.7,
        ease: 'power2.out'
    });
    
    gsap.from('.hero-actions .btn-hero', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.9,
        ease: 'back.out(1.7)'
    });
    
    gsap.from('.hero-stats .stat-item', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 1.1,
        ease: 'power2.out'
    });
    
    gsap.from('.hero-visual', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'elastic.out(1, 0.5)'
    });
};

// ========================================
// LOGIN MODAL
// ========================================
const toggleLoginModal = (show) => {
    const modal = document.getElementById('login-modal');
    
    if (show) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        gsap.fromTo('.login-panel', 
            { scale: 0.9, y: 30, opacity: 0 }, 
            { scale: 1, y: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
        );
    } else {
        gsap.to('.login-panel', {
            scale: 0.9,
            y: 30,
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
};

const switchLoginTab = (tab) => {
    document.querySelectorAll('.login-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('.login-form-content').forEach(c => c.classList.toggle('active', c.id === `${tab}-form-content`));
};

const handleLogin = () => {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
        AppData.isLoggedIn = true;
        AppData.currentUser = { ...user };
        showToast(`Selamat datang, ${user.name}!`);
        toggleLoginModal(false);
        updateNavForLogin();
    } else {
        showToast('Username atau password salah!', 'error');
    }
};

// FIXED: Logout now correctly re-binds event to the actual DOM element
const logout = () => {
    AppData.isLoggedIn = false;
    AppData.currentUser = null;
    AppData.currentSellerDashboard = null;
    
    // Get the actual element currently in DOM (may have been replaced by updateNavForLogin)
    const loginBtn = document.getElementById('login-nav-btn');
    if (loginBtn) {
        loginBtn.innerHTML = '<i class="fas fa-user-circle"></i> <span>Login</span>';
        loginBtn.style.background = '';
        // Clone to remove old listeners, then re-attach login listener
        const newBtn = loginBtn.cloneNode(true);
        loginBtn.parentNode.replaceChild(newBtn, loginBtn);
        newBtn.addEventListener('click', () => toggleLoginModal(true));
    }
    
    const logoutBtn = document.getElementById('nav-logout-btn');
    if (logoutBtn) logoutBtn.remove();
    
    showToast('Berhasil logout!');
};

const updateNavForLogin = () => {
    const loginBtn = document.getElementById('login-nav-btn');
    const user = AppData.currentUser;
    if (!user || !loginBtn) return;

    const isAdmin = user.role === 'admin';
    const roleLabel = isAdmin ? 'Admin' : 'Penjual';
    const roleColor = isAdmin ? 'var(--rose)' : 'var(--teal)';

    loginBtn.innerHTML = `<i class="fas fa-store"></i> <span>${roleLabel}: ${user.name.split(' ')[0]}</span>`;
    loginBtn.style.background = roleColor;
    
    // Clone to wipe old listeners and attach new dashboard opener
    const newBtn = loginBtn.cloneNode(true);
    newBtn.style.background = roleColor;
    newBtn.innerHTML = `<i class="fas fa-store"></i> <span>${roleLabel}: ${user.name.split(' ')[0]}</span>`;
    loginBtn.parentNode.replaceChild(newBtn, loginBtn);
    
    newBtn.addEventListener('click', () => toggleSellerModal(true));

    // Add logout button next to login btn
    if (!document.getElementById('nav-logout-btn')) {
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'nav-logout-btn';
        logoutBtn.className = 'nav-logout-btn';
        logoutBtn.innerHTML = '<i class="fas fa-right-from-bracket"></i>';
        logoutBtn.title = 'Logout';
        logoutBtn.addEventListener('click', logout);
        newBtn.insertAdjacentElement('afterend', logoutBtn);
    }
};

const togglePassword = () => {
    const input = document.getElementById('login-password');
    const icon = document.getElementById('pass-eye-icon');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
};

// ========================================
// PROMO COUNTDOWN
// ========================================
const initCountdown = () => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);
    
    const updateCountdown = () => {
        const now = new Date();
        const diff = endTime - now;
        
        if (diff <= 0) {
            const el = document.getElementById('countdown-text');
            if (el) el.textContent = 'Promo berakhir!';
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const el = document.getElementById('countdown-text');
        if (el) {
            el.textContent = `Berakhir dalam ${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
        }
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
};

const copyPromo = (code) => {
    navigator.clipboard.writeText(code).then(() => {
        showToast(`Kode promo ${code} disalin!`);
    });
};

// ========================================
// CART FUNCTIONS
// ========================================
const updateCartCount = () => {
    const count = AppData.cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    badge.textContent = count;
    
    if (count > 0) {
        gsap.fromTo(badge, 
            { scale: 1.5 }, 
            { scale: 1, duration: 0.3, ease: 'back.out(2)' }
        );
    }
};

const addToCart = (productId) => {
    const product = getProductById(productId);
    if (!product) return;
    
    const seller = getSellerById(product.sellerId);
    if (seller.status === 'closed') {
        showToast('Maaf, toko sedang tutup!', 'error');
        return;
    }
    
    const existingItem = AppData.cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        AppData.cart.push({
            productId: productId,
            sellerId: product.sellerId,
            quantity: 1
        });
    }
    
    updateCartCount();
    renderCart();
    showToast(`${product.name} ditambahkan ke keranjang!`);
    
    const cartBtn = document.getElementById('cart-btn');
    gsap.fromTo(cartBtn, 
        { scale: 1.2 }, 
        { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' }
    );
};

const removeFromCart = (productId) => {
    AppData.cart = AppData.cart.filter(item => item.productId !== productId);
    updateCartCount();
    renderCart();
};

const updateQuantity = (productId, delta) => {
    const item = AppData.cart.find(item => item.productId === productId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    updateCartCount();
    renderCart();
};

const renderCart = () => {
    const container = document.getElementById('cart-items');
    
    if (AppData.cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon"><i class="fas fa-basket-shopping"></i></div>
                <p>Keranjang masih kosong</p>
                <span>Yuk, jelajahi menu dari toko favoritmu!</span>
            </div>
        `;
        document.getElementById('cart-total-price').textContent = 'Rp 0';
        return;
    }
    
    const grouped = {};
    AppData.cart.forEach(item => {
        if (!grouped[item.sellerId]) {
            grouped[item.sellerId] = [];
        }
        grouped[item.sellerId].push(item);
    });
    
    let html = '';
    let total = 0;
    
    for (const [sellerId, items] of Object.entries(grouped)) {
        const seller = getSellerById(sellerId);
        html += `
            <div class="cart-seller-group">
                <div class="cart-seller-header">
                    <i class="fas fa-store"></i>
                    <span>${seller.name}</span>
                </div>
        `;
        
        items.forEach(item => {
            const product = getProductById(item.productId);
            const subtotal = product.price * item.quantity;
            total += subtotal;
            
            html += `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${product.name}</div>
                        <div class="cart-item-price">${formatRupiah(product.price)} x ${item.quantity}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity('${item.productId}', -1)">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity('${item.productId}', 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart('${item.productId}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
    }
    
    container.innerHTML = html;
    document.getElementById('cart-total-price').textContent = formatRupiah(total);
};

// ========================================
// CART SIDEBAR TOGGLE
// ========================================
const toggleCart = (show) => {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    
    if (show) {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        gsap.fromTo(sidebar, 
            { x: '100%' }, 
            { x: '0%', duration: 0.4, ease: 'power3.out' }
        );
    } else {
        gsap.to(sidebar, {
            x: '100%',
            duration: 0.3,
            ease: 'power3.in',
            onComplete: () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
};

// ========================================
// TOKO RENDERING
// ========================================
const renderToko = () => {
    const grid = document.getElementById('toko-grid');
    
    grid.innerHTML = AppData.sellers.map((seller, idx) => {
        const accentColors = ['var(--gold)', 'var(--teal)', 'var(--violet)', 'var(--rose)'];
        const bgColors = ['var(--gold-glow)', 'var(--teal-glow)', 'var(--violet-glow)', 'var(--rose-glow)'];
        const accent = accentColors[idx % accentColors.length];
        const bg = bgColors[idx % bgColors.length];
        const isClosed = seller.status === 'closed';
        return `
        <div class="toko-card ${isClosed ? 'toko-card-closed' : ''}" onclick="${!isClosed ? `openMenu('${seller.id}')` : ''}" style="--card-accent:${accent};--card-bg:${bg}">
            <div class="toko-card-img-wrap">
                ${seller.image ? 
                    `<img src="${seller.image}" alt="${seller.name}" class="toko-img" onerror="this.parentElement.innerHTML='<div class=\\'toko-img-bg\\'><i class=\\'fas fa-store\\'></i></div>'">` :
                    `<div class="toko-img-bg"><i class="fas fa-store"></i></div>`
                }
                <div class="toko-img-overlay"></div>
                <span class="toko-status-badge ${seller.status}">
                    <span class="status-dot"></span>${seller.status === 'open' ? 'BUKA' : 'TUTUP'}
                </span>
            </div>
            <div class="toko-card-body">
                <div class="toko-card-title-row">
                    <div class="toko-icon-wrap" style="background:${bg};border-color:${accent}">
                        <i class="fas fa-store" style="color:${accent}"></i>
                    </div>
                    <div class="toko-title-info">
                        <h3 class="toko-name">${seller.name}</h3>
                        <div class="toko-rating">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-stroke"></i>
                            <span>4.8</span>
                        </div>
                    </div>
                </div>
                <p class="toko-desc">${seller.description}</p>
                <div class="toko-chips">
                    <span class="toko-chip" style="color:${accent};border-color:${accent}">
                        <i class="fas fa-utensils"></i> ${seller.products.length} Menu
                    </span>
                    <span class="toko-chip">
                        <i class="fab fa-whatsapp"></i> WA Order
                    </span>
                    <span class="toko-chip">
                        <i class="fas fa-clock"></i> ~15 mnt
                    </span>
                </div>
                <div class="toko-card-footer">
                    <div class="toko-wa-label"><i class="fab fa-whatsapp"></i> Pesan via WA</div>
                    <button class="toko-order-btn" style="background:${accent};color:#000" ${isClosed ? 'disabled' : ''}>
                        ${isClosed ? '<i class="fas fa-lock"></i> Tutup' : '<i class="fas fa-arrow-right"></i>'}
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
};

// ========================================
// MENU SECTION
// ========================================
const openMenu = (sellerId) => {
    const seller = getSellerById(sellerId);
    if (!seller) return;
    
    AppData.currentSeller = sellerId;
    
    document.getElementById('menu-seller-name').textContent = seller.name;
    const statusBadge = document.getElementById('menu-seller-status');
    statusBadge.textContent = seller.status === 'open' ? 'BUKA' : 'TUTUP';
    statusBadge.className = `status-badge ${seller.status}`;
    
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = seller.products.map(product => `
        <div class="menu-card" data-aos="fade-up">
            <div class="menu-card-img">
                ${product.image ? 
                    `<img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='<div class=\\'menu-card-img-placeholder\\'><i class=\\'fas fa-utensils\\'></i></div>'">` :
                    `<div class="menu-card-img-placeholder"><i class="fas fa-utensils"></i></div>`
                }
            </div>
            <div class="menu-card-body">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <div class="menu-card-footer">
                    <span class="menu-price">${formatRupiah(product.price)}</span>
                    <button class="btn-add-cart" onclick="addToCart('${product.id}')" ${seller.status === 'closed' ? 'disabled' : ''}>
                        <i class="fas fa-plus"></i> Tambah
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    const tokoSection = document.getElementById('toko');
    const menuSection = document.getElementById('menu-section');
    
    gsap.to(tokoSection, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
            tokoSection.classList.add('hidden');
            menuSection.classList.remove('hidden');
            gsap.fromTo(menuSection, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
};

const backToToko = () => {
    const tokoSection = document.getElementById('toko');
    const menuSection = document.getElementById('menu-section');
    
    gsap.to(menuSection, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
            menuSection.classList.add('hidden');
            tokoSection.classList.remove('hidden');
            gsap.fromTo(tokoSection, 
                { opacity: 0, y: -30 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
            tokoSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
};

// ========================================
// CHECKOUT MODAL
// ========================================
const toggleCheckout = (show) => {
    const modal = document.getElementById('checkout-modal');
    
    if (show) {
        if (AppData.cart.length === 0) {
            showToast('Keranjang masih kosong!', 'error');
            return;
        }
        
        const resi = generateResi();
        document.getElementById('generated-resi').textContent = resi;
        
        renderCheckoutSummary();
        modal.classList.add('active');
        gsap.fromTo(modal.querySelector('.modal-content'), 
            { scale: 0.9, y: 30, opacity: 0 }, 
            { scale: 1, y: 0, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        );
    } else {
        gsap.to(modal.querySelector('.modal-content'), {
            scale: 0.9,
            y: 30,
            opacity: 0,
            duration: 0.2,
            onComplete: () => modal.classList.remove('active')
        });
    }
};

const renderCheckoutSummary = () => {
    const container = document.getElementById('checkout-summary');
    let html = '<h4>Ringkasan Pesanan</h4>';
    let total = 0;
    
    const grouped = {};
    AppData.cart.forEach(item => {
        if (!grouped[item.sellerId]) grouped[item.sellerId] = [];
        grouped[item.sellerId].push(item);
    });
    
    for (const [sellerId, items] of Object.entries(grouped)) {
        const seller = getSellerById(sellerId);
        html += `<div style="margin: 8px 0; font-weight: 700; color: var(--gold); font-size: 0.85rem;">${seller.name}</div>`;
        
        items.forEach(item => {
            const product = getProductById(item.productId);
            const subtotal = product.price * item.quantity;
            total += subtotal;
            html += `
                <div class="checkout-item">
                    <span>${product.name} x${item.quantity}</span>
                    <span>${formatRupiah(subtotal)}</span>
                </div>
            `;
        });
    }
    
    html += `
        <div class="checkout-total">
            <span>Total Pembayaran</span>
            <span>${formatRupiah(total)}</span>
        </div>
    `;
    
    container.innerHTML = html;
};

const switchPaymentCategory = (cat) => {
    document.querySelectorAll('.pay-cat-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.cat === cat));
    document.querySelectorAll('.payment-options-grid').forEach(grid => grid.classList.toggle('active', grid.id === `pay-${cat}`));
    
    const infoBox = document.getElementById('payment-info-box');
    const infoTexts = {
        ewallet: '<strong>QRIS:</strong> Scan QR code untuk pembayaran instan.<br><strong>DANA / GoPay:</strong> Transfer ke nomor yang akan dikirim via WhatsApp.',
        bank: '<strong>Transfer Bank:</strong> Silakan transfer ke rekening yang akan dikirim via WhatsApp. Konfirmasi pembayaran wajib.',
        cash: '<strong>Bayar Tunai:</strong> Bayar langsung saat pesanan datang (COD) atau saat ambil di toko.'
    };
    infoBox.innerHTML = infoTexts[cat] || '';
    infoBox.classList.add('visible');
};

const handlePickupChange = () => {
    const method = document.querySelector('input[name="pickup-method"]:checked').value;
    const addressField = document.getElementById('address-field');
    const resiField = document.getElementById('resi-auto-field');
    
    if (method === 'delivery') {
        addressField.classList.remove('hidden');
        resiField.classList.add('hidden');
    } else {
        addressField.classList.add('hidden');
        resiField.classList.remove('hidden');
    }
};

const confirmOrder = () => {
    const customerName = document.getElementById('customer-name').value.trim();
    const customerPhone = document.getElementById('customer-phone').value.trim();
    const pickupMethod = document.querySelector('input[name="pickup-method"]:checked').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const address = document.getElementById('customer-address').value.trim();
    const resi = document.getElementById('generated-resi').textContent;
    
    if (!customerName || !customerPhone) {
        showToast('Harap isi nama dan nomor telepon!', 'error');
        return;
    }
    
    if (pickupMethod === 'delivery' && !address) {
        showToast('Harap isi alamat pengiriman!', 'error');
        return;
    }
    
    const grouped = {};
    AppData.cart.forEach(item => {
        if (!grouped[item.sellerId]) grouped[item.sellerId] = [];
        grouped[item.sellerId].push(item);
    });
    
    const storeIds = Object.keys(grouped);
    const waLinks = [];
    
    for (const [sellerId, items] of Object.entries(grouped)) {
        const seller = getSellerById(sellerId);
        let message = `*PESANAN BARU - FOOD HUB*\n\n`;
        message += `*Dari:* ${customerName}\n`;
        message += `*Telepon:* ${customerPhone}\n`;
        message += `*Toko:* ${seller.name}\n\n`;
        message += `*Detail Pesanan:*\n`;
        
        let sellerTotal = 0;
        items.forEach(item => {
            const product = getProductById(item.productId);
            const subtotal = product.price * item.quantity;
            sellerTotal += subtotal;
            message += `- ${product.name} x${item.quantity} = ${formatRupiah(subtotal)}\n`;
        });
        
        message += `\n*Total:* ${formatRupiah(sellerTotal)}\n`;
        message += `*Metode Pengambilan:* ${pickupMethod === 'delivery' ? 'Diantar' : 'Ambil Sendiri'}\n`;
        message += `*Metode Pembayaran:* ${paymentMethod.toUpperCase()}\n`;
        
        if (pickupMethod === 'delivery') {
            message += `*Alamat:* ${address}\n`;
        }
        message += `*Nomor Resi:* ${resi}\n`;
        message += `\nTerima kasih telah memesan di Food Hub! 🙏`;
        
        waLinks.push({
            sellerName: seller.name,
            url: `https://wa.me/${seller.whatsapp}?text=${encodeURIComponent(message)}`
        });
    }
    
    AppData.transactions.push({
        resi: resi,
        customer: customerName,
        date: new Date().toISOString(),
        method: pickupMethod,
        payment: paymentMethod,
        stores: storeIds.length
    });
    
    AppData.cart = [];
    updateCartCount();
    renderCart();
    toggleCheckout(false);
    toggleCart(false);

    showWaOrderModal(waLinks);
};

const showWaOrderModal = (waLinks) => {
    let existing = document.getElementById('wa-order-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'wa-order-modal';
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content wa-order-content">
            <div class="modal-header">
                <h3><i class="fas fa-circle-check" style="color:var(--emerald)"></i> Pesanan Dikonfirmasi!</h3>
                <button onclick="document.getElementById('wa-order-modal').remove()" class="close-modal"><i class="fas fa-xmark"></i></button>
            </div>
            <div class="modal-body">
                <p class="wa-order-desc">
                    ${waLinks.length > 1 
                        ? `Pesananmu mencakup <strong>${waLinks.length} toko berbeda</strong>. Klik tombol di bawah untuk mengirim pesanan ke masing-masing toko via WhatsApp.`
                        : 'Klik tombol di bawah untuk mengirim pesanan ke toko via WhatsApp.'
                    }
                </p>
                <div class="wa-store-buttons">
                    ${waLinks.map((link, i) => `
                        <a href="${link.url}" target="_blank" class="wa-store-btn" onclick="this.classList.add('sent')">
                            <div class="wa-store-btn-left">
                                <span class="wa-store-num">${i + 1}</span>
                                <div>
                                    <strong>${link.sellerName}</strong>
                                    <span>Tap untuk kirim pesanan</span>
                                </div>
                            </div>
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    `).join('')}
                </div>
                <p class="wa-order-note"><i class="fas fa-circle-info"></i> Setiap toko menerima pesanannya masing-masing secara terpisah.</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    gsap.fromTo(modal.querySelector('.modal-content'),
        { scale: 0.9, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
    );
};

// ========================================
// SELLER DASHBOARD
// ========================================
const toggleSellerModal = (show) => {
    const modal = document.getElementById('seller-modal');
    
    if (show) {
        modal.classList.add('active');
        gsap.fromTo(modal.querySelector('.modal-content'), 
            { scale: 0.9, y: 30, opacity: 0 }, 
            { scale: 1, y: 0, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        );
        if (AppData.isLoggedIn && AppData.currentUser) {
            document.getElementById('seller-login-form').classList.add('hidden');
            document.getElementById('seller-dashboard').classList.remove('hidden');
            openSellerDashboard();
        } else {
            document.getElementById('seller-login-form').classList.remove('hidden');
            document.getElementById('seller-dashboard').classList.add('hidden');
        }
    } else {
        gsap.to(modal.querySelector('.modal-content'), {
            scale: 0.9,
            y: 30,
            opacity: 0,
            duration: 0.2,
            onComplete: () => modal.classList.remove('active')
        });
    }
};

const sellerLogin = () => {
    const username = document.getElementById('seller-username').value.trim();
    const password = document.getElementById('seller-password').value.trim();
    
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
        AppData.isLoggedIn = true;
        AppData.currentUser = { ...user };
        updateNavForLogin();
        openSellerDashboard();
        showToast(`Selamat datang, ${user.name}!`);
    } else {
        showToast('Username atau password salah!', 'error');
    }
};

const openSellerDashboard = () => {
    const user = AppData.currentUser;
    if (!user) return;

    document.getElementById('seller-login-form').classList.add('hidden');
    document.getElementById('seller-dashboard').classList.remove('hidden');

    const adminSel = document.getElementById('admin-store-selector');
    if (user.role === 'admin') {
        if (adminSel) {
            adminSel.classList.remove('hidden');
            const sel = document.getElementById('store-select');
            sel.innerHTML = AppData.sellers.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
            AppData.currentSellerDashboard = AppData.sellers[0];
            sel.addEventListener('change', () => {
                AppData.currentSellerDashboard = getSellerById(sel.value);
                renderSellerDashboard();
            });
        }
    } else {
        if (adminSel) adminSel.classList.add('hidden');
        AppData.currentSellerDashboard = getSellerById(user.sellerId);
    }
    renderSellerDashboard();
};

const renderSellerDashboard = () => {
    const seller = AppData.currentSellerDashboard;
    if (!seller) return;
    const user = AppData.currentUser;

    const adminSel = document.getElementById('admin-store-selector');
    if (adminSel && user && user.role === 'admin') {
        adminSel.classList.remove('hidden');
        const sel = document.getElementById('store-select');
        if (sel) sel.value = seller.id;
    } else if (adminSel) {
        adminSel.classList.add('hidden');
    }

    const roleBadgeEl = document.getElementById('dashboard-role-badge');
    if (roleBadgeEl && user) {
        roleBadgeEl.textContent = user.role === 'admin' ? '👑 Admin' : '🏪 Penjual';
        roleBadgeEl.className = `role-badge ${user.role}`;
    }
    
    document.getElementById('dashboard-seller-name').textContent = seller.name;
    const statusBadge = document.getElementById('dashboard-seller-status');
    statusBadge.textContent = seller.status === 'open' ? 'BUKA' : 'TUTUP';
    statusBadge.className = `status-badge ${seller.status}`;
    
    document.getElementById('store-toggle').checked = seller.status === 'open';
    document.getElementById('toggle-label').textContent = seller.status === 'open' ? 'Toko Buka' : 'Toko Tutup';
    document.getElementById('seller-whatsapp').value = seller.whatsapp;
    document.getElementById('seller-desc').value = seller.description;
    
    renderSellerProducts();
};

const renderSellerProducts = () => {
    const seller = AppData.currentSellerDashboard;
    if (!seller) return;
    
    const list = document.getElementById('seller-products-list');
    
    if (seller.products.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 20px;">Belum ada produk</p>';
        return;
    }
    
    list.innerHTML = seller.products.map(product => `
        <div class="seller-product-item">
            <div class="seller-product-img">
                <i class="fas fa-utensils"></i>
            </div>
            <div class="seller-product-info">
                <h5>${product.name}</h5>
                <span>${formatRupiah(product.price)}</span>
            </div>
            <button class="delete-product" onclick="deleteSellerProduct('${product.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
};

const toggleStoreStatus = () => {
    const seller = AppData.currentSellerDashboard;
    if (!seller) return;
    
    seller.status = document.getElementById('store-toggle').checked ? 'open' : 'closed';
    renderSellerDashboard();
    renderToko();
    showToast(`Toko sekarang ${seller.status === 'open' ? 'BUKA' : 'TUTUP'}`);
};

const addSellerProduct = () => {
    const seller = AppData.currentSellerDashboard;
    if (!seller) return;

    const user = AppData.currentUser;
    if (user && user.role === 'seller' && user.sellerId !== seller.id) {
        showToast('Anda hanya bisa menambahkan produk ke toko sendiri!', 'error');
        return;
    }
    
    const name = document.getElementById('new-product-name').value.trim();
    const price = parseInt(document.getElementById('new-product-price').value);
    const image = document.getElementById('new-product-image').value.trim();
    
    if (!name || !price) {
        showToast('Harap isi nama dan harga produk!', 'error');
        return;
    }
    
    const newId = 'p' + (Date.now());
    seller.products.push({
        id: newId,
        name: name,
        price: price,
        image: image || '',
        description: 'Produk baru'
    });
    
    document.getElementById('new-product-name').value = '';
    document.getElementById('new-product-price').value = '';
    document.getElementById('new-product-image').value = '';
    
    renderSellerProducts();
    renderToko();
    showToast('Produk berhasil ditambahkan!');
};

const deleteSellerProduct = (productId) => {
    const seller = AppData.currentSellerDashboard;
    if (!seller) return;
    
    seller.products = seller.products.filter(p => p.id !== productId);
    renderSellerProducts();
    renderToko();
    showToast('Produk dihapus');
};

const saveSellerSettings = () => {
    const seller = AppData.currentSellerDashboard;
    if (!seller) return;
    
    seller.whatsapp = document.getElementById('seller-whatsapp').value.trim();
    seller.description = document.getElementById('seller-desc').value.trim();
    
    renderToko();
    showToast('Pengaturan disimpan!');
};

const switchDashboardTab = (tabName) => {
    document.querySelectorAll('.dash-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `tab-${tabName}`);
    });
};

// ========================================
// MOBILE MENU
// ========================================
const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
};

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const handleNavbarScroll = () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(19, 19, 31, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--surface)';
        navbar.style.backdropFilter = 'none';
    }
};

// ========================================
// NAV LINK ACTIVE STATE
// ========================================
const updateActiveNav = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    renderToko();
    initCountdown();
    
    // FIXED: Smooth scroll for all internal anchor links + close mobile menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('mobile-menu').classList.remove('active');
            }
        });
    });
    
    // Login modal events
    document.getElementById('login-nav-btn').addEventListener('click', () => toggleLoginModal(true));
    document.getElementById('mobile-login-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('active');
        toggleLoginModal(true);
    });
    document.getElementById('close-login-modal').addEventListener('click', () => toggleLoginModal(false));
    document.getElementById('login-backdrop').addEventListener('click', () => toggleLoginModal(false));
    document.getElementById('do-login-btn').addEventListener('click', handleLogin);
    document.getElementById('toggle-pass-btn').addEventListener('click', togglePassword);
    
    // Login tabs
    document.querySelectorAll('.login-tab').forEach(tab => {
        tab.addEventListener('click', () => switchLoginTab(tab.dataset.tab));
    });
    
    // Cart events
    document.getElementById('cart-btn').addEventListener('click', () => toggleCart(true));
    document.getElementById('close-cart').addEventListener('click', () => toggleCart(false));
    document.getElementById('cart-overlay').addEventListener('click', () => toggleCart(false));
    
    // Checkout events
    document.getElementById('checkout-btn').addEventListener('click', () => {
        toggleCart(false);
        setTimeout(() => toggleCheckout(true), 300);
    });
    document.getElementById('close-checkout').addEventListener('click', () => toggleCheckout(false));
    document.getElementById('cancel-checkout').addEventListener('click', () => toggleCheckout(false));
    document.getElementById('confirm-order').addEventListener('click', confirmOrder);
    
    // Payment category tabs
    document.querySelectorAll('.pay-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => switchPaymentCategory(btn.dataset.cat));
    });
    
    // Pickup method
    document.querySelectorAll('input[name="pickup-method"]').forEach(radio => {
        radio.addEventListener('change', handlePickupChange);
    });
    
    // Menu navigation
    document.getElementById('back-to-toko').addEventListener('click', backToToko);
    
    // Seller dashboard
    // FIXED: removed e.preventDefault() because elements are now <button>, not <a>
    document.getElementById('footer-seller-login').addEventListener('click', () => {
        toggleSellerModal(true);
    });
    document.getElementById('footer-seller-register').addEventListener('click', () => {
        toggleSellerModal(true);
    });
    document.getElementById('close-seller').addEventListener('click', () => toggleSellerModal(false));
    document.getElementById('seller-login-btn').addEventListener('click', sellerLogin);
    document.getElementById('store-toggle').addEventListener('change', toggleStoreStatus);
    document.getElementById('add-product-btn').addEventListener('click', addSellerProduct);
    document.getElementById('save-settings-btn').addEventListener('click', saveSellerSettings);
    document.getElementById('dashboard-logout-btn').addEventListener('click', () => {
        logout();
        toggleSellerModal(false);
    });
    
    // Dashboard tabs
    document.querySelectorAll('.dash-tab').forEach(tab => {
        tab.addEventListener('click', () => switchDashboardTab(tab.dataset.tab));
    });
    
    // Mobile menu
    document.getElementById('menu-toggle').addEventListener('click', toggleMobileMenu);
    
    // FIXED: Close mobile menu when clicking nav links, but don't break login button
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't close if clicking the login button (it has its own handler)
            if (link.id === 'mobile-login-btn') return;
            document.getElementById('mobile-menu').classList.remove('active');
        });
    });
    
    // Scroll events
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        updateActiveNav();
    });
    
    // Close modals on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleCart(false);
            toggleCheckout(false);
            toggleSellerModal(false);
            toggleLoginModal(false);
        }
    });
    
    // GSAP ScrollTrigger for sections
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section.querySelectorAll('.section-header'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
});

// ========================================
// HOVER ANIMATIONS (GSAP Micro)
// ========================================
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.toko-card')) {
        const card = e.target.closest('.toko-card');
        gsap.to(card, { y: -4, x: -4, duration: 0.2, ease: 'power2.out' });
    }
    if (e.target.closest('.menu-card')) {
        const card = e.target.closest('.menu-card');
        gsap.to(card, { y: -4, x: -4, duration: 0.2, ease: 'power2.out' });
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.toko-card')) {
        const card = e.target.closest('.toko-card');
        gsap.to(card, { y: 0, x: 0, duration: 0.2, ease: 'power2.out' });
    }
    if (e.target.closest('.menu-card')) {
        const card = e.target.closest('.menu-card');
        gsap.to(card, { y: 0, x: 0, duration: 0.2, ease: 'power2.out' });
    }
});