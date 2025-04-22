---
title: Mochi, Run!
layout: project.njk
subtitle: 2D Infinite, Side-Scrolling Game
featuredImage: /imgs/projects/mochi/mochi.png
imageWidth: 400
projectLink: https://franzlor.itch.io/byte-hopper
technologies:
  - { name: "C++", badge: "https://img.shields.io/badge/C%2B%2B%20-%20blue?style=flat-square" }
  - { name: "Raylib", badge: "https://img.shields.io/badge/Raylib%20-%20red?style=flat-square" }
learnings:
  - title: Proper Physics with Delta Time
    content: |
      <p>
        When I started working on "Mochi, Run!", I thought, "How hard can it be to make the cat jump?"<br>
      
        Turns out, it's not just about moving pixels up and down on the screen.
        This project quickly taught me the importance of velocity, gravity, and the voodoo concept of delta time.<br>
      
        One of the pains in game development is that not all computers are created equal. Some are faster, some are slower.
        Imagine a player with a faster computer that gets 60 frames per second, while the second player barely gets 30 frames per second.
        The second player will see that the first player's character moves faster than theirs. <br>
      
        Delta time is essentially the time that has passed since the last frame was rendered.

        Think of it like this: instead of moving a character a fixed number of pixels every frame, you move it based on the time that’s actually passed.
        So, if one player’s computer is running faster than another’s, delta time helps make sure that both players experience the game at the same speed.<br><br>

        That’s the real magic of delta time—it keeps things consistent, even when the frame rate isn’t.<br><br>
      
        This fixed all the problems I had with the jumps being too high or too low, depending on the frame rate.
        It fixed the issues with animations being too fast and drones colliding with the player at Mach 5 speeds. <br><br>
      
        One of the most important lessons from my game dev journey so far:
        always make sure the game runs at a consistent speed, <strong>no matter what kind of hardware players are using</strong>.
        Sure, it's a small detail for developers, but it makes a world of difference that players of your game will notice. <br><br>
      </p>
  - title: 2D Animations with Sprite Sheets
    content: |
      <p>
        Before, I always thought animating 2D sprites were going to be easy. But this project humbled me real quick.<br><br>
      
        There's a whole rabbit hole on the art of sprite sheets. I spent more time than I care to admit staring at spreadsheets,
        lining up frames, and getting the timing just right.
        The main problem I faced was figuring out the correct order of frames and how long each frame should last.
        At one point, I ran into a specific issue where the running animation looked like it was skipping.
        I just couldn’t figure out why it didn’t look smooth.<br><br>
      
        After a while, I realized the issue was with the way I was calculating which frame to display.
        I was simply incrementing the frame index each time, without considering the elapsed time between frames.
        As a result, the animation speed varied depending on the frame rate, and sometimes frames would get skipped altogether.<br><br>
      
        What's crazy is that it was just for a simple jump and run animation.<br>
      
        <img src="/imgs/projects/mochi/mochi-gif.gif" alt="Mochi, Run! Gameplay"><br>
        
        Past all the code, this project also taught me that 2D animation is more than just
        pictures in motion—<strong>it's about precision, timing, and making sure every frame makes sense</strong>.
        It was about making sure each animation flowed perfectly with Mochi's movements and the game's physics.<br><br>
      
        Looking back, there's still noticeable flaws in the animations. But I'm proud of how this project turned out.<br><br>
      </p>
---

"Mochi, Run!" was the first of many.<br>
This was the project that really motivated me to go further into my journey.
Written in C++ using the Raylib library, this is a simple 2D platformer heavily inspired by Google's Dinosaur Game.<br>

The game features a simple infinite runner mechanic, where the player must jump over obstacles to avoid a game over.
Their goal? To get the highest score possible.<br>

<img src="/imgs/projects/mochi/mochi-run.png" alt="Mochi, Run! Main Title Screen">