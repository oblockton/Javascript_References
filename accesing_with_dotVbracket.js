/*
Solution Summary:
Bracket notation always works. Dot notation requires properties that begin with a letter and do not include special characters.

Let's go through these one-by-one.
*/
property
dot notation: true

bracket notation: true

This one is normal. Either syntax is fine.

"property1"
dot notation: true

bracket notation: true

A number attached to the end of a property is acceptable for dot and bracket notation.

"property-2"
dot notation: false

bracket notation: true

Some special characters like the - are not acceptable with dot notation but will still work with bracket notation.

"property 3"
dot notation: false

bracket notation: true
/*
Spaces are generally bad form in programming. Don't use them except within strings. But you can still access a property name with a space using bracket notation.
*/
"property$"
dot notation: true

bracket notation: true

Surprisingly, you actually can use $ within property names and still access them with dot notation.

" property"
dot notation: false

bracket notation: true

In dot notation, the space actually gets ignored, so you are accessing "property" instead. But bracket notation still works.

"property()"
dot notation: false

bracket notation: true

Without quotes, property() is a function call. This is just plain bad. While you can access a property like this one with bracket notation, there's no reason you should ever include () within an object property.

"property[]"
dot notation: false

bracket notation: true

Like the last one, this is bad form too. [] already have a specific purpose in JavaScript and should never be used within a property.

"8property"
dot notation: false

bracket notation: true

Dot notation fails to work if the property starts with a number. This is also bad form. Properties should never start with numbers.
