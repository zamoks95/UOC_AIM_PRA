<template>
  <tr class="track">
    <td class="track-cover" v-on:click="trackClicked(track.title)">
      <img :src="track.album.cover_small" :alt="track.title" />
    </td>
    <td class="track-title" v-on:click="trackClicked(track.title)">
      {{ track.title | substring }}
    </td>
    <td class="track-artist" v-on:click="trackClicked(track.artist.name)">
      {{ track.artist.name | substring }}
    </td>
    <td class="track-album" v-on:click="trackClicked(track.album.title)">
      {{ track.album.title | substring }}
    </td>
    <td class="track-duration">
      {{ getDuration | substring }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "Track",
  props: {
    track: Object,
  },
  computed: {
    getDuration: function () {
      const hours = Math.floor(this.track.duration / 60);
      const minutes = this.track.duration % 60;
      const hh = hours < 10 ? `0${hours}` : hours;
      const mm = minutes < 10 ? `0${minutes}` : minutes;

      return `${hh}:${mm}`;
    },
  },
  filters: {
    substring: function (value) {
      return value.length > 17 ? value.substring(0, 20) + "..." : value;
    },
  },
  methods: {
    trackClicked: function (search) {
      this.$router.push({
        name: "search",
        params: { q: search },
      });
    },
  },
};
</script>

<style lang="scss">
.track {
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: $bg-color;
  }
}

.track-album {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.track-duration {
  text-align: right;
}

.track-cover img {
  width: 35px;
  height: auto;
  border-radius: 4px;
}

@media #{$min-sm} {
  .track-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

@media #{$max-md} {
  .track {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 7px;
    padding-bottom: 7px;
    border-bottom: 1px solid $border-color;
  }

  .track-cover {
    display: none;
  }

  .track-title {
    font-size: 13px;
    flex-grow: 1;
    font-weight: 600;
    width: 60%;
  }

  .track-duration {
    flex-shrink: 1;
    order: 1;
    margin-left: 3px;
    font-size: 12px;
  }

  .track-artist {
    font-size: 12px;
    order: 1;
    flex-grow: 1;
  }

  .track-album {
    font-size: 12px;
    flex-grow: 1;
    width: 60%;
  }
}
</style>
