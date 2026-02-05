export const projectsData = [
  {
    slug: "roadguard-ai",
    title: "RoadGuard: AI-Assisted Maintenance", // Judul sedikit dipadatkan agar pas di Card
    category: "AI-Powered Web Application",
    date: "Feb 2026",
    role: "AI Engineer & Fullstack Dev",
    
    // Tech Stack: Kombinasi AI & Web
    tech: ["Python", "Flask", "YOLOv8", "PyTorch", "OpenCV", "Leaflet JS"],
    
    shortDesc: "Sistem pelaporan kerusakan jalan cerdas yang mengintegrasikan Deep Learning (YOLOv8) untuk mendeteksi dan mengklasifikasikan kerusakan secara otomatis.",
    
    description: "RoadGuard adalah solusi end-to-end yang menggabungkan kemudahan pelaporan warga dengan kecerdasan buatan. Platform ini dibangun menggunakan Python Flask yang ditanamkan model YOLOv8 (You Only Look Once) custom-trained. Sistem ini tidak hanya menampung laporan, tetapi bertindak sebagai validator cerdas yang memproses citra, mendeteksi kerusakan, dan memberikan label otomatis sebelum data sampai ke tangan admin.",
    
    problem: "Dinas terkait sering kali dibanjiri ribuan laporan keluhan warga. Masalah utamanya adalah verifikasi dan klasifikasi manual. Petugas harus membuka foto satu per satu untuk menentukan jenis kerusakan (lubang/retak). Proses penyortiran manual ini sangat memakan waktu, rentan human-error, dan memperlambat respons perbaikan.",
    
    solution: "Mengembangkan AI Engine di server yang langsung memproses foto unggahan warga. Menggunakan model YOLOv8, sistem mendeteksi keberadaan kerusakan dan memberikan label otomatis (misal: Pothole, Alligator Crack). Bagi admin, ini berarti data yang masuk sudah terkurasi oleh AI, sehingga validasi akhir dan pengambilan keputusan menjadi jauh lebih cepat.",
    
    features: [
      "Automatic Damage Detection (YOLOv8 Core)",
      "Intelligent Auto-Classification (Lubang/Retak)",
      "Geospatial & AI Analytics Dashboard",
      "Citizen-Government Bridge Interface",
      "Crowdsource Verification (Human-in-the-loop)"
    ],
    github: "https://github.com/4tmaa/roadguard-ai",
    demo: "#",
    image: "/projects/image5.png",
    // PROPERTI VISUAL (PENTING)
    bg: "from-slate-900/40 to-gray-800/40",
    logo: "" 
  },
  {
    slug: "smarthome-web", // Slug tetap sama agar link tidak rusak
    title: "SecureHome: Integrated Access Monitor",
    category: "IoT & Home Security System",
    date: "Mei 2025",
    role: "IoT Engineer & Fullstack Dev",
    
    // Tech Stack diperbarui: Menambahkan Hardware & Backend spesifik
    tech: ["ESP32", "Python Flask", "RFID", "Keypad Matrix", "EEPROM", "MySQL"],
    
    shortDesc: "Sistem keamanan rumah pintar berbasis Multi-Node ESP32 dengan kontrol akses ganda (RFID & Keypad), pemantauan lingkungan, dan manajemen terpusat via Web Dashboard.",
    
    description: "SecureHome adalah ekosistem IoT terdistribusi yang dirancang untuk keamanan rumah modern. Sistem ini membagi beban komputasi ke dalam dua node cerdas (Front Gate & Main Door) yang berkomunikasi secara real-time dengan server pusat berbasis Python Flask, menciptakan lapisan keamanan yang terintegrasi penuh dengan pemantauan lingkungan.",
    
    problem: "Sistem keamanan konvensional sering bekerja secara terisolasi; kunci gerbang dan pintu utama tidak saling terhubung, serta tidak adanya log aktivitas digital. Pemilik rumah kesulitan mengelola akses tamu atau memantau ancaman keamanan (intruder) saat mereka tidak berada di rumah.",
    
    solution: "Mengembangkan arsitektur Multi-Node ESP32: Node Gerbang (Front Gate) menangani akses RFID dan sensor lingkungan (Suhu/Cahaya), sementara Node Pintu Utama (Main Door) menangani keamanan lapis kedua dengan Keypad Matrix dan Solenoid. Seluruh data (Log Akses, Status Pintu, Sensor) disinkronkan ke database cloud dan dapat dikelola via Web Dashboard.",
    
    features: [
      "Multi-Factor Access (RFID & Dynamic PIN)",
      "Intruder Lockout Mechanism (Anti Brute-force)",
      "Smart Environmental Automation (Light Sensors)",
      "Remote PIN Management (OTA to EEPROM)",
      "Real-time State Synchronization (Servo Feedback)",
      "Comprehensive Security Logging (User Audit)"
    ],
    github: "https://github.com/4tmaa/SmartHome-WEB",
    demo: "#",
    image: "/projects/image4.png",
    bg: "from-blue-900/40 to-indigo-900/40",
    logo: ""
  },
  {
    slug: "iot-learn-app",
    title: "IoT Learn: Web Platform & CMS",
    category: "Web Dev & Cloud Computing",
    date: "Desember 2025",
    role: "Fullstack Python Developer",
    
    // Tech stack diperbarui: Fokus ke Backend & Security
    tech: ["Python", "Flask", "Firebase Admin SDK", "RBAC", "Chart.js", "Jinja2"],
    
    shortDesc: "Platform web edukasi berbasis Python Flask dengan CMS terintegrasi Firebase, autentikasi hibrida, dan sistem manajemen konten terpusat.",
    
    description: "IoT Learn Web Platform adalah central hub edukasi yang dibangun menggunakan framework Flask (Python). Aplikasi ini tidak hanya berfungsi sebagai portal belajar bagi siswa, tetapi juga sebagai CMS (Content Management System) backend yang kuat untuk mengelola materi aplikasi mobile, memantau analitik, dan menangani keamanan data pengguna melalui integrasi Firebase Admin SDK.",
    
    problem: "Sementara aplikasi mobile memudahkan akses materi di lapangan, manajemen konten (seperti menulis tutorial panjang atau kode program) sangat sulit dilakukan lewat layar kecil. Selain itu, dibutuhkan sebuah central hub yang aman untuk administrator mengelola data proyek, memantau analitik, dan menyediakan akses materi yang nyaman di layar desktop.",
    
    solution: "Membangun Web Platform menggunakan Flask yang terhubung langsung ke ekosistem Google Firebase. Menerapkan mekanisme Hybrid Authentication di mana token identitas (idToken) dari sisi client diverifikasi validitasnya di server Flask sebelum membuat sesi aman. Ini mencegah pemalsuan identitas dan memisahkan hak akses antara User biasa dan Admin.",
    
    features: [
      "Role-Based Access Control (RBAC @admin_required)",
      "Hybrid Authentication (Client Token Verification)",
      "Dynamic CMS (Text & Cloud Storage Upload)",
      "NoSQL Search Engine (Custom Keyword Array)",
      "Interactive Quiz Module (Server-side Logic)",
      "Dashboard Analytics (Chart.js Visualization)"
    ],
    github: "https://github.com/4tmaa/IoT-Learn-app",
    demo: "#",
    image: "/projects/image3.png",
    bg: "from-teal-900/40 to-emerald-900/40",
    logo: ""
  },
  {
    slug: "sipilah-app",
    title: "SIPILAH: Smart Irrigation System",
    category: "IoT & Smart Agriculture",
    date: "Nov 2025",
    role: "IoT Engineer & Mobile Dev",
    
    // Tech stack disesuaikan dengan narasi (ESP32, BLE, Firebase, NVS)
    tech: ["ESP32", "Firebase", "Flutter", "BLE", "C++", "NVS"],
    
    shortDesc: "Sistem kontrol irigasi 4-kanal berbasis ESP32 dengan sinkronisasi real-time (Firebase) dan fitur konfigurasi jaringan nirkabel via Bluetooth (BLE).",
    
    description: "SIPILAH (Sistem Pintar Lahan & Irigasi) adalah solusi Smart Farming yang dirancang untuk mengatasi kekakuan sistem irigasi konvensional. Sistem ini menawarkan kontrol presisi untuk 4 kanal output (3 Zona Lahan + 1 Pompa Utama) yang tersinkronisasi penuh antara saklar fisik dan aplikasi seluler.",
    
    problem: "Dalam penerapan IoT di area pertanian, tantangan terbesar adalah fleksibilitas koneksi dan sinkronisasi. Perangkat tradisional sering memiliki kredensial Wi-Fi yang ditanam mati (hardcoded), menyulitkan petani saat ganti jaringan. Selain itu, sering terjadi 'state mismatch' di mana status di aplikasi berbeda dengan kondisi saklar fisik di ladang.",
    
    solution: "Mengembangkan Hardware Unit berbasis ESP32 yang mengimplementasikan BLE Provisioning, memungkinkan pengguna mengirim kredensial Wi-Fi via Bluetooth dan menyimpannya di NVS. Sistem kontrol menggunakan Two-Way Synchronization via Firebase Realtime Database, memastikan jika tombol fisik ditekan, status di aplikasi berubah seketika, menciptakan pengalaman yang seamless.",
    
    features: [
      "Dynamic BLE Provisioning (GATT Service)",
      "Real-time State Sync (Firebase Stream)",
      "Multi-Zone Control (3 Zones + 1 Main Pump)",
      "Persistent Configuration (NVS Auto-reconnect)",
      "Robust Input Handling (Software Debouncing)"
    ],
    github: "https://github.com/4tmaa/SIPILAH-APP",
    demo: "#",
    image: "/projects/image6.png",
    bg: "from-orange-900/40 to-red-900/40",
    logo: "/Sipilah2.png"
  },
  {
    slug: "infraconnect",
    title: "InfraConnect: Intelligent Control Hub", // Judul dipadatkan agar pas di UI
    category: "IoT & Smart Home Automation",
    date: "Jan 2026",
    role: "IoT Engineer & System Architect",
    
    // Tech stack diperbarui sesuai narasi teknis
    tech: ["ESP32", "C++", "Fuzzy Logic", "Firebase", "NimBLE", "ESP-NOW", "OLED"],
    
    // Deskripsi singkat untuk Card di halaman depan
    shortDesc: "Robot asisten berbasis ESP32 yang menyatukan kendali perangkat lawas dengan ekosistem pintar melalui Computer Vision dan Fuzzy Logic.",
    
    // Deskripsi lengkap untuk Header halaman detail
    description: "InfraConnect adalah Intelligent Universal Control Hub yang mengubah perangkat elektronik konvensional menjadi pintar. Menggunakan ESP32 sebagai otak utama, robot ini tidak hanya menggantikan remote fisik, tetapi juga membuat keputusan iklim otonom menggunakan algoritma Fuzzy Logic dan memiliki antarmuka wajah OLED yang interaktif.",
    
    problem: "Dalam ekosistem Smart Home saat ini, perangkat elektronik konvensional (seperti AC lama dan TV) sering kali terisolasi karena keterbatasan antarmuka inframerah (IR) satu arah. Pengguna harus berurusan dengan banyak remote fisik, dan sistem otomasi yang ada di pasaran umumnya hanya bersifat 'saklar pintar' tanpa kecerdasan buatan untuk beradaptasi dengan kondisi lingkungan nyata.",
    
    solution: "Mengembangkan Hub Robotik berbasis ESP32 dengan Hybrid IR Engine yang mampu menangani protokol standar maupun Raw Signal Stitching untuk mempelajari kode remote kompleks. Sistem ini mengimplementasikan algoritma Fuzzy Logic (Sugeno-style) yang mengolah data suhu dan estimasi keramaian untuk menentukan keputusan pendinginan paling optimal secara otonom. Semua interaksi disinkronkan real-time via Firebase.",
    
    features: [
      "Autonomous Fuzzy Climate Control (Sugeno Logic)",
      "Hybrid IR Learning System (Raw Signal Stitching)",
      "Seamless BLE Provisioning (NimBLE)",
      "Interactive OLED Interface (Pixel-art Expressions)",
      "Ecosystem Connectivity (ESP-NOW Audio Broadcast)",
      "Routine Automation Engine (Cloud Macros)"
    ],
    github: "https://github.com/4tmaa/InfraConnect",
    demo: "#",
    image: "/projects/image1.png",
    bg: "from-purple-900/40 to-pink-900/40",
    logo: "/Infraconnect.png"
  }
];