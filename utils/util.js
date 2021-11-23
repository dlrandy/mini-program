const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}


function getDataKey() {
  return '50c76122abeec630312449bdb9647823'
}
function getApi(path) {
  return 'https://api.themoviedb.org/3/';
}
function getMovieDetail(id) {
  return 'https://api.themoviedb.org/3/movie/' + id +'?api_key=' + getDataKey();
}
function getImage(path) {
  console.log(path);
  return 'https://image.tmdb.org/t/p/w500/'+path+'?api_key=' + getDataKey();
}

module.exports = {
  formatTime: formatTime,
  getDataKey: getDataKey,
  getImage:getImage,
  getMovieDetail,
}