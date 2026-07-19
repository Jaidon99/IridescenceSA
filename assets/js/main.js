/**
* Template Name: Clinic
* Template URL: https://bootstrapmade.com/clinic-bootstrap-template/
* Updated: Jul 23 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Iridescence chatbot
   */
  const chatbotBtn = document.getElementById('chatbotBtn');
  const chatbotPanel = document.getElementById('chatbotPanel');
  const chatCloseBtn = document.getElementById('chatCloseBtn');
  const chatInput = document.getElementById('chatInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const chatMessages = document.getElementById('chatMessages');

  if (chatbotBtn && chatbotPanel && chatCloseBtn && chatInput && chatSendBtn && chatMessages) {
    const chatResponses = {
      company: {
        keywords: ['company', 'iridescence', 'about', 'who are', 'what is', 'tell me'],
        response: 'Iridescence is a premium polarized light therapy clinic in South Africa. We specialize in non-invasive treatments for injury recovery, chronic pain, and tissue healing, combining advanced photobiomodulation technology with personalized care. Our mission is to help you heal deeper and recover faster, without surgery or medication.'
      },
      services: {
        keywords: ['service', 'treatment', 'therapy', 'light', 'offer', 'what do', 'treat', 'help with'],
        response: 'We offer four main treatments:<br><br><strong>Red Light (620-700nm)</strong> - skin, wound and scar healing<br><strong>Near-Infrared (700-850nm)</strong> - deep muscle and joint recovery<br><strong>Blue Light (400-500nm)</strong> - surface skin conditions<br><strong>Polarized Full-Spectrum</strong> - comprehensive multi-depth treatment<br><br>Not sure which is right for you? Book a free consultation and we will assess your needs.'
      },
      quote: {
        keywords: ['quote', 'price', 'cost', 'pricing', 'rate', 'how much', 'payment', 'fees', 'charge'],
        response: 'Pricing is personalized based on your condition, the number of sessions needed, and the treatment area. To get an accurate quotation:<br><br><strong>Fill out our Contact Form</strong><br>Email us at hello@iridescence.co.za<br>WhatsApp us for a quick chat<br><br>We will get back to you within 24 hours with a tailored plan and pricing.'
      },
      articles: {
        keywords: ['article', 'research', 'study', 'evidence', 'science', 'proof', 'read', 'learn', 'blog'],
        response: 'Explore our Research section for peer-reviewed evidence, including LED wound healing studies, photobiomodulation in sports medicine, NIR therapy for chronic pain, and polarized light tissue repair research.'
      },
      booking: {
        keywords: ['book', 'appointment', 'session', 'schedule', 'consult', 'visit', 'come in'],
        response: 'Ready to book? Fill out the contact form, email hello@iridescence.co.za, or WhatsApp us for quick scheduling. Your first appointment starts with a free assessment to match you with the right treatment programme.'
      },
      hours: {
        keywords: ['hour', 'open', 'time', 'when', 'monday', 'saturday', 'weekend', 'closed'],
        response: '<strong>Opening Hours:</strong><br>Mon-Fri: 08:00-17:00<br>Saturday: 09:00-13:00<br>Sunday: Closed<br><br>We recommend booking in advance as appointment slots fill quickly.'
      },
      location: {
        keywords: ['where', 'location', 'address', 'find', 'directions', 'map', 'clinic', 'south africa'],
        response: 'Our clinic is at <strong>32 Blouberg Street, Noordheuwel</strong>, inside the Jubilado Retirement Village, Krugersdorp. You can also WhatsApp us for parking info and transport options.'
      },
      faq: {
        keywords: ['faq', 'question', 'safe', 'hurt', 'pain', 'downtime', 'sessions', 'how long', 'wear'],
        response: 'Great question. Head to our FAQs page for answers about safety, session experience, number of sessions needed, and what to wear.'
      },
      default: {
        response: 'Thanks for your message. I am best at answering questions about our services, treatments, pricing, and how light therapy works. You can also email hello@iridescence.co.za, WhatsApp us directly, or fill out the contact form.'
      }
    };

    function findChatResponse(input) {
      const lower = input.toLowerCase();
      for (const [key, data] of Object.entries(chatResponses)) {
        if (key === 'default') continue;
        if (data.keywords && data.keywords.some((kw) => lower.includes(kw))) return data.response;
      }
      return chatResponses.default.response;
    }

    function addChatMessage(text, type = 'bot') {
      const msg = document.createElement('div');
      msg.className = `chat-msg ${type}`;
      msg.innerHTML = text;
      chatMessages.appendChild(msg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function sendChatMessage(text) {
      if (!text.trim()) return;
      addChatMessage(text, 'user');
      chatInput.value = '';
      setTimeout(() => addChatMessage(findChatResponse(text), 'bot'), 600);
    }

    function openChatbot() {
      chatbotPanel.classList.add('is-open');
      chatbotBtn.classList.add('is-open');
      chatbotBtn.setAttribute('aria-label', 'Close chat assistant');
      setTimeout(() => chatInput.focus(), 300);
    }

    function closeChatbot() {
      chatbotPanel.classList.remove('is-open');
      chatbotBtn.classList.remove('is-open');
      chatbotBtn.setAttribute('aria-label', 'Open chat assistant');
    }

    chatbotBtn.addEventListener('click', () => {
      chatbotPanel.classList.contains('is-open') ? closeChatbot() : openChatbot();
    });
    chatCloseBtn.addEventListener('click', closeChatbot);
    chatSendBtn.addEventListener('click', () => sendChatMessage(chatInput.value));
    chatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') sendChatMessage(chatInput.value);
    });

    document.querySelectorAll('.chat-quick-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const topic = btn.dataset.topic;
        const topicLabels = {
          company: 'Tell me about Iridescence',
          services: 'What services do you offer?',
          quote: 'How do I get a quote?',
          articles: 'I want to read articles'
        };
        addChatMessage(topicLabels[topic] || btn.textContent, 'user');
        setTimeout(() => {
          const response = chatResponses[topic] ? chatResponses[topic].response : chatResponses.default.response;
          addChatMessage(response, 'bot');
        }, 500);
      });
    });
  }

})();
