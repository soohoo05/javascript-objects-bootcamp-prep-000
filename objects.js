<<<<<<< HEAD
var playlist= {artist: 'song name'}

function updatePlaylist(playlistobj,artname,song){
  playlistobj[artname]=song
  return playlistobj
}
function removeFromPlaylist (playlistob,artname){
  delete playlistob[artname]
  return playlistob
=======
var playlist= {usher: 'burn', neyo: 'mad'}

function updatePlaylist(playlistobj,artname,song){
  Object.assign({},playlistobj,{artname:song})
>>>>>>> ea23ef678fe6c0db9056bdd39842e38281897a05
}