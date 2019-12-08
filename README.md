# skipping-test
A JavaScript simulation of skipping through a digital music player.

The digital music player has two buttons, "Next" and "Random." The goal is to get to your favorite song with the fewest expected button presses.

The simulation will press "Next" if the track is fewer steps away from your favorite song than a cutoff value. It will press "Random" if the number of tracks away is greater than or equal to the cutoff value. This simulation was repeated 1,000,000 times and the expected values is calculated.

The simulation runs for cutoff values from 1 to 99. A graph of the results is below.

![A graph of button presses vs. cutoff of when to press "Random"](https://github.com/OmegaLimit/skipping-test/blob/master/Expected%20Button%20Pushes%20vs.%20Cutoff%20(1).png)

The files for the simulations and raw data are included in the source files. The CSV version contains the raw data.

The graph looks like a rational function. If I had a real probability class in college, I may be able to calculate the expected values in less time than it took to code the simulation.
