<script>
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="identity">
        <span class="identity-text">Hackernews</span>
      </div>
      <nav class="nav">
        <router-link :to="{ name: 'home'}" class="nav-item">Top 50 stories</router-link>
        <router-link :to="{ name: 'new'}" class="nav-item">50 latest stories</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .navbar {
    background: #f57900;
    color: white;
    padding: 2px 8px;
    text-align: center;
  }
  .container{
    width: 80%;
    max-width: 960px;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  .identity {
  }
  .identity-text {
    text-transform: uppercase;
    padding: 0 12px 0 0;
  }
  .nav {
  }
  .nav-item{
    color: white;
    text-decoration: none;
    margin-right: 15px;
  }
  .nav-item:hover{
    text-decoration: underline;
    color: #2e3436;
  }
</style>