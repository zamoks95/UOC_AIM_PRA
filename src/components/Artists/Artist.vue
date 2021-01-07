<template>
  <article
    class="artist col-sm-6 col-md-4 col-lg-3 col-xl-2"
    v-on:click="artistClicked(artist.name)"
  >
    <div class="artist__cover">
      <img
        class="artist__cover__image"
        :src="artist.picture_medium"
        :alt="artist.name"
      />
    </div>
    <span class="artist__name">{{ artist.name }}</span>
    <span class="artist__fans">{{ artist.nb_fan | thousands }} fans</span>
  </article>
</template>

<script>
export default {
  name: "Artist",
  props: { artist: Object },
  filters: {
    thousands: function (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  methods: {
    artistClicked: function (search) {
      this.$router.push({
        name: "search",
        params: { q: search },
      });
    },
  },
};
</script>

<style lang="scss">
.artist {
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.3em;

  &__name {
    display: block;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    cursor: pointer;
  }

  &__fans {
    font-size: 12px;
  }
  &__cover {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 50%;
    background: $grey-light;
    border: 1px solid $border-color;
    display: block;
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
}
.artist {
  &:hover {
    .artist {
      &__cover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px 0px;
        &__image {
          transform: scale(1.1);
        }
      }
      &__name {
        color: black;
      }
    }
  }
}
</style>
