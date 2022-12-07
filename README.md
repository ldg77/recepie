Reciepe:
{
img:String
title:String
subtitle:String
author:String
preparation:String
ingredients:[{name:Strin, quantity:Number, type:String}]
tags:String
comments:[comment]
}
Comment:{

    name:String
    text:String

}
default Tags: ["Beef", "Pork", "Chicken" "Vegan", "Vegetarian", "FastFood"]

Routes:
/ => get => getAllRecepies() => [{}]
/ => post => saveOneRecepie() => {}
/:id => get => getOneRecepie() => {}
/tags/:name => get => getByTag() => [{}]
/:id/comment => patch => saveComment() => {}

Nav{LOGO,Home,AddRecepie,DropDown(Tag) }
Cards(IMG, title, tags, <Button ShowRecepie>)
Card(all <Button AddComment> )
