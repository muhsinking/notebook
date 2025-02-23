import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/links.scss"
import { Date, getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"

interface Options {
  title: string
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  title: "",
})

export default ((userOpts?: Partial<Options>) => {
  function Links({ allFiles, fileData, displayClass, cfg }: QuartzComponentProps) {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    return (
      <div class={`links ${displayClass ?? ""}`}>
        <h4>Folders</h4>
        <ul>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/essays/">Essays</a></h3>
            
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/notes/">Notes</a></h3>
            
          </li>
          <li>
            <h3 style={{marginTop: 0, marginBottom: 0}}><a href="/lists/">Lists</a></h3>
            
          </li>
        </ul>
      </div>
    )
  }

  Links.css = style
  return Links
}) satisfies QuartzComponentConstructor