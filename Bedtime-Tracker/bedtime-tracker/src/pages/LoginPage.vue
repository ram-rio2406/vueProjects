<template>
    <v-container>
        <v-row justify="center">
            <h2 v-if="!isNew">Log In</h2>
            <h2 v-else>Sign In</h2>
        </v-row>
        <v-row justify="center">
            <v-col cols="3">
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
        <v-row justify="center">
            <v-col v-if="isNew" cols="3">
                <v-btn variant="tonal" class="v-col-auto">Create Account</v-btn>
            </v-col>
            <v-col v-if="!isNew" cols="3">
                <router-link to="/dashboard">
                    <v-btn variant="tonal" class="v-col-auto">Login</v-btn>
                </router-link>
            </v-col>
            <v-col v-if="!isNew" cols="3">
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
