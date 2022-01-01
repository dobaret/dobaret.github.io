---
title: "Geoguessr"
description: ""
lead: ""
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: true
images: []
menu:
  docs:
    parent: "portfolio"
weight: 150
toc: true
---

{{< alert icon="⚠️" >}}
This guide was originally written in DITA, then transformed to Markdown through the <a href="https://github.com/dita-ot/dita-ot">DITA Open Toolkit</a>. As a result, it may contain errors.<br/><br/>Thank you for your understanding.
{{< /alert >}}

## Introduction

<img src="../../geoguessr_logo.png" alt="Grapefruit slice atop a pile of other slices">

<br/>

Welcome to How to master Geoguessr --or where the heck am I?!

Through this hopefully thorough guide, I wish to introduce you to a wonderful game called Geoguessr. May this lecture help you master it.

### Group introduction

Mastering Video Games is a technical documentation group, made out of five students from Université de Paris.

Our names are Dorian Baret, Néda El Hadj Mimoune, Andréï Georgescu, Samy Oubouaziz, and Mélissa Stocchi.

We are all part of the CTM \(Multingual Technical Communication\) Master's Degree, lead by Professor Patricia Minacori.

<div style="text-align: center;"><img src="../../logo.png" alt="Logo for Mastering Video Games" style="align-content: center;"></div>

<div style="text-align: center;"><img src="../../us.png" alt="The members of Mastering Video Games"></div>

### Legal disclaimer

Copyright © 2022, Mastering Video Games, all rights reserved. All the information on our guides is published in good faith and for general information purpose only. We do not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find in these guides is strictly at your own risk. We will not be liable for any losses and/or damages in connection with the use of our guides.

## What is Geoguessr?

Geoguessr is an online video game, which takes its player around the world, challenging them to find where they are through the lens of an interactive Panorama.

In its paid version, the game uses imagery from Google Street View, a feature of Google Maps, that provides interactive Panoramas from positions along many streets in the world. Most photography is done by car, but some is done by tricycle, boat, snowmobile, and underwater apparatus, as well as on foot. Individuals can also submit their Photo Spheresto the service.

In its free version, the game uses imagery from Mapillary, a competitor of Google Street View.

### And, what modes can you play?

As a free player, only Classic mode is available.As a Pro player, many modes of play are available.

Consult the Pro guide for more information about Pro game modes.

There are that many modes of play available to a Pro player:

- Classic mode
  - Explorer mode
  - Streaks
  - The Daily Challenge
  - Pro Leagues
  - Map Maker

- Play with Friends \(allows the players to do the other modes with other people\)

- Career
  - Battle Royale
  - Battle Royale Distance
  - Battle Royale Countries

### So, how much does Geoguessr cost?

Geoguessr is a freemium game and an example of games as a service \(GaaS\).

#### Playing Pro Geoguessr

Geoguessr, as a freemium, offers most of its features to Pro players.

The free version of Geoguessr offers limited features in comparison to its Pro version:

- Lower quality of images.

    The source of the free version is Mapillary, which offers a service similar to Google Street View but more limited.

#### Playing Geoguessr for free

Geoguessr, as a freemium, offers basic features for free.

The free version of Geoguessr offers limited features in comparison to its Pro version:

- Lower quality of images.

    The source of the free version is Mapillary, which offers a service similar to Google Street View but more limited.

- Mapillary view often lack the possibility of moving.
- A game of Geoguessr is five rounds long.

    With the free version, at the 3rd round, the game is interrupted for 10 seconds by a prompt to subscribe to the Pro version.

- The user is limited to one Map: "World".

## Where the heck am I?!

Mapping the world is a colossal task. Hence, Google Street View offers a limited range of destinations.Hence, Mapillary offers a limited range of destinations, which is also lower than of Google.

### Exploring the interface

Let's familiarize ourselves with the Geoguessr interface.

<br/>

<div style="text-align: center;"><img src="../../ui.png" alt="Geoguessr interface"></div>

<br/>

In the image below, you will see the Geoguessr interface divided in six zones. Let's give them names:

1. <a href="#controls">Controls</a>

2. <a href="#compass">Compass</a>

3. <a href="#status">Status</a>

4. <a href="#map">Map</a>

5. <a href="#panorama">Panorama</a>

6. <a href="#arrows">Movement arrows</a>

#### Controls <a id="controls"/>

<br/>

<div style="text-align: center;"><img src="../../controls.png" alt="Geoguessr Controls"></div>

<br/>

The Controls have multiple purposes:

- The <img src="../../zoom_in.png"> allows the player to zoom in in the Panorama. The <img src="../../zoom_out.png"> allows the player to zoom out in the Panorama.
- The <img src="../../options.png"> allows the player to access the **Options**.

    Inside, the **Effect volume** and the **Music volume** can be controlled by sliders. The **Sound**, **Classic Compass** and **Fullscreen** can be turned **ON** or **OFF** through switches.

- The <img src="../../return_to_start.png"> allows the player to **Return to start**.

    It can also be triggered by pressing **R** anytime during a game.

- The <img src="../../set_checkpoint.png"> allows the player to **Set checkpoint**.

    It can also be triggered by pressing **C** anytime during a game.

  - After it is clicked, <img src="../../return_to_checkpoint.png"> appears and allows the player to **Return to checkpoint**.

        It can also be triggered by pressing **C**, once a checkpoint has been set.

