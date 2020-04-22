<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let apiList;

  function onChange(id) {
    dispatch("changeActiveAPI", {
      id
    });
  }
</script>

<div class="card events-card">
  <header class="card-header">
    <h2 class="card-header-title">Lista de APIs</h2>
  </header>
  <div class="card-table">
    <div class="content">
      <table class="table is-fullwidth is-striped">
        <tbody>
          {#each apiList as api}
            <tr>
              <td width="5%">
                <i class="fa fa-bell-o" />
              </td>
              <td>{api.title}</td>
              <td class="level-right">
                <div
                  class="button is-small is-success"
                  on:click={onChange(api.id)}>
                  Ver
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">¿No encontraste lo que buscabas?</a>
  </footer>
</div>
