<template lang="">
    <div>
        <!-- Women Banner Section Begin -->
        <section class="women-banner spad">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 mt-5">
                        <carousel class="product-slider" :items="3" :autoplay="true" :autoplayTimeout="4000" :nav="false" :loop="true" :dots="false">
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img src="img/products/Kemko-Aska.jpg" alt="" />
                                    <ul>
                                        <li class="w-icon active">
                                            <a href="#"><i class="icon_bag_alt"></i></a>
                                        </li>
                                        <li class="quick-view">
                                            <router-link to="/product">+ Lihat Detail</router-link>
                                            </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Atasan</div>
                                    <a href="#">
                                        <h5>Kemko Aska</h5>
                                    </a>
                                    <div class="product-price">
                                        Rp140.000
                                        <span>Rp200.000</span>
                                    </div>
                                </div>
                            </div>
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img src="img/products/KRD-MARBELA.jpg" alt="" />
                                    <ul>
                                        <li class="w-icon active">
                                            <a href="#"><i class="icon_bag_alt"></i></a>
                                        </li>
                                        <li class="quick-view"><a href="#">+ Lihat Detail</a></li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Atasan</div>
                                    <a href="#">
                                        <h5>Hijab Marbella</h5>
                                    </a>
                                    <div class="product-price">
                                        Rp120.000
                                        <span>Rp300.000</span>
                                    </div>
                                </div>
                            </div>
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img src="img/products/Kemko-Awalu.jpg" alt="" />
                                    <ul>
                                        <li class="w-icon active">
                                            <a href="#"><i class="icon_bag_alt"></i></a>
                                        </li>
                                        <li class="quick-view"><a href="#">+ Lihat Detail</a></li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Atasan</div>
                                    <a href="#">
                                        <h5>Kemko Awalu</h5>
                                    </a>
                                    <div class="product-price">
                                        Rp150.000
                                        <span>Rp220.000</span>
                                    </div>
                                </div>
                            </div>
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img src="img/products/KRD-INKA.jpg" alt="" />
                                    <ul>
                                        <li class="w-icon active">
                                            <a href="#"><i class="icon_bag_alt"></i></a>
                                        </li>
                                        <li class="quick-view"><a href="#">+ Lihat Detail</a></li>
                                        <li class="w-icon">
                                            <a href="#"><i class="fa fa-random"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Atasan</div>
                                    <a href="#">
                                        <h5>Hijab inka</h5>
                                    </a>
                                    <div class="product-price">
                                        Rp130.000
                                        <span>Rp260.000</span>
                                    </div>
                                </div>
                            </div>
                        </carousel>
                    </div>
                </div>
            </div>
        </section>
        <!-- Women Banner Section End -->
    </div>
</template>

<script>
import carousel from "vue-owl-carousel"

export default {
    name:'productslider',
    components: {
        carousel
    }
}
</script>

<style scoped>
.product-item {
    margin-right: 25px;
    }    
</style>