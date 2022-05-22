# Weatherwear
# Overview

*Link to prototype :* [https://www.figma.com/proto/qpBAGGziQ3QVWltvsZbieB/%EC%9D%B8%EC%BB%B4%EC%83%81-medium-fi?node-id=43%3A1326&scaling=scale-down&page-id=0%3A1&starting-point-node-id=43%3A1326](https://www.figma.com/proto/qpBAGGziQ3QVWltvsZbieB/%EC%9D%B8%EC%BB%B4%EC%83%81-medium-fi?node-id=43%3A1326&scaling=scale-down&page-id=0%3A1&starting-point-node-id=43%3A1326)

The prototype we created for Weatherwear was built and runs on Figma.

## Tools we’ve used

### Figma (Final Selection)

Figma is suitable tool for building taskflows and has a variety of icon samples. But it has limited animation effect for prototypes, and requires a lot of manual work.

# Instruction for Prototype

## How to use

### Context

**Task 1 : Get information about clothes that they can wear on weather of the day**

1)  User get current weather and temperature, highest/lowest daily temperature, wind speed, and precipitation probability information from the [General] element at the top of main screen.

2) User receives outer, top, bottoms recommendations corresponding to the current weather from the [How about these] element.

3) By selecting [sensitive to] element, user receives different clothing recommendations for the same weather depending on her constitution.

**Task 2 : Get information on clothes that can be worn in the weather at the desired time**

1) User get weather, temperature, and precipitation probability information for several time range by selecting [By time] element at the top of main screen.

2) From the [How about these] element, outer, top, and bottoms are recommended for each time zone’s weather.

**Task 3 : View other user’s reactions to the clothes and access the shopping mall site where they can buy the clothes**

1)  User can check the list of clothes recommended for the current weather and check the reaction of other users.

2) User can express her preference for recommended clothes by clicking the icons representing cold, thumbs up, and hot.

3) By clicking the recommended clothing element, user can get button to move to the external shopping mall site.

4) User enjoys shopping the clothes of desired category on the external shopping mall site.

**Other Non-task related functionality :**

1) Background images of elements change according to time zones (day, evening, night). The user can intuitively recognize the current time zone by background images.

### Wizard-of-oz & hard-coded features

We didn’t used wizard-of-oz technique. However, we used hard-coded features such as mock users, weather information, location, date/time information, and review data.

### Limitations & Tradeoffs

Due to Figma limitations, Some user gestures are simplified, features related to back-end support are not shown.

And we left out less commonly used screens prototype and similar tasks, as we considered simplifying taskflow is more important. We only displayed representative tasks.
