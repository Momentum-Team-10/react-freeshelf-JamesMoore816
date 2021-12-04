import { useState } from 'react'

export default function Book(props) {
    const { title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription } = props
    const [expanded, setExpanded] = useState(false)

    return (
        <div className='book'>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{shortDescription}</p>
            <img className="cover-image" src={coverImageUrl} alt="alt placeholder text"/>
            {expanded ? (
                <div>
                    <button className="btn-sm controls"
                    onClick={() => setExpanded(false)}
                    >
                    Hide expanded information
                    </button>
                    <p><a href={url}>Placeholder URL text</a></p>
                    <p>Published by: {publisher}, {publicationDate}</p>
                    <p>{detailedDescription}</p>
                </div>
            ) : (
                <button className="btn-sm controls" onClick={() => setExpanded(true)}>
                    Show expanded information
                </button>
            )}
        </div>
    )
}