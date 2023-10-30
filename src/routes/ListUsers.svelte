<script>
    import { Spinner, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, List, Li } from 'flowbite-svelte';
    import { deleteUser, getUsers } from '../util/APIService';

    import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { ChevronDownSolid } from 'flowbite-svelte-icons';

    

    let promise = getUsers();
  </script>
  {#await promise}
    <div class="spinner">
        <Spinner size={24}/>

    </div>
  {:then users} 
  <Table>
    <TableHead>
      <TableHeadCell>ID</TableHeadCell>
      <TableHeadCell>Email</TableHeadCell>
      <TableHeadCell>Password</TableHeadCell>
      <TableHeadCell>Favorites</TableHeadCell>
      <TableHeadCell>⌘</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
        {#each users as user}
        <TableBodyRow>
            <TableBodyCell>{user.id}</TableBodyCell>
            <TableBodyCell>{user.email}</TableBodyCell>
            <TableBodyCell>{user.password}</TableBodyCell>
            <TableBodyCell>
            <List>
            {#each user.favorites as favorite}
                <Li>{favorite.title}</Li>
            {/each}
            </List>
            </TableBodyCell>
            <TableBodyCell><Button color='red' on:click={async ()=>{deleteUser(user.id); await setTimeout(()=>{promise = getUsers()}, "200")}}>Delete</Button></TableBodyCell>
        </TableBodyRow>
        {/each}
    </TableBody>
  </Table>
  {/await}

<style>
    .spinner{
        position: absolute;
        left: 900px;
        top: 400px
    }
</style>
  
   
  
  