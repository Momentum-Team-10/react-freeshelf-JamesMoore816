// import { useState } from 'react'
import BookDisclosure from './BookDisclosure'

export default function Book(props) {
    const { title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription } = props
    // const [expanded, setExpanded] = useState(false)

    return (
        <div className='book'>
            <img className="cover-image" src={coverImageUrl} alt={`Cover of "${title}"`}/>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{shortDescription}</p>
            <BookDisclosure url={url} publisher={publisher} publicationDate={publicationDate} detailedDescription={detailedDescription}/>
            {/* {expanded ? (
                <div>
                    <button className="btn-sm controls"
                    onClick={() => setExpanded(false)}
                    >
                    {`${'\u25BC'} Less information`}
                    </button>
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
                </div>
            ) : (
                <button className="btn-sm controls" onClick={() => setExpanded(true)}>
                    {`${'\u25B8'} More information`}
                </button>
            )} */}
        </div>
    )
}