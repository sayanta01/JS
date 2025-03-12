# https://youtu.be/C5ZVC4HHgIg?si=fZ1UbgxociT_bsHd
If you don’t have a clear mental model of equality in JavaScript, every day is like a
carnival—and not in a good way. You’re never quite sure if you’re dealing with the
same value, or with two different values. As a result, you’ll often make mistakes—
like changing a value you didn’t intend to change

# Kinds of Equality # Types of values makes them distinct from one another
Strict Equality: 2 === 2 (triple equals)
Loose Equality: 2 == 2 (double equals)
Same Value Equality: Object.is(2, 2) # Tells us if both are the same value
- Despite Object in the method name, Object.is is not specific to
  objects. It can compare any two values, whether they are objects or not!

![](equality.png)
![](obj-equality.png) # Remember that {} always means “create a new object value”
let banana = {}; // Declare a banana variable, Create a new object value {}, and Point the banana wire to it
let cherry = banana; // Declare a cherry variable and Point the cherry wire to where banana is pointing
# banana ------> {}
#                ^
# cherry --------|
let chocolate = cherry;
# banana ------> {}
#                ^
# cherry --------|
#                ^
# chocolate -----|
cherry = {}; // Updates to a new object; banana and chocolate still point to the original {}
# banana ------> {}
#                ^
# chocolate -----|
# cherry ------> {}
console.log(Object.is(banana, cherry)); // false
console.log(Object.is(cherry, chocolate)); // false
console.log(Object.is(chocolate, banana)); // true

# Strict Equality: ===
console.log(2 === 2); // true
console.log({} === {}); // false because each {} creates a different value

# Irregular verbs: eat - ate (not "eated")
# - special verbs that don’t follow normal rules for changing to past tense or past participle
# ![Memorize Them](https://enghub.pro/storage/Lessons%20Pics/irregular%20verbs%20(part%202)/5.png)
# Normal verbs (regular): Add -ed for past tense # walk - walked

Remember that NaN === NaN is always false # However, NaN is the same value as NaN
-0 === 0 and 0 === -0 are true, although they are different values

- Use Object.is for special cases like NaN or to distinguish between -0 vs 0
# console.log(Object.is(NaN, NaN)); // true
# console.log(Object.is(-0, 0));    // false
- Use === for eveything else

# console.log(NaN !== NaN); // Works because NaN === NaN is false, as we
# already learned. So the reverse (NaN !== NaN) must be true

# Loose Equality - Bogeyman of JavaScript
Compares values with type coercion: Converts one type to another
console.log('4' == 4); // true
# The one relatively common use case worth knowing is:
# if (x == null) {
# // checks if x is null or undefined because null == undefined
# }
# This code is equivalent to writing:
# if (x === null || x === undefined) {
# }

# Recap
Understanding this kind of equality helps prevent bugs! You will often
need to know when you’re dealing with the same value, and when you’re
dealing with two different values

# Vocab
Anecdote - interesting story about a real incident or person
Arcane - mysterious or secret
