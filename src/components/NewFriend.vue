<template>
    <div class="friend">
        <b-form @submit.prevent="submitForm">
            <b-form-group>
                <b-form-input class="mt-3" placeholder="Enter Username" type="text" v-model="enterUserName"></b-form-input>
                <b-button class="myBtn" type="submit" size="sm" variant="outline-success">Submit</b-button>
            </b-form-group>           
        </b-form>  
    </div>   
</template>

<script>
export default {
    emits: ['add-username'],
    data() {
        return {
            enterUserName: ''
        }
    },
    methods: {
        submitForm() {
            this.$emit('add-username', this.enterUserName);
            this.enterUserName = '';            
        }
    },
}
</script>

<style scoped>
    .myBtn {
        margin-top: 1rem;
    }
    .friend {
        margin: 1rem;
        border: 1px solid lightgray;
        border-radius: 6px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        box-shadow: 5px 10px rgb(151, 138, 138);
        background: rgb(191, 221, 201);
    }
</style>