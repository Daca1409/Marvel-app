import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export const InfoHero = ({ data }) => {
    const [isClicked, setClicked] = useState(false)
    const [comics, setComic] = useState([])


    const toggleClass = () => {
        setClicked(!isClicked)
    }

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://gateway.marvel.com:443/v1/public/comics?characters=${id}&apikey=3eec03e68cfb3b6f845fd2e32f2a66d2&hash=2ac7be16fabde41da28d7b8f07843306`)
            .then(response => response.json())
            .then((data) => {
                setComic(data.data.results)
                console.log(data.data.results)
            });
    }, [id]);

    const hero = data.find((e) => e.id === parseInt(id))
    if (!hero) {
        return null;
    }

    return (<div className='info-hero'>
        <div className='left'> <div className={isClicked ? 'full-img' : 'info-img '} onClick={toggleClass}>
            <img src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`} alt="no-img"></img></div>
            {comics.map((comic) => (<div className='comic-img'><img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="no-img"></img></div>))}
        </div>
        <div className='right info'> <h2>{hero?.name}</h2><p>{hero?.description}</p>
            <h4>Comics:</h4>
            <div>{hero?.comics.items.map((item) => {
                return <ul key={item.id}><li>{item.name}</li></ul>
            })}</div>


        </div>

    </div >);
};
