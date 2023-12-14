<template>
    <div class="layout layout--empty">
        <vHeader :isAuthFormat="true" />
        <div class="auth">
            <div class="container">
                <Nuxt />
            </div>
        </div>
    </div>
</template>
<script>
import vHeader from "@/components/vHeader.vue";

export default {
    components: {
        vHeader,
    }
}
</script>