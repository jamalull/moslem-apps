<template>
  <div class="home">
    <header-landing-page/>
    <banner-moslem/>
    <product-slider/>
    <gallery-moslem-1/>
    <partner-moslem/>
    <footer-moslem/>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderLandingPage from '../components/HeaderLandingPage.vue';
import BannerMoslem from '../components/BannerMoslem.vue';
import ProductSlider from '../components/ProductSlider.vue';
import GalleryMoslem1 from '../components/GalleryMoslem1.vue';
import PartnerMoslem from '../components/PartnerMoslem.vue';
import FooterMoslem from '../components/FooterMoslem.vue';


export default {
  name: 'Home',
  components: {
    HeaderLandingPage,
    BannerMoslem,
    ProductSlider,
    GalleryMoslem1,
    PartnerMoslem,
    FooterMoslem
    // HelloWorld
  }
}
</script>
