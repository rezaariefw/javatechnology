var vDataPegawai = [
    {'Nama':'Fullan','Alamat':'JlBeoNo.5', 'Jns':true,'Kota':'Bekasi','Email':'fullan@fullan.com'},
    {'Nama':'Paiman','Alamat':'JlAnggrekNo.20', 'Jns':true,'Kota':'Tanggerang','Email':'fullan@fullan.com'},
    {'Nama':'Paijo','Alamat':'JlMawarNo.35', 'Jns':false,'Kota':'Bandung','Email':'fullan@fullan.com'},
];
$(document).ready(function () {
    $.each(vDataPegawai, function (index, data) {
        var vJns = '';
        if (data.Jns == true) {
            vJns = 'Laki-laki';
        } else {
            vJns = 'perempuan';
        }
        var vJahitHtml =
            '<tr>' +
            '<td>' + (index + 1) +
            '</td>' +
            '<td>' + data.Nama +
            '</td>' +
            '<td>' + data.Alamat +
            '</td>' +
            '<td>' + vJns +
            '</td>' +
            '<td>' + data.Kota +
            '</td>' +
            '<td>' + data.Email +
            '</td>' +
            '<td>' +
            ' <button class="btn btn-primary" id="idDetail">detail</button>' + '&nbsp' +
            '<button class="btn btn-warning clBtnEditPegawai" data="' + JSON.stringify(data) + '" >edit</button>' + '&nbsp' +
            '<button class="btn btn-danger" id="btnDelete">delete</button>' + '&nbsp' +
            '</td>' +
            '</tr>';
        $('#btnNew').click(function () {
            //alert("tombol ditekan");
            $('#idTbodyPegawai').append(vJahitHtml);
            
            $('.clBtnEditPegawai').click(function () {
                $('#tabelPegawai').DataTable();
                $('#idmdlBody').empty();
              //var vData = JSON.parse($(this).attr('data'));
                $('#idmdlBody').append(vTable);
              // $('#idNamaTable').val(vData.Nama);

                $('#idmodal').modal('show');

            });
        });
        
        var vTable =
            '    <form>' +
            '        <div class="form-group">' +
            '          <label for="nama">Nama</label>' +
            '          <input type="text" class="form-control" id="idNamaTable" placeholder="Nama">' +
            '        </div>' +
            '        <div class="form-group">' +
            '          <label for="alamat">Alamat</label>' +
            '          <input type="password" class="form-control" id="idAlamatTable" placeholder="Alamat">' +
            '        </div>' +
            '            <div class="form-group">' +
            '           <label for="jeniskelamin" >Jenis Kelamin*</label>' +
            '          <div class="radio">' +
            '          <label><input type="radio" name="optradio" checked>Pria</label>' +
            '          </div>' +
            '          <div class="radio">' +
            '         <label><input type="radio" name="optradio">Wanita</label>' +
            '             </div>' +
            '<div class="form-group">' +
            '          <label for="kota">Kota</label>' +
            '          <input type="text" class="form-control" id="idkotaTable" placeholder="kota">' +
            '        </div>' +
            '<div class="form-group">' +
            '          <label for="email">email</label>' +
            '          <input type="text" class="form-control" id="idemailTable" placeholder="Email">' +
            '        </div>' +
            
            '          <label>' +
            '            <input type="checkbox"> Check me out' +
            '          </label>' +
            '        </div>' +

            '     </form>';


    });
    //disini untuk append


});