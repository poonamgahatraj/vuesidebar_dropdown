import {createWebHistory , createRouter}  from 'vue-router'

import about from './components/about.vue';
import clients from './components/clients.vue';
import contact from './components/contact.vue';
import sevices from './components/sevices.vue'; 


const routes =[
    {
        name: 'about',
        path:'/about',
        component:about
    },
    {
        name: 'clients',
        path:'/clients',
        component:clients
    },
    {
        name: 'contact',
        path:'/contact',
        component:contact
    },
    {
        name: 'sevices',
        path:'/sevices',
        component:sevices
    }
];

const router = createRouter(
{
    history: createWebHistory(),
    routes
}

);

export default router;