// ==================== CẤU HÌNH LINK TẢI APP & SEPAY VIETQR ====================
const DOWNLOAD_CONFIG = {
  version: "v3.0.6",
  releasesPage: "https://github.com/CuongFang/CRMediaWeb/releases/tag/%23crmediatool3.06",
  windowsUrl:
    "https://github.com/CuongFang/CRMediaWeb/releases/download/%23crmediatool3.06/CRMedia_Setup_v3.0.6_Windows_x64.exe",
  macArmUrl:
    "https://github.com/CuongFang/CRMediaWeb/releases/download/%23crmediatool3.06/CRMedia_v3.0.6_macOS_arm64.dmg",
  macIntelUrl:
    "https://github.com/CuongFang/CRMediaWeb/releases/download/%23crmediatool3.06/CRMedia_v3.0.6_macOS_x86_64.dmg",
  sepayBank: "Sacombank",
  sepayAccount: "050127995947",
};

// 6 ảnh minh họa chụp trực tiếp từ giao diện CRMedia v3.0 thực tế
const REAL_SHOWCASE_IMAGES = [
  {
    key: "overview",
    shortLabel: "Tổng hợp 4 tính năng",
    title: "Tổng hợp 4 Tính năng Lọc Ảnh AI Siêu Tốc — CRMedia v3.0",
    src: "assets/showcase/05_Tong_Hop_4_Tinh_Nang_CRMedia_v3.jpg",
    badge: "REAL UI · 1/6",
  },
  {
    key: "rawjpg",
    shortLabel: "Lọc & Xóa RAW+JPG",
    title: "Lọc & Xóa Cả Cặp RAW + JPG Mượt Như Photo Mechanic (860 cặp)",
    src: "assets/showcase/06_Loc_Va_Xoa_Cap_RAW_JPG_Nhu_Photo_Mechanic.jpg",
    badge: "RAW+JPG · 2/6",
  },
  {
    key: "multicam",
    shortLabel: "Đồng bộ nhiều máy",
    title: "Lọc 1.440+ Ảnh Siêu Tốc & Đồng Bộ Nhiều Máy Theo Giờ Chụp",
    src: "assets/showcase/01_Loc_Anh_Sieu_Toc_Dong_Bo_Nhieu_May.jpg",
    badge: "MULTI-CAM · 3/6",
  },
  {
    key: "duplicates",
    shortLabel: "Lọc ảnh trùng lặp",
    title: "Gom Nhóm Ảnh Trùng Lặp — 1 Chạm Giữ Bản Đẹp Nhất",
    src: "assets/showcase/02_Loc_Anh_Trung_Lap_Giu_Ban_Dep_Nhat.jpg",
    badge: "TRÙNG LẶP · 4/6",
  },
  {
    key: "defects",
    shortLabel: "Bắt lỗi Mờ/Tối/Cháy",
    title: "AI Tự Động Lọc Ảnh Lỗi: Mờ Rung · Tối · Cháy Sáng · Nhắm Mắt",
    src: "assets/showcase/03_Loc_Anh_Loi_Mo_Rung_Toi_Chay_Sang.jpg",
    badge: "LỌC LỖI AI · 5/6",
  },
  {
    key: "faces",
    shortLabel: "Cô dâu & Chú rể AI",
    title: "Nhận Dạng Khuôn Mặt ArcFace-R50 — Lọc Riêng Cô Dâu & Chú Rể",
    src: "assets/showcase/04_Nhan_Dang_Gom_Mat_Co_Dau_Chu_Re.jpg",
    badge: "ARCFACE AI · 6/6",
  },
];

