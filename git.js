$.ajax({
    url: "https://api.github.com/users/wagonwheels40/repos",
    dataType: "json",
    success: function(repos) {
        $.each(repos, function(index, repo) {
            $("#repos-container").append("<p><a href='" + repo.html_url + "'>" + repo.name + "</a></p>");
        });
    }
});