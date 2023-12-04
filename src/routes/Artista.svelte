<script>
  import { Input, Label, Button, Heading, Accordion, AccordionItem, P, Li, List, Spinner} from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons"
  import { getActor } from "../util/APIService";

  let promise = null;

  const formHandler = async (e) => {
    const data = new FormData(e.target);
    const number = data.get("actorid");

    promise = getActor(number);
  }
</script>

<Heading class='text-center mb-3'>Actor search by id</Heading>

<form class="searchActorId" on:submit|preventDefault={formHandler}>
  <div class="inputContainer">
      <Label for="actorid" class="block mb-4">Enter actor id</Label>
      <Input required id="actorid" name="actorid" size="lg"  type="number" placeholder="Enter the actor id">
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
  {:then actor} 

  <div class="actorContainer">
    <Accordion>
      <AccordionItem>
        <span slot="header">{actor.name}</span>
        <P>{actor.bio}</P>
        <List>
          <Li>Birthday: {actor.birthday}</Li>
          <Li>Place of birth: {actor.placeofbirth}</Li>
          <Li>Known for: {actor.known_for}</Li>
        </List>
      </AccordionItem>
    </Accordion>
  </div>


{/await}
{/if}

<style>
  .searchActorId{
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

  .actorContainer{
    width: 500px;
    margin: 20px auto;
  }
  
</style>
