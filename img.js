log=console.log.bind(window.console);
gebi=function(id){return document.getElementById(id);}
close=function(id){var z=gebi(id); z.className=z.className.replace('show', 'hide');};
open=function(id) {var z=gebi(id); z.className=z.className.replace('hide', 'show');};
modal=function(id) { gebi('modal').innerHTML=img.view.modal(id);open('modal');tutup=function(){modal(''); close('modal');}};

dwarna={ph:'213', ps:'100%', pl:'22.5%'}


gantiwarna=function(ph,ps,pl){
let li = parseInt(pl.replace('%', ''));

warna=[]
warna[0]=`hsl(${ph},${ps},${pl})`
warna[1]=`hsl(${ph},${ps},${li-15}%)`
warna[2]=`hsl(${ph},${ps},${li+15}%)`
warna[4]=`hsl(${ph},${ps},${li+30}%)`
warna[3]=`hsl(${ph},${ps},${li+45}%)`

warna[5]=`hsl(${26},${90}%,${89}%)`
warna[6]=`hsl(${0},${0}%,${0}%)`

fill=warna;
log(fill)


const cvgElements = document.querySelectorAll('.svgimgs');
// Loop melalui setiap elemen dan ubah warnanya
cvgElements.forEach((element, index) => {
if (warna[index]) {
element.style.fill = warna[index]; // Ubah warna fill SVG
}
});



donats('ws')
img.controller.gallery('content');
}



position=[`0,0`,`13, 1`,`-5, 0`];


