
<template>

<div>
    <h1 class="centralizado">{{ titulo }}</h1>

      <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">

      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto in fotosComFiltro">

          <meu-painel :titulo="foto.titulo"> 
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
            <meu-botao 
                rotulo="Remover" 
                tipo="button" 
                @botaoAtivado="remove(foto)"
                :confirmacao= "true"
                estilo="perigo"
            />
          </meu-painel>
          
        </li>
      </ul>


  </div>

</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue'

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao,

  },

  data() {
    return {
      titulo: 'Painel de Imagens',
      fotos: [],
      filtro: '',
    }
  },

  computed: {

    // Criando ele utiliza o filtro das fotos
    fotosComFiltro() {
      // criando uma expressão com o valor do filtro, insensitivo
      if(this.filtro) {
        let exp = new RegExp (this.filtro.trim(),'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }
       // se o campo estiver vazio, não filtramos, retornamos a lista
      else {
        return this.fotos;
      }

    }
  },

  methods: {

      remove (foto){
            alert ('Remover a foto!' + foto.titulo)
          
      }
  },
  
  // Função fazendo o get da API, converte a função res para JSON, feito isto a função fotos pega o Lista de fotos da função data() e retorna as fotos da API
  created() {
      this.$http.get('http://localhost:3000/v1/fotos')
      .then (res => res.json())
      .then( fotos => this.fotos = fotos, err => console.log(err));
      }
  }

</script>

<style>
  .centralizado {
    text-align: center;
  }


  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
    margin: 1%;
  }


  .filtro {
    display: block;
    width: 100%
    
  }
  
  
</style>