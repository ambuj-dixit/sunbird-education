// SAMPLE ACADEMIC CALENDAR DATA - Replace with your actual academic calendar

export interface CalendarEvent {
  month: string;
  events: {
    date: string;
    title: string;
    description?: string;
    type: "holiday" | "exam" | "event" | "activity";
  }[];
}

// Academic year starts in April (Indian school system)
export const academicCalendar: CalendarEvent[] = [
  {
    month: "April 2024",
    events: [
      { date: "April 1", title: "New Academic Session Begins", type: "event" },
      { date: "April 14", title: "Ambedkar Jayanti (Holiday)", type: "holiday" },
      { date: "April 21", title: "Ramadan Eid (Holiday)", type: "holiday" },
    ],
  },
  {
    month: "May 2024",
    events: [
      { date: "May 1", title: "Labour Day (Holiday)", type: "holiday" },
      { date: "May 23", title: "Buddha Purnima (Holiday)", type: "holiday" },
      { date: "May 27-31", title: "First Term Unit Test I", type: "exam" },
    ],
  },
  {
    month: "June 2024",
    events: [
      { date: "June 17", title: "Eid ul-Adha (Holiday)", type: "holiday" },
      { date: "June 1-15", title: "Summer Vacation", type: "holiday" },
    ],
  },
  {
    month: "July 2024",
    events: [
      { date: "July 17", title: "Muharram (Holiday)", type: "holiday" },
      { date: "July 22-26", title: "First Term Examination", type: "exam" },
    ],
  },
  {
    month: "August 2024",
    events: [
      { date: "August 15", title: "Independence Day Celebration", type: "event" },
      { date: "August 26", title: "Janmashtami (Holiday)", type: "holiday" },
      { date: "August 5-9", title: "Parent-Teacher Meeting", type: "activity" },
    ],
  },
  {
    month: "September 2024",
    events: [
      { date: "September 5", title: "Teachers' Day Celebration", type: "event" },
      { date: "September 16", title: "Milad un-Nabi (Holiday)", type: "holiday" },
      { date: "September 23-27", title: "Second Term Unit Test I", type: "exam" },
    ],
  },
  {
    month: "October 2024",
    events: [
      { date: "October 2", title: "Gandhi Jayanti (Holiday)", type: "holiday" },
      { date: "October 12", title: "Dussehra (Holiday)", type: "holiday" },
      { date: "October 13-23", title: "Dussehra Break", type: "holiday" },
      { date: "October 31", title: "Diwali (Holiday)", type: "holiday" },
    ],
  },
  {
    month: "November 2024",
    events: [
      { date: "November 1-3", title: "Diwali Break", type: "holiday" },
      { date: "November 14", title: "Children's Day Celebration", type: "event" },
      { date: "November 25-29", title: "Second Term Examination", type: "exam" },
    ],
  },
  {
    month: "December 2024",
    events: [
      { date: "December 2-6", title: "Parent-Teacher Meeting", type: "activity" },
      { date: "December 25", title: "Christmas (Holiday)", type: "holiday" },
      { date: "December 26-31", title: "Winter Break", type: "holiday" },
    ],
  },
  {
    month: "January 2025",
    events: [
      { date: "January 1", title: "New Year (Holiday)", type: "holiday" },
      { date: "January 14", title: "Makar Sankranti (Holiday)", type: "holiday" },
      { date: "January 26", title: "Republic Day Celebration", type: "event" },
    ],
  },
  {
    month: "February 2025",
    events: [
      { date: "February 3-7", title: "Annual Examination Pre-Board", type: "exam" },
      { date: "February 19", title: "Maha Shivaratri (Holiday)", type: "holiday" },
      { date: "February 24-28", title: "Annual Sports Week", type: "activity" },
    ],
  },
  {
    month: "March 2025",
    events: [
      { date: "March 1-15", title: "Annual Board Examinations", type: "exam" },
      { date: "March 14", title: "Holi (Holiday)", type: "holiday" },
      { date: "March 20", title: "Annual Day Function", type: "event" },
      { date: "March 31", title: "Result Declaration", description: "Academic session ends", type: "event" },
    ],
  },
];

// For downloadable PDF placeholder
export const calendarPdfUrl = "/downloads/academic-calendar-2024-25.pdf"; // SAMPLE: Replace with actual PDF
