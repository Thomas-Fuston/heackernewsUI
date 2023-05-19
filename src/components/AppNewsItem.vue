<script>
export default {
  props: ['story']
}
</script>

<template>
  <div class="story">
    <div class="score">{{ story.data.score }}</div>
    <div>
      <div class="story-header">
        <router-link :to="{ path: '/stories/' + story.data.id }" class="story-item">
          {{ story.data.title }}
        </router-link>
        <br>
        <a :href="story.data.url" class="story-item-link">({{ story.data.url }})</a>
      </div>
      <br/>
      <span class="meta">
        by {{ story.data.by }} |
        <span v-if="story.data.kids">
          {{ story.data.kids.length }}
        </span>
        <span v-else>
          0
        </span>
        comments
      </span>
    </div>
  </div>
</template>

<style scoped>
  .story{
    padding: 15px;
    background: #fefefe;
    border: 1px solid #eeeeec;
    display: flex;
    align-items: center;
  }
  .score{
    padding-right: 15px;
    font-weight: 700;
    width: 10%;
    max-width:60px;
    text-align: center;
    color: #f57900;
  }
  .story-item{
    color: #2e3436;
    text-decoration: none;
    margin-right: 15px;
    font-size: 1.2rem;
  }
  .story-item:hover{
    color: #f57900;
    text-decoration: underline;
  }
  .story-item-link{
    color: #888a85;
    font-size: 0.9rem;
    text-decoration: none;
  }

</style>