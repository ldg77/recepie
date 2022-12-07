Recepie:
 {
    img:String
    title:String
    subtitle:String
    author:String
    preparation:String
    ingredients:[{name:Strin, quantity:Number, type:String}]
    tags:[String]
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
/tags => get => getByTag() => [{}]
/:id/comment => post => saveComment() => {}