export default function BookExpandedInfo(props) {
    const {url, publisher, publicationDate, detailedDescription} = props

    return (
        <>
            {url ? (
            <p><strong>URL: </strong><a href={url}>{url}</a></p>
            ) : ''}
            {publisher ? (
            <p><strong>Publisher: </strong>{publisher}</p>
            ) : ''}
            {publicationDate ? (
            <p><strong>Publication date: </strong>{publicationDate}</p>
            ) : ''}
            {detailedDescription ? (
            <div>
                <p><strong>Full description:</strong></p>
                <p>{detailedDescription}</p>
            </div>
            ) : ''}
        </>
    )
}