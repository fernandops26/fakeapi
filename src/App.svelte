<script>
  export let name;

  import Header from "./components/Header.svelte";
  import Features from "./components/Features.svelte";
  import ApiContainer from "./components/ApiContainer.svelte";
  import Faq from "./components/Faq.svelte";
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
  <Faq />
</div>

<h1>Hello {name}!</h1>
