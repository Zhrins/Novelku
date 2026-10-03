// File: data5.js
const novelData5 = [
    { 
        title: "Bab 7: Hari ke-90 — Suara Tawa yang Disimpan dalam Kode", 
        content: `
            <p>Pukul 03.00 dini hari. Suasana di dalam kamar Sakra terasa sangat pekat dan sunyi. Hanya suara desis halus dari kipas pendingin laptop dan kedipan lampu indikator <em>router</em> Wi-Fi yang menemani keheningan tersebut. Di luar jendela, udara dingin Kota Bandung menyelimuti genting-genting rumah warga, sementara Sakra masih terjaga di depan layar monitornya, tenggelam dalam dunia baris-baris kode yang memenuhi setengah layar.</p>
            <p>Sudah berminggu-minggu sejak malam rekonsiliasi via telepon dan awal mula pembuatan folder <em>Project_179</em>. Hari ini, kalender digital di sudut layar menunjukkan Hari ke-90. Artinya, sudah tiga bulan penuh Sakra mencurahkan segenap tenaga, pikiran, dan waktu istirahatnya di sela-sela kesibukan sekolah dan MDC Pramuka untuk menyempurnakan proyek rahasia tersebut.</p>
            <p>Sakra meregangkan otot-otot lehernya yang terasa kaku, mengeluarkan bunyi <em>kletuk</em> pelan dari tulang belakangnya. Matanya terasa perih akibat terlalu lama menatap pantulan cahaya putih dari teks editor <em>Visual Studio Code</em>. Namun, alih-alih merasa lelah, ada binar kepuasan yang terpancar di wajah mudanya. Struktur dasar dari web interaktif itu kini sudah hampir rampung sepenuhnya.</p>
            <p>Ia mendesain situs tersebut layaknya sebuah galaksi digital pribadi. Ketika tautan web itu nantinya dibuka, pengguna akan disambut oleh latar belakang langit malam berbintang yang bergerak pelan. Di bagian tengah layar, terdapat animasi dua titik koordinat yang dihubungkan oleh sebuah garis linier bercahaya: titik pertama bertuliskan <em>Bandung (Sakra)</em> dan titik kedua bertuliskan <em>Pangandaran (Tasya)</em>, dengan bentangan jarak <em>179 km</em> yang terus berdenyut lembut di antara keduanya.</p>
            <p>Namun, Sakra merasa ada satu elemen krusial yang masih kurang. Situs itu tampak cantik secara visual dan rapi secara struktur pemrograman, tetapi masih terasa dingin. Web itu membutuhkan sesuatu yang lebih hidup—sesuatu yang bisa langsung menyentuh emosi siapa pun yang membukanya, terutama Tasya.</p>
            <p>Sakra bersandar ke sandaran kursi, mengetukkan ujung jarinya ke atas meja kayu sambil berpikir keras. Matanya menatap folder direktori <em>assets/audio/</em> di dalam struktur proyek kodenya.</p>
            <p>Tiba-tiba, sebuah ide melintas di kepalanya. Sebuah ide yang agak gila, sangat personal, dan membutuhkan kerja ekstra untuk mengekstraknya dari riwayat obrolan masa lalu.</p>
            <p><em>Rekaman suara.</em></p>
            <p>Sakra teringat pada puluhan, bahkan ratusan <em>voice note</em> dan rekaman panggilan telepon lama yang tersimpan rapi di arsip penyimpanan lokal WhatsApp miliknya. Selama dua tahun bersahabat dan berhubungan jarak jauh dengan Tasya, ada banyak sekali potongan suara tawa, obrolan konyol, helaan napas, hingga nada manja Tasya yang terekam secara tidak langsung di sela-sela percakapan mereka.</p>
            <p>Tanpa buang waktu, Sakra membuka aplikasi pemutar audio dan mulai menyaring arsip lama tersebut. Ia menelusuri satu per satu fail suara berformat <em>mp4</em> dan <em>ogg</em> dari bulan-bulan sebelumnya, memasang <em>earphone</em> putih ke telinganya, dan mendengarkan ulang kenangan demi kenangan yang tersimpan di dalam fail-fail kecil tersebut.</p>
            <p>Suara tawa Tasya yang renyah dan meledak-ledak saat mereka membahas guru fisika yang salah memakai sepatu menyapa telinganya. Suara Tasya yang mengomel karena jajanannya direbut adiknya. Suara tawa kecil yang khas setiap kali Tasya mengejek kebiasaan Sakra yang hobi begadang. Potongan-potongan suara itu berputar di kepala Sakra, menghadirkan kehangatan instan di tengah dinginnya malam di kamar tersebut.</p>
            <p>Sakra memilih tiga potongan suara terbaik yang memuat tawa paling jernih dan natural dari Tasya. Dengan menggunakan perangkat lunak penyunting audio sederhana, ia memotong bagian suaranya saja, membersihkan <em>noise</em> latar belakang menggunakan filter <em>digital frequency</em>, lalu mengekspornya menjadi fail audio berukuran kecil berformat <em>.mp3</em>.</p>
            <p>Ia menyematkan fail-fail audio rahasia itu langsung ke dalam direktori <em>Project_179</em>.</p>
            <p>Selanjutnya, Sakra menulis fungsi skrip JavaScript interaktif. Ia memprogram sebuah tombol khusus berbentuk ikon hati kecil di sudut kanan halaman web tersebut. Logika kodenya sederhana namun romantis: <em>jika tombol itu diklik oleh pengguna, animasi galaksi akan memancarkan partikel cahaya emas, dan potongan rekaman suara tawa Tasya akan mengalir keluar secara jernih dari pengeras suara.</em></p>
            <p>Sakra mengetik baris kodenya dengan teliti:</p>
            <blockquote>
                <code>const playButton = document.getElementById('SecretVoiceBtn');</code><br>
                <code>const audioElement = new Audio('assets/audio/tasya_laugh_v2.mp3');</code><br><br>
                <code>playButton.addEventListener('click', () => {</code><br>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;audioElement.play();</code><br>
                <code>&nbsp;&nbsp;&nbsp;&nbsp;triggerGalaxyAnimation();</code><br>
                <code>});</code>
            </blockquote>
            <p>Ia menguji kodenya dengan menekan tombol <em>Run</em> di terminal lokal.</p>
            <p>Beberapa detik kemudian, <em>browser</em> <em>localhost</em> terbuka otomatis di layar monitor. Sakra mengarahkan tetikusnya ke ikon hati kecil di pojok layar, lalu mengkliknya.</p>
            <p><em>Kring...</em></p>
            <p>Suara tawa Tasya yang begitu jernih, renyah, dan akrab tiba-tiba mengalun keluar dari <em>speaker</em> laptop Sakra, memecah kesunyian malam di kamarnya. Diiringi animasi partikel bintang yang mekar di layar, suara itu terdengar begitu hidup—seolah-olah Tasya sedang duduk tepat di sebelah kursinya, tertawa lepas menertawakan lelucon garing yang baru saja Sakra ucapkan.</p>
            <p>Sakra tertegun di kursi kerjanya. Senyum tulus merekah lebar di sudut bibirnya. Rasa lelah yang sempat mendera fisiknya seketika menguap, tergantikan oleh gelombang kebahagiaan yang membuncah di dada. Ia merasa telah berhasil mengabadikan esensi kehadiran Tasya ke dalam barisan kode digital yang abadi.</p>
            <p>Ia mengetik perintah <em>git commit</em> dan <em>git push</em> untuk mengunggah seluruh pembaruan kode tersebut ke repositori jarak jauh <em>GitHub Pages</em> miliknya, memastikan proyek itu nanti bisa diakses secara online lewat tautan khusus tanpa kendala.</p>
            <blockquote>
                <code>git add .</code><br>
                <code>git commit -m "feat: add secret audio triggers and 179km distance animation"</code><br>
                <code>git push origin main</code>
            </blockquote>
            <p>Proses <em>deployment</em> berjalan mulus. Pesan sukses berwarna hijau muncul di terminal: <em>“Active at https://zhrins.github.io/Project_179/”</em>—siap meluncur kapan saja saat hari H tiba.</p>
            <p>Sakra bersandar lega, menutup laptopnya perlahan. Jam dinding menunjukkan pukul 03.45 pagi. Meskipun tubuhnya menjerit meminta istirahat total, ada rasa bangga yang luar biasa menyelimuti hatinya. Ia telah menyimpan suara tawa Tasya ke dalam barisan kode yang tidak akan pernah hilang oleh waktu.</p>
            <p>Namun, di balik keindahan dan ketulusan niatnya itu, Sakra masih belum menyadari sepenuhnya bahwa proyek digital yang ia bangun dengan begitu teliti ini kelak akan menuntut sebuah tanggung jawab emosional yang sangat besar. Bagi Tasya di Pangandaran, menerima sebuah monumen digital semegah ini dari seorang kekasih yang berjuang setengah mati di Bandung bukanlah sekadar kejutan manis; itu adalah sebuah beban tak kasat mata—sebuah standar cinta yang begitu tinggi, yang membuat gadis itu merasa semakin kecil dan tidak berdaya di hadapan pengorbanan Sakra.</p>
            <p>Tapi malam itu, di Hari ke-90, Sakra menutup matanya dengan senyum paling tenang yang pernah ia miliki dalam tiga bulan terakhir, merasa bahwa ia telah melakukan hal paling hebat di dunia demi mempertahankan cinta yang terbentang sejauh 179 kilometer.</p>
        `
    }
];
