import { useState } from 'react'

export default function Book(props) {
    const { title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription } = props
    const [expanded, setExpanded] = useState(false)

    return (
        <div className='book'>
            <img className="cover-image" src={coverImageUrl} alt={`Cover of "${title}"`}/>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{shortDescription}</p>
            
            {expanded ? (
                <div>
                    <button className="btn-sm controls"
                    onClick={() => setExpanded(false)}
                    >
                    {`${'\u25BC'} Less information`}
                    </button>
                    <p><strong>URL: </strong><a href={url}>{url}</a></p>
                    <p><strong>Publisher: </strong>{publisher}</p>
                    <p><strong>Publication date: </strong>{publicationDate}</p>
                    <p><strong>Full description:</strong></p>
                        <p>{detailedDescription}</p>
                </div>
            ) : (
                <button className="btn-sm controls" onClick={() => setExpanded(true)}>
                    {`${'\u25B8'} More information`}
                </button>
            )}
        </div>
    )
}