<template src="./App.html">

</template>

<script>
import {
    validationMixin
} from 'vuelidate'
import {
    required,
    minLength
} from 'vuelidate/lib/validators'

import HelloWorld from './components/HelloWorld/HelloWorld.vue'

export default {
    name: 'app',
    mixins: [validationMixin],
    components: {
        HelloWorld
    },
    data: function () {
        return {
            matchs: [],
            showDialog: false,
            form: {
                name: null,
                championship: null,
                home: null,
                away: null,
            },
            matchCreated: false
        }
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(3)
            },
            home: {
                required,
                minLength: minLength(3)
            },
            away: {
                required,
                minLength: minLength(3)
            },
            championship: {
                required
            }
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
            this.$v.$touch()

            if (!this.$v.$invalid) {
                var match = {
                    "id": this.matchs.length,
                    "name": this.form.name,
                    "home": this.form.home,
                    "away": this.form.away,
                    "listAway": [],
                    "listHome": [],
                    "nextHome": null,
                    "nextAway": null
                }

                this.matchs.push(match);
                this.saveAll();
                this.clearForm();
                this.showDialog = false;
            }
        },

        saveAll() {
            const parsed = JSON.stringify(this.matchs);
            localStorage.setItem('matchs', parsed);
        },

        getValidationClass(fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        closeDialog() {
            this.showDialog = false
            this.clearForm();
        },
        clearForm() {
            this.$v.$reset()
            this.form.name = null
            this.form.home = null
            this.form.away = null
            this.form.championship = null
        }
    }
}
</script>

<style src="./App.css">
</style>
