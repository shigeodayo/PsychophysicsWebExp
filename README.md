# PsychophysicsWebExp

You can try Psychophysics experiments on the web.

https://shigeodayo.github.io/PsychophysicsWebExp/

The objective of the experiments is to estimate the PSE (and JND) of perceived lightness from two different colors.

Hue and saturation of those two colors are the same, but only the lightness is different.

## Task
### Method of Limit/Adjustment
Adjust the lightness of the sample until you feel the lightness of the reference and the sample are the same.

In total, you will repeat this task 4 times with different initial lightness.

### Method of Constant
Select which do you feel more lighter reference or sample.

There are 5 different lightness of the sample.

Each sample has 4 repetitions.

## CSV values
### Method of Limit
method name, participant id, epalsed time
{initial lightness of sample} x num of repetition
{participant answer} x num of repetition

### Method of Adjustment
method name, participant id, epalsed time
{ascending series (up) or descending series (down)} x num of repetition
{participant answer} x num of repetition

### Method of Constant
method name, participant id, epalsed time
{lighenss of sample} x num of samples x num of repetition
{participant answer} x num of sampels x num of repetition
