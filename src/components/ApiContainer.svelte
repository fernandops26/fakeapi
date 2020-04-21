<script>
  import ApiList from "./ApiList.svelte";
  import ApiPreview from "./ApiPreview.svelte";
  import { onMount } from "svelte";

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
  }
</script>

<section class="section">
  <div class="container">
    <div class="columns is-desktop is-vcentered">
      <div class="column is-6-desktop">
        <ApiList apiList={apiListData} on:changeActiveAPI={onChangeActiveAPI} />
      </div>
      <div class="column is-6-desktop box">
        {#if activeAPI}
          <ApiPreview activeAPIData={activeAPI} />
        {:else}
          <h2>Selecciona una API</h2>
        {/if}
      </div>
    </div>
  </div>
</section>
