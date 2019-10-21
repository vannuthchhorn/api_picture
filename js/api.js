$(document).ready(function(){
    var url ="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flowers&image_type=photo&pretty=true";
    $.getJSON(
        url,
        function(data){
            var result = "";
            data.hits.forEach(el => {
                result +=`
                    <div class ="card-body">
                        <img src="${el.largeImageURL}" class ="img-fluid">
                    </div>
                    <div class="card-footer">
                        <img src="${el.userImageURL}" class ="img-fluid rounded-circle" width="40">
                        ${el.tags}
                        <i class ="material-icons float-right text-danger">favorite</i>
                    </div>
                `;
            });
            $('#card').append(result);
        }
    );
});