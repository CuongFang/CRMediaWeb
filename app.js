// ==================== CẤU HÌNH LINK TẢI APP & SEPAY VIETQR ====================
const DOWNLOAD_CONFIG = {
  version: "v3.0.0",
  releasesPage: "https://github.com/CuongFang/CRMediaWeb/releases/tag/%23crmediatool",
  windowsUrl:
    "https://github.com/CuongFang/CRMediaWeb/releases/download/%23crmediatool/CRMedia_Setup_v3.0.0_Windows_x64.exe",
  macArmUrl:
    "https://github.com/CuongFang/CRMediaWeb/releases/download/%23crmediatool/CRMedia_v3.0.0_macOS_arm64.dmg",
  macIntelUrl:
    "https://github.com/CuongFang/CRMediaWeb/releases/download/%23crmediatool/CRMedia_v3.0.0_macOS_x86_64.dmg",
  sepayBank: "Sacombank",
  sepayAccount: "050127995947",
};

const FEATURE_VIDEOS = [
  {
    id: "cull",
    ep: "TẬP 01 / 05",
    title: "Lọc Ảnh AI & Gom Khuôn Mặt ArcFace-R50",
    duration: "0:51",
    desc: "Gộp cặp RAW+JPG mượt tức thì, lọc ảnh mờ/nhắm mắt/trùng 3 cấp độ, gom mặt nhân vật & AI Chọn theo gu 98%.",
    poster: "assets/posters/01_loc_anh_ai_scene2.png",
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
  cull: {
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    tag: "01 · LỌC ẢNH AI & ARCFACE-R50",
    title: "Lọc 3.000 ảnh RAW+JPG siêu tốc ngay trên máy tính",
    desc: "Tự động ghép cặp RAW và JPG của mọi dòng máy ảnh. Xem bản JPG siêu nhẹ không độ trễ nhưng mọi thao tác chấm sao, loại (X) hay xóa đều ăn đồng bộ cả file RAW gốc.",
    points: [
      "Quét lỗi AI 3 mức độ: Mờ/Rung, Tối, Cháy sáng, Nhắm mắt + Giữ bản đẹp nhất loại ảnh chụp liên thanh",
      "Gom khuôn mặt ArcFace-R50 tách riêng Cô dâu, Chú rể, Gia đình & Học Gu chấm 5★ cá nhân (Taste AI)",
      "Đồng bộ giờ Nhiều máy (Multi-Cam) & Xuất file .XMP tương thích trực tiếp Adobe Lightroom",
    ],
    videoIdx: 0,
  },
  collage: {
    accent: "#fb923c",
    accentRgb: "251, 146, 60",
    tag: "02 · DÀN TRANG ALBUM 300 DPI",
    title: "83+ Mẫu bố cục cưới & AI tự dàn cả cuốn trong vài phút",
    desc: "Thiết kế Album trải đôi 60×30, Photobook và bài đăng Reels/Instagram/Facebook trực quan — kéo thả, xoay khung, xếp Layer và khóa trang chuyên nghiệp.",
    points: [
      "83+ mẫu Khung Vòm (Arch), Polaroid xoay, Cuộn phim 35mm, Trải liền mạch 2–4 trang & 13 kích cỡ chuẩn",
      "Tự động gắn nhãn '✓ Tr.1' trên kho ảnh để chống đặt trùng ảnh; hỗ trợ Khóa Layer & Khóa toàn trang",
      "AI tự dàn trọn cuốn kèm nền Pastel hút màu từ ảnh, chèn Logo Studio & xuất JPG / PNG / PDF 300 DPI",
    ],
    videoIdx: 1,
  },
  slideshow: {
    accent: "#f43f5e",
    accentRgb: "244, 63, 94",
    tag: "03 · STUDIO LÀM VIDEO SLIDE GPU RTX",
    title: "Dựng video trình chiếu 4K & Reels 9:16 khớp nhịp nhạc Beat-Sync",
    desc: "Biến ảnh đã lọc thành video chiếu nhà hàng 16:9 hoặc clip dọc TikTok/Reels chỉ với vài cú click — tăng tốc phần cứng NVIDIA GPU NVENC nhanh gấp 5–10 lần CPU.",
    points: [
      "7 phong cách 1 chạm: Vox Style Tạp chí, Filmstrip 35mm Kodak, Hàn Quốc Lãng Mạn, Điện ảnh 2.39:1",
      "12 hiệu ứng chuyển cảnh + 6 lớp phủ (Bokeh ấm, Cánh hoa rơi, Hạt phim 35mm, Light Leak) chạy Live Preview",
      "AI tự phân tích nhịp trống Beat-Sync theo nhạc MP3/WAV + Intro/Outro tiếng Việt & Logo Studio",
    ],
    videoIdx: 2,
  },
  share: {
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    tag: "04 · CỔNG KHÁCH ZERO-TRUST :8766",
    title: "Gửi khách duyệt ảnh từ xa — Không cần upload lên Cloud",
    desc: "Phát trực tiếp bộ ảnh từ ổ cứng qua cổng cách ly Zero-Trust (:8766). Khách xem mượt trên iPhone, thả tim chọn ảnh, viết ghi chú hoặc chụp Selfie AI tìm ảnh sự kiện.",
    points: [
      "Bảo mật Mã PIN, tự đóng Watermark tên Studio & ngày tự hủy link; gõ ghi chú mượt không phóng to trên iOS",
      "Chế độ Link Sự Kiện: tìm ảnh theo Mã số / BIB & Chụp 1 tấm Selfie AI lọc ảnh trên RAM không lưu ảnh khách",
      "Khách bấm Chốt -> Máy Studio đổ chuông realtime, 1 chạm đồng bộ 5★ về Lọc ảnh & xuất file ghi chú .txt",
    ],
    videoIdx: 3,
  },
  ecosystem: {
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    tag: "05 · HỆ SINH THÁI STUDIO ĐA THIẾT BỊ",
    title: "Ổ NAS Z:\\, Lọc ảnh iPad 4G Tailscale, Google Drive QR & AI MCP",
    desc: "Một phần mềm chạy cục bộ duy nhất kết nối trọn vẹn thợ phụ, máy retouch, iPad/iPhone và trợ lý AI bên ngoài — không tốn phí thuê máy chủ hàng tháng.",
    points: [
      "Ổ NAS Studio (Web /nas + Ổ mạng WebDAV Z:\\) có phân quyền Chỉ đọc / Đọc Ghi & Mã PIN riêng",
      "Quét QR lọc ảnh trên iPhone/iPad qua Wi-Fi & 4G/5G Tailscale; bật Tailscale Funnel tạo link HTTPS cố định",
      "Upload Google Drive bền bỉ từ 4 nguồn kèm mã QR giao khách + Tích hợp sẵn AI MCP Server (:8765/mcp)",
    ],
    videoIdx: 4,
  },
};

let currentTab = "cull";
let albumRatio = "spread";
let albumLocked = true;
let slideStyle = "vox";
const pickedDemoSet = new Set([0, 1, 4]);

// ==================== RENDER INTERACTIVE STAGE ====================
function renderFeatureTab(tabKey) {
  currentTab = tabKey;
  const info = FEATURE_TABS_DATA[tabKey];
  const showcase = document.getElementById("feature-showcase");
  showcase.style.setProperty("--accent", info.accent);
  showcase.style.setProperty("--accent-rgb", info.accentRgb);

  document.querySelectorAll(".ftab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabKey);
    if (btn.dataset.tab === tabKey) {
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

  renderInteractiveStage(tabKey);
}

function renderInteractiveStage(tabKey) {
  const titleEl = document.getElementById("fs-stage-title");
  const tagEl = document.getElementById("fs-stage-tag");
  const bodyEl = document.getElementById("fs-stage-body");

  if (tabKey === "cull") {
    titleEl.textContent = "CRMedia AI Culling — Show Minh & Lan (3.120 ảnh RAW+JPG)";
    tagEl.textContent = "Tương tác trực tiếp";
    bodyEl.innerHTML = `
      <div class="demo-cull-grid" id="demo-cull-grid">
        <div class="scan-once" id="demo-laser"></div>
        <div class="hm-card is-good">
          <img src="assets/photos/wedding_couple_hero.jpg" alt="Cặp đôi"/>
          <span class="hm-badge">RAW+JPG</span>
          <div class="hm-face" style="left:34%;top:28%;width:22%;height:36%"><span>Cô dâu 99%</span></div>
          <span class="hm-stars">★★★★★</span>
        </div>
        <div class="hm-card is-bad">
          <img src="assets/photos/wedding_groom_portrait.jpg" alt="Mờ"/>
          <span class="hm-reject">✕ MỜ / RUNG</span>
        </div>
        <div class="hm-card is-good">
          <img src="assets/photos/wedding_bride_portrait.jpg" alt="Cô dâu"/>
          <span class="hm-badge">Nụ cười ★</span>
          <span class="hm-stars">★★★★★</span>
        </div>
        <div class="hm-card is-bad">
          <img src="assets/photos/wedding_rings_decor.jpg" alt="Trùng"/>
          <span class="hm-reject">✕ LOẠI TRÙNG</span>
        </div>
        <div class="hm-card is-good">
          <img src="assets/photos/wedding_ceremony_moment.jpg" alt="Lễ đường"/>
          <span class="hm-badge">Nét căng · 97đ</span>
          <span class="hm-stars">★★★★★</span>
        </div>
        <div class="hm-card is-good">
          <img src="assets/photos/wedding_outdoor_sunset.jpg" alt="Hoàng hôn"/>
          <span class="hm-badge">Highlight · 99đ</span>
          <span class="hm-stars">★★★★★</span>
        </div>
      </div>
      <div class="demo-controls">
        <div class="chip-group">
          <span class="mini-chip active">Gộp RAW+JPG</span>
          <span class="mini-chip">ArcFace-R50</span>
          <span class="mini-chip">Gu AI: 98%</span>
        </div>
        <button class="btn btn-sm btn-primary" onclick="replayCullLaser()">⚡ Quét Laser AI lại</button>
      </div>
    `;
  } else if (tabKey === "collage") {
    titleEl.textContent = "Album Collage Studio — Dàn trang 300 DPI & Khóa Layer";
    tagEl.textContent = "Thử đổi khổ khung";
    const ratioClass = albumRatio === "square" ? "ratio-square" : albumRatio === "reel" ? "ratio-reel" : "";
    bodyEl.innerHTML = `
      <div class="album-demo-spread ${ratioClass}">
        ${albumLocked ? '<div class="lock-ribbon">🔒 Đã khóa Trang 1</div>' : ""}
        <div class="ad-left">
          <div class="ad-arch"><img src="assets/photos/wedding_bride_portrait.jpg" alt="Khung Vòm"/></div>
        </div>
        <div class="ad-crease"></div>
        <div class="ad-right">
          <div class="ad-pol p1"><img src="assets/photos/wedding_groom_portrait.jpg" alt="Polaroid 1"/></div>
          <div class="ad-pol p2"><img src="assets/photos/wedding_outdoor_sunset.jpg" alt="Polaroid 2"/></div>
          <div class="ad-title">Minh &amp; Lan</div>
        </div>
      </div>
      <div class="demo-controls">
        <div class="chip-group">
          <button class="mini-chip ${albumRatio === "spread" ? "active" : ""}" onclick="setAlbumRatio('spread')">60×30 Trải đôi</button>
          <button class="mini-chip ${albumRatio === "square" ? "active" : ""}" onclick="setAlbumRatio('square')">40×40 Vuông</button>
          <button class="mini-chip ${albumRatio === "reel" ? "active" : ""}" onclick="setAlbumRatio('reel')">Dọc 9:16 Reels</button>
        </div>
        <button class="mini-chip ${albumLocked ? "active" : ""}" onclick="toggleAlbumLock()">
          ${albumLocked ? "🔒 Đang khóa trang" : "🔓 Mở khóa trang"}
        </button>
      </div>
    `;
  } else if (tabKey === "slideshow") {
    titleEl.textContent = "Wedding Slideshow Studio — Live Preview & Beat-Sync RTX";
    tagEl.textContent = "Thử đổi phong cách";
    const isVox = slideStyle === "vox";
    const isFilm = slideStyle === "film";
    const photoSrc = isVox
      ? "assets/photos/wedding_ceremony_moment.jpg"
      : isFilm
      ? "assets/photos/wedding_couple_hero.jpg"
      : "assets/photos/wedding_outdoor_sunset.jpg";
    const eqBars = Array.from({ length: 22 }, (_, i) => {
      const h = 35 + ((i * 29) % 65);
      const delay = ((i % 7) * 0.11).toFixed(2);
      return `<div class="eq-bar" style="height:${h}%;animation-delay:${delay}s"></div>`;
    }).join("");

    bodyEl.innerHTML = `
      <div class="slide-demo-stage ${isVox ? "vox-theme" : ""}">
        <div class="sd-img-box">
          ${isFilm ? '<div class="film-holes top"></div><div class="film-holes bot"></div>' : ""}
          <img src="${photoSrc}" alt="Slide Preview"/>
          ${
            !isVox
              ? `<div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.82) 100%);display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:${isFilm ? "26px" : "18px"}">
                   <span class="mono" style="font-size:11px;letter-spacing:3px;color:#fda4af">${isFilm ? "KODAK 400 · FILMSTRIP 35MM" : "SAVE THE DATE · BOKEH 4K"}</span>
                   <strong class="serif" style="font-size:28px;color:#fff">Minh &amp; Lan</strong>
                 </div>`
              : ""
          }
        </div>
        ${isVox ? '<div class="vox-bar-label mono">VOX STYLE · TẠP CHÍ KỂ CHUYỆN 4K</div>' : ""}
      </div>
      <div class="eq-strip" title="Beat-Sync 124 BPM">${eqBars}</div>
      <div class="demo-controls">
        <div class="chip-group">
          <button class="mini-chip ${isVox ? "active" : ""}" onclick="setSlideStyle('vox')">Vox Style</button>
          <button class="mini-chip ${isFilm ? "active" : ""}" onclick="setSlideStyle('film')">Filmstrip 35mm</button>
          <button class="mini-chip ${slideStyle === "korean" ? "active" : ""}" onclick="setSlideStyle('korean')">Hàn Quốc Bokeh</button>
        </div>
        <span class="mono" style="font-size:11.5px;color:#6ee7b7">⚡ NVIDIA h264_nvenc · 124 BPM</span>
      </div>
    `;
  } else if (tabKey === "share") {
    titleEl.textContent = "Cổng Khách Zero-Trust (:8766) — Bấm thử ♥ & Chốt ảnh!";
    tagEl.textContent = "🔒 PIN · Watermark";
    const photos = [
      "assets/photos/wedding_couple_hero.jpg",
      "assets/photos/wedding_bride_portrait.jpg",
      "assets/photos/wedding_groom_portrait.jpg",
      "assets/photos/wedding_ceremony_moment.jpg",
      "assets/photos/wedding_outdoor_sunset.jpg",
      "assets/photos/wedding_rings_decor.jpg",
    ];
    bodyEl.innerHTML = `
      <div class="proof-demo-grid">
        ${photos
          .map(
            (src, idx) => `
          <div class="pd-item ${pickedDemoSet.has(idx) ? "picked" : ""}" onclick="toggleDemoPick(${idx})">
            <img src="${src}" alt="Ảnh khách ${idx + 1}"/>
            <div class="pd-wm">STUDIO</div>
            <div class="pd-heart">♥</div>
          </div>`
          )
          .join("")}
      </div>
      <div class="proof-note-row">
        <input id="demo-note-input" value="Bóp eo nhẹ, làm ảnh cổng 60x90..." placeholder="Nhập ghi chú chỉnh sửa cho Studio..." />
        <button class="btn btn-sm btn-emerald" onclick="triggerDemoSubmit()">✓ Chốt ${pickedDemoSet.size} ảnh</button>
      </div>
      <div class="proof-bell-toast" id="demo-bell-toast">
        <span>🔔 Studio nhận báo chốt ngay: <strong>${pickedDemoSet.size} ảnh</strong> + ghi chú .txt!</span>
        <span class="mono" style="color:#fcd34d">→ 5★ Sync</span>
      </div>
    `;
  } else {
    titleEl.textContent = "CRMedia Local Hub — Kết nối toàn bộ đội ngũ & thiết bị";
    tagEl.textContent = "100% Local-First";
    bodyEl.innerHTML = `
      <div class="eco-demo-grid">
        <div class="eco-node-card">
          <span class="en-kicker mono">Ổ NAS STUDIO · WEBDAV :8767</span>
          <strong>Gắn ổ đĩa mạng Z:\\</strong>
          <p>Phân quyền Chỉ đọc / Đọc &amp; Ghi + PIN riêng. Thợ retouch mở chỉnh thẳng trên Photoshop &amp; Lightroom.</p>
        </div>
        <div class="eco-node-card">
          <span class="en-kicker mono">IPAD &amp; IPHONE · TAILSCALE 4G</span>
          <strong>Lọc ảnh mọi nơi qua 4G/5G</strong>
          <p>Quét mã QR duyệt kho ảnh ở nhà ngay trên sofa hoặc quán cà phê. Bật Funnel tạo link HTTPS cố định.</p>
        </div>
        <div class="eco-node-card">
          <span class="en-kicker mono">GOOGLE DRIVE OAUTH 2.0</span>
          <strong>Upload bền bỉ 4 nguồn + QR</strong>
          <p>Đẩy thẳng ảnh lọc, ảnh khách chốt hoặc Album 300 DPI lên Drive chính chủ kèm link &amp; mã QR.</p>
        </div>
        <div class="eco-node-card">
          <span class="en-kicker mono">AI MCP SERVER (:8765/mcp)</span>
          <strong>Điều khiển Studio bằng AI</strong>
          <p>Kết nối Claude Desktop, Cursor, Antigravity tự động tìm ảnh, lọc lỗi &amp; hỗ trợ hậu kỳ thông minh.</p>
        </div>
      </div>
      <div class="demo-controls">
        <span style="font-size:12.5px;color:#cbd5e1">Tích hợp sẵn hướng dẫn đăng ký Tailscale &amp; Google Console từng bước ngay trong app (F1).</span>
      </div>
    `;
  }
}

window.replayCullLaser = function () {
  const laser = document.getElementById("demo-laser");
  if (!laser) return;
  laser.classList.remove("scan-once");
  void laser.offsetWidth;
  laser.classList.add("scan-once");
};

window.setAlbumRatio = function (r) {
  albumRatio = r;
  renderInteractiveStage("collage");
};

window.toggleAlbumLock = function () {
  albumLocked = !albumLocked;
  renderInteractiveStage("collage");
};

window.setSlideStyle = function (s) {
  slideStyle = s;
  renderInteractiveStage("slideshow");
};

window.toggleDemoPick = function (idx) {
  if (pickedDemoSet.has(idx)) pickedDemoSet.delete(idx);
  else pickedDemoSet.add(idx);
  renderInteractiveStage("share");
};

window.triggerDemoSubmit = function () {
  const toast = document.getElementById("demo-bell-toast");
  if (toast) {
    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");
  }
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
  // Gắn link tải từ DOWNLOAD_CONFIG + tự nhận diện Windows / macOS
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

  // Gắn sự kiện 5 tab tính năng
  document.querySelectorAll(".ftab").forEach((btn) => {
    btn.addEventListener("click", () => renderFeatureTab(btn.dataset.tab));
  });
  renderFeatureTab("cull");

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("open");
    });
  });

  // Đóng modal bằng phím Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeVideoModal();
      closeQrModal();
    }
  });
});
