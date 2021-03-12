<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="enterName">
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    emits: ['add-name'],
    data() {
        return {
            enterName: ''
        }
    },
    methods: {
        submitForm() {
            this.$emit('add-name', this.enterName);
            this.enterName = '';            
        }
    },
}
</script>