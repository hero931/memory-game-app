<template>
    <div class="quest mt-3">
        <b-form @submit.prevent="submitForm">
            <b-form-group label="Question 1" description="How many books a person holds?">
                <b-form-input placeholder="Enter Age" type="number" v-model="age"></b-form-input>                
            </b-form-group>
            <b-form-group label="Question 2" description="Hair color?">
                <b-form-input placeholder="Enter Color" type="text" v-model="hair"></b-form-input>                
            </b-form-group>
            <b-form-group label="Question 3" description="Color of the belt?">
                <b-form-input placeholder="Enter Color" type="text" v-model="belt"></b-form-input>                
            </b-form-group>
            <b-form-group label="Question 4" description="How many pockets on the pants?">
                <b-form-input placeholder="Enter number" type="number" v-model="pocket"></b-form-input>                
            </b-form-group>
            <b-form-group label="Question 5" description="Is the person smiles?">
                <b-form-input placeholder="Enter yes or no" type="text" v-model="smile"></b-form-input>                
            </b-form-group>
            <b-form-group label="Question 6" description="What was a shirt color of the person?">
                <b-form-input placeholder="Enter number" type="text" v-model="shirt"></b-form-input>                
            </b-form-group>
            <b-button class="myBtn" type="submit" size="sm" variant="outline-success">Submit</b-button>           
        </b-form>
    </div>
</template>

<script>
export default {
    emits: ['add-quest'],    
    data() {
        return {
          age: '',
          hair: '',
          belt: '',
          pocket: '',
          smile: '',
          shirt: ''
        }    
    },
    methods: {
        submitForm() {
            this.$emit('add-quest', this.age, this.hair, this.belt, this.pocket, this.smile, this.shirt);
            this.age = '';
            this.hair = '';
            this.belt = '';
            this.pocket = '';
            this.smile = '';
            this.shirt = '';
        }
    },
}
</script>

<style scoped>   
    .list {        
        display: flex;                
    }
    .quest {
        background-color: rgb(156, 212, 207);
        box-shadow: 3px 6px rgb(151, 138, 138);
        border: 1px solid lightgray;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        padding: 1rem;        
    }
      
</style>