const FEATURE_VIDEOS = [
  {
    id: "cull",
    ep: "TẬP 01 / 05",
    title: "Lọc Ảnh AI & Gom Khuôn Mặt ArcFace-R50",
    duration: "0:51",
    desc: "Gộp cặp RAW+JPG mượt tức thì, lọc ảnh mờ/nhắm mắt/trùng 3 cấp độ, gom mặt nhân vật & AI Chọn theo gu 98%.",
    poster: "assets/showcase/01_Loc_Anh_Sieu_Toc_Dong_Bo_Nhieu_May.jpg",
    video: "assets/videos/01_CRMedia_Loc_Anh_AI_16x9.mp4",
  },
  {
    id: "collage",
    ep: "TẬP 02 / 05",
    title: "Dàn Trang Album 300 DPI & Khung 9:16",
    duration: "0:54",
    desc: "83+ mẫu Khung Vòm, Polaroid, 35mm, 13 kích cỡ từ 60×30 đến 9:16, khóa layer/trang & AI tự dàn cả cuốn.",
    poster: "assets/posters/02_dan_trang_album_scene2.png",
    video: "assets/videos/02_CRMedia_Dan_Trang_Album_16x9.mp4",
  },
  {
    id: "slideshow",
    ep: "TẬP 03 / 05",
    title: "Studio Làm Video Slide GPU RTX & Beat-Sync",
    duration: "0:59",
    desc: "7 phong cách Vox Style & Filmstrip 35mm, 12 chuyển cảnh + 6 lớp phủ, tự khớp nhịp trống & xuất 4K NVENC.",
    poster: "assets/posters/03_lam_video_slide_scene2.png",
    video: "assets/videos/03_CRMedia_Lam_Video_Slide_GPU_16x9.mp4",
  },
  {
    id: "share",
    ep: "TẬP 04 / 05",
    title: "Gửi Khách Duyệt Zero-Trust & Selfie AI",
    duration: "0:53",
    desc: "Gửi ảnh trực tiếp từ máy không cần upload Cloud, khóa PIN & Watermark, ghi chú mượt trên iOS, tìm Selfie AI.",
    poster: "assets/posters/04_gui_khach_zerotrust_scene2.png",
    video: "assets/videos/04_CRMedia_Gui_Khach_ZeroTrust_16x9.mp4",
  },
  {
    id: "ecosystem",
    ep: "TẬP 05 / 05",
    title: "Hệ Sinh Thái Studio: Ổ NAS Z:\\, Tailscale & Drive",
    duration: "0:47",
    desc: "Ổ NAS WebDAV Z:\\ mở thẳng Photoshop, lọc ảnh iPad 4G Tailscale, upload Google Drive QR & AI MCP Server.",
    poster: "assets/posters/05_he_sinh_thai_studio_scene2.png",
    video: "assets/videos/05_CRMedia_He_Sinh_Thai_NAS_Drive_16x9.mp4",
  },
];