path={
setting:`M9 12A3 3 0 1015 12 3 3 0 109 12M21 14A1.65 1.65 0 0020 17 2 2 0 0117 20 1.65 1.65 0 0014 21 2 2 0 0110 21 1.65 1.65 0 007 20 2 2 0 014 17 1.65 1.65 0 003 14 2 2 0 013 10 1.65 1.65 0 004 7 2 2 0 017 4 1.65 1.65 0 0010 3 2 2 0 0114 3 1.65 1.65 0 0017 4 2 2 0 0120 7 1.65 1.65 0 0021 10 2 2 0 0121 14Z`,
envelope:`M2 8C2 7 3 6 4 6L20 6C21 6 22 7 22 8L22 20C22 21 21 22 20 22L4 22C3 22 2 21 2 20ZM22 8 12 15 2 8`,
geo:`M4 10A1 1 0 0120 10C20 17 12 22 12 22 12 22 4 17 4 10M9 10A1 1 0 0015 10 1 1 0 009 10`,
twitter:`M23 3A11 11 0 0120 4 4 4 0 0012 7V8A10 10 0 013 4S1 14 8 17A12 12 0 011 19C10 24 21 19 21 8A4.5 4.5 0 0021 7 8 8 0 0023 3Z`,
facebook:`M17 2H14A5 5 0 009 7V10H6V14H9V22H13V14H16L17 10H13V7A1 1 0 0114 6H17Z`,
whatsapp:`M20 11A8 8 0 018 18L3 21 5 15A8 8 0 014 11 1 1 0 0120 11Z`,
instagram:`M5 2 19 2C21 2 22 3 22 5L22 19C22 21 21 22 19 22L5 22C3 22 2 21 2 19L2 5C2 3 3 2 5 2ZM7 12C7 19 17 19 17 12 17 5 7 5 7 12M20 6C20 4 17 4 17 6 17 8 20 8 20 6`,

sila2:`
M5 15C8 15 9 15 11 15 14 23 9 22 8 18 7 22 2 23 5 15
M5 7C7 6 9 6 11 7 13 8 14 14 14 16 13 16 13 16 12 16 12 15 11 11 11 9 11 12 12 17 12 18 11 19 5 19 4 18 4 17 5 12 5 9 5 11 4 15 4 16 3 16 2 16 2 16 2 14 3 8 5 7
M8 2C5 2 6 6 8 6 10 6 11 2 8 2
M13 16C14 16 14 18 13 18 12 17 12 16 13 16

M21 2C24 2 23 6 24 7 26 7 26 15 26 19 23 20 20 20 16 19 16 15 16 7 18 7 19 6 18 2 21 2
M18 15C21 15 22 15 24 15 25 19 27 19 27 21 23 22 20 22 15 21 15 19 17 19 18 15
`,

sila:`
M5 15C8 15 9 15 11 15 17 17 17 19 7 21 7 21 7 21 6 19 7 19 13 17 8 18 3 17 9 19 10 19 9 21 9 21 9 21-1 19-1 17 5 15
M5 7C7 6 9 6 11 7 13 8 14 14 14 16 13 16 13 16 12 16 12 15 11 11 11 9 11 12 12 17 12 18 11 19 5 19 4 18 4 17 5 12 5 9 5 11 4 15 4 16 3 16 2 16 2 16 2 14 3 8 5 7
M8 2C5 2 6 6 8 6 10 6 11 2 8 2
M13 16C14 16 14 18 13 18 12 17 12 16 13 16
`,
all:`
M5 7C7 6 9 6 11 7 13 8 14 14 14 16 13 16 13 16 12 16 12 15 11 11 11 9 11 12 12 17 12 21 9 21 6 21 4 21 4 17 5 12 5 9 5 11 4 15 4 16 3 16 2 16 2 16 2 14 3 8 5 7
M5 15C8 15 9 15 11 15 12 19 12 22 12 27 11 27 10 27 9 27 9 23 9 21 8 18 7 21 7 23 7 27 6 27 5 27 4 27 4 22 4 19 5 15

M8 2C5 2 6 6 8 6 10 6 11 2 8 2
M11 27 12 28C12 29 11 29 10 28 10 28 9 27 10 27L11 27
M13 16C14 16 14 18 13 18 12 17 12 16 13 16
M6 27 5 27 4 28C4 29 5 29 6 28 6 28 7 27 6 27

M21 2C24 2 23 6 24 7 26 7 26 15 26 19 23 20 20 20 16 19 16 15 16 7 18 7 19 6 18 2 21 2
M18 15C21 15 22 15 24 15 25 19 25 26 25 27 25 28 17 28 17 27 17 26 17 19 18 15
`,
atasan1:`M21 2C24 2 23 6 24 7 26 7 26 15 26 19 23 20 20 20 16 19 16 15 16 7 18 7 19 6 18 2 21 2`,


bawahan1:`M18 15C21 15 22 15 24 15 25 19 25 26 25 27 25 28 17 28 17 27 17 26 17 19 18 15`,


manatas1:`M5 7C7 6 9 6 11 7 13 8 14 14 14 16 13 16 13 16 12 16 12 15 11 11 11 9 11 12 12 17 12 21 9 21 6 21 4 21 4 17 5 12 5 9 5 11 4 15 4 16 3 16 2 16 2 16 2 14 3 8 5 7`,
ibaju2:`M5 7C7 6 9 6 11 7 13 8 14 14 14 16 13 16 13 16 12 16 12 15 11 11 11 9 11 12 12 17 12 18 11 19 5 19 4 18 4 17 5 12 5 9 5 11 4 15 4 16 3 16 2 16 2 16 2 14 3 8 5 7`,
ibaju3:`M5 7C7 6 9 6 11 7 13 8 14 15 9 11 9 10 9 10 9 9 11 11 11 10 11 9 11 12 12 16 12 20 9 22 7 22 4 20 4 16 5 12 5 9 5 10 5 11 7 9 7 11 7 10 7 11 2 15 3 8 5 7`,
ibaju4:`M5 7C7 6 9 6 11 7 11 12 12 16 12 20 9 22 7 22 4 20 4 16 5 12 5 7`,

ibaju5:`M5 7C7 6 9 6 11 7 11 7 12 7 13 9 14 8 15 7 15 7L16 8C15 10 13 14 11 10 11 12 12 17 12 18 11 19 5 19 4 18 4 17 5 12 5 9 5 11 4 15 4 16 3 16 2 16 2 16 2 14 3 8 5 7`,

itangan1:`M11 7C13 8 14 15 9 11L9 9C11 11 11 10 11 9L11 7M5 7C3 8 2 15 7 11L7 9C5 11 5 10 5 9L5 7`,
itangan3:`M10 8C10 7 12 7 12 8 13 13 11 14 7 10L7 8C10 11 11 11 10 8`,
itangan4:`M11 8C12 6 14 7 13 10 11 14 10 14 6 15L6 13C9 12 10 11 11 8`,

manbawah1:`M5 15C8 15 9 15 11 15 12 19 12 22 12 27 11 27 10 27 9 27 9 23 9 21 8 18 7 21 7 23 7 27 6 27 5 27 4 27 4 22 4 19 5 15`,
mansila1:`M5 15C8 15 9 15 11 15 17 17 17 19 7 21 7 21 7 21 6 19 7 19 13 17 8 18 3 17 9 19 10 19 9 21 9 21 9 21-1 19-1 17 5 15`,
mansila2:`M5 15C8 15 9 15 11 15 14 23 9 22 8 18 7 22 2 23 5 15`,
kaki1:`M5 15C15 15 14 16 12 22 11 22 11 22 10 22 10 18 12 18 8 18 5 19 2 17 5 15`,
bangku:`M3 21C3 20.6667 3 20 4 20L8 20C9 20 9 21 9 21L7 22 9 24 8 24 6 23 4 24 3 24 5 22Z`,

wajah1:`M8 2C5 2 6 6 8 6 10 6 11 2 8 2`,
tangan1:`M13 16C14 16 14 18 13 18 12 17 12 16 13 16`,
sepatu1:`M11 27C11 27 11 27 12 28 12 29 11 29 10 28 10 28 9 27 10 27 10 27 11 27 11 27`,
peci1:`M6 3C7 2 9 2 10 3 10 1 6 1 6 3`,
peci2:`M6 3C7 4 9 4 10 3 10 1 6 1 6 3`,

kacamata1:`M6 4C7 4 9 4 10 4 10 5 8 5 8 4 8 5 6 5 6 4`,

pohon1:`M8 6C8 1 16 1 16 6 18 6 19 8 18 9 24 12 19 17 15 15 14 17 10 17 9 15 5 17 0 12 6 9 5 8 6 6 8 6M11 15 13 15 13 24 11 24Z`,
pohon2:`M6 7C12 0 12 0 18 7 13 3 22 11 21 14 17 10 23 15 19 19 19 17 16 18 15 17 14 18 10 18 9 17 8 18 5 17 5 19 1 15 7 10 3 14 2 11 11 3 6 7M11 17 13 17 13 24 11 24Z`,

masjid1:`M1 22 2 6 4 6 5 22 1 22M6 22 6 13 22 13 22 22 20 22 20 17C20 16 18 16 18 17L18 22 16 22 16 17C16 16 16 16 14 15 12 16 12 16 12 17L12 22 10 22 10 17C10 16 8 16 8 17L8 22 6 22M7 12C4 4 11 6 14 2 17 6 24 4 21 12L7 12M2 5 4 5C5 4 4 3 3 2 2 3 1 4 2 5`,
lentera1:`M6 5 8 5C8 2 10 3 12 2 14 3 16 2 16 5L18 5 18 6 17 6 17 18 18 18 18 19 16 19C16 22 14 21 12 22 10 21 8 22 8 19L6 19 6 18 7 18 7 6 6 6 6 5M12 6C11 7 11 7 11 8L11 18 13 18 13 8C13 7 13 7 12 6M10 8C10 7 10 7 9 6 8 7 8 7 8 8L8 18 10 18 10 8M14 8 14 18 16 18 16 8C16 7 16 7 15 6 14 7 14 7 14 8`,
bedug1:`M2 4C2 3 3.3333 2 4 2L4 16C3.3333 16 2 15 2 14L2 4M5 2 19 2 19 4 5 4 5 2M5 5 19 5 19 7 5 7 5 5M5 8 19 8 19 10 5 10 5 8M5 11 19 11 19 13 5 13 5 11M5 14 19 14 19 16 5 16 5 14M20 2C21 2 22 3 22 4L22 14C22 15 21 16 20 16L20 2M5 17 7 17 12 19 17 17 19 17 14 20 19 22 14 22 12 21 10 22 5 22 10 20 5 17`,
sekolah:`M12 2 15 5 15 7 21 7 21 20 22 20 22 22 2 22 2 20 3 20 3 7 9 7 9 5 12 2M7 9 7 13 9 13 9 9 7 9M4 9 4 13 6 13 6 9 4 9M7 14 7 18 9 18 9 14 7 14M4 14 4 18 6 18 6 14 4 14M10 14 10 20 14 20 14 14C14 11 10 11 10 14M15 9 15 13 17 13 17 9 15 9M18 9 18 13 20 13 20 9ZM15 14 15 18 17 18 17 14ZM18 14 18 18 20 18 20 14ZM12 5A1 1 0 0012 7 1 1 0 0012 5`,
android:`M6 2 19 2 19 22 6 22ZM18 3 7 3 7 19 18 19ZM11 21 14 21C15 21 15 20 14 20L11 20C10 20 10 21 11 21M10 8C10 5 15 5 15 8ZM10 9 15 9 15 14 14 14 14 16C14 17 13 17 13 16L13 14 12 14 12 16C12 17 11 17 11 16L11 14 10 14ZM16 10C16 9 17 9 17 10L17 13C17 14 16 14 16 13ZM8 10C8 9 9 9 9 10L9 13C9 14 8 14 8 13Z`,
kode:`M2 2 22 2 22 16 2 16ZM3 3 3 15 21 15 21 3ZM9 17 15 17C15 18 17 18 17 18L7 18C7 18 9 18 9 17ZM7 8 4 11 7 14 7 13 5 11 7 9ZM8 14 10 8 11 8 9 14ZM12 8 15 11 12 14 12 13 14 11 12 9ZM5 5C4 5 4 4 5 4L19 4C20 4 20 5 19 5ZM5 7C4 7 4 6 5 6L16 6C17 6 17 7 16 7L5 7`,
design:`M2 2 22 2 22 16 2 16ZM3 3 3 15 21 15 21 3ZM9 17 15 17C15 18 17 18 17 18L7 18C7 18 9 18 9 17M5 5C4 5 4 4 5 4L11 4C12 4 12 5 11 5ZM5 7C4 7 4 6 5 6L12 6C13 6 13 7 12 7ZM5 9C4 9 4 8 5 8L12 8C13 8 13 9 12 9ZM17 4A1 1 0 0017 8 1 1 0 0017 4M4 14 8 10 10 12 11 11 14 14Z`,
gundukan:`M2 22C4 19 8 19 10 21 11 20 13 20 14 21 16 20 18 21 22 22Z`,
awan:`M4 5C1 6 2 4 3 4 3 3 4 3 5 4 5 3 6 3 6 4 7 3 8 3 8 4 8 0 13 1 12 3 14 2 14 3 14 4 16 2 17 3 16 4 25 5 15 6 14 5 14 6 12 7 11 6 10 7 9 7 8 6 8 7 6 7 6 6 4 7 4 6 4 5Z`,
awan1:`M6 14C1 14 1 7 6 7 6 1 13 1 15 4 17 2 20 5 18 7 23 7 23 14 18 14Z`,
awan2:`M5 15C1 14 1 7 6 7 6 1 13 1 15 4 22 0 23 8 20 10 22 10 23 14 19 14 25 17 20 24 15 20 9 24 1 19 5 15Z`,
toga:`M2 8 12 2 22 8 12 14 2 8M6 11 12 15 18 11 18 16C14 19 10 19 6 16Z`,
tmp:`M12 2C9 2 6 4 5 5L12 11ZM4 6C2 8 1 12 3 16L11 12ZM4 18C9 24 20 24 22 13L13 13Z M22 11C22 7 18 3 14 2L14 11Z`,
bar:`M3 17 3 22 6 22 6 17ZM8 12 8 22 11 22 11 12ZM13 15 13 22 16 22 16 15ZM18 7 18 22 21 22 21 7ZM4 14 4 15 9 9 14 13 19 3 19 2 14 12 9 8Z`,
tmp:``,

};

