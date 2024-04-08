<template>
    <div id="app">
        <h4>{{ $t('message.hello') }} Vue I18n</h4>
        <button @click="setLocale('en')">English</button>
        <button @click="setLocale('es')">Spanish</button>
    </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        setLocale(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>