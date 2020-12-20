<template lang="">
    <div class="hijab">
        <header-moslem/>
        
        <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section">
            <div class="container text-left">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-text product-more">
                            <a href="./index.html"><i class="fa fa-home"></i> Home</a>
                            <a href="">Category</a><span>Hijab</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Section Begin -->
        <!-- <breadcrumb/> -->
        <category-hijab/>
        <footer-moslem/>
    </div>
</template>

<script>
// import Breadcrumb from '../components/Breadcrumb.vue';
import FooterMoslem from '../components/FooterMoslem.vue';
import HeaderMoslem from '../components/HeaderMoslem.vue';
import CategoryHijab from '../components/CategoryHijab.vue';

export default {
    name:'hijabProduct',
    components: {
        HeaderMoslem,
        CategoryHijab,
        FooterMoslem
        // Breadcrumb
    }
}
</script>
<style lang="">
    
</style>