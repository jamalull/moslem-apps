<template lang="">
    <div class="bawahan">
        <header-moslem/>
        <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section">
            <div class="container text-left">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-text product-more">
                            <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                            <a href="">Category</a><span>Keranjang</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Section Begin -->
        <!-- Shopping Cart Section Begin -->
        <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="cart-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Gambar</th>
                                                <th class="p-name text-center">Nama Produk</th>
                                                <th>Harga</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="cart-pic first-row">
                                                    <img src="img/sajadahrev.png" />
                                                </td>
                                                <td class="cart-title first-row text-center">
                                                    <h5>Sajadah Katun Cokelat</h5>
                                                </td>
                                                <td class="p-price first-row">Rp56.000</td>
                                                <td class="delete-item"><a href="#"><i class="material-icons">
                                                close
                                                </i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="cart-pic first-row">
                                                    <img src="img/sajadahrev2.png" />
                                                </td>
                                                <td class="cart-title first-row text-center">
                                                    <h5>Sajadah Polos</h5>
                                                </td>
                                                <td class="p-price first-row">Rp46.000</td>
                                                <td class="delete-item"><a href="#"><i class="material-icons">
                                                close
                                                </i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <h4 class="mb-4">
                                    Informasi Pembeli:
                                </h4>
                                <div class="user-checkout text-left">
                                    <form>
                                        <div class="form-group">
                                            <label for="namaLengkap">Nama lengkap</label>
                                            <input type="text" class="form-control" id="namaLengkap" aria-describedby="namaHelp" placeholder="Masukan Nama">
                                        </div>
                                        <div class="form-group">
                                            <label for="namaLengkap">Email Address</label>
                                            <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Masukan Email">
                                        </div>
                                        <div class="form-group">
                                            <label for="namaLengkap">No. HP</label>
                                            <input type="text" class="form-control" id="noHP" aria-describedby="noHPHelp" placeholder="Masukan No. HP">
                                        </div>
                                        <div class="form-group">
                                            <label for="alamatLengkap">Alamat Lengkap</label>
                                            <textarea class="form-control" id="alamatLengkap" rows="3"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="proceed-checkout text-left">
                                    <ul>
                                        <li class="subtotal">ID Transaction <span>#SH12000</span></li>
                                        <li class="subtotal mt-3">Subtotal <span>Rp102.000</span></li>
                                        <li class="subtotal mt-3">Pajak <span>10%</span></li>
                                        <li class="subtotal mt-3">Total Biaya <span>Rp112.200</span></li>
                                        <li class="subtotal mt-3">Bank Transfer <span>Mandiri</span></li>
                                        <li class="subtotal mt-3">No. Rekening <span>2208 1996 1403</span></li>
                                        <li class="subtotal mt-3">Nama Penerima <span>Abdullah Alkarim</span></li>
                                    </ul>
                                    <a href="success.html" class="proceed-btn">Bayar Sekarang</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Shopping Cart Section End -->
        <footer-moslem/>
    </div>
</template>

<script>
import FooterMoslem from '../components/FooterMoslem.vue';
import HeaderMoslem from '../components/HeaderMoslem.vue';

export default {
    name:'Keranjang',
    components: {
        HeaderMoslem,
        FooterMoslem
    }
}
</script>
<style lang="">
    
</style>