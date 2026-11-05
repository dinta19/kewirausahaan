/**
 * ============================================================================
 * MAIN.JS — Landing Page Lanyard + Carabiner SI Telkom University Jakarta
 * Tim / Brand : Kelompok 5 "Minangkabau United"
 * Sistem UI   : design-taste-frontend (tasteskill 2.5)
 * ============================================================================
 * PETUNJUK KUSTOMISASI UNTUK PEMULA:
 * Anda cukup mengubah nilai di dalam objek CONFIG di bawah ini.
 * Seluruh teks harga, nomor WhatsApp, link Google Form, tanggal PO, dan
 * akun sosial media di halaman web akan otomatis menyesuaikan!
 * ============================================================================
 */

const CONFIG = {
  // 1. KONTAK WHATSAPP ADMIN
  // Gunakan format kode negara 62 tanpa tanda "+" atau spasi (contoh: "6281234567890")
  whatsappNumber: "6281228747771", // <-- [GANTI] Nomor WhatsApp Admin untuk link wa.me
  whatsappDisplay: "0812-2874-7771 (Admin Clipsi)", // <-- [GANTI] Tampilan nomor WA di footer
  defaultWaMessage: "Halo Admin, saya mau Pre-Order Lanyard + Carabiner SI dong",

  // 2. LINK FORM PRE-ORDER (GOOGLE FORM / LINKTREE)
  googleFormUrl: "https://forms.gle/ISI_LINK_GOOGLE_FORM_PO", // <-- [GANTI] Link Google Form Pre-Order

  // 3. HARGA PAKET PRODUK (PLACEHOLDER — GANTI SESUAI HARGA RESMI TIM)
  prices: {
    bundling: "Rp 25.000",       // <-- [GANTI] Harga Paket Bundling (Lanyard + Carabiner)
    bundlingStrike: "Rp 30.000", // <-- [GANTI] Harga normal jika beli terpisah
    lanyardOnly: "Rp 20.000",    // <-- [GANTI] Harga Lanyard Saja
    carabinerOnly: "Rp 10.000"   // <-- [GANTI] Harga Carabiner Saja
  },

  // 4. INFORMASI JADWAL PRE-ORDER, COD & GARANSI
  poCloseDate: "Segera Ditutup", // <-- [GANTI] Contoh: "25 November 2026"
  productionEstimate: "7–10 Hari Kerja",   // <-- [GANTI] Estimasi waktu produksi vendor
  codLocation: "Area Kampus Tel-U Jakarta & Market Day", // <-- [GANTI] Lokasi detail COD kampus
  dpPolicy: "Bisa DP atau Langsung Lunas via QRIS",      // <-- [GANTI] Ketentuan pembayaran DP
  warrantyClaimWindow: "Maksimal 2x24 Jam Sejak COD",    // <-- [GANTI] Batas klaim garansi tukar baru

  // 5. AKUN SOSIAL MEDIA RESMI TIM
  social: {
    instagramUrl: "https://instagram.com/ISI_USERNAME_IG", // <-- [GANTI] URL Instagram
    instagramHandle: "@minangkabau.united",                // <-- [GANTI] Username Instagram
    tiktokUrl: "https://tiktok.com/@ISI_USERNAME_TIKTOK",  // <-- [GANTI] URL TikTok
    tiktokHandle: "@minangkabau.united"                    // <-- [GANTI] Username TikTok
  },

  // 6. OPSIONAL: FOTO ASLI CARABINER (JIKA SUDAH TERSEDIA)
  // Saat ini memakai ilustrasi studio "assets/images/carabiner-placeholder.svg" karena foto carabiner menyusul.
  // Jika foto carabiner asli sudah ada, simpan ke "assets/images/carabiner.png" lalu ubah baris di bawah menjadi true:
  useRealCarabinerPhoto: false,
  carabinerPhotoPath: "assets/images/carabiner.png"
};

/* ============================================================================
   INISIALISASI HALAMAN (BEKERJA BERSAMA ASSETS/SYSTEM.JS & MOTION.JS)
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  applySiteConfig();
  initNavbarActiveState();
  initDesignFilterTabs();
  initTasteskillMotionFallbacks();
  initImageFallbacks();
  updateFooterYear();
  clearSystemPlaceholderGuards();
});

window.addEventListener("load", () => {
  clearSystemPlaceholderGuards();
});

/**
 * 1. Menerapkan seluruh nilai CONFIG ke elemen HTML secara otomatis
 */
