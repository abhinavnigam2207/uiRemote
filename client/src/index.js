import style from "./styles.css";
import {CONSTANTS} from "./app.constants.js";
import {createGenericButtons, createCameraRemote,
    createFanRemote, createACRemote, createTVRemote} from "./remoteTemplates.js";
import {RemoteList} from "./models/remoteList.js";
import {Remote} from "./models/remote.js";
import {getImageSource} from "./UtilService.js";

let allRemotes = new RemoteList();
let allRemotesData = [];
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

function addRemoteonUIScreen(key) {
    addRemote.innerHTML = '';
    let back = document.createElement('i');
    back.className = 'fas fa-arrow-left fa-2x footer-icons back-btn';
    back.addEventListener("click",(key)=>{
        createAddRemote();
    });
    addRemote.append(back);
    addRemote.innerHTML += '<h3>Add Remote UI screen here.</h3>';
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
};

function showRemote(remote) {
    viewRemote.innerHTML = '';
    viewRemote.className = "routes bg-remote";
    let back = document.createElement('i');
    back.className = 'fas fa-arrow-left fa-2x footer-icons back-btn';
    back.addEventListener("click",(key)=>{
        routeHandle('home');
        renderRemoteListUI();
    });
    viewRemote.append(back);
    let rem = document.createElement('div');
    rem.className = "remote";
    rem.innerHTML = ``;
    switch(remote.type) {
        case 'TV':
        case 'setTop': rem.innerHTML += createGenericButtons() + createTVRemote(); break;
        case 'AC': rem.innerHTML += createGenericButtons() + createACRemote(); break;
        case 'camera': rem.innerHTML += createCameraRemote(); break;
        case 'fan': rem.innerHTML += createGenericButtons() + createFanRemote(); break;
    }
    viewRemote.append(rem);
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
        card.addEventListener("click",(key)=>{
            routeHandle('view');
            showRemote(selectedRemotes[i]);
        })
        remoteList.append(card);
    }
}

function init() {
    createAddRemote();
    attachEventListeners();
    const Http = new XMLHttpRequest();
    const url= CONSTANTS.baseUrl + 'allRemotes';
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