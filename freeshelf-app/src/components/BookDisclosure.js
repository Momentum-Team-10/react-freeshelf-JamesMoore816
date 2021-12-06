import { useState } from 'react'
import BookExpandedInfo from './BookExpandedInfo'

export default function BookDisclosure(props) {
    const {url, publisher, publicationDate, detailedDescription} = props
    const [expanded, setExpanded] = useState(false)

    return (
        <>
        {expanded ? (
                <div>
                    <button className="btn-sm controls"
                    onClick={() => setExpanded(false)}
                    >
                    {`${'\u25BC'} Less information`}
                    </button>
                    <BookExpandedInfo url={url} publisher={publisher} publicationDate={publicationDate} detailedDescription={detailedDescription} />
                    {/* {url ? (
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
                    ) : ''} */}
                </div>
            ) : (
                <button className="btn-sm controls" onClick={() => setExpanded(true)}>
                    {`${'\u25B8'} More information`}
                </button>
            )}
        </>
    )
}