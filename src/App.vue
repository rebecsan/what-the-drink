<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/favorites">Favorites</router-link>
    </div>
      <h1>What the drink</h1>
    <router-view/>
    <div id="footer">
      <p>API från https://www.thecocktaildb.com/api.php</p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Consolas, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: snow;
}

Drink {
  border-style: solid;
  border: #2c3e50;
}

#footer > p {
  font-size: 0.7rem;
}

h1 {
  color: #0c0007;
  font-family: "ink free";
  font-size: 5rem;
  margin-bottom: 3rem;
  margin-top: 0rem;
}

img {
  height: 40vh;
}

input {
  border-radius: 5px;
  margin: 1rem;
  padding: 0.4rem;
}

.instructions {
  padding: 1rem;
}

li {
  list-style: none;
}

#nav {
  padding: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #962c66;
}
/* 
#randomDrink  */

.results {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 5rem;
}

.results img {
  object-fit: cover;
  width: 25vw;
  height: auto;
}

table {
  margin: auto;
  text-align: left;
}

td {
  padding: 0.3rem;
}

</style>
