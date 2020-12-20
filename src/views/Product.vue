<template>
    <div class="product">
        <header-moslem/>
        <breadcrumb/>
        <!-- Product Shop Section Begin -->
      <section class="product-shop spad page-details">
          <div class="container text-left">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="row">
                          <div class="col-lg-6">
                              <div class="product-pic-zoom">
                                  <img class="product-big-img" :src="img" alt="" />
                              </div>
                              <div class="product-thumbs">
                                  <carousel class="product-thumbs-track ps-slider" :items="3" :autoplay="true" :autoplayTimeout="4000" :nav="false" :loop="true" :dots="false">
                                      <div class="pt" @click="changeImage(thumbs[0])" :class="thumbs[0] == img ? 'active' : '' ">
                                          <img src="img/products/elvirapants1.PNG" alt="" />
                                      </div>

                                      <div class="pt" @click="changeImage(thumbs[1])" :class="thumbs[1] == img ? 'active' : '' ">
                                          <img src="img/products/elvirapants2.PNG" alt="" />
                                      </div>

                                      <div class="pt" @click="changeImage(thumbs[2])" :class="thumbs[2] == img ? 'active' : '' ">
                                          <img src="img/products/elvirapants3.PNG" alt="" />
                                      </div>

                                      <div class="pt" @click="changeImage(thumbs[3])" :class="thumbs[3] == img ? 'active' : '' ">
                                          <img src="img/products/elvirapants4.PNG" alt="" />
                                      </div>
                                  </carousel>
                              </div>
                          </div>
                          <div class="col-lg-6">
                              <div class="product-details">
                                  <div class="pd-title">
                                      <span>Bawahan</span>
                                      <h3>Elvira Pants</h3>
                                  </div>
                                  <div class="pd-desc">
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                                      </p>
                                      <p>
                                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                                          Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                                          Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                          impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                                      </p>
                                      <h4>Rp100.000</h4>
                                  </div>
                                  <div class="quantity">
                                      <a href="shopping-cart.html" class="primary-btn pd-cart">Add To Cart</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- Product Shop Section End -->

      <!-- Related Products Section End -->
      <div class="related-products spad">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="section-title">
                          <h2>Related Products</h2>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-3 col-sm-6">
                      <div class="product-item">
                          <div class="pi-pic">
                              <img src="img/products/zoliepants.jpg" alt="" />
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
                              <div class="catagory-name">Bawahan</div>
                              <a href="#">
                                  <h5>Zolie Pants</h5>
                              </a>
                              <div class="product-price">
                                  Rp110.000
                                  <span>Rp220.000</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                      <div class="product-item">
                          <div class="pi-pic">
                              <img src="img/products/creampants1.PNG" alt="" />
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
                              <div class="catagory-name">Bawahan</div>
                              <a href="#">
                                  <h5>Cream Pants</h5>
                              </a>
                              <div class="product-price">
                                  Rp130.000
                                  <span>Rp260.000</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                      <div class="product-item">
                          <div class="pi-pic">
                              <img src="img/products/nadellapants1.PNG" alt="" />
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
                              <div class="catagory-name">Bawahan</div>
                              <a href="#">
                                  <h5>Nadella Pants</h5>
                              </a>
                              <div class="product-price">
                                  Rp150.000
                                  <span>Rp180.000</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                      <div class="product-item">
                          <div class="pi-pic">
                              <img src="img/products/kulotorange1.PNG" alt="" />
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
                              <div class="catagory-name">Bawahan</div>
                              <a href="#">
                                  <h5>Kulot Orange</h5>
                              </a>
                              <div class="product-price">
                                  Rp100.000
                                  <span>Rp180.000</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Related Products Section End -->

        <footer-moslem/>
    </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
import carousel from 'vue-owl-carousel';
import Breadcrumb from '../components/Breadcrumb.vue';
import FooterMoslem from '../components/FooterMoslem.vue';
import HeaderMoslem from '../components/HeaderMoslem.vue';


export default {
  name: 'Home',
  components: {
    HeaderMoslem,
    FooterMoslem,
    carousel,
    Breadcrumb
    // HelloWorld
  },
  data() {
    return {
      img: "img/products/elvirapants1.PNG",
      thumbs: [
        "img/products/elvirapants1.PNG",
        "img/products/elvirapants2.PNG",
        "img/products/elvirapants3.PNG",
        "img/products/elvirapants4.PNG"
      ]
    }
  },
  methods: {
    changeImage(urlImage) {
      this.img=urlImage;
    }
  }
};
</script>
<style scoped>
.product-thumbs .pt {
  margin-right: 15px;
}  
</style>