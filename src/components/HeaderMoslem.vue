<template>
    <div>
        <!-- Header Section Begin -->
        <header class="header-section">
            <div class="header-top">
                <div class="container">
                    <div class="ht-left">
                        <div class="mail-service">
                            <i class=" fa fa-envelope"></i> Moslem.Store@gmail.com
                        </div>
                        <div class="phone-service">
                            <i class=" fa fa-phone"></i> +628 22081996
                        </div>
                    </div>

                    <div class="mt-3 ht-right drop">
                        <li class="dropdown">
                            <h6 class="mr-3">Nama Akun User Moslem Apps</h6>
                            <a href="#">
                                <img src="img/Profile.png" alt="" width="28" height="28">
                            </a>
                            <ul class="isi-dropdown ml-4">
                                <li>
                                    <a href="#">Pengaturan Akun</a>
                                    <a href="#">Saran & Kritik</a>
                                    <a href="#">Customer Service</a>
                                    <a href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="inner-header">
                    <div class="row">
                        <div class="col-lg-2 col-md-2">
                            <div class="logo">
                                <a href="./index.html">
                                    <img src="img/moslemlogostore.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4"></div>
                        <div class="col-lg-3 text-right col-md-3">
                            <ul class="nav-right">
                                <li class="cart-icon">
                                    Kategori &nbsp;<i class="fa fa-caret-down"></i>
                                    <div class="cart-hover">
                                        <div class="select-items">
                                            <table>
                                                <tbody>
                                                    <tr align="center">
                                                        <td> <a href="#">Atasan</a></td>
                                                    </tr>
                                                    <tr align="center">
                                                        <td> <a href="#">Bawahan</a></td>
                                                    </tr>
                                                    <tr align="center">
                                                        <td> <a href="#">Aksesoris</a></td>
                                                    </tr>
                                                    <tr align="center">
                                                        <td> <a href="#">Hijab</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 text-right col-md-3">
                            <ul class="nav-right">
                                <li class="cart-icon">
                                    Keranjang Belanja &nbsp;
                                    <a href="#">
                                        <i class="icon_bag_alt"></i>
                                        <span>3</span>
                                    </a>
                                    <div class="cart-hover">
                                        <div class="select-items">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="si-pic">
                                                            <img src="img/sajadahrev.png" alt="" />
                                                        </td>
                                                        <td class="si-text">
                                                            <div class="product-selected">
                                                                <p>Rp56.000 x 1</p>
                                                                <h6>Sajadah Katun Cokelat</h6>
                                                            </div>
                                                        </td>
                                                        <td class="si-close">
                                                            <i class="ti-close"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="si-pic">
                                                            <img src="img/sajadahrev2.png" alt="" />
                                                        </td>
                                                        <td class="si-text">
                                                            <div class="product-selected">
                                                                <p>Rp46.000 x 1</p>
                                                                <h6>Sajadah Polos</h6>
                                                            </div>
                                                        </td>
                                                        <td class="si-close">
                                                            <i class="ti-close"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="select-total">
                                            <span>total:</span>
                                            <h5>Rp102.000</h5>
                                        </div>
                                        <div class="select-button">
                                            <a href="#" class="primary-btn view-card">VIEW CARD</a>
                                            <a href="shopping-cart.html" class="primary-btn checkout-btn">CHECK OUT</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Header End -->
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>
<style scoped>
.dropdown .isi-dropdown {
    list-style-type: none;
    margin-left: -35px;
    padding: 0;
    overflow: hidden;
}
.dropdown li a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 8px 14px;
    text-decoration: none;
}

li.dropdown {
    display: inline-block;
}

.dropdown:hover .isi-dropdown {
    display: block;
}

.isi-dropdown a:hover {
    color: #fff !important;
}

.isi-dropdown {
    position: absolute;
    display: none;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    background-color:white;
}

.isi-dropdown a {
    color: #3c3c3c !important;
}

.isi-dropdown li {
    display: grid;
    width: 250px;
}

.isi-dropdown a:hover {
    color: #232323 !important;
    background: #f3f3f3 !important;
}

.drop h6 {
    margin-top: 2px;
    float: left;
}
</style>