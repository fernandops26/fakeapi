<script>
  import ApiList from "./ApiList.svelte";
  import ApiPreview from "./ApiPreview.svelte";

  const apiData = [
    {
      id: 1,
      title: "Dogs",
      subtitle: "API de perros",
      structure: {
        id: "1",
        name: "Pepito",
        image: "https://image.jpg"
      },
      structureDescription: [
        {
          key: "id",
          description: "Id"
        },
        {
          key: "name",
          description: "Nombre del perro"
        },
        {
          key: "image",
          description: "Imagen"
        }
      ],
      routes: [
        {
          method: "GET",
          route: "/dogs"
        },
        {
          method: "GET",
          route: "/dogs/1"
        },
        {
          method: "POST",
          route: "/dogs"
        }
      ],
      example: "/api/dogs/1"
    }
  ];

  let activeAPI = null;

  function onChangeActiveAPI({ detail }) {
    const id = detail.id;

    activeAPI = apiData.find(item => item.id == id);
  }
</script>

<section class="section">
  <div class="container">
    <div class="columns is-desktop is-vcentered">
      <div class="column is-6-desktop">
        <ApiList apiList={apiData} on:changeActiveAPI={onChangeActiveAPI} />
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
