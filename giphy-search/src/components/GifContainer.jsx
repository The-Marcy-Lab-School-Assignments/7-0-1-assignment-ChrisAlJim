function GifContainer({thingsToRender}) {
    return (
        <ul>
        {
            thingsToRender?.map((thing) => (
            <li key={thing.id}>
                <img src = {`${thing.images.original.url}`}></img>
            </li>
            ))
        }
        </ul>
    )
}

export default GifContainer
