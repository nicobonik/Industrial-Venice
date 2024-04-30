// src/components/TimelineLine.js

/** { Component } TimelineLine
 * @abstract Component rendered on the FactoryTimeline that connects each timeperiod circle with a line and an arrow
 * 
 * @param { String } length - length of the line formatted as a CSS string (e.g. "10px", "5vw", etc)
 * 
 * @exports 
 *    @function TimelineLine 
 */
import '../../css/components/TimelineLine.css';
import TimelineTriangle from './TimelineTriangle';

  export default function TimelineLine({ length }) {
    return (
        <div className='timeline-line' style={{ width: length }}>
            <hr className='timeline-line-hr' ></hr>
            <TimelineTriangle />
        </div>
    );
  }
  