# 我的笔记

这篇笔记是由纯**MarkDown**语法写成后导出的*HTML*，使用的是**MarkDown**编辑器***Typora***。

这篇笔记用来记录我制作网站的过程。网站的是***URL***：**ryunosuke.pro**.

整个网站是在我的学习过程中完成的，我写下这篇笔记供以后的自己和想要参考的朋友参考。另外给自己一些乐趣，想到什么写下什么。

>最关键的不是一天就要学多少，最关键的是一直坚持下去，从中找到乐趣

### Html 和 CSS

HTML和CSS的课程我看过很多了之后还是选择了**udacity**提供的*HTML和CSS入门*，在这里附上链接：

* https://cn.udacity.com/course/intro-to-javascript--ud803 官方提供中文字幕。

前端框架选择了**BootStrap**(其实是课程内要求使用的Bootstrap哈哈哈)，确实很好用。
附上中文官网地址,包含详细的文档

* 下载地址: http://v3.bootcss.com

另外,**BootStrap**还免费提供好用的***Glyphicons 字体图标*** ，我最喜欢的组建之一。

另外希望我的绘画也会一直坚持下去，我的目标是自己练一首吉他曲子来当做网站的背景音乐.目前在练的是*RADWIMPS*的《**なんでもないや**》。要加油

另外这篇Markdown语法也是我在边查语法的过程中边写的。

* MarkDown中文文档：http://www.appinn.com/markdown/#p 

####第二个网页

第二个网页也就是这个网页，我试了一下通过一个*button*按钮进行跳转，花了不少时间才把Button按钮的样式调好，不过效果还不错。其中用到的关键样式主要是

    position：fixed;		

这个样式 用来把组件以相对位置在viewport中显示，固定在屏幕的一个角落，搭配使用的还有right(left,top,bottom)："x"px;,等等，**注意，在right和left或top和bottom同时存在时，会引发冲突。在我使用***Glyphicons 字体图标*** 时，图标自带的css其中有top：1px。我不太清楚这个样式到底有什么用处，但是在与我使用

    right：100px;
    bottom: 100px;

**用来把button固定在屏幕右下角时产生了冲突。以至于没有生效，后来我发现我把class设在图标的span上了，简直蠢，只要把class设在button上就不会有冲突了。**


### JavaScript

JavaScript个人感觉是Web前端三大语言里面最难的一个。暂时还没有着落。


             ©2017 Ryunosuke. All rights reserved
 