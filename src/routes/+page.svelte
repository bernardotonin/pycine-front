<script>
	let menu = 1;
	import Movie from "./Movie.svelte"
	import Artista from "./Artista.svelte"
	import Nav from "./Nav.svelte"
	import User from "./User.svelte"
	import ListUsers from "./ListUsers.svelte";
  	import Favorites from "./Favorites.svelte";
</script>

<Nav bind:menu/>

<div class="card">
	{#if menu === 1}
		<Movie/>
	{:else if menu === 2}
		<Artista/>
	{:else if menu === 3}
		<User/>
	{:else if menu === 4}
		<ListUsers/>
	{:else}
		<Favorites/>
	{/if}
</div>