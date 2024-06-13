window.addEventListener("DOMContentLoaded",(event)=>{
    getVisitCount();
});


const functionApi = 'https://getcevecounter.azurewebsites.net/api/GetResumeCounter?code=IdOlRgvKvwV4zJeKpCsYnn9JpAWlcgBKBTS_GDT5PmghAzFu61QjGg%3D%3D';
const getVisitCount=()=>{
    let count =30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function Api.");
        count =response.count;
        document.getElementById("counter").innerHTML=count;
    }).catch(function(error){
        console.log("error");
    });
    return count;
}