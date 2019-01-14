<template src="./HelloWorld.html">

</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data: function () {
        return {
            matchs: []
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
        
        saveAll() {
            const parsed = JSON.stringify(this.matchs);
            localStorage.setItem('matchs', parsed);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped src="./HelloWorld.css">
</style>
