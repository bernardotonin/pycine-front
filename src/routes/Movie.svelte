<script>
  import { Card, Button, Toggle, Spinner } from 'flowbite-svelte';
  import { HeartOutline } from 'flowbite-svelte-icons'
  import { getFilmes } from "../util/dataFetch";
  let promise = getFilmes();
  const OnClickHandler = () => {
    promise = getFilmes();
  };

  const onClickFavorito = async (title, description, image, id) => {
	const res = await fetch('http://localhost:8000/users/favorite/add',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: {
			"user_id": id,
			"title": title,
			"description": description,
			"bannerUrl": image
		  }
      });
  }
</script>

<div id="componente-movie">
	<div class="button">
		<Button on:click={()=> OnClickHandler()}>Get Filmes</Button>
	</div>

  {#await promise}
  <div class="spinner">
    <Spinner size={36}/>

  </div>
  {:then filmes}
    <h1 class="title">Movie List</h1>
    {#each filmes as filme}
	<div class="movielistContainer">
		<Card img={filme.image} class="mb-4">
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{filme.title}</h5>
		  <Button on:click={()=> onClickFavorito(filme.title, filme.description, filme.image, 1)}>
			Favorito<HeartOutline class="w-3.5 h-3.5 ml-2 text-white" />
		  </Button>
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
		margin-left: 850px;
	
	}
	.movielistContainer{
		margin-left: 750px;
	}
</style>