function applySiteConfig() {
  const textBindings = {
    poCloseDate: CONFIG.poCloseDate,
    productionEstimate: CONFIG.productionEstimate,
    codLocation: CONFIG.codLocation,
    dpPolicy: CONFIG.dpPolicy,
    warrantyClaimWindow: CONFIG.warrantyClaimWindow,
    priceBundling: CONFIG.prices.bundling,
    priceBundlingStrike: CONFIG.prices.bundlingStrike,
    priceLanyard: CONFIG.prices.lanyardOnly,
    priceCarabiner: CONFIG.prices.carabinerOnly,
    whatsappDisplay: CONFIG.whatsappDisplay,
    instagramHandle: CONFIG.social.instagramHandle,
    tiktokHandle: CONFIG.social.tiktokHandle
  };

  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (key && Object.prototype.hasOwnProperty.call(textBindings, key)) {
      el.textContent = textBindings[key];
    }
  });

  // Format link WhatsApp otomatis: https://wa.me/<nomor>?text=<pesan terenkode>
  const cleanNumber = String(CONFIG.whatsappNumber).replace(/[^0-9]/g, "");
  document.querySelectorAll(".js-wa-order").forEach((link) => {
    const customMsg = link.getAttribute("data-wa-message") || CONFIG.defaultWaMessage;
    const encodedMsg = encodeURIComponent(customMsg);
    link.setAttribute("href", `https://wa.me/${cleanNumber}?text=${encodedMsg}`);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // Pasang link Google Form Pre-Order
  document.querySelectorAll(".js-gdrive-form").forEach((link) => {
    link.setAttribute("href", CONFIG.googleFormUrl);
  });

  // Pasang link Instagram & TikTok
  document.querySelectorAll(".js-ig-link").forEach((link) => {
    link.setAttribute("href", CONFIG.social.instagramUrl);
  });

  document.querySelectorAll(".js-tiktok-link").forEach((link) => {
    link.setAttribute("href", CONFIG.social.tiktokUrl);
  });

  // Ganti gambar carabiner jika foto asli sudah diaktifkan di CONFIG
  if (CONFIG.useRealCarabinerPhoto && CONFIG.carabinerPhotoPath) {
    document.querySelectorAll(".js-carabiner-img").forEach((img) => {
      img.setAttribute("src", CONFIG.carabinerPhotoPath);
      img.setAttribute("alt", "Foto Carabiner Serbaguna SI Telkom University Jakarta");
    });
  }
}

/**
 * 1b. Indikator Garis Bawah Otomatis pada Navbar Saat Masuk ke Section (Scroll-Spy)
 */
function initNavbarActiveState() {
  const navLinks = Array.from(document.querySelectorAll(".nav__links > .nav__item > .nav__link"));
  if (!navLinks.length) return;

  const sectionToNavHref = {
    hero: null,
    masalah: "#masalah",
    keunggulan: "#keunggulan",
    desain: "#desain",
    paket: "#paket",
    perbandingan: "#paket",
    "cara-pesan": "#cara-pesan",
    promo: "#cara-pesan",
    faq: "#faq"
  };

  const trackedSections = Array.from(document.querySelectorAll("main > section[id]")).filter((sec) =>
    Object.prototype.hasOwnProperty.call(sectionToNavHref, sec.id)
  );

  const setActiveHref = (activeHref) => {
    navLinks.forEach((link) => {
      const isMatch = Boolean(activeHref) && link.getAttribute("href") === activeHref;
      link.classList.toggle("is-active", isMatch);
      if (isMatch) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateOnScroll = () => {
    const navHeight = document.getElementById("navbar")?.offsetHeight || 72;
    const probeLine = window.scrollY + navHeight + Math.min(180, window.innerHeight * 0.28);

    let currentSectionId = "hero";
    for (const section of trackedSections) {
      if (section.offsetTop <= probeLine) {
        currentSectionId = section.id;
      } else {
        break;
      }
    }

    const footer = document.getElementById("contact");
    if (footer && window.scrollY + navHeight + 120 >= footer.offsetTop) {
      setActiveHref(null);
      return;
    }

    setActiveHref(sectionToNavHref[currentSectionId] || null);
  };

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", updateOnScroll, { passive: true });
  updateOnScroll();
}

/**
 * 2. Interaksi Filter Tab Pilihan Desain (#02 Topographic vs #04 Heritage)
 */
function initDesignFilterTabs() {
  const tabs = Array.from(document.querySelectorAll("[data-design-filter]"));
  const cards = Array.from(document.querySelectorAll("[data-design-item]"));
  const grid = document.getElementById("designGrid");

  if (!tabs.length || !cards.length || !grid) return;

  const setFilter = (activeTab) => {
    const filter = activeTab.getAttribute("data-design-filter") || "all";

    tabs.forEach((tab) => {
      tab.setAttribute("aria-selected", String(tab === activeTab));
    });

    grid.classList.toggle("is-single", filter !== "all");

    cards.forEach((card) => {
      const itemKey = card.getAttribute("data-design-item");
      const shouldShow = filter === "all" || itemKey === filter;
      const wasHidden = card.hasAttribute("hidden");
      if (shouldShow) {
        card.removeAttribute("hidden");
        if (wasHidden && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && card.animate) {
          card.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: "ease-out" });
        }
      } else {
        card.setAttribute("hidden", "");
      }
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setFilter(tab));
    tab.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const dir = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + dir + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        setFilter(tabs[nextIndex]);
      }
    });
  });
}

