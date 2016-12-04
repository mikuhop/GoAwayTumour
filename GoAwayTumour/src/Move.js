/**
 * Created by 张东杰 on 2016/11/29.
 */
var Move = cc.Sprite.extend({
    tiledMap:null,
    arr :[],
    sort:[],
    temparray:[],
    begin:0,
    end:0,
    nowPosition:0,
    ctor:function (fileName, rect, rotated) {
        this._super(fileName, rect, rotated);
        var size = cc.winSize;
        this.schedule(this.moveToNextRoad,0.5);
        //this.schedule(this.moveToNextRoad1,0.25);

        return true;
    },
    //移动到路径的下一个点
    moveToNextRoad:function () {
        var nextPosition = this.getNextPosition();
        this.runAction(cc.moveTo(0.5,cc.p(nextPosition.x,nextPosition.y)));
    },
    moveToNextRoad1:function () {
        var nextPosition = this.getNextPosition1();
        this.runAction(cc.moveTo(0.25,cc.p(nextPosition.x,nextPosition.y)));
    },
    //获取下一个点的坐标
    getNextPosition:function () {
        this.nowPosition++;
        if(this.nowPosition==this.arr.length-1){
            this.unschedule(this.moveToNextRoad);
        }
        return this.arr[this.nowPosition];

    },
    getNextPosition1:function () {
        this.nowPosition++;
        if(this.nowPosition==this.arr.length-1){
            this.unschedule(this.moveToNextRoad1);
        }
        return this.arr[this.nowPosition];

    },
    //遍历瓦片地图，获取类型为"road"的像素坐标，放入数组中
    getArray:function(tileMap,arr){
        var bgLayer = tileMap.getLayer("bg");
        var tileGID =null;
        var properties =null;
        var mapSize = tileMap.getMapSize();
        for(var i = 0; i<mapSize.width;i++){
            for(var j=0; j<mapSize.height;j++){
                tileGID=bgLayer.getTileGIDAt(cc.p(i,j));
                properties=tileMap.getPropertiesForGID(tileGID);
                if(properties.type=="road"){
                    var pixPosition = bgLayer.getPositionAt(cc.p(i,j));
                    this.arr.push(pixPosition);
                }
            }
        }
    },
    // 将需要调换位置的点进行坐标转换
    getLength:function (arr){//参数为该数组
        for(var i=0;i<arr.length-1;i++){
            if(arr[i]['x']!=arr[i+1]['x']){
                if(arr[i]['y']!=arr[i+1]['y']){
                    this.sort.push(i);
                }
            }
        }
    },
    // 计算须要有多少数组进行重新排序
    times:function (sort){
        var length=sort.length/2;
        for(var i=0;i<length;i++){
            this.begin=sort[i*2]+1;
            this.end=sort[i*2+1];
            if(this.temparray.length>2){
                this.temparray=[];
            }
            this.getNew(this.begin,this.end);
        }
    },
    //获取到更新后的数组
    getNew:function (begin,end){//参数为 数组  起始  终点位置
        for(var i=end;i>=begin;i--){
            this.temparray.push(this.arr[i]);
        }
        for(var i=begin,j=0;i<=end;i++,j++){
            this.arr[i]=this.temparray[j];
        }
    },
    // 打印二位数组
    showArray:function (arr){
        for(var i in arr){
            cc.log(arr[i]['x']+"," +arr[i]['y'] );
        }
    }
});
