class Form{ 
constructor(){




}

display(){
 var title=createElement("h2")  
 title.html("car racing game")  
 title.position(500,100)

 var input=createInput("name")
 input.position(500,260)

 var button=createButton("play")
 button.position(500,300)

 var greeting=createElement("h3")
 button.mousePressed(function(){

 input.hide()
 button.hide()
 var name=input.value()  
 playerCount+=1
 player.update(name)
 player.updateCount(playerCount)
 greeting.html("HELLO "+name)
 greeting.position(130,160)


 })

}






}