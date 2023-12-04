<script>
  export let menu;

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

</script>

<Navbar  >
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pycine 	&#128293;</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl >
    <NavLi href="/" on:click={()=> menu=1 }>Movies</NavLi>
    <NavLi href="/" on:click={()=> menu=2 }>Artist by id</NavLi>
    <NavLi href="/" on:click={()=> menu=3 }>Artist by name</NavLi>
    <NavLi href="/" on:click={()=> menu=4 }>Users</NavLi>
    <NavLi href="/" on:click={()=> menu=5 }>List Users</NavLi>
    <NavLi href="/" on:click={()=> menu=6 }>List Favorites</NavLi>
  </NavUl>
</Navbar>
