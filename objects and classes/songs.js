function songs(input) {

    class Song {

        constructor(type, name, time) {

            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
        
    let songs = []
    let songsCount = input.shift();
    let lastElement = input.pop();

    for (let i = 0; i < songsCount; i++){
        let [type, name, time] = input[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (lastElement === "all"){
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === lastElement);
        filtered.forEach((i) => console.log(i.name));
    }
    
}
// songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])
songs([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater'])