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
    <NavLi href="/" on:click={()=> menu=2 }>Artist</NavLi>
    <NavLi href="/" on:click={()=> menu=3 }>Users</NavLi>
    <NavLi href="/" on:click={()=> menu=4 }>List Users</NavLi>
  </NavUl>
</Navbar>
