import { heroes } from "../data/heroes"

export const getHeroByPublisher = (publisher) => {
    const publishers = ["Marvel Comics","DC Comics"]
    if(!publishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    } else {
        return (
            heroes.filter((hero)=>(
                hero.publisher === publisher
            ))
        )
    }
}