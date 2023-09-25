<script>
  export let menu=1;
</script>

<div id="componente-nav">
  <ul>
    <li><a href="/" on:click|preventDefault={() => (menu = 1)}>Movies</a></li>
    <li><a href="/" on:click|preventDefault={() => (menu = 2)}>Option2</a></li>
    <li><a href="/" on:click|preventDefault={() => (menu = 3)}>Option3</a></li>
  </ul>
</div>

<style>
div{
  background-color: rgb(217, 217, 217);
}
ul { 
  color: navy; 
}
li {
  display: inline-block;
}
</style>