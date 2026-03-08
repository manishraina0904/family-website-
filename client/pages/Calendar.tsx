import { Layout } from '@/components/Layout';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Gift, Heart, Star, MapPin, Clock, Plus } from 'lucide-react';

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  // Fetch events from API
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/events');
      const data = await response.json();
      if (data.success) {
        setEvents(data.events);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  // Create new event
  const handleCreateEvent = async (eventData: any) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      const data = await response.json();
      if (data.success) {
        alert('Event created successfully!');
        fetchEvents(); // Refresh events
        setShowAddEventModal(false);
      } else {
        alert('Error creating event: ' + data.error);
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event');
    }
  };

  // Download iCal file for event
  const handleAddToCalendar = async (eventId: number) => {
    try {
      const response = await fetch(`/api/events/${eventId}/ical`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `event_${eventId}.ics`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        const data = await response.json();
        alert('Error generating calendar file: ' + data.error);
      }
    } catch (error) {
      console.error('Error downloading calendar file:', error);
      alert('Error downloading calendar file');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Use events from API

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getEventsForDate = (day: number | null) => {
    if (!day) return [];

    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-glow">
              Family Calendar
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Birthdays, anniversaries, and special moments throughout the year
            </p>
            <button
              onClick={() => setShowAddEventModal(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold btn-glow inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Event
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl shadow-lg p-6">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors btn-bounce"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-glow">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <button
                    onClick={() => navigateMonth('next')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors btn-bounce"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Week Days */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekDays.map(day => (
                    <div key={day} className="p-3 text-center text-sm font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                {loading ? (
                  <div className="flex items-center justify-center py-20">
                    <div className="text-center">
                      <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading events...</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-7 gap-1">
                    {getDaysInMonth(currentDate).map((day, index) => {
                      const dayEvents = getEventsForDate(day);
                      const hasEvents = dayEvents.length > 0;

                      return (
                        <div
                          key={index}
                          className={`min-h-[80px] p-2 border border-border rounded-lg transition-all duration-200 ${
                            day ? 'hover:bg-muted/50 cursor-pointer' : ''
                          } ${hasEvents ? 'bg-primary/5' : ''}`}
                        >
                          {day && (
                            <>
                              <div className="font-medium text-sm mb-1">{day}</div>
                              <div className="space-y-1">
                                {dayEvents.slice(0, 2).map(event => (
                                  <div
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`text-xs p-1 rounded text-center ${event.color} cursor-pointer hover:opacity-80 transition-opacity`}
                                  >
                                    <span className="mr-1">{event.icon}</span>
                                    {event.title.length > 12 ? event.title.substring(0, 12) + '...' : event.title}
                                  </div>
                                ))}
                                {dayEvents.length > 2 && (
                                  <div className="text-xs text-center text-muted-foreground">
                                    +{dayEvents.length - 2} more
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <div className="bg-card rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-glow flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  {upcomingEvents.map(event => (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors card-hover"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{event.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{event.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {new Date(event.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-card rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-glow">This Year</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">🎂 Birthdays</span>
                    <span className="font-semibold">{events.filter(e => e.event_type === 'birthday').length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">💕 Anniversaries</span>
                    <span className="font-semibold">{events.filter(e => e.event_type === 'anniversary').length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">🎉 Celebrations</span>
                    <span className="font-semibold">{events.filter(e => e.event_type === 'festival').length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">✈️ Vacations</span>
                    <span className="font-semibold">{events.filter(e => e.event_type === 'vacation').length}</span>
                  </div>
                </div>
              </div>

              {/* Family Birthdays */}
              <div className="bg-card rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-glow flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Family Birthdays
                </h3>
                <div className="space-y-3">
                  {events
                    .filter(event => event.event_type === 'birthday')
                    .sort((a, b) => new Date(a.date).getMonth() - new Date(b.date).getMonth())
                    .map(birthday => (
                      <div key={birthday.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <span className="text-2xl">{birthday.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{birthday.person}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(birthday.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Event Modal */}
          {selectedEvent && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-card rounded-xl shadow-2xl max-w-md w-full p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedEvent.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-glow">{selectedEvent.title}</h3>
                      <p className="text-sm text-muted-foreground">{selectedEvent.person}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>

                  {selectedEvent.event_type === 'birthday' && (
                    <div className="bg-primary/10 p-3 rounded-lg text-center">
                      <p className="text-primary font-medium">
                        🎂 Birthday celebration!
                      </p>
                    </div>
                  )}

                  {selectedEvent.event_type === 'anniversary' && (
                    <div className="bg-red-50 p-3 rounded-lg text-center">
                      <p className="text-red-700 font-medium">
                        💕 Anniversary celebration!
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleAddToCalendar(selectedEvent.id)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium btn-glow"
                  >
                    Add to Calendar
                  </button>
                  <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add Event Modal */}
          {showAddEventModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-card rounded-xl shadow-2xl max-w-lg w-full p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-glow">Add New Event</h3>
                  <button
                    onClick={() => setShowAddEventModal(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const eventData = {
                      title: formData.get('title'),
                      description: formData.get('description'),
                      event_type: formData.get('event_type'),
                      person: formData.get('person'),
                      date: formData.get('date'),
                      time: formData.get('time'),
                      location: formData.get('location'),
                      icon: formData.get('icon'),
                      color: formData.get('color'),
                    };
                    handleCreateEvent(eventData);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Title *</label>
                    <input
                      name="title"
                      type="text"
                      required
                      placeholder="Event title"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      name="description"
                      rows={3}
                      placeholder="Event description"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Type *</label>
                      <select
                        name="event_type"
                        required
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select type</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="vacation">Vacation</option>
                        <option value="festival">Festival</option>
                        <option value="milestone">Milestone</option>
                        <option value="sports">Sports</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Person/Family</label>
                      <input
                        name="person"
                        type="text"
                        placeholder="Who is this for?"
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Date *</label>
                      <input
                        name="date"
                        type="date"
                        required
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Time</label>
                      <input
                        name="time"
                        type="time"
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <input
                      name="location"
                      type="text"
                      placeholder="Event location"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Icon (Emoji)</label>
                      <input
                        name="icon"
                        type="text"
                        placeholder="🎉"
                        maxLength={2}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Color</label>
                      <select
                        name="color"
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="bg-blue-100 text-blue-700">Blue</option>
                        <option value="bg-pink-100 text-pink-700">Pink</option>
                        <option value="bg-green-100 text-green-700">Green</option>
                        <option value="bg-orange-100 text-orange-700">Orange</option>
                        <option value="bg-purple-100 text-purple-700">Purple</option>
                        <option value="bg-yellow-100 text-yellow-700">Yellow</option>
                        <option value="bg-red-100 text-red-700">Red</option>
                        <option value="bg-cyan-100 text-cyan-700">Cyan</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium btn-glow"
                    >
                      Create Event
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddEventModal(false)}
                      className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
