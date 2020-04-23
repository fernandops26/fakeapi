<script>
  const faqList = [
    {
      title: "¿APIs centralizadas?",
      description:
        "En simple, queremos ahorrarte el tiempo de ir a buscar en múltiples fuentes la información que necesitas solo para realizar un prototipado rápido de tu aplicación web, móvil o lo que estes haciendo, por eso creemos que es necesario múltiples APIs falsas en un solo lugar a un click. Y por si te lo preguntas inspirados en JSONPlaceholder.",
      image: "/question.png"
    },
    {
      title: "¿Cobrán por utilizar las APIs?",
      description:
        "Rotundamente no, el uso de las APIs más gratis que el aire, no tienes que pagar por nada. ",
      image: "/question.png"
    },
    {
      title: "¿Cómo se genera la data falsa de las APIs?",
      description:
        "Para generar la data, se ha utilizado como fuentes algunas librerias como faker.js, chance, y algunas apis publicas más, a estas últimas obviamente tuvimos que cambiar cierta información.",
      image: "/question.png"
    },
    {
      title: "¿Con que lenguajes puedo utilizarlos?",
      description:
        "Puedes utilizar cualquier lenguage con el que puedas realizar peticiones http, eso incluye go, php, node, python, el mismo javascript desde el navegador, inlcuso desde tu placa de arduino o tu cafetera.",
      image: "/question.png"
    },
    {
      title: "No encuentro la API que necesito",
      description:
        "Creemos que podemos mejorar esto juntos y disponer de más APIs falsas con forma pasa el tiempo, en el caso que no encuentres lo que necesites tenemos disponible un buzón de solicitudes de API, así te podremos notificar cuando la implementemos.",
      image: "/question.png"
    },
    {
      title: "¿Cómo se contruyó esta web?",
      description:
        "Las tecnologías que se utilizarón fueron Svelte para la reactividad, Bulma para estilos css y json-server para el back. ",
      image: "/question.png"
    }
  ];
</script>

<section class="section">
  <div class="container">
    <h2 class="title has-text-centered">Preguntas frecuentes</h2>
    <div class="block">
      {#each faqList as faq}
        <div class="card block">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img class="is-rounded" src={faq.image} alt="" />
                </figure>
              </div>
              <div class="media-content">
                <h3 class="title is-4">{faq.title}</h3>
                <p>{faq.description}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
