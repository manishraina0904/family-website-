import { Layout } from '@/components/Layout';
import { useState, useEffect } from 'react';
import { X, Upload, Search, Filter, Download, Heart, Calendar, MapPin, ArrowLeft, FolderOpen } from 'lucide-react';

// Album structure with multiple photos
const albumsData = [
  {
    id: 1,
    title: "Yagnopavit",
    description: "an ancient Hindu ritual marking a young boy's initiation into spiritual learning and a disciplined, moral life",
    category: "family events",
    coverPhoto: "/family/yag3.JPG",
    date: "2024-02-15",
    location: "Jammu, India",
    photos: [
      {
        id: 1,
        title: "Mansi Raina",
        description: "Mhendiraat",
        file_path: "/family/yag1.JPG",
        date_taken: "2024-02-15",
        photographer: "photographer",
        likes_count: 12
      },
      {
        id: 2,
        title: "Family",
        description: "All family members enjoying the devogn",
        file_path: "/family/yag4.JPG",
        date_taken: "2024-02-15",
        photographer: "photographer",
        likes_count: 25
      },
      {
        id: 3,
        title: "Raina Niwas",
        description: "Quad Family member",
        file_path: "/family/yag5.JPG",
        date_taken: "2024-02-15",
        photographer: "photographer",
        likes_count: 8
      },
      {
        id: 4,
        title: "BRO",
        description: "Main member",
        file_path: "/family/yag2.JPG",
        date_taken: "2024-02-15",
        photographer: "Manish",
        likes_count: 18
      }
    ]
  },
  {
    id: 2,
    title: "Diwali Family Portrait",
    description: "Festive Diwali celebrations with traditional decorations",
    category: "festivals",
    coverPhoto: "/family/diw1.jpg",
    date: "2024-10-31",
    location: "Home",
    photos: [
      {
        id: 5,
        title: "Family Diwali Portrait",
        description: "Traditional family photo in ethnic wear",
        file_path: "/family/diw3.HEIC",
        date_taken: "2024-10-31",
        photographer: "Professional Photogra",
        likes_count: 45
      },
      {
        id: 6,
        title: "Rangoli Design",
        description: "Beautiful rangoli created by Mansi",
        file_path: "/family/diw4.HEIC",
        date_taken: "2024-10-31",
        photographer: "manish",
        likes_count: 22
      },
      {
        id: 7,
        title: "Diya with sister in diwali",
        description: "Traditional diyas lighting up the house",
        file_path: "/family/diw2.jpg",
        date_taken: "2024-10-31",
        photographer: "Manish",
        likes_count: 15
      }
    ]
  },
  {
    id: 3,
    title: "Manish's Academic Excellence",
    description: "Celebrating Manish's academic achievements",
    category: "achievements",
    coverPhoto: "/placeholder.svg",
    date: "2024-03-20",
    location: "Sports Complex",
    photos: [
      {
        id: 8,
        title: "Victory Moment",
        description: "Manish with his academic awards",
        file_path: "/placeholder.svg",
        date_taken: "2024-03-20",
        photographer: "Manish",
        likes_count: 35
      },
      {
        id: 9,
        title: "Team Celebration",
        description: "Basketball team celebrating the win",
        file_path: "/placeholder.svg",
        date_taken: "2024-03-20",
        photographer: "Coach",
        likes_count: 28
      },
      {
        id: 10,
        title: "Family Support",
        description: "Family cheering from the stands",
        file_path: "/placeholder.svg",
        date_taken: "2024-03-20",
        photographer: "Spectator",
        likes_count: 20
      }
    ]
  },
  {
    id: 4,
    title: "Mansi's Professional Achievement",
    description: "Celebrating Mansi's promotion to Senior IP Analyst",
    category: "achievements",
    coverPhoto: "/placeholder.svg",
    date: "2024-04-10",
    location: "School Art Gallery",
    photos: [
      {
        id: 11,
        title: "Art Display",
        description: "Mansi's professional recognition ceremony",
        file_path: "/placeholder.svg",
        date_taken: "2024-04-10",
        photographer: "Babeeta",
        likes_count: 30
      },
      {
        id: 12,
        title: "Artist at Work",
        description: "Mansi receiving her promotion certificate",
        file_path: "/placeholder.svg",
        date_taken: "2024-04-10",
        photographer: "Teacher",
        likes_count: 25
      }
    ]
  },
  {
    id: 5,
    title: "Babeeta's Birthday Celebration",
    description: "Special birthday celebration for Babeeta with cake and decorations",
    category: "birthdays",
    coverPhoto: "/placeholder.svg",
    date: "2024-06-15",
    location: "Home",
    photos: [
      {
        id: 13,
        title: "Birthday Cake",
        description: "Beautiful birthday cake with candles",
        file_path: "/placeholder.svg",
        date_taken: "2024-06-15",
        photographer: "Manish",
        likes_count: 40
      },
      {
        id: 14,
        title: "Blowing Candles",
        description: "Babeeta making a birthday wish",
        file_path: "/placeholder.svg",
        date_taken: "2024-06-15",
        photographer: "Mansi",
        likes_count: 50
      },
      {
        id: 15,
        title: "Gift Opening",
        description: "Opening birthday presents with joy",
        file_path: "/placeholder.svg",
        date_taken: "2024-06-15",
        photographer: "Manish",
        likes_count: 32
      }
    ]
  },
  {
    id: 6,
    title: "Family Cooking Session",
    description: "Everyone cooking together in the kitchen",
    category: "daily",
    coverPhoto: "/placeholder.svg",
    date: "2024-05-08",
    location: "Home Kitchen",
    photos: [
      {
        id: 16,
        title: "Cooking Together",
        description: "Family preparing dinner together",
        file_path: "/placeholder.svg",
        date_taken: "2024-05-08",
        photographer: "Timer Camera",
        likes_count: 22
      },
      {
        id: 17,
        title: "Chef Manish",
        description: "Manish trying his hand at cooking",
        file_path: "/placeholder.svg",
        date_taken: "2024-05-08",
        photographer: "Babeeta",
        likes_count: 18
      }
    ]
  }
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [albums, setAlbums] = useState(albumsData);

  // Like/unlike photo
  const handleLikePhoto = async (photoId: number) => {
    // Update the local state for immediate feedback
    setAlbums(prev => prev.map(album => ({
      ...album,
      photos: album.photos.map(photo =>
        photo.id === photoId
          ? { ...photo, likes_count: (photo.likes_count || 0) + 1 }
          : photo
      )
    })));

    // Update selected image if it's currently displayed
    if (selectedImage && selectedImage.id === photoId) {
      setSelectedImage(prev => ({ ...prev, likes_count: (prev.likes_count || 0) + 1 }));
    }

    // In a real app, you would make an API call here
    try {
      const response = await fetch(`/api/photos/${photoId}/like`, {
        method: 'POST',
      });
      // Handle response...
    } catch (error) {
      console.log('API not available, using local state only');
    }
  };

  // Download photo
  const handleDownloadPhoto = async (photo: any) => {
    // Create a simple download link for placeholder
    const link = document.createElement('a');
    link.href = photo.file_path;
    link.download = `${photo.title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categories = [
    { id: 'all', title: 'All Albums', count: albums.length },
    { id: 'vacations', title: 'Family Vacations', count: albums.filter(a => a.category === 'vacations').length },
    { id: 'festivals', title: 'Festivals & Celebrations', count: albums.filter(a => a.category === 'festivals').length },
    { id: 'birthdays', title: 'Birthday Moments', count: albums.filter(a => a.category === 'birthdays').length },
    { id: 'achievements', title: 'Achievements', count: albums.filter(a => a.category === 'achievements').length },
    { id: 'daily', title: 'Daily Life & Fun', count: albums.filter(a => a.category === 'daily').length },
  ];

  const filteredAlbums = albums.filter(album => {
    const matchesCategory = selectedCategory === 'all' || album.category === selectedCategory;
    const matchesSearch = album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         album.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If viewing an album's photos
  if (selectedAlbum && !selectedImage) {
    return (
      <Layout>
        <div className="py-12 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Album Header */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedAlbum(null)}
                className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4 btn-float text-sm sm:text-base font-semibold"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                Back to Albums
              </button>
              
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 text-glow">
                  {selectedAlbum.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
                  {selectedAlbum.description}
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {new Date(selectedAlbum.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {selectedAlbum.location}
                  </span>
                  <span>
                    📸 {selectedAlbum.photos.length} photos
                  </span>
                </div>
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {selectedAlbum.photos.map((photo: any) => (
                <div
                  key={photo.id}
                  className="bg-card rounded-xl shadow-md overflow-hidden card-float group cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  <div className="relative h-48 bg-warm-200 overflow-hidden">
                    <img
                      src={photo.file_path}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                        <p className="text-sm font-medium">Click to view</p>
                      </div>
                    </div>
                    {/* Like Button */}
                    <button
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white text-red-500 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 btn-bounce"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLikePhoto(photo.id);
                      }}
                    >
                      <Heart className="w-4 h-4" fill="currentColor" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1 text-foreground text-glow">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {photo.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>📸 {photo.photographer}</span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {photo.likes_count || 0}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 text-glow">
              Family Photo Albums
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of family memories organized by special moments and occasions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search albums..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground btn-glow'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 btn-float'
                  }`}
                >
                  {category.title} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Albums Grid */}
          {filteredAlbums.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <p className="text-muted-foreground text-base sm:text-lg">No albums found matching your criteria.</p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {filteredAlbums.map((album) => (
                <div
                  key={album.id}
                  className="bg-card rounded-xl shadow-md overflow-hidden card-float group cursor-pointer"
                  onClick={() => setSelectedAlbum(album)}
                >
                  <div className="relative h-48 bg-warm-200 overflow-hidden">
                    <img
                      src={album.coverPhoto}
                      alt={album.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Album Indicator */}
                    <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <FolderOpen className="w-3 h-3" />
                      {album.photos.length} photos
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                        <p className="text-sm font-medium">Click to explore album</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1 text-foreground text-glow">
                      {album.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {album.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(album.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {album.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Photo Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-3 sm:p-6 z-50">
              <div className="max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-2xl bg-card border border-border/60 shadow-2xl">
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 hover:bg-black/80 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-20 btn-bounce shadow-lg"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Image */}
                  <div className="relative bg-black rounded-t-2xl overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedImage.file_path}
                      alt={selectedImage.title}
                      className="w-full h-auto max-h-[50vh] sm:max-h-[65vh] object-contain"
                    />
                  </div>

                  {/* Image Details */}
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                      <div>
                        <h2 className="text-lg sm:text-2xl font-bold text-foreground mb-1 text-glow">
                          {selectedImage.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {selectedImage.date_taken ? new Date(selectedImage.date_taken).toLocaleDateString() : 'Unknown date'}
                          </span>
                          {selectedImage.photographer && (
                            <span>📸 {selectedImage.photographer}</span>
                          )}
                          <span className="flex items-center gap-1">
                            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                            {selectedImage.likes_count || 0} likes
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <button
                          className="flex-1 sm:flex-none justify-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold btn-bounce inline-flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLikePhoto(selectedImage.id);
                          }}
                        >
                          <Heart className="w-4 h-4" fill="currentColor" />
                          Like
                        </button>
                        <button
                          className="flex-1 sm:flex-none justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold btn-float inline-flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownloadPhoto(selectedImage);
                          }}
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-muted/50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-glow">
              📸 How to Navigate
            </h2>
            <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
              <p>
                <strong>Browse Albums:</strong> Each card represents a photo album containing multiple related photos.
                Click on any album to see all photos inside.
              </p>
              <p>
                <strong>View Photos:</strong> Inside an album, click on any photo to view it in full size with details.
                Use the back button to return to the album view.
              </p>
              <p>
                <strong>Filter & Search:</strong> Use the category filters or search bar to find specific albums quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
