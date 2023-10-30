<script>
  import { Card, Button, Spinner } from 'flowbite-svelte';
  import { HeartOutline, HeartSolid } from 'flowbite-svelte-icons'
  import { addFavorite, getFilmes } from "../util/APIService";
  let promise = [];
  const OnClickHandler = () => {
    promise = getFilmes();
  };
</script>

<div id="componente-movie">
	<div class="button">
		<Button on:click={()=> OnClickHandler()}>Get Filmes</Button>
	</div>
<h1 class="title">Movie List</h1>
  {#await promise}
  <div class="spinner">
    <Spinner size={36}/>

  </div>
  {:then filmes}
    
    {#each filmes as filme}
	<div class="movielistContainer">
		<Card img={filme.image} size='xs' class='align'>
		  	
		  <div class="align">
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{filme.title}</h5>
		  <Button on:click={() => {addFavorite(2, filme.title, filme.description, filme.image)}}>
			Favorito
			<HeartOutline class="w-3.5 h-3.5 ml-2 text-white" />
		  </Button>
		</div>
		</Card>
		
	  </div>
    {/each}
  {:catch error}
    <p style="color:red">{error.message}</p>
  {/await}
</div>

<style>
	.spinner{
		position: absolute;
		left: 900px;
		top: 400px;
	}
	.button{
		position: absolute;
		top: 450px;
		left: 250px;
	}
	.title{
		font-weight: 700;
		font-size: 36px;
		text-align: center;
	
	}
	.movielistContainer{
		margin-left: 750px;
	}

	.align{
		display: flex;
		flex-direction: column;
		align-items: center;
	}


</style>
