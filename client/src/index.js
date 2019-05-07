import style from "./styles.css";

const CONSTANTS = {
    typesOfRemote: [
        {id:1, type:'TV', label: 'TV', imgsrc: 'src/assets/tv.PNG', brands: []},
        {id:2, type:'setTop', label: 'Set-Top Box', imgsrc: 'src/assets/settop.PNG', brands: []},
        {id:3, type:'AC', label: 'AC', imgsrc: 'src/assets/ac.PNG', brands: []},
        {id:4, type:'fan', label: 'Fan', imgsrc: 'src/assets/fan.PNG', brands: []},
        {id:5, type:'curtain', label: 'Curtain', imgsrc: 'src/assets/curtain.PNG', brands: []},
        {id:6, type:'camera', label: 'Camera', imgsrc: 'src/assets/camera.PNG', brands: []},
        {id:7, type:'Projector', label: 'Projector', imgsrc: 'src/assets/projector.PNG', brands: []},
    ]
};

let allRemotesData = [];

class RemoteList {
    constructor(){
        this.list = {};
    }

    getList() {
        return this.list;
    } 

    getFavourites() {
        return this.list.filter((remote) => remote.isFavourite == true);
    }

    addRemote() {
        let id = Object.keys(this.list).length;
        let item = new Remote(id);
        this.list[id] = item;
    }

    deleteRemote(index) {
        this.listItems[index] = undefined;
    }
}

class Remote {
    constructor(index){
        this.id = index;
        this.name = '';
        this.type = '';
        this.company = '';
        this.model = '';
        this.isFavourite = false;
        this.createLI();
    }

    createLI() {

    }
}

let allRemotes = new RemoteList();
const remoteList = document.getElementById('remoteList');
const addRemote = document.getElementById('addRemote');
const viewRemote = document.getElementById('viewRemote');
const userDetails = document.getElementById('userDetails');
const addBtn = document.getElementById('add');
const homeIcon = document.getElementById('home');
const userIcon = document.getElementById('user');
const favIcon = document.getElementById('favorites');


function routeHandle(route) {
    var divsToHide = document.getElementsByClassName("routes");
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none";
    }
    switch(route) {
        case 'home':
        case 'favorites': remoteList.style.display = ""; break;
        case 'add': addRemote.style.display = ""; break;
        case 'view': viewRemote.style.display = ""; break;
        case 'user': userDetails.style.display = ""; break;
    }
};

function attachEventListeners() {
    homeIcon.addEventListener("click",()=>{
        routeHandle('home');
        renderRemoteListUI();
    });
    favIcon.addEventListener("click",()=>{
        routeHandle('favorites');
        renderRemoteListUI(true);
    });
    userIcon.addEventListener("click",()=>{
        routeHandle('user');
    });
    addBtn.addEventListener("click", function(){
        routeHandle('add');
    });
}


function getImageSource(type) {
    switch(type) {
        case 'TV': return 'src/assets/tv.PNG'; break;
        case 'AC': return 'src/assets/ac.PNG'; break;
        case 'fan': return 'src/assets/fan.PNG'; break;
        case 'setTop': return 'src/assets/settop.PNG'; break;
        case 'camera': return 'src/assets/camera.PNG'; break;
        case 'curtain': return 'src/assets/curtain.PNG'; break;
        case 'projector': return 'src/assets/projector.PNG'; break;
    }
}

function addRemoteonUIScreen(key) {
    addRemote.innerHTML = '';
    let back = document.createElement('i');
    back.className = 'fas fa-arrow-left fa-2x footer-icons';
    back.addEventListener("click",(key)=>{
        createAddRemote();
    });
    addRemote.append(back);
    switch(key.currentTarget.id) {
        case 'TV': break;
        case 'AC': break;
        case 'fan': break;
        case 'setTop': break;
        case 'camera': break;
        case 'curtain': break;
        case 'projector': break;
    }
}

function createAddRemote(){
    addRemote.innerHTML = '';
    let types = CONSTANTS.typesOfRemote;
    for(let i=0; i<types.length; i++) {
        let card = document.createElement('img');
        card.className += "col-xs-5 col-sm-5 col-md-3 col-lg-3 card-img-top-1";
        card.src = `${types[i].imgsrc}`;
        card.id = `${types[i].type}`;
        card.addEventListener("click",(key)=>{
            addRemoteonUIScreen(key);
        })
        addRemote.append(card);
    }
}

function renderRemoteListUI(fav) {
    remoteList.innerHTML = '';
    let selectedRemotes = allRemotesData.slice(0);
    if(fav && fav === true) {
        selectedRemotes = allRemotesData.filter((rem)=>rem.isFavourite===true);
    }
    for(let i=0; i<selectedRemotes.length; i++) {
        let card = document.createElement('div');
        card.className += " col-xs-8 col-sm-5 col-md-5 col-lg-4 mycard";
        let imgsrc = getImageSource(selectedRemotes[i].type);
        let fav = selectedRemotes[i].isFavourite ? `<i class="fa fa-heart red" aria-hidden="true"></i>` : `<i class="fa fa-heart-o white" aria-hidden="true"></i>`;
        card.innerHTML = `<div class="row"><img class="card-img-top col-xs-4 col-sm-4 col-md-4 col-lg-4" src="${imgsrc}" alt="Remote Img Not Found"/>
            <div class="card-body col-xs-8 col-sm-8 col-md-8 col-lg-8 plp-4">
                <p class="card-text">${selectedRemotes[i].name}</p>
                <h6 class="fs">${selectedRemotes[i].company}</h6>
                ${fav}
            </div></div>`;
        remoteList.append(card);
    }
}

function init() {
    createAddRemote();
    attachEventListeners();
    const Http = new XMLHttpRequest();
    const url='http://localhost:3001/allRemotes';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e) => {
        if(Http.readyState === 4 && Http.status === 200) {
            allRemotesData = JSON.parse(Http.responseText);
            routeHandle('home');
            renderRemoteListUI();
        }
    }
}

init();