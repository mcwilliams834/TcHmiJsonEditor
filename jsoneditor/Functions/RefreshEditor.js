function refresh() {
   // if (editor) {
        TcHmi.Symbol.readEx2('%s%PLC1.MAIN.myString%/s%', function (data) {
            if (data.error === TcHmi.Errors.NONE) {
                // Handle result value... 
                var value = data.value;
                console.log("success: " + value);



                var initialJson = {};
                // set json
                initialJson = JSON.parse(value);

                console.log("initialJson: " + initialJson);
                editor.set(initialJson);
                editor.expandAll();





            } else {
                // Handle error... 
                console.log("Error on InitEditor: " + data.error);
            }
        });
   // }
 

}
