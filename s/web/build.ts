
import {prepareTransformer} from "./utils/prepare-transformer.js"

import styleCss from "./templates/style.css.js"
import playHtml from "./templates/play.html.js"
import indexHtml from "./templates/index.html.js"

const options = {
	debug: process.argv.includes("debug")
}

const transform = prepareTransformer("./x/")
await transform("style.css", styleCss())
await transform("index.html", indexHtml(options))
await transform("play.html", playHtml(options))
