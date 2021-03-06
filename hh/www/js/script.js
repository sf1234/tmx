
  // Code goes here
      d3.select('#rectangle').on('click', function(){ new Rectangle(); });
      d3.select('#remove-all').on('click', function(){ removeAll(); });
      d3.select('#hide-handles').on('click', function(){ hideHandles(); });
      d3.select('#show-handles').on('click', function(){ showHandles(); });

var w = 500, h = 500;
var svg = d3.select('body').append('svg').attr({width: w, height: h});
      // Create and configure the zoom behaviour
      var zoomBehavior = d3.behavior.zoom()
        .scaleExtent([1, 8])
        .on('zoom', function() {

          // Get the zoom event scale and translate vector
          var scale = d3.event.scale,
              translate = d3.event.translate;

          // Translate and scale the group
          grp.attr('transform', function() {

            var s = 'scale(' + scale + ')',
                t = 'translate(' + translate + ')';

            return t + s;
          });

          // Adapts the stroke width to the zoom level
          svg.selectAll('path')
            .style('stroke-width', strokeScale(scale));
        });

      // Bind the zoom behaviour to the SVG container
      svg.call(zoomBehavior);


function removeAll() {
  d3.select('body').select("svg").selectAll('g').remove();
}
/**/
function hideHandles() {

  		d3.selectAll(".pointC").style("display", "none");
}
function showHandles() {

  		d3.selectAll(".pointC").style("display", "inline");
}

/**/

