export class RemoteList {
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