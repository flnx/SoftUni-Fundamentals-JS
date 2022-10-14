function songs(arr) {
  let numberOfSongs = arr.shift();
  let command = arr.pop();

  class Song {
    constructor(name) {
      this.name = name;
    }
    playSong() {
      console.log(this.name);
    }
  }

  for (let el of arr) {
    let [currentCommand, currentSong] = el.split('_');
    if (currentCommand === command || command === 'all') {
      let currSong = new Song(currentSong);
      currSong.playSong();
    }
  }
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);

// DownTown
// Kiss
// Smooth Criminal
// Replay
// Photoshop