/**
 * Created by Administrator on 2017/7/21.
 * 这是qi分支新增的代码
 */
var food = 0;

function proInit() {
    /*var div_map = document.createElement('div');*/

    /*initMap();*/

    initFood();

    /*initSnake();*/


}

/*function initMap() {
    var wid = 900+'px';
    var hei = 600+'px';
    var top_map = 20+'px';
    var left_map = 200+'px';
    var div_map = document.createElement('div');
    div_map.style.width = wid;
    div_map.style.height = hei;
    div_map.style.backgroundColor= 'grey';
    div_map.style.position = 'absolute';
    div_map.style.top = top_map;
    div_map.style.left = left_map;
    document.getElementsByTagName('body')[0].appendChild(div_map);
}*/

function initSnake() {

    var body_snake = [[3,2,'blue'],[2,2,'blue'],[1,2,'blue']];

    showSnake(body_snake);

    moveSnake(body_snake);

}

function initFood() {
    var wid = 10 + 'px';
    var hei = 10 + 'px';
    var pos = 'absolute';
    var x ;
    var xx ;
    var y ;
    var yy ;
    //alert(xx);

    if (food == 0)
    {
        var div_food = document.createElement('div');
        div_food.style.width = wid;
        div_food.style.height = hei;
        div_food.style.position = pos;
        /*div_food.style.left = xx + 'px';
        div_food.style.top = yy + 'px';*/
        div_food.style.backgroundColor = 'red';
        document.getElementById('div_frame').appendChild(div_food);
    }

    x = Math.random().toFixed(2)*90;
    xx = Math.ceil(x)*10;
    y = Math.random().toFixed(2)*60;
    yy = Math.ceil(y)*10;
    div_food.style.left = xx + 'px';
    div_food.style.top = yy + 'px';
    food++;

}



function showSnake(body_snake) {
    var wid = 10 + 'px';
    var hei = 10 + 'px';
    var pos = 'absolute';
   /* var body_snake = [[3,2,'blue'],[2,2,'blue'],[1,2,'blue']];*/



    for(var i=0;i<body_snake.length;i++)
    {
        var div_snake = document.createElement('div');
        div_snake.style.width = wid;
        div_snake.style.height = hei;
        div_snake.style.position = pos;
        div_snake.style.left = body_snake[i][0]*10 + 'px';
        div_snake.style.top = body_snake[i][1]*10 + 'px';
        div_snake.style.backgroundColor = 'red';
        document.getElementById('div_frame').appendChild(div_snake);
    }
    /*div_snake.style.display = 'none';
    document.getElementById('div_frame').appendChild(div_snake);*/
}

function moveSnake(body_snake) {
    var len = body_snake.length;
    body_snake[0][0]+=1;
    var i;
    for(i=1;i<len;i++)
    {
        body_snake[i][0]+=1;
    }
    showSnake(body_snake);

    /*var timee = setInterval('moveSnake()',200);*/

}




