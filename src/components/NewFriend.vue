<template>
    <div>
        <b-form @submit.prevent="submitForm">
            <b-form-group>
                <b-form-input type="text" v-model="enterName"></b-form-input>                
            </b-form-group>
            <b-button type="submit" variant="outline-success">Submit</b-button>           
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