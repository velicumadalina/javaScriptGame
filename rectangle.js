rectangle = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.Draw = function (ctx, color) {
        ctx.fillStyle = color;
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
