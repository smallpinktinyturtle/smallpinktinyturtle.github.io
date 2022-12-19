var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textOutput = $("#text-output")

var instructions = $("#instructions")

var content = ''

recognition.continous = true


recognition.onstart = function(){
    instructions.text("Speak Now")
}


recognition.onspeechend = function(){
    instructions.text("No Activity")
}

recognition.onerror = function(){
    instructions.text("Try Again")
}

recognition.onresult = function(event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript

    content += transcript

    textOutput.val(content)
}

$("#start-btn").click(function (event){
    if(content.length){
        content += ''
    }
    recognition.start()

})

textOutput.on('input', function(){
    content = $(this).val()
})