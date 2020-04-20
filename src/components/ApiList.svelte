<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let apiList;

  function onChange(id) {
    //console.log(e);
    dispatch("changeActiveAPI", {
      id
    });
  }
</script>

<div class="card events-card">
  <header class="card-header">
    <h2 class="card-header-title">APIs</h2>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fa fa-angle-down" aria-hidden="true" />
      </span>
    </a>
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
                  class="button is-small is-primary"
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
    <a href="#" class="card-footer-item">View All</a>
  </footer>
</div>
