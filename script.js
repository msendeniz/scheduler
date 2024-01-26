document.getElementById("uploadButton").addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e){
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data,{type: 'array'});

        var firstSheetName = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[firstSheetName];
        var json = XLSX.utils.sheet_to_json(worksheet);
    }
});

reader.readAsArrayBuffer(file);
