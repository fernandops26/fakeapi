<script>
  export let name;

  import Header from "./components/Header.svelte";
  import Features from "./components/Features.svelte";
  import ApiContainer from "./components/ApiContainer.svelte";
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<div class="container is-fluid">
  <Header />
  <Features />
  <ApiContainer />
</div>

<h1>Hello {name}!</h1>
