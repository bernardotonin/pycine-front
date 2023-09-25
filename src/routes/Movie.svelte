<script>
	let promise = getFilmes();
	async function getFilmes() {
    // faz um request GET para endpoint /filmes
		const res = await fetch(`http://localhost:8000/filmes`);
		const text = await res.json();
		if (res.ok) { return text; } 
    else { throw new Error(text);}
	}
	function handleClick() {
		promise = getFilmes();
	}
</script>

<div id="componente-movie">

<button on:click={handleClick}> Get filmes </button>

{#await promise}
	<p>...loading</p>
	{:then filmes}
		<h1>Lista de filmes</h1>		
		{#each filmes as filme}
    <div class="grid">
      <p>{filme.title}</p>
      <img src="{filme.image}" alt="">
    </div>
		{/each}
	{:catch error}
		<p style="color:red">{error.message}</p>
{/await}

</div>

<style>
  p{ font-weight: bold; font-size: 2em}
  .grid{ padding: 10px; display: grid; grid-template-columns: 1fr 2fr; }
div{
  background-color: rgb(212, 253, 230);
}
</style>