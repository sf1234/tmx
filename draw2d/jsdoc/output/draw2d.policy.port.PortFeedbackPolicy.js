Ext.data.JsonP.draw2d_policy_port_PortFeedbackPolicy({"tagname":"class","name":"draw2d.policy.port.PortFeedbackPolicy","autodetected":{},"files":[{"filename":"PortFeedbackPolicy.js","href":"PortFeedbackPolicy.html#draw2d-policy-port-PortFeedbackPolicy"}],"author":[{"tagname":"author","name":"Andreas Herz","email":null}],"extends":"draw2d.policy.figure.DragDropEditPolicy","members":[{"name":"constructor","tagname":"method","owner":"draw2d.policy.port.PortFeedbackPolicy","id":"method-constructor","meta":{}},{"name":"adjustDimension","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-adjustDimension","meta":{}},{"name":"adjustPosition","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-adjustPosition","meta":{"template":true}},{"name":"attr","tagname":"method","owner":"draw2d.policy.EditPolicy","id":"method-attr","meta":{}},{"name":"moved","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-moved","meta":{"template":true}},{"name":"onDrag","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-onDrag","meta":{"template":true}},{"name":"onDragEnd","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-onDragEnd","meta":{"template":true}},{"name":"onDragStart","tagname":"method","owner":"draw2d.policy.figure.DragDropEditPolicy","id":"method-onDragStart","meta":{}},{"name":"onHoverEnter","tagname":"method","owner":"draw2d.policy.port.PortFeedbackPolicy","id":"method-onHoverEnter","meta":{}},{"name":"onHoverLeave","tagname":"method","owner":"draw2d.policy.port.PortFeedbackPolicy","id":"method-onHoverLeave","meta":{}},{"name":"onInstall","tagname":"method","owner":"draw2d.policy.EditPolicy","id":"method-onInstall","meta":{}},{"name":"onRightMouseDown","tagname":"method","owner":"draw2d.policy.figure.FigureEditPolicy","id":"method-onRightMouseDown","meta":{"template":true}},{"name":"onUninstall","tagname":"method","owner":"draw2d.policy.EditPolicy","id":"method-onUninstall","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-draw2d.policy.port.PortFeedbackPolicy","short_doc":"Base class for all port feedback policies. ...","component":false,"superclasses":["draw2d.policy.EditPolicy","draw2d.policy.figure.FigureEditPolicy","draw2d.policy.figure.DragDropEditPolicy"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='docClass'>draw2d.policy.EditPolicy</a><div class='subclass '><a href='#!/api/draw2d.policy.figure.FigureEditPolicy' rel='draw2d.policy.figure.FigureEditPolicy' class='docClass'>draw2d.policy.figure.FigureEditPolicy</a><div class='subclass '><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='docClass'>draw2d.policy.figure.DragDropEditPolicy</a><div class='subclass '><strong>draw2d.policy.port.PortFeedbackPolicy</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/PortFeedbackPolicy.html#draw2d-policy-port-PortFeedbackPolicy' target='_blank'>PortFeedbackPolicy.js</a></div></pre><div class='doc-contents'><p>Base class for all port feedback policies. Used for grow, highlight or\nother decorations during drag&amp;drop and connecting of ports.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.port.PortFeedbackPolicy'>draw2d.policy.port.PortFeedbackPolicy</span><br/><a href='source/PortFeedbackPolicy.html#draw2d-policy-port-PortFeedbackPolicy-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.policy.port.PortFeedbackPolicy-method-constructor' class='name expandable'>draw2d.policy.port.PortFeedbackPolicy</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.policy.port.PortFeedbackPolicy\" rel=\"draw2d.policy.port.PortFeedbackPolicy\" class=\"docClass\">draw2d.policy.port.PortFeedbackPolicy</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.policy.port.PortFeedbackPolicy\" rel=\"draw2d.policy.port.PortFeedbackPolicy\" class=\"docClass\">draw2d.policy.port.PortFeedbackPolicy</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.figure.DragDropEditPolicy-method-constructor\" rel=\"draw2d.policy.figure.DragDropEditPolicy-method-constructor\" class=\"docClass\">draw2d.policy.figure.DragDropEditPolicy.constructor</a></p></div></div></div><div id='method-adjustDimension' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-adjustDimension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-adjustDimension' class='name expandable'>adjustDimension</a>( <span class='pre'>figure, w, h</span> ) : <a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a><span class=\"signature\"></span></div><div class='description'><div class='short'>ensure that the dimension didn't goes outside the given restrictions ...</div><div class='long'><p>ensure that the dimension didn't goes outside the given restrictions</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>w</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>h</span> : number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a></span><div class='sub-desc'><p>the constraint position of the figure</p>\n</div></li></ul></div></div></div><div id='method-adjustPosition' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-adjustPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-adjustPosition' class='name expandable'>adjustPosition</a>( <span class='pre'>figure, x, [y]</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Adjust the coordinates to the rectangle/region of this constraint. ...</div><div class='long'><p>Adjust the coordinates to the rectangle/region of this constraint.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : Number|<a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : number (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'><p>the constraint position of the figure</p>\n</div></li></ul></div></div></div><div id='method-attr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-attr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-attr' class='name expandable'>attr</a>( <span class='pre'>name, [value]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Read or set object attributes. ...</div><div class='long'><p>Read or set object attributes.<br>\nWhen no value is given, reads specified attribute from the element.<br>\nWhen value is given, sets the attribute to that value.\nMultiple attributes can be set by passing an object with name-value pairs.</p>\n        <p>Available since: <b>5.3.2</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String/Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-moved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-moved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-moved' class='name expandable'>moved</a>( <span class='pre'>canvas, figure</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback if the figure has moved ...</div><div class='long'><p>Callback if the figure has moved</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul></div></div></div><div id='method-onDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-onDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDrag' class='name expandable'>onDrag</a>( <span class='pre'>canvas, figure</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called by the framework during drag a figure. ...</div><div class='long'><p>Called by the framework during drag a figure.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul></div></div></div><div id='method-onDragEnd' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-onDragEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDragEnd' class='name expandable'>onDragEnd</a>( <span class='pre'>canvas, figure, x, y, shiftKey, ctrlKey</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called by the framework if the drag drop operation ends. ...</div><div class='long'><p>Called by the framework if the drag drop operation ends.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>the x-coordinate of the mouse up event</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>the y-coordinate of the mouse up event</p>\n</div></li><li><span class='pre'>shiftKey</span> : Boolean<div class='sub-desc'><p>true if the shift key has been pressed during this event</p>\n</div></li><li><span class='pre'>ctrlKey</span> : Boolean<div class='sub-desc'><p>true if the ctrl key has been pressed during the event</p>\n</div></li></ul></div></div></div><div id='method-onDragStart' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-onDragStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDragStart' class='name expandable'>onDragStart</a>( <span class='pre'>canvas, figure, x, y, shiftKey, ctrlKey</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the framework if the related shape has init a drag&amp;drop\noperation\n\nThe Policy can send a veto to preven...</div><div class='long'><p>Called by the framework if the related shape has init a drag&amp;drop\noperation</p>\n\n<p>The Policy can send a veto to prevent the DragDrop operation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>the x-coordinate of the mouse up event</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>the y-coordinate of the mouse up event</p>\n</div></li><li><span class='pre'>shiftKey</span> : Boolean<div class='sub-desc'><p>true if the shift key has been pressed during this event</p>\n</div></li><li><span class='pre'>ctrlKey</span> : Boolean<div class='sub-desc'><p>true if the ctrl key has been pressed during the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>return <b>false</b> to send a veto to the drag operation</p>\n</div></li></ul></div></div></div><div id='method-onHoverEnter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.port.PortFeedbackPolicy'>draw2d.policy.port.PortFeedbackPolicy</span><br/><a href='source/PortFeedbackPolicy.html#draw2d-policy-port-PortFeedbackPolicy-method-onHoverEnter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.port.PortFeedbackPolicy-method-onHoverEnter' class='name expandable'>onHoverEnter</a>( <span class='pre'>canvas, draggedFigure, hoverFigure</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called if the dragged port hove another port ...</div><div class='long'><p>Called if the dragged port hove another port</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'>\n</div></li><li><span class='pre'>draggedFigure</span> : <a href=\"#!/api/draw2d.Port\" rel=\"draw2d.Port\" class=\"docClass\">draw2d.Port</a><div class='sub-desc'>\n</div></li><li><span class='pre'>hoverFigure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onHoverLeave' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.port.PortFeedbackPolicy'>draw2d.policy.port.PortFeedbackPolicy</span><br/><a href='source/PortFeedbackPolicy.html#draw2d-policy-port-PortFeedbackPolicy-method-onHoverLeave' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.port.PortFeedbackPolicy-method-onHoverLeave' class='name expandable'>onHoverLeave</a>( <span class='pre'>canvas, draggedFigure, hoverFigure</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired if the dragged figures leaves the hover figure ...</div><div class='long'><p>Fired if the dragged figures leaves the hover figure</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'>\n</div></li><li><span class='pre'>draggedFigure</span> : <a href=\"#!/api/draw2d.Port\" rel=\"draw2d.Port\" class=\"docClass\">draw2d.Port</a><div class='sub-desc'>\n</div></li><li><span class='pre'>hoverFigure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>host</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the host if the policy has been installed. ...</div><div class='long'><p>Called by the host if the policy has been installed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>host</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a>|<a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRightMouseDown' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.FigureEditPolicy' rel='draw2d.policy.figure.FigureEditPolicy' class='defined-in docClass'>draw2d.policy.figure.FigureEditPolicy</a><br/><a href='source/FigureEditPolicy.html#draw2d-policy-figure-FigureEditPolicy-method-onRightMouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.FigureEditPolicy-method-onRightMouseDown' class='name expandable'>onRightMouseDown</a>( <span class='pre'>figure, x, y, shiftKey, ctrlKey</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called if the user press the right mouse on the figure. ...</div><div class='long'><p>Called if the user press the right mouse on the figure.<br>\nYou can either override the \"onContextMenu\" method of the figure or install an editor policy and override this method.\nBooth is valid and possible.</p>\n        <p>Available since: <b>4.4.0</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a>|<a href=\"#!/api/draw2d.shape.basic.Line\" rel=\"draw2d.shape.basic.Line\" class=\"docClass\">draw2d.shape.basic.Line</a><div class='sub-desc'><p>the figure below the mouse</p>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>the x-coordinate of the mouse down event</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>the y-coordinate of the mouse down event</p>\n</div></li><li><span class='pre'>shiftKey</span> : Boolean<div class='sub-desc'><p>true if the shift key has been pressed during this event</p>\n</div></li><li><span class='pre'>ctrlKey</span> : Boolean<div class='sub-desc'><p>true if the ctrl key has been pressed during the event</p>\n</div></li></ul></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>host</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the host if the policy has been uninstalled. ...</div><div class='long'><p>Called by the host if the policy has been uninstalled.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>host</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a>|<a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});