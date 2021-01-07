<template>
  <main class="play-list">
    <section class="playlist-detail" v-if="playlistData === 'loading'">
      <Spinner />
    </section>
    <section class="playlist-detail" v-else>
      <div class="playlist-detail__image">
        <img :src="playlistData.picture_xl" :alt="playlistData.name" />
      </div>
      <header class="playlist-detail__header">
        <h1 class="playlist-detail__header__title">
          {{ playlistData.title }}
        </h1>
        <h2 class="playlist-detail__header__subtitle">
          {{ tracksTotal }} canciones
        </h2>
      </header>
    </section>

    <div class="container">
      <track-list :tracks="tracks" />
    </div>
  </main>
</template>

<script>
import TrackList from "@/components/Tracks/TrackList";
import { getPlaylists } from "../api";
import Spinner from "@/components/Spinner";

export default {
  name: "PlayList",
  components: { TrackList, Spinner },
  data() {
    return {
      playlistData: null,
      tracks: null,
      tracksTotal: null,
      query: this.$route.params.q || "",
    };
  },
  async created() {
    this.playlistData = "loading";
    this.tracksTotal = 0;
    (async () => {
      this.playlistData = await getPlaylists(this.$route.params.q);
      this.tracks = this.playlistData.tracks.data;
      this.tracksTotal = this.playlistData.tracks.data.length;
    })();
  },
  watch: {
    "$route.params.q": function (q) {
      this.query = q;
    },
  },
};
</script>

<style lang="scss">
.playlist-detail {
  overflow: hidden;
  height: 300px;
  position: relative;
  &__image {
    transition: all 250ms ease-in-out;
    position: absolute;
    z-index: -1;
    width: 100%;
    top: -50%;
    img {
      width: 100%;
    }
  }
  &__header {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-left: 30px;
    justify-content: center;
    &__title {
      color: white;
      font-size: 60px;
      font-weight: bold;
      -webkit-text-stroke: 1px #0000008f;
      text-shadow: 2px 2px 5px #0000008f;
      line-height: 40px;
    }
    &__subtitle {
      color: white;
      font-size: 40px;
      font-weight: bold;
      -webkit-text-stroke: 1px #0000008f;
      text-shadow: 2px 2px 5px #0000008f;
      letter-spacing: -1px;
    }
  }
}

.playlist-detail {
  &:hover {
    .playlist-detail__image {
      filter: blur(1px) brightness(115%) contrast(115%);
      transform: scale(1.025);
      img {
      }
    }
  }
}

.page-search {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main-title {
    margin-bottom: 20px;

    span {
      color: $grey-label;
    }
  }

  .tabs {
    background: white;
    flex: 1;
    height: 100%;
  }

  #tabAll {
    .title {
      font-size: 18px;

      .icon {
        font-size: 14px;
        margin-left: 3px;
      }
    }

    .track-list {
      margin-bottom: 30px;
      thead {
        display: none;
      }
    }

    section {
      margin-bottom: 30px;
    }
  }
}
</style>
