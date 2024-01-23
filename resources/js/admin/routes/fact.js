// Fact
const Fact = () => import(/* webpackChunkName: "js/admin/Fact" */ '@/admin/pages/fact/List.vue');
const FactAdd = () => import(/* webpackChunkName: "js/admin/FactAdd" */ '@/admin/pages/fact/New.vue');
const FactEdit = () => import(/* webpackChunkName: "js/admin/FactEdit" */ '@/admin/pages/fact/Edit.vue');
const FactView = () => import(/* webpackChunkName: "js/admin/FactView" */ '@/admin/pages/fact/View.vue');

export default[
    // Fact
    { meta: {permId: 77}, path: '/fact', component: Fact },
    { meta: {permId: 77}, path: '/fact-add', component: FactAdd },
    { meta: {permId: 77}, path: '/fact/:id', component: FactEdit },
    { meta: {permId: 77}, path: '/fact-view/:id', component: FactView },
]