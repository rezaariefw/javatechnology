$(document).ready(function () {
    // alert("selamat datang");
    var strHtml = '<button type="button" id="idBtnPop" class="btn btn-warning">pop up</button>';
    var strHtml2 = '    <form>' +
        '        <div class="form-group">' +
        '          <label for="exampleInputEmail1">Username</label>' +
        '          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="username">' +
        '        </div>' +
        '        <div class="form-group">' +
        '          <label for="exampleInputPassword1">Password</label>' +
        '          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">' +
        '        </div>' +
        '        <div class="form-group">' +
        '          <label for="exampleInputFile">File input</label>' +
        '          <input type="file" id="exampleInputFile">' +
        '          <p class="help-block">Example block-level help text here.</p>' +
        '        </div>' +
        '        <div clsass="checkbox">' +
        '          <label>' +
        '            <input type="checkbox"> Check me out' +
        '          </label>' +
        '        </div>' +
        '        <button type="submit" class="btn btn-default">Submit</button>' +
        '     </form>';

    $('#idBtnForm').click(function () {
        //alert("tombol ditekan");
        $('#idDivForm').append(strHtml);
        $('#idBtnPop').click(function () {
            // alert("tombol ditekan");
            $('#idmodal').modal('show');
            $('#idmdlBody').append(strHtml2);
        });
    })

});