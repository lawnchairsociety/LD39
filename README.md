# Dept of Water & Power Strategy Game

You're an employee of the Department of Water & Power. There was an accident at one of the main power plants in town and a brownout is threatening to kill power to the entire town. Can you avert the impending disaster??

1. Strategy/Puzzle Game
  - Rogue-type game with ASCII art for the graphics
2. Limited Resources
  - You can move resources from one area to another
  - You can purchase power from other cities (small budget).
    1. Nuclear - most power (expensive)
    2. Coal - less power (cheaper)
    3. Hydro - very little power (cheap)
    4. Solar - very little power (cheap)
    5. Wind - very little power (cheap)
  - You can increase your budget through bribes
    - Shady guy pays you to keep power on at the strip club which means you'll have to cut power to other areas.
    - You run the risk of getting caught and fined which means that you lose money instead of gaining it.
3. Time is your main enemy
4. What constitutes a win/loss of the game?
  - To win:
    1. Maintain power to public infrastructure until the power plant is back online.
      - HIGH: Hospitals
      - MEDIUM: Emergency Response (fire, law enforcement, utilities)
      - LOW: Schools
  - To lose:
    1. Major impact to more than 75% of the inhabitants of the city.

## TODO List
- Build table of Unicode hex codes to names (https://www.w3schools.com/CHARSETS/ref_utf_box.asp)
- Build out random city generator
- Power logic
- Write a few character scripts

## Installation
TODO: Describe the installation process

## Contributing
1. Fork it, please.
2. Create your branch: `git checkout -b new-feature-name`
3. Commit your changes: `git commit -am 'add some new feature'`
4. Push to the branch: `git push origin new-feature-name`
5. Submit a pull request

## History
TODO: Keep track of any changes to the game

## Credits
Ondrej Zara - ROguelike Toolkit (http://ondras.github.io/rot.js/hp/)

## License
rot.min.js (Author: Ondrej Zara) - BSD License
My code: None
