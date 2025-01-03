import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarView = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null); // Tracks the clicked date
  const [notes, setNotes] = useState({}); // Stores notes for each date
  const [currentNote, setCurrentNote] = useState(''); // Tracks the current note being added

  // Handles the click event on a date
  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr); // Sets the clicked date
    setCurrentNote(notes[arg.dateStr] || ''); // Loads existing notes if any
  };

  // Saves the note for the selected date
  const handleSaveNote = () => {
    setNotes((prevNotes) => ({ ...prevNotes, [selectedDate]: currentNote })); // Updates notes
    setSelectedDate(null); // Closes the form
  };

  // Enhanced events to include user-added notes
  const enhancedEvents = [
    ...events,
    ...Object.keys(notes).map((date) => ({
      title: notes[date],
      date: date,
      color: 'blue', // Notes will appear in blue
    })),
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#2c4a7c] mb-6">Calendar</h2>

      {/* Legend for Color Indications */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: 'coral',
              borderRadius: '3px',
            }}
          ></div>
          <span>Past Communication</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: 'green',
              borderRadius: '3px',
            }}
          ></div>
          <span>Upcoming Communication</span>
        </div>
      </div>

      {/* FullCalendar Component */}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={enhancedEvents}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        height="auto"
        eventDisplay="block"
        dateClick={handleDateClick} // Handles date clicks
      />

      {/* Add Notes Modal */}
      {selectedDate && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setSelectedDate(null)} // Close modal on outside click
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h3 className="text-xl font-bold mb-4 text-center">Add Notes</h3>
            <textarea
              className="w-full h-32 p-2 border rounded mb-4"
              placeholder="Notes here..."
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
            ></textarea>
            <button
              className="bg-[#2c4a7c] text-white px-4 py-2 rounded hover:bg-[#4d7cc7] w-full"
              onClick={handleSaveNote}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
