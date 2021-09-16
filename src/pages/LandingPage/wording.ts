import * as Icons from 'assets/icons'

const orders = {
  steps: [
    {
      icon: Icons.order,
      title: 'Lakukan Pemesanan',
      desc: 'Pilih paket kemudian hubungi tim undang-undang.com melalui nomor W.A'
    },
    {
      icon: Icons.progress,
      title: 'Proses Produksi',
      desc: 'Undang-undang akan membuat undangan digitalmu dengan waktu paling lama 4 hari'
    },
    {
      icon: Icons.shipping,
      title: 'Pengiriman Link',
      desc: 'Undangan digital kamu akan akan dikirimkan berupa link website ke nomor WhatsApp kamu'
    },
  ]
}

const features = [
  {
    icon: Icons.customName,
    title: 'Custom Nama Tamu',
    desc: 'Sebar undangan digitalmu secara personal dengan menambahkan nama undangan dihalaman depan'
  },
  {
    icon: Icons.countdown,
    title: 'Countdown Acara',
    desc: 'Menghitung mundur momen istimewamu agar lebih mudah diingat tamu undangan'
  },
  {
    icon: Icons.saveDate,
    title: 'Save The Date',
    desc: 'Tamu undangan dapat menyimpan pengingat acara pernikahanmu dalam Google Calendar mereka'
  },
  {
    icon: Icons.rsvp,
    title: 'RSVP',
    desc: 'Tamu undangan dapat melakukan konfirmasi kehadiran yang akan dikirim melalui WhatsApp kamu'
  },
  {
    icon: Icons.angpao,
    title: 'Hadiah',
    desc: 'Fitur ini berisi mengenai informasi nomor rekening atau alamat pengiriman hadiah untuk kamu'
  },
  {
    icon: Icons.loveStory,
    title: 'Love Story',
    desc: 'Tamu undangan dapat mengikuti kisah cintamu yang kamu bagikan melalui fitur ini'
  },
  {
    icon: Icons.specialInfo,
    title: 'Special Info',
    desc: 'Kolom informasi khusus jika kamu ingin menginfokan mengenai tentang ketentuan acaramu. Contoh : ketentuan dresscode'
  },
  {
    icon: Icons.gallery,
    title: 'Gallery Foto',
    desc: 'Menampilkan galeri kebersamaan kamu bersama pasangan agar undangan kamu semakin menarik'
  },
  {
    icon: Icons.music,
    title: 'Background Musik',
    desc: 'Terdapat background musik pada undangan digital kamu'
  },
  {
    icon: Icons.wedWish,
    title: 'Wedding Wishes',
    desc: 'Ucapan dan doa untuk hari istimewamu dari tamu undangan'
  },
  {
    icon: Icons.gmaps,
    title: 'Google Maps',
    desc: 'Fitur yang akan memudahkan tamu undangan saat mencari lokasi acara, karena terintegrasi dengan Google Maps'
  },
  {
    icon: Icons.loveQuotes,
    title: 'Love Quotes',
    desc: 'Quotes favoritmu dan pasangan dapat kami cantumkan dalam undangan digitalmu'
  },
]

const reasons = [
  {
    icon: Icons.affordable,
    title: 'Biaya Terjangkau',
    desc: 'Mulai dari Rp 149.000,- kamu bisa mendapatkan undangan digital ekslusif dengan berbagai fitur dan kelebihan'
  },
  {
    icon: Icons.fast,
    title: 'Proses Cepat',
    desc: 'Proses pengerjaan undangan digital maksimal 4 hari setelah data yang kami terima sudah lengkap'
  },
  {
    icon: Icons.best,
    title: 'Pelayanan terbaik',
    desc: 'Team kami akan selalu memberika pelayanan yang terbaik untuk memaksimalkan kepuasan kamu'
  },
  {
    icon: Icons.premium,
    title: 'Tema Undangan Premium',
    desc: 'Desain premium dibuat khusus oleh tim kami, bukan desain template yang beredar dipasaran'
  },
  {
    icon: Icons.customizeable,
    title: 'Customizable',
    desc: 'Kamu dapat mengubah tema warna maupun background pattern sesuai dengan keinginan kamu'
  },
  {
    icon: Icons.unlimited,
    title: 'Unlimited Revisi',
    desc: 'Revisi tidak terbatas untuk memastikan undangan digital yang kamu bikin sudah sesuai dengan keinginan kamu'
  },
]

const priceList = [
  {
    type: 'Silver',
    includeTier: [],
    tier: 0,
    price: 'Rp 200.000,-',
    salePrice: 'Rp 149.000',
    isBestDeal: false,
    list: [
      'Unlimited nama tamu',
      'Informasi mempelai',
      'Informasi acara',
      'Informasi Prokes',
      'Gmaps lokasi',
      'Countdown Acara',
      'Love quotes',
      'Wedding Wishes',
      'Save the date',
      'Background Musik template',
      'Gallery foto (9 foto)',
      'Background cover (3 foto)',
      'Masa berlaku 2 bulan',
    ]
  },
  {
    type: 'Gold',
    includeTier: ['Silver'],
    tier: 1,
    price: 'Rp 350.000,-',
    salePrice: 'Rp 249.000',
    isBestDeal: true,
    list: [
      'Background Musik pilihan',
      'Gallery foto (15 foto)',
      'Background cover (6 foto)',
      'Display Video',
      'Countdown Acara',
      'Love Story',
      'Angpao Online',
      'Masa berlaku 3 bulan',
    ]
  },
  {
    type: 'Platinum',
    includeTier: ['Silver', 'Gold'],
    tier: 3,
    price: 'Rp 500.000,-',
    salePrice: 'Rp 329.000',
    isBestDeal: false,
    list: [
      'Background Musik pilihan',
      'Gallery foto (15 foto)',
      'Background cover (6 foto)',
      'Display Video',
      'Countdown Acara',
      'Love Story',
      'Angpao Online',
      'Masa berlaku 3 bulan',
    ]
  },
]

export {
  features,
  orders,
  reasons,
  priceList,
}