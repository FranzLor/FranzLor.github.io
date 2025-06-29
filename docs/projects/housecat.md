---
title: Housecat Game Engine
layout: project.njk
subtitle: ECS Game Engine for 2D Games with Scripting Capabilities
featuredImage: /imgs/projects/housecat/housecat-menu.png
imageWidth: 400
projectLink: https://github.com/FranzLor/HousecatEngine
technologies:
  - { name: "C++", badge: "https://img.shields.io/badge/C%2B%2B%20-%20blue?style=flat-square" }
  - { name: "SDL2", badge: "https://img.shields.io/badge/SDL2%20-%20lightblue?style=flat-square" }
  - { name: "Lua", badge: "https://img.shields.io/badge/Lua%20-%20purple?style=flat-square&logoColor=white" }
  - { name: "DearImGui", badge: "https://img.shields.io/badge/Dear%20ImGui%20-%20gray?style=flat-square&logoColor=white" }
  - { name: "Sol2", badge: "https://img.shields.io/badge/Sol2%20-%20orange?style=flat-square" }
learnings:
  - title: Game Engine Architecture with ECS
    content: |
      <p>
        Working on the Housecat Game Engine was by far my most challenging project,
        but it was also one of the most rewarding experiences.
        Through this project, I gained a deep understanding of the Entity-Component-System (ECS) architecture,
        which is fundamental in modern game development.<br><br>

        My main takeaway from the ECS paradigm revolves around three core concepts:<br>

        1. <strong>Entities:</strong> Unique identifiers that act as containers for components.<br>
        2. <strong>Components:</strong> Data containers without behavior that represent various attributes of entities, think of position, velocity, or health.<br>
        3. <strong>Systems:</strong> Functions that process entities with specific components, handling game logic like physics calculations, rendering, or input management.<br>
      
        <img src="/imgs/projects/housecat/housecat-game.png" alt="Housecat Game Engine"> <br>
        
        This architecture emphasizes <strong>composition over inheritance</strong>, allowing for a more flexible and decoupled design.
        It enables developers to add or remove components from entities dynamically, allowing for easy modification and scalability.
        This modularity also enhances code reusability and simplifies debugging. <br><br>

        By implementing ECS from scratch, I learned how to effectively manage game entities, develop reusable components, and create robust systems to handle various aspects of the game engine.
        I also gained experience in separating data from behavior, which is crucial for performance optimization and maintainability in game development.
      </p>
  - title: External Libraries
    content: |
      <p>
         Thank god for external libraries. <br><br>

        For a lightweight engine, Housecat took nearly 4 months to develop. Without these libraries, I bet it would've taken an extra 4 more months.<br><br>

        The SDL library was a lifesaver for me. It provided a simple and efficient way to handle window creation, input handling, and most importantly: rendering.
        It was indispensable for handling low-level hardware tasks and managing the core components of the game engine.
        Another library that I used was Dear ImGui, which helped me create most of the Housecat Editor's UI and functionalities. <br><br>

        Integrating Sol2 to bind Lua with C++ was a bit of a challenge initially, but it turned out to be an incredible learning experience.
        Lua is a powerful scripting language widely used in game development for its speed, lightweight nature, and flexibility.
        Sol2 made it possible to easily expose C++ functions and classes to Lua scripts,
        enabling me to create a more dynamic and flexible game engine where behaviors could be defined and modified at runtime.<br><br>
      
        So why am I mentioning these libraries? Because <strong> reusability </strong>.<br><br>
      
        The famous saying goes, "Don't reinvent the wheel."
        Leveraging these libraries goes beyond just making development easier—they are essential for building robust and efficient software.
        By using SDL2, ImGui, and Sol2 with Lua, I was able to focus on creating the unique features of the Housecat Game Engine without getting bogged down in lower-level details.
        These libraries provided a strong foundation upon which I could build, allowing for greater productivity, better code quality, and a more enjoyable development experience.<br>
      
        <img src="/imgs/projects/housecat/housecat-scripting.png" alt="Housecat Game Engine"><br>

        Don't be afraid to use external libraries in your projects.<br>
        They can save you a lot of time and effort, and help you create better code faster.<br>
      </p>
  - title: Performance
    content: |
      <p>
        Performance was a critical focus throughout the development of the Housecat Game Engine.<br>
        I learned how to:<br><br>

        <strong>- Optimize memory usage:</strong> Efficiently manage memory through dynamic allocation and deallocation of entities and components, reducing overhead and preventing memory leaks.<br>
        <strong>- Improve rendering performance:</strong>  Implement culling techniques to render only visible entities, reducing the number of draw calls and improving frame rates.<br>
        <strong>- Profile and debug:</strong>  Use profiling tools to identify bottlenecks in the engine and optimize code paths, ensuring smooth and responsive gameplay.<br><br>

        This project really taught me the importance of balancing performance with functionality, especially in game development, where every frame counts.
        Now, when I write code, I instinctively look for potential inefficiencies and
        opportunities for low-level optimizations that can significantly affect the overall performance of an application. <br><br>

        This experience has fundamentally changed my approach to programming, making me more conscious of the trade-offs between speed, memory usage, and code maintainability.<br><br>
      </p>
---

This was by far my hardest project.<br>

Since I had to go big for a capstone project on the last year of my Software Engineering program,
I really wanted to prove—not just others but myself—that I had what it takes.
So, I decided to create a game engine from scratch.<br>

Housecat is a lightweight and modular game engine designed to provide developers with a flexible and efficient framework for building 2D games.<br>

At its core, it utilizes the Entity-Component-System (ECS) architecture, offering easier game object management and allowing for easy scalability and extensibility. <br>

Housecat comes with an already-developed game project, called "Cat Game" (very creative name).
This game project showcases the engine's capabilities and potential, and serves as a starting point for developers to build their own games.
It also offers a simple 2D level Editor, to help both developers and designers build their levels with ease.

<img src="/imgs/projects/housecat/housecat-editor.gif" alt="Housecat Game Engine">

Lastly, Housecat Game Engine supports scripting through Lua, allowing developers to create and modify game logic without recompiling the engine. This feature provides a more dynamic and flexible approach to game development.
<h3>Features</h3>
<h4>-Housecat Manager (Registry)</h4>
<h4>-Asset Manager</h4>
<h4>-Event Manager</h4>
<h4>-Logger System</h4>
<h4>-2D Rendering System</h4>
<h4>-Scripting</h4>
<h4>-Level Editor</h4>
<h4>-Game Project: Cat Game</h4>