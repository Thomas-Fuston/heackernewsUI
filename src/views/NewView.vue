<script>
import axios from 'axios';
import Item from '@/components/AppNewsItem.vue';

export default {
  components: {Item},
  data() {
    return {
      err: '',
      stories: []
    }
  },
  created(){
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then((response) => {
          let results = response.data.slice(0,50)
          results.forEach(id => {
            axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
                .then((response) => {
                  this.stories.push(response)
                })
                .catch((err)=> {
                  this.err = err;
                })
          })
        })
        .catch((err) => {
          this.err = err;
        });
  }
}
</script>

<template>
  <main class="content">
    <Item v-for="story in stories" :key="story.data.id" :story="story"/>
  </main>
</template>

<style scoped>
  .content {
    width: 80%;
    max-width: 960px;
    margin:50px auto;
  }
</style>
