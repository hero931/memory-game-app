<template>  
    <div class="box">
      <div class="welcome" v-if="hello" @click="startGame"><wel-come></wel-come></div>      
      <div class="myForm" v-if="personQuest"><new-friend @add-username="addUName"></new-friend></div>               
      <div class="myList" v-if="personQuest"><my-friends              
          v-for="name in names"
          :key="name.id"
          :id="name.id"
          :username="name.username"
          @delete="delName"      
        ></my-friends></div>        
        <div class="quest" v-if="startQuiz"><my-quest @add-quest="getAnswers"></my-quest></div>
        <div class="person" v-if="personQ"><person-card></person-card></div>
        <div class="myAnswer" v-if="ansList">
        <my-answers               
          v-for="answer in answers"
          :key="answer.id"
          :id="answer.id"
          :age="answer.age" 
          :hair="answer.hair" 
          :belt="answer.belt" 
          :pocket="answer.pocket" 
          :smile="answer.smile" 
          :shirt="answer.shirt"          
          @start-over="newGame"
        ></my-answers></div>
        <div class="fdback" v-if="feedback"><my-user
          v-for="name in names"
          :key="name.id"
          :id="name.id"
          :username="name.username"
        ></my-user></div>                                                  
    </div>  
</template>

<script>

export default { 
  data() {
    return {      
      count: '',         
      names: [],
      answers: [],
      startQuiz: false,
      hello: true,
      personQuest: false,
      personQ: false,
      ansList: false,
      feedback: false
    }
  },   
  methods: {
    addUName(username) {
      const newUName = {
        id: new Date().toISOString(),
        username: username
      };
      this.names.push(newUName);
    },
    delName(nameId) {
      this.names = this.names.filter(username => username.id !== nameId);
    },
    startGame() {
      this.hello = false;
      this.personQuest = true;
      this.personQ = true;
      this.countStart();            
    },    
    countStart() {
      setTimeout(this.countDown, 10000);
    },
    countDown() {
      this.personQ = false;
      this.startQuiz = true;
      this.personQuest = true;
    },
    getAnswers(age,hair,belt,pocket,smile,shirt) {
      const getAnswer = {
        id: new Date().toISOString(),
        age: age,
        hair: hair,
        belt: belt,
        pocket: pocket,
        smile: smile,
        shirt: shirt        
      };
      this.answers.push(getAnswer);
      this.feedback = true;
      this.personQuest = false;
      this.personQ = false;
      this.startQuiz = false;
      this.ansList = true;      
    },
    newGame() {      
      this.hello = true;
      this.personQuest = false;
      this.personQ = false;
      this.startQuiz = false;
      this.ansList = false;
      this.feedback = false;
    }  
  },
  
}
</script>
  
<style>
  * {
  box-sizing: border-box;
  }

  .box {    
    display: grid;
    grid-template-columns: 1.5fr 2fr 2fr 1fr;
    grid-template-rows: repeat(4, 13rem);
    grid-template-areas: "alef bet bet dal"
                       "hey beta gimel dal"
                        "hey beta gimel lam"
                       "nun nun reish kuf";
    grid-auto-flow: dense;
    grid-gap: 1rem;
    color: white;
    text-align: center;
    background-color: rgb(180, 207, 207);
  }  
  
  .myForm {
    grid-area: alef;           
  }

  .welcome {
    grid-area: bet/beta;        
  }

  .myList {
    grid-area: hey;      
  }

  .person {
    grid-area: bet/beta;
  }

  .quest {
    grid-area: bet/beta;
  }

  .myAnswer {
    grid-area: bet/beta;
  } 

  .fdback {
    grid-area: hey;
  } 
</style>




