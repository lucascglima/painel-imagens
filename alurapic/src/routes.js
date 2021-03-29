import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'


export const routes = [
    //Importando componente home
    { path: '', component: Home, titulo:'Home' },
    //Importando componente Cadsatrro
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' },

];