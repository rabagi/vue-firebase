<template>
  <div id="app">
    <h2>Welcome</h2>
    <section>
      <button @click="cambiar">Cambiar auth</button>
      <transition name="aparecer" appear>
        <router-view></router-view>
      </transition>
    </section>    
  </div>
</template>

<script>
import{mapMutations} from 'vuex';
export default {
  methods: mapMutations(['cambiar'])
}
</script>

 <style>
        /* transition*/
        .aparecer-enter {
            opacity: 0;
        }

        .aparecer-enter-active {
            transition: opacity 1s;
        }

        .aparecer-leave-to {
            opacity: 0;
        }

        .aparecer-leave-active {
            transition: opacity 1s;
        }
        /*Animation*/
        .bote-enter-active {
            animation: bounce-in .5s;
        }

        .bote-leave-active {
            animation: bounce-in .5s reverse;
        }

        @keyframes bounce-in {
            0% {
                transform: scale(0);
            }
            50% {
                transform: scale(1.5);
            }
            100% {
                transform: scale(1);
            }
        }
    </style>