import { createApp } from 'vue'
import App from './App.vue'
import Login from './pages/LoginPage.vue'
import HomePage from './pages/HomePage.vue'
import Dashboard from './pages/DashboardPage.vue'

import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

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
});

const store = createStore({
	//state is considered as data part which hold all the state variables inside this object 
	state() {
		return {
			count: 0
		}
	},
	//Mutations are used to change or modify the state only based on synchronous.
	mutations: {
		increment (state) {
			state.count++
		}
	}
})

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store);
app.mount('#app');
