<template>
    <div>
    <!-- Header Section Begin -->
        <header class="header-section">
            <div class="header-top fixed-top">
                <div class="container">
                    <div class="ht-left">
                        <div class="mail-service">
                            <i class=" fa fa-envelope"></i> Moslem.Store@gmail.com
                        </div>
                        <div class="phone-service">
                            <i class=" fa fa-phone"></i> +628 22081996
                        </div>
                    </div>
                    <div class="ht-right mt-2 mb-2">
                        <a href="page-register.html" class="btn btn-outline-warning">Daftar</a>
                    </div>
                    <div class="ht-right mr-1">
                    </div>
                    <i class="mx-1 bdr">&nbsp;</i>
                    <div class="ht-right mt-2 mb-2">
                        <a href="page-login.html" class="btn btn-warning">Masuk</a>
                    </div>
                    
                </div>
            </div>
            <div class="container">
                <div class="inner-header">
                    <div class="row">
                        <div class="col-lg-2 col-md-2">
                            <div class="logo">
                                <a href="./landingpage.html">
                                    <img src="img/moslemlogostore.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7"></div>
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
                    </div> <!--Div row End -->
                </div>
            </div>
        </header>
    <!-- Header End -->
    </div>
</template>

<script>
export default {
    name:"HeaderHome"
}
</script>
<style scoped>
    .inner-header {
    margin-top: 30px;
}
</style>