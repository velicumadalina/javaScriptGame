Array.prototype.Remove = function(arg, all)
{
	for (var i = 0; i < this.length; i++)
	{
		if (this[i] == arg)
		{
			this.splice(i, 1);

			if (all == null || !all)
				break;
			else
				i--;
		}
	}
}

Array.prototype.RemoveAt = function(position)
{
	this.splice(position, 1);
}

Array.prototype.Clear = function()
{
	this.length = 0;
}
Array.prototype.InsertAt = function(arg, position)
{
	var arr1 = this.slice(0, position);
	var arr2 = this.slice(position);

	this.Clear();

	for (var i = 0; i < arr1.length; i++)
		this.push(arr1[i]);

	this.push(arg);

	for (var j = 0; j < arr2.length; j++)
		this.push(arr2[j]);
}

Array.prototype.Contains = function(arg)
{
	for (var i = 0; i < this.length; i++)
		if (this[i] == arg)
			return true;

	return false;
}
Array.prototype.Occurs = function(arg)
{
	var counter = 0;

	for (var i = 0; i < this.length; i++)
	{
		if (this[i] == arg)
			counter++;
	}

	return counter;
}

Animation = function(width, height, row, column, limit, imgSrc, fps, columns, rows)
{
	if (fps == null || fps >= 33)
		this.fps = 1;
	else
		this.fps = 33 / fps;
	this.fpsCounter = 0;
	//this.frame = 0;
	this.width = width;
	this.height = height;
	this.rowStart = row;
	this.columnStart = column;
	this.row = row;
	this.column = column;
	this.rows = rows;
	this.columns = columns;
	if (limit == null || limit == 0)
		this.limit = 999999999999;
	else
		this.limit = limit - 1;
	this.limitCount = 0;
	this.image = new Image();
	this.image.src = imgSrc;
	this.position = new Vector2(0);
	this.cropPosition = new Vector2(0);

	this.SetLimit = function(limit)
	{
		this.limit = l - 1;
	};

	this.SetRow = function(num)
	{
		this.row = num;
		this.rowStart = num;

		this.cropPosition.x = this.width * this.column;
		this.cropPosition.y = this.height * this.row;
	};

	this.SetColumn = function(num)
	{
		this.column = num;
		this.columnStart = num;

		this.cropPosition.x = this.width * this.column;
		this.cropPosition.y = this.height * this.row;
	};

	this.Update = function()
	{
		this.cropPosition.x = this.width * this.column;
		this.cropPosition.y = this.height * this.row;

		if (this.columns == null || this.columns == 0)
			this.columns = this.image.width / this.width;
		if (this.rows == null || this.rows == 0)
			this.rows = this.image.height / this.height;
	};

	this.Draw = function(ctx)
	{
		if (this.fpsCounter == 0)
		{
			if (this.limitCount < this.limit)
			{
				this.limitCount++;
				this.column++;

				if (this.column >= this.columns)
				{
					this.row++;
					this.column = 0;

					if (this.row >= this.rows)
					{
						this.row = this.rowStart;
						this.column = this.columnStart;
						this.limitCount = 0;
					}
				}
			}
			else
			{
				this.column = this.columnStart
				this.row = this.rowStart;
				this.limitCount = 0;
			}
		}

		ctx.drawImage(this.image, this.cropPosition.x, this.cropPosition.y, this.width, this.height, this.position.x, this.position.y, this.width, this.height);

		this.fpsCounter++;

		if (this.fpsCounter >= this.fps)
			this.fpsCounter = 0;
	};
};

Vector2 = function (x, y) {
    this.x = 0;
    this.y = 0;
    if (x != null) {
        this.x = x
    }
    if (y != null) {
        this.y = y
    }
    this.previousX = 0;
    this.previousY = 0;
    this.Set = function (x, y) {
        if (x == null && y == null) {
            console.log('no x or y provided')
        } else {
            this.previousX = this.x;
            this.previousY = this.y;
            if (x != null) {

                this.x = x;
            }
            if (x != null) {

                this.y = y;
            }
        }

    };
    this.Normalize = function () {
        let tmp = new Vector2(this.x, this.y);
        let mag = Math.sqrt((tmp.x * tmp.x) + (tmp.y * tmp.y));
        tmp.x = tmp.x / mag;
        tmp.y = tmp.y / mag;
        return tmp;
    };
    this.Distance = function (vec2) {
        if (vec2 != null) {
            return Math.sqrt(((vec2.x - this.x) * (vec2.x - this.x)) + ((this.y - vec2.y) * (this.y - vec2.y)))
        } else {
            return Math.sqrt(((this.previousX - this.x) * (this.previousX - this.x)) + ((this.previousY - this.y) * (this.previousY - this.y)))
        }
    };
    this.hasChanged = function () {
        if (this.x != this.previousX || this.y != this.previousY) return true
    };
    this.difference = function (vec2, invert) {
        let inv = 1;
        if (invert) {
            inv = -1;
        }
        if (vec2 == null) {
            return new Vector2((this.x - this.previousX) * inv, (this.y - this.previousY) * inv)
        } else {
            return new Vector2((this.x - vec2.x) * inv, (this.y - vec2.y) * inv)
        }
    }

};


Color = function (r, g, b, a) {
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = 1;
    if (r != null) {
        this.r = r
    }
    if (g != null) {
        this.g = g
    }
    if (b != null) {
        this.b = b
    }
    if (a != null) {
        this.a = a
    }
    this.toStandard = function (noAlpha) {
        if (noAlpha == null || !noAlpha) {
            return 'rgba(' + this.r + ', ' + this.g + ',' + this.b + ',' + this.a + ')'
        } else {
            return 'rgba(' + this.r + ', ' + this.g + ',' + this.b + ',' + this.a + ')'
        }

    }
};

rectangle = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = new Color(0, 255, 0, 1);
    this.Draw = function (ctx) {
        ctx.fillStyle = this.color.toStandard();
        ctx.fillRect(this.x, this.y, this.width, this.height)
    };
    this.Contains = function (x, y) {
        if (x >= this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height) {
            return true
        } else {
            return false;
        }
    };
    this.intersects = function (shape) {
        let offset = 0;
        if (shape.radius != null) {
            offset = shape.radius
        }

        if (this.Contains(shape.x - offset, shape.y - offset) ||
            this.Contains(shape.x + shape.width - offset, shape.y - offset) ||
            this.Contains(shape.x - offset, shape.y + shape.height - offset) ||
            this.Contains(shape.x + shape.width - offset, shape.y + shape.height - offset)) {
            return true
        } else if (shape.Contains(this.x - offset, this.y - offset) ||
            shape.Contains(this.x + this.width - offset, this.y - offset) ||
            shape.Contains(this.x - offset, this.y + this.height - offset) ||
            shape.Contains(this.x + this.width - offset, this.y + this.height - offset)) {
            return true
        }
        return false

    };
};