el=function(scale,p,f,g){
return {scale:scale,position:p,fill:fill[f],path:path[g]}
};


// {position:position[0],fill:fill[4],path:path.masjid1}

donats = function(x='donat'){
img={
model:{
gradient:`
<defs>
<linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
<stop id="color-1" stop-color="${warna[0]}" offset="0%" />
<stop id="color-2" stop-color="#fff" offset="100%" />
</linearGradient>

<linearGradient id="avatar" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="50%" style="stop-color:"${warna[0]}"; stop-opacity:1" />
    <stop offset="50%" style="stop-color:#E0A986; stop-opacity:1" />
</linearGradient>


</defs>
`,

warna:`red`,
viewbox:`0 0 30 30`,
gundukan:[
el('1','0,0',5,'gundukan'),
el('1','0,0',5,'gundukan'),
],

masjid:[
el('1','0,0',5,'masjid1'),
],

pohon2:[
el('1','0,0',3,'pohon1'),
el('1','0,0',4,'pohon1'),
el('1','0,0',1,'pohon1'),
],
awan:[
el('1','0,0',3,'awan1'),
],

sila2:[
el('1','0,0',4,'setting'),
el('1','0,0',0,'sila2'),
],

sila:[
el('1','0,0',4,'geo'),
el('0.7','0,2',0,'sila'),
el('0.3','4.5,5',1,'toga'),

],
all:[
el('1','0,0',4,'instagram'),
el('1','0,0',1,'all'),
],

woman:[
el('1','0,0',4,'awan1'),
el('1','0,0',2,'lentera1'),
el('1','0,0',1,'bawahan1'),
el('1','0,0',0,'atasan1'),
el('1','13,1',5,'wajah1'),
],

womankode:[
el('1','0,0',4,'awan2'),
el('1','0,0',2,'kode'),
el('1','0,0',1,'bawahan1'),
el('1','0,0',0,'atasan1'),
el('1','13,1',5,'wajah1'),
],

womandesign:[
el('1','0,0',4,'awan2'),
el('1','0,0',2,'design'),
el('1','0,0',1,'bawahan1'),
el('1','0,0',0,'atasan1'),
el('1','13,1',5,'wajah1'),
],

man:[
el('1','0,0',4,'awan1'),
el('1','0,0',2,'bedug1'),
el('1','0,0',1,'manbawah1'),
el('1','0,0',0,'manatas1'),

el('1','0,0',5,'wajah1'),
el('1','0,0',5,'tangan1'),
el('1','-10, 0',5,'tangan1'),
el('1','0,0',6,'sepatu1'),

el('1','-5,0',6,'sepatu1'),
el('1','0,0',6,'peci1'),

],

man1:[
el('1','0,0',2,'sekolah'),
el('1','0,0',0,'manbawah1'),
el('1','0,0',1,'manatas1'),
el('1','0,0',5,'wajah1'),

el('1','0,0',5,'tangan1'),
el('1','-10,0',5,'tangan1'),
el('1','0,0',6,'sepatu1'),
el('1','-5,0',6,'sepatu1'),

el('1','0,0',3,'peci2'),
],

mansila:[
el('1','0,0',4,'facebook'),
el('1','0,0',0,'ibaju2'),
el('1','0,0',1,'mansila1'),
el('1','0,0',5,'wajah1'),

el('1','0,0',5,'tangan1'),
el('1','-10,0',5,'tangan1'),
el('1','0,-7',6,'sepatu1'),
el('1','-5,-7',6,'sepatu1'),

el('0.3','4.5,-2',2,'toga'),

],

mansila2:[
el('1','0,0',4,'twitter'),
el('1','0,0',0,'ibaju2'),
el('1','0,0',1,'mansila2'),
el('1','0,0',5,'wajah1'),

el('1','0,0',5,'tangan1'),
el('1','-10,0',5,'tangan1'),

],

manwoman:[
el('1','0,0',4,'masjid1'),
// man
el('1','0,0',1,'manbawah1'),
el('1','0,0',3,'ibaju4'),
el('1','0,0',0,'itangan1'),
el('1','0,0',5,'wajah1'),
el('1','-6, -8',5,'tangan1'),
el('1','-4, -8',5,'tangan1'),
// woman
el('1','0,0',0,'bawahan1'),
el('1','0,0',1,'atasan1'),
el('1','13,1',5,'wajah1'),
],

mansamping:[
el('1','0,0',4,'awan2'),
el('1','0,0',2,'kode'),
el('1','0,0',5,'wajah1'),
el('1','0,0',1,'manbawah1'),

el('1','-5, 0',2,'itangan3'),
el('1','0,0',0,'ibaju4'),
el('1','0,0',2,'itangan3'),
el('1','-11, -9',5,'tangan1'),

el('1','-6, -9',5,'tangan1'),
],

manandroid:[
el('1','0,0',4,'awan2'),
el('1','0,0',2,'android'),
el('1','0,0',5,'wajah1'),
el('1','0,0',1,'manbawah1'),

el('1','0,0',0,'ibaju5'),
el('1','-10,0',5,'tangan1'),
el('1','3,-10',5,'tangan1'),
],

},

view:{
modal:function(arr){
out=`<div class="modal">
<button class="right" onclick="tutup()">X</button>
<div class="row">${arr}</div></div>`;
return out;
},

detail:function(i){
return `
<span>
<button onclick="downloadPNG(${i})">PNG</button>
<button onclick="downloadSVGAsText(${i})">SVG-${i}</button>
</span>
`;
},

path:function(arr){
// fill:url('#gradient');
out=``;
for(i in arr){
out+=`<g
transform="translate(${arr[i].position})"
transform="scale(${arr[i].scale})"
fill="${arr[i].fill}"><path id="baju" d="${arr[i].path}"/></g>`;
// out+=`<g id="gbaju"  fill="${arr[i].fill}"><path id="baju" d="${arr[i].path}"/></g>`;

}
return out;
},

svg:function(path){
return `
<svg class="svgimgs" height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 30 30" preserveAspectRatio="xMidYMid meet" xml:space="preserve" >
${path}
</svg>`;
},

gallery:function(arr){
// alert(arr.length)
out=``;
for(let i in arr){
out+=`<div onclick="img.controller.modal(${i})" class="wow col-1-4" id="svg${i}">`;
out+=`${this.svg(img.view.path(arr[i]))}`;
out+=`
</div>`;
}
return out;
},
},

controller:{
modal:function(id){



out=`
<div class="col-1-2">
<div class="detail">
${this.simg(id)}</div></div>
<div class="col-1-2">
<div class="detail">

<span>
<button onclick="downloadSVGAsPNG('${id}')">PNG</button>
<button onclick="downloadSVGAsText('${id}')">SVG</button>
</span>


<div class="tabs">

<div class="tab">
<input type="radio" id="tab-1" name="tab-group-1" checked>
<label for="tab-1">SVG</label>

<div class="contents">
<pre id="svgCodeContainer"></pre>
</div>
</div>

<div class="tab">
<input type="radio" id="tab-2" name="tab-group-1">
<label for="tab-2">HTML</label>

<div class="contents">
<code>&lt;i class="di-${id}"&gt;&lt;/i&gt;</code>
</div>
</div>

<div class="tab">
<input type="radio" id="tab-3" name="tab-group-1">
<label for="tab-3">JS</label>

<div class="contents">
<code>img.svg("${id}");</code>
</div>
</div>

</div>


</div>
`;

modal(out);

// el=this.simg(id);
// modal(el)

const svgElement = document.getElementById(id); // Ambil elemen SVG
const svgCodeContainer = document.getElementById("svgCodeContainer"); // Tempat menampilkan kode

svgCodeContainer.textContent = svgElement.outerHTML;



},
getwarna:function(){

return img.model.warna;

},

gallery:function(id){

arrs=[
'sila2',
'sila',
'all',
'manwoman',
'woman',
'man',
'mansila',
'mansila2',
'mansamping',
'man1',
'manandroid',
'womandesign',
'womankode',
];


// arr=['woman','man'];
out=``;
for(let i in arrs){ var nod=arrs[i];
// log(nod)
out+=`<div class="col-1-4">`;
out+=`<div onclick="img.controller.modal('${nod}')" class="wow">`;
out+=this.simg(nod);
out+=`</div></div>`;
}
gebi(id).innerHTML=out;

},

svgs2:function(id){
path=img.view.path(img.model[id]);
return img.view.svg(path);
},


svgs:function(id){
arr=img.model[id];
path=img.view.path(arr);
out=img.view.svg(path);
modal(out)
},

svg:function(id){
arr=img.model.woman;
path=img.view.path(arr);
out=img.view.svg(path);
gebi(id).innerHTML=out;
},


simg:function(id='bayam'){
var {model}=img;
arr=model[id]
// log(arr)

out= `<svg  class="svgimgs" id="${id}"

height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"  viewBox="${model.viewbox}"
preserveAspectRatio="xMidYMid meet">`;

// out+=img.model.gradient;
for(i in arr){
out+=`
<g transform="translate(${arr[i].position}) scale(${arr[i].scale}) "
fill="${arr[i].fill}">
<path  d="${arr[i].path}"/></g>
`;


// <g transform="translate(${arr[i].position}) scale(${arr[i].scale}) "
// fill="${arr[i].fill}">
// <path  d="${arr[i].path}"/></g>

// out+=`<g id="gbaju"  fill="${arr[i].fill}"><path id="baju" d="${arr[i].path}"/></g>`;



}
out+=`</svg>`;
return out;
},

svgimg:function(id='bayam'){
// log(id);
var {model}=img;
for(key in model ){
// log(key);

list = document.getElementsByClassName("svg-"+key);
if(list.length > 0){
for (var i=0 ; i<list.length; i++){ list[i].innerHTML = this.simg(key);}
}
}
},

},

}
return img;
};

