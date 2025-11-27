import { visit } from 'unist-util-visit'

export default function rehypeExternalLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'a' && node.properties && node.properties.href) {
        node.properties.target = '_blank'
      }
    })
  }
}