const FEATURE_TABS_DATA = {
  rawjpg: {
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    tag: "01 · GỘP & XÓA CẶP RAW + JPG NHƯ PHOTO MECHANIC",
    title: "Lọc & Xóa đồng bộ cả cặp RAW + JPG siêu mượt như Photo Mechanic",
    desc: "Tự động ghép trọn 860 cặp RAW + JPG (1.720 file) thành 1 giao diện gọn sạch. Lướt bản JPG siêu mượt 0ms độ trễ, chấm sao hay bấm X loại và xóa 1 lần bay sạch cả 2 file RAW + JPG!",
    points: [
      "Hỗ trợ đầy đủ RAW mọi hãng (ARW, CR2, CR3, NEF, RAF, DNG) đi cặp với JPG — chuyển nhanh 4 chế độ hiển thị",
      "Chấm 1–5★, gắn nhãn màu, đánh dấu Loại (X) đều tự đồng bộ lên cả file RAW gốc giống hệt Photo Mechanic",
      "Nút '🗑 Xóa file Đã Loại (cả RAW + JPG)' dọn sạch cả 2 file cùng lúc, giải phóng ngay hàng chục GB ổ cứng",
    ],
    img: "assets/showcase/06_Loc_Va_Xoa_Cap_RAW_JPG_Nhu_Photo_Mechanic.jpg",
    stageTitle: "Dự án thực tế Baron Studio (1.720 ảnh · 860 cặp RAW+JPG · 2 máy)",
    stageTag: "RAW+JPG SYNC",
    lightboxIdx: 1,
    videoIdx: 0,
    thumbTitle: "1. RAW+JPG Mechanic",
  },
  multicam: {
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    tag: "02 · LỌC SIÊU TỐC & ĐỒNG BỘ NHIỀU MÁY",
    title: "Lọc 1.440+ ảnh siêu tốc & Đồng bộ nhiều máy theo giờ chụp",
    desc: "Chụp 2–3 máy ảnh bị lệch giờ? CRMedia tự cân chỉnh lệch giây để gộp chung vào 1 dòng thời gian chuẩn xác, đồng thời gộp cặp RAW+JPG giúp bạn lướt ảnh mượt không độ trễ.",
    points: [
      "Đồng bộ giờ Nhiều máy (Multi-Cam): sắp xếp toàn bộ ảnh từ 2+ body máy ảnh theo đúng trình tự sự kiện",
      "Chế độ Gộp RAW+JPG: xem bản JPG siêu nhẹ nhưng chấm sao, loại (X) hay xóa đều áp dụng luôn lên file RAW gốc",
      "Lọc nhanh Highlight · Cô dâu · Chú rể · Cặp đôi · Khoảnh khắc chỉ với 1 click",
    ],
    img: "assets/showcase/01_Loc_Anh_Sieu_Toc_Dong_Bo_Nhieu_May.jpg",
    stageTitle: "Dự án thực tế 2may (1.440 ảnh · 2 máy ảnh · 422 khuôn mặt)",
    stageTag: "MULTI-CAM SYNC",
    lightboxIdx: 2,
    videoIdx: 0,
    thumbTitle: "2. Đồng bộ nhiều máy",
  },
  duplicates: {
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    tag: "03 · GOM NHÓM ẢNH TRÙNG LẶP",
    title: "Tự gom loạt ảnh chụp liên thanh — 1 chạm giữ bản đẹp nhất",
    desc: "AI tự nhận diện và gom hàng chục loạt chụp liên tiếp thành từng nhóm riêng. Mỗi nhóm được AI tự so sánh độ nét, biểu cảm để gắn sẵn nhãn xanh '★ Tốt nhất'.",
    points: [
      "Tự phát hiện toàn bộ nhóm ảnh chụp liên thanh (VD: 74 nhóm trùng lặp trong 1 show lễ hỏi)",
      "Nút xanh '★ Giữ bản đẹp nhất, loại bản trùng' giúp cắt giảm ngay 30%–50% lượng ảnh thừa chỉ trong 1 giây",
      "Tự đánh dấu rõ tấm nét nhất '★ Tốt nhất (3)' và gắn cảnh báo đỏ 'Mờ / Tối' cho các tấm kém hơn",
    ],
    img: "assets/showcase/02_Loc_Anh_Trung_Lap_Giu_Ban_Dep_Nhat.jpg",
    stageTitle: "Tab Nhóm trùng lặp (74 nhóm) — So sánh & giữ bản nét nhất",
    stageTag: "AUTO DEDUPE",
    lightboxIdx: 3,
    videoIdx: 0,
    thumbTitle: "3. Lọc ảnh trùng lặp",
  },
  defects: {
    accent: "#f43f5e",
    accentRgb: "244, 63, 94",
    tag: "04 · AI TỰ ĐỘNG LỌC ẢNH LỖI",
    title: "Bắt sạch ảnh lỗi: Mờ rung · Quá tối · Cháy sáng · Nhắm mắt",
    desc: "Không còn phải căng mắt soi từng tấm ảnh out nét hay lỡ nháy mắt. AI cục bộ tự chấm điểm chất lượng từng tấm trên thang 100 kèm biểu đồ Histogram RGB & thông số EXIF.",
    points: [
      "3 mức độ nhạy lọc lỗi (Nhẹ · Vừa · Mạnh) thống kê rõ số ảnh Mờ, Quá tối, Cháy sáng, Nhắm mắt",
      "1 chạm 'Áp dụng loại ảnh lỗi (X)' để dọn sạch hàng loạt ảnh hỏng trước khi gửi khách hoặc dàn trang",
      "Hiển thị trực quan Điểm chất lượng AI (/100), Độ nét tương đối, % Tối/Cháy sáng & Histogram RGB",
    ],
    img: "assets/showcase/03_Loc_Anh_Loi_Mo_Rung_Toi_Chay_Sang.jpg",
    stageTitle: "Bảng Tự động lọc lỗi 3 cấp độ & Điểm chất lượng AI",
    stageTag: "AI DEFECT SCAN",
    lightboxIdx: 4,
    videoIdx: 0,
    thumbTitle: "4. Bắt lỗi Mờ/Tối/Cháy",
  },
  faces: {
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    tag: "05 · NHẬN DẠNG KHUÔN MẶT ARCFACE-R50",
    title: "Nhận dạng AI tự gom riêng ảnh Cô dâu, Chú rể & Từng nhân vật",
    desc: "Công nghệ nhận dạng khuôn mặt ArcFace-R50 chạy hoàn toàn cục bộ giúp tự tách và xếp sẵn Cô dâu, Chú rể lên đầu danh sách để lọc ảnh theo đúng nhân vật bạn cần.",
    points: [
      "Tự nhận dạng và gom hàng chục đến hàng trăm nhân vật trong show (VD: Cô dâu 192 ảnh · Chú rể 154 ảnh)",
      "Thanh trượt 'Độ chặt gom mặt' + Gộp cụm người linh hoạt, xử lý chính xác cả góc nghiêng",
      "Bảng thông số liệt kê từng gương mặt có trong ảnh kèm % nụ cười và trạng thái mắt mở/nhắm",
    ],
    img: "assets/showcase/04_Nhan_Dang_Gom_Mat_Co_Dau_Chu_Re.jpg",
    stageTitle: "Nhận dạng ArcFace-R50 — Đang lọc riêng Cô dâu (192 ảnh)",
    stageTag: "ARCFACE-R50",
    lightboxIdx: 5,
    videoIdx: 0,
    thumbTitle: "5. Cô dâu & Chú rể AI",
  },
  overview: {
    accent: "#fbbf24",
    accentRgb: "251, 191, 36",
    tag: "06 · TOÀN CẢNH BỘ CÔNG CỤ LỌC ẢNH AI",
    title: "Tổng hợp màn hình thực tế — Tăng tốc lọc file gấp 5 lần",
    desc: "Từ lúc chép thẻ nhớ 2–3 máy ảnh cho tới khi chọn xong bộ ảnh đẹp nhất gửi khách, dàn trang Album 300 DPI hay xuất Lightroom .XMP — tất cả gói gọn trong CRMedia v3.0.",
    points: [
      "100% Chạy cục bộ trên Windows & macOS — không phụ thuộc mạng, ảnh gốc không bao giờ rời ổ cứng",
      "Kết nối liền mạch sang Dàn trang Album 300 DPI, Làm Video Slide GPU 4K & Cổng gửi khách Zero-Trust",
      "Dùng thử Full tính năng 3 ngày miễn phí — nâng cấp chỉ 99.000đ/tháng hoặc 999.000đ trọn đời",
    ],
    img: "assets/showcase/05_Tong_Hop_4_Tinh_Nang_CRMedia_v3.jpg",
    stageTitle: "Toàn cảnh 4 chức năng Lọc Ảnh AI thực tế trên CRMedia v3.0",
    stageTag: "FULL SUITE v3.0",
    lightboxIdx: 0,
    videoIdx: 0,
    thumbTitle: "6. Tổng quan 4 tính năng",
  },
};

