import { createRouter, RouteRecordRaw , Router, createWebHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/wetlandPark',
        name: 'WetlandPark',
        component: () => import('../views/WetlandPark.vue'),
        meta: {
            title: '湿地公园'
        }
    },
    {
        path: '/marketInformation',
        name: 'MarketInformation',
        component: () => import('../views/MarketInformation.vue'),
        meta: {
            title: '市场信息'
        },
        children:[

        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            title: '关于我们'
        }
    },
    {
        path: '/guestBook',
        name: 'GuestBook',
        component: () => import('../views/GuestBook.vue'),
        meta: {
            title: '联系我们'
        }
    },
    {
        path: '/industryDynamics',
        name: 'IndustryDynamics',
        component: () => import('../views/IndustryDynamics.vue'),
        meta: {
            title: '行业动态'
        }
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('../views/Detail.vue'),
        meta: {
            title: '详情'
        }

    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router