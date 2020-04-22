<script>
  import ApiList from "./ApiList.svelte";
  import ApiPreview from "./ApiPreview.svelte";
  import { onMount } from "svelte";
  import { apiResult } from "./../store.js";

  let apiListData = [];

  onMount(async () => {
    const res = await fetch("/list");
    const data = await res.json();
    apiListData = data.apiList;
  });

  let activeAPI = null;

  function onChangeActiveAPI({ detail }) {
    const id = detail.id;

    activeAPI = apiListData.find(item => item.id == id);
    apiResult.set("");
  }
</script>

<section id="apiList" class="section">
  <div class="container">
    <h2 class="title has-text-centered">APIs disponibles</h2>
    <div class="columns is-desktop">
      <div class="column is-6-desktop">
        <ApiList apiList={apiListData} on:changeActiveAPI={onChangeActiveAPI} />
      </div>
      <div class="column is-6-desktop box is-vcentered">
        {#if activeAPI}
          <ApiPreview activeAPIData={activeAPI} />
        {:else}
          <div class="">
            <h2 class="title is-4 has-text-centered">
              Selecciona una API para ver su información
            </h2>
            <figure class="image container is-128x128">
              <img class="" src="/fox.png" alt="" />
            </figure>
            <p class="has-text-centered">
              Este fox solo desaparecerá cuando dejes de procastinar
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
