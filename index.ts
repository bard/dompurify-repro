import { JSDOM } from 'jsdom'
import createDOMPurify from 'dompurify'

const data = '<html><body></body></html>'
const url = 'http://example.com'
const jsdom = new JSDOM(data, { url })

const DOMPurify = createDOMPurify(jsdom.window)
const purifiedHtmlElement = DOMPurify.sanitize(jsdom.window.document.documentElement)
