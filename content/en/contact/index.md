---
title: "Contact"
description: "Drop us an email."
date: 2020-08-27T19:25:12+02:00
lastmod: 2020-08-27T19:25:12+02:00
draft: false
images: []
---


{{< email user="dorian.baret" domain="gmail.com" >}}

<p><br></p>

<form class="contact1-form">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
        <br>
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
     <br>
    <label for="subject">Enter a subject: </label>
    <input type="text" name="subject" id="subject" required>
     <br>
    <label for="message">Enter your message: </label>
    <input type="text" name="message" id="message" required>
        <br>
        <br>
    <input type="submit" value="Send!">
</form>

<script>
<!-- markdownlint-disable MD011 -->
$('.contact1-form').on('submit',function(e){
        //optional validation code here
  
        e.preventDefault();

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycby-p4VWqDavCUkIn3cB5U3OSzBurL5_1j7UEstqP71CKb2VMPY/exec",
            method: "POST",
            dataType: "json",
            data: $(".contact1-form").serialize(),
            success: function(response) {

                if(response.result == "success") {
                    $('.contact1-form')[0].reset();
                    alert('Thank you for contacting us.');
                    return true;
                }
                else {
                    alert("Something went wrong. Please try again.")
                }
            },
            error: function() {

                alert("Something went wrong. Please try again.")
            }
        })
    });
<script>
