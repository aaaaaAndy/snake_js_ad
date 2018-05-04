/**
 * Created by yuan.wang on 2017/7/24.
 */
var food;
var snake;
var timmm;
var scoree=0;

/*
* 初始化函数，页面已加载就会执行
* */
function proInit() {

    var speed = 200;
    food = new Food();
    food.show();

    snake = new Snake();
    snake.show();
    /*snake.move();*/

    timmm = setInterval('snake.move()',speed);

    document.onkeydown = function (event) {
        var ek = event.keyCode || window.event.keyCode;
        snake.setDir(ek);
    }

}

/*
* 食物类
* */
function Food() {
    this.width = 10 + 'px';
    this.height = 10 + 'px';
    this.position = 'absolute';
    this._food = null;
    this.x = 0;
    this.xx = 20;
    this.y = 0;
    this.yy = 30;

    this.show = function () {
        if (this._food == null) {

            this._food = document.createElement('div');

            this._food.style.width = this.width;
            this._food.style.height = this.height;
            this._food.style.position = this.position;
            /*div_food.style.left = xx + 'px';
             div_food.style.top = yy + 'px';*/
            this._food.style.backgroundColor = 'red';
            document.getElementById('div_frame').appendChild(this._food);
        }

        this.x = Math.random().toFixed(2) * 90;
        this.xx = Math.ceil(this.x) * 10;

        this.y = Math.random().toFixed(2) * 60;
        this.yy = Math.ceil(this.y) * 10;

        this._food.style.left = this.xx + 'px';
        this._food.style.top = this.yy + 'px';
    };
}

/*
* 蛇类*/
function Snake() {
    this.width = 10 + 'px';
    this.height = 10 + 'px';
    this.position = 'absolute';
    this.body_snake = [[3,1,'red',null],[2,1,'red',null],[1,1,'red',null]];
    this.dir = 'right';

    this.show = function () {
        /*for(var i=0;i<this.body_snake.length;i++) {*/
        for(var i=0;i<this.body_snake.length;i++) {
            if (this.body_snake[i][3] == null) {
                this.body_snake[i][3] = document.createElement('div');
                this.body_snake[i][3].style.width = this.width;
                this.body_snake[i][3].style.height = this.height;
                this.body_snake[i][3].style.position = this.position;
                this.body_snake[i][3].style.backgroundColor = 'red';
                document.getElementById('div_frame').appendChild(this.body_snake[i][3]);
            }
            this.body_snake[i][3].style.left = this.body_snake[i][0] * 10 + 'px';
            this.body_snake[i][3].style.top = this.body_snake[i][1] * 10 + 'px';
        }
    }
    
    this.move = function () {
        var len = this.body_snake.length;
        var i = 1;

        for(i=(len-1);i>0;i--)
        {
            this.body_snake[i][0] = this.body_snake[i-1][0];
            this.body_snake[i][1] = this.body_snake[i-1][1];
        }
        switch (this.dir)
        {
            case 'up':
                this.body_snake[0][1]--;
                break;
            case 'down':
                this.body_snake[0][1]++;
                break;
            case 'left':
                this.body_snake[0][0]--;
                break;
            case 'right':
                this.body_snake[0][0]++;
        }
        if (this.body_snake[0][0]*10 == food.xx && this.body_snake[0][1]*10 == food.yy)
        {
            /*alert('any');*/
            var x = this.body_snake[len-1][0]*10;
            var y = this.body_snake[len-1][1]*10;
            this.body_snake.push([x,y,'red',null]);
            scoree++;
            document.getElementById('sc').innerHTML=scoree;
            food.show();
        }

        if (this.body_snake[0][0]*10<0 || this.body_snake[0][0]*10>900 ||
            this.body_snake[0][1]*10<0 || this.body_snake[0][1]*10>600)
        {
            alert('die');
            clearInterval(timmm);
            return;
        }
        for(i=1;i<this.body_snake.length;i++)
        {
            if(this.body_snake[0][0] == this.body_snake[i][0] &&
               this.body_snake[0][1] == this.body_snake[i][1])
            {
                alert('die');
                clearInterval(timmm);
                return;
            }

        }

        this.show();
    }

    this.setDir = function (ek) {
        switch (ek)
        {
            case 38:
                this.dir = 'up';break;
            case 40:
                this.dir = 'down';break;
            case 37:
                this.dir = 'left';break;
            case 39:
                this.dir = 'right';
        }

    }
}
