interface BusinessSchool {
  name: string;
  country: string;
  lat: number;
  lng: number;
  salary: number;
  rank: number;
}

export const businessSchools: BusinessSchool[] = [
  {
    name: "Wharton School",
    country: "US",
    lat: 39.9526,
    lng: -75.1652,
    salary: 241522,
    rank: 1,
  },
  {
    name: "Columbia Business School",
    country: "US",
    lat: 40.8075,
    lng: -73.9626,
    salary: 242747,
    rank: 2,
  },
  {
    name: "IESE Business School",
    country: "Spain",
    lat: 41.3851,
    lng: 2.1734,
    salary: 198584,
    rank: 3,
  },
  // ... continue with all schools
  {
    name: "Eada Business School Barcelona",
    country: "Spain",
    lat: 41.3874,
    lng: 2.1686,
    salary: 101700,
    rank: 100,
  },
];

// Helper function to get color based on rank
export const getRankColor = (rank: number): string => {
  if (rank <= 10) return "#FFD700"; // Gold
  if (rank <= 25) return "#C0C0C0"; // Silver
  if (rank <= 50) return "#CD7F32"; // Bronze
  return "#1c3f5e"; // Default blue
};
