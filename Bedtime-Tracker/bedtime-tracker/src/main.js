import { createApp } from 'vue'
import App from './App.vue'
import Login from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'

import { createRouter, createWebHistory } from 'vue-router';

//vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: HomePage
	},
	{
		name: 'Login',
		path: '/login',
		component: Login
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const vuetify = createVuetify({
	components,
	directives,
})

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
