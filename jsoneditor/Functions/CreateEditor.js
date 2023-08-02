function InitEditor() {

    TcHmi.Symbol.readEx2('%s%PLC1.MAIN.myString%/s%', function (data) {
        if (data.error === TcHmi.Errors.NONE) {
            // Handle result value... 
            var value = data.value;
            console.log("success: " + value);


            // create the editor
            const container = document.getElementById("jsoneditor");
            const options = {};
            editor = new JSONEditor(container, options);
            var initialJson = {};
            // set json
            initialJson = JSON.parse(value);

            console.log("initialJson: " + initialJson);
            editor.set(initialJson);

            // get json
            const updatedJson = editor.get();
            console.log(updatedJson);



        } else {
            // Handle error... 
            console.log("Error on InitEditor: " + data.error);
        }
    });


}

