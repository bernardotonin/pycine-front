<script>
    import { Spinner, Button, Card, Heading} from 'flowbite-svelte';
    import { getUserById, getUsers, removeFavorite, removeFavoriteActor } from '../util/APIService';
    import { CloseOutline } from 'flowbite-svelte-icons'

    

    let promise = getUsers();

    let favoriteData = null
  </script>
  {#await promise}
    <div class="spinner">
        <Spinner size={24}/>
    </div>
  {:then users} 
    {#each users as user}
        <Button class='inline mx-2' on:click={()=>{favoriteData = getUserById(user.id)}}>Id: {user.id}</Button>
    {/each}
  {/await}
  {#if favoriteData}
  {#await favoriteData}
    <div class="spinner">
        <Spinner size={24}/>
    </div>
  {:then user} 
    <Heading class='text-center my-8'>Favorite movies: </Heading>

    {#each user.favorites as favorite}
    <div class="movielistContainer">
		<Card img={favorite.bannerUrl} size='xs' class='align'>
		  	
		  <div class="align">
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{favorite.title}</h5>
		  <Button color='red' on:click={async () => {removeFavorite(user.id, favorite.title); await setTimeout(()=>{favoriteData = getUserById(user.id)}, "200")}}>
			Remover Favorito
			<CloseOutline class="w-3.5 h-3.5 ml-2 text-white" />
		  </Button>
		</div>
		</Card>
		
	  </div>
    {/each}
    <Heading class='text-center my-8'>Favorite actors: </Heading>

    {#each user.favorite_actors as favorite_actor}

    <div class="actorListContainer">
		<Card img={favorite_actor.profileUrl} size='xs' class='align'>
		  	
		  <div class="align">
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{favorite_actor.name}</h5>
		  <Button color='red' on:click={async () => {removeFavoriteActor(user.id, favorite_actor.name); setTimeout(()=>{favoriteData = getUserById(user.id)}, "200")}}>
			Remover Favorito
			<CloseOutline class="w-3.5 h-3.5 ml-2 text-white" />
		  </Button>
		</div>
		</Card>
		
	  </div>
    {/each}
  {/await}
  {:else}
  <Heading class='text-center my-32'>Soo empty</Heading>
  {/if}


  



<style>
    .spinner{
        position: absolute;
        left: 900px;
        top: 400px
    }

    .movielistContainer{
		margin-left: 765px;
	}
  .actorListContainer{
    margin-left: 765px;
  }
</style>
  
   
  
  