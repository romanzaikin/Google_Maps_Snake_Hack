// update the score when pickup a character
ka = function(a, b) {
	
	// add score
	var points = 10;
	Q.b.i += points;
	
	var newScore = parseInt(document.getElementsByClassName("score")[0].innerText) + points;
	document.getElementsByClassName("score")[0].innerText = newScore;
					
    for (var c = g(a.h), d = c.next(); !d.done; d = c.next())
        d = d.value,
        d = {
            x: a.b.x + d.x,
            y: a.b.y + d.y
        },
        G(b, d) === a && E(b, d, null)
};

// renders characters and train
function xa(a, b) {
    a.h += b;
    if (.15 < a.h) {
        a.h %= .15;
        var c = a.b;
        if (c.active && c.w)
            if (0 < c.m)
                c.m--;
            else if (c.o.h) {
                if (pa(c.o, c.b),
                c.g.l) {
                    ka(c.g, c.b);
                    var d = 1
                      , e = -1
                      , f = c.g.g
                      , k = "";
                    A.hasOwnProperty(f) ? (d = 5,
                    e = A[f],
                    k = f) : B.hasOwnProperty(f) ? (d = 10,
                    e = B[f],
                    k = f) : (f = new J(ma(c.g),c.g.g,ja(),.4),
                    c.h.push(f));
                    f = "";
                    0 < e && (f = N(e));
                    c.B(c.i, k, d, f);
					
					// create 30 characters.
					for (i=0; i < 30; i++){
						sa(c);
					}
                    
					c.m += 2
                }
            } else
                c.active = !1,
                c.v()
    }
    a = a.b;
    for (c = 0; c < a.h.length; c++)
        d = a.h[c],
        d.b += b,
        e = d.j(d.b / d.time),
        d.g = {
            x: d.h.x + e.x,
            y: d.h.y + e.y
        },
        d.done && (a.h.splice(c, 1),
        c--)
};


F = function (a, b) {
	// if the train is not close to the borders, keep going straight
	if( 0 < b.x && b.x < a.width-2 && 0 < b.y && b.y < a.height-2 ){
		return true;
	}
	else{		
		// if this is not the head ignore
		if (Q.b.o.b[0].b.x != b.x || Q.b.o.b[0].b.y != b.y){
			return true;
		}				
		
		// game started
		if(!Q.b.next){
			Q.b.next = "d";
		}
		
		// train is in top row
		if (b.y == 0){
			// train is on (Y=0) and (X=0), goin right until we will get to (X=19).
			if (b.x == 0){ 
				O(Q.b, 1);
				Q.b.next = "d"
			}
			
			// train is on (Y=0) and (X=19), going down until we get to (Y=19).
			else if (b.x == 19){
				O(Q.b, 4);
				Q.b.next = "l"
			}
		}		
		
		// train is right-most column
		else if (b.x == 19){
			// train is on (X=19) and (Y=19) going left
			if (b.y == 19 && Q.b.next == "l"){
				O(Q.b, 3);
				Q.b.next = "u";
			}		
			
			// train is on (X=19), going down until we will get to (Y=19)
			// *happens only once in the beginning of the state machine
			else if (Q.b.next == "d" ){
				O(Q.b, 4);
				Q.b.next = "l"
			}
		}
		
		// train is in left-most column, go up and then right
		else if (b.x == 0){
			// train is on (X=0) going up
			if (Q.b.next == "u"){
				O(Q.b, 2);
				Q.b.next = "r"
			}
			
			// train is on (X=0) going right
			else if (Q.b.next == "r"){
				O(Q.b, 1);
				Q.b.next = "ul"
			}
		}
		
		// train is in second to right-most column, go up and then left
		else if (b.x == 18){
			// train is on (X=18) going up
			if (Q.b.next == "ul"){
				O(Q.b, 2);
				Q.b.next = "l"
			}
			
			// train is on (X=18) going left
			else if (Q.b.next == "l"){
				O(Q.b, 3);
				Q.b.next = "u";
			}			
		}
	}

	return true;
};
