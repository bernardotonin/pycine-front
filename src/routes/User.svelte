<script>
  import { Input, Label } from "flowbite-svelte";

  let resposta = "";
  async function sendForm(e){
      // envia o formulario no formato json
      let formData = new FormData(e.target);
      let data = Object.fromEntries(formData.entries());
      const res = await fetch('http://localhost:8000/user/create',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: {
            "email": formData[email],
            "password": formData[password]
          }
      });
      resposta = 'User Created Sucessfully'
  }
  </script>
  
  
  
  <h2>New user</h2>
  
  <p>{resposta}</p>
  
  <form class="crud" on:submit|preventDefault={sendForm}>
      <input type="text" name="name" placeholder="User name" required autocomplete="off">
      <input type="text" name="email" placeholder="Email" required autocomplete="off">
      <input type="text" name="password" placeholder="password" required autocomplete="off">
      <input type="submit" value="add">
      <Label > Enter Your Name</Label>
      <Input id='name' type='text' name="name" />
  </form>
  
  <style>
  form.crud{
      display: grid;
      grid-template-columns: 1fr;
      gap: 5px;
      row-gap: 10px;
  }
  .crud input[type=submit]{
      justify-self: baseline;
  }
  </style>
  