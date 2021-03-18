<template>
    <div>
        <b-form @submit.prevent="submitForm">
            <b-form-group>
                <b-form-input placeholder="Enter Name" type="text" v-model="enterName"></b-form-input>
                <b-button class="myBtn" type="submit" size="sm" variant="outline-success">Submit</b-button>
            </b-form-group>           
        </b-form>  
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

<style scoped>
    .myBtn {
        margin-top: 1rem;
    }
</style>