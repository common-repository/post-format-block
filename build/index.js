!function(){"use strict";var t=window.wp.blocks,e=window.wp.i18n,c=window.wp.element,o=window.wp.primitives,i=(0,c.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,c.createElement)(o.Path,{d:"M20 4H4v1.5h16V4zm-2 9h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3zM4 9.5h9V8H4v1.5zM9 13H6c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3z",fillRule:"evenodd",clipRule:"evenodd"}));const s={name:"post_format",title:(0,e.__)("Post Format"),description:(0,e.__)("Display a post's format"),icon:i,isDefault:!0,attributes:{term:"post_format"},isActive:t=>"post_format"===t.term};(0,t.registerBlockVariation)("core/post-terms",s)}();