- The <img src="../../undo_move.png"> allows the player to **Undo move**.

    It can also be triggered by pressing **Z** anytime during a game, provided the player has made a move since the beginning of the round. If the player hasn't made, it's greyed out.

#### Compass <a id="compass"/>

<br/>

<div style="text-align: center;"><img src="../../compass.png" alt="Geoguessr Compass"></div>

<br/>

The Compass automatically displays in its center the orientation of the player view, as they move through the Panorama. By default, at the beginning of each round, the player faces North.

{{< alert icon="⚠️" text="Although the Compass can be a crucial tool, beware the type of Panorama, for example: the orientation of Photo Spheres is often wrong." />}}

|Abbreviation|Full term|
|------------|---------|
|N|North|
|S|South|
|W|West|
|E|East|
|NW|North-west|
|SW|South-west|
|SE|South-east|
|NE|North-east|

#### Status <a id="status"/>

<br/>

<div style="text-align: center;"><img src="../../status.png" alt="Geoguessr Compass"></div>

<br/>

The Geoguessr Status displays three information:

- Under **Map** is displayed the current Map.

  For example: **"World"**.

- Under **Round** is displayed the current round.

  A round of Geoguessr last five rounds.

- Under **Score** is displayed the current score.

  The maximum score in a game of Geoguessr is 25000, with 5000 points per round.

#### Map <a id="map"/>

<br/>

<div style="text-align: center;"><img src="../../map_before.png" alt="Geoguessr Map when non-expanded"></div>

<br/>

<div style="text-align: center;"><img src="../../map_after.png" alt="Geoguessr Map when expanded"></div>

<br/>

The Geoguessr Map displays Google Maps in a small window. The player is free to zoom in and zoom out of the Map to figure out their whereabouts. They can then click anywhere to put down their guessed location.

- The <img src="../../zoom_in.png"> allows the player to zoom in the Map. The <img src="../../zoom_out.png"> allows the player to zoom out in the Map.
- The <img src="../../increase_size.png"> allows the player to make the Map window bigger, while <img src="../../decrease_size.png"> allows the player to make the Map smaller.
- The <img src="../../sticky_map.png"> allows the player to keep the Map window in its expanded state. The <img src="../../sticky_map_left.png"> allows the player to make the Map window non-expanded again.

Below the Map, the **Guess** button allows the player to submit their location.

#### Panorama <a id="panorama"/>

The Panorama is a feature of Google MapsMapillary, called Street View. It allows the player to roam through ...

#### Movement arrows <a id="arrows"/>

<br/>

<div style="text-align: center;"><img src="../../movement_arrows.png" alt="Geoguessr Movement arrows"></div>

<br/>

The Movement arrows are a feature of Google MapsMapillary, which allows the player to navigate through the Panorama in the direction they're facing.

Once clicked, the Panorama changes to the next available image.

### Recognizing your location through language

Most often than not, the fastest way to recognize where you are is to read a sign.

Let's compare a few languages.

### Geography

### Miscellaneous \(meta clues\)

The nature of imagery makes it that by country, or region, meta clues can be spotted.

## I can't play Geoguessr!

Here are a few issues reported by our readers while playing Geoguessr, and our solutions.

### The Geoguessr Panorama displays a black screen

geoguessr only shows me a black screen, aaaaaaaggghhhh!!!!!!!!

<br/>

<div style="text-align: center;"><img src="../../black_screen.png" alt="Geoguessr shows me a black screen"></div>

<br/>

Do not worry, this is a common bug due to insufficient connection speed, try the following course of action:

1. Begin by refreshing your tab.

    - On Windows, in most web browsers \(including Google Chrome, Mozilla Firefox and Microsoft Edge\), you will find this feature in the top left-hand corner of the screen, next to the **Back** and **Forward** buttons.

    - On Mac OS, however, in Safari you will find it on the right-side of the **Search** bar.

{{< alert icon="👉" text="You can also press F5 or CTRL+R on Windows, or Command+R on Mac OS." />}}
<!-- markdownlint-disable MD029 -->
2. If this doesn't solve your issue, consider reading <a href="#no_network">Geoguessr is inaccessible</a>.

### Geoguessr is inaccessible <a id="no_network"/>
<!-- markdownlint-disable MD029 MD030 -->
i can't reach geoguessr.com anymore! pls halp!

<br/>

<div style="text-align: center;"><img src="../../no_network.png" alt="Geoguessr doesn't load"></div>

<br/>

It seems you're not connected to the Internet anymore, try the following course of action:

1. Begin by checking your **Network** settings.

    - On Windows, go to **Start Menu** \> **Settings** \> **Network & internet**.
    - On Mac OS, go to **Apple menu** \> **System Preferences** \> **Network**.
2. If you're indeed disconnected, try the following course of action:

    - If you're connected through **Wifi**, try turning off then on the **Wifi** option.
    - If you're connected through ethernet, try removing the cable from your computer then plugging it in again.
3. If this doesn't solve your issue, try turning your computer off then on.

4. If this doesn't solve your issue, go check your router.

    A red blinking red light might be sign of a problem with the router's connection.

5. If it does seem to be malfunctioning, try turning it off and on.

6. If after rebooting the issue persists, try calling your ISP or go see your local IT shop.

## Conclusion

### Competitive Geoguessr \(get gud\)

### More ressources
