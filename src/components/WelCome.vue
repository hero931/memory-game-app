<template>
    <div class="mt-5">
        <b-jumbotron class="welcome" header="Memory Game" lead="Are you ready for the challenge?">
            <p>If you're ready for the challenge go ahead and click the start game button!  <span class="luck">Good luck!!!</span></p>
            <b-button variant="outline-secondary">Start Game</b-button>
        </b-jumbotron>
    </div>
</template>

<style scoped>
    .welcome {
        box-shadow: 5px 10px rgb(151, 138, 138);        
        border-radius: 6px;
        background: rgb(216, 200, 200);
    }
    .luck {
        color: salmon;
    }
</style>

