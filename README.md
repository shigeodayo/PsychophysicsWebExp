# PsychophysicsWebExp

You can try Psychophysics experiments on the web.

https://shigeodayo.github.io/PsychophysicsWebExp/

The objective of the experiments is to estimate the PSE (and JND) of perceived lightness from two different colors.

The saturation of those two colors are the same, but the hue and lightness are different.

Your task is to find the subjective equally lightness of both colors.

## Task
### Method of Limit/Adjustment
Adjust the lightness of the sample until you feel the lightness of the reference and the sample are the same.

In total, you will repeat this task 4 times with different initial lightness.

### Method of Constant
Select which do you feel lighter reference or sample.

There are 12 different lightness of the sample.

Each sample has 4 repetitions.

## CSV values
### Method of Limit
method name, participant id, elapsed time

{initial lightness of sample} x num of repetition

{participant answer} x num of repetition

### Method of Adjustment
method name, participant id, elapsed time

{ascending series (up) or descending series (down)} x num of repetition

{participant answer} x num of repetition

### Method of Constant
method name, participant id, elapsed time

{lighenss of sample} x num of samples x num of repetition

{participant answer} x num of samples x num of repetition
