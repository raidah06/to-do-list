export class Lists{

}


export default class Todo{
    constructor(title,date,priority){
        this.title=title
        this.priotity=priority
        this.date=date

    }
}

export class Project{
    constructor(name,id){
        this.name=name
        this.id=id
        this.toDos=[]
    }
}