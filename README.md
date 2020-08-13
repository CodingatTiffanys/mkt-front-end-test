# mkt-front-end-test

Some clever Ungulates messed up the CSS file for this page removing some of the desktop styles and all of the mobile styles.

Not all the code that is written needs to stay, modify or adjust anything you see fit.

[Mock of the layout](https://www.figma.com/file/QAkLykHKLkZgyTJLzsHDsH/FED-Example?node-id=0%3A1)
https://www.figma.com/file/QAkLykHKLkZgyTJLzsHDsH/FED-Example?node-id=0%3A1

* For the sake of this project the mobile layout ends at 1023px wide.
* Don't worry about matching the font.
* Use Chrome because I'm not transpiling this js :)
* If you get stuck move on to another part. Try to get as much done as you can.
* If you can't get something quite right explain in a comment what you think is going on/needs to happen.
* Don't spend more than ~3 or 4hrs.

1. The **header-wrapper** isn't looking quite right, and also notice that the **subhead** moves below of the image on mobile.

2. The **image-by-text-wrapper** is looking a little bit crammed and the image goes away on mobile.

3. On the **phone-feature-wrapper** the text moves below on mobile. The screenshot should fill the phone frame (cover not stretched). If the phone looks way too tall that's because it is :)

4. On the **blog-feed** part of the h3 needs to be highlighted in a different color. The desktop layout doesn't have any spacing or margins. And the mobile layout needs them to be stacked up.

5. The **blog-posts** need the button and text to be styled. (The whole thing is clickable the button is just for show).

6. The actual **blog-posts** come from the **main.js** file and this code is yucky and not very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). Using **blogData** build a new **blogEntryButDRY** that works for *1 to N* (arrays of any size in non-math jargon) blog posts.


Upload your finished product to a personal github and then send the link.# mkt-front-end-test