function Rectangle() {

    var self = this, rect, rectData = [], isDown = false, m1, m2, t1, t2, isDrag = false;

    svg.on('mousedown', function() {
        m1 = d3.mouse(this);
        if (!isDown && !isDrag) {
            self.rectData = [ { x: m1[0], y: m1[1] }, { x: m1[0], y: m1[1] } ];
            self.rectangleElement = d3.select('svg').append('g').append('rect').attr('class', 'rectangle').call(dragR);
            self.pointElement1 = svg.append('g').append('circle').attr('class', 'pointC').call(dragC1);
            self.pointElement2 = svg.append('g').append('circle').attr('class', 'pointC').call(dragC2);
            self.pointElement3 = svg.append('g').append('circle').attr('class', 'pointC').call(dragC3);
            self.pointElement4 = svg.append('g').append('circle').attr('class', 'pointC').call(dragC4);
            self.pointElement5 = svg.append('g').append('circle').attr('class', 'pointC').call(dragC5);
            self.pointElement6 = svg.append('g').append('circle').attr('class', 'pointC').call(dragC6);
            self.pointElement7 = svg.append('g').append('circle').attr('class', 'pointC').call(dragC7);
            self.pointElement8 = svg.append('g').append('circle').attr('class', 'pointC').call(dragC8);
            updateRect();
            isDrag = false;
        } else {
            isDrag = true;
        }
        isDown = !isDown;
    })

    .on('mousemove', function() {
        m2 = d3.mouse(this);
        if(isDown && !isDrag) {
            self.rectData[1] = { x: m2[0], y: m2[1] };
            updateRect();
        }
    })
    ;


    function updateRect() {
        rect = d3.select(self.rectangleElement[0][0]);
        console.log(self.rectData);
        var height  = Math.abs(self.rectData[1].y - self.rectData[0].y);
        var width = Math.abs(self.rectData[1].x - self.rectData[0].x);
        rect.attr({
            x: self.rectData[1].x - self.rectData[0].x > 0 ? self.rectData[0].x :  self.rectData[1].x,
            y: self.rectData[1].y - self.rectData[0].y > 0 ? self.rectData[0].y :  self.rectData[1].y,
            width: width,
            height: height
        });
        console.log("height", rect.style("width"));
        var pointNW = d3.select(self.pointElement1[0][0]).data(self.rectData);
        pointNW.attr('r', 5)
              .attr('cx', self.rectData[0].x)
              .attr('cy', self.rectData[0].y);
        var pointSE = d3.select(self.pointElement2[0][0]).data(self.rectData);
        pointSE.attr('r', 5)
              .attr('cx', self.rectData[1].x)
              .attr('cy', self.rectData[1].y);
        var pointNE = d3.select(self.pointElement3[0][0]).data(self.rectData);
        pointNE.attr('r', 5)
              .attr('cx', self.rectData[1].x)
              .attr('cy', self.rectData[0].y);
        var pointSW = d3.select(self.pointElement4[0][0]).data(self.rectData);
        pointSW.attr('r', 8)
              .attr('cx', self.rectData[0].x)
              .attr('cy', self.rectData[1].y);
        var pointE = d3.select(self.pointElement5[0][0]).data(self.rectData);
        pointE.attr('r', 5)
              .attr('cx', self.rectData[0].x)
              .attr('cy', self.rectData[1].y- (height/2));

        var pointW = d3.select(self.pointElement6[0][0]).data(self.rectData);
        pointW.attr('r', 5)
              .attr('cx', self.rectData[1].x)
              .attr('cy', self.rectData[0].y+ (height/2));

        var pointN = d3.select(self.pointElement7[0][0]).data(self.rectData);
        pointN.attr('r', 5)
              .attr('cx', self.rectData[0].x + (width/2))
              .attr('cy', self.rectData[0].y);

        var pointS = d3.select(self.pointElement8[0][0]).data(self.rectData);
        pointS.attr('r', 5)
              .attr('cx', self.rectData[0].x + (width/2))
              .attr('cy', self.rectData[1].y);

    }

    var dragR = d3.behavior.drag().on('drag', dragRect);

    function dragRect() {
        var e = d3.event;
        console.log(self.rectData)
        for(var i = 0; i < self.rectData.length; i++){
            d3.select(self.rectangleElement[0][0])
                .attr('x', self.rectData[i].x += e.dx )
                .attr('y', self.rectData[i].y += e.dy );
        }
        rect.style('cursor', 'move');
        updateRect();
    }

    var dragC1 = d3.behavior.drag().on('drag', dragPointNE);
    var dragC2 = d3.behavior.drag().on('drag', dragPointSE);
    var dragC3 = d3.behavior.drag().on('drag', dragPointNW);
    var dragC4 = d3.behavior.drag().on('drag', dragPointSW);
    var dragC5 = d3.behavior.drag().on('drag', dragPointE);
    var dragC6 = d3.behavior.drag().on('drag', dragPointW);
    var dragC7 = d3.behavior.drag().on('drag', dragPointN);
    var dragC8 = d3.behavior.drag().on('drag', dragPointS);

    function dragPointNE() {
        var e = d3.event;
        d3.select(self.pointElement1[0][0])
            .attr('cx', function(d) { return d.x += e.dx })
            .attr('cy', function(d) { return d.y += e.dy });
        updateRect();
    }

    function dragPointSE() {
        var e = d3.event;
        d3.select(self.pointElement2[0][0])
            .attr('cx', self.rectData[1].x += e.dx )
            .attr('cy', self.rectData[1].y += e.dy );
        updateRect();
    }

    function dragPointNW() {
        var e = d3.event;
        d3.select(self.pointElement3[0][0])
            .attr('cx', self.rectData[1].x += e.dx )
            .attr('cy', self.rectData[0].y += e.dy );
        updateRect();
    }

    function dragPointSW() {
        var e = d3.event;
        d3.select(self.pointElement4[0][0])
            .attr('cx', self.rectData[0].x += e.dx )
            .attr('cy', self.rectData[1].y += e.dy );
        updateRect();
    }
    function dragPointE() {
        var e = d3.event;
        d3.select(self.pointElement5[0][0])
            .attr('cx', self.rectData[0].x += e.dx )
          //  .attr('cy', self.rectData[1].y += e.dy );
        updateRect();
    }

    function dragPointW() {
        var e = d3.event;
        d3.select(self.pointElement6[0][0])
            .attr('cx', self.rectData[1].x += e.dx )
          //  .attr('cy', self.rectData[1].y += e.dy );
        updateRect();
    }
    function dragPointN() {
        var e = d3.event;
        d3.select(self.pointElement7[0][0])
            //.attr('cx', self.rectData[1].x += e.dx )
            .attr('cy', self.rectData[0].y += e.dy );
        updateRect();
    }

    function dragPointS() {
        var e = d3.event;
        d3.select(self.pointElement8[0][0])
            //.attr('cx', self.rectData[1].x += e.dx )
            .attr('cy', self.rectData[1].y += e.dy );
        updateRect();
    }

}//end Rectangle
