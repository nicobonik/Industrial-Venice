// src/components/TimelineMap/FactoryPin.js

/** { Component } FactoryPin
 * @abstract A FactoryPin are the pins displayed on the timeline map on the homepage. Hovering over the pin displays the name of that factory,
 * and clicking on a pin redirects to the page for that factotry.
 * 
 * @param { String || int } id - ID for this factory, i.e. the Factory_ID 
 * @param { String } name - the name of this factory 
 * @param { int || float } left - offset left for this pin
 * @param { int || float } top - offset top for this pin
 * 
 * @exports 
 *      @const { Component } FactoryPin
 */
import { useEffect  } from "react";
import { Link } from 'react-router-dom';

export const FactoryPin = ({id, name, left, top}) => { 
    const markerWidthPx = 20;
    const markerHeightPx = 30;

    // useEffect() => create the popup and render the pin on load 
    useEffect(() => {
        const pin = document.getElementById(`marker-${id}`);

        // Calculate the top margin of the timeline in pixels
        // NOTE: vh in the below formula is the margin in VH
        const marginVH = 5;  // Margin in VH
        const marginPx = (marginVH * window.innerHeight) / 50;

        if(pin) { 
            // Create a new div element for the popup
            const popupElm = document.createElement('div'); 
            popupElm.className = 'pin-popup';  
            popupElm.id = `popup-${id}`;
            popupElm.textContent = name;      
            popupElm.style.display = 'none';    // Hide the popup initially

            // Calculate the popup position
            const popupWidth = popupElm.offsetWidth;
            const popupHeight = popupElm.offsetHeight;
            const popupLeft = left - (popupWidth / 2) + (markerWidthPx / 2);
            const popupTop = top - popupHeight - 10;

            popupElm.style.left = `${popupLeft}px`;
            popupElm.style.top = `calc(${popupTop}px + ${marginPx}px - ${markerHeightPx * 4}px)`;

            // Append the popup element to the document body
            document.getElementById(`pin-container-${id}`).appendChild(popupElm);
            
            // Event listeners to show/hide popups on hover
            // Show the factory name on mouseover
            pin.addEventListener('mouseover', () => {
                document.getElementById(`popup-${id}`).style.display = 'block';
            });

            // Hide the factory name tooltip on mouseout
            pin.addEventListener('mouseout', () => { 
                document.getElementById(`popup-${id}`).style.display= 'none'; 
            });
        }
        
    }, []);

    return(
        <Link to={`/industrial-sites/${id}`} className='timeline-map-link'>
            <div id={`pin-container-${id}`}>
                <img className='factory-pin hidden'
                id={`marker-${id}`}
                src='pin-icon-2.png'
                style={{
                    top: `${top - markerHeightPx}px`,
                    left: `${left - (markerWidthPx / 2)}px`,
                    width: markerWidthPx,
                    height: markerHeightPx,
                    display: 'none'
                }}
                >
                </img>
            </div>
        </Link>
    );

}