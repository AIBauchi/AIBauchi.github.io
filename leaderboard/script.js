/*

Original design: https://dribbble.com/shots/2342688-Leaderboard-Day-019-dailyui

Trophy SVG: https://www.flaticon.com/free-icon/trophy_263056

*/

var arr = [ 
    { 'name': 'Neo', 'score': 36 , 'pix': '01.jpg'},
    { 'name': 'Stanley', 'score': 50,'pix': '05.jpg' },
    { 'name': 'Victor', 'score': 10 ,'pix': '02.jpg'},
    { 'name': 'Teejay', 'score': 54 ,'pix': '04.jpg'},
    { 'name': 'Abdul', 'score': 39 ,'pix': '06.jpg'},
    { 'name': 'Oladepo', 'score': 0 ,'pix': 'def.jpg'},
    { 'name': 'Abdulganiyu', 'score': 24 ,'pix': '09.jpg'},
    { 'name': 'Gabriel', 'score': 0 ,'pix': 'def.jpg'},
    { 'name': 'Moha', 'score': 22 ,'pix': '07.jpg'},
    { 'name': 'Goergee', 'score': 41 ,'pix': '09.jpg'},
    { 'name': 'yhuOne', 'score':21 ,'pix': '09.jpg'},
    { 'name': 'Daniel', 'score': 0,'pix': 'def.jpg' },
    { 'name': 'Techyislam', 'score': 0 ,'pix': 'def.jpg'},
    { 'name': 'Fadlu', 'score': 20 ,'pix': '08.jpg'},

]
const ll = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var sor = arr.sort(function(a,b) {
    return b.score - a.score
});

for (var i in arr) {
	document.getElementById('results').innerHTML +=`<article class="leaderboard__profile">
      <img src="/leaderboard/avatar/`+ arr[i]['pix'] +`" alt=" " class="leaderboard__picture">
      <span class="leaderboard__name">`+ arr[i]['name'] +`</span>
      <span class="leaderboard__value">`+ arr[i]['score'] +`<span>`+ ll[i] +`</span></span>
    </article>`
}

// console.log(sor)
