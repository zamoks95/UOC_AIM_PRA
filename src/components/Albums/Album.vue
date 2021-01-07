<template>
  <article class="album col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <div class="album__cover">
      <img
        class="album__cover__image"
        :src="album.cover_medium"
        :alt="album.title"
        v-on:click="albumClicked(album.title)"
      />
    </div>
    <span class="album__title" v-on:click="albumClicked(album.title)">{{
      album.title
    }}</span>
    <span class="album__artist" v-on:click="albumClicked(album.artist.name)">
      {{ album.artist.name }}</span
    >
  </article>
</template>

<script>
export default {
  name: "Album",
  props: { album: Object },
  methods: {
    albumClicked: function (search) {
      this.$router.push({
        name: "search",
        params: { q: search },
      });
    },
  },
};
</script>

<style lang="scss">
.album {
  margin-bottom: 15px;
  line-height: 1.3em;
  &__cover {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    background: $grey-light;
    border: 1px solid $border-color;
    overflow: hidden;
    cursor: pointer;
      transition: all 125ms ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px 0px;
    &__image {
      width: 100%;
      background: $grey-light;
      transition: all 125ms ease-in-out;
    }
  }
  &__title {
    display: block;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    position: relative;
    cursor: pointer;
  }

  &__artist {
    font-size: 12px;
    cursor: pointer;
  }
}
.album {
  &:hover {
    .album {
      &__cover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px 0px;
        &__image {
          transform: scale(1.1);
        }
      }
      &__title {
        color: black;
      }
      &__artist {
        color: black;
      }
    }
  }
}
</style>
