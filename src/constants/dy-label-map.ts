interface colorMapItem {
  border: string
  background: string
  font: string
}
export const colorMap: Record<string, colorMapItem> = {
  green: {
    border: '00c4b3',
    background: '00c4b3',
    font: 'ffffff'
  },
  greenUnselected: {
    border: 'f2f4fb',
    background: 'f2f4fb',
    font: 'bfc1c5'
  },
  red: {
    border: 'eb8f8f',
    background: 'ffffff',
    font: 'e67c82'
  },
  redUnselected: {
    border: 'f3f3f3',
    background: 'ffffff',
    font: '171717'
  }
}
