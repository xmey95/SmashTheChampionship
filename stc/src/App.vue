<template src="./App.html">
</template>

<script>
import HelloWorld from './components/HelloWorld/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function () {
        return {
            matchs: [],
            showDialog: false
        }
    },
    created() {
        if (localStorage.getItem('matchs')) {
            try {
                this.matchs = JSON.parse(localStorage.getItem('matchs'));
            } catch (e) {
                localStorage.removeItem('matchs');
            }
        }
    },
    methods: {

        newMatch() {
            var match = {
              "id": this.matchs.length,
              "name": "Prova",
              "home": "Utente1",
              "away": "Utente2",
              "listAway": [
                "Inter",
                "Juventus",
                "Lazio"
              ],
              "listHome": [
                "Milan",
                "Empoli",
                "Sampdoria"
              ],
              "nextHome": "Milan",
              "nextAway": "Sampdoria"
            }

            this.matchs.push(match);
            this.saveAll();
        },
        
        saveAll() {
            const parsed = JSON.stringify(this.matchs);
            localStorage.setItem('matchs', parsed);
        }
    }
}
</script>

<style src="./App.css">
</style>
