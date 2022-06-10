var  URL = 'http://localhost:5000/amigos'

let searchFriends = function (){
    $('#lista').empty()
    $.get(`${URL}`, function(friends){
        friends.forEach(e => {
            $('#lista').append(`<li id ='${e.id}'> ${e.name} X </li>`)
        });
    })
}

$('#boton').click(searchFriends)





let getfriendsById = function(){
    let value = $('#input').val()
    $.get(`${URL}/${value}`, function(friend){
        
        $('#amigo').text(`your name of my friend is :${friend.name}`)
        $('#input').val('')
    })
}

$('#search').click(getfriendsById)


let deleteOfListFriends = function(){
    let id = $('#inputDelete').val()
    $.ajax({
        url: `${URL}/${id}`,
        type: 'DELETE',
        success: function(){
            $('#success').text('youe friend remove of the List')
            $('#inputDelete').val('')
            searchFriends()
        } 
    })

}

$('#delete').click(deleteOfListFriends)