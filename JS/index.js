$(document).ready(function() {
    // $('.login').hide();
    // $('.signup').hide();
    // $('#login').click(function(e) {
    //     e.preventDefault();
    //     $('.signup').hide();
    //     $('.login').show();
    // });
    // $('#signup').click(function(e) {
    //     e.preventDefault();
    //     $('.login').hide();
    //     $('.signup').show();
    // });
    // $('#logo').click(function(e) {
    //     e.preventDefault();
    //     $('.login').hide();
    //     $('.signup').hide();
    // });

    $('#actionlogin').click(function(e) {
        e.preventDefault();
        let user = $('#userlogin').val();
        let password = $('#passwordlogin').val();
        console.log(user);
        console.log(password);
        if (user == 'admin' && password == 'admin') {
            alert("Đăng nhập thành công.");
            $('#login').hide();
            $('.form-login').hide(400);
        } else {
            alert("Sai user hoặc password.");
        }
    });

    $('#actionsignup').click(function(e) {
        e.preventDefault();
        alert("Đăng ký thành công.");
        $('#signup').hide();
        $('.form-signup').hide(400);
    });
});