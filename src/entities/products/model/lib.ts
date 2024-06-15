function transliterate(text: string) {
  const cyrillicToLatinMap = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'kh',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ъ: '',
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'yu',
    я: 'ya'
  }

  return text
    .split('')
    .map(
      (char: string) =>
        cyrillicToLatinMap[char as keyof typeof cyrillicToLatinMap] || char
    )
    .join('')
}

export function generateSlug(name: string) {
  let slug = transliterate(name.toLowerCase())

  slug = slug.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  slug = slug.replace(/^-+|-+$/g, '')

  return slug
}