const TAB_ORDER = ["rawjpg", "multicam", "duplicates", "defects", "faces", "overview"];

// ==================== HERO AUTO-MOTION CAROUSEL + 3D TILT ====================
let heroSlideIdx = 0;
let heroTimer = null;
let heroPaused = false;
const HERO_INTERVAL_MS = 4500;

function setHeroSlide(idx) {
  heroSlideIdx = (idx + REAL_SHOWCASE_IMAGES.length) % REAL_SHOWCASE_IMAGES.length;
  const item = REAL_SHOWCASE_IMAGES[heroSlideIdx];
  const imgs = document.querySelectorAll("#hero-real-viewport .hero-slide-img");
  imgs.forEach((im, i) => im.classList.toggle("active", i === heroSlideIdx));

  const titleEl = document.getElementById("hero-slide-title");
  const badgeEl = document.getElementById("hero-slide-badge");
  if (titleEl) titleEl.textContent = item.title;
  if (badgeEl) badgeEl.textContent = item.badge;

  document.querySelectorAll("#hero-slide-dots .hs-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === heroSlideIdx);
  });

  // Reset thanh tiến độ mượt
  const bar = document.getElementById("hero-prog-bar");
  if (bar) {
    bar.style.transition = "none";
    bar.style.width = "0%";
    void bar.offsetWidth;
    bar.style.transition = `width ${HERO_INTERVAL_MS}ms linear`;
    bar.style.width = "100%";
  }
}

