<template>
  <section class="play-list row">
    <article
      class="playlist col-sm-6 col-md-4 col-lg-3 col-xl-25"
      v-for="artist in playlists"
      :key="artist.artistId"
      v-on:click="playlistClicked(artist.id)"
    >
      <div class="playlist__picture">
        <img
          class="playlist__picture__image"
          :src="artist.picture_medium"
          :alt="artist.name"
        />
      </div>
      <span class="playlist__title">{{ artist.title }}</span>
    </article>
  </section>
</template>

<script>
export default {
  name: "PlayLists",
  props: { playlists: Array },
  methods: {
    playlistClicked: function (id) {
      window.location.href = `/playlist/${id}`;
    },
  },
};
</script>

<style lang="scss">
.playlist {
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.3em;

  &__title {
    display: block;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
  }

  &__picture {
    margin-bottom: 10px;
    border-radius: 50%;
    background: $grey-light;
    display: block;
    overflow: hidden;
    transition: all 125ms ease-in-out;
    cursor: pointer;
    &__image {
      width: 100%;
      transition: all 125ms ease-in-out;
    }
  }
}
.playlist:hover {
  .playlist {
    &__title {
      color: black;
    }
    &__picture {
      box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px 0px;
      &__image {
        transform: scale(1.1);
      }
    }
  }
}
</style>
