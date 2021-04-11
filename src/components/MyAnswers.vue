<template>
    <div class="myAnswers">       
        <b-list-group class="myList">                
                <b-list-group-item class="item"><p>Your answer is: <strong>{{book}}</strong> which is:  <strong>{{answers[0] == rAnswers[0] ? 'Correct': 'Wrong'}}</strong></p></b-list-group-item>
                <b-list-group-item class="item"><p>Your answer is: <strong>{{hair}}</strong> which is:  <strong>{{answers[1] == rAnswers[1] ? 'Correct': 'Wrong'}}</strong></p></b-list-group-item>
                <b-list-group-item class="item"><p>Your answer is: <strong>{{belt}}</strong> which is:  <strong>{{answers[2] == rAnswers[2] ? 'Correct': 'Wrong'}}</strong></p></b-list-group-item>
                <b-list-group-item class="item"><p>Your answer is: <strong>{{pocket}}</strong> which is:  <strong>{{answers[3] == rAnswers[3] ? 'Correct': 'Wrong'}}</strong></p></b-list-group-item>
                <b-list-group-item class="item"><p>Your answer is: <strong>{{smile}}</strong> which is:  <strong>{{answers[4] == rAnswers[4] ? 'Correct': 'Wrong'}}</strong></p></b-list-group-item>
                <b-list-group-item class="item"><p>Your answer is: <strong>{{shirt}}</strong> which is:  <strong>{{answers[5] == rAnswers[5] ? 'Correct': 'Wrong'}}</strong></p></b-list-group-item>                                                   
        </b-list-group>
        <div class="myBtn">
            <b-button @click="newGame" size="sm" variant="outline-success">Game Over!</b-button>
        </div>       
    </div>
</template>

<script>
export default {
    emits: ['start-over'],    
    props: ['book', 'hair', 'belt', 'pocket', 'smile', 'shirt', 'username'],
    data() {
        return {
            answers: [3, 'brown', 'brown', 3, 'yes', 'red'],
            rAnswers: [this.book, this.hair, this.belt, this.pocket, this.smile, this.shirt]                        
        }
    },
    methods: {
        newGame() {
            this.$emit('start-over');
        }        
    }       
}
</script>

<style scoped>
    .myAnswers {
        display: flex;
        flex-direction: column;
        box-shadow: 5px 8px rgb(151, 138, 138);
        border-radius: 6px;
        border: 1px solid lightgray;
        padding: 2rem;
        margin-top: 2rem;
        align-items: center;
        color: rgba(129, 110, 82, 0.966);
    }

    .myBtn {
        margin: 1rem;
    }

    .item {
        margin: 0.1rem;
        background: rgb(233, 227, 227);
        border-radius: 6px;
    }   
</style>