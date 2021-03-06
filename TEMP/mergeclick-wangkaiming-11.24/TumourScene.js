/**
 * Created by DELL on 2016/11/23.
 */
var TumourLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //图鉴背景图层
        var pokedexbg = new cc.Sprite(res.pokedexbg);
        pokedexbg.x=size.width*0.5;
        pokedexbg.y=size.height*0.5;
        //pokedexbg.setAnchorPoint(0,0);
        this.addChild(pokedexbg);

        //返回按钮
        var press= new cc.MenuItemImage(res.pressed, res.pressed2, function () {
            //详情介绍接口
            cc.log("显示详情");
        }, this);
        //菜单
        press.x = pokedexbg.width*0.05;
        press.y = pokedexbg.height*0.9;

        var menu0 = new cc.Menu(press);
        menu0.x = 0;
        menu0.y = 0;
        pokedexbg.addChild(menu0);

        //图鉴标题
        var title = new cc.LabelTTF("查看肿瘤");
        title.setFontSize(size.width*0.045);
        title.enableStroke(cc.color.BLUE, 5);
        title.x = size.width * 0.5;
        title.y = size.height*0.95;
        this.addChild(title);


        //细胞展示框
        var celldisplay = new cc.Sprite(res.celldisplay);
        celldisplay.setAnchorPoint(0,0);
        celldisplay.x=pokedexbg.width*0.03;
        celldisplay.y=pokedexbg.height*0.03;
        pokedexbg.addChild(celldisplay);


        //细胞详情显示框
        var celldisplay2 = new cc.Sprite(res.celldisplay2);
        celldisplay2.setAnchorPoint(0,0);
        celldisplay2.x=pokedexbg.width*0.6;
        celldisplay2.y=pokedexbg.height*0.03;
        pokedexbg.addChild(celldisplay2);

        //点击左边，在右边显示的细胞图片
        var cellone = new cc.Sprite(res.poketumour);
        //缩小
        cellone.setScale(0.8);
        cellone.setAnchorPoint(0,0);
        cellone.x=celldisplay2.width*0.27;
        cellone.y=celldisplay2.height*0.67;
        celldisplay2.addChild(cellone);

        //细胞文字描述背景图层
        var blackboard = new cc.Sprite(res.blackboard);
        blackboard.setAnchorPoint(0,0);
        blackboard.x=celldisplay2.width*0.032;
        blackboard.y=celldisplay2.height*0.023;
        celldisplay2.addChild(blackboard);


        //点击左边，右边显示细胞文字描述
        var title1 = new cc.LabelTTF("变异细菌");
        title1.setFontSize(size.width*0.038);
        title1.setFontFillColor(cc.color.BLACK);
        title1.x = blackboard  .width * 0.5;
        title1.y = blackboard .height*0.8;
        blackboard .addChild(title1);

        var title2 = new cc.LabelTTF("防御力：30");
        title2.setFontSize(size.width*0.03);
        title2.setFontFillColor(cc.color.BLACK);
        title2.x = blackboard .width * 0.4;
        title2.y =blackboard.height*0.65;
        blackboard.addChild(title2);

        var title3 = new cc.LabelTTF("血量变化：2");
        title3.setFontSize(size.width*0.03);
        title3.setFontFillColor(cc.color.BLACK);
        title3.x = blackboard .width * 0.4;
        title3.y =blackboard.height*0.5;
        blackboard.addChild(title3);

        var title4 = new cc.LabelTTF("移动速度：1");
        title4.setFontSize(size.width*0.03);
        title4.setFontFillColor(cc.color.BLACK);
        title4.x = blackboard .width * 0.4;
        title4.y =blackboard.height*0.35;
        blackboard.addChild(title4);

        var title4 = new cc.LabelTTF("知识科普：");
        title4.setFontSize(size.width*0.03);
        title4.setFontFillColor(cc.color.BLACK);
        title4.x = blackboard .width * 0.38;
        title4.y =blackboard.height*0.2;
        blackboard.addChild(title4);


        //细胞格子
        var cellgridItem1 = new cc.Sprite(res.cellgrid);
        cellgridItem1.x = celldisplay.width*0.2;
        cellgridItem1.y = celldisplay.height * 0.8;
        celldisplay.addChild(cellgridItem1);

        var cellgridItem2 = new cc.Sprite(res.cellgrid);
        cellgridItem2.x = celldisplay.width*0.5;
        cellgridItem2.y = celldisplay.height * 0.8;
        celldisplay.addChild(cellgridItem2);

        var cellgridItem3 = new cc.Sprite(res.cellgrid);
        cellgridItem3.x = celldisplay.width*0.8;
        cellgridItem3.y = celldisplay.height * 0.8;
        celldisplay.addChild(cellgridItem3);

        var cellgridItem4 = new cc.Sprite(res.cellgrid);
        cellgridItem4.x = celldisplay.width*0.2;
        cellgridItem4.y = celldisplay.height * 0.5;
        celldisplay.addChild(cellgridItem4);

        var cellgridItem5 = new cc.Sprite(res.cellgrid);
        cellgridItem5.x = celldisplay.width*0.5;
        cellgridItem5.y = celldisplay.height * 0.5;
        celldisplay.addChild(cellgridItem5);

        var cellgridItem6 = new cc.Sprite(res.cellgrid);
        cellgridItem6.x = celldisplay.width*0.8;
        cellgridItem6.y = celldisplay.height * 0.5;
        celldisplay.addChild(cellgridItem6);

        var cellgridItem7 = new cc.Sprite(res.cellgrid);
        cellgridItem7.x = celldisplay.width*0.2;
        cellgridItem7.y = celldisplay.height * 0.2;
        celldisplay.addChild(cellgridItem7);

        var cellgridItem = new cc.Sprite(res.cellgrid);
        cellgridItem.x = celldisplay.width*0.5;
        cellgridItem.y = celldisplay.height * 0.2;
        celldisplay.addChild(cellgridItem);

        var cellgridItem = new cc.Sprite(res.cellgrid);
        cellgridItem.x = celldisplay.width*0.8;
        cellgridItem.y = celldisplay.height * 0.2;
        celldisplay.addChild(cellgridItem);

        //细胞种类
        var cell1= new cc.MenuItemImage(res.tumour1, res.tumour12, function () {
            //详情介绍接口
            cc.log("显示详情");
        }, this);
        //菜单
        cell1.x = cellgridItem1.width*0.5;
        cell1.y = cellgridItem1.height*0.5;

        var menu = new cc.Menu(cell1);
        menu.x = 0;
        menu.y = 0;
        cellgridItem1.addChild(menu);

        var cell2= new cc.MenuItemImage(res.tumour2, res.tumour22, function () {
            //详情介绍接口
            cc.log("显示详情");
        }, this);
        //菜单
        cell2.x = cellgridItem2.width*0.5;
        cell2.y = cellgridItem2.height*0.5;

        var menu2 = new cc.Menu(cell2);
        menu2.x = 0;
        menu2.y = 0;
        cellgridItem2.addChild(menu2);

        var cell3= new cc.MenuItemImage(res.tumour3, res.tumour32, function () {
            //详情介绍接口
            cc.log("显示详情");
        }, this);
        //菜单
        cell3.x = cellgridItem3.width*0.5;
        cell3.y = cellgridItem3.height*0.5;

        var menu3 = new cc.Menu(cell3);
        menu3.x = 0;
        menu3.y = 0;
        cellgridItem3.addChild(menu3);

        var cell4= new cc.MenuItemImage(res.tumour4, res.tumour42, function () {
            //详情介绍接口
            cc.log("显示详情");
        }, this);
        //菜单
        cell4.x = cellgridItem4.width*0.5;
        cell4.y = cellgridItem4.height*0.5;

        var menu4 = new cc.Menu(cell4);
        menu4.x = 0;
        menu4.y = 0;
        cellgridItem4.addChild(menu4);

        var cell5= new cc.MenuItemImage(res.tumour5, res.tumour52, function () {
            //详情介绍接口
            cc.log("显示详情");
        }, this);
        //菜单
        cell5.x = cellgridItem5.width*0.5;
        cell5.y = cellgridItem5.height*0.5;

        var menu5 = new cc.Menu(cell5);
        menu5.x = 0;
        menu5.y = 0;
        cellgridItem5.addChild(menu5);

        var cell6= new cc.MenuItemImage(res.tumour6, res.tumour62, function () {
            //详情介绍接口
            cc.log("显示详情");
        }, this);
        //菜单
        cell6.x = cellgridItem6.width*0.5;
        cell6.y = cellgridItem6.height*0.5;

        var menu6 = new cc.Menu(cell6);
        menu6.x = 0;
        menu6.y = 0;
        cellgridItem6.addChild(menu6);

        var cell7= new cc.MenuItemImage(res.tumour7, res.tumour72, function () {
            //详情介绍接口
            cc.log("显示详情");
        }, this);
        //菜单
        cell7.x = cellgridItem7.width*0.5;
        cell7.y = cellgridItem7.height*0.5;

        var menu7 = new cc.Menu(cell7);
        menu7.x = 0;
        menu7.y = 0;
        cellgridItem7.addChild(menu7);



        return true;
    }
});

var TumourScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new TumourLayer();
        this.addChild(layer);
    }
});
