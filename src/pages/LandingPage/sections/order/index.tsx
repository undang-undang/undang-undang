import React from "react";

import * as Icons from 'assets/icons'
import './style.css';

const Order: React.FC = () => {
  return (
    <section className='order'>
      <h1>Cara Pesan Jasa Undangan Digital</h1>
      <h3>Tiga langkah mudah membuat undangan digital</h3>

      <div className='grid'>
        <div className='order-step'>
          <img src={Icons.order} alt='' />
          <h3>Pilih Paket, Pesan & Bayar</h3>
          <p>Pesan undangan digitalmu sesuai dengan tema dan paket yang kamu inginkan, kemudian lakukan pembayaran ke rekening undang-undang.</p>
        </div>
        <div className='order-step'>
          <img src={Icons.progress} alt='' />
          <h3>Proses Produksi</h3>
          <p>Undang-undang akan membuat undangan digitalmu dengan waktu paling lama 4 hari.</p>
        </div>
        <div className='order-step'>
          <img src={Icons.shipping} alt='' />
          <h3>Pengiriman Link</h3>
          <p>Setelah jadi, undangan digitalmu akan akan dikirimkan berupa link website ke nomor WhatsApp kamu.</p>
        </div>
      </div>

      <h1>PILIHAN PAKET HARGA UNDANGAN ONLINE</h1>
      <h3>Tersedia tiga pilihan paket undangan pernikahan digital untuk hari spesial Anda</h3>
      <div className='grid'>
        <div className='order-options'>
          <div>
            <h3>Silver</h3>
            <div>
              <h2>Rp 200.000,-</h2>
              <h3>Rp 149.000,-</h3>
              <button>Pesan Sekarang</button>
            </div>
            <p>Unlimited nama tamu</p>
            <p>Informasi mempelai</p>
            <p>Informasi acara</p>
            <p>Informasi Prokes</p>
            <p>Gmaps lokasi</p>
            <p>Countdown Acara</p>
            <p>Love quotes</p>
            <p>Wedding Wishes</p>
            <p>Save the date</p>
            <p>Background Musik template</p>
            <p>Gallery foto (9 foto)</p>
            <p>Background cover (3 foto)</p>
            <p>Masa berlaku 2 bulan</p>
          </div>
        </div>
        <div className='order-options'>
          <div style={{ position: 'relative' }}>
            <p className='best-deal'>Best Deal</p>
            <h3>Gold</h3>
            <h3>Rp 350.000,-</h3>
            <h1>Rp 249.000,-</h1>
            <button>Pesan Sekarang</button>
            <p>Semua fitur <b>Silver</b></p>
            <p>Background Musik pilihan</p>
            <p>Gallery foto (15 foto)</p>
            <p>Background cover (6 foto)</p>
            <p>Display Video</p>
            <p>Love Story</p>
            <p>Angpao Online</p>
            <p>RSVP via whatsapp</p>
            <p>Masa berlaku 3 bulan</p>
          </div>
        </div>
        <div className='order-options'>
          <div>
            <h3>Diamond</h3>
            <div>
              <h2>Rp 500.000,-</h2>
              <h3>Rp 329.000,-</h3>
              <button>Pesan Sekarang</button>
            </div>
            <p>Semua Fitur <b>Silver</b></p>
            <p>Semua Fitur <b>Gold</b></p>
            <p>Background cover (9 foto)</p>
            <p>Gallery foto (Unlimited)</p>
            <p>Custom tema warna semua halaman</p>
            <p>Custom background pattern</p>
            <p>Masa berlaku 6 Bulan</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Order;