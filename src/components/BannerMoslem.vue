<template lang="">
    <div>
        <!-- Hero Section Begin -->
    <section class="hero-section">
        <carousel class="hero-items" :items="1" :nav="false" :autoplay="true" :loop="true" :dots="false">
            <div class="single-hero-items set-bg" style="background-image: url('img/banner1.gif')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <!-- <span>Spesial Hari Kemerdekaan</span>
                            <h1>Diskon 50% Untuk Semua Produk</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Mulai Belanja</a> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('img/banner2.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <!-- <span>Spesial Hari Kemerdekaan</span>
                            <h1>Diskon 50% Untuk Semua Produk</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Mulai Belanja</a> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('img/heroku_1.png')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Spesial Hari Kemerdekaan</span>
                            <h1>Diskon 50% Untuk Semua Produk</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Mulai Belanja</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('img/heroku_2.png')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Spesial Hari Kemerdekaan</span>
                            <h1>Diskon 50% Untuk Semua Produk</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Mulai Belanja</a>
                        </div>
                    </div>
                </div>
            </div>
        </carousel>
    </section>
    <!-- Hero Section End -->
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel';

export default {
    name:'Banner',
    components: {
        carousel
    }
}
</script>
<style lang="">
    
</style>