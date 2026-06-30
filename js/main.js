/**

 * CARGEN — Corporate Website

 */



(function () {

  'use strict';



  const IMG = 'images/site/';



  const categories = [

    {

      name: 'Automotive',

      icon: 'fa-car',

      image: `${IMG}cat-automotive.png`,

      subcategories: [

        { name: 'Piaggio', image: 'images/products/piaggio.png' },

        { name: 'TVS', image: `${IMG}cat-automotive.png` },

        { name: 'MRF', image: `${IMG}sub-tire.png` },

        { name: 'Motorol', image: `${IMG}sub-oil.png` },

      ],

    },

    {

      name: 'Farm Equipment',

      icon: 'fa-tractor',

      image: `${IMG}cat-farm.png`,

      subcategories: [

        { name: 'Kubota', image: `${IMG}cat-farm.png` },

      ],

    },

    {

      name: 'Construction Equipment',

      icon: 'fa-truck-pickup',

      image: `${IMG}cat-construction.png`,

      subcategories: [

        { name: 'Develon', image: `${IMG}cat-construction.png` },

        { name: 'Ace', image: 'images/products/ace-f150.png' },

      ],

    },

    {

      name: 'Gardening & Lawn',

      icon: 'fa-leaf',

      image: `${IMG}cat-garden.png`,

      subcategories: [

        { name: 'Lawnmowers', image: 'images/products/lawnmower.png' },

        { name: 'Water Pumps', image: `${IMG}sub-water-pump.png` },

      ],

    },

    {

      name: 'Garmin',

      icon: 'fa-location-dot',

      image: `${IMG}cat-garmin.png`,

      subcategories: [

        { name: 'Fitness Watches', image: `${IMG}cat-garmin.png` },

        { name: 'Automotives', image: `${IMG}sub-gps-handheld.png` },

      ],

    },

    {

      name: 'Laundry Equipment',

      icon: 'fa-shirt',

      image: `${IMG}cat-laundry.png`,

      subcategories: [

        { name: 'Electrolux', image: `${IMG}cat-laundry.png` },

      ],

    },

    {

      name: 'Power Generators',

      icon: 'fa-bolt',

      image: `${IMG}cat-generators.png?v=3`,

      subcategories: [

        { name: 'Cummins', image: 'images/products/cummins.png?v=2' },

        { name: 'Briggs & Stratton', image: 'images/products/briggs-stratton.png' },

      ],

    },

    {

      name: 'Industrial Equipment',

      icon: 'fa-industry',

      image: `${IMG}cat-industrial.png`,

      subcategories: [

        { name: 'IR', image: `${IMG}cat-industrial.png` },

        { name: 'Toyota', image: `${IMG}toyota-forklift.png?v=2` },

      ],

    },

  ];



  const PROD = 'images/products/';



  const products = {

    new: [

      { title: 'TVS HLX 150 Motorcycle', category: 'Automotive', price: 1899.00, oldPrice: null, rating: 5, reviews: 24, image: `${PROD}tvs-hlx-150.png`, badge: 'new' },

      { title: 'MRF Nylo Grip Tyre', category: 'Automotive', price: 89.99, oldPrice: 109.99, rating: 5, reviews: 18, image: `${PROD}mrf-tire.png`, badge: 'sale' },

      { title: 'Motorol Synthetic Engine Oil 5W-30', category: 'Lubricants', price: 42.99, oldPrice: 59.99, rating: 5, reviews: 31, image: `${PROD}motorol-oil.png`, badge: 'sale' },

      { title: 'Garmin Edge 1050 GPS Computer', category: 'Garmin', price: 649.00, oldPrice: null, rating: 5, reviews: 12, image: `${PROD}garmin-edge-1050.png`, badge: 'new' },

      { title: 'Snapper Self-Propelled Lawnmower', category: 'Garden', price: 1299.00, oldPrice: null, rating: 4, reviews: 9, image: `${PROD}snapper-lawnmower.png`, badge: null },

      { title: 'Submersible Water Pump 1HP', category: 'Garden', price: 189.00, oldPrice: 229.00, rating: 5, reviews: 15, image: `${PROD}water-pump.png`, badge: 'sale' },

      { title: 'Ace F150 Backhoe Loader', category: 'Construction', price: 24999.00, oldPrice: null, rating: 5, reviews: 6, image: `${PROD}ace-f150.png`, badge: 'new' },

      { title: 'Ingersoll Rand Air Compressor', category: 'Industrial', price: 3499.00, oldPrice: 3999.00, rating: 5, reviews: 11, image: `${PROD}ir-compressor.png`, badge: 'sale' },

    ],

    bestseller: [

      { title: 'TVS HLX 150 Motorcycle', category: 'Automotive', price: 1899.00, oldPrice: null, rating: 5, reviews: 89, image: `${PROD}tvs-hlx-150.png`, badge: null },

      { title: 'MRF Nylo Grip Tyre', category: 'Automotive', price: 89.99, oldPrice: 109.99, rating: 5, reviews: 67, image: `${PROD}mrf-tire.png`, badge: 'sale' },

      { title: 'Motorol Synthetic Engine Oil 5W-30', category: 'Lubricants', price: 42.99, oldPrice: 59.99, rating: 5, reviews: 112, image: `${PROD}motorol-oil.png`, badge: 'sale' },

      { title: 'Garmin Montana 700 GPS', category: 'Garmin', price: 549.00, oldPrice: null, rating: 5, reviews: 38, image: `${PROD}garmin-montana.png`, badge: null },

      { title: 'Snapper Self-Propelled Lawnmower', category: 'Garden', price: 1299.00, oldPrice: null, rating: 4, reviews: 22, image: `${PROD}snapper-lawnmower.png`, badge: null },

      { title: 'Submersible Water Pump 1HP', category: 'Garden', price: 189.00, oldPrice: 229.00, rating: 5, reviews: 41, image: `${PROD}water-pump.png`, badge: 'sale' },

      { title: 'Toyota 8FG25 Forklift', category: 'Industrial', price: 18500.00, oldPrice: null, rating: 5, reviews: 14, image: `${IMG}toyota-forklift.png?v=2`, badge: 'new' },

      { title: 'Ingersoll Rand Air Compressor', category: 'Industrial', price: 3499.00, oldPrice: 3999.00, rating: 5, reviews: 52, image: `${PROD}ir-compressor.png`, badge: 'sale' },

    ],

    featured: [

      { title: 'Garmin Edge 1050 GPS Computer', category: 'Garmin', price: 649.00, oldPrice: 699.00, rating: 5, reviews: 28, image: `${PROD}garmin-edge-1050.png`, badge: 'sale' },

      { title: 'Garmin Montana 700 GPS', category: 'Garmin', price: 549.00, oldPrice: null, rating: 5, reviews: 36, image: `${PROD}garmin-montana.png`, badge: 'new' },

      { title: 'Ace F150 Backhoe Loader', category: 'Construction', price: 24999.00, oldPrice: null, rating: 5, reviews: 8, image: `${PROD}ace-f150.png`, badge: null },

      { title: 'Toyota 8FG25 Forklift', category: 'Industrial', price: 18500.00, oldPrice: 19999.00, rating: 5, reviews: 19, image: `${IMG}toyota-forklift.png?v=2`, badge: 'sale' },

      { title: 'TVS HLX 150 Motorcycle', category: 'Automotive', price: 1899.00, oldPrice: null, rating: 5, reviews: 74, image: `${PROD}tvs-hlx-150.png`, badge: null },

      { title: 'MRF Nylo Grip Tyre', category: 'Automotive', price: 89.99, oldPrice: null, rating: 4, reviews: 63, image: `${PROD}mrf-tire.png`, badge: null },

      { title: 'Motorol Synthetic Engine Oil 5W-30', category: 'Lubricants', price: 42.99, oldPrice: 54.99, rating: 5, reviews: 95, image: `${PROD}motorol-oil.png`, badge: 'sale' },

      { title: 'Ingersoll Rand Air Compressor', category: 'Industrial', price: 3499.00, oldPrice: null, rating: 5, reviews: 29, image: `${PROD}ir-compressor.png`, badge: null },

    ],

  };



  const brands = [

    'PIAGGIO', 'TVS', 'MRF', 'KUBOTA', 'CUMMINS', 'GARMIN', 'ELECTROLUX',

    'BRIGGS & STRATTON', 'DEVELON', 'TOYOTA', 'MOTOROL', 'ACE',

    'PIAGGIO', 'TVS', 'MRF', 'KUBOTA', 'CUMMINS', 'GARMIN',

  ];



  const testimonials = [

    { name: 'James Mitchell', role: 'Mitchell Auto Works', text: 'Cargen has been our primary distribution partner for over a decade. Reliability and product range are unmatched.', photo: `${IMG}testimonial-1.png` },

    { name: 'Sarah Chen', role: 'FleetPro Logistics', text: 'Managing 200+ vehicles requires a dependable partner. Cargen consistently delivers quality solutions on time.', photo: `${IMG}testimonial-2.png` },

    { name: 'David Okonkwo', role: 'Precision Motors Ltd', text: 'Exceptional technical support and consultation. They understand our business requirements deeply.', photo: `${IMG}testimonial-3.png` },

    { name: 'Elena Rodriguez', role: 'Regional Distribution Co.', text: 'Cargen\'s global brand portfolio and corporate service gives us a significant competitive advantage.', photo: `${IMG}testimonial-4.png` },

  ];



  const blogPosts = [

    { date: 'Jun 15, 2026', title: 'Cargen Expands Partnership With Leading Generator Manufacturer', excerpt: 'Strengthening our power solutions division with new authorized distribution agreement.', image: `${IMG}cat-generators.png` },

    { date: 'Jun 08, 2026', title: 'Corporate Sustainability Initiative Launched', excerpt: 'Our commitment to responsible distribution and environmental stewardship across all divisions.', image: `${IMG}cat-garden.png` },

    { date: 'May 28, 2026', title: 'New Regional Distribution Center Opens', excerpt: 'Strategic expansion strengthens our nationwide supply chain for corporate clients.', image: `${IMG}about-warehouse.png` },

  ];



  function renderStars(rating) {

    let html = '';

    for (let i = 1; i <= 5; i++) {

      html += `<i class="fa${i <= rating ? 's' : 'r'} fa-star"></i>`;

    }

    return html;

  }



  function renderCategories() {

    const grid = document.getElementById('categories-grid');

    if (!grid) return;

    grid.innerHTML = categories.map((c) => `

      <div class="cat-flip-card">

        <div class="cat-flip-inner">

          <div class="cat-flip-front">

            <img src="${c.image}" alt="" class="cat-flip-bg" loading="lazy" aria-hidden="true" onerror="this.style.display='none'" />

            <div class="cat-flip-overlay"></div>

            <div class="cat-flip-content">

              <h4>${c.name}</h4>

              <span class="cat-flip-hint"><i class="fas fa-arrow-right"></i> Hover to explore</span>

            </div>

            <i class="fas ${c.icon} cat-flip-fallback-icon" aria-hidden="true"></i>

          </div>

          <div class="cat-flip-back">

            <h5 class="cat-flip-back-title">${c.name}</h5>

            <ul class="cat-sub-list">

              ${c.subcategories.map((sub) => `

                <li>

                  <a href="#">

                    <img src="${sub.image}" alt="${sub.name}" class="product-shot" loading="lazy" />

                    <span>${sub.name}</span>

                  </a>

                </li>

              `).join('')}

            </ul>

            <a href="#contact" class="cat-flip-more">Shop Now <i class="fas fa-arrow-right"></i></a>

          </div>

        </div>

      </div>

    `).join('');

  }



  function renderProductCard(p) {

    const badgeHtml = p.badge

      ? `<span class="badge-${p.badge}">${p.badge === 'sale' ? 'Sale' : 'New'}</span>`

      : '';

    const oldPriceHtml = p.oldPrice

      ? `<span class="price-old">KES ${p.oldPrice.toLocaleString('en-KE', { minimumFractionDigits: 2 })}</span>`

      : '';



    return `

      <div class="product-card">

        <div class="product-badges">${badgeHtml}</div>

        <div class="product-actions">

          <button type="button" title="Wishlist"><i class="far fa-heart"></i></button>

          <button type="button" title="Quick View"><i class="far fa-eye"></i></button>

          <button type="button" title="Compare"><i class="fas fa-sync-alt"></i></button>

        </div>

        <a href="#contact" class="product-image">

          <img src="${p.image}" alt="${p.title}" class="product-shot" loading="lazy" />

        </a>

        <div class="product-info">

          <div class="product-category">${p.category}</div>

          <a href="#contact" class="product-title">${p.title}</a>

          <div class="product-rating">

            ${renderStars(p.rating)}

            <span>(${p.reviews})</span>

          </div>

          <div class="product-price">

            <span class="price-current">KES ${p.price.toLocaleString('en-KE', { minimumFractionDigits: 2 })}</span>

            ${oldPriceHtml}

          </div>

          <div class="product-cart">

            <button type="button"><i class="fas fa-shopping-cart"></i> Add To Cart</button>

          </div>

        </div>

      </div>

    `;

  }



  function renderProducts(tab) {

    const grid = document.getElementById('products-grid');

    if (!grid) return;

    const items = products[tab] || products.new;

    grid.innerHTML = items.map(renderProductCard).join('');

  }



  function renderBrands() {

    const wrapper = document.getElementById('brands-wrapper');

    if (!wrapper) return;

    wrapper.innerHTML = brands.map((b) => `

      <div class="swiper-slide">

        <div class="brand-slide"><span>${b}</span></div>

      </div>

    `).join('');

  }



  function renderTestimonials() {

    const wrapper = document.getElementById('testimonials-wrapper');

    if (!wrapper) return;

    wrapper.innerHTML = testimonials.map((t) => `

      <div class="swiper-slide">

        <div class="testimonial-card">

          <div class="stars">${renderStars(5)}</div>

          <p>"${t.text}"</p>

          <div class="testimonial-author">

            <img src="${t.photo}" alt="${t.name}" loading="lazy" />

            <div>

              <strong>${t.name}</strong>

              <span>${t.role}</span>

            </div>

          </div>

        </div>

      </div>

    `).join('');

  }



  function renderBlog() {

    const grid = document.getElementById('blog-grid');

    if (!grid) return;

    grid.innerHTML = blogPosts.map((b) => {

      const isScene = b.image.includes('about-warehouse');

      const frameClass = isScene ? 'blog-image scene-frame' : 'blog-image product-frame';

      return `

      <article class="blog-card">

        <a href="#" class="${frameClass}">

          <img src="${b.image}" alt="${b.title}" class="${isScene ? 'scene-shot' : 'product-shot'}" loading="lazy" />

          <span class="blog-date">${b.date}</span>

        </a>

        <div class="blog-body">

          <a href="#"><h3>${b.title}</h3></a>

          <p>${b.excerpt}</p>

          <a href="#" class="blog-read">Read More <i class="fas fa-arrow-right"></i></a>

        </div>

      </article>

    `;

    }).join('');

  }



  function initMobile() {

    const toggle = document.getElementById('mobile-toggle');

    const nav = document.getElementById('main-nav');

    const megaTrigger = document.getElementById('mega-trigger');

    const mainHeader = document.querySelector('.main-header');



    function setNavOpen(open) {

      nav?.classList.toggle('mobile-open', open);

      document.body.classList.toggle('nav-locked', open);

      if (!open) {

        megaTrigger?.classList.remove('open');

        document.querySelectorAll('.nav-links .nav-dropdown.open').forEach((item) => {

          item.classList.remove('open');

        });

      }

    }



    if (toggle && nav) {

      toggle.addEventListener('click', () => {

        setNavOpen(!nav.classList.contains('mobile-open'));

      });

    }



    if (megaTrigger) {

      megaTrigger.addEventListener('click', (e) => {

        if (window.innerWidth < 992) {

          e.stopPropagation();

          megaTrigger.classList.toggle('open');

        }

      });

    }



    window.addEventListener('resize', () => {

      if (window.innerWidth >= 992) {

        setNavOpen(false);

        mainHeader?.classList.remove('search-open');

        document.getElementById('search-toggle')?.classList.remove('active');

      }

    }, { passive: true });



    document.querySelectorAll('.nav-links .nav-dropdown > a').forEach((link) => {

      link.addEventListener('click', (e) => {

        if (window.innerWidth < 992) {

          e.preventDefault();

          const parent = link.parentElement;

          const wasOpen = parent.classList.contains('open');

          document.querySelectorAll('.nav-links .nav-dropdown.open').forEach((item) => {

            item.classList.remove('open');

          });

          if (!wasOpen) parent.classList.add('open');

        }

      });

    });



    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

      anchor.addEventListener('click', (e) => {

        const href = anchor.getAttribute('href');

        if (href === '#') return;

        const target = document.querySelector(href);

        if (target) {

          e.preventDefault();

          nav.classList.remove('mobile-open');

          document.body.classList.remove('nav-locked');

          megaTrigger?.classList.remove('open');

          document.querySelectorAll('.nav-links .nav-dropdown.open').forEach((item) => {

            item.classList.remove('open');

          });

          target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        }

      });

    });

  }



  function initSliders() {

    new Swiper('.hero-swiper', {

      loop: true,

      autoplay: { delay: 6000, disableOnInteraction: false },

      pagination: { el: '.hero-pagination', clickable: true },

      navigation: { nextEl: '.hero-next', prevEl: '.hero-prev' },

      effect: 'fade',

      fadeEffect: { crossFade: true },

    });



    new Swiper('.brands-swiper', {

      slidesPerView: 2,

      spaceBetween: 15,

      loop: true,

      autoplay: { delay: 2500, disableOnInteraction: false },

      breakpoints: {

        480: { slidesPerView: 3 },

        768: { slidesPerView: 4 },

        992: { slidesPerView: 6 },

      },

    });



    if (document.querySelector('.testimonials-swiper')) {
      new Swiper('.testimonials-swiper', {

        slidesPerView: 1,

        spaceBetween: 20,

        loop: true,

        autoplay: { delay: 5000, disableOnInteraction: false },

        pagination: { el: '.testimonials-pagination', clickable: true },

        breakpoints: {

          768: { slidesPerView: 2 },

          992: { slidesPerView: 3 },

        },

      });
    }

  }



  function initCategoryFlips() {

    const isFlatCard = () => window.matchMedia('(max-width: 991px), (hover: none)').matches;



    document.querySelectorAll('.cat-flip-card').forEach((card) => {

      const list = card.querySelector('.cat-sub-list');



      if (list) {

        ['touchstart', 'touchmove', 'touchend'].forEach((evt) => {

          list.addEventListener(evt, (e) => {

            e.stopPropagation();

          }, { passive: true });

        });

      }



      card.addEventListener('click', (e) => {

        if (e.target.closest('.cat-sub-list') || e.target.closest('.cat-flip-more')) return;



        if (e.target.closest('.cat-flip-back-title')) {

          card.classList.remove('flipped');

          return;

        }



        if (isFlatCard()) {

          if (e.target.closest('.cat-flip-back')) return;

          if (!e.target.closest('.cat-flip-front')) return;



          document.querySelectorAll('.cat-flip-card').forEach((c) => {

            if (c !== card) c.classList.remove('flipped');

          });

          card.classList.add('flipped');

          return;

        }



        if (!('ontouchstart' in window)) return;

        if (e.target.closest('.cat-flip-back')) return;



        document.querySelectorAll('.cat-flip-card').forEach((c) => {

          if (c !== card) c.classList.remove('flipped');

        });

        card.classList.toggle('flipped');

      });

    });

  }



  function initStickyHeader() {

    const header = document.getElementById('site-header');

    if (!header) return;



    window.addEventListener('scroll', () => {

      header.classList.toggle('scrolled', window.scrollY > 60);

    }, { passive: true });

  }



  function initReveal() {

    document.querySelectorAll('.section, .bento-card, .why-item, .about-strip-content, .about-strip-image, .contact-info-block, .contact-form-block, .stat-item').forEach((el) => {

      if (!el.classList.contains('reveal')) el.classList.add('reveal');

    });



    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

          }

        });

      },

      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }

    );



    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));



    document.querySelectorAll('.bento-section .bento-card').forEach((card, i) => {

      card.style.transitionDelay = `${i * 0.1}s`;

    });



    document.querySelectorAll('.why-item').forEach((item, i) => {

      item.style.transitionDelay = `${(i % 3) * 0.1 + Math.floor(i / 3) * 0.15}s`;

    });

  }



  function initCounters() {

    const counters = document.querySelectorAll('.stat-counter');

    if (!counters.length) return;



    function animateCounter(el) {

      const target = Number(el.dataset.target);

      const suffix = el.dataset.suffix || '';

      const duration = 2200;

      const start = performance.now();



      function step(now) {

        const progress = Math.min((now - start) / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);

        const value = Math.round(target * eased);

        el.textContent = value.toLocaleString() + suffix;

        if (progress < 1) requestAnimationFrame(step);

        else el.textContent = target.toLocaleString() + suffix;

      }



      requestAnimationFrame(step);

    }



    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

          }

        });

      },

      { threshold: 0.25 }

    );



    counters.forEach((el) => observer.observe(el));

  }



  function initSearch() {

    const form = document.getElementById('header-search');

    const input = document.getElementById('site-search');

    const results = document.getElementById('search-results');

    const searchToggle = document.getElementById('search-toggle');

    const mainHeader = document.querySelector('.main-header');



    if (!form || !input || !results) return;



    const pages = [

      { title: 'Home', type: 'Page', href: '#home', keywords: 'home welcome', icon: 'fa-house' },

      { title: 'About Us', type: 'Page', href: '#about', keywords: 'about who we are corporate history leadership partners', icon: 'fa-building' },

      { title: 'Shop By Category', type: 'Page', href: '#categories', keywords: 'categories products divisions browse shop', icon: 'fa-th-large' },

      { title: 'Our Products', type: 'Page', href: '#products', keywords: 'products shop online buy catalogue listings', icon: 'fa-box-open' },

      { title: 'Our Partners', type: 'Page', href: '#brands', keywords: 'brands partners manufacturers', icon: 'fa-handshake' },

      { title: 'News & Updates', type: 'Page', href: '#news', keywords: 'news press releases media updates', icon: 'fa-newspaper' },

      { title: 'Careers', type: 'Page', href: '#contact', keywords: 'careers jobs employment hiring work', icon: 'fa-briefcase' },

      { title: 'Branch Locations', type: 'Page', href: '#branches', keywords: 'branches locations map east africa network offices', icon: 'fa-map-location-dot' },

      { title: 'Contact Us', type: 'Page', href: '#contact', keywords: 'contact enquiry consultation branch locations speak expert', icon: 'fa-envelope' },

    ];



    const index = [...pages];



    categories.forEach((cat) => {

      index.push({

        title: cat.name,

        type: 'Category',

        href: '#categories',

        keywords: cat.name.toLowerCase(),

        icon: cat.icon,

      });

      cat.subcategories.forEach((sub) => {

        index.push({

          title: sub.name,

          type: 'Product',

          href: '#categories',

          keywords: `${sub.name} ${cat.name}`.toLowerCase(),

          icon: cat.icon,

        });

      });

    });



    Object.values(products).flat().forEach((product) => {

      index.push({

        title: product.title,

        type: 'Product',

        href: '#products',

        keywords: `${product.title} ${product.category}`.toLowerCase(),

        icon: 'fa-box',

      });

    });



    [...new Set(brands)].forEach((brand) => {

      index.push({

        title: brand,

        type: 'Brand',

        href: '#brands',

        keywords: brand.toLowerCase(),

        icon: 'fa-tag',

      });

    });



    blogPosts.forEach((post) => {

      index.push({

        title: post.title,

        type: 'News',

        href: '#news',

        keywords: `${post.title} ${post.excerpt}`.toLowerCase(),

        icon: 'fa-newspaper',

      });

    });



    function runSearch(query) {

      const q = query.trim().toLowerCase();

      if (!q) return [];

      return index.filter((item) => {

        const haystack = `${item.title} ${item.keywords} ${item.type}`.toLowerCase();

        return haystack.includes(q);

      }).slice(0, 8);

    }



    function renderResults(matches) {

      if (!matches.length) {

        results.innerHTML = '<div class="search-no-results">No results found</div>';

        results.hidden = false;

        return;

      }

      results.innerHTML = matches.map((item) => `

        <a href="${item.href}" class="search-result-item">

          <i class="fas ${item.icon}"></i>

          <div class="search-result-text">

            <strong>${item.title}</strong>

            <span>${item.type}</span>

          </div>

        </a>

      `).join('');

      results.hidden = false;

    }



    function closeResults() {

      results.hidden = true;

      results.innerHTML = '';

    }



    function goToResult(href) {

      closeResults();

      mainHeader?.classList.remove('search-open');

      searchToggle?.classList.remove('active');

      document.getElementById('main-nav')?.classList.remove('mobile-open');

      const target = document.querySelector(href);

      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }



    input.addEventListener('input', () => {

      const matches = runSearch(input.value);

      if (input.value.trim()) renderResults(matches);

      else closeResults();

    });



    form.addEventListener('submit', (e) => {

      e.preventDefault();

      const matches = runSearch(input.value);

      if (matches.length) goToResult(matches[0].href);

      else if (input.value.trim()) renderResults([]);

    });



    results.addEventListener('click', (e) => {

      const link = e.target.closest('.search-result-item');

      if (!link) return;

      e.preventDefault();

      goToResult(link.getAttribute('href'));

    });



    document.addEventListener('click', (e) => {

      if (!form.contains(e.target) && e.target !== searchToggle && !searchToggle?.contains(e.target)) {

        closeResults();

      }

    });



    document.addEventListener('keydown', (e) => {

      if (e.key === 'Escape') {

        closeResults();

        mainHeader?.classList.remove('search-open');

        searchToggle?.classList.remove('active');

        input.blur();

      }

    });



    if (searchToggle && mainHeader) {

      searchToggle.addEventListener('click', (e) => {

        e.stopPropagation();

        mainHeader.classList.toggle('search-open');

        searchToggle.classList.toggle('active');

        if (mainHeader.classList.contains('search-open')) {

          setTimeout(() => input.focus(), 100);

        } else {

          closeResults();

        }

      });

    }



    input.addEventListener('focus', () => {

      if (input.value.trim()) renderResults(runSearch(input.value));

    });

  }



  function initCountdown() {

    const end = new Date();

    end.setDate(end.getDate() + 7);



    function update() {

      const now = new Date();

      const diff = end - now;

      if (diff <= 0) return;



      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

      const mins = Math.floor((diff / (1000 * 60)) % 60);

      const secs = Math.floor((diff / 1000) % 60);



      const pad = (n) => String(n).padStart(2, '0');

      const el = (id) => document.getElementById(id);

      if (el('cd-days')) el('cd-days').textContent = pad(days);

      if (el('cd-hours')) el('cd-hours').textContent = pad(hours);

      if (el('cd-mins')) el('cd-mins').textContent = pad(mins);

      if (el('cd-secs')) el('cd-secs').textContent = pad(secs);

    }



    update();

    setInterval(update, 1000);

  }



  function initTabs() {

    const tabs = document.getElementById('product-tabs');

    if (!tabs) return;



    tabs.addEventListener('click', (e) => {

      const btn = e.target.closest('.tab-btn');

      if (!btn) return;



      tabs.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));

      btn.classList.add('active');

      renderProducts(btn.dataset.tab);

    });

  }



  function initBranchMap() {

    const mapEl = document.getElementById('branch-map');

    if (!mapEl || typeof L === 'undefined') return;



    const branches = [

      { name: 'Kigali, Rwanda', lat: -1.9441, lng: 30.0619 },

      { name: 'Kampala, Uganda', lat: 0.3476, lng: 32.5825 },

      { name: 'Lodwar, Kenya', lat: 3.1191, lng: 35.5973 },

      { name: 'Eldoret, Kenya', lat: 0.5143, lng: 35.2698 },

      { name: 'Nairobi, Kenya', lat: -1.2921, lng: 36.8219 },

      { name: 'Malindi, Kenya', lat: -3.2175, lng: 40.1169 },

      { name: 'Mombasa, Kenya', lat: -4.0435, lng: 39.6682 },

      { name: 'Arusha, Tanzania', lat: -3.3869, lng: 36.6830 },

      { name: 'Dar es Salaam, Tanzania', lat: -6.7924, lng: 39.2083 },

    ];



    const map = L.map(mapEl, {

      scrollWheelZoom: false,

      zoomControl: true,

    });



    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      maxZoom: 18,

      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',

    }).addTo(map);



    const icon = L.divIcon({

      className: 'branch-marker',

      html: '<span aria-hidden="true"></span>',

      iconSize: [26, 26],

      iconAnchor: [13, 26],

      popupAnchor: [0, -26],

    });



    const markers = branches.map((branch) => {

      const marker = L.marker([branch.lat, branch.lng], { icon }).addTo(map);

      marker.bindPopup(branch.name, { className: 'branch-popup' });

      return marker;

    });



    map.fitBounds(L.featureGroup(markers).getBounds().pad(0.12));



    const resizeMap = () => {

      map.invalidateSize();

      map.fitBounds(L.featureGroup(markers).getBounds().pad(0.12));

    };



    window.addEventListener('resize', resizeMap, { passive: true });

    window.addEventListener('orientationchange', () => {

      setTimeout(resizeMap, 200);

    });



    mapEl.addEventListener('mouseenter', () => { map.scrollWheelZoom.enable(); });

    mapEl.addEventListener('mouseleave', () => { map.scrollWheelZoom.disable(); });

    mapEl.addEventListener('focusin', () => { map.scrollWheelZoom.enable(); });

    mapEl.addEventListener('focusout', () => { map.scrollWheelZoom.disable(); });

  }



  function init() {

    renderCategories();

    renderProducts('new');

    renderBrands();

    renderTestimonials();

    renderBlog();

    initMobile();

    initSearch();

    initSliders();

    initStickyHeader();

    initCounters();

    initCountdown();

    initTabs();

    initReveal();

    initCategoryFlips();

    initBranchMap();

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', init);

  } else {

    init();

  }

})();


