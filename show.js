$.ajax({
    type: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    url: "http://localhost:8080/blogs",
    //xử lý khi thành công
    success: function (data) {
        console.log(data.content)
        show(data.content);
    },
    error: function (err) {
        console.log(err)
    }
})

function show(data){
    let str="";
    for (let i = 0; i < data.length; i++) {
      str+= `<tr>
            <td>${data[i].id} </td>
            <td>${data[i].title} </td>
            <td>${data[i].content} </td>
            <td><img src="${data[i].img}" width="50 px" height="50 px"> </td>
            <td><button onclick="editblog(${data[i].id})" value="${data[i].id}" >Edit</button></td>
            <td><button onclick="deleteblog(${data[i].id})" value="${data[i].id}" >Delete</button></td>
        </tr>`
    }
    document.getElementById("show").innerHTML = str;

}
// function deleteblog(id){
//     $.ajax({
//         type: "DELETE",
//         url: "http://localhost:8080/blogs/" + id,
//         success: function (blogs) {
//             // let title=blogs.title;
//             // let  content=blogs.content;
//             // let  img=blogs.img;
//             // let date=blogs.date;
//             // let category_id=blogs.category_id;
//             let str='<input type="hidden" id="deleteid" value=" ${id} "> <button type="button" id="save" onclick="deleteblogs()" >Delete</td>'
//         }})
// }
function deleteblog(id){
    $.ajax({
        type: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/blogs/"+id,
        success: function (data) {
            console.log(data)
            location.href = "show.html";
        },
        error: function (err) {
            console.log(err)
        }})
}
function editblog(id){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/blogs/"+id,
        success: function (data) {
            console.log(data)
            // location.href = "edit.html";
        },
        error: function (err) {
            console.log(err)
        }
})

}
