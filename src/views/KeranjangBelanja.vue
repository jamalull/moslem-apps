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
                            <a href="">Category</a><span>Bawahan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Section Begin -->
        <category-bawahan/>
        <footer-moslem/>
    </div>
</template>

<script>
import FooterMoslem from '../components/FooterMoslem.vue';
import HeaderMoslem from '../components/HeaderMoslem.vue';

export default {
    name:'BawahanProduct',
    components: {
        HeaderMoslem,
        FooterMoslem
    }
}
</script>
<style lang="">
    
</style>