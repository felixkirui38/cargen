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

        { name: 'Piaggio', image: `${IMG}cat-automotive.png` },

        { name: 'TVS', image: `${IMG}cat-automotive.png` },

        { name: 'MRF', image: `${IMG}sub-tire.png` },

        { name: 'Motorola', image: `${IMG}sub-oil.png` },

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

        { name: 'Ace', image: `${IMG}cat-construction.png` },

      ],

    },

    {

      name: 'Gardening & Lawn',

      icon: 'fa-leaf',

      image: `${IMG}cat-garden.png`,

      subcategories: [

        { name: 'Lawnmowers', image: `${IMG}cat-garden.png` },

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

      image: `${IMG}cat-generators.png`,

      subcategories: [

        { name: 'Cummins', image: `${IMG}cat-generators.png` },

        { name: 'Briggs & Stratton', image: `${IMG}cat-generators.png` },

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



  const brands = [

    'PIAGGIO', 'TVS', 'MRF', 'KUBOTA', 'CUMMINS', 'GARMIN', 'ELECTROLUX',

    'BRIGGS & STRATTON', 'DEVELON', 'TOYOTA', 'MOTOROLA', 'ACE',

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



    if (toggle && nav) {

      toggle.addEventListener('click', () => {

        nav.classList.toggle('mobile-open');

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



  function initCategoryFlips() {

    document.addEventListener('click', (e) => {

      const card = e.target.closest('.cat-flip-card');

      if (!card || !('ontouchstart' in window)) return;



      document.querySelectorAll('.cat-flip-card').forEach((c) => {

        if (c !== card) c.classList.remove('flipped');

      });

      card.classList.toggle('flipped');

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

      { title: 'Our Partners', type: 'Page', href: '#brands', keywords: 'brands partners manufacturers', icon: 'fa-handshake' },

      { title: 'News & Updates', type: 'Page', href: '#news', keywords: 'news press releases media updates', icon: 'fa-newspaper' },

      { title: 'Careers', type: 'Page', href: '#careers', keywords: 'careers jobs employment hiring work', icon: 'fa-briefcase' },

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



  function init() {

    renderCategories();

    renderBrands();

    renderTestimonials();

    renderBlog();

    initMobile();

    initSearch();

    initSliders();

    initStickyHeader();

    initCounters();

    initReveal();

    initCategoryFlips();

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', init);

  } else {

    init();

  }

})();


