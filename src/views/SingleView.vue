<script>
import axios from 'axios';

export default {
  data() {
    return{
      story: {},
      comments: []
    }
  },
  created(){
    axios.get('https://hacker-news.firebaseio.com/v0/item/' + this.$route.params.id + '.json')
        .then((res) => {
          this.story = res.data
          this.story.kids.forEach(id => {
            axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
                .then((res) => {
                  this.comments.push(res.data)
                })
                .catch((err) => {
                  console.log(err)
                })
          })
        })
        .catch((err)=>{
          console.log(err)
        })
  }
}
</script>

<template>
  <main>
    <article class="article">
      <h2 class="article-header">{{story.title}}</h2>
      <p class="article-score">Score: {{story.score}}</p>
      <a :href="story.url" class="article-link">{{story.url}}</a>

      <div v-for="comment in comments" :key="comment.id">
        <div class="comment">
            <p v-html="comment.text"></p>
          <div class="comment-bottom">
            <div class="comment-author">
              <p>{{ comment.by }}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped>
  .article {
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    padding: 50px 0;
  }
  .article-header{
    font-size: 2rem;
    font-weight: 700;
  }
  .article-score{
    font-size: 1rem;
    color: #555753;
  }
  .comment{
    padding: 25px;
    background-color: #fefefe;
    border: 1px solid #d3d7cf;
    box-shadow: 2px 2px 5px rgba(0,0,0, 0.8);
    line-height: 25px;
  }
  .comment-bottom{
    padding: 25px;
    color: #888a85;
  }
</style>
