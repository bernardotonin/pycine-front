<script>
  import { Input, Label, Button, Alert, Heading} from "flowbite-svelte";
  import { EnvelopeSolid, LockSolid, ExclamationCircleOutline} from 'flowbite-svelte-icons';
  let resposta = "";
  import { createUser } from "../util/APIService";

  async function sendForm(e){
      // envia o formulario no formato json
      let formData = new FormData(e.target);
      const email = formData.get('email').toString();
      const password = formData.get('password').toString();
      createUser(email, password);
      resposta = 'User created Sucessfully'
      
  }

  </script>

    <Heading class='text-center mb-4'>Register</Heading>

  
  
  <form class="crud" on:submit|preventDefault={sendForm}>
    <div class="inputContainer">
        <Label for="email" class="block mb-4">Email</Label>
        <Input required id="email" name="email" size="lg"  type="email" placeholder="Please enter your email">
            <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </Input>
    </div>
    <div class="inputContainer">
        <Label for="password" class="block mb-4 mt-4">Password</Label>
        <Input required id="password" name="password" size="lg"  type="password" placeholder="Please enter your password" >
            <LockSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </Input>
    </div>
    <Button class='mt-5 mb-3' type='submit'>Register</Button>
    {#if resposta}
        <Alert color='green'><ExclamationCircleOutline class='inline mr-2'/><span class="font-medium">{resposta}</span></Alert>
    {/if}
  </form>
  
  <style>
    form.crud{
      width: 500px;
      margin: 0 auto;
      text-align: center;
      padding: 10px;
      border-width: 1px;
      border-color: #EB4F27;
      border-radius: 10px;
    }

    

  </style>
  
