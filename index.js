let index=0;
let songTitle=document.getElementById("songName");
let singerName=document.getElementById("artistName");
let volumeControl= document.getElementById("volumeRange");
let songDuration= document.getElementById("duration")
let volumeImage= document.getElementById("volume");
let playnPause= document.getElementById("play");
let songImage= document.querySelector(".songImage");
let playingSong=false;
let track= document.createElement("audio")
let songs=[
      {
            SongName:"Mere Dholna",
            Singer:"Sonu Nigam",
            path:"Mere_Dholna.mp3",
            image:"image1.jpg"
      },
      {
            SongName:"Bhool Bhulaiyaa",
            Singer:["Pitbull "," Diljit-Dosanjh "," Neeraj Shridhar"],
            path:"Bhool_Bhulaiyaa.mp3",
            image:"image2.jpg"
      },
      {
            SongName:"Ranvijays Entry Medley",
            Singer:["A.R. Rahman","Threeory Band"],
            path:"Ranvijays_Entry.mp3",
            image:"image3.jpg"
      },
      {
            SongName:"Pehle Bhi Main",
            Singer:"Vishal Mishra",
            path:"Pehle_Bhi_Main.mp3",
            image:"image4.jpg"
      },
      {
            SongName:"Tera Ban Jaunga",
            Singer:["Tulsi Kumar","Akhil Sachdeva"],
            path:"Tera_Ban_Jaunga.mp3",
            image:"image5.jpg"
      }
]

const loadMusic=(index)=>{
      track.src=songs[index].path
      songTitle.innerHTML=songs[index].SongName;
      singerName.innerHTML=songs[index].Singer;
      songImage.style=`background-image: url("${songs[index].image}")`;
      songDuration.value=0;
      volumeControl.value=15;
      setInterval(()=>{
            songDuration.max= track.duration;
            songDuration.value= track.currentTime;
      },1000);
    
}
loadMusic(index);

const controller=()=>{
      if(playingSong==false){
            playMusic()
      }else{
            pauseMusic()
      }
}
const playMusic=()=>{
      track.play();
      playingSong=true;
      playnPause.src="pause.svg"
}

const pauseMusic=()=>{
      track.pause();
      playingSong=false;
      playnPause.src="play.svg"
}
const nextMusic=()=>{
      if(index<songs.length-1){
            index++;
            loadMusic(index)
            playMusic()
      }else{
            index=0;
            loadMusic(index)
            playMusic()
      }
}

const prevMusic=()=>{
      if(index>0){
            index--;
            loadMusic(index)
            playMusic()
      }else{
            index=songs.length-1;
            loadMusic(index)
            playMusic()
      }
}

const volumeRange=()=>{
      track.volume=volumeControl.value/100;
      if(track.volume==0){
            volumeImage.src="mute.svg"
      }else{
            volumeImage.src="volume.svg"
      }
}

const captureSong=()=>{
      
      track.currentTime= songDuration.value;
}
