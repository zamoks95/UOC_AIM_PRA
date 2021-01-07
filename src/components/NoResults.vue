<template>
  <p class="no-results">
    <span class="no-results__" v-if="type === 'tracks'">
      No se ha encontrado ninguna Canción
    </span>
    <span class="no-results" v-else-if="type === 'albums'">
      No se ha encontrado ningún Álbum
    </span>
    <span class="no-results" v-else> No se ha encontrado ningún Artista </span>
  </p>
</template>

<script>
export default {
  name: "NoResults",
  props: { type: String },
};
</script>

<style lang="scss">
.no-results {
    margin-bottom: 30px;
}
</style>
