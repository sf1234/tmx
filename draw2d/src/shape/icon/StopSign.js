/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.shape.icon.StopSign

 * See the example:
 *
 *     @example preview small frame
 *     
 *     var icon =  new draw2d.shape.icon.StopSign();
 *     icon.setDimension(150,100);
 *     canvas.add(icon,50,10);
 *     
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.StopSign = draw2d.shape.icon.Icon.extend({
    NAME : "draw2d.shape.icon.StopSign",

    /**
     * 
     * @constructor
     * Creates a new figure element which are not assigned to any canvas.
     * 
     * @param {Object} attr the configuration of the shape
     */
    init: function(attr, setter, getter ) {
      this._super($.extend({width:50,height:50},attr), setter, getter);
    },

    /**
     * @private
     * @returns
     */
    createSet: function() {
        return this.canvas.paper.path("M20.833,2.625H10.167l-7.542,7.542v10.666l7.542,7.542h10.666l7.542-7.542V10.167L20.833,2.625zM23.76,17.145c-0.461,0.432-0.496-0.021-1.151,0.385c-0.655,0.404-1.067,0.844-1.067,0.844l-0.578,0.564c0,0-1.199,1.422-1.59,1.717c-0.392,0.291-0.572,0.166-0.572,0.166c-0.133,0.23-0.641,0.656-1.193,1.025c-0.549,0.371-0.99,1.354-0.99,1.354l-0.208,1.465c0,0-1.597,0.021-3.096-0.293c-1.499-0.314-2.699-0.982-2.699-0.982l0.655-1.451c0,0-0.58-2.225-0.636-3.926c-0.056-1.703,0.572-2.958,0.481-3.37c-0.09-0.412-0.438-1.109-0.523-1.569c-0.083-0.46-0.307-2.036-0.327-2.238c-0.021-0.202-0.28-2.232,0.614-2.204c0.891,0.027,0.648,1.388,0.725,2.246c0.077,0.857,1.13,3.249,1.297,3.123c0.167-0.125-0.056-2.398,0.006-2.838c0.063-0.439,0.182-2.315,0.293-2.747c0.112-0.433,0.105-1.778,0.935-1.66c0.83,0.118,0.606,1.332,0.488,1.813c-0.118,0.48,0.021,1.597,0.07,2.302c0.048,0.704,0.112,2.356,0.112,2.356l0.404-0.042c0,0,0.913-5,0.976-5.439c0.062-0.439,0.182-1.618,0.858-1.472c1.117,0.242,0.516,1.967,0.516,1.967l-0.486,5.509c0,0,0.166,0.224,0.492,0.021c0.33-0.202,1.312-3.25,1.459-3.927c0.146-0.676,0.084-2.678,1.145-2.428c1.059,0.252,0.453,2.755,0.124,4.353c-0.327,1.597-1.03,3.39-1.03,3.39l-0.433,1.631l0.376,0.852l0.412-0.092l0.898-0.717c0,0,0,0,0.614-0.461c0.613-0.46,1.764-0.495,2.044-0.355C23.453,16.154,24.221,16.713,23.76,17.145z");
    }
});

