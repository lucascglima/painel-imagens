<template>
     <nav>
      <ul>       
          <li v-for="rota in rotas"> 
            <router-link :to="rota.path ? rota.path : '/'" class="item-menu">
            {{ rota.titulo }}
            </router-link>
          </li>
      </ul>
    </nav>
</template>

<script>

export default {

    props: {

        rotas: {
        type: Array,
        required: true
        }        
    }
}
</script>

<style scoped>

ul {
    text-align: center;
}

li {
    font-size: 20px; 
    display: inline-block;
    margin: 1%;
    text-decoration: none;
    
}

a:-webkit-any-link{
    text-decoration: none;

}
</style>