/**
 * 3. Penanganan Fallback Gambar Otomatis
 * Bila file gambar di assets/images/ belum ada, tampilkan kotak rapi tanpa broken image
 */
function initImageFallbacks() {
  document.querySelectorAll("img.js-img-fallback").forEach((img) => {
    const handleBrokenImage = () => {
      if (img.dataset.fallbackApplied === "true") return;
      img.dataset.fallbackApplied = "true";

      const label = img.getAttribute("data-fallback-label") || img.getAttribute("src") || "gambar-produk.png";
      const box = document.createElement("div");
      box.className = "img-fallback-placeholder";
      box.innerHTML = `<strong>Visual Produk</strong><span>Siapkan file: <code>assets/images/${label}</code></span>`;
      img.replaceWith(box);
    };

    img.addEventListener("error", handleBrokenImage);
    if (img.complete && img.naturalWidth === 0) {
      handleBrokenImage();
    }
  });
}

/**
 * 4. Memperbarui tahun di Footer secara otomatis
 */
function updateFooterYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

/**
 * 5. Membersihkan outline debug merah dari system.js apabila pengguna
 * menulis teks berkurung siku [ISI ...] di dalam CONFIG.
 */
function clearSystemPlaceholderGuards() {
  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    el.removeAttribute("data-placeholder");
  });
  delete document.documentElement.dataset.placeholders;
}

/**
 * 6. Fallback Animasi Tasteskill 2.5 (Agar tetap jalan 100% walau index.html
 * dibuka langsung lewat klik 2x file:// tanpa local web server)
 */
