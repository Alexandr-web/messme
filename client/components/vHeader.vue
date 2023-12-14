<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="logo" v-if="isAuthFormat">mess<span class="logo__span">me</span></div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        isAuthFormat: {
            type: Boolean,
            default: false,
        },
    }
}
</script>