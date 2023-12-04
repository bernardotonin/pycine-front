<script>
    import { Input, Label, Button, Heading, Card, Spinner, P} from "flowbite-svelte";
    import { SearchOutline, HeartOutline } from "flowbite-svelte-icons"
    import { getActorByName, addFavoriteActor } from "../util/APIService";

    import noImg from "../lib/noimg.png"
    let promise = null;

    const formHandler = async (e) => {
        const data = new FormData(e.target);
        const name = data.get("actorname");

        promise = getActorByName(name);
    }
  </script>
  
  <Heading class='text-center mb-3'>Actor search by name</Heading>
  
  <form class="searchActorName" on:submit|preventDefault={formHandler}>
    <div class="inputContainer">
        <Label for="actorname" class="block mb-4">Enter actor name</Label>
        <Input required id="actorname" name="actorname" size="lg"  type="text" placeholder="Enter the actor name">
            <SearchOutline slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </Input>
    </div>
    <Button class='mt-5 mb-3' type='submit'>Search</Button>
  </form>
  
  {#if promise}
  
  {#await promise}
      <div class="spinner">
          <Spinner size={24}/>
  
      </div>
    {:then actors}
    
    {#each actors as actor}
    <div class="actorListContainer">
        {#if actor.profile_picture != 'https://image.tmdb.org/t/p/w185None'}
            <Card img={actor.profile_picture} size='xs' class='align'>
		  	
            <div class="align">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{actor.name}</h5>
            <P>Known for: {actor.known_for}</P>
            <P>Popularity: {actor.popularity}</P>
            <Button on:click={() => {addFavoriteActor(1, actor.name, '', actor.profile_picture, actor.tmdb_actor_id)}}>
              Favorito
              <HeartOutline class="w-3.5 h-3.5 ml-2 text-white" />
            </Button>
          </div>
          </Card>
        {:else}
        <Card img={noImg} size='xs' class='align'>
		  	
            <div class="align">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{actor.name}</h5>
            <P>Known for: {actor.known_for}</P>
            <P>Popularity: {actor.popularity}</P>
            <Button on:click={() => {addFavoriteActor(1, actor.name, '', actor.profile_picture, actor.tmdb_actor_id)}}>
              Favorito
              <HeartOutline class="w-3.5 h-3.5 ml-2 text-white" />
            </Button>
          </div>
          </Card>
        
		{/if}
		
	  </div>      
    {/each}
  
  {/await}
  {/if}
  
  <style>
    .searchActorName{
      width: 500px;
      margin: 0 auto;
      text-align: center;
      padding: 10px;
      border-width: 1px;
      border-color: #EB4F27;
      border-radius: 10px;
    }
    .spinner{
          position: absolute;
          left: 900px;
          top: 400px
    }
  
    .actorListContainer{
      width: 300px;
      margin: 20px auto;
    }
    
  </style>
  