function initTasteskillMotionFallbacks() {
  const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // A. Hamburger Menu Mobile (jika system.js tidak berjalan di file://)
  const nav = document.querySelector(".nav");
  const toggle = nav?.querySelector(".nav__toggle");
  if (nav && toggle && !toggle.dataset.boundFallback) {
    toggle.dataset.boundFallback = "1";
    // Beri jeda singkat untuk mengecek apakah system.js sudah menangani klik
    setTimeout(() => {
      if (document.documentElement.dataset.ready) return;
      const bars =
        '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
      const cross =
        '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M4 4l10 10M14 4L4 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
      const setOpen = (open) => {
        nav.classList.toggle("is-open", open);
        document.body.classList.toggle("nav-locked", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.innerHTML = open ? cross : bars;
      };
      toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
      nav.addEventListener("click", (e) => {
        if (nav.classList.contains("is-open") && e.target.closest("a[href]")) setOpen(false);
      });
    }, 150);
  }

  // B. Interactive Product Hotspots (.ly-spot di Hero)
  setTimeout(() => {
    document.querySelectorAll(".ly-spot").forEach((el) => {
      if (el.dataset.spotBound) return;
      el.dataset.spotBound = "1";
      const btn = el.querySelector(":scope > button");
      if (!btn) return;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const nextOpen = !el.classList.contains("is-open");
        document.querySelectorAll(".ly-spot.is-open").forEach((other) => {
          if (other !== el) {
            other.classList.remove("is-open");
            other.querySelector(":scope > button")?.setAttribute("aria-expanded", "false");
          }
        });
        el.classList.toggle("is-open", nextOpen);
        btn.setAttribute("aria-expanded", String(nextOpen));
      });
    });
    document.addEventListener("pointerdown", (e) => {
      if (!e.target.closest(".ly-spot")) {
        document.querySelectorAll(".ly-spot.is-open").forEach((el) => {
          el.classList.remove("is-open");
          el.querySelector(":scope > button")?.setAttribute("aria-expanded", "false");
        });
      }
    });
  }, 150);

  // C. Live Word di Hero H1 ([data-ly-word]) — aktif di HP (< 640px) maupun saat file://
  setTimeout(() => {
    document.querySelectorAll("[data-ly-word]").forEach((slot) => {
      const alreadyMountedByLayout = Boolean(slot.querySelector("span"));
      // Jika sudah di-mount oleh layout.js di layar desktop (>= 640px), biarkan layout.js yang menjalankan
      if (alreadyMountedByLayout && window.innerWidth >= 640) return;

      let spans = Array.from(slot.querySelectorAll("span"));
      if (!spans.length) {
        let words;
        try {
          words = JSON.parse(slot.dataset.lyWord);
        } catch {
          return;
        }
        const first = slot.textContent.trim();
        words = [first, ...words.filter((w) => w !== first)];
        if (words.length < 2) return;
        slot.textContent = "";
        spans = words.map((w, i) => {
          const s = document.createElement("span");
          s.textContent = w;
          if (i) s.className = "is-next";
          slot.append(s);
          return s;
        });
      }

      if (isReduced || spans.length < 2) return;

      let at = 0;
      let busy = false;
      const runCycle = async () => {
        if (busy) return;
        busy = true;
        while (true) {
          await new Promise((r) => setTimeout(r, 2200));
          const next = (at + 1) % spans.length;
          const cur = at;
          spans[cur].className = "is-out";
          spans[next].className = "";
          at = next;
          await new Promise((r) => setTimeout(r, 620));
          spans[cur].style.transition = "none";
          spans[cur].className = "is-next";
          void spans[cur].offsetWidth;
          spans[cur].style.transition = "";
        }
      };
      runCycle();
    });
  }, 240);

  // D. Sliding Pill Indicator pada Tab Desain (.tabs[role="tablist"]) bila motion.js belum jalan
  setTimeout(() => {
    document.querySelectorAll('.tabs[role="tablist"]').forEach((list) => {
      if (list.querySelector(":scope > .m-tab-ind")) return;
      const ind = document.createElement("span");
      ind.className = "m-tab-ind";
      ind.setAttribute("aria-hidden", "true");
      list.prepend(ind);
      list.classList.add("m-has-ind");
      const place = () => {
        const sel = list.querySelector('[role="tab"][aria-selected="true"]');
        if (!sel) return;
        ind.style.setProperty("--x", `${sel.offsetLeft}px`);
        ind.style.setProperty("--y", `${sel.offsetTop}px`);
        ind.style.setProperty("--w", `${sel.offsetWidth}px`);
        ind.style.setProperty("--h", `${sel.offsetHeight}px`);
      };
      place();
      new MutationObserver(place).observe(list, { subtree: true, attributes: true, attributeFilter: ["aria-selected"] });
      window.addEventListener("resize", place, { passive: true });
    });
  }, 180);

  // E. Step-by-Step Arrival Loop ([data-ly-steps]) di Cara Pemesanan — aktif di HP (< 640px) maupun saat file://
  setTimeout(() => {
    if (isReduced) return;
    document.querySelectorAll("[data-ly-steps]").forEach((box) => {
      if (box.querySelector(".loop-pause")) return; // Sudah di-mount oleh layout.js di desktop
      const items = Array.from(box.querySelectorAll("[data-step]"));
      if (!items.length) return;
      const every = parseInt(box.dataset.lySteps, 10) || 700;
      let paused = false;

      const setStep = (n) => items.forEach((s, k) => s.classList.toggle("is-off", k >= n));

      const tick = async () => {
        while (true) {
          await new Promise((r) => setTimeout(r, 2400));
          if (paused) continue;
          setStep(0);
          for (let n = 1; n <= items.length; n++) {
            await new Promise((r) => setTimeout(r, n === 1 ? 380 : every));
            if (paused) {
              setStep(items.length);
              break;
            }
            setStep(n);
          }
        }
      };
      tick();
    });
  }, 260);
}
