export default function Thumbnails() {
    const Thumbnails = []

    for (let i = 1; i <= 18; i++) {
        let thumb = { src: require(`../DATABASE_TEMP/thumbnails/thumb${i}.jpg`), alt: `Thumbnail-${i}` }
        Thumbnails.push(thumb)
    }

    return Thumbnails
}
