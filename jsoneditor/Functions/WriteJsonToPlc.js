function WriteJson() {
    var TableData = editor.get();
    //console.log(TableData);

    TcHmi.Symbol.writeEx('%s%PLC1.MAIN.myString%/s%', TableData, function (data) {
        if (data.error === TcHmi.Errors.NONE) {
            // Handle success... 
            console.log("success");
        } else {
            // Handle error... 
            console.log("Error: " + data.error);
        }
    });
}