function startHeroAutoplay() {
  stopHeroAutoplay();
  heroTimer = window.setInterval(() => {
    if (!heroPaused) setHeroSlide(heroSlideIdx + 1);
  }, HERO_INTERVAL_MS);
}

function stopHeroAutoplay() {
  if (heroTimer) {
    window.clearInterval(heroTimer);
    heroTimer = null;
  }
}

function attach3DTilt(elId, maxDeg = 4.5) {
  const card = document.getElementById(elId);
  if (!card) return;
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -maxDeg * 2;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * maxDeg * 2;
    card.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

// ==================== FEATURE REAL MOTION TABS ====================
let currentTab = "multicam";

function renderFeatureTab(tabKey) {
  currentTab = tabKey;
  const info = FEATURE_TABS_DATA[tabKey];
  if (!info) return;

  const showcase = document.getElementById("feature-showcase");
  showcase.style.setProperty("--accent", info.accent);
  showcase.style.setProperty("--accent-rgb", info.accentRgb);

  document.querySelectorAll(".ftab").forEach((btn) => {
    const isAct = btn.dataset.tab === tabKey;
    btn.classList.toggle("active", isAct);
    if (isAct) {
      btn.style.setProperty("--accent", info.accent);
      btn.style.setProperty("--accent-rgb", info.accentRgb);
    }
  });

  document.querySelectorAll("#real-thumb-strip .rthumb").forEach((btn) => {
    const isAct = btn.dataset.tab === tabKey;
    btn.classList.toggle("active", isAct);
    if (isAct) {
      btn.style.setProperty("--accent", info.accent);
      btn.style.setProperty("--accent-rgb", info.accentRgb);
    }
  });

  document.getElementById("fs-tag").textContent = info.tag;
  document.getElementById("fs-title").textContent = info.title;
  document.getElementById("fs-desc").textContent = info.desc;
  document.getElementById("fs-points").innerHTML = info.points
    .map((pt) => `<li><span class="fs-check">✓</span><span>${pt}</span></li>`)
    .join("");
  document.getElementById("fs-watch-btn").onclick = () => openVideoModal(info.videoIdx);

  document.getElementById("fs-stage-title").textContent = info.stageTitle;
  document.getElementById("fs-stage-tag").textContent = info.stageTag;

  const bodyEl = document.getElementById("fs-stage-body");
  bodyEl.innerHTML = `
    <div class="real-feature-frame" onclick="openImgModal(${info.lightboxIdx})">
      <img class="real-feature-img pop-enter" src="${info.img}" alt="${info.title}" />
      <div class="rf-sheen"></div>
      <div class="rf-laser once" id="feature-laser"></div>
      <span class="zoom-hint-badge">🔍 Phóng to Full HD</span>
    </div>
    <div class="demo-controls">
      <div class="chip-group">
        <button class="mini-chip active" onclick="openImgModal(${info.lightboxIdx})">🔍 Xem ảnh Full HD (1920×1080)</button>
        <button class="mini-chip" onclick="replayFeatureLaser()">⚡ Quét hiệu ứng AI lại</button>
      </div>
      <button class="btn btn-sm btn-primary" onclick="nextFeatureTab()">Tính năng kế tiếp →</button>
    </div>
  `;
}

window.replayFeatureLaser = function () {
  const laser = document.getElementById("feature-laser");
  if (!laser) return;
  laser.classList.remove("once");
  void laser.offsetWidth;
  laser.classList.add("once");
};

window.nextFeatureTab = function () {
  const idx = TAB_ORDER.indexOf(currentTab);
  renderFeatureTab(TAB_ORDER[(idx + 1) % TAB_ORDER.length]);
};

// ==================== IMAGE FULL HD LIGHTBOX MODAL ====================
let activeImgModalIdx = 0;

window.openImgModal = function (idx) {
  activeImgModalIdx = (idx + REAL_SHOWCASE_IMAGES.length) % REAL_SHOWCASE_IMAGES.length;
  const item = REAL_SHOWCASE_IMAGES[activeImgModalIdx];
  document.getElementById("im-title").textContent = `${item.badge} — ${item.title}`;
  document.getElementById("im-img").src = item.src;
  document.getElementById("im-img").alt = item.title;
  document.getElementById("img-modal").classList.add("open");
};

window.stepImgModal = function (delta) {
  openImgModal(activeImgModalIdx + delta);
};

window.closeImgModal = function () {
  document.getElementById("img-modal").classList.remove("open");
};

// ==================== VIDEO MODAL ====================
window.openVideoModal = function (idx) {
  const v = FEATURE_VIDEOS[idx];
  if (!v) return;
  document.getElementById("vm-title").textContent = `${v.ep} · ${v.title}`;
  const player = document.getElementById("vm-player");
  player.src = v.video;
  player.poster = v.poster;
  document.getElementById("video-modal").classList.add("open");
  player.play().catch(() => {});
};

window.closeVideoModal = function () {
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("vm-player");
  player.pause();
  player.removeAttribute("src");
  player.load();
  modal.classList.remove("open");
};

// ==================== SEPAY VIETQR CHECKOUT MODAL ====================
window.openQrModal = function (planName, amountVnd) {
  const code = "CRM" + Math.random().toString(36).substring(2, 8).toUpperCase();
  const qrUrl = `https://qr.sepay.vn/img?acc=${DOWNLOAD_CONFIG.sepayAccount}&bank=${DOWNLOAD_CONFIG.sepayBank}&amount=${amountVnd}&des=${encodeURIComponent(code)}`;
  document.getElementById("qr-plan-title").textContent = `Thanh toán ${planName}`;
  document.getElementById("qr-img").src = qrUrl;
  document.getElementById("qr-amount").textContent = `${amountVnd.toLocaleString("vi-VN")}đ`;
  document.getElementById("qr-des").textContent = code;
  document.getElementById("qr-bank").textContent = `${DOWNLOAD_CONFIG.sepayBank} · STK ${DOWNLOAD_CONFIG.sepayAccount}`;
  document.getElementById("qr-modal").classList.add("open");
};

window.closeQrModal = function () {
  document.getElementById("qr-modal").classList.remove("open");
};

window.copyQrNote = function () {
  const des = document.getElementById("qr-des").textContent;
  const amount = document.getElementById("qr-amount").textContent;
  const txt = `Thanh toan CRMedia (${amount}) - Noi dung CK: ${des} - Sacombank ${DOWNLOAD_CONFIG.sepayAccount}`;
  try {
    const ta = document.createElement("textarea");
    ta.value = txt;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    const btn = document.getElementById("qr-copy-btn");
    btn.textContent = "✓ Đã copy thông tin chuyển khoản!";
    setTimeout(() => (btn.textContent = "Copy nội dung chuyển khoản"), 2000);
  } catch {}
};

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  // Tự nhận diện Windows / macOS cho nút Tải
  const ua = navigator.userAgent || "";
  const isMac = /Macintosh|Mac OS X/i.test(ua);
  const heroDl = document.getElementById("hero-dl-btn");
  if (heroDl) {
    heroDl.href = "#download";
    heroDl.innerHTML = isMac
      ? `⬇ Tải miễn phí cho macOS (${DOWNLOAD_CONFIG.version})`
      : `⬇ Tải miễn phí cho Windows (${DOWNLOAD_CONFIG.version})`;
  }

  document.getElementById("dl-win-btn").href = DOWNLOAD_CONFIG.windowsUrl;
  document.getElementById("dl-mac-arm-btn").href = DOWNLOAD_CONFIG.macArmUrl;
  document.getElementById("dl-mac-intel-btn").href = DOWNLOAD_CONFIG.macIntelUrl;

  if (isMac) {
    document.getElementById("dl-card-win").classList.remove("recommended");
    document.getElementById("dl-card-mac-arm").classList.add("recommended");
  }

  // Hero Slide Dots + Hover Pause + 3D Tilt
  const dotsWrap = document.getElementById("hero-slide-dots");
  if (dotsWrap) {
    dotsWrap.innerHTML = REAL_SHOWCASE_IMAGES.map(
      (item, i) => `<button class="hs-dot ${i === 0 ? "active" : ""}" title="${item.shortLabel}" onclick="setHeroSlide(${i}); startHeroAutoplay();"></button>`
    ).join("");
  }
  const heroCard = document.getElementById("hero-tilt-card");
  if (heroCard) {
    heroCard.addEventListener("mouseenter", () => { heroPaused = true; });
    heroCard.addEventListener("mouseleave", () => { heroPaused = false; });
  }
  attach3DTilt("hero-tilt-card", 3.5);
  attach3DTilt("fs-tilt-card", 2.5);
  setHeroSlide(0);
  startHeroAutoplay();

  // Render dải 5 ảnh thumbnail thật bên dưới mục Tính năng
  const strip = document.getElementById("real-thumb-strip");
  if (strip) {
    strip.innerHTML = TAB_ORDER.map((key) => {
      const t = FEATURE_TABS_DATA[key];
      return `
        <button class="rthumb" data-tab="${key}" onclick="renderFeatureTab('${key}')">
          <img src="${t.img}" alt="${t.thumbTitle}" loading="lazy" />
          <div class="rthumb-cap">${t.thumbTitle}</div>
        </button>
      `;
    }).join("");
  }

  // Gắn sự kiện 6 tab tính năng
  document.querySelectorAll(".ftab").forEach((btn) => {
    btn.addEventListener("click", () => renderFeatureTab(btn.dataset.tab));
  });
  renderFeatureTab("rawjpg");

  // Render Video Motion Gallery (5 tập 16:9 dưới 1 phút)
  const vgrid = document.getElementById("video-gallery");
  vgrid.innerHTML = FEATURE_VIDEOS.map(
    (v, i) => `
      <article class="video-card" onclick="openVideoModal(${i})">
        <div class="video-thumb">
          <img src="${v.poster}" alt="${v.title}" loading="lazy"/>
          <div class="play-orb">▶</div>
          <span class="video-dur mono">${v.duration}</span>
        </div>
        <div class="video-meta">
          <span class="video-ep mono">${v.ep} · VIDEO MOTION 16:9</span>
          <h3>${v.title}</h3>
          <p>${v.desc}</p>
        </div>
      </article>
    `
  ).join("");

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("open");
    });
  });

  // Phím tắt cho Lightbox & Modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeImgModal();
      closeVideoModal();
      closeQrModal();
    } else if (document.getElementById("img-modal").classList.contains("open")) {
      if (e.key === "ArrowRight") stepImgModal(1);
      else if (e.key === "ArrowLeft") stepImgModal(-1);
    }
  });
});
