import React from 'react';
import moment from 'moment';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';



export const JournalEntry = ({ id, date, title, body, url }) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();
    
    const handleEntryClick = () => {
        dispatch( activeNote(id,{date, title, body, url}) )
    }


    return (
        <div 
            className="journal__entry animate__animated animate__fadeIn"
            onClick={ handleEntryClick }    
        >
            
        {
            url &&           
            <div
                className="journal__entry-picture animate__animated animate__fadeIn"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
            ></div>
        }

            <div className="journal__entry-body animate__animated animate__fadeIn">
                <p className="journal__entry-tittle">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box animate__animated animate__fadeIn">
                <span> { noteDate.format('dddd') } </span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>
        </div>
    )
}
