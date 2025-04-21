---
title: FPSFrenzy
layout: project.njk
subtitle: First-Person Shooter with Online Capabilities
featuredImage: /imgs/projects/fpsfrenzy/fpsfrenzy-menu.png
imageWidth: 400
projectLink: https://franzlor.itch.io/byte-hopper
technologies:
  - { name: "Unity", badge: "https://img.shields.io/badge/Unity%20Game%20Engine%20-%20blue?style=for-the-badge" }
  - { name: "C#", badge: "https://img.shields.io/badge/C%23%20-%20purple?style=flat-square" }
  - { name: "Photon", badge: "https://img.shields.io/badge/Photon%20-%20grey?style=flat-square&link=https%3A%2F%2Fwww.photonengine.com%2Fpun" }
learnings:
  - title: Online Networking
    content: |
      <p>
        FPSFrenzy was my first real dive into online multiplayer,
        and let me tell you it was equally rewarding and frustrating.<br><br>

        For this project, I worked with Photon, a networking tool that’s pretty
        beginner-friendly but still packed with complexities when it comes to real-time multiplayer.
        From synchronizing player movements to managing game states,
        Photon helped me handle a lot of the heavy lifting,
        but it still required plenty of fine-tuning to get things just right.<br><br>

        One of the biggest challenges was syncing animations and player movement across the network.
        <strong>It’s not just about sending data; it’s about sending the right data at the right time</strong>.<br><br>

        For example, player positions needed frequent updates to look smooth for other players,
        but not so frequent that it bogged down the network.
        I spent hours tweaking this balance and designing a protocol to prioritize critical actions
        like shooting, jumping, or switching weapons, while cutting back on non-essential updates.<br><br>

        <img src="/imgs/projects/fpsfrenzy/fps-gif.gif" alt="FPSFrenzy User Shooting at Another Player">

        Another tricky part was making sure all players saw the same UI elements
        in real time—like scores, timers, and lobby data.
        Even something as simple as displaying a player’s name or a server title involved precise timing.
        The solution?
        I carefully structured when and how this data was sent:
        typically when a match started, a player joined, or a significant event occurred.
        It sounds simple, but ensuring all players saw the same
        thing without delays was a constant test of patience and attention to detail.<br><br>

        <img src="/imgs/projects/fpsfrenzy/fps-server.gif" alt="FPSFrenzy User Creating a Server"><br><br>

        Implementing these systems taught me a lot about the complexities of real-time networking
        and the importance of optimizing data flow to maintain a seamless multiplayer experience.
        Photon’s tools were incredibly helpful for these tasks,
        but the process also emphasized the need for custom solutions
        tailored to specific game mechanics and player expectations.<br><br>

        Anyone who's trying to implement an online multiplayer
        feature with Unity should definitely check out Photon. It's a great tool to use.
      </p>
---

FPSFrenzy has been a cornerstone for my journey so far. <br>

One, this project was my first time developing a first-person shooter.
Second, this was also my first time implementing online networking into a game.
For such big feats, this was a pretty difficult project to tackle. But I'm proud of what I've accomplished.<br>

At first, the idea was to create a simple first-person shooter, with low poly textures, shooting at AI.
However, I wanted to go bigger since I've worked on AI already. So I decided to implement an online multiplayer feature.<br>

<img src="/imgs/projects/fpsfrenzy/fpsfrenzy-combat.png" alt="FPSFrenzy User Aiming at Another Player">

Players can join a lobby and play against each other. Initially, for 1v1-type scenarios.
Each player can choose between 3 weapons: a pistol, a submachine gun, and a sniper rifle.
A player wins by getting the most amount of kills before the timer runs out. <br>