function downloadSVGAsText(id) {
const svg = document.querySelector('#'+id);
const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
const a = document.createElement('a');
const e = new MouseEvent('click');
a.download = `${id}.svg`;
a.href = 'data:image/svg+xml;base64,' + base64doc;
a.dispatchEvent(e);
}


function downloadSVGAsPNG(e){
const canvas = document.createElement("canvas");
const svg = document.querySelector('svg');
const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
const w = parseInt(svg.getAttribute('width'));
const h = parseInt(svg.getAttribute('height'));
const img_to_download = document.createElement('img');
img_to_download.src = 'data:image/svg+xml;base64,' + base64doc;
console.log(w, h);
img_to_download.onload = function () {
console.log('img loaded');
canvas.setAttribute('width', w);
canvas.setAttribute('height', h);
const context = canvas.getContext("2d");
//context.clearRect(0, 0, w, h);
context.drawImage(img_to_download,0,0,w,h);
const dataURL = canvas.toDataURL('image/png');
if (window.navigator.msSaveBlob) {
window.navigator.msSaveBlob(canvas.msToBlob(), e+".png");
e.preventDefault();
} else {
const a = document.createElement('a');
const my_evt = new MouseEvent('click');
a.download = e+'.png';
a.href = dataURL;
a.dispatchEvent(my_evt);
}
//canvas.parentNode.removeChild(canvas);
}
}

function rgbToHsl(hex) {
let r = parseInt(hex.substring(1,3), 16) / 255;
let g = parseInt(hex.substring(3,5), 16) / 255;
let b = parseInt(hex.substring(5,7), 16) / 255;
let max = Math.max(r, g, b), min = Math.min(r, g, b);
let h, s, l = (max + min) / 2;
if (max === min) { h = s = 0; // Achromatic
} else { let d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
if (max === r) {h = (g - b) / d + (g < b ? 6 : 0);}
else if (max === g) { h = (b - r) / d + 2;}
else { h = (r - g) / d + 4;}
h *= 60;
}
return { h: Math.round(h), s: Math.round(s * 100) + "%", l: Math.round(l * 100) + "%" };
}





gantiwarna('213','71%','57%')
