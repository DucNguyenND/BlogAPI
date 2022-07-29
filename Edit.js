$.ajax({
    type: "PUT",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    url: "http://localhost:8080/blogs/",
    success: function (data) {
        console.log(data)
        showedit(data);
    },
    error: function (err) {
        console.log(err)
    }
})
function showedit(){
    let str=`<tr>
            <td><input readonly id="idblog" value="${data.id}"> </td>
            <td><input id="title" value="${data.title}"> </td>
            <td><input id="content" value="${data.content}"> </td>
            <td><input id="img" value="${data.img}"> </td>
            <button onclick="edit()">Edit</button>`
    document.getElementById("showcreate").innerHTML=str;
}

function edit(){
    let id = $('#idblog').val();
    let title = $('#title').val();
    let content = $('#content').val();
    let img = $('#img').val();
    let date = $('#date').val();
    let category_id = $('#category_id').val();
    let obj={
        id:id,
        title:title,
        content:content,
        img:img,
        date:date,
        category_id:category_id

    }
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/blogs",
        data: JSON.stringify(obj),
        //xử lý khi thành công
        success: function (data) {
            console.log(data)
            location.href = "untitled1/show.html";
        },
        error: function (err) {
            console.log(err)
        }})
}