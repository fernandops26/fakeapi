<script>
  import { apiResult } from "./../store.js";
  console.log(apiResult);

  export let activeAPIData = {};
  let activeTab = "structure";

  function handleTab(value) {
    activeTab = value;
  }

  async function callAPI() {
    const response = await fetch(activeAPIData.example);
    const data = await response.json();
    apiResult.set(data);
  }
</script>

<div class="tags has-addons is-pulled-right">
  <span class="tag">Registros</span>
  <span class="tag is-info">{activeAPIData.size}</span>
</div>
<h2 class="title">{activeAPIData.title}</h2>
<p class="subtitle">{activeAPIData.subtitle}</p>
<div class="tabs">
  <ul>
    <li
      class={activeTab == 'structure' ? 'is-active' : ''}
      on:click={handleTab.bind(this, 'structure')}>
      <a>Estructura</a>
    </li>
    <li
      class={activeTab == 'routes' ? 'is-active' : ''}
      on:click={handleTab.bind(this, 'routes')}>
      <a>Rutas</a>
    </li>

    <li
      class={activeTab == 'example' ? 'is-active' : ''}
      on:click={handleTab.bind(this, 'example')}>
      <a>Ejemplo</a>
    </li>
  </ul>
</div>
<div id="tab1" style="display: {activeTab == 'structure' ? 'block' : 'none'}">
  <pre>
    <code lang="language-js">
      {JSON.stringify(activeAPIData.structure, undefined, 2)}
    </code>
  </pre>
  <br />
  <p>La estructura del objeto es la siguiente</p>
  <table class="table is-fullwidth">
    <tbody>
      {#each activeAPIData.structureDescription as structureItem}
        <tr>
          <td>{structureItem.key}</td>
          <td class="has-text-right">{structureItem.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div id="tab2" style="display: {activeTab == 'routes' ? 'block' : 'none'}">
  <p>
    Rutas disponibles, no olvides la base
    <code>/api</code>
  </p>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Method</th>
        <th>Route</th>
      </tr>
    </thead>
    <tbody>
      {#each activeAPIData.routes as routeItem}
        <tr>
          <td>{routeItem.method}</td>
          <td>{routeItem.route}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<div id="tab3" style="display: {activeTab == 'example' ? 'block' : 'none'}">
  <pre>
    fetch('https://centralfakeapi.eldevsin.site{activeAPIData.example}')
    .then(response => response.json()) .then(console.log)
  </pre>
  <br />
  <div class="button is-primary" on:click={callAPI}>Probar</div>
  <br />
  <br />
  <p>Resultado:</p>
  <pre>{JSON.stringify($apiResult, undefined, 2)}</pre>
</div>
