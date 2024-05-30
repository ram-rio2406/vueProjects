import { createApp } from 'vue'
import App from './App.vue'
import Login from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'
import Dashboard from './pages/DashboardPage.vue'

import { createRouter, createWebHistory } from 'vue-router';
import { pinia, useStore } from './store';

//vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as icons from '@mdi/font/css/materialdesignicons.css';

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
	},
	{
		name: 'SignIn',
		path: '/signin',
		component: Login,
		props: {isNew : true}
	},
	{
		name: 'Dashboard',
		path: '/dashboard',
		component: Dashboard
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const vuetify = createVuetify({
	components,
	directives,
	icons
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(pinia);

app.config.globalProperties.$store = useStore(pinia);

app.mount('#app');
