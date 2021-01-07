<template>
  <main class="page-search">
    <h1 class="main-title">
      Resultados de <span>{{ query }}</span>
    </h1>
    <b-tabs>
      <b-tab id="tabAll" title="Todo" active>
        <h2 class="title">
          Canciones <fa-icon icon="chevron-right" class="icon" />
        </h2>
        <div v-if="tracks === 'loading'">
          <Spinner />
        </div>
        <div v-else>
          <div v-if="tracks.length > 0">
            <track-list v-if="tracks" :tracks="tracks.slice(0, 6)" />
          </div>
          <div v-else><NoResults :type="'tracks'" /></div>
        </div>
        <h2 class="title">
          Álbumes <fa-icon icon="chevron-right" class="icon" />
        </h2>

        <div v-if="albums === 'loading'">
          <Spinner />
        </div>
        <div v-else>
          <div v-if="albums.length > 0">
            <album-list :albums="albums.slice(0, 6)" />
          </div>
          <div v-else><NoResults :type="'albums'" /></div>
        </div>
        <h2 class="title">
          Artistas <fa-icon icon="chevron-right" class="icon" />
        </h2>
        <div v-if="albums === 'loading'">
          <Spinner />
        </div>
        <div v-else>
          <div v-if="artists.length > 0">
            <artist-list v-if="artists" :artists="artists.slice(0, 6)" />
          </div>
          <div v-else><NoResults :type="'artist'" /></div>
        </div>
      </b-tab>
      <b-tab id="tabTracks" title="Canciones">
        <h2 class="title">{{ tracksTotal }} canciones</h2>
        <div v-if="albums === 'loading'">
          <Spinner />
        </div>
        <div v-else>
          <div v-if="tracks.length > 0">
            <track-list v-if="tracks" :tracks="tracks" />
          </div>
          <div v-else><NoResults :type="'tracks'" /></div>
        </div>
      </b-tab>
      <b-tab id="tabAlbums" title="Álbumes">
        <h2 class="title">{{ albumsTotal }} álbumes</h2>
        <div v-if="albums === 'loading'">
          <Spinner />
        </div>
        <div v-else>
          <div v-if="albums.length > 0">
            <album-list v-if="albums" :albums="albums" />
          </div>
          <div v-else><NoResults :type="'albums'" /></div>
        </div>
      </b-tab>
      <b-tab id="tabArtists" title="Artistas">
        <h2 class="title">{{ artistsTotal }} artistas</h2>
        <div v-if="albums === 'loading'">
          <Spinner />
        </div>
        <div v-else>
          <div v-if="artists.length > 0">
            <artist-list v-if="artists" :artists="artists" />
          </div>
          <div v-else><NoResults :type="'artist'" /></div>
        </div>
      </b-tab>
    </b-tabs>
  </main>
</template>

<script>
import { getTracks, getAlbums, getArtists } from "../api";

import TrackList from "@/components/Tracks/TrackList";
import AlbumList from "@/components/Albums/AlbumList";
import ArtistList from "@/components/Artists/ArtistList";
import Spinner from "@/components/Spinner";
import NoResults from "@/components/NoResults";

export default {
  name: "SearchResults",
  components: { AlbumList, ArtistList, TrackList, Spinner, NoResults },
  data() {
    return {
      tracks: null,
      albums: null,
      artists: null,
      tracksTotal: null,
      albumsTotal: null,
      artistsTotal: null,
      query: this.$route.params.q || "",
    };
  },
  watch: {
    "$route.params.q": function (q) {
      this.query = q;
      if (q.length > 0) {
        this.search();
      }
    },
  },
  methods: {
    search() {
      this.tracks = "loading";
      this.artists = "loading";
      this.albums = "loading";
      (async () => {
        let tracks_data = await getTracks(this.query);
        let artists_data = await getArtists(this.query);
        let albums_data = await getAlbums(this.query);
        this.tracks = tracks_data.data;
        this.artists = artists_data.data;
        this.albums = albums_data.data;
        this.tracksTotal = this.tracks.length;
        this.artistsTotal = this.artists.length;
        this.albumsTotal = this.albums.length;
      })();
    },
  },
  async created() {
    this.search();
  },
};
</script>


<style lang="scss" >
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