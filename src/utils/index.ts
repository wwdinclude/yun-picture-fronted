import { saveAs } from 'file-saver'

/**
 * 格式化文件大小
 * @param size
 */
export const formatSize = (size?: number) => {
  if (!size) return '未知'
  if (size < 1024) return size + ' B'
  if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB'
  return (size / (1024 * 1024)).toFixed(2) + ' MB'
}

/**
 * 下载图片
 * @param url
 * @param fileName
 */
export function downloadImage(url?: string, fileName?: string) {
  if (!url) {
    return
  }
  saveAs(url, fileName)
}

/**
 * 转换为标准 16 进制色值
 *
 * @param input
 */
export function toHexColor(input: string) {

  const colorValue = input.startsWith('0x') ? input.slice(2) : input


  const hexColor = parseInt(colorValue, 16).toString(16).padStart(6, '0')


  return `#${hexColor}`
}

