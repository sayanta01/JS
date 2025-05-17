#
It’s always a good idea to have a mockup representing the exact page you want to build before you start coding it up, but this is particularly true for forms

# action, method
The GET HTTP method requests a representation of the specified resource
- /search?query=value # value = data you're submitting for the search
The POST HTTP method sends data to the server
- use POST when you’re changing data on the server

![](https://internetingishard.netlify.app/label-element-for-attribute-313489.64666d97.png)
- label element makes radio button options clickable by linking them
- for in <label>  # connects the label to the input using the same id
- name in <input> # labels the data for the server during form submission

Namespaced - applying styles to specific HTML parts to keep them separate and organized

Input Validation works due to type=
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

Understanding the CSS to pluck out exactly the elements you want is a crucial skill

Radio Buttons
- fieldset # group related radio buttons together (container)
- legend   # title/label of the group
- name     # groups radio buttons together # only one radio button with the same `name` can be selected at a time
- value    # defines the data sent when selected
- <input type="radio" name="food" value="pizza"> Pizza # `pizza` will be sent to the server

# Vendor-specific prefix # ensure compatibility across different browsers

Self-closing # no inner content, only attributes
Non-self-closing # wraps around and holds content

Styling <select> elements can be tricky due to default browser styles
- better to use JS-based UI solutions

Checkboxes # don’t require grouping since users can select multiple options ❌<fieldset>
- wrapping the <input/> inside the <label> makes the label text clickable to toggle the checkbox

Property with auto adjusts dynamically based on content, context, or parent
- width: auto

speaker-submission.html?full-name=sayanta&email=sayanta%gamil.com&talk-type=workshop&t-shirt=s&abstract=Desc&available=is-available

AJAX (Asynchronous JavaScript and XML)
- updates parts of a webpage without reloading the whole page

enctype # required for file uploads
- multipart/form-data: splits data parts, suitable for binary data

# Terms
A/B testing
Term `legend` comes from print and publishing, where it refers to a description or label for maps, diagrams, or charts
