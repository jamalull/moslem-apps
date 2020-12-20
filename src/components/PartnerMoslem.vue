<template lang="">
    <div>
        <!-- Partner Logo Section Begin -->
        <div class="partner-logo">
            <h1>Moslem Partner</h1>
            <div class="container">
                <carousel class="logo-carousel" :nav="false" :autoplay="true" :loop="true" :dots="false">
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/rabbani.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/mayoutfit.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/hijabenka.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/zoya.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/mecanism.png" alt="" />
                        </div>
                    </div>
                </carousel>
            </div>
        </div>
        <!-- Partner Logo Section End -->
    </div>
</template>
<script>

import carousel from 'vue-owl-carousel'
export default {
    name:'partnerlogo',
    components: {
        carousel
    }
}
</script>
<style>
    
</style>