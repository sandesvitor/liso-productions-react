export default function Images() {
    const Images = []

    for (let i = 1; i <= 15; i++) {
        let art = {
            src: require(`../DATABASE_TEMP/artGallery/art${i}.jpg`),
            imageTitle: `Image ${i}`,
            alt: `Art-${i}`
        }
        Images.push(art)
    }

    return Images
}