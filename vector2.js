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
