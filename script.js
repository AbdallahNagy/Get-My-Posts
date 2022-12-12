let posts = $(".posts");
let titles = $(".titles");

$("#pheader").hide();

$.get("https://jsonplaceholder.typicode.com/users", function(args){
    console.log(args);
    args.forEach(obj => {
        titles.append("<h2 id='" + obj.id + "'>" + obj.name + "</h2>");
    });
});

titles.on("click", "h2", function() {
    $.get("https://jsonplaceholder.typicode.com/posts?userId="+this.id, 
    function(args)
    {
        $("#pheader").show();
        console.log(args[0].body); //arr of user info
        posts.html("");
        for(let i=0; i<args.length; i++) {
            posts.append("<p >" + args[i].body + "</p>")
        }
    }
    )
});