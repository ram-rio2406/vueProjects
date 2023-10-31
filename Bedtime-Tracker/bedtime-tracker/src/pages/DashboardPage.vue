<template>
    <div>
        <v-container align="center" justify="center">
            <v-row>
                <h1>Daily Tracker</h1>
            </v-row>
            <v-row @click="increment">
                <v-btn color="blue" variant="tonal" rounded="xl" size="x-large" prepend-icon="mdi-plus">
                    {{ getCount }} New Entry</v-btn>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    name: 'DashboardPage',
    computed: {
        getCount(){
            return this.$store.state.count
        }
    },
    methods: {
        increment(){
            this.$store.commit('increment')
        }
    }
}
</script>
