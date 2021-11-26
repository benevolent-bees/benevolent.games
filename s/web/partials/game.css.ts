
import {noop as css} from "../utils/template-noop.js"

export default () => css`

canvas {
	position: relative;
	width: 100%;
	min-height: 100%;
}

.stats {
	display: inline-block;
	position: fixed;
	top: 0;
	right: 0;
	padding: 0.5em;
	list-style: none;
	font-family: monospace;
}

.stats p {
	background: #1114;
	padding: 0.5em;
	color: white;
}

`
