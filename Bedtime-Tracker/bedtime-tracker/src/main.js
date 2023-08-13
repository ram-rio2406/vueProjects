import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router';

//vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: App
	},
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
});

const vuetify = createVuetify({
	components,
	directives,
})

createApp(App).use(router).use(vuetify).mount('#app');
