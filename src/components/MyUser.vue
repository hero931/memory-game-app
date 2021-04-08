<template>
    <div class="user">
        <b-card>
            <div class="text">
                Okay, <strong class="uname">{{username}}</strong> ! On the right side you can see how you did your challenge.
            </div>                                                   
        </b-card>
    </div>
</template>

<script>
export default {
    props: ['username', 'id']
}
</script>

<style scoped>
    .user {
        display: flex;
        margin: 1rem;
        justify-content: center;
        box-shadow: 5px 8px rgb(151, 138, 138);
        border-radius: 6px;
        border: 1px solid lightgray;
        color: rgba(129, 110, 82, 0.966);        
    }
    .uname {
        color: coral;
    }
</style>