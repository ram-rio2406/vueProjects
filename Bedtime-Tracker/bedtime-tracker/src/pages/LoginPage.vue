<template>
    <v-container>
        <v-row>
            <v-col>
                <v-row>
                    <v-text-field label="Username" type="text"></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field label="Password" type="password"></v-text-field>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <router-link to="/dashboard">
                    <v-btn variant="tonal" class="v-col-auto">Login</v-btn>
                </router-link>
            </v-col>
            <v-col>
                <v-btn variant="tonal" class="v-col-auto">Forgot Password</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
