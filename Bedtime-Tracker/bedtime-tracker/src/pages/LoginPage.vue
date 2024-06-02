<template>
    <v-container>
        <v-row>
            <v-col>
                <v-row>
                    <v-text-field label="Username" type="text"></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field :label="isNew ? 'New Password' : 'Password'" type="password"></v-text-field>
                </v-row>
                <v-row v-if="isNew">
                    <v-text-field label="Confirm Password" type="password"></v-text-field>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-if="isNew">
                <v-btn variant="tonal" class="v-col-auto">Create Account</v-btn>
            </v-col>
            <v-col v-if="!isNew">
                <router-link to="/dashboard">
                    <v-btn variant="tonal" class="v-col-auto">Login</v-btn>
                </router-link>
            </v-col>
            <v-col v-if="!isNew">
                <v-btn variant="tonal" class="v-col-auto">Forgot Password</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default({
    name: 'LoginPage',
    props: ['isNew'],
})

</script>
