# web APP  尺寸

- [手机尺寸](http://www.jianshu.com/p/c3387bcc4f6e)
- [屏幕单位](http://www.jianshu.com/p/df09884e188f)

- [web app 基础](http://hcysun.me/2015/10/16/%E4%B8%80%E7%AF%87%E7%9C%9F%E6%AD%A3%E6%95%99%E4%BC%9A%E4%BD%A0%E5%BC%80%E5%8F%91%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%96%87%E7%AB%A0%28%E4%B8%80%29/)

- [web app 实例](http://hcysun.me/2015/10/19/%E4%B8%80%E7%AF%87%E7%9C%9F%E6%AD%A3%E6%95%99%E4%BC%9A%E4%BD%A0%E5%BC%80%E5%8F%91%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%96%87%E7%AB%A0-%E4%BA%8C/)


## 像素 px

![](http://i.imgur.com/QfsOhSF.jpg)

> **像素是没有实际的物理尺寸的**

> 一个像素就是计算机屏幕所能显示一种特定颜色的最小区域;
> 一个CSS像素的大小是可变的，比如用后缩放页面的时候，实际上就是在缩小或放大CSS像素，而设备像素无论大小还是数量都是不变的。

- **css像素**： 这是一个抽象的像素概念，它是为web开发者创造的
- **设备像素**：设备屏幕的物理像素，对于任何设备来讲物理像素的数量是固定的。

- **像素密度PPI**： 一个对角线长度为1英寸的正方形内所拥有的像素数

> 当你给元素设置了 width: 200px 时，这个元素的宽度跨越了200个CSS像素。但是它并不一定跨越200个设备像素，至于会跨越多少个设备像素，就取决于手机屏幕的特性和用户的缩放了。
>屏幕的清晰程度其实是分辨率和尺寸大小共同决定，用ppi指数衡量屏幕清晰程度更加准确


## 手机尺寸单位 概念

- 屏幕尺寸：屏幕的对角线的长度，单位是英寸，1英寸=2.54厘米
- 屏幕分辨率： 屏幕分辨率是指在横纵向上的像素点数，单位是px，1px=1个像素点。一般以纵向像素*横向像素，如1960*1080。
- 屏幕像素密度：指每英寸上的像素点数，单位是dpi/ppi
>PPI用于显示器，一个像素一个格子，“每英寸像素”，表示一行一英寸长有几个格子。
>DPI用于打印机，“每英寸墨点”。1ppi = ndpi

- dip和dp是一个意思，都是Density Independent Pixels的缩写，即密度无关像素。
>在Android中，规定以160dpi为基准，1dip=1px，如果密度是320dpi，则1dip=2px，以此类推。
>IOS 单位为pt

![](http://i.imgur.com/VDCgHwF.jpg)


## 单位互相转换

**计算dpi**
例如有一台手机，屏幕4寸，分辨率480X800，它的dpi如何算呢？
因为不知道边长，肯定不能分开算，4是对角线长度，那直接用勾股定理算对角线像素，除以4，算出来大概是 dpi = 233 像素/英寸。
那么density就是 （233 px/inch）/（160 px/inch）=1.46 左右
顺便说下，android默认的只有3个dpi，low、medium和high，对应 120、160、240，如果没有特别设置，所有的dpi都会被算成这3个，其中default的为160.
**计算 dp 与 px**
　　我们写布局的时候，肯定还是要知道1个dp到底有多少px的。
　　换算公式如下： dp = （DPI/（160像素/英寸））px = density px
　　注意，这里都是带单位的。px是单位，dp是单位，density没单位。
　　为了方便，假设dpi是240 像素/英寸 ， 那么density就是1.5
　　那么就是 dp=1.5px ，注意这是带了单位的，也就是 设备无关像素 = density 像素
　　那么转换为数值计算的话，应该是下面这个式子
　　PX = density * DP
也就是：像素值 = density * 设备无关像素值 ，请注意这里有个值字

**为啥 标准dpi = 160**
　　（1）Android Design [1] 里把主流设备的 dpi 归成了四个档次，120 dpi、160 dpi、240 dpi、320 dpi
　　实际开发当中，我们经常需要对这几个尺寸进行相互转换（比如先在某个分辨率下完成设计，然后缩放到其他尺寸微调后输出），一般按照 dpi 之间的比例即 2:1.5:1:0.75 　　来给界面中的元素来进行尺寸定义。
　　也就是说如果以 160 dpi 作为基准的话，只要尺寸的 DP 是 4 的公倍数，XHDPI 下乘以 2，HDPI 下乘以 1.5，LDPI 下乘以 0.75 即可满足所有尺寸下都是整数 pixel 。
　　但假设以 240 dpi 作为标准，那需要 DP 是 3 的公倍数，XHDPI 下乘以 1.333，MDPI 下乘以 0.666 ，LDPI 下除以 2
　　而以 LDPI 和 XHDPI 为基准就更复杂了，所以选择 160 dpi
（2）这个在Google的官方文档中有给出了解释，因为第一款Android设备（HTC的T-Mobile G1）是属于160dpi的。

## 移动端三个视口

>初始包含块和视口了。
>视口是html的父元素，所以我们称视口为初始包含块。 这样你就明白了，html元素的百分比是基于视口的。

### 布局视口

> 移动端CSS布局的依据视口，即CSS布局会根据布局视口来计算。
> 布局视口的宽度一般在 680~1024像素之间

- **PC**：  视口的宽度 = 浏览器窗口的宽度
- **PHONE** : 视口和浏览器窗口将不在关联，实际上，布局视口要比浏览器窗口大的多

```js
/*布局视口大小*/
document.documentElement.clientWidth
document.documentElement.clientHeight
```

### 视觉视口
> 用户正在看到网站的区域

### 理想视口

> 理想的布局视口,设备像素

```
<meta name="viewport" content="width=device-width" />

```

## meta

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

```

### 设备像素比 bpr

公式成立的大前提：（缩放比例为1）
**设备像素比(DPR) = 设备像素个数 / 理想视口CSS像素个数(device-width)**

### 缩放 scale

> 缩小放大的是 CSS像素。

```
var scale = 1 / window.devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

```

window.devicePixelRatio 的值为设备像素比。


### content 

1、width：设置布局视口的宽
2、init-scale：设置页面的初始缩放程度
3、minimum-scale：设置了页面最小缩放程度
4、maximum-scale：设置了页面最大缩放程度
5、user-scalable：是否允许用户对页面进行缩放操作


## media query 

>1、检测媒体的类型，比如 screen，tv等
>2、检测布局视口的特性，比如视口的宽高分辨率等
>3、特性相关查询，比如检测浏览器是否支持某某特性（这一点不讨论，因为它被目前浏览器支持的功能对于web开发来讲很无用）

```
@media all and (min-width: 321px) and (max-width: 400px){
	.box{
		background: red;
	}
}
```

## 文字设置


**文字字体大小是不要换算成rem做单位的，而是使用媒体查询来进行动态设置**

```
@media screen and (max-width: 321px) {
    body {
        font-size:16px
    }
}

@media screen and (min-width: 321px) and (max-width:400px) {
    body {
        font-size:17px
    }
}

@media screen and (min-width: 400px) {
    body {
        font-size:19px
    }
}
```

在媒体查询阶段，分为三个等级分别是：
- 321px以下
- 321px - 400px之间
- 400px以上

具体文字大小要多少个像素这个以设计图为准，但是这三个等级之间是有规律的，仔细观察发现，321px以下的屏幕字体大小比321px - 400px之间的屏幕字体大小要小一个像素，而321px - 400px之间的屏幕字体大小要比400以上屏幕字体大小要小2个像素。依照这个规律，我们根据设计图所在的像素区段先写好该区段的字体大小，然后分别写出另外两个区段的字体大小媒体查询代码就可以了。