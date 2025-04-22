---
title: Turret Tank Blitz
layout: project.njk
subtitle: A 3D, Third-Person Shooter Featuring Enemy AI
featuredImage: /imgs/projects/tank/tank.png
imageWidth: 400
projectLink: https://franzlor.itch.io/byte-hopper
technologies:
  - { name: "UnrealEngine", badge: "https://img.shields.io/badge/Unreal%20Engine%205%20-%20black?style=for-the-badge" }
  - { name: "C++", badge: "https://img.shields.io/badge/C%2B%2B%20-%20blue?style=flat-square" }
  - { name: "Blueprint", badge: "https://img.shields.io/badge/Blueprint%20-%20grey?style=flat-square" }
learnings:
  - title: Unreal Engine 5
    content: |
      <p>
        Jumping into Unreal Engine 5 was like stepping into a whole new world—equal parts exciting and intimidating.
        At first, I felt completely lost.
        The sheer number of tools, settings, and systems felt overwhelming,
        like standing at the base of a very steep learning curve—or cliff.<br><br>

        But as I spent more time with it, I started to see the magic behind Unreal Engine.
        I learned to create dynamic materials, set up lighting to craft a Tron-like environment,
        and fine-tune the physics engine to make tank controls feel smooth and responsive.
        Debugging became a crucial skill—I can’t count how many times I fixed
        (or broke) something before it finally worked.<br><br>

        <img src="/imgs/projects/tank/tank-game.png" alt="Turret Tank Blitz Tank in Cybercity">

        One of my favorite discoveries was Unreal’s Blueprint system.
        Initially, I was all-in with C++, but Blueprints allowed me to prototype features,
        like the main menu UI, much faster.
        It was a game-changer for testing and iterating on ideas quickly.
        While I started as a skeptic,
        I now see Blueprints as an invaluable tool I’ll continue to use in future projects.<br><br>

        The <strong>beauty of Unreal Engine is that it’s a complete package</strong>,
        with everything you need to create a game from start to finish.<br><br>
      </p>
  - title: Enemy AI
    content: |
      <p>
        The AI in Turret Tank Blitz was both the most challenging and rewarding part of the project.
        My goal was to create turret enemies that were not only challenging but also fun.<br><br>

        The problem was, you can't just make the AI too smart or too dumb.
        if the AI is too smart, the game feels unfair.
        Too dumb, and the game gets boring.
        So I had to find that sweet spot in between.
        My solution was to stick to the basics. <br><br>

        I started simple—turrets used Unreal’s Perception System to detect the player’s tank.
        I added a sphere collision component around each turret as a detection radius.
        When the player entered that zone, the turret would track and fire.<br><br>

        While this worked, it felt predictable.
        To make the AI more engaging, I relied on level design to add complexity.
        Turrets were placed strategically, forcing players to use cover, maneuver carefully,
        and plan their approach.
        This mix of straightforward AI and thoughtful level placement kept the gameplay fun and dynamic.

        <img src="/imgs/projects/tank/tank-ai.gif" alt="Idle Monster Clicker"> <br><br>

        Working on the AI taught me that even simple systems can feel advanced when paired with good design.
        An important lesson from this that I would like to share to other developers:
        <strong>complexity isn’t always the answer</strong>—sometimes,
        it’s all about using the right tools in the right way.<br><br>
      </p>
---

Turret Tank Blitz was my first foray into an actual 3D game project.<br>

This project had me diving deep into Unreal Engine 5, learning everything from rendering to physics to AI.
Inspired by classic tank battle games, Turret Tank Blitz is a third-person shooter where players control a tank
and must strategically maneuver through a Tron-like city while taking down enemy turrets and avoiding incoming.
The game focuses on fast-paced action while giving players the chance to shoot against AI opponents.<br>

<img src="/imgs/projects/tank/tank-gif.gif" alt="Turret Tank Blitz Tank Shooting at Enemy Turrets"><br>

Initially the goal of the game was to have turrets spawn infinitely and forcing the player to survive as long as possible,
racking up a high score.<br>

I decided it would be better to have a set number of turrets spawn and have the player destroy them all to win the game.
For now, there's only one main level. However, I plan to have multiple levels in the near future.<br>